/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/responsivespacer/responsivespacer-frontend.scss":
/*!****************************************************************!*\
  !*** ./blocks/responsivespacer/responsivespacer-frontend.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!**************************************************************!*\
  !*** ./blocks/responsivespacer/responsivespacer-frontend.js ***!
  \**************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _responsivespacer_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsivespacer-frontend.scss */ "./blocks/responsivespacer/responsivespacer-frontend.scss");

const selector = [...document.querySelectorAll('.responsive-spacer')];
const breakpoints = {
  tablet: 1024,
  mobile: 600
};
function set() {
  selector.forEach(_selector => {
    const desktop = _selector.getAttribute('data-desktop');
    const tablet = _selector.getAttribute('data-tablet');
    const mobile = _selector.getAttribute('data-mobile');
    if (window.innerWidth > breakpoints.tablet) {
      // For Desktop
      _selector.style.height = `${desktop}rem`;
    } else if (window.innerWidth <= breakpoints.tablet && window.innerWidth > breakpoints.mobile) {
      // For Tablet
      _selector.style.height = `${tablet}rem`;
    } else if (window.innerWidth <= breakpoints.mobile) {
      // For Mobile
      _selector.style.height = `${mobile}rem`;
    }
  });
}

// INIT
set();
window.addEventListener('resize', () => {
  set();
});
/******/ })()
;
//# sourceMappingURL=responsivespacer-frontend.js.map