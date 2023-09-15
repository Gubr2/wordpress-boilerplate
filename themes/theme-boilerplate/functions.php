<?php 

require_once( __DIR__ . '/vendor/autoload.php' );
$timber = new Timber\Timber();

// ---> Function Components
include_once(get_template_directory() . '/function-components/styles-and-scripts.php');
include_once(get_template_directory() . '/function-components/custom-theme-features.php');
include_once(get_template_directory() . '/function-components/blocks.php');
include_once(get_template_directory() . '/function-components/menu.php');
include_once(get_template_directory() . '/function-components/mime.php');
include_once(get_template_directory() . '/function-components/customizer.php');
include_once(get_template_directory() . '/function-components/login.php');
include_once(get_template_directory() . '/function-components/pretty-print.php');
include_once(get_template_directory() . '/function-components/ai1wm.php');
