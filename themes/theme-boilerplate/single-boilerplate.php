<?php 

  $context = Timber::context();
  $context['post'] = new Timber\Post();

  Timber::render('post-types/single-boilerplate.twig', $context);