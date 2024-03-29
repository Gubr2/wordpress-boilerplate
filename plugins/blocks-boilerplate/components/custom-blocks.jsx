import { useState } from 'react'
import { MediaUpload } from '@wordpress/block-editor'
import { Button, Icon } from '@wordpress/components'

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

  return (
    <div className={`cb__wrapper ${_props.isAdditional ? 'cb__wrapper--additional' : ''} ${_props.isDesignComponent ? 'cb__wrapper--design-component' : ''}`} draggable>
      {_props.name ? (
        <div className={`cb__name ${_props.isAdditional ? 'cb__name--additional' : ''}`}>
          <p>{_props.name}</p>
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
  return <p className="cb__label">{_props.children}</p>
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
          style={{ marginTop: '10px', style: remove ? 'block' : 'none' }}
        >
          <Icon icon="trash" style={{ marginRight: '5px', display: 'block' }} />
          {textRemove}
        </Button>
      </>
    )
  }

  // ---> Component
  if (url) {
    return (
      <>
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
                <div
                  className="cb__media--uploaded"
                  style={{
                    width: _props.width,
                    height: _props.height,
                  }}
                >
                  <img src={url} onClick={open} style={{ position: `${_props.height ? 'absolute' : 'relative'}` }} />
                </div>
              )
            } else if (type === 'video') {
              return (
                // // // // // // // // // // // // // // //
                // VIDEO
                <div
                  className="cb__media--uploaded"
                  style={{
                    width: _props.width,
                    height: _props.height,
                  }}
                >
                  <video onClick={open} controls key={url} style={{ position: `${_props.height ? 'absolute' : 'relative'}` }}>
                    <source src={url} type="video/mp4" />
                  </video>
                </div>
              )
            } else if (type === 'file') {
              // // // // // // // // // // // // // // //
              // FILE
              return (
                <div className="cb__media--uploaded" onClick={open}>
                  <p>
                    <Icon icon="media-default" />
                    <u>{filename}</u>
                  </p>
                </div>
              )
            }
          }}
        />
        {/* Button */}
        {remove ? <DeleteButton /> : ''}
      </>
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
