<?php
/**
 * Masonry
 */

// $data is what we're going to expose to our render template
$data = array(
	'items' => get_field( 'items' )
);

// Add the permalink of each item
foreach( $data['items'] as $key=>$item){
	$data['items'][$key]['item']->permalink = get_permalink($item['item']->ID);
}

// Dynamic block ID
$block_id = 'masonry-block-' . $block['id'];

// Check if a custom ID is set in the block editor
if( !empty($block['anchor']) ) {
    $block_id = $block['anchor'];
}

// Block classes
$class_name = 'hero';
if( !empty($block['className']) ) {
    $class_name .= ' ' . $block['className'];
}

/** 
 * Pass the block data into the template part
 */ 
get_template_part(
	'blocks/masonry/template',
	null,
	array(
		'block'      => $block,
		'is_preview' => $is_preview,
		'post_id'    => $post_id,

		'data'       => $data,
        'class_name' => $class_name,
        'block_id'   => $block_id,
	)
);