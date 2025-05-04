"use client";
import React from "react";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

function ContactPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      />
      <main className="min-h-screen h-full w-full bg-gray-100 flex flex-col">
        <Header />
        <ContactForm />
      </main>
    </>
  );
}

export default ContactPage;