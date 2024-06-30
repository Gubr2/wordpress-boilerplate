<?php
/**
 * Plugin Name:       Blocks Boilerplate New
 * Description:       An interactive block with the Interactivity API
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-boilerplate-new
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

/*
 * Add Dashicons for Block Editor (Importing Icons from @wordpress/components not working properly)
*/
add_action('enqueue_block_assets', function (): void {
  wp_enqueue_style('dashicons');
});

/*
 * Register Custom Categories
*/
add_filter( 'block_categories_all' , function( $categories ) {

	// Adding a new category.
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

/*
 * Register Blocks
*/
function create_block_blocks_boilerplate_new_block_init() {
	
	register_block_type_from_metadata( __DIR__ . '/build/interactive' );
}

add_action( 'init', 'create_block_blocks_boilerplate_new_block_init' );



