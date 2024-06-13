import { useState } from 'react'
import { MediaUpload } from '@wordpress/block-editor'
import { Button, Icon, Flex } from '@wordpress/components'

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// WRAPPER

export function Wrapper(_props) {
  const [isOpen, setIsOpen] = _props.isOpened ? useState(true) : useState(false)

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  function removeHTMLTags(html) {
    let doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent || ''
  }

  return (
    <div className={`cb__wrapper ${_props.isAdditional ? 'cb__wrapper--additional' : ''} ${_props.isDesignComponent ? 'cb__wrapper--design-component' : ''}`} draggable>
      {_props.name ? (
        <div className={`cb__name ${_props.isAdditional ? 'cb__name--additional' : ''}`}>
          <p>{removeHTMLTags(_props.name)}</p>
          <Icon className="cb__wrapper__icon" icon={isOpen ? 'arrow-up-alt2' : 'arrow-down-alt2'} onClick={handleOpen} />
        </div>
      ) : null}
      <div
        className="cb__content"
        style={{
          display: isOpen ? 'block' : 'none',
        }}
      >
        {_props.children}
      </div>
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
  return <p className={`cb__label ${_props.isCategory ? 'cb__label--isCategory' : ''}`}>{_props.children}</p>
}

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// MEDIA
export function Media(_props) {
  // ---> Funtions
  const onFileSelect = _props.onFileSelect
  const url = _props.url
  const filename = _props.filename
  const remove = _props.remove
  const index = _props.index
  const type = _props.type
  const textAdd = _props.textAdd
  const textRemove = _props.textRemove

  const DeleteButton = () => {
    return (
      <>
        <Button
          onClick={() => {
            onFileSelect('')
          }}
          isSecondary
          isDestructive
          style={{ style: remove ? 'block' : 'none' }}
        >
          <Icon icon="trash" style={{ marginRight: '5px', display: 'block' }} />
          {textRemove}
        </Button>
      </>
    )
  }

  const UploadedControls = (_props) => {
    return (
      <>
        <div className="cb__media__right-side">
          {/* Filename */}
          <Flex onClick={_props.clickCallback} className="cb__media__uploaded-controls" justify="flex-start">
            <Icon icon="media-default" />
            {remove ? <u>{filename}</u> : ''}
          </Flex>

          {/* Button */}
          {remove ? <DeleteButton /> : ''}
        </div>
      </>
    )
  }

  // ---> Component
  if (url) {
    return (
      <div className="cb__media">
        <MediaUpload
          onSelect={(_media) => {
            onFileSelect(_media, index)
          }}
          value={1}
          render={({ open }) => {
            if (type === 'image') {
              // // // // // // // // // // // // // // //
              // IMAGE
              return (
                <>
                  <div className="cb__media--uploaded">
                    <img src={url} onClick={open} />
                  </div>
                  <UploadedControls clickCallback={open} />
                </>
              )
            } else if (type === 'video') {
              return (
                // // // // // // // // // // // // // // //
                // VIDEO
                <>
                  <div
                    className="cb__media--uploaded"
                    // style={{
                    //   width: _props.width,
                    //   height: _props.height,
                    // }}
                  >
                    <video onClick={open} playsInline muted key={url}>
                      <source src={url} type="video/mp4" />
                    </video>
                  </div>
                  <UploadedControls clickCallback={open} />
                </>
              )
            } else if (type === 'file') {
              // // // // // // // // // // // // // // //
              // FILE
              return <UploadedControls clickCallback={open} />
            }
          }}
        />
      </div>
    )
  } else {
    return (
      <MediaUpload
        onSelect={(_media) => {
          onFileSelect(_media, index)
        }}
        value={1}
        render={({ open }) => (
          <Button onClick={open} isSecondary>
            <Icon icon="upload" style={{ marginRight: '5px' }} />
            {textAdd}
          </Button>
        )}
      />
    )
  }
}

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// INFO

export function Info(_props) {
  return (
    <>
      <p className="cb__info">
        <Icon icon="info" />
        <span>{_props.children}</span>
      </p>
    </>
  )
}
