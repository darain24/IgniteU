"use client";
import React from "react";
import Header from "../../components/Header";
import AboutSection from "../../components/AboutSection.jsx";
import Footer from "../../components/Footer";

function AboutPage() {
  return (
    <main className="flex flex-col items-center mx-auto w-full max-w-none bg-gray-100 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <Header />
      <AboutSection />
      <Footer />
    </main>
  );
}

export default AboutPage;