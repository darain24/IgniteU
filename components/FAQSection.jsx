import React from "react";
import FAQItem from "./FAQItem";

function FAQSection() {
  const faqItems = [
    {
      id: 1,
      question: "How do I enroll in a course?",
      answer:
        "You can enroll in a course by clicking on the course title and following the instructions.",
    },
    {
      id: 2,
      question: "What payment methods are accepted?",
      answer:
        "We accept credit cards, PayPal, and other popular payment methods.",
    },
    {
      id: 3,
      question: "Is there a certificate after course completion?",
      answer:
        "Yes, you will receive a certificate upon successful completion of the course.",
    },
  ];

  return (
    <section className="px-0 py-16 bg-gradient-to-b from-purple-200 to-blue-200">
      <h2 className="mb-10 text-4xl font-bold text-center max-sm:text-3xl">
        Frequently Asked Questions
      </h2>
      {faqItems.map((item) => (
        <FAQItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </section>
  );
}

export default FAQSection;
