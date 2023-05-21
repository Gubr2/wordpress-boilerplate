import './boilerplate.scss'

import { TextControl } from '@wordpress/components'
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'
import Cb_wrapper from '../../components/Cb_wrapper'
import Cb_label from '../../components/Cb_label'
import Cb_item from '../../components/CB__item'

let cb_settings = {
  title: 'Boilerplate',
}

wp.blocks.registerBlockType('primary/boilerplate', {
  title: cb_settings.title,
  icon: 'block-default',
  category: 'primary',
  attributes: {
    variable: {
      type: 'string',
    },
  },
  edit: EditComponent,
  save: SaveComponent,
})

// // // // // // // // // // // // // // // // // // //
// EDIT

function EditComponent(_props) {
  //
  // FUNCTIONS
  //

  // ---> Nahradiť funkciami

  //
  // MAIN COMPONENT
  //
  return (
    <>
      {/* S použitím InnerBlocks */}
      {/* <Cb_wrapper name={cb_settings.title}>
        <Cb_item {...useBlockProps()}>
          <Cb_label text="Obsah" />
          <InnerBlocks renderAppender={() => <InnerBlocks.ButtonBlockAppender />} />
        </Cb_item>
      </Cb_wrapper> */}

      {/* Bez použitia InnerBlocks */}
      <Cb_wrapper name={cb_settings.title}>
        <Cb_item>
          <Cb_label text="Boilerplate" />
          <TextControl />
        </Cb_item>
      </Cb_wrapper>
    </>
  )
}

// // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // //
// SAVE

function SaveComponent() {
  // ---> S použitím "InnerBlocks"
  // return <InnerBlocks.Content />

  // ---> Bez použitia "InnerBlocks"
  return null
}
