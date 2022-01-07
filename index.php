<?php

/*

$current_term = get_queried_object();
// pr2($current_term);
// die();
if( !empty($current_term->post_type) ){
    include 'templates/tpl_'.$current_term->post_type.'.php';
}
if( !empty($current_term->taxonomy) ){
  include 'templates/tpl_'.$current_term->taxonomy.'.php';
}

*/

global $post;
$template_directory_uri = get_template_directory_uri();
$post->template_directory_uri = $template_directory_uri;
$post->fields = get_fields($post->ID);
$post->site_url = get_site_url();

$current_term = get_queried_object();
// pr2($current_term);
// die();
if( !empty($current_term->post_type) ){
    include 'templates/tpl_'.$current_term->post_type.'.php';
}
if( !empty($current_term->taxonomy) ){
  include 'templates/tpl_'.$current_term->taxonomy.'.php';
}
