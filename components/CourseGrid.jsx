import React from "react";
import CourseCard from "./CourseCard";

function CourseGrid() {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn how to build websites using HTML, CSS, and JavaScript."
    },
    {
      id: 2,
      title: "Data Science",
      description: "Dive into data analysis and machine learning techniques."
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Master SEO, social media, and content marketing strategies."
    },
    {
      id: 4,
      title: "Graphic Design",
      description: "Explore design principles and tools to create stunning visuals."
    },
    {
      id: 5,
      title: "Project Management",
      description: "Learn how to manage projects effectively and efficiently."
    },
    {
      id: 6,
      title: "Cybersecurity",
      description: "Understand the fundamentals of protecting information systems."
    }
  ];

  return (
    <section className="px-0 py-16 w-full max-w-screen-xl">
      <h2 className="mb-10 text-4xl font-bold text-center text-black">
        Available Courses
      </h2>
      <div className="flex flex-wrap gap-8 justify-center max-md:gap-6 max-sm:flex-col max-sm:items-center">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseGrid;