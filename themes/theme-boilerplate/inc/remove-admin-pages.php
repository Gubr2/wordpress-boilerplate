<?php

add_action( 'admin_menu', 'my_remove_menu_pages' );

function my_remove_menu_pages() {
  // remove_menu_page( 'edit.php' );                   //Posts
  // remove_menu_page( 'upload.php' );                 //Media
  // remove_menu_page( 'edit-comments.php' );          //Comments
};