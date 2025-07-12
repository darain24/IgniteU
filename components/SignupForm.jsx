"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { fadeInUp, scaleIn } from "../animations";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);


    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }


    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsSubmitting(false);
      return;
    }

    const result = await signup(formData.email, formData.password, formData.name);
    
    if (result.success) {
      setSuccess(true);

    } else {
      setError(result.error);
    }
    
    setIsSubmitting(false);
  };

  if (success) {
    return (
      <section className="px-4 py-16 text-center max-w-md mx-auto">
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-sm"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <motion.h2 
            className="text-2xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            Sign Up Successful!
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Your account has been created successfully. Please login to continue.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/login"
              className="inline-block px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 cursor-pointer"
            >
              Go to Login
            </Link>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="px-4 py-16 text-center max-w-md mx-auto">
      <motion.div 
        className="bg-white p-8 rounded-xl shadow-sm"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-3xl font-bold text-black mb-6"
          variants={fadeInUp}
        >
          Create Account
        </motion.h2>
        <motion.p 
          className="text-gray-600 mb-8"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Join our community and start your journey
        </motion.p>
        
        <motion.form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="text-left"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="p-3 w-full text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black placeholder-gray-400"
              required
            />
          </motion.div>

          <motion.div 
            className="text-left"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-3 w-full text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black placeholder-gray-400"
              required
            />
          </motion.div>

          <motion.div 
            className="text-left"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="p-3 w-full text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black placeholder-gray-400"
              required
            />
          </motion.div>

          <motion.div 
            className="text-left"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="p-3 w-full text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black placeholder-gray-400"
              required
            />
          </motion.div>
          
          {error && (
            <motion.div 
              className="p-4 bg-red-50 text-red-700 rounded-lg text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg transition-all duration-200 cursor-pointer
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-lg'}`}
            variants={scaleIn}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.3 }}
          >
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </motion.button>
        </motion.form>

        <motion.p 
          className="mt-8 text-gray-600 text-sm"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:text-blue-500 font-medium">
            Sign in
          </Link>
        </motion.p>
      </motion.div>
    </section>
  );
}

export default SignupForm; 