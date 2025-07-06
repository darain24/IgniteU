import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { fadeInUp, staggerCards, staggerCard } from "../animations";

function CourseGrid() {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn how to build websites using HTML, CSS, and JavaScript.",
      imageUrl: "/Images/web-development.jpg"
    },
    {
      id: 2,
      title: "Data Science",
      description: "Dive into data analysis and machine learning techniques.",
      imageUrl: "/Images/data-science.jpg"
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Master SEO, social media, and content marketing strategies.",
      imageUrl: "/Images/digital-marketing.jpg"
    },
    {
      id: 4,
      title: "Graphic Design",
      description: "Explore design principles and tools to create stunning visuals.",
      imageUrl: "/Images/graphic-design.jpg"
    },
    {
      id: 5,
      title: "Project Management",
      description: "Learn how to manage projects effectively and efficiently.",
      imageUrl: "/Images/project-management.jpg"
    },
    {
      id: 6,
      title: "Cybersecurity",
      description: "Understand the fundamentals of protecting information systems.",
      imageUrl: "/Images/cybersecurity.jpg"
    }
  ];

  return (
    <section className="px-0 py-16 w-full max-w-screen-xl">
      <motion.h2 
        className="mb-10 text-4xl font-bold text-center text-black"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        Available Courses
      </motion.h2>
      <motion.div 
        className="flex flex-wrap gap-8 justify-center max-md:gap-6 max-sm:flex-col max-sm:items-center"
        variants={staggerCards}
        initial="hidden"
        animate="visible"
      >
        {courses.map((course) => (
          <motion.div
            key={course.id}
            variants={staggerCard}
          >
            <CourseCard
              id={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default CourseGrid;