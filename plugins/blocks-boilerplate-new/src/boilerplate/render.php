<?php

$pluginDir = str_replace( "/build/", "/src/", __DIR__ );

$context = Timber::context();

// ---> Block
$context['block'] = $attributes;

// ---> Content
if ($content) {
  $context['content'] = $content;
}

Timber::render( $pluginDir . '/view.twig', $context);