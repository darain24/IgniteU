import React from "react";

function FAQItem({ question, answer }) {
  return (
    <article className="p-6 mx-0 my-4 bg-white rounded-lg shadow-md max-md:mx-auto max-md:my-4 max-md:w-[90%]">
      <h3 className="mb-2 text-base font-semibold">{question}</h3>
      <p className="text-base">{answer}</p>
    </article>
  );
}

export default FAQItem;
