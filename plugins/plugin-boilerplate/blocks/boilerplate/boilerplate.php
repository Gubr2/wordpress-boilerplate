<?php

function boilerplate($attributes, $content) {
  $context = Timber::context();
  // ---> Block
  $context['block'] = $attributes;

  // ---> Content
  if ($content) {
    $context['content'] = $content;
  }

  $result = Timber::compile('boilerplate.twig', $context);
  
  return $result;
}

