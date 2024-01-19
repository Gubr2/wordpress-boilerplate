<?php 

function custom_files() {
  // ---> Main Styles
  $stylePath = get_stylesheet_directory() . '/build/index.css';
  wp_enqueue_style('main_styles', get_theme_file_uri('/build/index.css'), array(), filemtime($stylePath));
  
  // ---> Main Scripts
  $scriptPath = get_stylesheet_directory() . '/build/index.js';

  // ---> [] Without React
  wp_enqueue_script('main_js', get_theme_file_uri('/build/index.js'), NULL, filemtime($scriptPath), true);

  // ---> [] With React
  // wp_enqueue_script('main_js', get_theme_file_uri('/build/index.js'), ['wp-element'], filemtime($scriptPath), true);

  // ---> External
  //  wp_enqueue_script('font_awesome', 'https://kit.fontawesome.com/c0ffcf9a0d.js');
  wp_enqueue_style('material-icons', '//fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0..1,0');
  wp_enqueue_style('roboto', '//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
}

add_action('wp_enqueue_scripts', 'custom_files');