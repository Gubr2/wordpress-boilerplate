<?php 

  $context = Timber::context();
  $context['post'] = new Timber\Post();

  Timber::render('default/front-page.twig', $context);