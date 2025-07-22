"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartTooltipContent = exports.ChartTooltip = exports.ChartStyle = exports.ChartLegendContent = exports.ChartLegend = exports.ChartContainer = void 0;
var React = _interopRequireWildcard(require("react"));
var RechartsPrimitive = _interopRequireWildcard(require("recharts"));
var _utils = require("@/lib/utils");
var _excluded = ["id", "className", "children", "config"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
// Format: { THEME_NAME: CSS_SELECTOR }
var THEMES = {
  light: "",
  dark: ".dark"
};
var ChartContext = /*#__PURE__*/React.createContext(null);
function useChart() {
  var context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
var ChartContainer = exports.ChartContainer = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
    className = _ref.className,
    children = _ref.children,
    config = _ref.config,
    props = _objectWithoutProperties(_ref, _excluded);
  var uniqueId = React.useId();
  var chartId = "chart-".concat(id || uniqueId.replace(/:/g, ""));
  return /*#__PURE__*/React.createElement(ChartContext.Provider, {
    value: {
      config: config
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    "data-chart": chartId,
    ref: ref,
    className: (0, _utils.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className)
  }, props), /*#__PURE__*/React.createElement(ChartStyle, {
    id: chartId,
    config: config
  }), /*#__PURE__*/React.createElement(RechartsPrimitive.ResponsiveContainer, null, children)));
});
ChartContainer.displayName = "Chart";
var ChartStyle = exports.ChartStyle = function ChartStyle(_ref2) {
  var id = _ref2.id,
    config = _ref2.config;
  var colorConfig = Object.entries(config).filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      _ = _ref4[0],
      config = _ref4[1];
    return config.theme || config.color;
  });
  if (!colorConfig.length) {
    return null;
  }
  return /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: Object.entries(THEMES).map(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          theme = _ref6[0],
          prefix = _ref6[1];
        return "\n".concat(prefix, " [data-chart=").concat(id, "] {\n").concat(colorConfig.map(function (_ref7) {
          var _itemConfig$theme;
          var _ref8 = _slicedToArray(_ref7, 2),
            key = _ref8[0],
            itemConfig = _ref8[1];
          var color = ((_itemConfig$theme = itemConfig.theme) === null || _itemConfig$theme === void 0 ? void 0 : _itemConfig$theme[theme]) || itemConfig.color;
          return color ? "  --color-".concat(key, ": ").concat(color, ";") : null;
        }).join("\n"), "\n}\n");
      }).join("\n")
    }
  });
};
var ChartTooltip = exports.ChartTooltip = RechartsPrimitive.Tooltip;
var ChartTooltipContent = exports.ChartTooltipContent = /*#__PURE__*/React.forwardRef(function (_ref9, ref) {
  var active = _ref9.active,
    payload = _ref9.payload,
    className = _ref9.className,
    _ref9$indicator = _ref9.indicator,
    indicator = _ref9$indicator === void 0 ? "dot" : _ref9$indicator,
    _ref9$hideLabel = _ref9.hideLabel,
    hideLabel = _ref9$hideLabel === void 0 ? false : _ref9$hideLabel,
    _ref9$hideIndicator = _ref9.hideIndicator,
    hideIndicator = _ref9$hideIndicator === void 0 ? false : _ref9$hideIndicator,
    label = _ref9.label,
    labelFormatter = _ref9.labelFormatter,
    labelClassName = _ref9.labelClassName,
    formatter = _ref9.formatter,
    color = _ref9.color,
    nameKey = _ref9.nameKey,
    labelKey = _ref9.labelKey;
  var _useChart = useChart(),
    config = _useChart.config;
  var tooltipLabel = React.useMemo(function () {
    var _config;
    if (hideLabel || !(payload !== null && payload !== void 0 && payload.length)) {
      return null;
    }
    var _payload = _slicedToArray(payload, 1),
      item = _payload[0];
    var key = "".concat(labelKey || item.dataKey || item.name || "value");
    var itemConfig = getPayloadConfigFromPayload(config, item, key);
    var value = !labelKey && typeof label === "string" ? ((_config = config[label]) === null || _config === void 0 ? void 0 : _config.label) || label : itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label;
    if (labelFormatter) {
      return /*#__PURE__*/React.createElement("div", {
        className: (0, _utils.cn)("font-medium", labelClassName)
      }, labelFormatter(value, payload));
    }
    if (!value) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: (0, _utils.cn)("font-medium", labelClassName)
    }, value);
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);
  if (!active || !(payload !== null && payload !== void 0 && payload.length)) {
    return null;
  }
  var nestLabel = payload.length === 1 && indicator !== "dot";
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: (0, _utils.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className)
  }, !nestLabel ? tooltipLabel : null, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-1.5"
  }, payload.map(function (item, index) {
    var key = "".concat(nameKey || item.name || item.dataKey || "value");
    var itemConfig = getPayloadConfigFromPayload(config, item, key);
    var indicatorColor = color || item.payload.fill || item.color;
    return /*#__PURE__*/React.createElement("div", {
      key: item.dataKey,
      className: (0, _utils.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center")
    }, formatter && (item === null || item === void 0 ? void 0 : item.value) !== undefined && item.name ? formatter(item.value, item.name, item, index, item.payload) : /*#__PURE__*/React.createElement(React.Fragment, null, itemConfig !== null && itemConfig !== void 0 && itemConfig.icon ? /*#__PURE__*/React.createElement(itemConfig.icon, null) : !hideIndicator && /*#__PURE__*/React.createElement("div", {
      className: (0, _utils.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
        "h-2.5 w-2.5": indicator === "dot",
        "w-1": indicator === "line",
        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
        "my-0.5": nestLabel && indicator === "dashed"
      }),
      style: {
        "--color-bg": indicatorColor,
        "--color-border": indicatorColor
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: (0, _utils.cn)("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center")
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid gap-1.5"
    }, nestLabel ? tooltipLabel : null, /*#__PURE__*/React.createElement("span", {
      className: "text-muted-foreground"
    }, (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label) || item.name)), item.value && /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-medium tabular-nums text-foreground"
    }, item.value.toLocaleString()))));
  })));
});
ChartTooltipContent.displayName = "ChartTooltip";
var ChartLegend = exports.ChartLegend = RechartsPrimitive.Legend;
var ChartLegendContent = exports.ChartLegendContent = /*#__PURE__*/React.forwardRef(function (_ref0, ref) {
  var className = _ref0.className,
    _ref0$hideIcon = _ref0.hideIcon,
    hideIcon = _ref0$hideIcon === void 0 ? false : _ref0$hideIcon,
    payload = _ref0.payload,
    _ref0$verticalAlign = _ref0.verticalAlign,
    verticalAlign = _ref0$verticalAlign === void 0 ? "bottom" : _ref0$verticalAlign,
    nameKey = _ref0.nameKey;
  var _useChart2 = useChart(),
    config = _useChart2.config;
  if (!(payload !== null && payload !== void 0 && payload.length)) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: (0, _utils.cn)("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)
  }, payload.map(function (item) {
    var key = "".concat(nameKey || item.dataKey || "value");
    var itemConfig = getPayloadConfigFromPayload(config, item, key);
    return /*#__PURE__*/React.createElement("div", {
      key: item.value,
      className: (0, _utils.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")
    }, itemConfig !== null && itemConfig !== void 0 && itemConfig.icon && !hideIcon ? /*#__PURE__*/React.createElement(itemConfig.icon, null) : /*#__PURE__*/React.createElement("div", {
      className: "h-2 w-2 shrink-0 rounded-[2px]",
      style: {
        backgroundColor: item.color
      }
    }), itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label);
  }));
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
  if (_typeof(payload) !== "object" || payload === null) {
    return undefined;
  }
  var payloadPayload = "payload" in payload && _typeof(payload.payload) === "object" && payload.payload !== null ? payload.payload : undefined;
  var configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
