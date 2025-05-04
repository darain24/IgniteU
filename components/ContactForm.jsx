"use client";
import React from "react";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="px-0 py-16 text-center max-md:px-0 max-md:py-8 max-sm:px-0 max-sm:py-6">
      <h2 className="text-4xl font-bold text-black">Contact Us</h2>
      <p className="mt-2 text-lg text-black">
        If you have any questions or need assistance, feel free to reach out
        to us!
      </p>
      <form
        className="flex flex-col gap-4 items-center mt-8"
        onSubmit={handleSubmit}
      >
        <div className="w-[448px] max-md:w-4/5 max-sm:w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 w-full text-base rounded border border-gray-300 border-solid text-black"
            required
          />
        </div>
        <div className="w-[448px] max-md:w-4/5 max-sm:w-full">
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 w-full text-base rounded border border-gray-300 border-solid text-black"
            required
          />
        </div>
        <div className="w-[448px] max-md:w-4/5 max-sm:w-full">
          <textarea
            placeholder="Your Message"
            className="p-3 w-full text-base rounded border border-gray-300 border-solid resize-none h-[146px] text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 text-base text-white bg-blue-600 rounded cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;