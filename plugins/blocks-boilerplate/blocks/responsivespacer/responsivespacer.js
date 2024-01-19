import './responsivespacer.scss'

// ---> Wordpress
import { Flex, FlexBlock, FlexItem, TextControl } from '@wordpress/components'
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor'
import { registerBlockType } from '@wordpress/blocks'

// ---> Custom
import { Wrapper, Item, Label, Media } from '../../components/custom-blocks'

// ---> Settings
const cb_settings = {
  title: 'Responsive Spacer',
}

// ---> Register
registerBlockType('designcomponent/responsivespacer', {
  title: cb_settings.title,
  icon: 'block-default',
  category: 'designcomponent',
  attributes: {
    desktop: {
      type: 'string',
      default: 0,
    },
    tablet: {
      type: 'string',
      default: 0,
    },
    mobile: {
      type: 'string',
      default: 0,
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
      <Wrapper isAdditional isDesignComponent name={cb_settings.title}>
        <Flex gap={10}>
          <FlexBlock>
            <Item>
              <Label>Desktop</Label>
              <Flex>
                <FlexBlock>
                  <TextControl value={_props.attributes.desktop} onChange={(_e) => _props.setAttributes({ desktop: _e })} />
                </FlexBlock>
                <FlexItem>
                  <Label>rem</Label>
                </FlexItem>
              </Flex>
            </Item>
          </FlexBlock>
          <FlexBlock>
            <Item>
              <Label>Tablet</Label>
              <Flex>
                <FlexBlock>
                  <TextControl value={_props.attributes.tablet} onChange={(_e) => _props.setAttributes({ tablet: _e })} />
                </FlexBlock>
                <FlexItem>
                  <Label>rem</Label>
                </FlexItem>
              </Flex>
            </Item>
          </FlexBlock>
          <FlexBlock>
            <Item>
              <Label>Mobile</Label>
              <Flex>
                <FlexBlock>
                  <TextControl value={_props.attributes.mobile} onChange={(_e) => _props.setAttributes({ mobile: _e })} />
                </FlexBlock>
                <FlexItem>
                  <Label>rem</Label>
                </FlexItem>
              </Flex>
            </Item>
          </FlexBlock>
        </Flex>
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
  // ---> S použitím InnerBlocks
  // return <InnerBlocks.Content />

  // ---> Bez použitia InnerBlocks
  return null
}
