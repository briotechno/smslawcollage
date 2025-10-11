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
} from "lucide-react";
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

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentSlide ? "bg-white scale-125" : "bg-white/50"
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const stats = [
    { icon: Users, number: "500+", label: "Students" },
    { icon: Award, number: "50+", label: "Awards" },
    { icon: BookOpen, number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="relative w-full h-[100vh]  overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <div className="relative w-full h-[70vh] lg:h-[80vh]">
              <Image
                src={src}
                alt={`SMS Law College ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-purple-600/90 text-white text-sm font-semibold rounded-full mb-4">
                        About SMS Law College
                      </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                      Excellence in
                      <span className="block text-purple-300">
                        Legal Education
                      </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                      Empowering future legal professionals with comprehensive
                      education, practical training, and ethical values that
                      shape tomorrow's justice system.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                        <Play className="w-5 h-5" />
                        Watch Our Story
                      </button>
                      <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                        Explore Programs
                      </button>
                    </div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/10 rounded-full mb-4 group-hover:bg-purple-600/20 transition-colors duration-300">
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
    </div>
  );
};

export default HeroSection;
