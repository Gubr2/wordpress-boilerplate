<?php 

// ---> Remove Selected Blocks from Editor
function wpdocs_allowed_block_types ( $block_editor_context, $editor_context ) {

  $block_types = WP_Block_Type_Registry::get_instance()->get_all_registered();

  // [] Získanie custom blockov (ktoré majú uvedenú kategóriu 'custom')
  $custom = array();
  foreach($block_types as $key) {
    if ($key->category == 'custom') {
      $custom[] = $key->name;
    }
  }

  // [] Spojenie vybraných core blockov s custom blockmi
  return array_merge(
    array(
      'core/paragraph',
      'core/image',
      'core/heading',
      'core/spacer',
      'core/columns',
      'core/list',
    ), $custom
  );
}

add_filter( 'allowed_block_types_all', 'wpdocs_allowed_block_types', 10, 2 );