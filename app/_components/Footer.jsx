"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#12100e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg tracking-widest font-semibold mb-4">CONTACT</h3>
          <p className="mb-6 leading-relaxed text-gray-300">
            Find out all the ways to enjoy luxury residential life around the world.
          </p>
          <p className="text-gray-300 mb-1">
            <span className="text-red-600 font-bold">A:</span> Real Group Building, Ajman 1, UAE
          </p>
          <p className="text-gray-300">
            <span className="text-red-600 font-bold">T:</span> +971 50 574 8587
          </p>
        </div>

        {/* Spacer Column */}
        <div></div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg tracking-widest font-semibold mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#chooseus">Why Choose Us</a></li>
            <li><a href="#request-visit">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-12 flex justify-center gap-6">
        <a
          href="https://www.facebook.com/people/Real-Home/100092582515733/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white border border-red-600 rounded-full p-2 hover:bg-red-600 transition"
        >
          <FaFacebookF className="w-4 h-4" />
        </a>
        <a
          href="https://www.instagram.com/realhome.re/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white border border-red-600 rounded-full p-2 hover:bg-red-600 transition"
        >
          <FaInstagram className="w-4 h-4" />
        </a>
        <a
          href="https://x.com/Realhomere"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white border border-red-600 rounded-full p-2 hover:bg-red-600 transition"
        >
          <FaTwitter className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/company/real-home-re/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white border border-red-600 rounded-full p-2 hover:bg-red-600 transition"
        >
          <FaLinkedinIn className="w-4 h-4" />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-400 font-semibold tracking-widest text-sm">
        © {new Date().getFullYear()} Real Homes All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
