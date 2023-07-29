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

echo "Is the block primary? (Y/N)"
read primary

primary_lowercase=$(echo "$primary" | tr '[:upper:]' '[:lower:]')

if [ "$primary_lowercase" = "y" ]; then
  isPrimary=true
elif [ "$primary_lowercase" = "n" ]; then
  isPrimary=false
fi

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
php="
<?php

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

if [ "$isPrimary" = true ] ; then
  # //////////////////////////////////////////////////////////////////////
  # ---> Primary
  js="
  import './$name.scss'

  // ---> Wordpress
  import { TextControl } from '@wordpress/components'
  import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor'
  import { registerBlockType } from '@wordpress/blocks'

  // ---> Custom
  import { Wrapper, Item, Label } from '../../components/custom-blocks'

  // ---> Settings
  const cb_settings = {
    title: '$full_name',
  }

  // ---> Register
  registerBlockType('primary/$name', {
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
  "

  # //////////////////////////////////////////////////////////////////////
  # ---> Additional
  else 
  js="
  import './$name.scss'

  // ---> Wordpress
  import { TextControl } from '@wordpress/components'
  import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor'
  import { registerBlockType } from '@wordpress/blocks'

  // ---> Custom
  import { Wrapper, Item, Label } from '../../components/custom-blocks'

  // ---> Settings
  const cb_settings = {
    title: '$full_name',
  }

  // ---> Register
  registerBlockType('additional/$name', {
    title: cb_settings.title,
    icon: 'block-default',
    category: 'additional',
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
        {/* <Wrapper isAdditional>
          <Item>
            <Label>Label</Label>
            <InnerBlocks renderAppender={() => <InnerBlocks.ButtonBlockAppender />} />
          </Item>
        </Wrapper> */}

        {/* Bez použitia InnerBlocks */}
        <Wrapper isAdditional>
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
  "
  fi

echo "$js" > blocks/$name/$name.js

# //
# //////////////////////////////////////////////////////////////////////
# JS FRONTEND

jsfrontend="
import './$name-frontend.scss'
"

echo "$jsfrontend" > blocks/$name/$name-frontend.js

# //
# //////////////////////////////////////////////////////////////////////
# SCSS

touch blocks/$name/$name.scss

# //
# //////////////////////////////////////////////////////////////////////
# SCSS FRONTEND
scssfrontend="
@import '../../../../themes/$theme_name/styles/variables/responsive.scss';
"

echo "$scssfrontend" > blocks/$name/$name-frontend.scss

# // 
# //////////////////////////////////////////////////////////////////////
# TWIG
twig="
<h1>$full_name</h1>
"

echo "$twig" > blocks/$name/$name.twig

# | // | // | // | // | // | // | // | // | // | // | // | // 
# | // | // | // | // | // | // | // | // | // | // | // | // 
# MODIFY INDEX.PHP
if [ "$isPrimary" = true ] ; then
echo "new RegisterBlock('$name', 'primary');" >> index.php
else 
echo "new RegisterBlock('$name', 'additional');" >> index.php
fi

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