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
    'slug'  => 'primary',
    'title' => 'Primary Boilerplate Blocks Category'
  );

  $categories[] = array(
    'slug'  => 'additional',
    'title' => 'Additional Boilerplate Blocks Category'
  );

  $categories[] = array(
    'slug'  => 'designcomponent',
    'title' => 'Design Component Boilerplate Blocks Category'
  );

  return $categories;
});

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// BLOCKS

// ---> Scripts List
$scriptsList = array();
$stylesList = array();

// ---> Template Class
class RegisterBlock {
  function __construct($name, $category) {

    // [] Variables
    $this->name = $name;
    $this->category = $category;

    // [] Add to List
    global $scriptsList;
    $scriptsList[] = "plugin_{$this->name}-frontend_script";

    global $stylesList;
    $stylesList[] = "plugin_{$this->name}-frontend_style";

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
    // $stylePath = plugin_dir_path(__FILE__) . "build/{$this->name}-frontend.css";
    // wp_enqueue_style("plugin_{$this->name}-frontend_style", plugin_dir_url(__FILE__) . "build/{$this->name}-frontend.css", array(), filemtime($stylePath));

    $scriptPath = plugin_dir_path(__FILE__) . "build/{$this->name}-frontend.js";
    wp_enqueue_script("plugin_{$this->name}-frontend_script", plugin_dir_url(__FILE__) . "build/{$this->name}-frontend.js", array(), filemtime($scriptPath));

    $name = "{$this->name}";
    return $name($attributes, $content);
  }
}


// ---> Get all blocks and enqueue only active styles
function loadStylesInHeadTag() {
  $block_types = WP_Block_Type_Registry::get_instance()->get_all_registered();

  foreach($block_types as $key) {
    if ($key->category == 'custom') {
      if (has_block($key->name)) {
        $stylePath = plugin_dir_path(__FILE__) . "build/{$key->render_callback[0]->name}-frontend.css";
        wp_enqueue_style("plugin_{$key->render_callback[0]->name}-frontend_style", plugin_dir_url(__FILE__) . "build/{$key->render_callback[0]->name}-frontend.css", array(), filemtime($stylePath)); 
      }
    }
  }
}

add_action('wp_enqueue_scripts', 'loadStylesInHeadTag', 99);  

// ---> Add Data Attribute to Script
function add_attribute_to_script_tag($tag, $handle) {

  global $scriptsList;

  foreach($scriptsList as $defer_script) {
    if ($defer_script === $handle) {
      return str_replace(' src', ' data-dynamic-script src', $tag);
    }
  }
  return $tag;
}

add_filter('script_loader_tag', 'add_attribute_to_script_tag', 10, 2);

// ---> Add Data Attribute to Style
function add_attribute_to_style_tag($tag, $handle) {

  global $stylesList;

  foreach($stylesList as $defer_style) {
    if ($defer_style === $handle) {
      return str_replace(' href', ' data-dynamic-style href', $tag);
    }
  }
  return $tag;
}

add_filter('style_loader_tag', 'add_attribute_to_style_tag', 10, 2);

// ---> Register

new RegisterBlock('responsivespacer', 'designcomponent');
