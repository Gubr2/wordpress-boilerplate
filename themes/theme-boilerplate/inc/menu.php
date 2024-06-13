<?php

function custom_register_menus() {
  register_nav_menu('header', 'Header');
  register_nav_menu('footer', 'Footer');
}

add_action('after_setup_theme', 'custom_register_menus');

// ---> Rozšírenie Timber kontextu o:

function add_to_context( $context ) {

    // [] Vlastné menu
    $context['header'] = Timber::get_menu('header');
    $context['footer'] = Timber::get_menu('footer');
    // [] Custom Logo
    $context['custom_logo_url'] = wp_get_attachment_image_url( get_theme_mod( 'custom_logo' ), 'full' );

    return $context;
}

add_filter( 'timber/context', 'add_to_context' );