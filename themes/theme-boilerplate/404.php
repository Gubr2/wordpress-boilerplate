<?php 

  $context = Timber::context();
  $context['post'] = new Timber\Post();

  Timber::render('pages/404.twig', $context);