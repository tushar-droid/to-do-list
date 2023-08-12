/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Poppins-Regular.ttf */ "./src/assets/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'poppins';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}


:root{
    --bg: #172554;
    --ft: #f5f3ff;
}


body{
    margin:0;
    padding:0;
    font-family: 'poppins';
    transition: all 0.3;
}

.content{
    height:100vh;
    width:100vw;    
    display: flex;    
}

.left{
    flex:1;
    background-color: var(--bg);
    color:var(--ft);
    display: flex;
    flex-direction: column;
    padding: 2%;
}

.logo{
    font-size: 60px;
    font-weight: 900;
    padding:2%;
}

.project-container{
    margin-top: 2%;
    outline: solid white;
    padding: 4%;
    font-size: 25px;
    display: grid;
    gap:40px;
    grid-template-rows: 100px;
    grid-template-columns: 100%;
    grid-auto-rows: 100px;
}

.project-container > div{
    outline: white solid;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    gap:10%;
}

.right{
    flex:4;
    background-color: var(--ft);
    padding:2%;
}

.project-head{
    outline: solid black;
    text-align: center;
    font-size: 40px;
}

.todo-container{
    outline: yellowgreen solid;
    padding: 2%;
    height:80%;
    display: flex;
    flex-direction: column;
    gap:30px;
    font-size: 30px;
}

.todo-container > div{
    background-color: lightgray;
    padding-left: 2%;
    height: 60px;
    display: flex;
    align-items: center;
}
.todo-container > button{
    background-color: lightgray;
    padding-left: 2%;
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 30px;
}

.create-project-btn{
    background-color: lightgray;
    font-size: 40px;
    margin-top: 40px;
}

.delete-project-icon{
    height: 50%;
    filter: invert(100%);
}

.add-new-todo-btn{
    display: flex;
    justify-content: center;
    outline: black solid
}

.active-project{
    background-color: green;
}

.todo-item{
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
}

.todo-item > .delete-todo-icon {
    height: 80%;
    filter: invert(0%);
}


.backdrop{
    position: absolute;
    left: 0;
    top:0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.486);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal{
    background-color: white;
    height:50%;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 30px;
    overflow: hidden;
}

form{
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 10%;
}

form >*{
    font-size: 30px;
}


.desc-container{
    display: flex;
    align-items: center;
}

.close-modal{
    position: absolute;
    top:5%;
    right: 5%;
}

