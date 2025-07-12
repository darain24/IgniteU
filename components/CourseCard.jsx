import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { scaleIn } from "../animations";

function CourseCard({ id, imageUrl, title, description }) {

  return (
    <motion.article 
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full max-w-sm max-md:w-full max-md:max-w-[600px] max-sm:w-full max-sm:max-w-[400px]"
      variants={scaleIn}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[160px] object-cover rounded-lg"
        />
      </motion.div>
      <motion.h3 
        className="mx-0 my-4 text-xl font-bold text-black"
        whileHover={{ color: "#4f46e5" }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      <p className="mb-4 text-base text-center text-black">{description}</p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={`/checkout?courseId=${id}&title=${encodeURIComponent(title)}`}
          className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Buy Now
        </Link>
      </motion.div>
    </motion.article>
  );
}

export default CourseCard;
