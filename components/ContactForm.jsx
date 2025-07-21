"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "../animations";
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailjsInitialized, setEmailjsInitialized] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    setEmailjsInitialized(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        'service_imm4398',
        'template_t4kymhu', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Syed Darain Qamar',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-4 py-16 text-center max-w-4xl mx-auto">
      <motion.h2 
        className="text-4xl font-bold text-black mb-4"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        Contact Us
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        Have questions or need assistance? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
      </motion.p>
      
      <motion.form
        className="flex flex-col gap-6 items-center max-w-xl mx-auto"
        onSubmit={handleSubmit}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        <motion.div 
          className="w-full"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 w-full text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black placeholder-gray-400"
            required
          />
        </motion.div>
        <motion.div 
          className="w-full"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 w-full text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black placeholder-gray-400"
            required
          />
        </motion.div>
        <motion.div 
          className="w-full"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 w-full text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black placeholder-gray-400 resize-none h-40"
            required
          />
        </motion.div>
        
        {submitStatus === 'success' && (
          <motion.div 
            className="w-full p-4 bg-green-50 text-green-700 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for your message! We'll get back to you soon.
          </motion.div>
        )}
        
        {submitStatus === 'error' && (
          <motion.div 
            className="w-full p-4 bg-red-50 text-red-700 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Oops! Something went wrong.
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting || !emailjsInitialized}
          className={`px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg transition-all duration-200 w-full max-w-xs
            ${isSubmitting || !emailjsInitialized ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-lg'}`}
          variants={scaleIn}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.2 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </motion.form>
    </section>
  );
}

export default ContactForm;