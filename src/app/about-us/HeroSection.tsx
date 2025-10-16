"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Award,
  Users,
  BookOpen,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/Slider1.jpg",
  "/assets/Slider2.jpg",
  "/assets/Slider3.jpg",
  "/assets/Slider4.jpg",
  "/assets/Slider5.jpg",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Open popup automatically when page loads
    const timer = setTimeout(() => setShowPopup(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white scale-125" : "bg-white/50"
          }`}
      />
    ),
  };

  const stats = [
    { icon: Users, number: "500+", label: "Students" },
    { icon: Award, number: "50+", label: "Awards" },
    { icon: BookOpen, number: "15+", label: "Years Experience" },
  ];

  const items = [
    { text: "Annual Newsletter Vidhaan", color: "text-red-600" },
    { text: "BCI Affiliation: 2025-26", color: "text-yellow-700" },
    { text: "SMS Law College Brochure", color: "text-purple-700" },
  ];

  return (
    <div className="relative w-full h-[130vh] lg:h-[130vh]  overflow-hidden">
      {/* Slider */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <div className="relative w-full h-[100vh]">
              <Image
                src={src}
                alt={`SMS Law College ${index + 1}`}
                fill
                // style={{ objectFit: "cov er" }}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl xl:max-w-3xl">
                    <span className="inline-block px-4 py-2 bg-purple-600/90 text-white text-sm font-semibold rounded-full mb-4">
                      About SMS Law College
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      Excellence in
                      <span className="block text-purple-300">
                        Legal Education
                      </span>
                    </h1>

                    <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
                      Empowering future legal professionals with comprehensive
                      education, practical training, and ethical values that
                      shape tomorrow's justice system.
                    </p>

                    {/* <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                        <Play className="w-5 h-5" />
                        Watch Our Story
                      </button>
                      <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                        Explore Programs
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/10 rounded-full mb-4 group-hover:bg-purple-600/20 transition">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====== Announcement Popup ====== */}

      {showPopup && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl w-[100%] h-75 max-w-md relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-3 text-white text-2xl font-bold"
              >
                ×
              </button>

              {/* Header */}
              <div className="bg-purple-700 text-white text-center py-3 rounded-t-lg font-bold text-lg">
                Announcements
              </div>

              {/* Vertical Scrolling Text */}
              <div className="overflow-hidden relative h-70 flex">
                <motion.ul
                  className="space-y-2"
                  animate={{ y: ["100%", "-100%"] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className={`text-lg font-medium ${item.color} px-2`}
                    >
                      {item.text}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

    </div>
  );
};

export default HeroSection;
