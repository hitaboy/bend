<?php

// Hide cropped images from listings
add_filter( 'posts_where', 'devplus_wpquery_where' );
function devplus_wpquery_where( $where ){
    global $current_user;

    if( is_user_logged_in() ){
         // logged in user, but are we viewing the library?
         if( isset( $_POST['action'] ) && ( $_POST['action'] == 'query-attachments' ) ){
            // here you can add some extra logic if you'd want to.
            $where .= ' AND post_author != 0';
        }
    }

    return $where;
}


// CUSTOM FLEXIBLE BLOCK TITLES
function my_acf_flexible_content_layout_title( $title, $field, $layout, $i ) {
  if( $layout['name'] == 'text' ){
    $title = "<small>TEXT</small> ";
  	$text = get_sub_field('title');
  	$title .= '<b>' . $text . '</b>';
  }elseif( $layout['name'] == 'title' ){
    $title = "<small>TITLE</small> ";
  	$text = get_sub_field('title');
  	$title .= '<b>' . $text . '</b>';
  }elseif( $layout['name'] == 'spacer' ){
    $title = "<small>< - - - - - - SPACE - - - - - - ></small> ";
  }elseif( $layout['name'] == 'media' ){
    $title = "<small>MEDIA</small> ";
    $type = get_sub_field('type');
    if( $type == 'one' ){
      $image = get_sub_field('image');
      if(!empty($image)) {
        foreach ($image as $key => $rendition){

        }
      }else{
        $image = get_sub_field('image_1920');
        if(!empty($image)) {
          foreach ($image as $key => $rendition){

          }
        }
      }
    }else if( $type == 'slideshow' ){

    }else if( $type == 'grid' ){

    }
    $title .= '<b>' . $type . '</b>';
    if( !empty($rendition) ){
      $title .= ' <img src="' . $rendition . '" width="80px" / >';
    }
  }else{
    $title = $layout['name'];
  }
	return $title;

}

add_filter('acf/fields/flexible_content/layout_title/name=blocks', 'my_acf_flexible_content_layout_title', 10, 4);

add_filter( 'tiny_mce_before_init', function ($mce_init) {

  $content_css = get_stylesheet_directory_uri() .'/admin.css';

  //Grab existing stylesheets and then add our new $content_css
  if ( isset( $mce_init[ 'content_css' ] ) ) {
    $content_css_new =  $mce_init[ 'content_css' ].','.$content_css;
  }

  $mce_init[ 'content_css' ] = $content_css_new;

  return $mce_init;
});

function add_style_select_buttons( $buttons ) {
    array_unshift( $buttons, 'styleselect' );
    return $buttons;
}
// Register our callback to the appropriate filter
add_filter( 'mce_buttons_2', 'add_style_select_buttons' );

//add custom styles to the WordPress editor
function my_custom_styles( $init_array ) {

    $style_formats = array(
        // These are the custom styles
        array(
            'title' => 'Text gran',
            'block' => 'span',
            'classes' => 'textSize_big',
            'wrapper' => true,
        ),
        array(
            'title' => 'Text normal',
            'block' => 'span',
            'classes' => 'textSize_normal',
            'wrapper' => true,
        ),
        array(
            'title' => 'Text petit',
            'block' => 'span',
            'classes' => 'textSize_small',
            'wrapper' => true,
        ),
    );
    // Insert the array, JSON ENCODED, into 'style_formats'
    $init_array['style_formats'] = json_encode( $style_formats );

    return $init_array;

}
// Attach callback to 'tiny_mce_before_init'
add_filter( 'tiny_mce_before_init', 'my_custom_styles' );

function my_mce4_options( $init ) {

$custom_colours = '
	"ffffff", "Color 1",
	"f7f7f7", "Color 2",
	"ebebeb", "Color 3",
	"d6d6d6", "Color 4",
	"a9a9a9", "Color 5",
	"919191", "Color 6",
	"5E5E5E", "Color 7",
	"414141", "Color 8",
  "161616", "Color 9",
  "000000", "Color 10",
  "5A0600", "Color 11",
  "EAD482", "Color 12",
  "FFC300", "Color 13",
  "E54C41", "Color 14",
  "EBCDC9", "Color 15",
  "74AF9B", "Color 16",
  "49A991", "Color 17",
  "B0CAD0", "Color 18",
  "8EBDC9", "Color 29",
  "5DA9BB", "Color 20",
  "83D8EB", "Color 21"
	';
$init['textcolor_map'] = '['.$custom_colours.']';
$init['textcolor_rows'] = 6; // expand colour grid to 6 rows
return $init;
}
add_filter('tiny_mce_before_init', 'my_mce4_options');

add_action('admin_head', 'disable_icl_metabox',99);
function disable_icl_metabox() {
  global $post;
  if( !empty($post) ){
      remove_meta_box('icl_div_config',$post->posttype,'normal');
  }
};

