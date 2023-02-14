<?php 

  $context = Timber::context();
  $context['post'] = new Timber\Post();

  Timber::render('default/page.twig', $context);