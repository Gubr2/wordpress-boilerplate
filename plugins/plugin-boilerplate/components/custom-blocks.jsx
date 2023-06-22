// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// WRAPPER

export function Wrapper(_props) {
  return (
    <div className="cb__wrapper">
      <p className="cb__name">{_props.name}</p>
      {_props.children}
    </div>
  )
}

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// ITEM

export function Item(_props) {
  return <div className="cb__item">{_props.children}</div>
}

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// LABEL

export function Label(_props) {
  return <p className="cb__label">{_props.children}</p>
}

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// IMAGE
export function Image(_props) {
  // ---> Funtions
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
          Remove
        </Button>
      </>
    )
  }

  // ---> Component
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