function my_acf_input_admin_footer() {
?>
<script type="text/javascript">
(function($) {
  acf.add_filter('color_picker_args', function( args, $field ){
  	// do something to args
  	args.palettes = ["#ffffff","#ebebeb","#919191","#5E5E5E","#000000","#5A0600","#EAD482","#FFC300","#E54C41","#EBCDC9","#74AF9B","#49A991","#5DA9BB","#83D8EB"]
  	// return
  	return args;

  });

})(jQuery);
</script>
<?php
}
add_action('acf/input/admin_footer', 'my_acf_input_admin_footer');

/*
function remove_custom_taxonomy() {
	remove_meta_box( 'marketsdiv', 'product', 'side' );

        // $custom_taxonomy_slug is the slug of your taxonomy, e.g. 'genre' )
        // $custom_post_type is the "slug" of your post type, e.g. 'movies' )
}
add_action( 'admin_menu', 'remove_custom_taxonomy' );

show_admin_bar(false);
*/

/*------------------------------------*\
  Custom Login Logo
\*------------------------------------*/
/*
function my_login_logo_one() {
  $dir = get_template_directory_uri() . '/img/icons/xxxxxx.png';
?>
  <style type="text/css">
  body.login div#login h1 a {
    <?php
    echo 'background-image: url(' . $dir . ' );'
     ?>
      width: 100%;
      background-size: cover;
      padding-bottom: 30px;
  }
  </style>
 <?php
}
add_action( 'login_enqueue_scripts', 'my_login_logo_one' );
*/

/*------------------------------------*\
  Custom Admin Logo
\*------------------------------------*/
/*
function wpb_custom_logo() {
  $dir = get_template_directory_uri() . '/img/icons/rocalife_miniatura.png';
  echo '
  <style type="text/css">
  #wpadminbar #wp-admin-bar-wp-logo > .ab-item {
    width: 35px;
  }
  #wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon {
    width: 100%;
  }
  #wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon:before {
  background-image: url(' . $dir . ') !important;
  background-position: 0 0;
  background-size: 100%;
  background-repeat: no-repeat;
      display: block;
  color:rgba(0, 0, 0, 0);
  }
  #wpadminbar #wp-admin-bar-wp-logo.hover > .ab-item .ab-icon {
  background-position: 0 0;
  }
  </style>
  ';
}
add_action('wp_before_admin_bar_render', 'wpb_custom_logo');
*/

/*------------------------------------*\
  Custom Admin Dashboard Text
\*------------------------------------*/
/*
function textfor_dashboard_widget( $post, $callback_args ) {
echo "

<img src='http://".SITE_URL."/wp-content/themes/roca/img/icons/rocalife_logo.png' style='max-width: 100%'/>
<h1>Welcome to Roca Life’s CMS</h1>
<br />
<strong>The tab placed on the left part of the CMS will be the navigation bar of the webpage.</strong>
<br />
<br />
Do you want to start, create or edit content? If so, click on Posts. Otherwise, if you want to import content from another markets, click on Markets.
<br />
<br />
<strong>Let’s start! </strong>
<br />
<br />

";
}

function add_dashboard_widgets() {
  wp_add_dashboard_widget('dashboard_widget', 'Welcome', 'textfor_dashboard_widget');
}
add_action('wp_dashboard_setup', 'add_dashboard_widgets' );
*/

/*------------------------------------*\
  Remove Widgets from Admin Dashboard
\*------------------------------------*/
/*
function remove_dashboard_widgets() {
	global $wp_meta_boxes;

	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_drafts']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
  unset($wp_meta_boxes['dashboard']['side']['core']['icl_dashboard_widget']);
  unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_activity']);
  unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
  remove_action('welcome_panel', 'wp_welcome_panel');

}
add_action('wp_dashboard_setup', 'remove_dashboard_widgets' );

function wpml_remove_dashboard_widget() {
    remove_meta_box( 'icl_dashboard_widget', 'dashboard', 'side' );
}
add_action('wp_dashboard_setup', 'wpml_remove_dashboard_widget' );
*/

if (is_admin()) {

  /*------------------------------------*\
    Add Custom Metaboxes
  \*------------------------------------*/
  /*
  add_action( 'add_meta_boxes', 'save_post_meta_box' );
  function save_post_meta_box(){
    add_meta_box( 'save-postastext-content', 'Save for translation', 'save_postastext_meta_box_html', 'post', 'normal', 'low' );
    add_meta_box( 'save-post-content', 'Save and Publish', 'save_post_meta_box_html', 'post', 'normal', 'low' );
    add_meta_box( 'translation-content', 'Translations', 'translations_meta_box_html', 'post', 'side', 'high' );
  }

  function save_post_meta_box_html( $post ){
  ?>
    <a href="#" class="acf-button button button-primary" onClick="jQuery('#publish').trigger('click'); return false;">Save / Update post</a>
  <?php
  }
  function save_postastext_meta_box_html( $post ){
  ?>
    <a href="<?= SITE_URL; ?>/?p=<?= $post->ID; ?>&only_text=true" class="acf-button button button-large " target="_blank">Save as text for translation</a>
  <?php
  }
  function translations_meta_box_html( $post ){
  ?>
    <span>You only are allowed to translate to the valid languages of your country</span>
  <?php
  }
  */

  /*------------------------------------*\
    Add User Role Class to Body
  \*------------------------------------*/
  /*
  function add_role_to_body($classes) {
    global $current_user;
  	$user_role = array_shift($current_user->roles);
    if( $user_role != 'administrator' ){
      $classes .= 'role-editor';
    }else{
      $classes .= 'role-administrator';
    }
  	return $classes;
  }
  add_filter('body_class','add_role_to_body');
  add_filter('admin_body_class', 'add_role_to_body');
  */

  /*------------------------------------*\
    Add Admin Editor Styles
  \*------------------------------------*/

  add_action('admin_head', 'editor_styles');
  function editor_styles() {
    echo '<style>';
    echo '#the_cropped_img { max-width: 350px; max-height: 310px; width: auto; height: auto; }
    </style>';
  }


  /*------------------------------------*\
    Hide WPML Metabox
  \*------------------------------------*/
  /*
  add_action('admin_head', 'disable_icl_metabox',99);
  function disable_icl_metabox() {
    global $post;
    if( !empty($post) ){
      remove_meta_box('icl_div_config',$post->posttype,'normal');
    }
  }
  */

}

