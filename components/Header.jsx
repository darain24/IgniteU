"use client";
import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { fadeInDown, staggerContainer, staggerChildren } from "../animations";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      router.push('/');
    }
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <motion.header 
      className="flex justify-between items-center p-4 w-full bg-blue-600 shadow-md max-sm:flex-col max-sm:gap-2.5 shadow-md bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6"
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
    >
      <motion.a 
        href="/"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-3xl font-bold text-white">IgniteU</h1>
      </motion.a>
      
      <motion.button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </motion.button>
      
      <motion.nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col gap-5 md:flex md:flex-row md:gap-5`}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            className="hover:underline text-base leading-6 text-white"
            variants={staggerChildren}
            whileHover={{ 
              scale: 1.05,
              textDecoration: "underline"
            }}
            transition={{ duration: 0.2 }}
          >
            {item.label}
          </motion.a>
        ))}
        
        {user ? (
          <motion.button
            onClick={handleLogout}
            className="px-4 py-1.5 text-base text-blue-600 bg-yellow-300 rounded bg-yellow-400 hover:bg-yellow-300 text-black hover:cursor-pointer"
            variants={staggerChildren}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#fbbf24"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Logout
          </motion.button>
        ) : (
          <motion.button
            onClick={() => (window.location.href = "/login")}
            className="px-4 py-1.5 text-base text-blue-600 bg-yellow-300 rounded bg-yellow-400 hover:bg-yellow-300 text-black hover:cursor-pointer"
            variants={staggerChildren}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#fbbf24"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Login
          </motion.button>
        )}
      </motion.nav>
    </motion.header>
  );
}

export default Header;
