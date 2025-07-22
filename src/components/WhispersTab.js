"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _button = require("@/components/ui/button");
var _card = require("@/components/ui/card");
var _badge = require("@/components/ui/badge");
var _textarea = require("@/components/ui/textarea");
var _select = require("@/components/ui/select");
var _lucideReact = require("lucide-react");
var _useToast2 = require("@/hooks/use-toast");
var _dialog = require("@/components/ui/dialog");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var WhispersTab = function WhispersTab() {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    newWhisper = _useState2[0],
    setNewWhisper = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedTag = _useState4[0],
    setSelectedTag = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isPostModalOpen = _useState6[0],
    setIsPostModalOpen = _useState6[1];
  var _useToast = (0, _useToast2.useToast)(),
    toast = _useToast.toast;
  var whispers = [{
    id: 1,
    content: "The WiFi in the library is extremely slow and keeps disconnecting. It's affecting my ability to complete assignments and research.",
    tag: "Infrastructure",
    upvotes: 23,
    comments: 5,
    status: "In Progress",
    timeAgo: "2 hours ago",
    adminReply: "IT department is working on upgrading the network infrastructure. Expected completion by next week."
  }, {
    id: 2,
    content: "Can we please have more vegetarian options in the cafeteria? The current selection is very limited.",
    tag: "Dining",
    upvotes: 45,
    comments: 12,
    status: "Approved",
    timeAgo: "5 hours ago",
    adminReply: "We're pleased to announce that 3 new vegetarian options will be added to the menu starting Monday."
  }, {
    id: 3,
    content: "I'm struggling with anxiety and depression. Are there any support groups or counseling services available on campus?",
    tag: "Mental Health",
    upvotes: 67,
    comments: 18,
    status: "Resolved",
    timeAgo: "1 day ago",
    adminReply: "Please visit the Student Wellness Center on the 2nd floor of the Student Union. Free counseling and support groups are available."
  }, {
    id: 4,
    content: "The parking situation near the science building is terrible. Students are being forced to park illegally because there aren't enough spots.",
    tag: "Parking",
    upvotes: 89,
    comments: 24,
    status: "Under Review",
    timeAgo: "3 days ago"
  }];
  var tags = ["Infrastructure", "Dining", "Mental Health", "Parking", "Academics", "Safety", "Events", "Housing", "Transportation"];
  var getStatusColor = function getStatusColor(status) {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Approved":
        return "bg-purple-100 text-purple-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  var getStatusIcon = function getStatusIcon(status) {
    switch (status) {
      case "Resolved":
        return /*#__PURE__*/React.createElement(_lucideReact.CheckCircle, {
          className: "w-3 h-3"
        });
      case "In Progress":
        return /*#__PURE__*/React.createElement(_lucideReact.Settings, {
          className: "w-3 h-3"
        });
      case "Approved":
        return /*#__PURE__*/React.createElement(_lucideReact.CheckCircle, {
          className: "w-3 h-3"
        });
      case "Under Review":
        return /*#__PURE__*/React.createElement(_lucideReact.Clock, {
          className: "w-3 h-3"
        });
      default:
        return /*#__PURE__*/React.createElement(_lucideReact.AlertCircle, {
          className: "w-3 h-3"
        });
    }
  };
  var handleSubmitWhisper = function handleSubmitWhisper() {
    if (!newWhisper.trim() || !selectedTag) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in both the message and select a tag.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Whisper Posted",
      description: "Your anonymous message has been posted successfully."
    });
    setNewWhisper("");
    setSelectedTag("");
    setIsPostModalOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-gray-900"
  }, "Anonymous Whispers"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600"
  }, "Share your concerns and suggestions anonymously")), /*#__PURE__*/React.createElement(_dialog.Dialog, {
    open: isPostModalOpen,
    onOpenChange: setIsPostModalOpen
  }, /*#__PURE__*/React.createElement(_dialog.DialogTrigger, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_button.Button, {
    className: "bg-purple-500 hover:bg-purple-600"
  }, /*#__PURE__*/React.createElement(_lucideReact.Plus, {
    className: "w-4 h-4 mr-2"
  }), "New Whisper")), /*#__PURE__*/React.createElement(_dialog.DialogContent, {
    className: "max-w-md"
  }, /*#__PURE__*/React.createElement(_dialog.DialogHeader, null, /*#__PURE__*/React.createElement(_dialog.DialogTitle, null, "Share Anonymous Whisper")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-yellow-50 border border-yellow-200 rounded-lg p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement(_lucideReact.AlertCircle, {
    className: "w-4 h-4 text-yellow-600 mr-2"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-yellow-800"
  }, "Your identity will remain completely anonymous"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-medium text-gray-700 block mb-2"
  }, "Category"), /*#__PURE__*/React.createElement(_select.Select, {
    value: selectedTag,
    onValueChange: setSelectedTag
  }, /*#__PURE__*/React.createElement(_select.SelectTrigger, null, /*#__PURE__*/React.createElement(_select.SelectValue, {
    placeholder: "Select a category"
  })), /*#__PURE__*/React.createElement(_select.SelectContent, null, tags.map(function (tag) {
    return /*#__PURE__*/React.createElement(_select.SelectItem, {
      key: tag,
      value: tag
    }, tag);
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-medium text-gray-700 block mb-2"
  }, "Your Message"), /*#__PURE__*/React.createElement(_textarea.Textarea, {
    placeholder: "Share your concern, suggestion, or question...",
    value: newWhisper,
    onChange: function onChange(e) {
      return setNewWhisper(e.target.value);
    },
    rows: 4,
    className: "resize-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    onClick: handleSubmitWhisper,
    className: "flex-1 bg-purple-500 hover:bg-purple-600"
  }, "Post Anonymously"), /*#__PURE__*/React.createElement(_button.Button, {
    variant: "outline",
    onClick: function onClick() {
      return setIsPostModalOpen(false);
    }
  }, "Cancel")))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, whispers.map(function (whisper) {
    return /*#__PURE__*/React.createElement(_card.Card, {
      key: whisper.id,
      className: "hover:shadow-md transition-shadow"
    }, /*#__PURE__*/React.createElement(_card.CardHeader, {
      className: "pb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement(_badge.Badge, {
      variant: "secondary",
      className: "text-xs"
    }, whisper.tag), /*#__PURE__*/React.createElement(_badge.Badge, {
      variant: "secondary",
      className: "text-xs flex items-center gap-1 ".concat(getStatusColor(whisper.status))
    }, getStatusIcon(whisper.status), whisper.status)), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, whisper.timeAgo), /*#__PURE__*/React.createElement(_button.Button, {
      variant: "ghost",
      size: "sm"
    }, /*#__PURE__*/React.createElement(_lucideReact.Flag, {
      className: "w-3 h-3"
    }))))), /*#__PURE__*/React.createElement(_card.CardContent, {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800 leading-relaxed"
    }, whisper.content), whisper.adminReply && /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center mb-1"
    }, /*#__PURE__*/React.createElement(_badge.Badge, {
      className: "text-xs bg-blue-500"
    }, "Official Response")), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-blue-800"
    }, whisper.adminReply)), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between pt-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-4"
    }, /*#__PURE__*/React.createElement(_button.Button, {
      variant: "ghost",
      size: "sm",
      className: "flex items-center space-x-1 text-gray-600 hover:text-purple-600"
    }, /*#__PURE__*/React.createElement(_lucideReact.ThumbsUp, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, whisper.upvotes)), /*#__PURE__*/React.createElement(_button.Button, {
      variant: "ghost",
      size: "sm",
      className: "flex items-center space-x-1 text-gray-600 hover:text-blue-600"
    }, /*#__PURE__*/React.createElement(_lucideReact.MessageCircle, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, whisper.comments))), /*#__PURE__*/React.createElement(_button.Button, {
      variant: "outline",
      size: "sm"
    }, "View Details"))));
  })));
};
var _default = exports["default"] = WhispersTab;
