"use client";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import StudentDashboard from "../components/StudentDashboard";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

function IgniteU() {
  return (
    <main className="flex flex-col mx-auto w-full max-w-none max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <Header />
      <Hero />
      <StudentDashboard />
      <FAQSection />
      <Footer />
    </main>
  );
}

export default IgniteU;
