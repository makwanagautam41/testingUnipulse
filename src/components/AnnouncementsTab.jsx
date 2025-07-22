import React, { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardHeader, CardContent } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar.jsx";
import {
  GraduationCap,
  AlertTriangle,
  Calendar,
  Megaphone,
  Pin,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

const AnnouncementsTab = () => {
  const [reactions, setReactions] = useState({
    1: { gotIt: 45, needHelp: 3 },
    2: { gotIt: 23, needHelp: 12 },
    3: { gotIt: 89, needHelp: 2 },
    4: { gotIt: 156, needHelp: 8 },
  });

  const announcements = [
    {
      id: 1,
      title: "Final Exam Schedule Released",
      content:
        "The final examination schedule for Fall 2024 has been published. Please check your student portal for specific dates and times. Remember that exam conflicts must be reported by December 1st.",
      author: "Academic Affairs Office",
      authorImage:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=40&h=40&fit=crop&crop=face",
      category: "Academic",
      timeAgo: "2 hours ago",
      isPinned: true,
      isUrgent: false,
    },
    {
      id: 2,
      title: "Campus Safety Alert - Construction Zone",
      content:
        "Due to ongoing construction near the Engineering Building, the main walkway will be closed from December 4-8. Please use the alternate route via the Student Center. Safety personnel will be present to guide students.",
      author: "Campus Security",
      authorImage:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=40&h=40&fit=crop&crop=face",
      category: "Emergency",
      timeAgo: "4 hours ago",
      isPinned: false,
      isUrgent: true,
    },
    {
      id: 3,
      title: "Winter Break Housing Information",
      content:
        "Students planning to stay on campus during winter break (Dec 20 - Jan 15) must submit their housing request by December 10th. Additional fees will apply. Contact Housing Services for details.",
      author: "Housing Services",
      authorImage:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face",
      category: "Housing",
      timeAgo: "1 day ago",
      isPinned: false,
      isUrgent: false,
    },
    {
      id: 4,
      title: "Holiday Celebration & Food Drive",
      content:
        "Join us for our annual Holiday Celebration on December 15th in the Student Union Ballroom from 6-9 PM. We're also hosting a food drive to support local families. Bring non-perishable items!",
      author: "Student Activities",
      authorImage:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=40&h=40&fit=crop&crop=face",
      category: "Events",
      timeAgo: "2 days ago",
      isPinned: false,
      isUrgent: false,
    },
  ];

  const getCategoryColor = (category) => {
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

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Academic":
        return <GraduationCap className="w-3 h-3" />;
      case "Emergency":
        return <AlertTriangle className="w-3 h-3" />;
      case "Events":
        return <Calendar className="w-3 h-3" />;
      default:
        return <Megaphone className="w-3 h-3" />;
    }
  };

  const handleReaction = (announcementId, type) => {
    setReactions((prev) => ({
      ...prev,
      [announcementId]: {
        ...prev[announcementId],
        [type]: prev[announcementId][type] + 1,
      },
    }));
  };

  return (
    <div className="space-y-6 p-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Official Announcements
        </h2>
        <p className="text-gray-600">
          Important updates from faculty and administration
        </p>
      </div>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card
            key={announcement.id}
            className={`hover:shadow-md transition-shadow ${
              announcement.isUrgent ? "border-red-200 bg-red-50/30" : ""
            } ${announcement.isPinned ? "border-blue-200 bg-blue-50/30" : ""}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={announcement.authorImage} />
                    <AvatarFallback>
                      {announcement.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {announcement.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-600">
                        {announcement.author}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">
                        {announcement.timeAgo}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {announcement.isPinned && (
                    <Pin className="w-4 h-4 text-blue-500" />
                  )}
                  {announcement.isUrgent && (
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  )}
                  <Badge
                    variant="secondary"
                    className={`text-xs flex items-center gap-1 ${getCategoryColor(
                      announcement.category
                    )}`}
                  >
                    {getCategoryIcon(announcement.category)}
                    {announcement.category}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-800 leading-relaxed text-base">
                {announcement.content}
              </p>
              {announcement.isUrgent && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-sm text-red-800 font-medium">
                      This is an urgent announcement requiring immediate
                      attention
                    </span>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between pt-3">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 text-green-600 border-green-200 hover:bg-green-50"
                    onClick={() => handleReaction(announcement.id, "gotIt")}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Got it</span>
                    <Badge variant="secondary" className="ml-1">
                      {reactions[announcement.id]?.gotIt || 0}
                    </Badge>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 text-orange-600 border-orange-200 hover:bg-orange-50"
                    onClick={() => handleReaction(announcement.id, "needHelp")}
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Need Help</span>
                    <Badge variant="secondary" className="ml-1">
                      {reactions[announcement.id]?.needHelp || 0}
                    </Badge>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center pt-4">
        <Button variant="outline" className="w-full md:w-auto">
          Load More Announcements
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementsTab;
