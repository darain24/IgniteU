import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col items-center max-sm:py-4">
      <p className="text-white text-base mb-2">
        © 2025 IgniteU. All rights reserved.
      </p>
      <div className="flex gap-5">
        <a 
          href="https://www.linkedin.com/in/syed-darain-qamar-583634323/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaLinkedin className="text-white w-6 h-6" />
        </a>
        <a 
          href="https://github.com/darain24" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaGithub className="text-white w-6 h-6" />
        </a>
        <a 
          href="https://www.instagram.com/darainqamar/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaInstagram className="text-white w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;