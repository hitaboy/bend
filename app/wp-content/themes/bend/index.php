<?php

$current_term = get_queried_object();
// pr2($current_term);
// die();
if( !empty($current_term->post_type) ){
    include 'templates/tpl_'.$current_term->post_type.'.php';
}
if( !empty($current_term->taxonomy) ){
  include 'templates/tpl_'.$current_term->taxonomy.'.php';
}
