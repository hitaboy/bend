<?php

if (!class_exists('Grid')) {
  class Grid {
    public $h;
    function __construct() {
      // $this->template = 'front_base.php';
      global $block;
      global $main;
      $this->fields = $block;
      $this->tax_query = array();
      $this->title = "";
      if( sizeof($this->fields['term']) > 1 ){
        $this->tax_query = array('relation' => $this->fields['operator']);
        foreach ($this->fields['term'] as $term) {
          $this->tax_query[] = array('taxonomy' => $term->taxonomy,'field' => 'term_taxonomy_id','terms' => $term->term_taxonomy_id);
        }
        $this->taxonomy = $term->taxonomy;
      }else {
        $this->tax_query = array(array('taxonomy'=>$this->fields['term'][0]->taxonomy,'field'=>'term_id','terms'=>$this->fields['term'][0]->term_id));
        $this->taxonomy = $this->fields['term'][0]->taxonomy;
      }
      $args = array(
        'post_type'  => $main->post_types,
        'order'      => 'DESC',
        'orderby' => 'menu_order',
        'tax_query'  => $this->tax_query
      );
      $query = new WP_Query( $args );
      $this->posts = array();
      foreach ($query->posts as $key => $post) {
        $post->fields = get_fields($post->ID);
        if(!empty($post->fields['thumbnail_desktop'])){
          $post->fields['thumbnail_desktop'] = $main->templatefunctions->generateImageSizesArray($post->fields['thumbnail_desktop']);
        }
        if(!empty($post->fields['thumbnail_mobile'])){
          $post->fields['thumbnail_mobile'] = $main->templatefunctions->generateImageSizesArray($post->fields['thumbnail_mobile']);
        }
        $post->fields['permalink'] = get_permalink($post->ID);
        $post->highlighted = false;
        array_push($this->posts, $post);
      }
      $this->terms = get_terms( $this->taxonomy, array(
        'depth'      => 1,
      	'number'     => 100,
      	'parent'     => 0,
      	'orderby'    => 'order',
      	'order'      => 'ASC'
      ));
      // H counter
      if (!empty($this->fields['text'])) {
        $this->h = $main->counters->runCounters('grid', $this->fields['text']);
      }else{
        $this->h = 1;
      }
    }
  }
}

$data = new Grid();
include('front.php');
// include(getcwd().'/wp-content/themes/bend/templates/blocks/header/front.php');
