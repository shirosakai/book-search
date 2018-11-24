/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"BookSearch": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "common.bundle.js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/BookSearch/main.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'book-card',
  props: {
    bookData: Array,
    volumeInfo: Object
  },
  mounted: function mounted() {}
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'loading-modal',
  props: ['isLoading']
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Spinner = _interopRequireDefault(__webpack_require__(/*! ../../modules/Spinner/Spinner */ "./src/modules/Spinner/Spinner.js"));

var _GetBookData = _interopRequireDefault(__webpack_require__(/*! ../GetBookData */ "./src/BookSearch/GetBookData.js"));

//
//
//
//
//
//
//
var _default = {
  name: 'search-box',
  methods: {
    showBookList: function showBookList() {
      //todo スピナーが表示されない
      var spinner = new _Spinner.default();
      spinner.show();

      try {
        var that = this;

        _GetBookData.default.getAllFromGoogleBook(that.inputText, 30).then(function (bookDatas) {
          that.setBookDatas(bookDatas);
        });
      } catch (e) {
        alert(e);
      } finally {
        spinner.hide();
      }
    },

    /**
     * 本データを親コンポーネントにセット
     * @param {object[]} bookDatas
     */
    setBookDatas: function setBookDatas(bookDatas) {
      this.$emit('set-book-datas', bookDatas);
    }
  },
  data: function data() {
    return {
      inputText: ''
    };
  },
  mounted: function mounted() {}
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--3-1!./node_modules/postcss-loader/lib/index.js??postcss!./src/modules/Spinner/spinner.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--3-1!./node_modules/postcss-loader/lib??postcss!./src/modules/Spinner/spinner.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "#modal-dialog .modal-content {\n    max-width: 400px;\n    height: 300px;\n}", "", {"version":3,"sources":["/Users/shiro/Documents/PROGRAMMING/JavaScript/book-search/src/modules/Spinner/spinner.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,cAAc;CACjB","file":"spinner.css","sourcesContent":["#modal-dialog .modal-content {\n    max-width: 400px;\n    height: 300px;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.book_card[data-v-1a7f1fb0] {\n    width: 20em;\n    height: 30em;\n    margin: 0 0 0 1em;\n}\n.title_wrap[data-v-1a7f1fb0] {\n\n    border-bottom: 2px solid #232323;\n}\n.title[data-v-1a7f1fb0] {\n    display: inline;\n    font-size: 110%;\n    font-weight: bold;\n}\n.authors[data-v-1a7f1fb0] {\n    /*margin-top:0;*/\n    font-size: 90%;\n    font-weight: normal;\n}\n.page_cnt[data-v-1a7f1fb0] {\n    font-size: 80%;\n}\n.thumbnail[data-v-1a7f1fb0] {\n    width: 100px;\n    margin-top: 0.5em;\n}\n.description[data-v-1a7f1fb0] {\n    display: block;\n    height: 10em;\n    overflow-y: scroll;\n    font-size:75%;\n    color:#666;\n    padding:0.3em;\n    border-top:1px solid #aaa;\n    border-bottom:1px solid #aaa;\n}\n", "", {"version":3,"sources":["/Users/shiro/Documents/PROGRAMMING/JavaScript/book-search/src/BookSearch/components/src/BookSearch/components/book-card.vue"],"names":[],"mappings":";AA+BA;IACA,YAAA;IACA,aAAA;IACA,kBAAA;CACA;AAEA;;IAEA,iCAAA;CACA;AAEA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,iBAAA;IACA,eAAA;IACA,oBAAA;CACA;AAEA;IACA,eAAA;CACA;AAEA;IACA,aAAA;IACA,kBAAA;CACA;AAEA;IACA,eAAA;IACA,aAAA;IACA,mBAAA;IACA,cAAA;IACA,WAAA;IACA,cAAA;IACA,0BAAA;IACA,6BAAA;CACA","file":"book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css&","sourcesContent":["<template>\n    <div class=\"book_card box\">\n        <div class=\"title_wrap\">\n            <h3 class=\"title\">{{volumeInfo.title}}</h3>\n        </div>\n        <p class=\"authors\">\n            <template v-for=\"author in volumeInfo.authors\">\n                {{author}}&nbsp;\n            </template>\n        </p>\n        <p class=\"page_cnt\">p{{volumeInfo.pageCount}}</p>\n        <!--thumbnail todo volumeInfo.imageLinks.thumbnail が https:// ではなく http:// なのでwarningがでる -->\n        <template v-if=\"volumeInfo.imageLinks != null\">\n            <img class=\"thumbnail\" :src=\"volumeInfo.imageLinks.thumbnail\"/><!--or smallThumbnail-->\n        </template>\n        <p class=\"description\">{{volumeInfo.description}}</p>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: 'book-card',\n    props: {\n        bookData: Array,\n        volumeInfo: Object,\n    },\n    mounted() {},\n};\n</script>\n\n<style scoped>\n.book_card {\n    width: 20em;\n    height: 30em;\n    margin: 0 0 0 1em;\n}\n\n.title_wrap {\n\n    border-bottom: 2px solid #232323;\n}\n\n.title {\n    display: inline;\n    font-size: 110%;\n    font-weight: bold;\n}\n\n.authors {\n    /*margin-top:0;*/\n    font-size: 90%;\n    font-weight: normal;\n}\n\n.page_cnt {\n    font-size: 80%;\n}\n\n.thumbnail {\n    width: 100px;\n    margin-top: 0.5em;\n}\n\n.description {\n    display: block;\n    height: 10em;\n    overflow-y: scroll;\n    font-size:75%;\n    color:#666;\n    padding:0.3em;\n    border-top:1px solid #aaa;\n    border-bottom:1px solid #aaa;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css&","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.search_box[data-v-b41526cc] {\n}\n.search_text[data-v-b41526cc] {\n    width: 20em;\n}\n.search_button[data-v-b41526cc] {\n    margin-left: 0.5em;\n}\n", "", {"version":3,"sources":["/Users/shiro/Documents/PROGRAMMING/JavaScript/book-search/src/BookSearch/components/src/BookSearch/components/search-box.vue"],"names":[],"mappings":";AA+CA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,mBAAA;CACA","file":"search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css&","sourcesContent":["<template>\n    <div class=\"search_box\">\n        <input class=\"input search_text\" type=\"text\" placeholder=\"Search Text\" v-model=\"inputText\" @keyup.enter=\"showBookList\">\n        <a class=\"button is-dark search_button\" @click=\"showBookList\">Search</a>\n    </div>\n</template>\n\n<script>\nimport Spinner from '../../modules/Spinner/Spinner';\nimport GetBookData from '../GetBookData';\nexport default {\n    name: 'search-box',\n    methods: {\n        showBookList() {\n            //todo スピナーが表示されない\n            const spinner = new Spinner();\n            spinner.show();\n            try {\n                const that = this;\n                GetBookData.getAllFromGoogleBook(that.inputText, 30).then(bookDatas => {\n                    that.setBookDatas(bookDatas)\n                });\n            } catch (e) {\n                alert(e);\n            } finally {\n                spinner.hide();\n            }\n        },\n        /**\n         * 本データを親コンポーネントにセット\n         * @param {object[]} bookDatas\n         */\n        setBookDatas(bookDatas) {\n            this.$emit('set-book-datas', bookDatas);\n        }\n    },\n    data() {\n        return {\n            inputText: ''\n        }\n    },\n    mounted() {\n    },\n};\n</script>\n\n<style scoped>\n.search_box {\n}\n\n.search_text {\n    width: 20em;\n}\n\n.search_button {\n    margin-left: 0.5em;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/BookSearch/main.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/BookSearch/main.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "#app {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }\n  #app header {\n    background: #fff;\n    margin: 0.5em 0 0.5em 2em; }\n    #app header h1 {\n      font-size: 100%;\n      color: #aaa; }\n  #app #main_container {\n    background: #e6e6e6; }\n    #app #main_container #search_box_container {\n      padding: 1em 0 1em 1.5em; }\n    #app #main_container #book_card_container {\n      display: flex;\n      flex-wrap: wrap;\n      padding-top: 1em;\n      padding-left: 0.5em; }\n", "", {"version":3,"sources":["/Users/shiro/Documents/PROGRAMMING/JavaScript/book-search/src/BookSearch/src/BookSearch/main.scss"],"names":[],"mappings":"AAAA;EACI,4DAA2D,EA2B9D;EA5BD;IAIQ,iBAAgB;IAChB,0BAAyB,EAO5B;IAZL;MAQY,gBAAe;MAEf,YAAW,EACd;EAXT;IAeQ,oBAA2B,EAY9B;IA3BL;MAkBY,yBAAwB,EAC3B;IAnBT;MAsBY,cAAa;MACb,gBAAe;MACf,iBAAgB;MAChB,oBAAmB,EACtB","file":"main.scss","sourcesContent":["#app {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\n    header {\n        background: #fff;\n        margin: 0.5em 0 0.5em 2em;\n\n        h1 {\n            font-size: 100%;\n            //font-weight: bold;\n            color: #aaa;\n        }\n    }\n\n    #main_container {\n        background: hsl(0, 0%, 90%);\n\n        #search_box_container {\n            padding: 1em 0 1em 1.5em;\n        }\n\n        #book_card_container {\n            display: flex;\n            flex-wrap: wrap;\n            padding-top: 1em;\n            padding-left: 0.5em;\n        }\n    }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js??ref--3-0!./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader??ref--3-0!./node_modules/css-loader??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--3-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??postcss!../../../node_modules/vue-loader/lib??vue-loader-options!./book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js??ref--3-0!./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader??ref--3-0!./node_modules/css-loader??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--3-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??postcss!../../../node_modules/vue-loader/lib??vue-loader-options!./loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css& */ "./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js??ref--3-0!./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader??ref--3-0!./node_modules/css-loader??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--3-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??postcss!../../../node_modules/vue-loader/lib??vue-loader-options!./search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css& */ "./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=template&id=1a7f1fb0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=template&id=1a7f1fb0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "book_card box" },
    [
      _c("div", { staticClass: "title_wrap" }, [
        _c("h3", { staticClass: "title" }, [
          _vm._v(_vm._s(_vm.volumeInfo.title))
        ])
      ]),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "authors" },
        [
          _vm._l(_vm.volumeInfo.authors, function(author) {
            return [_vm._v("\n            " + _vm._s(author) + " \n        ")]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("p", { staticClass: "page_cnt" }, [
        _vm._v("p" + _vm._s(_vm.volumeInfo.pageCount))
      ]),
      _vm._v(" "),
      _vm.volumeInfo.imageLinks != null
        ? [
            _c("img", {
              staticClass: "thumbnail",
              attrs: { src: _vm.volumeInfo.imageLinks.thumbnail }
            })
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("p", { staticClass: "description" }, [
        _vm._v(_vm._s(_vm.volumeInfo.description))
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=template&id=2ebf0118&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=template&id=2ebf0118&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: ["modal", { "is-active": _vm.isLoading }],
      attrs: { id: "loading-modal" }
    },
    [_c("div", { staticClass: "modal-background" }), _vm._v(" "), _vm._m(0)]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-content" }, [
      _c("div", { staticClass: "box has-text-centered" }, [
        _c("p", [_c("i", { staticClass: "fa fa-4x fa-spinner fa-pulse" })]),
        _vm._v(" "),
        _c("p", [_vm._v("loading...")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=template&id=b41526cc&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=template&id=b41526cc&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "search_box" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.inputText,
          expression: "inputText"
        }
      ],
      staticClass: "input search_text",
      attrs: { type: "text", placeholder: "Search Text" },
      domProps: { value: _vm.inputText },
      on: {
        keyup: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.showBookList($event)
        },
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.inputText = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "button is-dark search_button",
        on: { click: _vm.showBookList }
      },
      [_vm._v("Search")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/BookSearch/GetBookData.js":
/*!***************************************!*\
  !*** ./src/BookSearch/GetBookData.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

/**

 created by shiro on 2018/09/15
 */
// import gapi from 'gapi';
// GoogleBooksAPIのAPIキー
var MY_API_KEY = 'AIzaSyB1uqd4wzARisYjXw8Flam-slAO4W9MIcY';

var GetBookData =
/*#__PURE__*/
function () {
  function GetBookData() {
    (0, _classCallCheck2.default)(this, GetBookData);
  }

  (0, _createClass2.default)(GetBookData, null, [{
    key: "getFromGoogleBook",

    /**
     * GoogleBookAPI を使って検索ワードに該当する書籍情報の一覧を取得する
     * 最大取得件数10件
     *      GoogleBooksApiが便利...書影も取れる
     *      https://developers.google.com/books/docs/v1/reference/volumes
     *      検索... https://developers.google.com/books/docs/v1/reference/volumes/list
     *
     * @param {string} searchWord
     * @param {number} startIndex
     */
    value: function () {
      var _getFromGoogleBook = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(searchWord) {
        var startIndex,
            reqUrl,
            resp,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                startIndex = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
                reqUrl = "https://www.googleapis.com/books/v1/volumes?q=".concat(encodeURIComponent(searchWord), "&startIndex=").concat(startIndex, "&key=").concat(MY_API_KEY);
                _context.next = 4;
                return fetch(reqUrl);

              case 4:
                resp = _context.sent;
                return _context.abrupt("return", resp.json());

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getFromGoogleBook(_x) {
        return _getFromGoogleBook.apply(this, arguments);
      };
    }()
    /**
     * 検索ワードに該当するすべての書籍情報の一覧を取得する
     * @param {string} searchWord
     * @param {number} limit 上限件数
     * @return {Promise<Array>}
     */

  }, {
    key: "getAllFromGoogleBook",
    value: function () {
      var _getAllFromGoogleBook = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(searchWord) {
        var limit,
            resultItems,
            index,
            itemCnt,
            resp,
            _args2 = arguments;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                limit = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 100;
                resultItems = [];
                index = 0;
                itemCnt = 0;

              case 4:
                if (false) {}

                _context2.next = 7;
                return GetBookData.getFromGoogleBook(searchWord, index);

              case 7:
                resp = _context2.sent;

                if (!(resp.items != null)) {
                  _context2.next = 16;
                  break;
                }

                resultItems.push.apply(resultItems, (0, _toConsumableArray2.default)(resp.items));
                itemCnt = resp.items.length;
                index += itemCnt;

                if (!(resultItems.length >= limit)) {
                  _context2.next = 14;
                  break;
                }

                return _context2.abrupt("return", resultItems.slice(0, limit));

              case 14:
                _context2.next = 17;
                break;

              case 16:
                return _context2.abrupt("break", 19);

              case 17:
                _context2.next = 4;
                break;

              case 19:
                return _context2.abrupt("return", resultItems);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getAllFromGoogleBook(_x2) {
        return _getAllFromGoogleBook.apply(this, arguments);
      };
    }()
  }]);
  return GetBookData;
}();

exports.default = GetBookData;

/***/ }),

/***/ "./src/BookSearch/components/book-card.vue":
/*!*************************************************!*\
  !*** ./src/BookSearch/components/book-card.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _book_card_vue_vue_type_template_id_1a7f1fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-card.vue?vue&type=template&id=1a7f1fb0&scoped=true& */ "./src/BookSearch/components/book-card.vue?vue&type=template&id=1a7f1fb0&scoped=true&");
/* harmony import */ var _book_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-card.vue?vue&type=script&lang=js& */ "./src/BookSearch/components/book-card.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _book_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _book_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _book_card_vue_vue_type_style_index_0_id_1a7f1fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css& */ "./src/BookSearch/components/book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _book_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _book_card_vue_vue_type_template_id_1a7f1fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _book_card_vue_vue_type_template_id_1a7f1fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a7f1fb0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/BookSearch/components/book-card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/BookSearch/components/book-card.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/BookSearch/components/book-card.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./book-card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/BookSearch/components/book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./src/BookSearch/components/book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_style_index_0_id_1a7f1fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader??ref--3-0!../../../node_modules/css-loader??ref--3-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??postcss!../../../node_modules/vue-loader/lib??vue-loader-options!./book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js??ref--3-0!./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=style&index=0&id=1a7f1fb0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_style_index_0_id_1a7f1fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_style_index_0_id_1a7f1fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_style_index_0_id_1a7f1fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_style_index_0_id_1a7f1fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_style_index_0_id_1a7f1fb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/BookSearch/components/book-card.vue?vue&type=template&id=1a7f1fb0&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/BookSearch/components/book-card.vue?vue&type=template&id=1a7f1fb0&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_template_id_1a7f1fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./book-card.vue?vue&type=template&id=1a7f1fb0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/book-card.vue?vue&type=template&id=1a7f1fb0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_template_id_1a7f1fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_book_card_vue_vue_type_template_id_1a7f1fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/BookSearch/components/loading-modal.vue":
/*!*****************************************************!*\
  !*** ./src/BookSearch/components/loading-modal.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_modal_vue_vue_type_template_id_2ebf0118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-modal.vue?vue&type=template&id=2ebf0118&scoped=true& */ "./src/BookSearch/components/loading-modal.vue?vue&type=template&id=2ebf0118&scoped=true&");
/* harmony import */ var _loading_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-modal.vue?vue&type=script&lang=js& */ "./src/BookSearch/components/loading-modal.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _loading_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _loading_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _loading_modal_vue_vue_type_style_index_0_id_2ebf0118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css& */ "./src/BookSearch/components/loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _loading_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loading_modal_vue_vue_type_template_id_2ebf0118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loading_modal_vue_vue_type_template_id_2ebf0118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ebf0118",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/BookSearch/components/loading-modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/BookSearch/components/loading-modal.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/BookSearch/components/loading-modal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./loading-modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/BookSearch/components/loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./src/BookSearch/components/loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_style_index_0_id_2ebf0118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader??ref--3-0!../../../node_modules/css-loader??ref--3-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??postcss!../../../node_modules/vue-loader/lib??vue-loader-options!./loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css& */ "./node_modules/style-loader/index.js??ref--3-0!./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=style&index=0&id=2ebf0118&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_style_index_0_id_2ebf0118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_style_index_0_id_2ebf0118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_style_index_0_id_2ebf0118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_style_index_0_id_2ebf0118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_style_index_0_id_2ebf0118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/BookSearch/components/loading-modal.vue?vue&type=template&id=2ebf0118&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/BookSearch/components/loading-modal.vue?vue&type=template&id=2ebf0118&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_template_id_2ebf0118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./loading-modal.vue?vue&type=template&id=2ebf0118&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/loading-modal.vue?vue&type=template&id=2ebf0118&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_template_id_2ebf0118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_modal_vue_vue_type_template_id_2ebf0118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/BookSearch/components/search-box.vue":
/*!**************************************************!*\
  !*** ./src/BookSearch/components/search-box.vue ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_box_vue_vue_type_template_id_b41526cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-box.vue?vue&type=template&id=b41526cc&scoped=true& */ "./src/BookSearch/components/search-box.vue?vue&type=template&id=b41526cc&scoped=true&");
/* harmony import */ var _search_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-box.vue?vue&type=script&lang=js& */ "./src/BookSearch/components/search-box.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _search_box_vue_vue_type_style_index_0_id_b41526cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css& */ "./src/BookSearch/components/search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _search_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_box_vue_vue_type_template_id_b41526cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_box_vue_vue_type_template_id_b41526cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b41526cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/BookSearch/components/search-box.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/BookSearch/components/search-box.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/BookSearch/components/search-box.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./search-box.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/BookSearch/components/search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./src/BookSearch/components/search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_style_index_0_id_b41526cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader??ref--3-0!../../../node_modules/css-loader??ref--3-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??postcss!../../../node_modules/vue-loader/lib??vue-loader-options!./search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js??ref--3-0!./node_modules/css-loader/index.js??ref--3-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??postcss!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=style&index=0&id=b41526cc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_style_index_0_id_b41526cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_style_index_0_id_b41526cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_style_index_0_id_b41526cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_style_index_0_id_b41526cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_style_index_0_id_b41526cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/BookSearch/components/search-box.vue?vue&type=template&id=b41526cc&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/BookSearch/components/search-box.vue?vue&type=template&id=b41526cc&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_template_id_b41526cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./search-box.vue?vue&type=template&id=b41526cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/BookSearch/components/search-box.vue?vue&type=template&id=b41526cc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_template_id_b41526cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_box_vue_vue_type_template_id_b41526cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/BookSearch/main.js":
/*!********************************!*\
  !*** ./src/BookSearch/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.min.js"));

var _template = _interopRequireDefault(__webpack_require__(/*! ./template */ "./src/BookSearch/template.js"));

var _bookCard = _interopRequireDefault(__webpack_require__(/*! ./components/book-card */ "./src/BookSearch/components/book-card.vue"));

var _searchBox = _interopRequireDefault(__webpack_require__(/*! ./components/search-box */ "./src/BookSearch/components/search-box.vue"));

var _loadingModal = _interopRequireDefault(__webpack_require__(/*! ./components/loading-modal */ "./src/BookSearch/components/loading-modal.vue"));

__webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");

__webpack_require__(/*! ./main.scss */ "./src/BookSearch/main.scss");

/**

 created by shiro on 2018/09/14
 */
// todo App.vueコンポーネントを挟んで、そのコンポーネントにすべてのコンポーネントを配置するようにする。main.jsでコンポーネントの配置を行わないように要修正。
var app = new _vue.default({
  el: '#app',
  template: _template.default,
  components: {
    bookCard: _bookCard.default,
    searchBox: _searchBox.default,
    loadingModal: _loadingModal.default
  },
  computed: {},
  methods: {
    /**
     * 本情報をセット
     * @param {object[]} bookDatas
     */
    setBookDatas: function setBookDatas(bookDatas) {
      this.bookDatas = bookDatas;
    }
  },
  data: {
    bookDatas: {}
  }
});

/***/ }),

/***/ "./src/BookSearch/main.scss":
/*!**********************************!*\
  !*** ./src/BookSearch/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--4-1!../../node_modules/sass-loader/lib/loader.js??ref--4-2!./main.scss */ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/BookSearch/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/BookSearch/template.js":
/*!************************************!*\
  !*** ./src/BookSearch/template.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**

 created by shiro on 2018/09/15
 */
var template = "\n<div id=\"app\">\n    <header>\n        <h1>Book Search</h1>\n    </header>\n    <div id=\"main_container\">\n        <div id=\"search_box_container\">\n        <!--{{searchWord}}-->\n            <search-box @set-book-datas=\"setBookDatas\"></search-box>\n        </div>\n        <div id=\"book_card_container\">\n            <template v-for=\"book in bookDatas\">\n                <!--<p>{{book.volumeInfo}}</p>-->\n                <book-card\n                    :book-data = book\n                    :volume-info = book.volumeInfo\n                ></book-card>\n            </template>\n        </div>\n    </div>\n</div>";
var _default = template;
exports.default = _default;

/***/ }),

/***/ "./src/modules/Spinner/Spinner.js":
/*!****************************************!*\
  !*** ./src/modules/Spinner/Spinner.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _domify = _interopRequireDefault(__webpack_require__(/*! domify */ "./node_modules/domify/index.js"));

__webpack_require__(/*! bulma/css/bulma.css */ "./node_modules/bulma/css/bulma.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

__webpack_require__(/*! ./spinner.css */ "./src/modules/Spinner/spinner.css");

/**

 created by shiro on 2018/09/15
 */
var Spinner =
/*#__PURE__*/
function () {
  /**
   * モーダルダイアログを作成して、document.bodyの最後に挿入する。
   * デフォルトでは非表示なので、show() メソッドを実行することによって表示させることができる。
   *
   * @param message {string} モーダルダイアログに表示するメッセージ。
   * @param icon {string} モーダルダイアログに表示したい Font Awesome のアイコン名。
   * @param color {string} アイコンの色を指定します。CSS のカラープロパティを使用します。例: '#888'、'lightgreen' など
   * @param isRotate {boolean} false にすると、デフォルトで回転するアイコンを止めることができる。
   *
   * Font Awesome のアイコン名は、次のページの Free のものから探す。
   *
   * Icons | Font Awesome
   * https://fontawesome.com/icons?d=gallery&m=free
   *
   * たとえば、★のアイコンなら、"fa-star" を指定する。 grip-horizontal fa-spinner
   */
  function Spinner() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'loading …';
    var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fa-spinner';
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var isRotate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    (0, _classCallCheck2.default)(this, Spinner);

    /**
     * モーダルダイアログを表示するかどうかを示す。
     * @type {boolean}
     */
    this.isActive = false;
    var html = "\n  <div id=\"modal-dialog\" class=\"modal ".concat(this.isActive ? 'is-active' : '', "\">\n    <div class=\"modal-background\"></div>\n    <div class=\"modal-content\">\n      <div class=\"box has-text-centered\">\n        <p><i class=\"fa fa-4x ").concat(icon, " ").concat(isRotate ? 'fa-pulse' : '', "\" style=\"").concat(color ? "color: ".concat(color) : '', "\"></i></p>\n        <p>").concat(message, "</p>\n      </div>\n    </div>\n  </div>");
    this.dom = (0, _domify.default)(html, document);
    document.body.appendChild(this.dom);
  }
  /**
   * モーダルダイアログを表示する
   */


  (0, _createClass2.default)(Spinner, [{
    key: "show",
    value: function show() {
      this.dom.classList.add('is-active');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.dom.classList.remove('is-active');
    }
  }]);
  return Spinner;
}();

exports.default = Spinner;

/***/ }),

/***/ "./src/modules/Spinner/spinner.css":
/*!*****************************************!*\
  !*** ./src/modules/Spinner/spinner.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--3-1!../../../node_modules/postcss-loader/lib??postcss!./spinner.css */ "./node_modules/css-loader/index.js??ref--3-1!./node_modules/postcss-loader/lib/index.js??postcss!./src/modules/Spinner/spinner.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=BookSearch.bundle.js.map