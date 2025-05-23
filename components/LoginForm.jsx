"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();
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

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      router.push('/'); // Redirect to home page after successful login
    } else {
      // Handle specific Firebase error messages
      if (result.error.includes('user-not-found') || result.error.includes('wrong-password')) {
        setError(
          <div className="space-y-2">
            <p>Wrong ID or Password</p>
            <p className="text-sm">
              Don't have an account?{' '}
              <Link href="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                Sign up now
              </Link>
            </p>
          </div>
        );
      } else if (result.error.includes('invalid-email')) {
        setError('Please enter a valid email address.');
      } else if (result.error.includes('too-many-requests')) {
        setError('Too many failed attempts. Please try again later.');
      } else {
        setError('Invalid Id or Password');
      }
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="px-4 py-16 text-center max-w-md mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-black mb-6">Welcome Back</h2>
        <p className="text-gray-600 mb-8">
          Sign in to your account to continue
        </p>
        
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div className="text-left">
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
          </div>

          <div className="text-left">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="p-3 w-full text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black placeholder-gray-400"
              required
            />
          </div>
          
          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg transition-all duration-200 cursor-pointer
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-lg'}`}
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-8 text-gray-600 text-sm">
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginForm; 