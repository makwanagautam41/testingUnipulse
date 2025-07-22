"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleGroupItem = exports.ToggleGroup = void 0;
var React = _interopRequireWildcard(require("react"));
var ToggleGroupPrimitive = _interopRequireWildcard(require("@radix-ui/react-toggle-group"));
var _utils = require("@/lib/utils");
var _toggle = require("@/components/ui/toggle");
var _excluded = ["className", "variant", "size", "children"],
  _excluded2 = ["className", "children", "variant", "size"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var ToggleGroupContext = /*#__PURE__*/React.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = exports.ToggleGroup = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    variant = _ref.variant,
    size = _ref.size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ToggleGroupPrimitive.Root, _extends({
    ref: ref,
    className: (0, _utils.cn)("flex items-center justify-center gap-1", className)
  }, props), /*#__PURE__*/React.createElement(ToggleGroupContext.Provider, {
    value: {
      variant: variant,
      size: size
    }
  }, children));
});
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = exports.ToggleGroupItem = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    children = _ref2.children,
    variant = _ref2.variant,
    size = _ref2.size,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var context = React.useContext(ToggleGroupContext);
  return /*#__PURE__*/React.createElement(ToggleGroupPrimitive.Item, _extends({
    ref: ref,
    className: (0, _utils.cn)((0, _toggle.toggleVariants)({
      variant: context.variant || variant,
      size: context.size || size
    }), className)
  }, props), children);
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
