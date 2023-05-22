<?php 

  $context = Timber::context();
  $context['post'] = new Timber\Post();

  Timber::render('default/single.twig', $context);