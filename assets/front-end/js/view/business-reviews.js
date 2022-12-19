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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/view/business-reviews.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/view/business-reviews.js":
/*!*****************************************!*\
  !*** ./src/js/view/business-reviews.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var BusinessReviewsHandler = function BusinessReviewsHandler($scope, $) {\n  var $eael_business_reviews = $(\".eael-business-reviews-wrapper\", $scope);\n  var $posts_per_page = $eael_business_reviews.data(\"posts-per-page\");\n  var $total_posts = $eael_business_reviews.data(\"total-posts\");\n  var $nomore_item_text = $eael_business_reviews.data(\"nomore-item-text\");\n  var $next_page = $eael_business_reviews.data(\"next-page\");\n  $scope.on(\"click\", \".eael-business-reviews-load-more\", function (e) {\n    e.preventDefault();\n    $('.eael-nft-item.page-' + $next_page, $scope).removeClass('eael-d-none').addClass('eael-d-block');\n    $eael_business_reviews.attr(\"data-next-page\", $next_page + 1);\n\n    if ($('.eael-nft-item.page-' + $next_page, $scope).hasClass('eael-last-business-reviews-item')) {\n      $(\".eael-business-reviews-load-more\", $scope).html($nomore_item_text).fadeOut('1500');\n    }\n\n    $next_page++;\n  }); // Slider js\n\n  var $businessReviewsSlider = $scope.find('.eael-business-reviews-main').eq(0),\n      $pagination = '.swiper-pagination',\n      $arrow_next = '.swiper-button-next',\n      $arrow_prev = '.swiper-button-prev',\n      $items = 3,\n      $items_tablet = 3,\n      $items_mobile = 3,\n      $margin = 10,\n      $margin_tablet = 10,\n      $margin_mobile = 10,\n      $effect = 'slide',\n      $speed = 400,\n      $autoplay = 999999,\n      $loop = 0,\n      $grab_cursor = 0,\n      $centeredSlides = true;\n  var $businessReviewsSliderOptions = {\n    direction: 'horizontal',\n    speed: $speed,\n    effect: $effect,\n    centeredSlides: $centeredSlides,\n    grabCursor: $grab_cursor,\n    autoHeight: true,\n    loop: $loop,\n    autoplay: {\n      delay: $autoplay,\n      disableOnInteraction: false\n    },\n    pagination: {\n      el: $pagination,\n      clickable: true\n    },\n    navigation: {\n      nextEl: $arrow_next,\n      prevEl: $arrow_prev\n    }\n  };\n  $businessReviewsSliderOptions.items = 1;\n  var $businessReviewsSliderObj = swiperLoader($businessReviewsSlider, $businessReviewsSliderOptions);\n  $businessReviewsSliderObj.then(function ($businessReviewsSliderObj) {\n    $businessReviewsSliderObj.update();\n  });\n};\n\njQuery(window).on(\"elementor/frontend/init\", function () {\n  elementorFrontend.hooks.addAction(\"frontend/element_ready/eael-business-reviews.default\", BusinessReviewsHandler);\n});\n\n//# sourceURL=webpack:///./src/js/view/business-reviews.js?");

/***/ })

/******/ });