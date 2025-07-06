import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations";

function FAQItem({ question, answer }) {
  return (
    <motion.article 
      className="p-6 mx-0 my-4 bg-white rounded-lg shadow-md max-md:mx-auto max-md:my-4 max-md:w-[90%]"
      variants={fadeInUp}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.h3 
        className="mb-2 text-base font-semibold"
        whileHover={{ color: "#4f46e5" }}
        transition={{ duration: 0.2 }}
      >
        {question}
      </motion.h3>
      <p className="text-base">{answer}</p>
    </motion.article>
  );
}

export default FAQItem;
