<?php
/**
 * Hero
 */

// $data is what we're going to expose to our render template
$data = array(
	'example_field' => get_field( 'example_field' ),
    'another_field' => get_field( 'another_field' )
);

// Dynamic block ID
$block_id = 'hero-block-' . $block['id'];

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
	'blocks/hero/template',
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