.submit-btn{
    grid-column: 1 /3;
    font-size: 30px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,4CAAwC;AAC5C;;;AAGA;IACI,aAAa;IACb,aAAa;AACjB;;;AAGA;IACI,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,MAAM;IACN,2BAA2B;IAC3B,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,WAAW;IACX,eAAe;IACf,aAAa;IACb,QAAQ;IACR,yBAAyB;IACzB,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,OAAO;AACX;;AAEA;IACI,MAAM;IACN,2BAA2B;IAC3B,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,WAAW;IACX,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;;AAGA;IACI,kBAAkB;IAClB,OAAO;IACP,KAAK;IACL,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,UAAU;IACV,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB","sourcesContent":["@font-face {\r\n    font-family: 'poppins';\r\n    src: url('./assets/Poppins-Regular.ttf');\r\n}\r\n\r\n\r\n:root{\r\n    --bg: #172554;\r\n    --ft: #f5f3ff;\r\n}\r\n\r\n\r\nbody{\r\n    margin:0;\r\n    padding:0;\r\n    font-family: 'poppins';\r\n    transition: all 0.3;\r\n}\r\n\r\n.content{\r\n    height:100vh;\r\n    width:100vw;    \r\n    display: flex;    \r\n}\r\n\r\n.left{\r\n    flex:1;\r\n    background-color: var(--bg);\r\n    color:var(--ft);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 2%;\r\n}\r\n\r\n.logo{\r\n    font-size: 60px;\r\n    font-weight: 900;\r\n    padding:2%;\r\n}\r\n\r\n.project-container{\r\n    margin-top: 2%;\r\n    outline: solid white;\r\n    padding: 4%;\r\n    font-size: 25px;\r\n    display: grid;\r\n    gap:40px;\r\n    grid-template-rows: 100px;\r\n    grid-template-columns: 100%;\r\n    grid-auto-rows: 100px;\r\n}\r\n\r\n.project-container > div{\r\n    outline: white solid;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap:10%;\r\n}\r\n\r\n.right{\r\n    flex:4;\r\n    background-color: var(--ft);\r\n    padding:2%;\r\n}\r\n\r\n.project-head{\r\n    outline: solid black;\r\n    text-align: center;\r\n    font-size: 40px;\r\n}\r\n\r\n.todo-container{\r\n    outline: yellowgreen solid;\r\n    padding: 2%;\r\n    height:80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap:30px;\r\n    font-size: 30px;\r\n}\r\n\r\n.todo-container > div{\r\n    background-color: lightgray;\r\n    padding-left: 2%;\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.todo-container > button{\r\n    background-color: lightgray;\r\n    padding-left: 2%;\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 30px;\r\n}\r\n\r\n.create-project-btn{\r\n    background-color: lightgray;\r\n    font-size: 40px;\r\n    margin-top: 40px;\r\n}\r\n\r\n.delete-project-icon{\r\n    height: 50%;\r\n    filter: invert(100%);\r\n}\r\n\r\n.add-new-todo-btn{\r\n    display: flex;\r\n    justify-content: center;\r\n    outline: black solid\r\n}\r\n\r\n.active-project{\r\n    background-color: green;\r\n}\r\n\r\n.todo-item{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 10%;\r\n}\r\n\r\n.todo-item > .delete-todo-icon {\r\n    height: 80%;\r\n    filter: invert(0%);\r\n}\r\n\r\n\r\n.backdrop{\r\n    position: absolute;\r\n    left: 0;\r\n    top:0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgba(0, 0, 0, 0.486);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal{\r\n    background-color: white;\r\n    height:50%;\r\n    width: 45%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    font-size: 30px;\r\n    overflow: hidden;\r\n}\r\n\r\nform{\r\n    display: grid;\r\n    grid-template-columns: max-content max-content;\r\n    grid-gap: 10%;\r\n}\r\n\r\nform >*{\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n.desc-container{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.close-modal{\r\n    position: absolute;\r\n    top:5%;\r\n    right: 5%;\r\n}\r\n\r\n.submit-btn{\r\n    grid-column: 1 /3;\r\n    font-size: 30px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMcontroller.js":
/*!******************************!*\
  !*** ./src/DOMcontroller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openTodoModal: () => (/* binding */ openTodoModal),
/* harmony export */   showProjects: () => (/* binding */ showProjects),
/* harmony export */   showTodos: () => (/* binding */ showTodos),
/* harmony export */   shownewTodo: () => (/* binding */ shownewTodo)
/* harmony export */ });
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/delete.svg */ "./src/assets/delete.svg");


function showProjects(projects){
    const container = document.querySelector('.project-container');
    container.innerHTML  = '';
    projects.forEach((project,id) => {        
        const block = document.createElement('div');
        block.classList.add('project');
        block.setAttribute('id', id);
        block.textContent = project.name;
        const delIcon = new Image();
        delIcon.classList.add('delete-project-icon');
        delIcon.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
        delIcon.setAttribute('projectId', id);
        block.appendChild(delIcon);
        container.appendChild(block)
   });

}

function showTodos(alltodos, pr_name){
    const heading = document.querySelector('.project-head');
    heading.textContent = pr_name;
    const container = document.querySelector('.todo-container')
    container.innerHTML = '';
    alltodos.forEach((todo, ind) => {
        const todo_block = document.createElement('div');
        todo_block.classList.add('todo-item');
        todo_block.setAttribute('todo-id', ind)


    //add new divs to accomodate title, desc, duedate, and priority
    
    todo_block.textContent = todo.name;
    

    //till here
        
        
        const delIcon = new Image();
        delIcon.classList.add('delete-todo-icon');
        delIcon.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
        todo_block.appendChild(delIcon);
        container.appendChild(todo_block);
    });
    const addtodobtn = document.createElement('div');
    addtodobtn.classList.add(`add-new-todo-btn`);
    addtodobtn.textContent = "Add New Todo";
    container.appendChild(addtodobtn);  
}

