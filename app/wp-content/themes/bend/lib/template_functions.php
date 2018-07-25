<?php

class TemplateFunctions extends App {
  public function generateImageSizesArray(){
    $args = func_get_args();
    $images = call_user_func_array("array_merge", $args);
    $image_sizes_array = array();
    foreach( $images as $size => $image ){
      $arr = explode("x", $size, 2);
      if( empty($image_sizes_array[$arr[0]]) ){
        $img_arr = array($image);
        $image_sizes_array[$arr[0]] = $img_arr;
      }else{
        array_push($image_sizes_array[$arr[0]], $image);
      }
    }
    return $image_sizes_array;
  }
  public function get_picture ($image) {
    $picture_html = "<picture>";
    $first_key = key($image);
    $image = array_reverse($image, true);
    foreach( $image as $size => $image_ren ){
      $picture_html .= "<source srcset='".$image_ren[1].", ".$image_ren[0]." 2x' media='(max-width: ".$size."px)'>";
    }
    end($image);
    $picture_html .= "<source srcset='".$image[key($image)][0]."' media='(max-width: 6000px)'>";
    $picture_html .= "<img srcset='".$image[$first_key][1].", ".$image[$first_key][1]." 2x' title='__the title ___ '>";
    $picture_html .= "</picture>";
    return $picture_html;
  }
  public function menu ($menu){
    if( MULTILINGUAL ){
      global $main;
      $localized_menu = $menu.'-'.$main->languages->icl_language_code;
    }else{
      $localized_menu = $menu;
    }
    echo "<nav class='nav'>";
    wp_nav_menu(array('menu'=>$menu));
    echo "</nav>";
  }
  public function menuHasChild ($menu_items, $it){
    $hasChild = false;
    foreach( $menu_items as $item ){
      if( $item->menu_item_parent == $it ){
        $hasChild = true;
      }
    }
    return $hasChild;
  }
  public function getTemplate ($post_id){
    $item_template = "";
    $pre_item_template = get_post_meta( $post_id, '_wp_page_template', TRUE );
    $pre_item_templateArray = explode("/",$pre_item_template);
    $item_template = str_replace(".php","",end($pre_item_templateArray));
    return $item_template;
  }
  public function getSearchPermalink (){
    global $main;
    if( empty($main->searchPermalink) ){
      $main->searchPermalink = get_permalink('3127');
    }
    return $main->searchPermalink;
  }
  public function get_news (){
    global $main;
    $args = array(
      'post_type'  => array( 'news' ),
      'order'                  => 'DESC',
      'orderby'                => 'date',
      'tax_query'  => array(
          array(
            'taxonomy' => 'markets',
            'field' => 'slug',
            'terms' => $this->market,
          ),
      )
    );
    $query = new WP_Query( $args );
    foreach( $query->posts as $key  => $post ){
      $fields = get_fields( $post->ID );
      $query->posts[$key]->fields = $fields;
    }
    return $query->posts;
  }
  public function get_grid ($case, $query, $not_in){
    global $main;
    global $sitepress;
    $lang=ICL_LANGUAGE_CODE;
    $sitepress->switch_lang($lang);
    $args = array(
      'post_type'  => array( 'news' ),
      'order'      => 'DESC',
      'tax_query'  => array(
          array(
            'taxonomy' => 'markets',
            'field' => 'slug',
            'terms' => $this->market,
          ),
      )
    );
    if(!empty($case)){
      $args[$case] = $query;
      if($case == 'tag'){
        $args['posts_per_page'] = 6;
      }else if($case == 'offset'){
        $args['posts_per_page'] = 12;
      }
    }
    if(!empty($not_in)){
      $args['post__not_in'] = array($not_in);
    }
    $query = new WP_Query( $args );
    foreach( $query->posts as $key  => $post ){
      $fields = get_fields($post->ID);
      $query->posts[$key]->fields = $fields;
    }
    return $query->posts;
  }
};

$main->templatefunctions = new TemplateFunctions();
