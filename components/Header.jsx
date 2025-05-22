"use client";
import React from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="flex justify-between items-center p-4 w-full bg-blue-600 shadow-md max-sm:flex-col max-sm:gap-2.5 shadow-md bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6">
      <a href="/">
        <h1 className="text-3xl font-bold text-white">IgniteU</h1>
      </a>
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></button>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col gap-5 md:flex md:flex-row md:gap-5`}
      >
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
        <button
          onClick={() => (window.location.href = "/login")}
          className="px-4 py-1.5 text-base text-blue-600 bg-yellow-300 rounded bg-yellow-400 hover:bg-yellow-300 text-black hover:cursor-pointer"
        >
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;
