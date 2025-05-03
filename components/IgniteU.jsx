"use client";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import StudentDashboard from "./StudentDashboard";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

function IgniteU() {
  return (
    <main className="flex flex-col mx-auto w-full max-w-none max-md:max-w-[991px] max-sm:max-w-screen-sm bg-blue-600">
      <Header />
      <Hero />
      <StudentDashboard />
      <FAQSection />
      <Footer />
    </main>
  );
}

export default IgniteU;
