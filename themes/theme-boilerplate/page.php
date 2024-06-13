<?php 

  $context = Timber::context();
  $context['post'] = Timber::get_post();

  Timber::render('default/page.twig', $context);