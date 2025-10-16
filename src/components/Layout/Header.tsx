"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const menuItems = [
  { name: "About Us", href: "/" },
  {
    name: "Academics",
    href: "/academics",
    hasDropdown: true,
    dropdownItems: [
      { name: "Legal Education In India", href: "/academics/LegalEducation" },
      { name: "Careers in Legal Field", href: "/academics/CareersLegal" },
      { name: "Syllabus", href: "/academics/Syllabus" },
      { name: "Internship", href: "/academics/Internship" },
      { name: "Mentors On Campus", href: "/academics/Mentors" },
      { name: "Special Lectures by Experts", href: "/academics/SpecialLectures" },
      { name: "Faculty Profile", href: "/academics/Faculty" },
      { name: "Feedback", href: "/academics/Feedback" },
    ],
  },
  {
    name: "Skill Development",
    href: "/skill-development",
    hasDropdown: true,
    dropdownItems: [
      { name: "Debate", href: "/skill-development/Debate" },
      { name: "Elocution & Public Speaking", href: "/skill-development/ElocutionPublicSpeaking" },
      { name: "Intra Moot Court Exercises", href: "/skill-development/CourtExercises" },
    ],
  },
  {
    name: "Research - Clinic",
    href: "/research-clinic",
    hasDropdown: true,
    dropdownItems: [
      { name: "Environmental Law Clinic", href: "/research-clinic/Environmental-Law-Clinic" },
      { name: "Legal Aid Clinic", href: "/research-clinic/Legal-Aid-Clinic" },
      { name: "Gender Law Clinic", href: "/research-clinic/Gender-LAW-CLINIC" },
      { name: "Internal Complaint Committee", href: "/research-clinic/Intellectual-Property-Law-Clinic" },
    ],
  },
  {
    name: "Student",
    href: "/student",
    hasDropdown: true,
    dropdownItems: [
      { name: "Grievance Redress Committee", href: "/student/grievance-redress-committee" },
      { name: "Anti-Ragging Committee", href: "/student/anti-ragging-committee" },
      { name: "Internal Complaint Committee", href: "/student/internal-complaint-committee" },
    ],
  },
  {
    name: "Achievements",
    href: "/achievements",
    hasDropdown: true,
    dropdownItems: [
      { name: "Academic Achievements", href: "/achievements/academic-achievements" },
      { name: "Sports Achievements", href: "/achievements/sports-achievements" },
      { name: "Cultural Achievements", href: "/achievements/cultural-achievements" },
      { name: "Participation", href: "/achievements/participation" },
    ],
  },
  { name: "Admission", href: "/admission" },
    { name: "Requirements", href: "/requirements" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
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
          <Link href="/" className="flex items-center group">
            <Image
              src="/assets/Logo.png"
              alt="SMS Law College Logo"
              width={scrolled ? 60 : 70}
              height={scrolled ? 60 : 70}
              className="object-contain transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-white hover:text-purple-200 flex items-center gap-1 transition-all duration-200 group relative"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {/* {item.name === 'Requirements' && (
                  <span className="absolute -top-0.5 right-2 inline-flex items-center px-1 py-[0.2px] bg-white text-purple-700 text-[10px] font-semibold rounded-full animate-pulse z-50">
                    New
                  </span>
                )} */}

                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/admission"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden relative w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45" : "-translate-y-1"
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
        className={`xl:hidden bg-purple-800 border-t border-purple-700 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.name}>
              <button
                className="w-full flex justify-between items-center text-left px-4 py-3 text-white font-medium hover:bg-purple-700 rounded-lg transition-all duration-200"
                onClick={() =>
                  item.hasDropdown
                    ? setActiveMobileDropdown(
                        activeMobileDropdown === item.name ? null : item.name
                      )
                    : setMobileMenuOpen(false)
                }
              >
                <span className="flex items-center gap-2 relative">
                  <span>{item.name}</span>
                  {item.name === 'Requirements' && (
                    <span className="absolute -top-1 -right-2 inline-flex items-center px-2 py-0.5 bg-white text-purple-700 text-xs font-semibold rounded-full animate-pulse z-50">
                      New
                    </span>
                  )}
                </span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      activeMobileDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Mobile Dropdown Items */}
              {item.hasDropdown && activeMobileDropdown === item.name && (
                <div className="pl-6 bg-purple-700/40 rounded-md overflow-hidden transition-all">
                  {item.dropdownItems?.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm text-purple-100 hover:text-white hover:bg-purple-600 rounded-md transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-2">
            <Link
              href="/admission"
              className="block text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
