"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselPrevious = exports.CarouselNext = exports.CarouselItem = exports.CarouselContent = exports.Carousel = void 0;
var React = _interopRequireWildcard(require("react"));
var _emblaCarouselReact = _interopRequireDefault(require("embla-carousel-react"));
var _lucideReact = require("lucide-react");
var _utils = require("@/lib/utils");
var _button = require("@/components/ui/button");
var _excluded = ["orientation", "opts", "setApi", "plugins", "className", "children"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className", "variant", "size"],
  _excluded5 = ["className", "variant", "size"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var CarouselContext = /*#__PURE__*/React.createContext(null);
function useCarousel() {
  var context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = exports.Carousel = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation,
    opts = _ref.opts,
    setApi = _ref.setApi,
    plugins = _ref.plugins,
    className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useEmblaCarousel = (0, _emblaCarouselReact["default"])(_objectSpread(_objectSpread({}, opts), {}, {
      axis: orientation === "horizontal" ? "x" : "y"
    }), plugins),
    _useEmblaCarousel2 = _slicedToArray(_useEmblaCarousel, 2),
    carouselRef = _useEmblaCarousel2[0],
    api = _useEmblaCarousel2[1];
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    canScrollPrev = _React$useState2[0],
    setCanScrollPrev = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    canScrollNext = _React$useState4[0],
    setCanScrollNext = _React$useState4[1];
  var onSelect = React.useCallback(function (api) {
    if (!api) {
      return;
    }
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);
  var scrollPrev = React.useCallback(function () {
    api === null || api === void 0 || api.scrollPrev();
  }, [api]);
  var scrollNext = React.useCallback(function () {
    api === null || api === void 0 || api.scrollNext();
  }, [api]);
  var handleKeyDown = React.useCallback(function (event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  }, [scrollPrev, scrollNext]);
  React.useEffect(function () {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(function () {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return function () {
      api === null || api === void 0 || api.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /*#__PURE__*/React.createElement(CarouselContext.Provider, {
    value: {
      carouselRef: carouselRef,
      api: api,
      opts: opts,
      orientation: orientation || ((opts === null || opts === void 0 ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
      scrollPrev: scrollPrev,
      scrollNext: scrollNext,
      canScrollPrev: canScrollPrev,
      canScrollNext: canScrollNext
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onKeyDownCapture: handleKeyDown,
    className: (0, _utils.cn)("relative", className),
    role: "region",
    "aria-roledescription": "carousel"
  }, props), children));
});
Carousel.displayName = "Carousel";
var CarouselContent = exports.CarouselContent = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var _useCarousel = useCarousel(),
    carouselRef = _useCarousel.carouselRef,
    orientation = _useCarousel.orientation;
  return /*#__PURE__*/React.createElement("div", {
    ref: carouselRef,
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: (0, _utils.cn)("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)
  }, props)));
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = exports.CarouselItem = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  var _useCarousel2 = useCarousel(),
    orientation = _useCarousel2.orientation;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    role: "group",
    "aria-roledescription": "slide",
    className: (0, _utils.cn)("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)
  }, props));
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = exports.CarouselPrevious = /*#__PURE__*/React.forwardRef(function (_ref4, ref) {
  var className = _ref4.className,
    _ref4$variant = _ref4.variant,
    variant = _ref4$variant === void 0 ? "outline" : _ref4$variant,
    _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? "icon" : _ref4$size,
    props = _objectWithoutProperties(_ref4, _excluded4);
  var _useCarousel3 = useCarousel(),
    orientation = _useCarousel3.orientation,
    scrollPrev = _useCarousel3.scrollPrev,
    canScrollPrev = _useCarousel3.canScrollPrev;
  return /*#__PURE__*/React.createElement(_button.Button, _extends({
    ref: ref,
    variant: variant,
    size: size,
    className: (0, _utils.cn)("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
    disabled: !canScrollPrev,
    onClick: scrollPrev
  }, props), /*#__PURE__*/React.createElement(_lucideReact.ArrowLeft, {
    className: "h-4 w-4"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Previous slide"));
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = exports.CarouselNext = /*#__PURE__*/React.forwardRef(function (_ref5, ref) {
  var className = _ref5.className,
    _ref5$variant = _ref5.variant,
    variant = _ref5$variant === void 0 ? "outline" : _ref5$variant,
    _ref5$size = _ref5.size,
    size = _ref5$size === void 0 ? "icon" : _ref5$size,
    props = _objectWithoutProperties(_ref5, _excluded5);
  var _useCarousel4 = useCarousel(),
    orientation = _useCarousel4.orientation,
    scrollNext = _useCarousel4.scrollNext,
    canScrollNext = _useCarousel4.canScrollNext;
  return /*#__PURE__*/React.createElement(_button.Button, _extends({
    ref: ref,
    variant: variant,
    size: size,
    className: (0, _utils.cn)("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
    disabled: !canScrollNext,
    onClick: scrollNext
  }, props), /*#__PURE__*/React.createElement(_lucideReact.ArrowRight, {
    className: "h-4 w-4"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Next slide"));
});
CarouselNext.displayName = "CarouselNext";
