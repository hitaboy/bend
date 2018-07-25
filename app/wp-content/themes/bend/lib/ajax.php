<?php

add_action( 'wp_ajax_nopriv_filter_posts', 'filter_posts' );
add_action( 'wp_ajax_filter_posts', 'filter_posts' );

function filter_posts() {
  $args = array();
  $args["post_type"] = "post";
  $args["post_status"] = "publish";
  foreach( $_POST as $label => $val ){
    if( $label != "action" ){
      if( $label == "year" && !empty($val) && $val!='tots' ){
      $args['date_query'] = array(
        array(
          'year'  => $val
        ),
      );
      }
      if( $label == "cat" && !empty($val) && $val!='tots' ){
        $args['cat'] = $val;
      }
      if( $label == "posts_per_page" && !empty($val) ){
        $args['posts_per_page'] = $val+1;
      }
    }
  }
  $ajax_query = new WP_Query( $args );
  $loadMore = true;
  include(get_stylesheet_directory().'/templates/blocks/grid/grid_posts.php');
  die();

}

add_action( 'wp_ajax_nopriv_loadmore_posts', 'loadmore_posts' );
add_action( 'wp_ajax_loadmore_posts', 'loadmore_posts' );

function loadmore_posts() {
  global $main;
  $args = array();
  $args["post_type"] = "post";
  $args["post_status"] = "publish";
  foreach( $_POST as $label => $val ){
    if( $label != "action" ){
      if( $label == "year" && !empty($val) && $val!='tots' ){
      $args['date_query'] = array(
        array(
          'year'  => $val
        ),
      );
      }
      if( $label == "cat" && !empty($val) && $val!='tots' ){
        $args['cat'] = $val;
      }
      if( $label == "offset" && !empty($val) ){
        $args['offset'] = $val;
      }
      if( $label == "posts_per_page" && !empty($val) ){
        $args['posts_per_page'] = $val+1;
      }
    }
  }
  $ajax_query = new WP_Query( $args );
  // $ajax_query = $main->posts($args);
  // pr2($ajax_query);
  $loadMore = true;
  include(get_stylesheet_directory().'/templates/blocks/grid/grid_posts.php');
  die();

}

add_action( 'wp_ajax_nopriv_filter_films', 'filter_films' );
add_action( 'wp_ajax_filter_films', 'filter_films' );

function filter_films() {
  $args = array();
  $args["post_type"] = "film";
  $args["post_status"] = "publish";
  foreach( $_POST as $label => $val ){
    if( $label != "action" ){
      if( $label == "year" && !empty($val) && $val!='tots' ){
      $args['date_query'] = array(
        array(
          'year'  => $val
        ),
      );
      }
      if( $label == "cat" && !empty($val) && $val!='tots' ){
        $args['cat'] = $val;
      }
      if( $label == "posts_per_page" && !empty($val) ){
        $args['posts_per_page'] = $val+1;
      }
    }
  }
  if( !empty($_POST["cat_gen"]) && $_POST["cat_gen"]!='tots' ){
    $cat_case = "gen";
    $args['tax_query'] = array(
      array(
        'taxonomy' => 'genere',
        'field'    => 'term_id',
        'terms'    => $_POST["cat_gen"]
      )
    );
  }
  if( !empty($_POST["cat_prod"]) && $_POST["cat_prod"]!='tots' ){
    if(!empty($cat_case)){
      $cat_case = "both";
      $args['tax_query'] = array(
    		'relation' => 'AND',
    		array(
    			'taxonomy' => 'genere',
    			'field'    => 'term_id',
    			'terms'    => $_POST["cat_gen"]
    		),
    		array(
    			'taxonomy' => 'produccio',
    			'field'    => 'term_id',
    			'terms'    => $_POST["cat_prod"]
    		)
    	);
    }else{
      $cat_case = "prod";
      $args['tax_query'] = array(
    		array(
    			'taxonomy' => 'produccio',
    			'field'    => 'term_id',
    			'terms'    => $_POST["cat_prod"]
    		)
    	);
    }
  }
  $ajax_query = new WP_Query( $args );
  $loadMore = true;
  include(get_stylesheet_directory().'/templates/blocks/feed/feed_films.php');
  die();

}

add_action( 'wp_ajax_nopriv_loadmore_films', 'loadmore_films' );
add_action( 'wp_ajax_loadmore_films', 'loadmore_films' );

function loadmore_films() {
  $args = array();
  $args["post_type"] = "film";
  $args["post_status"] = "publish";
  foreach( $_POST as $label => $val ){
    if( $label != "action" ){
      if( $label == "year" && !empty($val) && $val!='tots' ){
      $args['date_query'] = array(
        array(
          'year'  => $val
        ),
      );
      }
      if( $label == "offset" && !empty($val) ){
        $args['offset'] = $val;
      }
      if( $label == "posts_per_page" && !empty($val) ){
        $args['posts_per_page'] = $val+1;
      }
    }
  }
  $ajax_query = new WP_Query( $args );
  $loadMore = true;
  include(get_stylesheet_directory().'/templates/blocks/feed/feed_films.php');
  //$json = array('success' => true);
  //$json['args'] = $ajax_query->posts;
  //echo json_encode($json);
  die();

}
