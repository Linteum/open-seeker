/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/scripts/browser.js":
/*!*************************************!*\
  !*** ./frontend/scripts/browser.js ***!
  \*************************************/
/***/ (() => {

eval("const browseBar = document.getElementById('browse_bar')\r\n\r\nfunction pushTag(value) {\r\n  const tags = document.getElementById(\"tags\");\r\n\r\n  const tag = document.createElement(\"div\");\r\n  tag.classList.add(\"tag\");\r\n  tag.innerHTML = value.trim();\r\n\r\n  tags.appendChild(tag);\r\n}\r\n\r\ndocument.getElementById(\"add_tag\").addEventListener(\"click\", (e) => {\r\n    const value = browseBar.value.trim()\r\n\r\n    if (value && value.length >0) {\r\n        pushTag(value)\r\n        console.log(value)\r\n    }\r\n});\r\n\r\nfunction onstart() {\r\n  console.log(document.querySelector(\"h1\").textContent);\r\n}\r\n\r\nonstart();\r\n\n\n//# sourceURL=webpack://open-seeker/./frontend/scripts/browser.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./frontend/scripts/browser.js"]();
/******/ 	
/******/ })()
;