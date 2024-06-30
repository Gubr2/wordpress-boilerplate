import { Item, Label, Wrapper, Media } from '../../components/custom-blocks'
import { TextControl } from '@wordpress/components'
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor'

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
// import { useBlockProps } from '@wordpress/block-editor'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {Element} Element to render.
 */

export function Edit(_props) {
  const blockProps = useBlockProps()

  const onFileSelect = (_media) => {
    // Shorten the filename
    let filename = ''

    if (_media.filename) {
      filename = _media.filename.length > 50 ? _media.filename.substring(0, 25) + '...' + _media.filename.substring(_media.filename.length - 25) : _media.filename
    }

    // Set the attributes
    _props.setAttributes({
      media: {
        url: _media.url,
        alt: _media.alt,
        filename,
      },
    })
  }

  //
  // MAIN COMPONENT
  //
  return (
    <div {...blockProps}>
      {/* S použitím InnerBlocks */}
      {/* <Wrapper name={cb_settings.title}>
        <Item>
          <Label>Label</Label>
          <InnerBlocks renderAppender={() => <InnerBlocks.ButtonBlockAppender />} />
        </Item>
      </Wrapper> */}

      {/* Bez použitia InnerBlocks */}
      <Wrapper name="Title">
        <Item>
          <Label>Label</Label>
          <RichText inlineToolbar onChange={(_value) => _props.setAttributes({ text: _value })} value={_props.attributes.text} />
        </Item>
        <Item>
          <Label>Image</Label>
          <Media remove url={_props.attributes.media.url} filename={_props.attributes.media.filename} type="image" textAdd="Add Image" textRemove="Remove Image" onFileSelect={onFileSelect} />
        </Item>
      </Wrapper>
    </div>
  )
}

// // // // // // // // // // // // // // // // // // //
// SAVE

export function Save() {
  // ---> S použitím InnerBlocks
  // return <InnerBlocks.Content />

  // ---> Bez použitia InnerBlocks
  return null
}
