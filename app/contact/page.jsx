"use client";
import React from "react";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      />
      <Header />
      <main className="flex-grow w-full">
        <div className="mb-16">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;