import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge.jsx";
import {
  MessageCircle,
  Megaphone,
  Users,
  Shield,
  Heart,
  TrendingUp,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleAuth = (e) => {
    e.preventDefault();
    if (!email.endsWith(".edu")) {
      toast({
        title: "Invalid Email",
        description: "Please use your university email address (.edu)",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: isSignUp ? "Account Created!" : "Welcome Back!",
      description: isSignUp
        ? "Your UniPulse account has been created successfully."
        : "You've been logged in successfully.",
    });
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  const features = [
    {
      icon: MessageCircle,
      title: "Anonymous Whispers",
      description:
        "Share concerns, complaints, and suggestions anonymously with your university community.",
      color: "text-purple-500",
    },
    {
      icon: Megaphone,
      title: "Official Announcements",
      description:
        "Stay updated with important announcements from faculty and administration.",
      color: "text-blue-500",
    },
    {
      icon: Users,
      title: "Student Lifestyle",
      description:
        "Connect with fellow students, share experiences, and build your campus community.",
      color: "text-green-500",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "University-verified accounts ensure a trusted and secure environment for all users.",
      color: "text-red-500",
    },
    {
      icon: Heart,
      title: "Mental Health Support",
      description:
        "Dedicated space for mental health discussions and peer support systems.",
      color: "text-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Campus Trends",
      description:
        "Discover what's trending on your campus and join the conversation.",
      color: "text-orange-500",
    },
  ];

  if (showLogin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-uni-blue-50 to-white flex items-center justify-center p-3 sm:p-4">
        <div className="w-full max-w-sm sm:max-w-md">
          <Card className="shadow-2xl border-0 glass">
            <CardHeader className="text-center px-4 sm:px-6">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold text-primary">
                {isSignUp ? "Join UniPulse" : "Welcome Back"}
              </CardTitle>
              <p className="text-sm sm:text-base text-muted-foreground">
                {isSignUp
                  ? "Create your university account"
                  : "Sign in to your account"}
              </p>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <form onSubmit={handleAuth} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">
                    University Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.name@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                >
                  {isSignUp ? "Create Account" : "Sign In"}
                </Button>
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-primary hover:underline transition-colors text-sm sm:text-base"
                  >
                    {isSignUp
                      ? "Already have an account? Sign in"
                      : "Need an account? Sign up"}
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={() => setShowLogin(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    ← Back to home
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-uni-blue-50 via-white to-uni-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-primary">
                UniPulse
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                University Social Network
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button
              variant="ghost"
              onClick={() => setShowLogin(true)}
              className="text-sm sm:text-base px-2 sm:px-4"
            >
              Sign In
            </Button>
            <Button
              onClick={() => {
                setIsSignUp(true);
                setShowLogin(true);
              }}
              className="bg-primary hover:bg-primary/90 transform transition-all duration-200 hover:scale-105 text-sm sm:text-base px-3 sm:px-4"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-4 animate-fade-in text-xs sm:text-sm"
          >
            🎓 Exclusively for University Students & Faculty
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in leading-tight">
            Your Campus.<span className="text-primary block">Your Voice.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto animate-fade-in px-2">
            Connect with your university community through anonymous feedback,
            official announcements, and authentic student conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-2">
            <Button
              size="lg"
              onClick={() => {
                setIsSignUp(true);
                setShowLogin(true);
              }}
              className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Join Your Campus Network
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowLogin(true)}
              className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
            >
              Already Have Account?
            </Button>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Everything Your Campus Needs
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl lg:max-w-2xl mx-auto px-2">
              Three powerful platforms in one secure, university-verified
              environment
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200">
                    <feature.icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color}`}
                    />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
