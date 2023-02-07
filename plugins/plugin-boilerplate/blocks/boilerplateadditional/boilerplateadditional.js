import './boilerplateadditional.scss'

import { Flex, FlexBlock, TextControl } from '@wordpress/components'
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'
import Cb_wrapper from '../../components/Cb_wrapper'
import Cb_label from '../../components/Cb_label'
import Cb_item from '../../components/Cb_item'
import Cb_image_upload from '../../components/Cb_image_upload'

let cb_settings = {
  title: 'Boilerplate Additional',
}

wp.blocks.registerBlockType('additionalcategoryname/boilerplateadditional', {
  title: cb_settings.title,
  icon: 'table-row-after',
  category: 'additionalcategoryname',
  attributes: {
    img: {
      type: 'string',
    },
    count: {
      type: 'string',
    },
    description: {
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
    <Cb_wrapper name={cb_settings.title} level={2}>
      <Cb_item>
        <Cb_label text="Doplňkový blok" />
      </Cb_item>
    </Cb_wrapper>
  )
}

// // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // //
// SAVE

function SaveComponent(_props) {
  return (
    <div class="boilerplateadditional">
      <p>Additional Boilerplate</p>
    </div>
  )
}
