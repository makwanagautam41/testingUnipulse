import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import WhispersTab from "@/components/WhispersTab";
import AnnouncementsTab from "@/components/AnnouncementsTab";
import LifestyleTab from "@/components/LifestyleTab";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("whispers");

  const renderContent = () => {
    switch (activeTab) {
      case "whispers":
        return <WhispersTab />;
      case "announcements":
        return <AnnouncementsTab />;
      case "lifestyle":
        return <LifestyleTab />;
      default:
        return <WhispersTab />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default Dashboard;
