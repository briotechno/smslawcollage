"use client";

import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-purple-900/95 backdrop-blur-md shadow-lg border-b border-purple-700"
          : "bg-gradient-to-r from-purple-900 to-purple-800 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/assets/Logo.png"
                  alt="SMS Law College Logo"
                  width={scrolled ? 60 : 70}
                  height={scrolled ? 60 : 70}
                  className="object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
              {/*               <div className="ml-3 hidden sm:block">
                <h1 className="text-lg font-bold text-white leading-tight">
                  SMS Law College
                </h1>
                <p className="text-xs text-purple-200 font-medium">
                  Justice for All
                </p>
              </div> */}
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-white hover:text-purple-200 transition-all duration-200 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/admission"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 hover:from-purple-500 hover:to-purple-600"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-purple-800 border-t border-purple-700 shadow-lg">
          <nav className="px-4 py-2">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-white hover:bg-purple-700 hover:text-purple-100 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/admission"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
