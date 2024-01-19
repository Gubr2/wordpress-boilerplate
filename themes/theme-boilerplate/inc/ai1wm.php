<?php

// ALL IN ONE MIGRATE - EXCLUDE FOLDERS
add_filter( 'ai1wm_exclude_content_from_export',

function ( $exclude_filters ) {
  $theme_name = '';
  $plugin_name = '';

  // ---> Main Files
  $exclude_filters[] = '.git';
  $exclude_filters[] = 'node_modules';

  // ---> Theme Files
  $exclude_filters[] = 'themes/' . $theme_name . '/node_modules';
  $exclude_filters[] = 'themes/' . $theme_name . '/styles';
  $exclude_filters[] = 'themes/' . $theme_name . '/src';

  // ---> Plugin Files
  $exclude_filters[] = 'plugins/' . $plugin_name . '/node_modules';
  
  return $exclude_filters;

});