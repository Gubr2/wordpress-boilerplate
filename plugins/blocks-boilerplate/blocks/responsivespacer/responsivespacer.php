<?php

function responsivespacer($attributes, $content) {
  $context = Timber::context();
  // ---> Block
  $context['block'] = $attributes;

  // ---> Content
  if ($content) {
    $context['content'] = $content;
  }

  $result = Timber::compile('responsivespacer.twig', $context);
  
  return $result;
}

