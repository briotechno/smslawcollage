"use client";

import React, { useState, useEffect, useRef } from "react";
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
      { name: "Intellectual Property Law Clinic", href: "/research-clinic/Intellectual-Property-Law-Clinic" },
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
  { name: "Recruitment", href: "/requirements" },
  { name: "Feedback", href: "/academics/Feedback" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickAnywhere = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Ignore clicks on dropdown toggles or hamburger icon
      if (
        target.closest(".dropdown-toggle") ||
        target.closest(".mobile-toggle")
      ) {
        return;
      }

      // Ignore clicks on Next.js links so navigation still works properly
      if (target.closest("a")) {
        setTimeout(() => {
          setActiveDropdown(null);
          setMobileMenuOpen(false);
        }, 150);
        return;
      }

      // Close everything for any other click (inside or outside)
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    };

    // Check screen size
    const isDesktop = window.innerWidth >= 1280;

    if (isDesktop) {
      document.addEventListener("mousedown", handleClickAnywhere);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickAnywhere);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 `}
    >
      {/* Top banner strip: responsive for both mobile and desktop */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pt-1">
          <div className="flex flex-col md:flex-row items-center justify-between py-2 md:h-20">
            {/* Left: College logo and info - responsive */}
            <div className="flex items-center w-full md:w-auto">
              <div className="h-28 w-28 relative flex-shrink-0">
                <Image src="/assets/logo2.png" alt="College logo" fill className="object-contain" />
              </div>
              <div className="flex-1 text-center md:text-left ml-[-15px]">
                <div className="text-base md:text-lg font-semibold text-gray-800">Shri S.M Shah Law Callege</div>
                <div className="text-xs md:text-sm font-medium text-gray-600 mt-0.5">Avni Seeds Vidhya Sankul Nagalpur Highway Mahesana-384002</div>
              </div>
            </div>

            {/* Right: Partner logos - hidden on mobile, shown on md+ */}
            <div className="hidden md:flex items-center gap-4 justify-end mt-2 md:mt-0">
              <div className="h-32 w-32  relative">
                <Image src="/assets/headerImage/g20.png" alt="G20" fill className="object-contain" />
              </div>
              <div className="h-16 w-16 relative">
                <Image src="/assets/headerImage/mhrd.png" alt="MHRD" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex justify-between items-center">
          {/* Logo for mobile */}
          <div className="xl:hidden flex items-center">
            <Image src="/assets/Logonew.png" alt="College logo" width={40} height={40} className="rounded-full" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative cursor-pointer"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-white hover:text-purple-100 flex items-center gap-1.5 transition-all duration-200 group relative cursor-pointer rounded-md hover:bg-purple-800"
                >
                  <span className="!cursor-pointer">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 dropdown-toggle transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""
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
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)} // keep open
                    onMouseLeave={() => setActiveDropdown(null)} // close only if leave dropdown area
                  >
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
          <div className="hidden lg:flex items-center">
            <Link
              href="/admission"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-md text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden relative w-8 h-8 flex flex-col justify-center items-center mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >

            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45" : "-translate-y-1"
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
            />
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden bg-purple-900 border-t border-purple-800 shadow-xl ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="px-4 py-2 max-w-7xl mx-auto h-[78vh] overflow-y-auto pb-10">
          {menuItems.map((item) => (
            <div key={item.name} className="mb-2">
              <Link
                href={item.href}
                className="block px-4 py-2 text-white font-medium hover:bg-purple-800 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2 relative">
                  <span className="text-base">{item.name}</span>
                  {item.name === 'Requirements' && (
                    <span className="absolute -top-1 -right-2 inline-flex items-center px-2 py-0.5 bg-white text-purple-700 text-xs font-semibold rounded-full animate-pulse">
                      New
                    </span>
                  )}
                </span>
              </Link>

              {/* Mobile Dropdown Items - Always visible */}
              {item.hasDropdown && (
                <div className="mt-1 ml-4 space-y-1 border-l-2 border-purple-700/30">
                  {item.dropdownItems?.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-800 rounded-lg"
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
