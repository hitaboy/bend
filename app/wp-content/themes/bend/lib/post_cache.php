<?php

add_action('edit_post', 'post_cache');
function post_cache($post_id) {
  $cached_post_types = array('post','page');
  $post_type = get_post_type($post_id);
  if(in_array($post_type, $cached_post_types)){
    $caching = get_post_meta( $post_id, 'bend_caching', true );
    if($caching != 'true'){
      update_post_meta( $post_id, 'bend_caching', 'true' );
      $fields = serialize(get_fields($post_id));
      $my_post = array(
          'ID'           => $post_id,
          'post_content' => $fields,
      );
      wp_update_post( $my_post );
    }else{
      update_post_meta( $post_id, 'bend_caching', 'false' );
    }
  }
  // update_post_meta( $post_id, 'caching', 'lololo' );

}
