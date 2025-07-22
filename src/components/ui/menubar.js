"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenubarTrigger = exports.MenubarSubTrigger = exports.MenubarSubContent = exports.MenubarSub = exports.MenubarShortcut = exports.MenubarSeparator = exports.MenubarRadioItem = exports.MenubarRadioGroup = exports.MenubarPortal = exports.MenubarMenu = exports.MenubarLabel = exports.MenubarItem = exports.MenubarGroup = exports.MenubarContent = exports.MenubarCheckboxItem = exports.Menubar = void 0;
var React = _interopRequireWildcard(require("react"));
var MenubarPrimitive = _interopRequireWildcard(require("@radix-ui/react-menubar"));
var _lucideReact = require("lucide-react");
var _utils = require("@/lib/utils");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className", "inset", "children"],
  _excluded4 = ["className"],
  _excluded5 = ["className", "align", "alignOffset", "sideOffset"],
  _excluded6 = ["className", "inset"],
  _excluded7 = ["className", "children", "checked"],
  _excluded8 = ["className", "children"],
  _excluded9 = ["className", "inset"],
  _excluded0 = ["className"],
  _excluded1 = ["className"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var MenubarMenu = exports.MenubarMenu = MenubarPrimitive.Menu;
var MenubarGroup = exports.MenubarGroup = MenubarPrimitive.Group;
var MenubarPortal = exports.MenubarPortal = MenubarPrimitive.Portal;
var MenubarSub = exports.MenubarSub = MenubarPrimitive.Sub;
var MenubarRadioGroup = exports.MenubarRadioGroup = MenubarPrimitive.RadioGroup;
var Menubar = exports.Menubar = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(MenubarPrimitive.Root, _extends({
    ref: ref,
    className: (0, _utils.cn)("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)
  }, props));
});
Menubar.displayName = MenubarPrimitive.Root.displayName;
var MenubarTrigger = exports.MenubarTrigger = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement(MenubarPrimitive.Trigger, _extends({
    ref: ref,
    className: (0, _utils.cn)("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", className)
  }, props));
});
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
var MenubarSubTrigger = exports.MenubarSubTrigger = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
    inset = _ref3.inset,
    children = _ref3.children,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/React.createElement(MenubarPrimitive.SubTrigger, _extends({
    ref: ref,
    className: (0, _utils.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", inset && "pl-8", className)
  }, props), children, /*#__PURE__*/React.createElement(_lucideReact.ChevronRight, {
    className: "ml-auto h-4 w-4"
  }));
});
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = exports.MenubarSubContent = /*#__PURE__*/React.forwardRef(function (_ref4, ref) {
  var className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/React.createElement(MenubarPrimitive.SubContent, _extends({
    ref: ref,
    className: (0, _utils.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
  }, props));
});
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
var MenubarContent = exports.MenubarContent = /*#__PURE__*/React.forwardRef(function (_ref5, ref) {
  var className = _ref5.className,
    _ref5$align = _ref5.align,
    align = _ref5$align === void 0 ? "start" : _ref5$align,
    _ref5$alignOffset = _ref5.alignOffset,
    alignOffset = _ref5$alignOffset === void 0 ? -4 : _ref5$alignOffset,
    _ref5$sideOffset = _ref5.sideOffset,
    sideOffset = _ref5$sideOffset === void 0 ? 8 : _ref5$sideOffset,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/React.createElement(MenubarPrimitive.Portal, null, /*#__PURE__*/React.createElement(MenubarPrimitive.Content, _extends({
    ref: ref,
    align: align,
    alignOffset: alignOffset,
    sideOffset: sideOffset,
    className: (0, _utils.cn)("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
  }, props)));
});
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItem = exports.MenubarItem = /*#__PURE__*/React.forwardRef(function (_ref6, ref) {
  var className = _ref6.className,
    inset = _ref6.inset,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/React.createElement(MenubarPrimitive.Item, _extends({
    ref: ref,
    className: (0, _utils.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className)
  }, props));
});
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItem = exports.MenubarCheckboxItem = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var className = _ref7.className,
    children = _ref7.children,
    checked = _ref7.checked,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/React.createElement(MenubarPrimitive.CheckboxItem, _extends({
    ref: ref,
    className: (0, _utils.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
    checked: checked
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
  }, /*#__PURE__*/React.createElement(MenubarPrimitive.ItemIndicator, null, /*#__PURE__*/React.createElement(_lucideReact.Check, {
    className: "h-4 w-4"
  }))), children);
});
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItem = exports.MenubarRadioItem = /*#__PURE__*/React.forwardRef(function (_ref8, ref) {
  var className = _ref8.className,
    children = _ref8.children,
    props = _objectWithoutProperties(_ref8, _excluded8);
  return /*#__PURE__*/React.createElement(MenubarPrimitive.RadioItem, _extends({
    ref: ref,
    className: (0, _utils.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
  }, /*#__PURE__*/React.createElement(MenubarPrimitive.ItemIndicator, null, /*#__PURE__*/React.createElement(_lucideReact.Circle, {
    className: "h-2 w-2 fill-current"
  }))), children);
});
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = exports.MenubarLabel = /*#__PURE__*/React.forwardRef(function (_ref9, ref) {
  var className = _ref9.className,
    inset = _ref9.inset,
    props = _objectWithoutProperties(_ref9, _excluded9);
  return /*#__PURE__*/React.createElement(MenubarPrimitive.Label, _extends({
    ref: ref,
    className: (0, _utils.cn)("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)
  }, props));
});
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = exports.MenubarSeparator = /*#__PURE__*/React.forwardRef(function (_ref0, ref) {
  var className = _ref0.className,
    props = _objectWithoutProperties(_ref0, _excluded0);
  return /*#__PURE__*/React.createElement(MenubarPrimitive.Separator, _extends({
    ref: ref,
    className: (0, _utils.cn)("-mx-1 my-1 h-px bg-muted", className)
  }, props));
});
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
var MenubarShortcut = exports.MenubarShortcut = function MenubarShortcut(_ref1) {
  var className = _ref1.className,
    props = _objectWithoutProperties(_ref1, _excluded1);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: (0, _utils.cn)("ml-auto text-xs tracking-widest text-muted-foreground", className)
  }, props));
};
MenubarShortcut.displayname = "MenubarShortcut";
