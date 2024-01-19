<?php 

function custom_theme_features() {

  // [] Thumbnaily pre posty
  add_theme_support('post-thumbnails');

  // [] Automatické pridávanie title pre jednotlivé stránky
  add_theme_support('title-tag');

  // [] Možnosť vkladania loga
  add_theme_support('custom-logo');
}

add_action('after_setup_theme', 'custom_theme_features');

// ---> Odstránenie textového pola z Page Post Typu (v prípade, že ho chcem nahratiť textovým polom z ACF)

// function init_remove_support(){

//   $post_types = array('page');
//   foreach ($post_types as &$post) { 
//     remove_post_type_support( $post, 'editor');
//     remove_post_type_support( $post, 'thumbnail');
//     remove_post_type_support( $post, 'page-attributes');
//   }
  
// }

// add_action('init', 'init_remove_support', 100);