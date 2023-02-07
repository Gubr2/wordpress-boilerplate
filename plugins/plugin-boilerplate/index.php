<?php

/*
  Plugin Name: Plugin Boilerplate
  Version: 1.0
  Author: Adrián Gubrica
  Description: Plugin Boilerplate Description
  Author URI: https://www.gubrica.com/
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

// ---> Global Script & Styles
wp_enqueue_script('global_plugin_scripts', plugin_dir_url(__FILE__) . 'build/global.js');
wp_enqueue_style('global_plugin_styles', plugin_dir_url(__FILE__) . 'build/global.css');

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// CATEGORIES

// ---> Custom Category
add_filter( 'block_categories_all' , function( $categories ) {

  $categories[] = array(
    'slug'  => 'categoryname',
    'title' => 'Category Name'
  );

  $categories[] = array(
    'slug'  => 'additionalcategoryname',
    'title' => 'Additional Category Name'
  );


  return $categories;

});

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// BLOCKS

// ---> boilerplate
require_once plugin_dir_path(__FILE__) . 'blocks/boilerplate/boilerplate.php';

class boilerplate {
  function __construct() {
    add_action('init', [$this, 'onInit']);
  }

  function onInit() {
    wp_register_script('plugin_boilerplate_script', plugin_dir_url(__FILE__) . 'build/boilerplate.js', array('wp-blocks', 'wp-i18n', 'wp-editor'));
    wp_register_style('plugin_boilerplate_style', plugin_dir_url(__FILE__) . 'build/boilerplate.css');

    register_block_type('categoryname/boilerplate', array(
      'render_callback' => [$this, 'renderCallback'],
      'editor_script' => 'plugin_boilerplate_script',
      'editor_style' => 'plugin_boilerplate_style'
    ));
  }

  function renderCallback($attributes, $content) {
    wp_enqueue_script('plugin_boilerplate-frontend_script', plugin_dir_url(__FILE__) . 'build/boilerplate-frontend.js');
    wp_enqueue_style('plugin_boilerplate-frontend_style', plugin_dir_url(__FILE__) . 'build/boilerplate-frontend.css');

    return boilerplate($attributes, $content);
  }
}

$boilerplate = new boilerplate(); 

// ---> boilerplateadditional
class boilerplateadditional {
  function __construct() {
    add_action('init', [$this, 'onInit']);
  }

  function onInit() {
    wp_register_script('plugin_boilerplateadditional_script', plugin_dir_url(__FILE__) . 'build/boilerplateadditional.js', array('wp-blocks', 'wp-i18n', 'wp-editor'));
    wp_register_style('plugin_boilerplateadditional_style', plugin_dir_url(__FILE__) . 'build/boilerplateadditional.css');

    register_block_type('categoryname/boilerplateadditional', array(
      'render_callback' => [$this, 'renderCallback'],
      'editor_script' => 'plugin_boilerplateadditional_script',
      'editor_style' => 'plugin_boilerplateadditional_style'
    ));
  }

  function renderCallback($attributes, $content) {
    wp_enqueue_script('plugin_boilerplateadditional-frontend_script', plugin_dir_url(__FILE__) . 'build/boilerplateadditional-frontend.js');
    wp_enqueue_style('plugin_boilerplateadditional-frontend_style', plugin_dir_url(__FILE__) . 'build/boilerplateadditional-frontend.css');
  }
}

$boilerplateadditional = new boilerplateadditional(); 