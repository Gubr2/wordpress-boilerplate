<?php 

  $context = Timber::context();
  $context['post'] = Timber::get_post();

  Timber::render('post-types/single-boilerplate.twig', $context);