<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$pluginDir = WP_PLUGIN_DIR . "/blocks-boilerplate-new/src/interactive/";

$context = Timber::context();
$context['unique_id'] = wp_unique_id('p-');
$context['arr'] = array( 'isOpen' => false );

Timber::render($pluginDir . 'view.twig', $context);
  
