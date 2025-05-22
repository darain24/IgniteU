import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignupForm from '../../components/SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
} 