<?php
/*
 *  Author: herraizsoto&co.
 *  URL: http://herraizsoto.com/
 *  Custom functions, support, custom post types and more.
 */

 // @ini_set( 'upload_max_size' , '80M' );
 // @ini_set( 'post_max_size', '80M');
 // @ini_set( 'max_execution_time', '500' );

include "lib/media.php";
include "lib/custom_admin.php";
 // include "lib/ajax.php";
 // include "lib/crons.php";
include "lib/main_class.php";
include "lib/template_functions.php";
include "lib/custom_types_and_taxonomies.php";
include "lib/permalinks.php";
include "lib/utils.php";
include "lib/languages.php";
include "lib/counters.php";
include "lib/globals.php";
include "lib/post_cache.php";

 function pr2($content){
   echo "<pre>";
   print_r($content);
   echo "</pre>";
 }


/*------------------------------------*\
	MENUS
\*------------------------------------*/

function register_my_menu() {
    register_nav_menu('new-menu',__( 'Main Menu' ));
}
add_action( 'init', 'register_my_menu' );


/*---------------------------------------------*\
	Remove all embeds
\*---------------------------------------------*/

function remove_wp_embed() {
    if (!is_admin()) {
        wp_deregister_script('wp-embed');
    }
}
add_action( 'wp_enqueue_scripts', 'remove_wp_embed' ); // Add Custom Scripts to wp_head

// Remove the REST API endpoint.
remove_action( 'rest_api_init', 'wp_oembed_register_route' );

// Turn off oEmbed auto discovery.
add_filter( 'embed_oembed_discover', '__return_false' );

// Don't filter oEmbed results.
remove_filter( 'oembed_dataparse', 'wp_filter_oembed_result', 10 );

// Remove oEmbed discovery links.
remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );

// Remove oEmbed-specific JavaScript from the front-end and back-end.
remove_action( 'wp_head', 'wp_oembed_add_host_js' );

/*------------------------------------*\
	Actions + Filters + ShortCodes
\*------------------------------------*/

// Add Actions
add_action( 'wp_enqueue_scripts', 'header_scripts' ); // Add Custom Scripts to wp_head
add_action( 'admin_enqueue_scripts', 'admin_style_enqueue' );
add_action( 'wp', 'define_current_user', 1000 );
add_action( 'template_include', 'define_current_theme_file', 1000 );

// Remove Actions
remove_action('wp_head', 'feed_links_extra', 3); // Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links', 2); // Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action('wp_head', 'wlwmanifest_link'); // Display the link to the Windows Live Writer manifest file.
remove_action('wp_head', 'index_rel_link'); // Index link
remove_action('wp_head', 'parent_post_rel_link', 10, 0); // Prev link
remove_action('wp_head', 'start_post_rel_link', 10, 0); // Start link
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // Display relational links for the posts adjacent to the current post.
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
remove_action('wp_head', 'print_emoji_detection_script', 7 );

// Add Filters
add_filter('body_class', 'add_slug_to_body_class'); // Add slug to body class (Starkers build)
add_filter('the_category', 'remove_category_rel_from_category_list'); // Remove invalid rel attribute
add_filter('post_thumbnail_html', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to thumbnails
add_filter('image_send_to_editor', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to post images

// Remove Filters
remove_filter('the_excerpt', 'wpautop'); // Remove <p> tags from Excerpt altogether

/*------------------------------------*\
	ACF - Advanced Custom Fields
\*------------------------------------*/

// Hide ACF field group menu item
//add_filter('acf/settings/show_admin', '__return_false');

function my_taxonomy_args( $args, $field ) {
    $args['suppress_filters'] = 1;
    return $args;
}
add_filter('acf/fields/taxonomy/wp_list_categories', 'my_taxonomy_args', 10, 2);

function my_acf_init() {
	acf_update_setting('google_api_key', 'AIzaSyAY_ySqqFosWkuqrlRq_jj8Y9S42p80R5c');
  if( function_exists('acf_add_options_page') ) {
		$option_page = acf_add_options_page('General');
	}
}
add_action('acf/init', 'my_acf_init');

/*------------------------------------*\
	WPML
\*------------------------------------*/

define('ICL_DONT_LOAD_LANGUAGES_JS', true);
define('ICL_DONT_LOAD_NAVIGATION_CSS', true);


/*------------------------------------*\
	SEARCH
\*------------------------------------*/

// Join posts and postmeta tables
function cf_search_join( $join ) {
    global $wpdb;
    if ( is_search() ) {
        $join .=' LEFT JOIN '.$wpdb->postmeta. ' ON '. $wpdb->posts . '.ID = ' . $wpdb->postmeta . '.post_id ';
    }
    return $join;
}
add_filter('posts_join', 'cf_search_join' );

// Modify the search query with posts_where
function cf_search_where( $where ) {
    global $pagenow, $wpdb;
    if ( is_search() ) {
        $where = preg_replace(
            "/\(\s*".$wpdb->posts.".post_title\s+LIKE\s*(\'[^\']+\')\s*\)/",
            "(".$wpdb->posts.".post_title LIKE $1) OR (".$wpdb->postmeta.".meta_value LIKE $1)", $where );
    }
    return $where;
}
add_filter( 'posts_where', 'cf_search_where' );

// Prevent duplicates
function cf_search_distinct( $where ) {
    global $wpdb;
    if ( is_search() ) {
        return "DISTINCT";
    }
    return $where;
}
add_filter( 'posts_distinct', 'cf_search_distinct' );
