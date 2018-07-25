<?php

/*------------------------------------*\
  Add Rewrite Rules
\*------------------------------------*/

remove_filter('template_redirect','redirect_canonical');
function custom_rewrite_rule() {

  /*
  add_rewrite_rule('^([^/]+)?$','index.php?marketse=$matches[1]&page_id=2','top');
  add_rewrite_rule('^([^/]+)/fragrances/([^/]+)?$','index.php?marketse=$matches[1]&fragrances=$matches[2]','top');
  add_rewrite_rule('^([^/]+)/perfumes/([^/]+)?$','index.php?marketse=$matches[1]&fragrances=$matches[2]','top');
  add_rewrite_rule('^([^/]+)/lip-balms/([^/]+)?$','index.php?marketse=$matches[1]&lipbalms=$matches[2]','top');
  add_rewrite_rule('^([^/]+)/barras-de-labios/([^/]+)?$','index.php?marketse=$matches[1]&lipbalms=$matches[2]','top');
  add_rewrite_rule('^([^/]+)/news/([^/]+)?$','index.php?marketse=$matches[1]&news=$matches[2]','top');
  add_rewrite_rule('^([^/]+)/noticias/([^/]+)?$','index.php?marketse=$matches[1]&news=$matches[2]','top');
  add_rewrite_rule('^([^/]+)/commandments/([^/]+)?$','index.php?marketse=$matches[1]&commandments=$matches[2]','top');
  add_rewrite_rule('^([^/]+)/agathas-orders/([^/]+)?$','index.php?marketse=$matches[1]&mandamientos=$matches[2]','top');
  add_rewrite_rule('^([^/]+)/noticias/([^/]+)?$','index.php?marketse=$matches[1]&news=$matches[2]','top');
  add_rewrite_rule('^([^/]+)/promos/([^/]+)?$','index.php?marketse=$matches[1]&promos=$matches[2]','top');
  add_rewrite_rule('^([^/]+)/([^/]+)?$','index.php?marketse=$matches[1]&pagename=$matches[2]','top');
  */

}
add_action('init', 'custom_rewrite_rule', 10, 0);

function myplugin_register_query_vars( $vars ) {
	$vars[] = 'marketse';
	return $vars;
}
//add_filter( 'query_vars', 'myplugin_register_query_vars' );

function theme_rewrite_tag() {
  add_rewrite_tag('%markets%', '([^&]+)');
}
//add_action('init', 'theme_rewrite_tag', 10, 0);


function cleanup_default_rewrite_rules( $rules ) {
    foreach ( $rules as $regex => $query ) {
        if ( strpos( $regex, 'attachment' ) || strpos( $query, 'attachment' ) ) {
            unset( $rules[ $regex ] );
        }
    }

    return $rules;
}
add_filter( 'rewrite_rules_array', 'cleanup_default_rewrite_rules' );

/*
add_action( 'init', function() {
		global $wp_rewrite;
		$actualidad_slug = __("news","bend");
		if($wp_rewrite->front != $actualidad_slug){
			$wp_rewrite->set_permalink_structure( '/'.$actualidad_slug.'/%postname%/' );
			$wp_rewrite->flush_rules();
		}
} );
*/

?>
