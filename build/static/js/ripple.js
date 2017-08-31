/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n\n\tvar isTouch = function isTouch() {\n\t\treturn 'touchstart' in window;\n\t};\n\tvar eventName = isTouch() ? 'touchstart' : 'mousedown';\n\n\tvar animation = function animation(e, target) {\n\t\tvar width = target.offsetWidth;\n\t\tvar height = target.offsetHeight;\n\t\tvar size = width >= height ? width : height;\n\t\tvar offset = target.getBoundingClientRect();\n\t\tvar pageX = e.type !== 'touchstart' ? e.pageX : e.touches[0].clientX;\n\t\tvar pageY = e.type !== 'touchstart' ? e.pageY : e.touches[0].clientY;\n\t\tvar x = pageX - offset.left;\n\t\tvar y = pageY - offset.top;\n\n\t\tvar circle = document.createElement('span');\n\t\tcircle.classList.add('ripple-circle');\n\t\tcircle.style.top = y - size / 2 + 'px';\n\t\tcircle.style.left = x - size / 2 + 'px';\n\t\tcircle.style.width = size + 'px';\n\t\tcircle.style.height = size + 'px';\n\t\tcircle.addEventListener('animationend', function (e) {\n\t\t\treturn circle.remove();\n\t\t}, false);\n\t\tcircle.addEventListener('webkitAnimationEnd', function (e) {\n\t\t\treturn circle.remove();\n\t\t}, false);\n\n\t\ttarget.appendChild(circle);\n\t};\n\n\tdocument.addEventListener(eventName, function (e) {\n\t\tvar target = e.target.closest('[data-animation*=\"ripple\"]');\n\t\tif (target) animation(e, target);\n\t}, false);\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL3JpcHBsZS5qcz82NjI3Il0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcblxuXHRjb25zdCBpc1RvdWNoID0gKCkgPT4gJ3RvdWNoc3RhcnQnIGluIHdpbmRvdztcblx0Y29uc3QgZXZlbnROYW1lID0gaXNUb3VjaCgpID8gJ3RvdWNoc3RhcnQnIDogJ21vdXNlZG93bic7XG5cblx0Y29uc3QgYW5pbWF0aW9uID0gKGUsIHRhcmdldCkgPT4ge1xuXHRcdGNvbnN0IHdpZHRoID0gdGFyZ2V0Lm9mZnNldFdpZHRoO1xuXHRcdGNvbnN0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XG5cdFx0Y29uc3Qgc2l6ZSA9IHdpZHRoID49IGhlaWdodCA/IHdpZHRoIDogaGVpZ2h0O1xuXHRcdGNvbnN0IG9mZnNldCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRjb25zdCBwYWdlWCA9IGUudHlwZSAhPT0gJ3RvdWNoc3RhcnQnID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5jbGllbnRYO1xuXHRcdGNvbnN0IHBhZ2VZID0gZS50eXBlICE9PSAndG91Y2hzdGFydCcgPyBlLnBhZ2VZIDogZS50b3VjaGVzWzBdLmNsaWVudFk7XG5cdFx0Y29uc3QgeCA9IHBhZ2VYIC0gb2Zmc2V0LmxlZnQ7XG5cdFx0Y29uc3QgeSA9IHBhZ2VZIC0gb2Zmc2V0LnRvcDtcblx0XHRcblx0XHRjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0Y2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3JpcHBsZS1jaXJjbGUnKTtcblx0XHRjaXJjbGUuc3R5bGUudG9wID0gYCR7eSAtIHNpemUvMn1weGA7XG5cdFx0Y2lyY2xlLnN0eWxlLmxlZnQgPSBgJHt4IC0gc2l6ZS8yfXB4YDtcblx0XHRjaXJjbGUuc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcblx0XHRjaXJjbGUuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG5cdFx0Y2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGUgPT4gY2lyY2xlLnJlbW92ZSgpLCBmYWxzZSk7XG5cdFx0Y2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdEFuaW1hdGlvbkVuZCcsIGUgPT4gY2lyY2xlLnJlbW92ZSgpLCBmYWxzZSk7XG5cblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcblx0fTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24oZSkgeyBcblx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1hbmltYXRpb24qPVwicmlwcGxlXCJdJyk7XG5cdFx0aWYgKHRhcmdldCkgYW5pbWF0aW9uKGUsIHRhcmdldCk7XG5cdH0sIGZhbHNlKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3JpcHBsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ })

/******/ });