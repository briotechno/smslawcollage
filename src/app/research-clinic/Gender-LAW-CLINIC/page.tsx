"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GenderLAWCLINICpage = () => {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <header className="relative h-[60vh] md:h-[64vh] lg:h-[72vh] w-full overflow-hidden">
        <Image
          src="/assets/Slider3.jpg"
          alt="Environmental Law Clinic"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-purple-600/90 text-white text-sm font-semibold rounded-full mb-4">
              Gender LAW CLINIC
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Gender LAW
              <span className="block text-purple-300">CLINIC</span>
            </motion.h1>

            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed">
              Promoting environmental legal awareness, research, and sustainable
              community practices through education and outreach.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Gender LAW CLINIC */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section id="activities" className="mt-8 space-y-6 lg:col-span-12 py-5">
            <h3 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-6">
              Gender
              <span className="text-purple-600"> LAW CLINIC</span>
            </h3>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ex officiis in blanditiis, cum natus reprehenderit atque? Commodi consectetur blanditiis deleniti corrupti aut qui asperiores veniam harum? Cum voluptas vero animi sed, temporibus officia error?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ex officiis in blanditiis, cum natus reprehenderit atque? Commodi consectetur blanditiis deleniti corrupti aut qui asperiores veniam harum? Cum voluptas vero animi sed, temporibus officia error?
            </p>

            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ex officiis in blanditiis, cum natus reprehenderit atque? Commodi consectetur blanditiis deleniti corrupti aut qui asperiores veniam harum? Cum voluptas vero animi sed, temporibus officia error?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ex officiis in blanditiis, cum natus reprehenderit atque? Commodi consectetur blanditiis deleniti corrupti aut qui asperiores veniam harum? Cum voluptas vero animi sed, temporibus officia error?
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
export default GenderLAWCLINICpage