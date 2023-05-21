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

// ---> Custom Blocks Styles
wp_enqueue_style('custom-blocks_plugin_styles', plugin_dir_url(__FILE__) . 'build/custom-blocks.css');

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// CATEGORIES

// ---> Custom Category
add_filter( 'block_categories_all' , function( $categories ) {

  $categories[] = array(
    'slug'  => 'primary',
    'title' => 'Primary Boilerplate Blocks Category'
  );

  $categories[] = array(
    'slug'  => 'additional',
    'title' => 'Additional Boilerplate Blocks Category'
  );

  return $categories;
});

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// BLOCKS

// ---> Template Class

class RegisterBlock {
  function __construct($name, $category) {

    // [] Variables
    $this->name = $name;
    $this->category = $category;

    // [] Init Functions
    require_once plugin_dir_path(__FILE__) . "blocks/{$this->name}/{$this->name}.php";
    add_action('init', [$this, 'onInit']);
  }

  function onInit() {
    wp_register_script("plugin_{$this->name}_script", plugin_dir_url(__FILE__) . "build/{$this->name}.js", array("wp-blocks", "wp-i18n", "wp-editor"));
    wp_register_style("plugin_{$this->name}_style", plugin_dir_url(__FILE__) . "build/{$this->name}.css");

    register_block_type("{$this->category}/{$this->name}", array(
      "render_callback" => [$this, "renderCallback"],
      "editor_script" => "plugin_{$this->name}_script",
      "editor_style" => "plugin_{$this->name}_style",
      "category" => "custom"
    ));
  }

  function renderCallback($attributes, $content) {
    wp_enqueue_script("plugin_{$this->name}-frontend_script", plugin_dir_url(__FILE__) . "build/{$this->name}-frontend.js");
    wp_enqueue_style("plugin_{$this->name}-frontend_style", plugin_dir_url(__FILE__) . "build/{$this->name}-frontend.css");

    return boilerplate($attributes, $content);
  }
}

// ---> Register

new RegisterBlock('boilerplate', 'primary');
new RegisterBlock('boilerplateadditional', 'additional');