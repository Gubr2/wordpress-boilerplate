<?php 

  $context = Timber::context();
  $context['post'] = new Timber\Post();

  Timber::render('default/404.twig', $context);