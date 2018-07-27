<?php

  $wp_template_directory = get_template_directory();
  define('WP_TEMPLATE_DIR', $wp_template_directory );
  define('TEMPLATE_DIRECTORY_URI',SITE_PROTOCOL.SITE_URL.'/wp-content/themes/bend');

  class Methods extends App {
      public function initialize (){
        global $main;
        global $post;
      	if (empty($post)) {
      		$main->post = new stdClass();
      		$main->post->ID = 0;
      	} else {
      		$main->post = $post;
      	}
      	$this->getPageFields();
      	$main->post->modules = array();
      	array_push($main->post->modules, $main->post->template);
        if(!empty($main->post->fields['redirect_to_child']) && $main->post->fields['redirect_to_child'] == 1 && !empty($main->post->fields['redirect_url'])){
      		header("Location: ".$main->post->fields['redirect_url']);
      		die();
      	}
      }
      public function getPosts ($queryArgs = ''){
        global $main;
        $args = array();
        if( !empty($queryArgs['cat']) ){
          $categories = implode(",",$queryArgs['cat']);
          $args['cat'] = $categories;
        }
        if( !empty($queryArgs['posts_per_page']) ){
          $args['posts_per_page'] = $queryArgs['posts_per_page'];
        }
        if( !empty($queryArgs['post__in']) ){
          $args['post__in'] = $queryArgs['post__in'];
        }
        if( !empty($queryArgs['tag_id']) ){
          $args['tag_id'] = $queryArgs['tag_id'];
        }
        if( !empty($queryArgs['offset']) ){
          $args['offset'] = $queryArgs['offset'];
        }
        if( !empty($queryArgs['post__not_in']) ){
          $args['post__not_in'] = $queryArgs['post__not_in'];
        }
        if( !empty($queryArgs['post_type']) ){
          $args['post_type'] = $queryArgs['post_type'];
        }
        if( !empty($queryArgs['date_query']) ){
          $args['date_query'] = $queryArgs['date_query'];
        }
        if( !empty($queryArgs['meta_query']) ){
          $args['meta_query'] = $queryArgs['meta_query'];
        }
        $query = new WP_Query( $args );
        foreach( $query->posts as $key => $post ){
          $query->posts[$key]->fields = get_fields( $post->ID );
        }
        return $query->posts;
      }
      public function getPageFields (){
        global $main;
        // $main->post->fields = get_fields($main->post->ID);
        $main->post->fields = unserialize($main->post->post_content);
        $main->post->template = $GLOBALS['current_theme_template'];
        $main->post->permalink = get_the_permalink();
      }
      public function getPermalink ($slug) {
        global $main;
        return SITE_PROTOCOL.SITE_URL.$main->languages->lang_dir.$slug;
      }
    };

  $main->methods  = new Methods;

  // pr2( $main->counters );
