import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "../animations";

function Hero() {
  const handleExploreCourses = () => {
    window.location.href = "/courses";
  };

  return (
    <section className="flex justify-center items-center px-4 py-20 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white text-center">
      <motion.div 
        className="text-center text-white max-w-3xl"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="text-5xl font-bold max-md:text-4xl max-sm:text-3xl leading-tight"
          variants={fadeInUp}
        >
          Unlock Your Potential
        </motion.h2>
        <motion.p 
          className="mx-0 my-5 text-lg max-md:text-base max-sm:text-sm leading-relaxed"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          Join our interactive platform to learn new skills and advance your career. 
          Whether you're a beginner or an expert, we have courses tailored to your needs. 
          Start your journey today and achieve your goals with us.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-md transition hover:underline cursor-pointer"
          onClick={handleExploreCourses}
          variants={scaleIn}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.4 }}
        >
          Explore Courses
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
