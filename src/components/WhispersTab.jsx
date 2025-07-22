import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Flag, ThumbsUp, MessageCircle, AlertCircle, CheckCircle, Settings, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const WhispersTab = () => {
  const [newWhisper, setNewWhisper] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const { toast } = useToast();

  const whispers = [
    { id: 1, content: "The WiFi in the library is extremely slow and keeps disconnecting. It's affecting my ability to complete assignments and research.", tag: "Infrastructure", upvotes: 23, comments: 5, status: "In Progress", timeAgo: "2 hours ago", adminReply: "IT department is working on upgrading the network infrastructure. Expected completion by next week." },
    { id: 2, content: "Can we please have more vegetarian options in the cafeteria? The current selection is very limited.", tag: "Dining", upvotes: 45, comments: 12, status: "Approved", timeAgo: "5 hours ago", adminReply: "We're pleased to announce that 3 new vegetarian options will be added to the menu starting Monday." },
    { id: 3, content: "I'm struggling with anxiety and depression. Are there any support groups or counseling services available on campus?", tag: "Mental Health", upvotes: 67, comments: 18, status: "Resolved", timeAgo: "1 day ago", adminReply: "Please visit the Student Wellness Center on the 2nd floor of the Student Union. Free counseling and support groups are available." },
    { id: 4, content: "The parking situation near the science building is terrible. Students are being forced to park illegally because there aren't enough spots.", tag: "Parking", upvotes: 89, comments: 24, status: "Under Review", timeAgo: "3 days ago" },
  ];

  const tags = ["Infrastructure", "Dining", "Mental Health", "Parking", "Academics", "Safety", "Events", "Housing", "Transportation"];

  const getStatusColor = (status) => {
    switch (status) {
      case "Resolved": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Approved": return "bg-purple-100 text-purple-800";
      case "Under Review": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  const getStatusIcon = (status) => {
    switch (status) {
        case "Resolved": return <CheckCircle className="w-3 h-3" />;
        case "In Progress": return <Settings className="w-3 h-3" />;
        case "Approved": return <CheckCircle className="w-3 h-3" />;
        case "Under Review": return <Clock className="w-3 h-3" />;
        default: return <AlertCircle className="w-3 h-3" />;
    }
  };

  const handleSubmitWhisper = () => {
    if (!newWhisper.trim() || !selectedTag) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in both the message and select a tag.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Whisper Posted",
      description: "Your anonymous message has been posted successfully.",
    });
    setNewWhisper("");
    setSelectedTag("");
    setIsPostModalOpen(false);
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Anonymous Whispers</h2>
          <p className="text-gray-600">Share your concerns and suggestions anonymously</p>
        </div>
        <Dialog open={isPostModalOpen} onOpenChange={setIsPostModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-500 hover:bg-purple-600">
              <Plus className="w-4 h-4 mr-2" />
              New Whisper
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Share Anonymous Whisper</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
               <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mr-2" />
                    <span className="text-sm text-yellow-800">Your identity will remain completely anonymous</span>
                  </div>
                </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Category</label>
                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {tags.map((tag) => (
                      <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Your Message</label>
                <Textarea
                  placeholder="Share your concern, suggestion, or question..."
                  value={newWhisper}
                  onChange={(e) => setNewWhisper(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              </div>
              <div className="flex gap-3">
                <Button onClick={handleSubmitWhisper} className="flex-1 bg-purple-500 hover:bg-purple-600">Post Anonymously</Button>
                <Button variant="outline" onClick={() => setIsPostModalOpen(false)}>Cancel</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {whispers.map((whisper) => (
          <Card key={whisper.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-xs">{whisper.tag}</Badge>
                  <Badge variant="secondary" className={`text-xs flex items-center gap-1 ${getStatusColor(whisper.status)}`}>
                    {getStatusIcon(whisper.status)}
                    {whisper.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{whisper.timeAgo}</span>
                  <Button variant="ghost" size="sm"><Flag className="w-3 h-3" /></Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-800 leading-relaxed">{whisper.content}</p>
              {whisper.adminReply && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
                  <div className="flex items-center mb-1">
                    <Badge className="text-xs bg-blue-500">Official Response</Badge>
                  </div>
                  <p className="text-sm text-blue-800">{whisper.adminReply}</p>
                </div>
              )}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{whisper.upvotes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                    <MessageCircle className="w-4 h-4" />
                    <span>{whisper.comments}</span>
                  </Button>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default WhispersTab;
