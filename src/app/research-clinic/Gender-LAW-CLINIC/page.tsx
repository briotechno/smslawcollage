"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GenderLAWCLINICpage = () => {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <header className="relativeh-[90vh] sm:h-[60vh] md:h-[100vh] lg:h-[130vh] w-full overflow-hidden">
        <Image
          src="/assets/HeroSection/HeroSection6.jpeg"
          alt="Environmental Law Clinic"
          fill
          // style={{ objectFit: "cover" }}
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
            <p className="text-lg text-gray-700 text-justify mb-6">
              The Gender Law Clinic is dedicated to advancing gender justice, legal awareness, and advocacy for equality. We provide free legal aid, conduct research, and organize outreach programs to empower individuals and communities facing gender-based discrimination.
            </p>

            {/* Services Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-purple-600 mb-4">Our Services</h4>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Legal counseling for gender-based violence and discrimination</li>
                  <li>Workshops on gender rights and legal remedies</li>
                  <li>Support for survivors of domestic violence, harassment, and abuse</li>
                  <li>Assistance with filing complaints and legal documentation</li>
                  <li>Community outreach and awareness campaigns</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-purple-600 mb-4">Impact & Initiatives</h4>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Over 200 cases of gender injustice addressed in the last year</li>
                  <li>Annual Gender Justice Week with expert panels and student debates</li>
                  <li>Collaboration with NGOs and government agencies</li>
                  <li>Publication of research papers on gender law reforms</li>
                  <li>Legal literacy drives in rural and urban communities</li>
                </ul>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-purple-50 p-6 rounded-lg mb-10">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">Meet Our Team</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <span className="text-purple-700 font-bold text-2xl">SJ</span>
                  </div>
                  <div className="font-semibold">Dr. S. Joshi</div>
                  <div className="text-sm text-gray-600">Faculty Coordinator</div>
                </div>
                <div className="bg-white p-4 rounded shadow text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <span className="text-purple-700 font-bold text-2xl">AK</span>
                  </div>
                  <div className="font-semibold">A. Kumar</div>
                  <div className="text-sm text-gray-600">Student Lead</div>
                </div>
                <div className="bg-white p-4 rounded shadow text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <span className="text-purple-700 font-bold text-2xl">PR</span>
                  </div>
                  <div className="font-semibold">P. Rao</div>
                  <div className="text-sm text-gray-600">Legal Advisor</div>
                </div>
              </div>
            </div>



            {/* Contact Section */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-8 rounded-lg text-white text-center">
              <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
              <p className="mb-2">Email: genderclinic@smslawcollege.edu.in</p>
              <p className="mb-2">Phone: +91-98765-43210</p>
              <p>Office Hours: Mon-Fri, 10am - 4pm</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default GenderLAWCLINICpage