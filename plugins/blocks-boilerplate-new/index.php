<?php
/**
 * Plugin Name:       Boilerplate New Blocks
 * Description:       Blocks for theme-name.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Adrián Gubrica
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-name
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/*
 * Add Dashicons for Block Editor (Importing Icons from @wordpress/components not working properly)
*/
add_action('enqueue_block_assets', function (): void {
  wp_enqueue_style('dashicons');
});

/* 
  Registration of categories
*/
add_filter( 'block_categories_all' , function( $categories ) {

  $categories[] = array(
    'slug'  => 'primary',
    'title' => 'Boilerplate New - Primary Blocks'
  );

  $categories[] = array(
    'slug'  => 'additional',
    'title' => 'Boilerplate New - Additional Blocks'
  );

  $categories[] = array(
    'slug'  => 'designcomponent',
    'title' => 'Boilerplate New - Design Component Blocks'
  );

  return $categories;
});

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_blocks_boilerplate_new_block_init() {
  register_block_type( __DIR__ . '/build/boilerplate' );
}
add_action( 'init', 'create_block_blocks_boilerplate_new_block_init' );
