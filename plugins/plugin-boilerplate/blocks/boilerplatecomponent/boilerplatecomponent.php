<?php

function boilerplatecomponent($attributes, $content) {
  $context = Timber::context();
  // ---> Block
  $context['block'] = $attributes;

  // ---> Content
  if ($content) {
    $context['content'] = $content;
  }

  $result = Timber::compile('boilerplatecomponent.twig', $context);
  
  return $result;
}

