/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/custom-blocks.jsx":
/*!**************************************!*\
  !*** ./components/custom-blocks.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Info: () => (/* binding */ Info),
/* harmony export */   Item: () => (/* binding */ Item),
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   Media: () => (/* binding */ Media),
/* harmony export */   Wrapper: () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _custom_blocks_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-blocks.scss */ "./components/custom-blocks.scss");
/* harmony import */ var _default_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.scss */ "./components/default.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);







// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// WRAPPER

function Wrapper(_props) {
  const [isOpen, setIsOpen] = _props.isOpened ? (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true) : (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  function removeHTMLTags(html) {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `cb__wrapper ${_props.isAdditional ? 'cb__wrapper--additional' : ''} ${_props.isDesignComponent ? 'cb__wrapper--design-component' : ''}`,
    draggable: true
  }, _props.name ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `cb__name ${_props.isAdditional ? 'cb__name--additional' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, removeHTMLTags(_props.name)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
    className: "cb__wrapper__icon",
    icon: isOpen ? 'arrow-up-alt2' : 'arrow-down-alt2',
    onClick: handleOpen
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cb__content",
    style: {
      display: isOpen ? 'block' : 'none'
    }
  }, _props.children));
}

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// ITEM

function Item(_props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cb__item"
  }, _props.children);
}

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// LABEL

function Label(_props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `cb__label ${_props.isCategory ? 'cb__label--isCategory' : ''}`
  }, _props.children);
}

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// MEDIA
function Media(_props) {
  // ---> Funtions
  const onFileSelect = _props.onFileSelect;
  const url = _props.url;
  const filename = _props.filename;
  const remove = _props.remove;
  const index = _props.index;
  const type = _props.type;
  const textAdd = _props.textAdd;
  const textRemove = _props.textRemove;
  const DeleteButton = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: () => {
        onFileSelect('');
      },
      isSecondary: true,
      isDestructive: true,
      style: {
        style: remove ? 'block' : 'none'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: "trash",
      style: {
        marginRight: '5px',
        display: 'block'
      }
    }), textRemove));
  };
  const UploadedControls = _props => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cb__media__right-side"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      onClick: _props.clickCallback,
      className: "cb__media__uploaded-controls",
      justify: "flex-start"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: "media-default"
    }), remove ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("u", null, filename) : ''), remove ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DeleteButton, null) : ''));
  };

  // ---> Component
  if (url) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cb__media"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: _media => {
        onFileSelect(_media, index);
      },
      value: 1,
      render: ({
        open
      }) => {
        if (type === 'image') {
          // // // // // // // // // // // // // // //
          // IMAGE
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            className: "cb__media--uploaded"
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
            src: url,
            onClick: open
          })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(UploadedControls, {
            clickCallback: open
          }));
        } else if (type === 'video') {
          return (
            // // // // // // // // // // // // // // //
            // VIDEO
            (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
              className: "cb__media--uploaded"
              // style={{
              //   width: _props.width,
              //   height: _props.height,
              // }}
            }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
              onClick: open,
              playsInline: true,
              muted: true,
              key: url
            }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
              src: url,
              type: "video/mp4"
            }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(UploadedControls, {
              clickCallback: open
            }))
          );
        } else if (type === 'file') {
          // // // // // // // // // // // // // // //
          // FILE
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(UploadedControls, {
            clickCallback: open
          });
        }
      }
    }));
  } else {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: _media => {
        onFileSelect(_media, index);
      },
      value: 1,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: open,
        isSecondary: true
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        icon: "upload",
        style: {
          marginRight: '5px'
        }
      }), textAdd)
    });
  }
}

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// INFO

function Info(_props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cb__info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
    icon: "info"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _props.children)));
}

/***/ }),

/***/ "./src/interactive/edit.js":
/*!*********************************!*\
  !*** ./src/interactive/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edit: () => (/* binding */ Edit),
/* harmony export */   Save: () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_custom_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/custom-blocks */ "./components/custom-blocks.jsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


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

function Edit(_props) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const onFileSelect = _media => {
    // Shorten the filename
    let filename = '';
    if (_media.filename) {
      filename = _media.filename.length > 50 ? _media.filename.substring(0, 25) + '...' + _media.filename.substring(_media.filename.length - 25) : _media.filename;
    }

    // Set the attributes
    _props.setAttributes({
      media: {
        url: _media.url,
        alt: _media.alt,
        filename
      }
    });
  };

  //
  // MAIN COMPONENT
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
    name: "Title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_1__.Item, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_1__.Label, null, "Label"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    inlineToolbar: true,
    onChange: _value => _props.setAttributes({
      text: _value
    }),
    value: _props.attributes.text
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_1__.Item, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_1__.Label, null, "Image"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_1__.Media, {
    remove: true,
    url: _props.attributes.media.url,
    filename: _props.attributes.media.filename,
    type: "image",
    textAdd: "Add Image",
    textRemove: "Remove Image",
    onFileSelect: onFileSelect
  }))));
}

// // // // // // // // // // // // // // // // // // //
// SAVE

function Save() {
  // ---> S použitím InnerBlocks
  // return <InnerBlocks.Content />

  // ---> Bez použitia InnerBlocks
  return null;
}

/***/ }),

/***/ "./src/interactive/index.js":
/*!**********************************!*\
  !*** ./src/interactive/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/interactive/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/interactive/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/interactive/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/interactive/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__.Edit,
  save: _edit__WEBPACK_IMPORTED_MODULE_3__.Save
});

/***/ }),

/***/ "./components/custom-blocks.scss":
/*!***************************************!*\
  !*** ./components/custom-blocks.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/default.scss":
/*!*********************************!*\
  !*** ./components/default.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/interactive/editor.scss":
/*!*************************************!*\
  !*** ./src/interactive/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/interactive/style.scss":
/*!************************************!*\
  !*** ./src/interactive/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/interactive/block.json":
/*!************************************!*\
  !*** ./src/interactive/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"boilerplate/interactive","version":"0.1.0","title":"Test","category":"primary","icon":"block-default","description":"An interactive block with the Interactivity API","example":{},"supports":{"interactivity":true},"attributes":{"text":{"type":"string","default":""},"media":{"type":"object","default":{"url":"","alt":""}}},"textdomain":"blocks-boilerplate-new","editorScript":"file:./index.js","editorStyle":"file:./index.css","render":"file:./render.php","style":"file:./style-index.css","viewScriptModule":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"interactive/index": 0,
/******/ 			"interactive/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkblocks_boilerplate_new"] = globalThis["webpackChunkblocks_boilerplate_new"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["interactive/style-index"], () => (__webpack_require__("./src/interactive/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map