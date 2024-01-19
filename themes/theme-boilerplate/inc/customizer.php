<?php

// CUSTOMIZER
function customizer( $wp_customize ){

  // Add Settings
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