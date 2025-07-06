import React from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import { fadeInUp, staggerContainer, staggerChildren } from "../animations";

function FAQSection() {
  const faqItems = [
    {
      id: 1,
      question: "How do I enroll in a course?",
      answer:
        "You can enroll in a course by clicking on the course title and following the instructions provided on the course page. Make sure to complete the registration process to secure your spot.",
    },
    {
      id: 2,
      question: "What payment methods are accepted?",
      answer:
        "We accept a variety of payment methods including credit cards, PayPal, and other popular payment gateways. For more details, you can visit our payment options page.",
    },
    {
      id: 3,
      question: "Is there a certificate after course completion?",
      answer:
        "Yes, upon successfully completing the course, you will receive a certificate of completion. This certificate can be downloaded from your profile and shared on professional platforms.",
    },
  ];

  return (
    <section className="px-0 py-16 bg-gradient-to-b from-purple-200 to-blue-200">
      <motion.h2 
        className="mb-10 text-4xl font-bold text-center max-sm:text-3xl"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {faqItems.map((item) => (
          <motion.div
            key={item.id}
            variants={staggerChildren}
          >
            <FAQItem question={item.question} answer={item.answer} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FAQSection;
