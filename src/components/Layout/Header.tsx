"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "About Us", href: "#" },
  { name: "Academics", href: "#" },
  { name: "Skill Development", href: "#" },
  { name: "Research - Clinic", href: "#" },
  { name: "Student", href: "#" },
  { name: "Media Gallery", href: "#" },
  { name: "Achievements", href: "#" },
  { name: "Admission", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 overflow-hidden">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/Logo.png"
            alt="SMS Law College Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center font-normal text-[12px] text-black uppercase">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-5 py-10 flex items-center justify-center hover:bg-[#0073aa] hover:text-white transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`md:hidden bg-white shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col uppercase text-black text-[14px]">
          {menuItems.map((item) => (
            <li key={item.name} className="border-b border-gray-200 last:border-0">
              <Link
                href={item.href}
                className="block px-6 py-4 hover:bg-[#0073aa] hover:text-white transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)} // close menu on link click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
