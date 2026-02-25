import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-10">

      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-bold text-3xl text-primary">
            Dashboard
          </h2>
          <p className="text-muted-foreground mt-2">
            Create and start your AI Mock Interview
          </p>
        </div>

        {/* Optional User Button Styling */}
        <div className="hidden md:block">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <AddNewInterview />
        </div>
      </div>

      <div className="mt-10">
        <InterviewList />
      </div>

    </div>
  );
};

export default Dashboard;