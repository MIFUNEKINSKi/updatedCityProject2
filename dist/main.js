/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// Modal ** NOT WORKING ** \n// import Modal from \"src/scripts/modal\"\n// window.addEventListener('DOMContentLoaded', () => {\n//   const modal = new Modal();\n//   modal.render();\n//   const modalContainer = document.getElementById(\"about-modal-container\");\n//   const aboutButton = document.getElementById(\"about-button\");\n//   aboutButton.addEventListener(\"click\", () => {\n//     modalContainer.id =\n//       modalContainer.id === \"about-modal-container\"\n//         ? \"about-modal-container-clicked\"\n//         : \"about-modal-container\";\n//   });\n//   const continueButton = document.getElementById(\"continue-button\");\n//   continueButton.addEventListener(\"click\", () => {\n//     modalContainer.id =\n//       modalContainer.id === \"about-modal-container\"\n//         ? \"about-modal-container-clicked\"\n//         : \"about-modal-container\";\n//   });\n// });\n// need a city class that will take in input from user and query the api for that city\n// globe class\n// tooltip class.\n// getCities is not working \n// function getCities = (){\n//   await fetch('https://api.teleport.org/api/countries/').then(function (data) {\n//     var countries = map(data['_links']['country:items'], function (country) { return country.name });\n//     fetchedCities = [];\n//     countries.forEach(function (country) {\n//       ('https://api.teleport.org/api/cities/?search=' + country + '&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity').then(function (data) {\n//         var cities = data['_embedded']['city:search-results'];\n//         cities.forEach(function (city) {\n//           var city = {\n//             country: country,\n//             fullName: city['_embedded']['city:item'].full_name,\n//             name: city['_embedded']['city:item'].name,\n//             population: city['_embedded']['city:item'].population\n//           }\n//           fetchedCities.push(city);\n//         });\n//         console.log(fetchedCities);\n//       });\n//     });\n//   });}\n// teleport_city_score\n// categories[0].name\n// score_out_of_10//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DaXR5RGF0YUpTUHJvamVjdC1tYWluLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kYWwgKiogTk9UIFdPUktJTkcgKiogXG5cbi8vIGltcG9ydCBNb2RhbCBmcm9tIFwic3JjL3NjcmlwdHMvbW9kYWxcIlxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcbi8vICAgbW9kYWwucmVuZGVyKCk7XG4vLyAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1tb2RhbC1jb250YWluZXJcIik7XG5cbi8vICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LWJ1dHRvblwiKTtcbi8vICAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICBtb2RhbENvbnRhaW5lci5pZCA9XG4vLyAgICAgICBtb2RhbENvbnRhaW5lci5pZCA9PT0gXCJhYm91dC1tb2RhbC1jb250YWluZXJcIlxuLy8gICAgICAgICA/IFwiYWJvdXQtbW9kYWwtY29udGFpbmVyLWNsaWNrZWRcIlxuLy8gICAgICAgICA6IFwiYWJvdXQtbW9kYWwtY29udGFpbmVyXCI7XG4vLyAgIH0pO1xuLy8gICBjb25zdCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGludWUtYnV0dG9uXCIpO1xuLy8gICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICAgIG1vZGFsQ29udGFpbmVyLmlkID1cbi8vICAgICAgIG1vZGFsQ29udGFpbmVyLmlkID09PSBcImFib3V0LW1vZGFsLWNvbnRhaW5lclwiXG4vLyAgICAgICAgID8gXCJhYm91dC1tb2RhbC1jb250YWluZXItY2xpY2tlZFwiXG4vLyAgICAgICAgIDogXCJhYm91dC1tb2RhbC1jb250YWluZXJcIjtcbi8vICAgfSk7XG4vLyB9KTtcblxuXG4vLyBuZWVkIGEgY2l0eSBjbGFzcyB0aGF0IHdpbGwgdGFrZSBpbiBpbnB1dCBmcm9tIHVzZXIgYW5kIHF1ZXJ5IHRoZSBhcGkgZm9yIHRoYXQgY2l0eVxuLy8gZ2xvYmUgY2xhc3Ncbi8vIHRvb2x0aXAgY2xhc3MuXG5cblxuLy8gZ2V0Q2l0aWVzIGlzIG5vdCB3b3JraW5nIFxuXG4vLyBmdW5jdGlvbiBnZXRDaXRpZXMgPSAoKXtcbi8vICAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnRlbGVwb3J0Lm9yZy9hcGkvY291bnRyaWVzLycpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbi8vICAgICB2YXIgY291bnRyaWVzID0gbWFwKGRhdGFbJ19saW5rcyddWydjb3VudHJ5Oml0ZW1zJ10sIGZ1bmN0aW9uIChjb3VudHJ5KSB7IHJldHVybiBjb3VudHJ5Lm5hbWUgfSk7XG4vLyAgICAgZmV0Y2hlZENpdGllcyA9IFtdO1xuLy8gICAgIGNvdW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChjb3VudHJ5KSB7XG4vLyAgICAgICAoJ2h0dHBzOi8vYXBpLnRlbGVwb3J0Lm9yZy9hcGkvY2l0aWVzLz9zZWFyY2g9JyArIGNvdW50cnkgKyAnJmVtYmVkPWNpdHklM0FzZWFyY2gtcmVzdWx0cyUyRmNpdHklM0FpdGVtJTJGY2l0eScpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbi8vICAgICAgICAgdmFyIGNpdGllcyA9IGRhdGFbJ19lbWJlZGRlZCddWydjaXR5OnNlYXJjaC1yZXN1bHRzJ107XG4vLyAgICAgICAgIGNpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChjaXR5KSB7XG4vLyAgICAgICAgICAgdmFyIGNpdHkgPSB7XG4vLyAgICAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxuLy8gICAgICAgICAgICAgZnVsbE5hbWU6IGNpdHlbJ19lbWJlZGRlZCddWydjaXR5Oml0ZW0nXS5mdWxsX25hbWUsXG4vLyAgICAgICAgICAgICBuYW1lOiBjaXR5WydfZW1iZWRkZWQnXVsnY2l0eTppdGVtJ10ubmFtZSxcbi8vICAgICAgICAgICAgIHBvcHVsYXRpb246IGNpdHlbJ19lbWJlZGRlZCddWydjaXR5Oml0ZW0nXS5wb3B1bGF0aW9uXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGZldGNoZWRDaXRpZXMucHVzaChjaXR5KTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGZldGNoZWRDaXRpZXMpO1xuLy8gICAgICAgfSk7XG4vLyAgICAgfSk7XG4vLyAgIH0pO31cblxuXG5cblxuXG4vLyB0ZWxlcG9ydF9jaXR5X3Njb3JlXG4vLyBjYXRlZ29yaWVzWzBdLm5hbWVcbi8vIHNjb3JlX291dF9vZl8xMFxuIl0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DaXR5RGF0YUpTUHJvamVjdC1tYWluLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;