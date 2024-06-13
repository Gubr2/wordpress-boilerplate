<?php 

// Load Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';

// Initialize Timber.
Timber\Timber::init();

// ---> Function Components
include_once(get_template_directory() . '/inc/styles-and-scripts.php');
include_once(get_template_directory() . '/inc/custom-theme-features.php');
include_once(get_template_directory() . '/inc/blocks.php');
include_once(get_template_directory() . '/inc/menu.php');
include_once(get_template_directory() . '/inc/mime.php');
include_once(get_template_directory() . '/inc/customizer.php');
include_once(get_template_directory() . '/inc/login.php');
include_once(get_template_directory() . '/inc/pretty-print.php');
include_once(get_template_directory() . '/inc/ai1wm.php');
include_once(get_template_directory() . '/inc/update-emails.php');
include_once(get_template_directory() . '/inc/remove-admin-pages.php');
