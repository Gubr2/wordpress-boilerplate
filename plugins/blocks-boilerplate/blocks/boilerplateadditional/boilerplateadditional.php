<?php

function boilerplateadditional($attributes, $content) {
  $context = Timber::context();
  // ---> Block
  $context['block'] = $attributes;

  // ---> Content
  if ($content) {
    $context['content'] = $content;
  }

  $result = Timber::compile('boilerplateadditional.twig', $context);
  
  return $result;
}