function shownewTodo(todo, ind){
    const container = document.querySelector('.todo-container')
    const todo_block = document.createElement('div');
    todo_block.classList.add('todo-item');
    
    
    //add new divs to accomodate title, desc, duedate, and priority
    
    todo_block.textContent = todo.name;
    

    //till here


    todo_block.setAttribute('todo-id', ind)
    const delIcon = new Image();
    delIcon.classList.add('delete-todo-icon');
    delIcon.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
    todo_block.appendChild(delIcon);
    const btn = document.querySelector('.add-new-todo-btn')
    container.insertBefore(todo_block, btn)
}

function openTodoModal(){
    const backdrop = document.createElement('div');
    const modal = document.createElement('div');
    const btn = document.createElement('button');
    

    backdrop.classList.add('backdrop');
    modal.classList.add('modal');
    btn.classList.add('close-modal');
    btn.textContent = 'X';

    btn.addEventListener('click', function(){
        backdrop.style.display = 'none';
    });


    createForm(modal);
    modal.appendChild(btn);
    backdrop.appendChild(modal);    
    document.body.appendChild(backdrop);       


}

function createForm(container){
    container.innerHTML = `
    <form method="POST">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" required></textarea>
        <label for="duedate">Due Date:</label>
        <input type="text" id="duedate" name="duedate" required>

        <label for="priority">Priority:</label>
        <select id="priority" name="priority" required>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

        <input type="button" value="Submit" class='submit-btn'>
    </form>
    `
}





/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainPage)
/* harmony export */ });

function mainPage(){
    const container = document.querySelector('.content');
    container.appendChild(left());
    container.appendChild(right());
}

const left = () =>{
    const left_side= document.createElement('div');
    left_side.classList.add('left');

    // logo
    const logo = document.createElement('logo');
    logo.textContent = 'To-Do List';
    logo.classList.add('logo')

    // project container
    const project_container = document.createElement('div');
    project_container.classList.add('project-container');

    // adding stuff to the left side container
    left_side.appendChild(logo);
    left_side.appendChild(project_container);

    const add_project_btn = document.createElement('button');
    add_project_btn.classList.add('create-project-btn');
    add_project_btn.textContent = `Add project`;
    left_side.appendChild(add_project_btn);
    return left_side;
}





const right = () =>{
    const right_side= document.createElement('div');
    right_side.classList.add('right');

    // project heading
    const heading = document.createElement('h1');
    heading.textContent = 'Project Name';
    heading.classList.add('project-head');

    // todo container
    const todo_cont = document.createElement('div');
    todo_cont.classList.add('todo-container');
    const default_todo = document.createElement('div');
    default_todo.textContent = "Select or Add a new project!!";
    todo_cont.appendChild(default_todo);
    
    right_side.appendChild(heading);
    right_side.appendChild(todo_cont);


    return right_side;
}

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectFactory)
/* harmony export */ });
function ProjectFactory(name){
    var alltodos = [];
    const getAllTodos = () => alltodos;
    const addTodo = (todo) => alltodos.push(todo);
    const todosInd = () => alltodos.length-1;
    return {name, alltodos, getAllTodos, addTodo, todosInd};
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoFactory)
/* harmony export */ });
function todoFactory(name, desc, duedate, priority){
    var complete = false;
    const isComplete = () =>{complete = !complete}
    return {name, desc, duedate, priority}
}




/***/ }),

/***/ "./src/assets/Poppins-Regular.ttf":
/*!****************************************!*\
  !*** ./src/assets/Poppins-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde675c38d54979f589e.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage */ "./src/mainPage.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _DOMcontroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMcontroller */ "./src/DOMcontroller.js");





