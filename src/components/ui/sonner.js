"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toaster = void 0;
Object.defineProperty(exports, "toast", {
  enumerable: true,
  get: function get() {
    return _sonner.toast;
  }
});
var _nextThemes = require("next-themes");
var _sonner = require("sonner");
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Toaster = exports.Toaster = function Toaster(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var _useTheme = (0, _nextThemes.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    theme = _useTheme$theme === void 0 ? "system" : _useTheme$theme;
  return /*#__PURE__*/React.createElement(_sonner.Toaster, _extends({
    theme: theme,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
      }
    }
  }, props));
};
