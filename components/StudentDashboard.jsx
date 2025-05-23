import React from "react";
import DashboardCard from "./DashboardCard";

function StudentDashboard() {
  const dashboardCards = [
    {
      id: 1,
      imageUrl: "../Images/performance-analysis.jpg",
      title: "Performance Analysis",
      description: "Track your progress and improve your skills.",
    },
    {
      id: 2,
      imageUrl: "../Images/courses-completed.jpg",
      title: "Courses Completed",
      description: "View the courses you have successfully completed.",
    },
    {
      id: 3,
      imageUrl: "../Images/upcoming-classes.jpg",
      title: "Upcoming Classes",
      description: "Check your schedule for upcoming classes.",
    },
  ];

  return (
    <section className="px-0 py-16 bg-gray-100">
      <h2 className="mb-10 text-4xl font-bold text-center max-sm:text-3xl">
        Student Dashboard
      </h2>
      <div className="flex gap-8 justify-center max-md:flex-col max-md:items-center">
        {dashboardCards.map((card) => (
          <DashboardCard
            key={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentDashboard;
