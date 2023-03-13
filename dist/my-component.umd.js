(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["my-component"] = factory(require("vue"));
	else
		root["my-component"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__203__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 203:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/CanvasGrid.vue?vue&type=template&id=6c547658&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-6c547658"),n=n(),_popScopeId(),n)
const _hoisted_1 = { class: "columns-container" }
const _hoisted_2 = ["id"]
const _hoisted_3 = ["width", "height"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_1, [
      ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.rows, (row, rowIndex) => {
        return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
          key: rowIndex,
          class: "row"
        }, [
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.columns, (column, columnIndex) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
              key: columnIndex,
              id: 'column-' + columnIndex + '-row-' + rowIndex,
              class: "column"
            }, [
              (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("canvas", {
                ref_for: true,
                ref: 'canvas-' + columnIndex + '-row-' + rowIndex,
                width: $data.columnWidth,
                height: $data.rowHeight
              }, null, 8, _hoisted_3)
            ], 8, _hoisted_2))
          }), 128))
        ]))
      }), 128))
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/CanvasGrid.vue?vue&type=template&id=6c547658&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/CanvasGrid.vue?vue&type=script&lang=js

/* harmony default export */ const CanvasGridvue_type_script_lang_js = ({
  name: 'CanvasGrid',
  props: {
    columns: {
      type: Number,
      default: 5,
    },
    rows: {
      type: Number,
      default: 3,
    },
    image: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      canvasWidth: 0,
      canvasHeight: 0,
      columnWidth: 0,
      rowHeight: 0,
    };
  },
  mounted() {
  const image = new Image();
  image.src = this.image;
  image.addEventListener('load', () => {
    this.canvasWidth = image.width;
    this.canvasHeight = image.height;

    // Ensure columnWidth is divisible by columns
    let columnWidth = Math.ceil(this.canvasWidth / this.columns);
    columnWidth += (this.columns - (columnWidth % this.columns)) % this.columns;
    this.columnWidth = columnWidth;

    this.rowHeight = Math.ceil(this.canvasHeight / this.rows);

    const columnImages = [];
    for (let i = 0; i < this.columns; i++) {
      columnImages[i] = [];
      for (let j = 0; j < this.rows; j++) {
        columnImages[i][j] = new Image();
        columnImages[i][j].src = this.image;
        columnImages[i][j].addEventListener('load', () => {
          const canvas = this.$refs['canvas-' + i + '-row-' + j][0];
          const context = canvas.getContext('2d');
          context.drawImage(columnImages[i][j], i * this.columnWidth, j * this.rowHeight, this.columnWidth, this.rowHeight, 0, 0, this.columnWidth, this.rowHeight);
        });
      }
    }
  });
},

});

;// CONCATENATED MODULE: ./src/CanvasGrid.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-52.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/CanvasGrid.vue?vue&type=style&index=0&id=6c547658&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/CanvasGrid.vue?vue&type=style&index=0&id=6c547658&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/CanvasGrid.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CanvasGridvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-6c547658"]])

/* harmony default export */ const CanvasGrid = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (CanvasGrid);


})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=my-component.umd.js.map