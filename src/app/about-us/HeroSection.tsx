"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Award, Users, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const images = [
  "/assets/HeroSection/HeroSection1.jpeg",
  "/assets/HeroSection/HeroSection3.jpeg",
  "/assets/HeroSection/HeroSection4.jpeg",
  "/assets/HeroSection/HeroSection6.jpeg",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
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
    autoplaySpeed: 2000,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
  };

  const stats = [
    { icon: Users, number: "17,000+", label: "Students" },
    { icon: Award, number: "50+", label: "Awards" },
    { icon: BookOpen, number: "55+", label: "Years Experience" },
  ];

  const items = [
    {
      text: "Provisional Answer key Open for all candidates appears in Head Claerk examination conduct on 18th January 2026. See more instructions in Recruitment tab.", 
      color: "text-red-600",
      href: "/requirements"
    },
    {
      text: "SMS Law College Brochure ",
      color: "text-purple-700",
      onClick: () =>
        window.open("/assets/SHRI S.M.SHAH LAW COLLEGE.pdf", "_blank"),
    },
  ];

  return (
    <div
      className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-[80vh]
     lg:min-h-[55vh] overflow-hidden mt-32"
    >
      {/* ======= SLIDER ======= */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
              <Image
                src={src}
                alt={`SMS Law College ${index + 1}`}
                fill
                priority={index === 0}
                className="object-fill lg:scale-y-[1.6]"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="bg-purple-600 p-2 mt-[-7px]">
        <Marquee speed={100} pauseOnHover={true}>
          <div className="flex gap-4 items-center">
            <span className="text-lg font-bold text-white">
              Annual Newsletter Vidhaan
            </span>
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-lg font-bold text-white">
              BCI Affiliation: 2025-26
            </span>
            <div className="w-2 h-2 bg-white rounded-full" />
            <a
              onClick={() =>
                window.open("/assets/SHRI S.M.SHAH LAW COLLEGE.pdf", "_blank")
              }
              className="text-lg font-bold text-white cursor-pointer"
            >
              SMS Law College Brochure{" "}
            </a>
          </div>
        </Marquee>
      </div>
      {/* ======= STATS SECTION ======= */}
      <div className="relative w-full bg-white/95  z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-600/10 rounded-full mb-3 sm:mb-4 group-hover:bg-purple-600/20 transition">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======= POPUP ======= */}
      {showPopup && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4 sm:p-6"
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
                  className="space-y-2 flex flex-col"
                  animate={{ y: ["100%", "-100%"] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* {items.map((item, index) => (
                    <a
                      key={index}
                      className={`text-lg font-medium ${item.color} px-2 cursor-pointer`}
                      onClick={item.onClick}
                    >
                      {item.text}
                    </a>
                  ))} */}

                  {items.map((item, index) => (
                    <Link key={index} href={item.href || "#"}>
                      <span
                        className={`${item.color} cursor-pointer hover:underline`}
                      >
                        {item.text}
                      </span>
                    </Link>
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
