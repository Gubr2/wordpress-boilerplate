<?php 

  $context = Timber::context();
  $context['post'] = Timber::get_post();

  Timber::render('post-types/archive-boilerplate.twig', $context);