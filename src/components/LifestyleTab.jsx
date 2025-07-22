import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Share, Image, Smile, Send, MoreHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const LifestyleTab = () => {
  const [newPost, setNewPost] = useState("");
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const { toast } = useToast();
  const posts = [{
    id: 1,
    author: "Alex Johnson",
    username: "@alexj_student",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=40&h=40&fit=crop&crop=face",
    timeAgo: "2h",
    content: "Just finished my computer science project! 🎉 The feeling when your code finally compiles without errors is unmatched. #CodingLife #StudentLife",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
    likes: 24,
    comments: 5,
    reposts: 3,
    hashtags: ["#CodingLife", "#StudentLife"]
  }, {
    id: 2,
    author: "Sarah Chen",
    username: "@sarahc_bio",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face",
    timeAgo: "4h",
    content: "Study group session at the library was so productive today! Nothing beats collaborative learning 📚✨ #StudyTips #BiologyMajor",
    likes: 31,
    comments: 8,
    reposts: 6,
    hashtags: ["#StudyTips", "#BiologyMajor"]
  }, {
    id: 3,
    author: "Mike Rodriguez",
    username: "@mike_runner",
    avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=40&h=40&fit=crop&crop=face",
    timeAgo: "6h",
    content: "Morning run around campus before classes hits different 🏃‍♂️ The autumn colors are absolutely beautiful this time of year! #CampusLife #Running",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=500&h=300&fit=crop",
    likes: 18,
    comments: 3,
    reposts: 2,
    hashtags: ["#CampusLife", "#Running"]
  }, {
    id: 4,
    author: "Emma Taylor",
    username: "@emma_artist",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=40&h=40&fit=crop&crop=face",
    timeAgo: "8h",
    content: "Spent the afternoon at the campus art studio working on my final project. There's something magical about creating with your hands 🎨 #ArtStudent #CreativeProcess",
    likes: 42,
    comments: 12,
    reposts: 8,
    hashtags: ["#ArtStudent", "#CreativeProcess"]
  }, {
    id: 5,
    author: "David Kim",
    username: "@david_foodie",
    avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=40&h=40&fit=crop&crop=face",
    timeAgo: "12h",
    content: "The new pasta bar in the dining hall is absolutely amazing! Finally some variety in our meal options 🍝 #CampusDining #FoodReview",
    likes: 56,
    comments: 15,
    reposts: 11,
    hashtags: ["#CampusDining", "#FoodReview"]
  }];
  var handleCreatePost = function handleCreatePost() {
    if (!newPost.trim()) {
      toast({
        title: "Empty Post",
        description: "Please write something before posting.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Post Created",
      description: "Your post has been shared with the campus community!"
    });
    setNewPost("");
    setIsPostModalOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-gray-900"
  }, "Student Lifestyle"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600"
  }, "Share your campus experiences")), /*#__PURE__*/React.createElement(_dialog.Dialog, {
    open: isPostModalOpen,
    onOpenChange: setIsPostModalOpen
  }, /*#__PURE__*/React.createElement(_dialog.DialogTrigger, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_button.Button, {
    className: "bg-green-500 hover:bg-green-600"
  }, /*#__PURE__*/React.createElement(_lucideReact.Plus, {
    className: "w-4 h-4 mr-2"
  }), "New Post")), /*#__PURE__*/React.createElement(_dialog.DialogContent, {
    className: "max-w-lg"
  }, /*#__PURE__*/React.createElement(_dialog.DialogHeader, null, /*#__PURE__*/React.createElement(_dialog.DialogTitle, null, "Create New Post")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start space-x-3"
  }, /*#__PURE__*/React.createElement(_avatar.Avatar, {
    className: "w-10 h-10"
  }, /*#__PURE__*/React.createElement(_avatar.AvatarImage, {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face"
  }), /*#__PURE__*/React.createElement(_avatar.AvatarFallback, null, "JS")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement(_textarea.Textarea, {
    placeholder: "What's happening on campus?",
    value: newPost,
    onChange: function onChange(e) {
      return setNewPost(e.target.value);
    },
    rows: 3,
    className: "resize-none border-0 text-lg placeholder:text-gray-500 focus:ring-0"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pt-4 border-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-4"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    variant: "ghost",
    size: "sm",
    className: "text-green-500 hover:text-green-600"
  }, /*#__PURE__*/React.createElement(_lucideReact.Image, {
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement(_button.Button, {
    variant: "ghost",
    size: "sm",
    className: "text-green-500 hover:text-green-600"
  }, /*#__PURE__*/React.createElement(_lucideReact.Video, {
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement(_button.Button, {
    variant: "ghost",
    size: "sm",
    className: "text-green-500 hover:text-green-600"
  }, /*#__PURE__*/React.createElement(_lucideReact.Smile, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    variant: "outline",
    size: "sm",
    onClick: function onClick() {
      return setIsPostModalOpen(false);
    }
  }, "Cancel"), /*#__PURE__*/React.createElement(_button.Button, {
    size: "sm",
    onClick: handleCreatePost,
    className: "bg-green-500 hover:bg-green-600"
  }, "Post"))))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, posts.map(function (post) {
    return /*#__PURE__*/React.createElement(_card.Card, {
      key: post.id,
      className: "hover:shadow-md transition-shadow"
    }, /*#__PURE__*/React.createElement(_card.CardHeader, {
      className: "pb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement(_avatar.Avatar, {
      className: "w-10 h-10"
    }, /*#__PURE__*/React.createElement(_avatar.AvatarImage, {
      src: post.avatar
    }), /*#__PURE__*/React.createElement(_avatar.AvatarFallback, null, post.author.split(' ').map(function (n) {
      return n[0];
    }).join(''))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-semibold text-gray-900"
    }, post.author), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-500 text-sm"
    }, post.username), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, "\u2022"), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-500 text-sm"
    }, post.timeAgo)))), /*#__PURE__*/React.createElement(_button.Button, {
      variant: "ghost",
      size: "sm"
    }, /*#__PURE__*/React.createElement(_lucideReact.MoreHorizontal, {
      className: "w-4 h-4"
    })))), /*#__PURE__*/React.createElement(_card.CardContent, {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800 leading-relaxed"
    }, post.content), post.image && /*#__PURE__*/React.createElement("div", {
      className: "rounded-lg overflow-hidden"
    }, /*#__PURE__*/React.createElement("img", {
      src: post.image,
      alt: "Post content",
      className: "w-full h-64 object-cover hover:scale-105 transition-transform duration-200"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between pt-3 border-t"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-6"
    }, /*#__PURE__*/React.createElement(_button.Button, {
      variant: "ghost",
      size: "sm",
      className: "flex items-center space-x-2 text-gray-600 hover:text-red-500"
    }, /*#__PURE__*/React.createElement(_lucideReact.Heart, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, post.likes)), /*#__PURE__*/React.createElement(_button.Button, {
      variant: "ghost",
      size: "sm",
      className: "flex items-center space-x-2 text-gray-600 hover:text-blue-500"
    }, /*#__PURE__*/React.createElement(_lucideReact.MessageCircle, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, post.comments)), /*#__PURE__*/React.createElement(_button.Button, {
      variant: "ghost",
      size: "sm",
      className: "flex items-center space-x-2 text-gray-600 hover:text-green-500"
    }, /*#__PURE__*/React.createElement(_lucideReact.Repeat2, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, post.reposts)), /*#__PURE__*/React.createElement(_button.Button, {
      variant: "ghost",
      size: "sm",
      className: "text-gray-600 hover:text-blue-500"
    }, /*#__PURE__*/React.createElement(_lucideReact.Share, {
      className: "w-4 h-4"
    }))))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center pt-4"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    variant: "outline",
    className: "w-full md:w-auto"
  }, "Load More Posts")));
};
var _default = exports["default"] = LifestyleTab;
