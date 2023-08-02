import { MediaUpload } from '@wordpress/block-editor'
import { ButtonGroup, Button, Icon } from '@wordpress/components'

export default function Cb_image_upload(_props) {
  //
  // FUNCTIONS
  //

  const onFileSelect = _props.onFileSelect
  const removeImage = _props.removeImage
  const index = _props.index

  const DeleteButton = () => {
    return (
      <>
        <Button
          onClick={() => {
            onFileSelect('')
          }}
          isSecondary
          isDestructive
          style={{ marginTop: '10px', style: removeImage ? 'block' : 'none' }}
        >
          Smazat
        </Button>
      </>
    )
  }

  //
  // MAIN COMPONENT
  //
  if (_props.imageSrc) {
    return (
      <>
        <MediaUpload
          onSelect={(_image) => {
            onFileSelect(_image, index)
          }}
          value={1}
          render={({ open }) => {
            return (
              <>
                <div
                  className="cb__image__upload--uploaded"
                  style={{
                    width: _props.width,
                    height: _props.height,
                  }}
                >
                  <img src={_props.imageSrc} onClick={open} />
                </div>
                {removeImage ? <DeleteButton /> : ''}
              </>
            )
          }}
        />
      </>
    )
  } else {
    return (
      <MediaUpload
        onSelect={(_image) => {
          onFileSelect(_image, index)
        }}
        value={1}
        render={({ open }) => (
          <Button onClick={open} isSecondary>
            <Icon icon="upload" />
            {_props.buttonName}
          </Button>
        )}
      />
    )
  }
}
