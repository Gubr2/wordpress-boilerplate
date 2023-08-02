import './boilerplate.scss'

// ---> Wordpress
import { TextControl } from '@wordpress/components'
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor'
import { registerBlockType } from '@wordpress/blocks'

// ---> Custom
import { Wrapper, Item, Label } from '../../components/custom-blocks'

// ---> Settings
const cb_settings = {
  title: 'Boilerplate',
}

// ---> Register
registerBlockType('primary/boilerplate', {
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
      {/* <Wrapper name={cb_settings.title}>
        <Item>
          <Label>Label</Label>
          <InnerBlocks renderAppender={() => <InnerBlocks.ButtonBlockAppender />} />
        </Item>
      </Wrapper> */}

      {/* Bez použitia InnerBlocks */}
      <Wrapper name={cb_settings.title}>
        <Item>
          <Label>Label</Label>
          <RichText inlineToolbar />
        </Item>
        <Item>
          <Label>Label</Label>
          <TextControl />
        </Item>
      </Wrapper>
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
