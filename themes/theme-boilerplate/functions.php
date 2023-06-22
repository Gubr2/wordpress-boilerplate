<?php 

require_once( __DIR__ . '/vendor/autoload.php' );
$timber = new Timber\Timber();

// STYLES & SCRIPTS

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
  wp_enqueue_style('material-icons', '//fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
  wp_enqueue_style('roboto', '//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
}

add_action('wp_enqueue_scripts', 'custom_files');

// FEATURES

// ---> Štandardné

function custom_theme_features() {

  // [] Thumbnaily pre posty
  add_theme_support('post-thumbnails');

  // [] Automatické pridávanie title pre jednotlivé stránky
  add_theme_support('title-tag');

  // [] Možnosť vkladania loga
  add_theme_support('custom-logo');
}

add_action('after_setup_theme', 'custom_theme_features');

// ---> Odstránenie textového pola z Page Post Typu (v prípade, že ho chcem nahratiť textovým polom z ACF)

// function init_remove_support(){

//     $post_type = 'page';
    
//     remove_post_type_support( $post_type, 'editor');
//     remove_post_type_support( $post_type, 'thumbnail');
//     remove_post_type_support( $post_type, 'page-attributes');
// }

// add_action('init', 'init_remove_support', 100);

// ---> Remove Selected Blocks from Editor

function wpdocs_allowed_block_types ( $block_editor_context, $editor_context ) {


  $block_types = WP_Block_Type_Registry::get_instance()->get_all_registered();

  // [] Získanie custom blockov (ktoré majú uvedenú kategóriu 'custom')
  $custom = array();
  foreach($block_types as $key) {
    if ($key->category == 'custom') {
      $custom[] = $key->name;
    }
  }

  // [] Spojenie vybraných core blockov s custom blockmi
  return array_merge(
    array(
      'core/paragraph',
      'core/image',
      'core/heading',
      'core/spacer',
      'core/columns',
      'core/list',
    ), $custom
  );
}

add_filter( 'allowed_block_types_all', 'wpdocs_allowed_block_types', 10, 2 );

// MENUS

function custom_register_menus() {
  register_nav_menu('header', 'Header');
  register_nav_menu('footer', 'Footer');
}

add_action('after_setup_theme', 'custom_register_menus');

// ---> Rozšírenie Timber kontextu o:

function add_to_context( $context ) {

    // [] Vlastné menu
    $context['header'] = new \Timber\Menu( 'header' );
    $context['footer'] = new \Timber\Menu( 'footer' );

    // [] Custom Logo
    $context['custom_logo_url'] = wp_get_attachment_image_url( get_theme_mod( 'custom_logo' ), 'full' );

    return $context;
}

add_filter( 'timber/context', 'add_to_context' );

// SVG SUPPORT

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');

// CUSTOMIZER

function customizer( $wp_customize ){

  // Add Settings
  $wp_customize->add_setting('meta_description', array(
    'transport'         => 'refresh',
    'height'         => 325,
  ));

  $wp_customize->add_setting('og_title', array(
    'transport'         => 'refresh',
    'height'         => 325,
  ));

  $wp_customize->add_setting('og_type', array(
    'transport'         => 'refresh',
    'height'         => 325,
  ));

  $wp_customize->add_setting('og_description', array(
    'transport'         => 'refresh',
    'height'         => 325,
  ));

  $wp_customize->add_setting('og_image', array(
    'transport'         => 'refresh',
    'height'         => 325,
  ));

  $wp_customize->add_setting('og_url', array(
    'transport'         => 'refresh',
    'height'         => 325,
  ));


  // Add Section
  $wp_customize->add_section('meta', array(
      'title'             => __('Meta', 'name-theme'), 
      'priority'          => 70,
  ));    

  // Add Controls
  $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'meta_description', array(
    'label'             => __('Search Engine - Description', 'name-theme'),
    'section'           => 'meta',
    'settings'          => 'meta_description',    
  )));

  $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'og_title', array(
    'label'             => __('Social Media - Title', 'name-theme'),
    'section'           => 'meta',
    'settings'          => 'og_title',    
  )));

  $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'og_type', array(
    'label'             => __('Social Media - Type', 'name-theme'),
    'section'           => 'meta',
    'settings'          => 'og_type',    
  )));

  $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'og_description', array(
    'label'             => __('Social Media - Description', 'name-theme'),
    'section'           => 'meta',
    'settings'          => 'og_description',    
  )));

  $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'og_url', array(
    'label'             => __('Social Media - Url', 'name-theme'),
    'section'           => 'meta',
    'settings'          => 'og_url',    
  )));

  $wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'og_image', array(
    'label'             => __('Social Media - Image', 'name-theme'),
    'section'           => 'meta',
    'settings'          => 'og_image',    
  )));
}

add_action('customize_register', 'customizer');

// ADMIN

// ---> Štýlovanie 

function custom_admin_styles() {
  wp_enqueue_style('admin_stylesheet', get_theme_file_uri('/admin/admin.css') );
}

add_action( 'admin_enqueue_scripts', 'custom_admin_styles' );

// ---> Zmena loga v admine
function my_login_logo() { ?>
  <style type="text/css">
    #login h1 a, .login h1 a {
      background-image: url(<?php echo esc_url( wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' )[0] ); ?>);
      width: 100%;
      background-size: contain;
    }
  </style>
<?php }

add_action( 'login_enqueue_scripts', 'my_login_logo' );

// ---> Pretty Print (krajšie vypísanie print_r)
function prettyPrint($a, $t='pre') {echo "<$t>".print_r($a,1)."</$t>";}

// ---------------------------------------------

// ALL IN ONE MIGRATE - EXCLUDE FOLDERS

add_filter( 'ai1wm_exclude_content_from_export',

function ( $exclude_filters ) {
  $theme_name = '';
  $plugin_name = '';

  // ---> Main Files
  $exclude_filters[] = '.git';

  // ---> Theme Files
  $exclude_filters[] = 'themes/' . $theme_name . '/node_modules';
  $exclude_filters[] = 'themes/' . $theme_name . '/styles';
  $exclude_filters[] = 'themes/' . $theme_name . '/src';

  // ---> Plugin Files
  $exclude_filters[] = 'plugins/' . $plugin_name . '/node_modules';
  
  return $exclude_filters;

});