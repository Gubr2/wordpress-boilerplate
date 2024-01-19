<?php

// ---> Zmena loga v admine
function my_login_logo() { ?>
  <style type="text/css">
    #login h1 a, .login h1 a {
      background-image: url(<?php echo esc_url( wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' )[0] ); ?>);
      width: 100%;
      background-size: contain;
    }
  </style>
<?php }

add_action( 'login_enqueue_scripts', 'my_login_logo' );