/*------------------------------------*\
  Add Node to Admin Toolbar
\*------------------------------------*/
/*
add_action( 'admin_bar_menu', 'toolbar_link_to_mypage', 999 );
function toolbar_link_to_mypage( $wp_admin_bar ) {
  global $current_user;
  if( !empty( $current_user->caps['administrator'] ) ){
    $title = "ALL MARKETS";
  }else{
    foreach ( $current_user->caps as $cap => $value ){
      $the_cap = $cap;
    }
    global $ldap_groups;
    foreach( $ldap_groups as $group ){
      if( $the_cap == $group[0] ){
        $title = strtoupper( $group[1] );
      }
    }

  }

	$args = array(
		'id'    => 'my_market',
		'title' => $title,
		'href'  => '#'
	);
	$wp_admin_bar->add_node( $args );
}
*/

/*------------------------------------*\
  Remove Admin Submenus
\*------------------------------------*/
/*
add_action('admin_menu', 'my_remove_sub_menus', 999);
function my_remove_sub_menus() {
  global $current_user;
  if( !empty( $current_user->caps['administrator'] ) ){

  }else{
    remove_submenu_page('edit.php', 'edit-tags.php?taxonomy=post_tag');
    remove_submenu_page('edit.php', 'edit-tags.php?taxonomy=markets');
  }
}
*/

/*------------------------------------*\
  Remove Admin Submenus from Custom Post Types
\*------------------------------------*/
/*
function remove_menu_from_cpt() {
  global $submenu;
  $post_type = 'slideshow';
  if ( isset($submenu['edit.php?post_type='.$post_type]) ) {
    foreach ($submenu['edit.php?post_type='.$post_type] as $k => $sub) {
      if ( false !== strpos($sub[2],'markets') || false !== strpos($sub[2],'category') ) {
        unset($submenu['edit.php?post_type='.$post_type][$k]);
      }
    }
  }
}
add_action('admin_menu','remove_menu_from_cpt');
*/

/*------------------------------------*\
  Admin Pages for Markets
\*------------------------------------*/
/*
function theme_options_panel(){
  add_menu_page('Market settings', 'Market settings', 'edit_posts', 'market-settings', 'wps_theme_func');
}
add_action('admin_menu', 'theme_options_panel');
function wps_theme_func(){
  global $current_user;
  $cap_index = 0;
  $market_group = "";
  foreach($current_user->caps as $cap_label => $cap){
    if($cap_index==0){
      $market_group = $cap_label;
    }
    $cap_index++;
  };
  global $ldap_groups;
  if( $market_group == 'administrator' ){
    $market_group = 'ECMWCM_1499_GLOBAL.zgroups.eu.RCEIT';
  }
  foreach( $ldap_groups as $ldap_group => $ldap_group_data ){
    if( $market_group == $ldap_group_data[0] ){
      $user_market = $ldap_group_data[1];
    }
  }
  $term = get_term_by('slug', $user_market, 'markets');
  $name = $term->name;

  echo "<script>";
  echo "window.location.replace('http://".SITE_URL."/wp-admin/edit-tags.php?action=edit&taxonomy=markets&tag_ID=".$term->term_id."&post_type=post')";
  echo "</script>";
}
*/
/*
add_action('admin_menu', 'market_page_create');
function market_page_create() {
    $page_title = 'Market de Imagina+';
    $menu_title = 'Market';
    $capability = 'edit_posts';
    $menu_slug = 'market_page';
    $function = 'market_page_display';
    $icon_url = 'dashicons-cart';
    $position = 100;

    add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $function, $icon_url, $position );
}
function market_page_display() {
  include get_template_directory()."/templates/market.php";
}
*/

add_filter('upload_mimes', 'custom_upload_mimes');
function custom_upload_mimes ( $existing_mimes=array() ) {
    // add your extension to the mimes array as below
    $existing_mimes['zip'] = 'application/zip';
    $existing_mimes['gz'] = 'application/x-gzip';
    return $existing_mimes;
}

/* Disable the Gutenberg editor. */
add_filter('use_block_editor_for_post', '__return_false');
