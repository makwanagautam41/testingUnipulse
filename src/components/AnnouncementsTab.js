"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _button = require("@/components/ui/button");
var _card = require("@/components/ui/card");
var _badge = require("@/components/ui/badge");
var _avatar = require("@/components/ui/avatar");
var _lucideReact = require("lucide-react");
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
var AnnouncementsTab = function AnnouncementsTab() {
  var _useState = (0, _react.useState)({
      1: {
        gotIt: 45,
        needHelp: 3
      },
      2: {
        gotIt: 23,
        needHelp: 12
      },
      3: {
        gotIt: 89,
        needHelp: 2
      },
      4: {
        gotIt: 156,
        needHelp: 8
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    reactions = _useState2[0],
    setReactions = _useState2[1];
  var announcements = [{
    id: 1,
    title: "Final Exam Schedule Released",
    content: "The final examination schedule for Fall 2024 has been published. Please check your student portal for specific dates and times. Remember that exam conflicts must be reported by December 1st.",
    author: "Academic Affairs Office",
    authorImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=40&h=40&fit=crop&crop=face",
    category: "Academic",
    timeAgo: "2 hours ago",
    isPinned: true,
    isUrgent: false
  }, {
    id: 2,
    title: "Campus Safety Alert - Construction Zone",
    content: "Due to ongoing construction near the Engineering Building, the main walkway will be closed from December 4-8. Please use the alternate route via the Student Center. Safety personnel will be present to guide students.",
    author: "Campus Security",
    authorImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=40&h=40&fit=crop&crop=face",
    category: "Emergency",
    timeAgo: "4 hours ago",
    isPinned: false,
    isUrgent: true
  }, {
    id: 3,
    title: "Winter Break Housing Information",
    content: "Students planning to stay on campus during winter break (Dec 20 - Jan 15) must submit their housing request by December 10th. Additional fees will apply. Contact Housing Services for details.",
    author: "Housing Services",
    authorImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face",
    category: "Housing",
    timeAgo: "1 day ago",
    isPinned: false,
    isUrgent: false
  }, {
    id: 4,
    title: "Holiday Celebration & Food Drive",
    content: "Join us for our annual Holiday Celebration on December 15th in the Student Union Ballroom from 6-9 PM. We're also hosting a food drive to support local families. Bring non-perishable items!",
    author: "Student Activities",
    authorImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=40&h=40&fit=crop&crop=face",
    category: "Events",
    timeAgo: "2 days ago",
    isPinned: false,
    isUrgent: false
  }];
  var getCategoryColor = function getCategoryColor(category) {
    switch (category) {
      case "Academic":
        return "bg-blue-100 text-blue-800";
      case "Emergency":
        return "bg-red-100 text-red-800";
      case "Events":
        return "bg-green-100 text-green-800";
      case "Housing":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  var getCategoryIcon = function getCategoryIcon(category) {
    switch (category) {
      case "Academic":
        return /*#__PURE__*/React.createElement(_lucideReact.GraduationCap, {
          className: "w-3 h-3"
        });
      case "Emergency":
        return /*#__PURE__*/React.createElement(_lucideReact.AlertTriangle, {
          className: "w-3 h-3"
        });
      case "Events":
        return /*#__PURE__*/React.createElement(_lucideReact.Calendar, {
          className: "w-3 h-3"
        });
      default:
        return /*#__PURE__*/React.createElement(_lucideReact.Megaphone, {
          className: "w-3 h-3"
        });
    }
  };
  var handleReaction = function handleReaction(announcementId, type) {
    setReactions(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, announcementId, _objectSpread(_objectSpread({}, prev[announcementId]), {}, _defineProperty({}, type, prev[announcementId][type] + 1))));
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-gray-900"
  }, "Official Announcements"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600"
  }, "Important updates from faculty and administration")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, announcements.map(function (announcement) {
    var _reactions$announceme, _reactions$announceme2;
    return /*#__PURE__*/React.createElement(_card.Card, {
      key: announcement.id,
      className: "hover:shadow-md transition-shadow ".concat(announcement.isUrgent ? 'border-red-200 bg-red-50/30' : '', " ").concat(announcement.isPinned ? 'border-blue-200 bg-blue-50/30' : '')
    }, /*#__PURE__*/React.createElement(_card.CardHeader, {
      className: "pb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement(_avatar.Avatar, {
      className: "w-10 h-10"
    }, /*#__PURE__*/React.createElement(_avatar.AvatarImage, {
      src: announcement.authorImage
    }), /*#__PURE__*/React.createElement(_avatar.AvatarFallback, null, announcement.author.split(' ').map(function (n) {
      return n[0];
    }).join(''))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-semibold text-gray-900 text-lg"
    }, announcement.title), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 mt-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, announcement.author), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, "\u2022"), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-500"
    }, announcement.timeAgo)))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, announcement.isPinned && /*#__PURE__*/React.createElement(_lucideReact.Pin, {
      className: "w-4 h-4 text-blue-500"
    }), announcement.isUrgent && /*#__PURE__*/React.createElement(_lucideReact.AlertTriangle, {
      className: "w-4 h-4 text-red-500"
    }), /*#__PURE__*/React.createElement(_badge.Badge, {
      variant: "secondary",
      className: "text-xs flex items-center gap-1 ".concat(getCategoryColor(announcement.category))
    }, getCategoryIcon(announcement.category), announcement.category)))), /*#__PURE__*/React.createElement(_card.CardContent, {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800 leading-relaxed text-base"
    }, announcement.content), announcement.isUrgent && /*#__PURE__*/React.createElement("div", {
      className: "bg-red-50 border border-red-200 rounded-lg p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/React.createElement(_lucideReact.AlertTriangle, {
      className: "w-4 h-4 text-red-600 mr-2"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-red-800 font-medium"
    }, "This is an urgent announcement requiring immediate attention"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between pt-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement(_button.Button, {
      variant: "outline",
      size: "sm",
      className: "flex items-center space-x-2 text-green-600 border-green-200 hover:bg-green-50",
      onClick: function onClick() {
        return handleReaction(announcement.id, 'gotIt');
      }
    }, /*#__PURE__*/React.createElement(_lucideReact.CheckCircle, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, "Got it"), /*#__PURE__*/React.createElement(_badge.Badge, {
      variant: "secondary",
      className: "ml-1"
    }, ((_reactions$announceme = reactions[announcement.id]) === null || _reactions$announceme === void 0 ? void 0 : _reactions$announceme.gotIt) || 0)), /*#__PURE__*/React.createElement(_button.Button, {
      variant: "outline",
      size: "sm",
      className: "flex items-center space-x-2 text-orange-600 border-orange-200 hover:bg-orange-50",
      onClick: function onClick() {
        return handleReaction(announcement.id, 'needHelp');
      }
    }, /*#__PURE__*/React.createElement(_lucideReact.HelpCircle, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, "Need Help"), /*#__PURE__*/React.createElement(_badge.Badge, {
      variant: "secondary",
      className: "ml-1"
    }, ((_reactions$announceme2 = reactions[announcement.id]) === null || _reactions$announceme2 === void 0 ? void 0 : _reactions$announceme2.needHelp) || 0))), /*#__PURE__*/React.createElement(_button.Button, {
      variant: "ghost",
      size: "sm",
      className: "text-primary"
    }, "View Details"))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center pt-4"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    variant: "outline",
    className: "w-full md:w-auto"
  }, "Load More Announcements")));
};
var _default = exports["default"] = AnnouncementsTab;
