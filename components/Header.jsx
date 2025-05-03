"use client";
import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6">
      <a href="/"><h1 className="text-3xl font-bold text-white">IgniteU</h1></a>
      <nav className="flex gap-5 max-md:hidden">
        <a href="/" className="hover:underline text-base leading-6 text-white">
          Home
        </a>
        <a
          href="/courses"
          className="hover:underline text-base leading-6 text-white"
        >
          Courses
        </a>
        <a
          href="/about"
          className="hover:underline text-base leading-6 text-white"
        >
          About
        </a>
        <a
          href="/contact"
          className="hover:underline text-base leading-6 text-white"
        >
          Contact
        </a>
        <button className="px-4 py-1.5 text-base text-blue-600 bg-yellow-300 rounded bg-yellow-400 hover:bg-yellow-300 text-black">
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;
