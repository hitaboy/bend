<?php

class WPML_Upgrade_Media_Duplication_In_Core implements IWPML_Upgrade_Command {

	const DUPLICATE_FEATURED_META_KEY = '_wpml_media_featured';
	const FEATURED_AS_TRANSLATED_META_KEY = '_wpml_featured_image_as_translated';

	/** @var SitePress */
	private $sitepress;

	/** @var WPML_Upgrade_Schema */
	private $upgrade_db;

	/** @var WPML_Upgrade $wpml_upgrade */
	private $wpml_upgrade;

	/** @var wpdb $wpdb */
	private $wpdb;

	/** @var WPML_Media_Attachments_Duplication $media_attachment_duplication */
	private $media_attachment_duplication;

	/**
	 * @var stdClass[] $source_posts posts which were created between 4.0.2 and 4.0.4
	 */
	private $source_posts = array();

	/** @var array $post_thumbnail_map */
	private $post_thumbnail_map;

	public function __construct( array $args ) {
		$this->sitepress    = $args[0];
		$this->upgrade_db   = $args[1];
		$this->wpml_upgrade = $args[2];
		$this->wpdb         = $this->upgrade_db->get_wpdb();
	}

	/**
	 * @return bool
	 */
	public function run_admin() {
		$this->update_global_settings();

		/**
		 * The rest of the upgrade needs to run when all the custom post types are registered
		 */
		add_action( 'init', array( $this, 'deferred_upgrade' ), PHP_INT_MAX );
		return false;
	}

	public function deferred_upgrade() {
		$this->find_posts_altered_between_402_and_404();
		$this->duplicate_missing_attachments();
		$this->duplicate_missing_featured_images();
		$this->cleanup_display_featured_as_translated_meta();
		$this->mark_migration_completed();
	}

	/**
	 * @return bool
	 */
	public function run_ajax() {
		return false;
	}

	/**
	 * @return bool
	 */
	public function run_frontend() {
		return false;
	}

	/**
	 * @return array
	 */
	public function get_results() {
		return array();
	}

	/**
	 * Some posts could have been created between WPML 4.0.2 and WPML 4.0.4
	 * And they would have '_wpml_featured_image_as_translated' but not '_wpml_media_featured'
	 */
	private function find_posts_altered_between_402_and_404() {
		$source_posts_missing_duplicate_featured_meta =
			"SELECT pm.post_id AS ID, pm.meta_value AS duplicate_featured, t.trid, t.element_type FROM {$this->wpdb->postmeta} AS pm
			 LEFT JOIN {$this->wpdb->prefix}icl_translations AS t
			 	ON t.element_id = pm.post_id AND t.element_type LIKE 'post_%'
			 LEFT JOIN {$this->wpdb->postmeta} AS duplicate_featured
				ON duplicate_featured.post_id = pm.post_id AND duplicate_featured.meta_key = '" . self::DUPLICATE_FEATURED_META_KEY . "'
			 WHERE pm.meta_key = '" . self::FEATURED_AS_TRANSLATED_META_KEY . "'
				AND t.source_language_code IS NULL
				AND duplicate_featured.meta_value IS NULL
			";

		$this->source_posts = $this->wpdb->get_results( $source_posts_missing_duplicate_featured_meta );
	}

	private function duplicate_missing_featured_images() {
		foreach ( $this->source_posts as $post ) {

			if ( $post->duplicate_featured == 1 && $this->has_thumbnail( $post->ID ) ) {
				$post->post_type = preg_replace( '/^post_/', '', $post->element_type );
				$this->get_media_attachment_duplication()->duplicate_featured_image_in_post( $post, $this->get_post_thumbnail_map() );
			}

			// Add the meta to the source post and its translations
			$translations = $this->sitepress->get_element_translations( $post->trid, $post->element_type );
			$post_ids     = wp_list_pluck( $translations, 'element_id' );

			$this->wpdb->query(
				$this->wpdb->prepare(
					"INSERT INTO {$this->wpdb->prefix}postmeta ( post_id, meta_key, meta_value )
					 SELECT post_id, '" . self::DUPLICATE_FEATURED_META_KEY . "', %d
			         FROM {$this->wpdb->postmeta} WHERE post_id IN(" . wpml_prepare_in( $post_ids ) . ")
			            AND meta_key = '" . self::FEATURED_AS_TRANSLATED_META_KEY . "'",
					$post->duplicate_featured
				)
			);
		}
	}

	private function has_thumbnail( $post_id ) {
		return (bool) $this->wpdb->get_var(
			$this->wpdb->prepare(
				"SELECT meta_value FROM {$this->wpdb->postmeta} WHERE meta_key = '_thumbnail_id' AND post_id = %d",
				$post_id
			)
		);
	}

	/**
	 * @return array
	 */
	private function get_post_thumbnail_map() {
		if ( ! $this->post_thumbnail_map ) {
			list( $this->post_thumbnail_map ) = $this->get_media_attachment_duplication()->get_post_thumbnail_map();
		}

		return $this->post_thumbnail_map;
	}

	private function duplicate_missing_attachments() {
		$settings = $this->get_media_settings();

		if ( isset( $settings['new_content_settings']['duplicate_media'] )
		     && $settings['new_content_settings']['duplicate_media']
		) {

			foreach ( $this->source_posts as $post ) {

				$attachment_ids = $this->wpdb->get_col(
					$this->wpdb->prepare(
						"SELECT ID FROM {$this->wpdb->posts} WHERE post_type = 'attachment' AND post_parent = %d",
						$post->ID
					)
				);

				foreach ( $attachment_ids as $attachment_id ) {

					foreach ( $this->sitepress->get_active_languages() as $language_code => $active_language ) {
						$this->get_media_attachment_duplication()->create_duplicate_attachment( (int) $attachment_id, (int) $post->ID, $language_code );
					}

				}

				update_post_meta( $post->ID, '_wpml_media_duplicate', true );
			}
		}
	}

	public function update_global_settings() {

		$settings = $this->get_media_settings();
		$settings['new_content_settings']['always_translate_media'] = true;
		$settings['new_content_settings']['duplicate_media']        = true;
		$settings['new_content_settings']['duplicate_featured']     = true;

		update_option( WPML_Media_Duplication_Setup::MEDIA_SETTINGS_OPTION_KEY, $settings );
	}

	private function cleanup_display_featured_as_translated_meta() {
		$this->wpdb->query( "DELETE FROM {$this->wpdb->postmeta} WHERE meta_key = '" . self::FEATURED_AS_TRANSLATED_META_KEY . "'" );
	}

	private function mark_migration_completed() {
		$this->wpml_upgrade->mark_command_as_executed( $this );
	}

	private function get_media_settings() {
		return get_option( WPML_Media_Duplication_Setup::MEDIA_SETTINGS_OPTION_KEY, array() );
	}

	private function get_media_attachment_duplication() {
		global $wpml_language_resolution;

		if ( ! $this->media_attachment_duplication ) {
			$this->media_attachment_duplication = new WPML_Media_Attachments_Duplication(
				$this->sitepress,
				new WPML_Model_Attachments( $this->sitepress, wpml_get_post_status_helper() ),
				$this->wpdb,
				$wpml_language_resolution
			);
		}

		return $this->media_attachment_duplication;
	}
}