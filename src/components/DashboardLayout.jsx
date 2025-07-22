import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Megaphone, Users, Search, Moon, Sun, Bell, User, Settings, LogOut, Plus, Shield, TrendingUp, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const DashboardLayout = ({ children, activeTab = "whispers", onTabChange }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications] = useState(3);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: "whispers", label: "Whispers", icon: MessageCircle, color: "text-purple-500" },
    { id: "announcements", label: "Announcements", icon: Megaphone, color: "text-blue-500" },
    { id: "lifestyle", label: "Lifestyle", icon: Users, color: "text-green-500" },
  ];

  const trendingTopics = ["#CampusLife", "#StudentLife", "#UniversityEvents", "#StudyTips", "#CampusDining"];

  return (
    <div className={`min-h-screen bg-background ${darkMode ? 'dark' : ''}`}>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="flex items-center justify-between px-3 sm:px-4 py-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button variant="ghost" size="sm" className="md:hidden p-1" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-primary">UniPulse</h1>
            </div>
          </div>
          <div className="hidden sm:flex flex-1 max-w-xs lg:max-w-md mx-4 lg:mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search posts..." className="pl-10 bg-gray-50 border-0 focus:ring-2 focus:ring-primary/20 text-sm" />
            </div>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-3">
            <Button variant="ghost" size="sm" onClick={() => setDarkMode(!darkMode)} className="hidden sm:flex p-2">
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="sm" className="relative p-2">
              <Bell className="w-4 h-4" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 w-4 h-4 text-xs bg-red-500 flex items-center justify-center rounded-full p-0">
                  {notifications}
                </Badge>
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
                  <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium">Jane Smith</p>
                  <p className="text-xs text-muted-foreground">jane.smith@university.edu</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem><User className="mr-2 h-4 w-4" />Profile</DropdownMenuItem>
                <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" />Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="sm:hidden px-3 pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search posts..." className="pl-10 bg-gray-50 border-0 focus:ring-2 focus:ring-primary/20 text-sm" />
          </div>
        </div>
      </header>

      <div className="flex relative">
        {sidebarOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)} />}
        <aside className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 fixed md:static top-0 left-0 z-50 md:z-auto
          flex flex-col w-64 sm:w-72 h-full md:min-h-screen bg-white border-r
          transition-transform duration-300 ease-in-out
        `}>
          <div className="p-3 sm:p-4 pt-16 md:pt-4">
            <Button className="w-full bg-primary hover:bg-primary/90 mb-4 text-sm sm:text-base">
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
            <nav className="space-y-1 sm:space-y-2">
              {navigationItems.map((item) => (
                <Button key={item.id} variant={activeTab === item.id ? "secondary" : "ghost"} className={`w-full justify-start text-sm sm:text-base ${activeTab === item.id ? 'bg-primary/10 text-primary' : ''}`} onClick={() => { onTabChange?.(item.id); setSidebarOpen(false); }}>
                  <item.icon className={`w-4 h-4 mr-3 ${item.color}`} />
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-3 sm:p-4 border-t">
            <Button variant="outline" className="w-full justify-start text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Admin Panel
            </Button>
          </div>
        </aside>
        
        <main className="flex-1 w-full min-w-0 max-w-full lg:max-w-2xl mx-auto px-3 sm:px-4 lg:px-0">
            {children}
        </main>
        
        <aside className="hidden xl:flex flex-col w-72 2xl:w-80 min-h-screen bg-white border-l">
          <div className="p-4 space-y-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-4 h-4 text-primary mr-2" />
                <h3 className="font-semibold text-gray-900 text-sm">Campus Trends</h3>
              </div>
              <div className="space-y-2">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between py-1">
                    <span className="text-sm text-primary hover:underline cursor-pointer">{topic}</span>
                    <Badge variant="secondary" className="text-xs">{Math.floor(Math.random() * 100) + 10}</Badge>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Campus Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active Students</span>
                  <span className="text-sm font-medium">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Anonymous Posts</span>
                  <span className="text-sm font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Resolved Issues</span>
                  <span className="text-sm font-medium text-green-600">89%</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t safe-area-pb z-30">
        <div className="flex items-center justify-around py-2 px-1">
          {navigationItems.map((item) => (
            <Button key={item.id} variant="ghost" size="sm" className={`flex flex-col items-center p-2 min-w-0 flex-1 ${activeTab === item.id ? 'text-primary' : 'text-gray-500'}`} onClick={() => onTabChange?.(item.id)}>
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs truncate">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
