<?php

class WPML_Initialize_Language_For_Post_Type {

	private $wpdb;

	public function __construct( wpdb $wpdb ) {
		$this->wpdb = $wpdb;
	}

	public function run( $post_type, $default_language ) {

		do {
			$sql          = "
						SELECT p.ID
						FROM {$this->wpdb->posts} p
						LEFT OUTER JOIN {$this->wpdb->prefix}icl_translations t
							ON t.element_id = p.ID AND t.element_type = CONCAT('post_', p.post_type)
						WHERE p.post_type = %s AND t.translation_id IS NULL
						LIMIT 500
					";
			$sql_prepared = $this->wpdb->prepare( $sql, array( $post_type ) );
			$results      = $this->wpdb->get_col( $sql_prepared );

			if ( $results ) {

				$trid_max = $this->wpdb->get_var( "SELECT MAX(trid) FROM {$this->wpdb->prefix}icl_translations" );

				$query = "INSERT INTO {$this->wpdb->prefix}icl_translations "
				         . '(`element_type`, `element_id`, `trid`, `language_code`, `source_language_code`) VALUES ';

				$first = true;
				foreach ( $results as $id ) {
					if ( ! $first ) {
						$query .= ',';
					}
					$query .= $this->wpdb->prepare(
						'(%s, %d, %d, %s, NULL)',
						'post_' . $post_type, $id, ++ $trid_max, $default_language
					);
					$first = false;
				}
				$this->wpdb->query( $query );
			}
		} while ( $results );
	}
}