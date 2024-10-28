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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);





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
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, removeHTMLTags(_props.name)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => {
        onFileSelect('');
      },
      isSecondary: true,
      isDestructive: true,
      style: {
        style: remove ? 'block' : 'none'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
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
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
      onClick: _props.clickCallback,
      className: "cb__media__uploaded-controls",
      justify: "flex-start"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: "media-default"
    }), remove ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("u", null, filename) : ''), remove ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DeleteButton, null) : ''));
  };

  // ---> Component
  if (url) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cb__media"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: _media => {
        onFileSelect(_media, index);
      },
      value: 1,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        isSecondary: true
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
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
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: "info"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _props.children)));
}

/***/ }),

/***/ "./blocks/responsivespacer/responsivespacer.scss":
/*!*******************************************************!*\
  !*** ./blocks/responsivespacer/responsivespacer.scss ***!
  \*******************************************************/
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************************************!*\
  !*** ./blocks/responsivespacer/responsivespacer.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _responsivespacer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsivespacer.scss */ "./blocks/responsivespacer/responsivespacer.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_custom_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/custom-blocks */ "./components/custom-blocks.jsx");



// ---> Wordpress




// ---> Custom


// ---> Settings
const cb_settings = {
  title: 'Responsive Spacer'
};

// ---> Register
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('designcomponent/responsivespacer', {
  title: cb_settings.title,
  icon: 'block-default',
  category: 'designcomponent',
  attributes: {
    desktop: {
      type: 'string',
      default: 0
    },
    tablet: {
      type: 'string',
      default: 0
    },
    mobile: {
      type: 'string',
      default: 0
    }
  },
  edit: EditComponent,
  save: SaveComponent
});

// // // // // // // // // // // // // // // // // // //
// EDIT

function EditComponent(_props) {
  //
  // FUNCTIONS
  //

  //
  // MAIN COMPONENT
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_5__.Wrapper, {
    isAdditional: true,
    isDesignComponent: true,
    name: cb_settings.title
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    gap: 10
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_5__.Item, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_5__.Label, null, "Desktop"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: _props.attributes.desktop,
    onChange: _e => _props.setAttributes({
      desktop: _e
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_5__.Label, null, "rem"))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_5__.Item, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_5__.Label, null, "Tablet"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: _props.attributes.tablet,
    onChange: _e => _props.setAttributes({
      tablet: _e
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_5__.Label, null, "rem"))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_5__.Item, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_5__.Label, null, "Mobile"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: _props.attributes.mobile,
    onChange: _e => _props.setAttributes({
      mobile: _e
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_custom_blocks__WEBPACK_IMPORTED_MODULE_5__.Label, null, "rem"))))))));
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
  return null;
}
/******/ })()
;
//# sourceMappingURL=responsivespacer.js.map