const servePage = (() =>{
    var projectslist = [];
    (0,_mainPage__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const project_btn = document.querySelector('.create-project-btn');
    project_btn.addEventListener('click', function(){
        const name= window.prompt('Enter Name for the Project: ');
        if (name){
        projectslist.push((0,_projects__WEBPACK_IMPORTED_MODULE_3__["default"])(name));
        }
        else{
            alert("Name cannot be Empty")            
        }
        projectscontroller();


    });
    function projectscontroller(){
        (0,_DOMcontroller__WEBPACK_IMPORTED_MODULE_4__.showProjects)(projectslist);      
        const proj = document.querySelectorAll('.project');
        const delbtn = document.querySelectorAll('.delete-project-icon');

        proj.forEach(btn => {
            btn.addEventListener("click", projectClick); 
        });
        delbtn.forEach(element => {
            element.addEventListener('click', deleteProject)
        });
    }


    function projectClick(event){
        const prev_proj = document.querySelector('.active-project');                
                if(prev_proj){
                    prev_proj.classList.remove('active-project');
                    console.log('this also worked')
                }                                    
                this.classList.add('active-project');
                var target_id = event.target.id;
                if(event.target.className == 'delete-project-icon'){                    
                    target_id = this.id-1;                    
                    const prev_elem = document.getElementById(target_id);
                    prev_elem.classList.add('active-project');
                }
                (0,_DOMcontroller__WEBPACK_IMPORTED_MODULE_4__.showTodos)(projectslist[target_id].getAllTodos(), projectslist[target_id].name);          
                TodoController(target_id);   
    }



    
    function deleteProject(event){
        const projectId = this.getAttribute("projectid");
        projectslist.splice(projectId, 1);        
        projectscontroller();
        // const prev_project = document.getElementById(projectId-1);        
    }

    function TodoController(target_id){
        var delTodoIcon = document.querySelectorAll('.delete-todo-icon');
        delTodoIcon.forEach(el => {
            el.addEventListener('click', deleteTodo)
        });          
        const addbtn = document.querySelector('.add-new-todo-btn');
        addbtn.addEventListener('click', function(){
            (0,_DOMcontroller__WEBPACK_IMPORTED_MODULE_4__.openTodoModal)();
            var title, desc, duedate, priority;

            const submitBtn = document.querySelector('.submit-btn');
            submitBtn.addEventListener('click', function(){
                title = document.getElementById('title').value;
                desc = document.getElementById('description').value;
                duedate = document.getElementById('duedate').value;
                priority = document.getElementById('priority').value;
                var newtodo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__["default"])(title, desc, duedate, priority);
                projectslist[target_id].addTodo(newtodo);
                (0,_DOMcontroller__WEBPACK_IMPORTED_MODULE_4__.shownewTodo)(newtodo, projectslist[target_id].todosInd());   
                delTodoIcon = [];
                delTodoIcon = document.querySelectorAll('.delete-todo-icon')
                delTodoIcon.forEach(icon => {
                    icon.addEventListener('click', deleteTodo);
                });                                               
            })   
            });

    }




    function deleteTodo(){
        const proj = document.querySelector('.active-project');
        const activeProject = proj.id;
        const todoId = this.parentNode.getAttribute('todo-id');
        projectslist[activeProject].alltodos.splice(todoId, 1);        
        (0,_DOMcontroller__WEBPACK_IMPORTED_MODULE_4__.showTodos)(projectslist[activeProject].getAllTodos(), projectslist[activeProject].name);          
        TodoController(activeProject)
    }



})();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FB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c0JBQXNCLCtDQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVU7QUFDaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekhBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQZTtBQUNmO0FBQ0EsNkJBQTZCO0FBQzdCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDWTtBQUNEO0FBQ087QUFDNEM7QUFDcEY7QUFDQTtBQUNBLElBQUkscURBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxREFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsNERBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlEQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVksNkRBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpREFBVztBQUN6QztBQUNBLGdCQUFnQiwyREFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRE9NY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21haW5QYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcblxyXG46cm9vdHtcclxuICAgIC0tYmc6ICMxNzI1NTQ7XHJcbiAgICAtLWZ0OiAjZjVmM2ZmO1xyXG59XHJcblxyXG5cclxuYm9keXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgd2lkdGg6MTAwdnc7ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDsgICAgXHJcbn1cclxuXHJcbi5sZWZ0e1xyXG4gICAgZmxleDoxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xyXG4gICAgY29sb3I6dmFyKC0tZnQpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgcGFkZGluZzoyJTtcclxufVxyXG5cclxuLnByb2plY3QtY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBvdXRsaW5lOiBzb2xpZCB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDo0MHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgIGdyaWQtYXV0by1yb3dzOiAxMDBweDtcclxufVxyXG5cclxuLnByb2plY3QtY29udGFpbmVyID4gZGl2e1xyXG4gICAgb3V0bGluZTogd2hpdGUgc29saWQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOjEwJTtcclxufVxyXG5cclxuLnJpZ2h0e1xyXG4gICAgZmxleDo0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnQpO1xyXG4gICAgcGFkZGluZzoyJTtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZHtcclxuICAgIG91dGxpbmU6IHNvbGlkIGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4udG9kby1jb250YWluZXJ7XHJcbiAgICBvdXRsaW5lOiB5ZWxsb3dncmVlbiBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgaGVpZ2h0OjgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOjMwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi50b2RvLWNvbnRhaW5lciA+IGRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udG9kby1jb250YWluZXIgPiBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGUtcHJvamVjdC1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uZGVsZXRlLXByb2plY3QtaWNvbntcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbn1cclxuXHJcbi5hZGQtbmV3LXRvZG8tYnRue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3V0bGluZTogYmxhY2sgc29saWRcclxufVxyXG5cclxuLmFjdGl2ZS1wcm9qZWN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi50b2RvLWl0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAxMCU7XHJcbn1cclxuXHJcbi50b2RvLWl0ZW0gPiAuZGVsZXRlLXRvZG8taWNvbiB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDAlKTtcclxufVxyXG5cclxuXHJcbi5iYWNrZHJvcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6MDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDg2KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OjUwJTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xyXG4gICAgZ3JpZC1nYXA6IDEwJTtcclxufVxyXG5cclxuZm9ybSA+KntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuXHJcbi5kZXNjLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2xvc2UtbW9kYWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NSU7XHJcbiAgICByaWdodDogNSU7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRue1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLzM7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUF3QztBQUM1Qzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxNQUFNO0lBQ04sMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsT0FBTztBQUNYOztBQUVBO0lBQ0ksTUFBTTtJQUNOLDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLEtBQUs7SUFDTCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL1BvcHBpbnMtUmVndWxhci50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tYmc6ICMxNzI1NTQ7XFxyXFxuICAgIC0tZnQ6ICNmNWYzZmY7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucyc7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBoZWlnaHQ6MTAwdmg7XFxyXFxuICAgIHdpZHRoOjEwMHZ3OyAgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDsgICAgXFxyXFxufVxcclxcblxcclxcbi5sZWZ0e1xcclxcbiAgICBmbGV4OjE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXHJcXG4gICAgY29sb3I6dmFyKC0tZnQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ297XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgcGFkZGluZzoyJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVye1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gICAgb3V0bGluZTogc29saWQgd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDQlO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDo0MHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyID4gZGl2e1xcclxcbiAgICBvdXRsaW5lOiB3aGl0ZSBzb2xpZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDoxMCU7XFxyXFxufVxcclxcblxcclxcbi5yaWdodHtcXHJcXG4gICAgZmxleDo0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdCk7XFxyXFxuICAgIHBhZGRpbmc6MiU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWR7XFxyXFxuICAgIG91dGxpbmU6IHNvbGlkIGJsYWNrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVye1xcclxcbiAgICBvdXRsaW5lOiB5ZWxsb3dncmVlbiBzb2xpZDtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuICAgIGhlaWdodDo4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDozMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciA+IGRpdntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi50b2RvLWNvbnRhaW5lciA+IGJ1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1pY29ue1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtbmV3LXRvZG8tYnRue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgb3V0bGluZTogYmxhY2sgc29saWRcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1wcm9qZWN0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSA+IC5kZWxldGUtdG9kby1pY29uIHtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJhY2tkcm9we1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDowO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40ODYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFse1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OjUwJTtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5mb3Jte1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xcclxcbiAgICBncmlkLWdhcDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4qe1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kZXNjLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLW1vZGFse1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDo1JTtcXHJcXG4gICAgcmlnaHQ6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0bntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkZWxJY29uc3JjIGZyb20gJy4vYXNzZXRzL2RlbGV0ZS5zdmcnO1xyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RzKHByb2plY3RzKXtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCAgPSAnJztcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsaWQpID0+IHsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xyXG4gICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgICAgICAgYmxvY2sudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgZGVsSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGRlbEljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QtaWNvbicpO1xyXG4gICAgICAgIGRlbEljb24uc3JjID0gZGVsSWNvbnNyYztcclxuICAgICAgICBkZWxJY29uLnNldEF0dHJpYnV0ZSgncHJvamVjdElkJywgaWQpO1xyXG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKGRlbEljb24pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChibG9jaylcclxuICAgfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VG9kb3MoYWxsdG9kb3MsIHByX25hbWUpe1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWQnKTtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBwcl9uYW1lO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGFsbHRvZG9zLmZvckVhY2goKHRvZG8sIGluZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9fYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b2RvX2Jsb2NrLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xyXG4gICAgICAgIHRvZG9fYmxvY2suc2V0QXR0cmlidXRlKCd0b2RvLWlkJywgaW5kKVxyXG5cclxuXHJcbiAgICAvL2FkZCBuZXcgZGl2cyB0byBhY2NvbW9kYXRlIHRpdGxlLCBkZXNjLCBkdWVkYXRlLCBhbmQgcHJpb3JpdHlcclxuICAgIFxyXG4gICAgdG9kb19ibG9jay50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcclxuICAgIFxyXG5cclxuICAgIC8vdGlsbCBoZXJlXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGVsSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGRlbEljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvZG8taWNvbicpO1xyXG4gICAgICAgIGRlbEljb24uc3JjID0gZGVsSWNvbnNyYztcclxuICAgICAgICB0b2RvX2Jsb2NrLmFwcGVuZENoaWxkKGRlbEljb24pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvX2Jsb2NrKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYWRkdG9kb2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkdG9kb2J0bi5jbGFzc0xpc3QuYWRkKGBhZGQtbmV3LXRvZG8tYnRuYCk7XHJcbiAgICBhZGR0b2RvYnRuLnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRvZG9cIjtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGR0b2RvYnRuKTsgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93bmV3VG9kbyh0b2RvLCBpbmQpe1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcclxuICAgIGNvbnN0IHRvZG9fYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9fYmxvY2suY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy9hZGQgbmV3IGRpdnMgdG8gYWNjb21vZGF0ZSB0aXRsZSwgZGVzYywgZHVlZGF0ZSwgYW5kIHByaW9yaXR5XHJcbiAgICBcclxuICAgIHRvZG9fYmxvY2sudGV4dENvbnRlbnQgPSB0b2RvLm5hbWU7XHJcbiAgICBcclxuXHJcbiAgICAvL3RpbGwgaGVyZVxyXG5cclxuXHJcbiAgICB0b2RvX2Jsb2NrLnNldEF0dHJpYnV0ZSgndG9kby1pZCcsIGluZClcclxuICAgIGNvbnN0IGRlbEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGRlbEljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvZG8taWNvbicpO1xyXG4gICAgZGVsSWNvbi5zcmMgPSBkZWxJY29uc3JjO1xyXG4gICAgdG9kb19ibG9jay5hcHBlbmRDaGlsZChkZWxJY29uKTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LXRvZG8tYnRuJylcclxuICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodG9kb19ibG9jaywgYnRuKVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuVG9kb01vZGFsKCl7XHJcbiAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgXHJcblxyXG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AnKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtbW9kYWwnKTtcclxuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdYJztcclxuXHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY3JlYXRlRm9ybShtb2RhbCk7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgYmFja2Ryb3AuYXBwZW5kQ2hpbGQobW9kYWwpOyAgICBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFja2Ryb3ApOyAgICAgICBcclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtKGNvbnRhaW5lcil7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiByb3dzPVwiNFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImR1ZWRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZHVlZGF0ZVwiIG5hbWU9XCJkdWVkYXRlXCIgcmVxdWlyZWQ+XHJcblxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlN1Ym1pdFwiIGNsYXNzPSdzdWJtaXQtYnRuJz5cclxuICAgIDwvZm9ybT5cclxuICAgIGBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnR7c2hvd1Byb2plY3RzLCBzaG93VG9kb3MsIHNob3duZXdUb2RvLG9wZW5Ub2RvTW9kYWx9IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW5QYWdlKCl7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnQoKSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHQoKSk7XHJcbn1cclxuXHJcbmNvbnN0IGxlZnQgPSAoKSA9PntcclxuICAgIGNvbnN0IGxlZnRfc2lkZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0X3NpZGUuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xyXG5cclxuICAgIC8vIGxvZ29cclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb2dvJyk7XHJcbiAgICBsb2dvLnRleHRDb250ZW50ID0gJ1RvLURvIExpc3QnO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJylcclxuXHJcbiAgICAvLyBwcm9qZWN0IGNvbnRhaW5lclxyXG4gICAgY29uc3QgcHJvamVjdF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XHJcblxyXG4gICAgLy8gYWRkaW5nIHN0dWZmIHRvIHRoZSBsZWZ0IHNpZGUgY29udGFpbmVyXHJcbiAgICBsZWZ0X3NpZGUuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBsZWZ0X3NpZGUuYXBwZW5kQ2hpbGQocHJvamVjdF9jb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGFkZF9wcm9qZWN0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkX3Byb2plY3RfYnRuLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0LWJ0bicpO1xyXG4gICAgYWRkX3Byb2plY3RfYnRuLnRleHRDb250ZW50ID0gYEFkZCBwcm9qZWN0YDtcclxuICAgIGxlZnRfc2lkZS5hcHBlbmRDaGlsZChhZGRfcHJvamVjdF9idG4pO1xyXG4gICAgcmV0dXJuIGxlZnRfc2lkZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHJpZ2h0ID0gKCkgPT57XHJcbiAgICBjb25zdCByaWdodF9zaWRlPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0X3NpZGUuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcclxuXHJcbiAgICAvLyBwcm9qZWN0IGhlYWRpbmdcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWUnO1xyXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWQnKTtcclxuXHJcbiAgICAvLyB0b2RvIGNvbnRhaW5lclxyXG4gICAgY29uc3QgdG9kb19jb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvX2NvbnQuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGRlZmF1bHRfdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVmYXVsdF90b2RvLnRleHRDb250ZW50ID0gXCJTZWxlY3Qgb3IgQWRkIGEgbmV3IHByb2plY3QhIVwiO1xyXG4gICAgdG9kb19jb250LmFwcGVuZENoaWxkKGRlZmF1bHRfdG9kbyk7XHJcbiAgICBcclxuICAgIHJpZ2h0X3NpZGUuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICByaWdodF9zaWRlLmFwcGVuZENoaWxkKHRvZG9fY29udCk7XHJcblxyXG5cclxuICAgIHJldHVybiByaWdodF9zaWRlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEZhY3RvcnkobmFtZSl7XHJcbiAgICB2YXIgYWxsdG9kb3MgPSBbXTtcclxuICAgIGNvbnN0IGdldEFsbFRvZG9zID0gKCkgPT4gYWxsdG9kb3M7XHJcbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IGFsbHRvZG9zLnB1c2godG9kbyk7XHJcbiAgICBjb25zdCB0b2Rvc0luZCA9ICgpID0+IGFsbHRvZG9zLmxlbmd0aC0xO1xyXG4gICAgcmV0dXJuIHtuYW1lLCBhbGx0b2RvcywgZ2V0QWxsVG9kb3MsIGFkZFRvZG8sIHRvZG9zSW5kfTtcclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0ZhY3RvcnkobmFtZSwgZGVzYywgZHVlZGF0ZSwgcHJpb3JpdHkpe1xyXG4gICAgdmFyIGNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICBjb25zdCBpc0NvbXBsZXRlID0gKCkgPT57Y29tcGxldGUgPSAhY29tcGxldGV9XHJcbiAgICByZXR1cm4ge25hbWUsIGRlc2MsIGR1ZWRhdGUsIHByaW9yaXR5fVxyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBtYWluUGFnZSBmcm9tICcuL21haW5QYWdlJztcclxuaW1wb3J0IHRvZG9GYWN0b3J5IGZyb20gJy4vdG9kbyc7XHJcbmltcG9ydCBQcm9qZWN0RmFjdG9yeSBmcm9tICcuL3Byb2plY3RzJztcclxuaW1wb3J0IHsgc2hvd1Byb2plY3RzLCBzaG93VG9kb3Msc2hvd25ld1RvZG8sb3BlblRvZG9Nb2RhbCB9IGZyb20gJy4vRE9NY29udHJvbGxlcic7XHJcbmNvbnN0IHNlcnZlUGFnZSA9ICgoKSA9PntcclxuICAgIHZhciBwcm9qZWN0c2xpc3QgPSBbXTtcclxuICAgIG1haW5QYWdlKCk7XHJcbiAgICBjb25zdCBwcm9qZWN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdC1idG4nKTtcclxuICAgIHByb2plY3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCBuYW1lPSB3aW5kb3cucHJvbXB0KCdFbnRlciBOYW1lIGZvciB0aGUgUHJvamVjdDogJyk7XHJcbiAgICAgICAgaWYgKG5hbWUpe1xyXG4gICAgICAgIHByb2plY3RzbGlzdC5wdXNoKFByb2plY3RGYWN0b3J5KG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgYWxlcnQoXCJOYW1lIGNhbm5vdCBiZSBFbXB0eVwiKSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9qZWN0c2NvbnRyb2xsZXIoKTtcclxuXHJcblxyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBwcm9qZWN0c2NvbnRyb2xsZXIoKXtcclxuICAgICAgICBzaG93UHJvamVjdHMocHJvamVjdHNsaXN0KTsgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcclxuICAgICAgICBjb25zdCBkZWxidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXByb2plY3QtaWNvbicpO1xyXG5cclxuICAgICAgICBwcm9qLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0Q2xpY2spOyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBkZWxidG4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2plY3RDbGljayhldmVudCl7XHJcbiAgICAgICAgY29uc3QgcHJldl9wcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1wcm9qZWN0Jyk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYocHJldl9wcm9qKXtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2X3Byb2ouY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBhbHNvIHdvcmtlZCcpXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0X2lkID0gZXZlbnQudGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZGVsZXRlLXByb2plY3QtaWNvbicpeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0X2lkID0gdGhpcy5pZC0xOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldl9lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0X2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2X2VsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNob3dUb2Rvcyhwcm9qZWN0c2xpc3RbdGFyZ2V0X2lkXS5nZXRBbGxUb2RvcygpLCBwcm9qZWN0c2xpc3RbdGFyZ2V0X2lkXS5uYW1lKTsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBUb2RvQ29udHJvbGxlcih0YXJnZXRfaWQpOyAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGV2ZW50KXtcclxuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSB0aGlzLmdldEF0dHJpYnV0ZShcInByb2plY3RpZFwiKTtcclxuICAgICAgICBwcm9qZWN0c2xpc3Quc3BsaWNlKHByb2plY3RJZCwgMSk7ICAgICAgICBcclxuICAgICAgICBwcm9qZWN0c2NvbnRyb2xsZXIoKTtcclxuICAgICAgICAvLyBjb25zdCBwcmV2X3Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0SWQtMSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBUb2RvQ29udHJvbGxlcih0YXJnZXRfaWQpe1xyXG4gICAgICAgIHZhciBkZWxUb2RvSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdG9kby1pY29uJyk7XHJcbiAgICAgICAgZGVsVG9kb0ljb24uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kbylcclxuICAgICAgICB9KTsgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWRkYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctdG9kby1idG4nKTtcclxuICAgICAgICBhZGRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBvcGVuVG9kb01vZGFsKCk7XHJcbiAgICAgICAgICAgIHZhciB0aXRsZSwgZGVzYywgZHVlZGF0ZSwgcHJpb3JpdHk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ0bicpO1xyXG4gICAgICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlZGF0ZScpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXd0b2RvID0gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2MsIGR1ZWRhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzbGlzdFt0YXJnZXRfaWRdLmFkZFRvZG8obmV3dG9kbyk7XHJcbiAgICAgICAgICAgICAgICBzaG93bmV3VG9kbyhuZXd0b2RvLCBwcm9qZWN0c2xpc3RbdGFyZ2V0X2lkXS50b2Rvc0luZCgpKTsgICBcclxuICAgICAgICAgICAgICAgIGRlbFRvZG9JY29uID0gW107XHJcbiAgICAgICAgICAgICAgICBkZWxUb2RvSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdG9kby1pY29uJylcclxuICAgICAgICAgICAgICAgIGRlbFRvZG9JY29uLmZvckVhY2goaWNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG8pO1xyXG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSkgICBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKXtcclxuICAgICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1wcm9qZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHByb2ouaWQ7XHJcbiAgICAgICAgY29uc3QgdG9kb0lkID0gdGhpcy5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgndG9kby1pZCcpO1xyXG4gICAgICAgIHByb2plY3RzbGlzdFthY3RpdmVQcm9qZWN0XS5hbGx0b2Rvcy5zcGxpY2UodG9kb0lkLCAxKTsgICAgICAgIFxyXG4gICAgICAgIHNob3dUb2Rvcyhwcm9qZWN0c2xpc3RbYWN0aXZlUHJvamVjdF0uZ2V0QWxsVG9kb3MoKSwgcHJvamVjdHNsaXN0W2FjdGl2ZVByb2plY3RdLm5hbWUpOyAgICAgICAgICBcclxuICAgICAgICBUb2RvQ29udHJvbGxlcihhY3RpdmVQcm9qZWN0KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=