import './editor.scss'

import { Item, Label, Wrapper, Media, MediaSingle } from '../../../blocks-custom/components/custom-blocks'
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor'
import metadata from './block.json'

import { __ } from '@wordpress/i18n'

export function Edit(_props) {
  //
  // MAIN COMPONENT
  //
  return (
    <div {...useBlockProps()}>
      {/* S použitím InnerBlocks */}
      {/* <Wrapper name={metadata.title}>
				<Item>
					<Label>Label</Label>
					<InnerBlocks
						renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
					/>
				</Item>
			</Wrapper> */}

      {/* Bez použitia InnerBlocks */}
      <Wrapper name={metadata.title}>
        <Item>
          <Label>Label</Label>
          <RichText inlineToolbar onChange={(_value) => _props.setAttributes({ text: _value })} value={_props.attributes.text} />
        </Item>
        <Item>
          <Label>Media</Label>
          <Media parentProps={_props} attributeName={'media'} />
        </Item>
      </Wrapper>
    </div>
  )
}

// // // // // // // // // // // // // // // // // // //
// SAVE

export function Save() {
  // ---> S použitím InnerBlocks
  // return <InnerBlocks.Content />;

  // ---> Bez použitia InnerBlocks
  return null
}
