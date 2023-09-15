<?php 

// CUSTOM POST TYPES

function post_types() {

  // ---> Boilerplate

  register_post_type('boilerplate', array(
    'rewrite' => array(
      'slug' => 'boilerplate'
    ),
    'has_archive' => true,
    'public' => true,
    'labels' => array(
      'name' => 'Boilerplate'
    ),
    'menu_icon' => 'dashicons-list-view',
    'show_in_rest' => true,
  ));
}

add_action('init', 'post_types');

?>