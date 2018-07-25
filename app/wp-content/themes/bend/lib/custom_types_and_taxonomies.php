<?php

/*------------------------------------*\
  Add Post Types
\*------------------------------------*/

// WORK POST TYPE
function custom_post_work() {
  $labels = array(
    'name'               => __( 'Works', 'post type general name', 'template'  ),
    'singular_name'      => __( 'Work', 'post type singular name', 'template'  ),
    'add_new'            => __( 'Add work', 'template'  ),
    'add_new_item'       => __( 'Add new work', 'template'  ),
    'edit_item'          => __( 'Edit work', 'template'  ),
    'new_item'           => __( 'New work', 'template'  ),
    'all_items'          => __( 'All the works', 'template'  ),
    'view_item'          => __( 'View work', 'template'  ),
    'search_items'       => __( 'Search works', 'template'  ),
    'not_found'          => __( "Didn't find works", 'template'  ),
    'not_found_in_trash' => __( "Didn't find works", 'template'  ),
    'parent_item_colon'  => '',
    'menu_name'          => 'Works'
  );
  $args = array(
    'labels'        => $labels,
    'description'   => 'Holds our works data',
    'public'        => true,
    'menu_position' => 5,
    'supports'      => array( 'title', 'custom-fields' ),
    'has_archive'   => false,
    'rewrite'       => array( 'slug' => 'works/%work_category%', 'with_front' => false ),
    'exclude_from_search' => true,
    'show_in_nav_menus' => false
  );
  register_post_type( 'work', $args );
}
add_action( 'init', 'custom_post_work' );
$main->post_types[] = 'work';

// WORK CATEGORY TAXONOMY
function custom_category_work() {
  $labels = array(
    'name'              => __( 'Work category', 'template' ),
    'singular_name'     => __( 'Work category', 'template' ),
    'search_items'      => __( 'Search work category', 'template' ),
    'all_items'         => __( 'All work categories', 'template' ),
    'parent_item'       => __( 'Parent work category', 'template' ),
    'parent_item_colon' => __( 'Parent work category:', 'template' ),
    'edit_item'         => __( 'Edit work category', 'template' ),
    'update_item'       => __( 'Update work category', 'template' ),
    'add_new_item'      => __( 'Add new work category', 'template' ),
    'new_item_name'     => __( 'New work category', 'template' ),
    'menu_name'         => __( 'Category', 'template' ),
  );

  $args = array(
    'hierarchical'      => true,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array( 'slug' => 'works', 'with_front' => false )
  );

  register_taxonomy( 'work_category', array( 'post' ), $args );
}
add_action( 'init', 'custom_category_work' );

function wpa_show_permalinks( $post_link, $post ){
    if ( is_object( $post ) && $post->post_type == 'work' ){
        $terms = wp_get_object_terms( $post->ID, 'work_category' );
        if( $terms ){
            return str_replace( '%work_category%' , $terms[0]->slug , $post_link );
        }
    }
    return $post_link;
}
add_filter( 'post_type_link', 'wpa_show_permalinks', 1, 2 );


?>
