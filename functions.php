<?php

// Enqueue the same stylesheet for the block editor (admin area)
function bend_add_editor_styles() {
    add_editor_style( get_template_directory_uri() . '/style.css' );
    $isDev = true;
    if($isDev == true){
        // Enqueue Vite's HMR client script
        wp_enqueue_script('vite-js-client', 'http://localhost:5173/@vite/client', [], null, true);
        // Enqueue your main.js for development mode as an ESModule
        wp_enqueue_script('vite-app-js', 'http://localhost:5173/src/main.js', [], null, true);
        // Ensure the scripts are treated as modules
        add_filter('script_loader_tag', 'add_type_module_to_vite_scripts', 10, 2);
    }else{
        wp_enqueue_style('tailwind-svelte-style', get_template_directory_uri() . '/dist/main.css', [], wp_get_theme()->get('Version'));
        wp_enqueue_script('tailwind-svelte-script', get_template_directory_uri() . '/dist/main.js', [], wp_get_theme()->get('Version'), true);
    }
    
}
add_action( 'admin_init', 'bend_add_editor_styles' );


function enqueue_custom_theme_assets() {
    $isDev = true;
    if($isDev == true){
        if (!is_admin()) {
    /** 
    * Get the heck outta here.
    * No, seriously. Leave.
    **/
    wp_dequeue_script('jquery');
}
        // Enqueue Vite's HMR client script
        wp_enqueue_script('vite-js-client', 'http://localhost:5173/@vite/client', [], null, true);
        // Enqueue your main.js for development mode as an ESModule
        wp_enqueue_script('vite-app-js', 'http://localhost:5173/src/main.js', [], null, true);
        // Ensure the scripts are treated as modules
        add_filter('script_loader_tag', 'add_type_module_to_vite_scripts', 10, 2);
    }else{
        wp_enqueue_style('tailwind-svelte-style', get_template_directory_uri() . '/dist/main.css', [], wp_get_theme()->get('Version'));
        wp_enqueue_script('tailwind-svelte-script', get_template_directory_uri() . '/dist/main.js', [], wp_get_theme()->get('Version'), true);
    }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_theme_assets');

// Filter to add 'type="module"' to Vite scripts
function add_type_module_to_vite_scripts($tag, $handle) {
    if ('vite-js-client' === $handle || 'vite-app-js' === $handle) {
        return str_replace('<script ', '<script type="module" ', $tag);
    }
    return $tag;
}

function mytheme_register_post_featured_image_styles() {

    // Register a 'Fuller' style.
    register_block_style(
        'core/post-featured-image',
        array(
            'name'  => 'fuller',
            'label' => __( 'Fuller', 'bend' ),
        )
    );
}
add_action( 'init', 'mytheme_register_post_featured_image_styles' );


function my_theme_function() {
    echo '<div id="app">This is my div!</div>';
}
add_action('wp_footer', 'my_theme_function');
add_action('admin_footer', 'my_theme_function');


function allow_alpine_attributes( $allowedposttags, $context ) {
    // Allow custom attributes for all elements
    $allowedposttags['div']['x-data'] = true;
    $allowedposttags['div']['x-show'] = true;
    $allowedposttags['button']['@click'] = true;

    return $allowedposttags;
}

// Apply filter for the block editor and posts
add_filter( 'wp_kses_allowed_post', 'allow_alpine_attributes', 10, 2 );

/**
 * Register ACF Blocks
 */
require get_template_directory() . '/blocks/register-blocks.php';