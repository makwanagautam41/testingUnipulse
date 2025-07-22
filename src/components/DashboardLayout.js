"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _button = require("@/components/ui/button");
var _avatar = require("@/components/ui/avatar");
var _badge = require("@/components/ui/badge");
var _lucideReact = require("lucide-react");
var _dropdownMenu = require("@/components/ui/dropdown-menu");
var _input = require("@/components/ui/input");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DashboardLayout = function DashboardLayout(_ref) {
  var children = _ref.children,
    _ref$activeTab = _ref.activeTab,
    activeTab = _ref$activeTab === void 0 ? "whispers" : _ref$activeTab,
    onTabChange = _ref.onTabChange;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    darkMode = _useState2[0],
    setDarkMode = _useState2[1];
  var _useState3 = (0, _react.useState)(3),
    _useState4 = _slicedToArray(_useState3, 1),
    notifications = _useState4[0];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    sidebarOpen = _useState6[0],
    setSidebarOpen = _useState6[1];
  var navigationItems = [{
    id: "whispers",
    label: "Whispers",
    icon: _lucideReact.MessageCircle,
    color: "text-purple-500"
  }, {
    id: "announcements",
    label: "Announcements",
    icon: _lucideReact.Megaphone,
    color: "text-blue-500"
  }, {
    id: "lifestyle",
    label: "Lifestyle",
    icon: _lucideReact.Users,
    color: "text-green-500"
  }];
  var trendingTopics = ["#CampusLife", "#StudentLife", "#UniversityEvents", "#StudyTips", "#CampusDining"];
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-background ".concat(darkMode ? 'dark' : '')
  }, /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-3 sm:px-4 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 sm:space-x-3"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    variant: "ghost",
    size: "sm",
    className: "md:hidden p-1",
    onClick: function onClick() {
      return setSidebarOpen(!sidebarOpen);
    }
  }, sidebarOpen ? /*#__PURE__*/React.createElement(_lucideReact.X, {
    className: "w-5 h-5"
  }) : /*#__PURE__*/React.createElement(_lucideReact.Menu, {
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 bg-primary rounded-full flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(_lucideReact.MessageCircle, {
    className: "w-4 h-4 text-white"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:block"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-lg sm:text-xl font-bold text-primary"
  }, "UniPulse"))), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex flex-1 max-w-xs lg:max-w-md mx-4 lg:mx-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full"
  }, /*#__PURE__*/React.createElement(_lucideReact.Search, {
    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"
  }), /*#__PURE__*/React.createElement(_input.Input, {
    placeholder: "Search posts...",
    className: "pl-10 bg-gray-50 border-0 focus:ring-2 focus:ring-primary/20 text-sm"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-1 sm:space-x-3"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    variant: "ghost",
    size: "sm",
    onClick: function onClick() {
      return setDarkMode(!darkMode);
    },
    className: "hidden sm:flex p-2"
  }, darkMode ? /*#__PURE__*/React.createElement(_lucideReact.Sun, {
    className: "w-4 h-4"
  }) : /*#__PURE__*/React.createElement(_lucideReact.Moon, {
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement(_button.Button, {
    variant: "ghost",
    size: "sm",
    className: "relative p-2"
  }, /*#__PURE__*/React.createElement(_lucideReact.Bell, {
    className: "w-4 h-4"
  }), notifications > 0 && /*#__PURE__*/React.createElement(_badge.Badge, {
    className: "absolute -top-1 -right-1 w-4 h-4 text-xs bg-red-500 flex items-center justify-center rounded-full p-0"
  }, notifications)), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenu, null, /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuTrigger, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_button.Button, {
    variant: "ghost",
    className: "relative h-8 w-8 rounded-full p-0"
  }, /*#__PURE__*/React.createElement(_avatar.Avatar, {
    className: "h-7 w-7 sm:h-8 sm:w-8"
  }, /*#__PURE__*/React.createElement(_avatar.AvatarImage, {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
  }), /*#__PURE__*/React.createElement(_avatar.AvatarFallback, null, "JS")))), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuContent, {
    className: "w-56",
    align: "end",
    forceMount: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-1 p-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium"
  }, "Jane Smith"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-muted-foreground"
  }, "jane.smith@university.edu")), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuSeparator, null), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, null, /*#__PURE__*/React.createElement(_lucideReact.User, {
    className: "mr-2 h-4 w-4"
  }), "Profile"), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, null, /*#__PURE__*/React.createElement(_lucideReact.Settings, {
    className: "mr-2 h-4 w-4"
  }), "Settings"), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuSeparator, null), /*#__PURE__*/React.createElement(_dropdownMenu.DropdownMenuItem, null, /*#__PURE__*/React.createElement(_lucideReact.LogOut, {
    className: "mr-2 h-4 w-4"
  }), "Log out"))))), /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden px-3 pb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full"
  }, /*#__PURE__*/React.createElement(_lucideReact.Search, {
    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"
  }), /*#__PURE__*/React.createElement(_input.Input, {
    placeholder: "Search posts...",
    className: "pl-10 bg-gray-50 border-0 focus:ring-2 focus:ring-primary/20 text-sm"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex relative"
  }, sidebarOpen && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden fixed inset-0 bg-black/50 z-40",
    onClick: function onClick() {
      return setSidebarOpen(false);
    }
  }), /*#__PURE__*/React.createElement("aside", {
    className: "\n          ".concat(sidebarOpen ? 'translate-x-0' : '-translate-x-full', "\n          md:translate-x-0 fixed md:static top-0 left-0 z-50 md:z-auto\n          flex flex-col w-64 sm:w-72 h-full md:min-h-screen bg-white border-r\n          transition-transform duration-300 ease-in-out\n        ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 sm:p-4 pt-16 md:pt-4"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    className: "w-full bg-primary hover:bg-primary/90 mb-4 text-sm sm:text-base"
  }, /*#__PURE__*/React.createElement(_lucideReact.Plus, {
    className: "w-4 h-4 mr-2"
  }), "New Post"), /*#__PURE__*/React.createElement("nav", {
    className: "space-y-1 sm:space-y-2"
  }, navigationItems.map(function (item) {
    return /*#__PURE__*/React.createElement(_button.Button, {
      key: item.id,
      variant: activeTab === item.id ? "secondary" : "ghost",
      className: "w-full justify-start text-sm sm:text-base ".concat(activeTab === item.id ? 'bg-primary/10 text-primary' : ''),
      onClick: function onClick() {
        onTabChange === null || onTabChange === void 0 || onTabChange(item.id);
        setSidebarOpen(false);
      }
    }, /*#__PURE__*/React.createElement(item.icon, {
      className: "w-4 h-4 mr-3 ".concat(item.color)
    }), item.label);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-auto p-3 sm:p-4 border-t"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    variant: "outline",
    className: "w-full justify-start text-sm"
  }, /*#__PURE__*/React.createElement(_lucideReact.Shield, {
    className: "w-4 h-4 mr-2"
  }), "Admin Panel"))), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 w-full min-w-0 max-w-full lg:max-w-2xl mx-auto px-3 sm:px-4 lg:px-0"
  }, children), /*#__PURE__*/React.createElement("aside", {
    className: "hidden xl:flex flex-col w-72 2xl:w-80 min-h-screen bg-white border-l"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 rounded-lg p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center mb-3"
  }, /*#__PURE__*/React.createElement(_lucideReact.TrendingUp, {
    className: "w-4 h-4 text-primary mr-2"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-gray-900 text-sm"
  }, "Campus Trends")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, trendingTopics.map(function (topic, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "flex items-center justify-between py-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-primary hover:underline cursor-pointer"
    }, topic), /*#__PURE__*/React.createElement(_badge.Badge, {
      variant: "secondary",
      className: "text-xs"
    }, Math.floor(Math.random() * 100) + 10));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 rounded-lg p-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-gray-900 mb-3 text-sm"
  }, "Campus Stats"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-gray-600"
  }, "Active Students"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium"
  }, "2,847")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-gray-600"
  }, "Anonymous Posts"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium"
  }, "156")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-gray-600"
  }, "Resolved Issues"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium text-green-600"
  }, "89%"))))))), /*#__PURE__*/React.createElement("div", {
    className: "md:hidden fixed bottom-0 left-0 right-0 bg-white border-t safe-area-pb z-30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-around py-2 px-1"
  }, navigationItems.map(function (item) {
    return /*#__PURE__*/React.createElement(_button.Button, {
      key: item.id,
      variant: "ghost",
      size: "sm",
      className: "flex flex-col items-center p-2 min-w-0 flex-1 ".concat(activeTab === item.id ? 'text-primary' : 'text-gray-500'),
      onClick: function onClick() {
        return onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(item.id);
      }
    }, /*#__PURE__*/React.createElement(item.icon, {
      className: "w-5 h-5 mb-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs truncate"
    }, item.label));
  }))));
};
var _default = exports["default"] = DashboardLayout;
