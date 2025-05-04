"use client";
import React from "react";
import Header from "../../components/Header";
import CourseGrid from "../../components/CourseGrid";
import Footer from "../../components/Footer";

function IgniteU() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className="flex flex-col items-center mx-auto w-full max-w-none bg-gray-100 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <CourseGrid />
        <Footer />
      </div>
    </>
  );
}

export default IgniteU;