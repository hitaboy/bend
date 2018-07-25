<?php

@ini_set( 'upload_max_size' , '10M' );
@ini_set( 'post_max_size', '10M');
@ini_set( 'max_execution_time', '300' );

add_filter( 'jpeg_quality', create_function( '', 'return 70;' ) );

function remove_default_image_sizes( $sizes) {
	unset( $sizes['thumbnail']);
	unset( $sizes['medium_large']);
	unset( $sizes['medium']);
	unset( $sizes['large']);
	return $sizes;
}
add_filter('intermediate_image_sizes_advanced', 'remove_default_image_sizes');
/*
function enable_yt_jsapi($html, $url, $args) {
	if (strstr($html, 'youtube.com/embed/')) {
		$html = str_replace('?feature=oembed', '?feature=oembed&modestbranding=1&showinfo=0&color=white', $html);
	}
	return $html;
}
add_filter('oembed_result', 'enable_yt_jsapi');
*/
function custom_youtube_settings($code){
	if(strpos($code, 'youtu.be') !== false || strpos($code, 'youtube.com') !== false){
		$return = preg_replace("@src=(['\"])?([^'\">\s]*)@", "src=$1$2&showinfo=0&rel=0&autohide=1", $code);
		return $return;
	}
	return $code;
}
add_filter('embed_handler_html', 'custom_youtube_settings');
add_filter('embed_oembed_html', 'custom_youtube_settings');

?>
