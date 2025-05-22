"use client";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-4 py-16 text-center max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-black mb-4">Contact Us</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Have questions or need assistance? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
      </p>
      
      <form
        className="flex flex-col gap-6 items-center max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 w-full text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black placeholder-gray-400"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 w-full text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black placeholder-gray-400"
            required
          />
        </div>
        <div className="w-full">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 w-full text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black placeholder-gray-400 resize-none h-40"
            required
          />
        </div>
        
        {submitStatus === 'success' && (
          <div className="w-full p-4 bg-green-50 text-green-700 rounded-lg">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="w-full p-4 bg-red-50 text-red-700 rounded-lg">
            Oops! Something went wrong. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg cursor-pointer transition-all duration-200 w-full max-w-xs
            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-lg'}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;