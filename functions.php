<?php

add_action('acf/init', 'my_acf_init_block_types');
function my_acf_init_block_types() {

    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

        // register a testimonial block.
        acf_register_block_type(array(
            'name'              => 'mediablock',
            'title'             => __('Media block'),
            'description'       => __('A custom media block block.'),
            'render_template'   => 'templates/blocks/mediablock.php',
            'category'          => 'media',
            'icon'              => 'format-gallery',
            'keywords'          => array( 'media' ),
        ));
    }
}

if ( function_exists('register_sidebar') ){
    add_action( 'init', 'add_widgets' );
}

function add_widgets() {
    $sidebars = [];
    $sidebars[] = (object) array('name' => 'Header 1', 'id' => 'header-1');
    $sidebars[] = (object) array('name' => 'Header 2', 'id' => 'header-2');
    $sidebars[] = (object) array('name' => 'Header 3', 'id' => 'header-3');
    $sidebars[] = (object) array('name' => 'Drawer 1', 'id' => 'drawer-1');
    $sidebars[] = (object) array('name' => 'Drawer 2', 'id' => 'drawer-2');
    $sidebars[] = (object) array('name' => 'Footer 1', 'id' => 'footer-1');
    $sidebars[] = (object) array('name' => 'Footer 2', 'id' => 'footer-2');
    $sidebars[] = (object) array('name' => 'Footer 3', 'id' => 'footer-3');
    foreach( $sidebars as $sidebar){
        register_sidebar(array(
            'name' => __( $sidebar->name, 'bend' ),
            'id' => $sidebar->id,
            'before_widget' => '',
            'after_widget' => '',
            'before_title' => '',
            'after_title' => '',
        ));
    }
}

/*
 *  Author: Pere Esteve.
 *  URL: https://hodiern.com/
 *  Custom functions, custom post types and more.
 */

 // @ini_set( 'upload_max_size' , '80M' );
 // @ini_set( 'post_max_size', '80M');
 // @ini_set( 'max_execution_time', '500' );

 function pr2($content){
   echo "<pre>";
   print_r($content);
   echo "</pre>";
 }

 function ifecho($content, $pre = "", $post = ""){
    if(!empty($content)){
      echo $pre.$content.$post;
    }
  }

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

