/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-page.js"
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutPage: () => (/* binding */ loadAboutPage)\n/* harmony export */ });\n\r\nfunction loadAboutPage() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.textContent = \"\";\r\n\r\n    const aboutTitle = document.createElement(\"h1\");\r\n    aboutTitle.textContent = \"Contact Us\";\r\n    content.appendChild(aboutTitle)\r\n\r\n    const contacts = [\r\n        { person: \"Owner\", number: \"555-555-222\", email: \"totallyRealEmail@notFake.com\"},\r\n        { person: \"Co-owner\", number: \"555-555-555\", email: \"perfectlyRealEmail@notFake.com\"},\r\n        { person: \"Manager\", number: \"555-555-888\", email: \"notFakeRealEmail@notFake.com\"}\r\n    ]\r\n\r\n    contacts.forEach((item) => {\r\n        const contact = document.createElement(\"h3\");\r\n        contact.textContent = `${item.person} - ${item.number} - ${item.email}`;\r\n        content.appendChild(contact);\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about-page.js?\n}");

/***/ },

/***/ "./src/home-page.js"
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)\n/* harmony export */ });\n\r\nfunction loadHomePage() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.textContent = \"\";\r\n\r\n    const homeTitle = document.createElement(\"h1\");\r\n    homeTitle.textContent = \"La Comida Española\";\r\n    content.appendChild(homeTitle);\r\n\r\n    const description = document.createElement(\"p\");\r\n    description.textContent = \"Authentic Spanish cuisine in the heart of the city.\";\r\n    content.appendChild(description);\r\n\r\n    const hours = [\r\n        { day: \"Monday\", timeframe: \"8am - 6pm\" },\r\n        { day: \"Tuesday\", timeframe: \"8am - 6pm\" },\r\n        { day: \"Wednesday\", timeframe: \"8am - 6pm\" },\r\n        { day: \"Thursday\", timeframe: \"8am - 6pm\" },\r\n        { day: \"Friday\", timeframe: \"8am - 6pm\" },\r\n        { day: \"Saturday\", timeframe: \"9am - 8pm\" },\r\n        { day: \"Sunday\", timeframe: \"10am - 5pm\" }\r\n    ];\r\n\r\n    const createItems = (array) => {\r\n        array.forEach((item) => {\r\n            const element = document.createElement(\"h4\");\r\n            element.textContent = `${item.day} - ${item.timeframe}`;\r\n            content.appendChild(element);\r\n        })\r\n    }\r\n\r\n    createItems(hours);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home-page.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.js */ \"./src/home-page.js\");\n/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page.js */ \"./src/menu-page.js\");\n/* harmony import */ var _about_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page.js */ \"./src/about-page.js\");\n\r\n\r\n\r\n\r\n(0,_home_page_js__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\r\n\r\nconst homePage = document.querySelector(\".home-btn\");\r\nconst menuPage = document.querySelector(\".menu-btn\");\r\nconst aboutPage = document.querySelector(\".about-btn\");\r\n\r\nhomePage.addEventListener(\"click\", () => {\r\n    (0,_home_page_js__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\r\n});\r\n\r\nmenuPage.addEventListener(\"click\", () => {\r\n    (0,_menu_page_js__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();\r\n});\r\n\r\naboutPage.addEventListener(\"click\", () => {\r\n    (0,_about_page_js__WEBPACK_IMPORTED_MODULE_2__.loadAboutPage)();\r\n})\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu-page.js"
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n\r\nfunction loadMenuPage() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.textContent = \"\";\r\n\r\n    const menuTitle = document.createElement(\"h1\");\r\n    menuTitle.textContent = \"Our Menu\";\r\n    content.appendChild(menuTitle);\r\n\r\n    const beverages = [\r\n        {name: \"Honey Tea\", price: \"$4\"}, \r\n        {name: \"Beary Tea\", price: \"$5\"}\r\n    ];\r\n    const sides = [\r\n        {name: \"Toast & Jam\", price: \"$3\"},\r\n        {name: \"Fresh Fruit\", price: \"$4\"}\r\n    ];\r\n    const mainDishes = [\r\n        {name: \"Pancakes\", price: \"$8\"},\r\n        {name: \"French Toast\", price: \"$9\"},\r\n        {name: \"Honeycomb\", price: \"$10\"}\r\n    ];\r\n\r\n    const createItems = (category, array) => {\r\n        const categoryTitle = document.createElement(\"h2\");\r\n        categoryTitle.textContent = category;\r\n        categoryTitle.style.borderBottom = \"2px solid red\";\r\n        \r\n        content.appendChild(categoryTitle);\r\n\r\n        array.forEach((item) => {\r\n            const element = document.createElement(\"h4\");\r\n            element.textContent = `${item.name} - ${item.price}`;\r\n            content.appendChild(element);\r\n        })\r\n    }\r\n\r\n    createItems(\"Beverages\", beverages);\r\n    createItems(\"Sides\", sides);\r\n    createItems(\"Main Dishes\", mainDishes);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu-page.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;