(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 2687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(8);var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(6));var _react=_interopRequireWildcard(__webpack_require__(1));var _reactRouterDom=__webpack_require__(22);var _strapiHelperPlugin=__webpack_require__(7);var _permissions=_interopRequireDefault(__webpack_require__(320));var EditView=/*#__PURE__*/(0,_react.lazy)(function(){return Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.t.bind(null, 2765, 7));});var EditSettingsView=/*#__PURE__*/(0,_react.lazy)(function(){return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.t.bind(null, 2685, 7));});var SingleTypeRecursivePath=function SingleTypeRecursivePath(props){var _useRouteMatch=(0,_reactRouterDom.useRouteMatch)(),url=_useRouteMatch.url;var _useParams=(0,_reactRouterDom.useParams)(),slug=_useParams.slug;return/*#__PURE__*/_react["default"].createElement(_react.Suspense,{fallback:/*#__PURE__*/_react["default"].createElement(_strapiHelperPlugin.LoadingIndicatorPage,null)},/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch,null,/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{path:"".concat(url,"/ctm-configurations/edit-settings/:type"),render:function render(routeProps){return/*#__PURE__*/_react["default"].createElement(_strapiHelperPlugin.CheckPagePermissions,{permissions:_permissions["default"].singleTypesConfigurations},/*#__PURE__*/_react["default"].createElement(EditSettingsView,(0,_extends2["default"])({},props,routeProps,{slug:slug})));}}),/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{path:"".concat(url),render:function render(routeProps){return/*#__PURE__*/_react["default"].createElement(EditView,(0,_extends2["default"])({},props,routeProps,{slug:slug}));}})));};var _default=SingleTypeRecursivePath;exports["default"]=_default;

/***/ })

}]);