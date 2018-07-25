<?php

function ifecho($content, $pre = "", $post = ""){
  if(!empty($content)){
    echo $pre.$content.$post;
  }
}

function header_scripts(){
    if (!is_admin()) {
        wp_deregister_script('jquery');
    }
}

function admin_style_enqueue() {
    wp_enqueue_style(
        'admin_style',
        TEMPLATE_DIRECTORY_URI . '/admin.css'
    );
}

global $current_user;

function define_current_user(){
  $uc = getenv('UNDERCON');
  global $main;
  if( $uc == 'true' ){
    $current_user = wp_get_current_user();
    if( empty($_GET['uc']) ){
      if( $current_user->ID == 0 ){
        $url = SITE_PROTOCOL.SITE_URL."/".ICL_LANGUAGE_CODE."/".$main->market."/under-construction?uc=ok";
        header("Location: ".$url);
        die();
      }
    }
  }
}

function define_current_theme_file( $template ) {
  $clean_template = str_replace(".php","",basename($template));
  $GLOBALS['current_theme_template'] = $clean_template;
  return $template;
}

function get_current_template() {
  global $wp_query;
  $post_meta = get_post_meta($wp_query->post->ID,'_wp_page_template',true);
  $template_name = str_replace('.php','',$post_meta);
  if ( $template_name ) return basename($template_name);
  else return false;
}

// Function to change email address
function wpb_sender_email( $original_email_address ) {
    return 'no-replyh@herraizsoto.com';
}
add_filter( 'wp_mail_from', 'wpb_sender_email' );

// Function to change sender name
function wpb_sender_name( $original_email_from ) {
	return SITE_TITLE;
}
add_filter( 'wp_mail_from_name', 'wpb_sender_name' );

// Remove thumbnail width and height dimensions that prevent fluid images in the_thumbnail
function remove_thumbnail_dimensions( $html ){
    $html = preg_replace('/(width|height)=\"\d*\"\s/', "", $html);
    return $html;
}

// Remove invalid rel attribute values in the categorylist
function remove_category_rel_from_category_list($thelist){
    return str_replace('rel="category tag"', 'rel="tag"', $thelist);
}

// Add page slug to body class, love this - Credit: Starkers Wordpress Theme
function add_slug_to_body_class($classes){
    global $post;
    if (is_home()) {
        $key = array_search('blog', $classes);
        if ($key > -1) {
            unset($classes[$key]);
        }
    } elseif (is_page()) {
        $classes[] = sanitize_html_class($post->post_name);
    } elseif (is_singular()) {
        $classes[] = sanitize_html_class($post->post_name);
    }

    return $classes;
}

function trim_texts($s, $length){

  if( strlen($s) > $length ){
    $pos=strpos($s, ' ', $length);
    $def = substr($s,0,$pos );
    $def .= '...';
  }else{
    $def = $s;
  }
  return $def;

}

function m_explode(array $array,$key = ''){
  if( !is_array($array) or $key == '')
    return;
    $output = array();
    foreach( $array as $v ){
      if( !is_object($v) ){
        return;
      }
      $output[] = $v->$key;
    }
  return $output;
}
