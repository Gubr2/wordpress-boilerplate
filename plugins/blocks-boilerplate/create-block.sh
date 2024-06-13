#!/usr/bin/bash

# ? // ? // ? // ? // ? // ? // ? // ? // ? // ? // ? // ? // 
# ? // ? // ? // ? // ? // ? // ? // ? // ? // ? // ? // ? // 
# QUESTIONS

echo "Block file name:"
read name

echo "Block full name:"
read full_name

echo "Theme file name:"
read theme_name

echo "Block category name:"
read category

# + // + // + // + // + // + // + // + // + // + // + // + // 
# + // + // + // + // + // + // + // + // + // + // + // + // 
# CREATE DIRECTORY
mkdir ./blocks/$name

# + // + // + // + // + // + // + // + // + // + // + // + // 
# + // + // + // + // + // + // + // + // + // + // + // + // 
# CREATE FILES

# // 
# //////////////////////////////////////////////////////////////////////
# PHP
php="<?php

function $name(\$attributes, \$content) {
  \$context = Timber::context();
  // ---> Block
  \$context['block'] = \$attributes;

  // ---> Content
  if (\$content) {
    \$context['content'] = \$content;
  }

  \$result = Timber::compile('$name.twig', \$context);
  
  return \$result;
}
"

echo "$php" > blocks/$name/$name.php

# //
# //////////////////////////////////////////////////////////////////////
# JS
js="import './$name.scss'

// ---> Wordpress
import { TextControl } from '@wordpress/components'
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor'
import { registerBlockType } from '@wordpress/blocks'

// ---> Custom
import { Wrapper, Item, Label, Media } from '../../components/custom-blocks'

// ---> Settings
const cb_settings = {
  title: '$full_name',
}

// ---> Register
registerBlockType('$category/$name', {
  title: cb_settings.title,
  icon: 'block-default',
  category: '$category',
  attributes: {
    media: {
      type: 'object',
      default: {
        url: '',
        alt: '',
      },
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
          <Label>Image</Label>
          <Media remove url={_props.attributes.media.url} filename={_props.attributes.media.filename} type='image' textAdd='Add Image' textRemove='Remove Image' onFileSelect={onFileSelect} />
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
  // ---> S použitím 'InnerBlocks'
  // return <InnerBlocks.Content />

  // ---> Bez použitia 'InnerBlocks'
  return null
}
"

echo "$js" > blocks/$name/$name.js

# //
# //////////////////////////////////////////////////////////////////////
# JS FRONTEND

jsfrontend="import './$name-frontend.scss'"

echo "$jsfrontend" > blocks/$name/$name-frontend.js

# //
# //////////////////////////////////////////////////////////////////////
# SCSS

touch blocks/$name/$name.scss

# //
# //////////////////////////////////////////////////////////////////////
# SCSS FRONTEND
scssfrontend="@import '../../../../themes/$theme_name/styles/variables/responsive.scss';"

echo "$scssfrontend" > blocks/$name/$name-frontend.scss

# // 
# //////////////////////////////////////////////////////////////////////
# TWIG
twig="<h1>$full_name</h1>"

echo "$twig" > blocks/$name/$name.twig

# | // | // | // | // | // | // | // | // | // | // | // | // 
# | // | // | // | // | // | // | // | // | // | // | // | // 
# MODIFY INDEX.PHP
echo "new RegisterBlock('$name', '$category');" >> index.php

# | // | // | // | // | // | // | // | // | // | // | // | // 
# | // | // | // | // | // | // | // | // | // | // | // | // 
# MODIFY PACKAGE.JSON

# ---> Config
config='"'$name'": "blocks/'$name'/'$name'.js blocks/'$name'/'$name'-frontend.js",'

sed -i '' '/"config": {/a \
'"    $config
" package.json

# ---> Build
build='$'"npm_package_config_$name"

sed -i '' "s/wp-scripts build/& $build/" "package.json";

# ---> Start
start='$'"npm_package_config_$name"

sed -i '' "s/wp-scripts start/& $start/" "package.json";