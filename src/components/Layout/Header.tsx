"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "About Us", href: "/" },
  { name: "Academics", href: "/academics" },
  { name: "Skill Development", href: "/skill-development" },
  { name: "Research - Clinic", href: "/research-clinic" },
  { name: "Student", href: "/student" },
  { name: "Media Gallery", href: "/media-gallery" },
  { name: "Achievements", href: "/achievements" },
  { name: "Admission", href: "/admission" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-3 sm:px-6 lg:px-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center p-2 md:p-1">
            <Image
              src="/assets/Logo.png"
              alt="SMS Law College Logo"
              width={80}
              height={80}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center font-medium text-[14px] lg:text-[12px] text-black uppercase">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 md:px-3 py-10 hover:bg-[#0073aa] hover:text-white transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger (Mobile) */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden bg-white shadow-md transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[600px]" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col uppercase text-black text-[14px]">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="border-b border-gray-200 last:border-0"
            >
              <Link
                href={item.href}
                className="block px-6 py-3 hover:bg-[#0073aa] hover:text-white transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
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
