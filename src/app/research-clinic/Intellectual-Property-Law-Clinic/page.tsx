"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const IntellectualPropertyLawClinicpage = () => {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <header className="relative h-[60vh] md:h-[64vh] lg:h-[72vh] w-full overflow-hidden">
        <Image
          src="/assets/HeroSection/HeroSection2.jpeg"
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
              Intellectual Property Law Clinic
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Intellectual Property
              <span className="block text-purple-300">Law Clinic</span>
            </motion.h1>

            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed">
              Promoting environmental legal awareness, research, and sustainable
              community practices through education and outreach.
            </p>
          </motion.div>
        </div>
      </header>

      {/*Intellectual Property Law Clinic */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section id="activities" className="mt-8 space-y-10 lg:col-span-12 py-5">
            <h3 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-6">
              Intellectual
              <span className="text-purple-600"> Property Law Clinic</span>
            </h3>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <div className="rounded-xl p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 shadow-xl mb-10">
              <p className="text-lg text-gray-700 text-justify mb-6">
                The Intellectual Property Law Clinic is committed to fostering innovation, protecting creative works, and promoting legal literacy in intellectual property (IP) rights. We offer free legal aid, conduct research, and organize outreach programs to support inventors, artists, entrepreneurs, and students.
              </p>
            </div>

            {/* Services Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-purple-600 mb-4">Our Services</h4>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Legal counseling on patents, copyrights, trademarks, and designs</li>
                  <li>Workshops on IP registration and protection</li>
                  <li>Support for filing IP applications and documentation</li>
                  <li>Assistance with IP infringement and dispute resolution</li>
                  <li>Community outreach and awareness campaigns</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-purple-600 mb-4">Impact & Initiatives</h4>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Over 100 IP applications assisted in the last year</li>
                  <li>Annual IP Awareness Week with expert panels and student competitions</li>
                  <li>Collaboration with industry, startups, and government agencies</li>
                  <li>Publication of research papers on IP law reforms</li>
                  <li>Legal literacy drives for creators and entrepreneurs</li>
                </ul>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-purple-50 p-6 rounded-lg mb-10">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">Meet Our Team</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <span className="text-purple-700 font-bold text-2xl">RS</span>
                  </div>
                  <div className="font-semibold">Dr. R. Sharma</div>
                  <div className="text-sm text-gray-600">Faculty Coordinator</div>
                </div>
                <div className="bg-white p-4 rounded shadow text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <span className="text-purple-700 font-bold text-2xl">MK</span>
                  </div>
                  <div className="font-semibold">M. Khan</div>
                  <div className="text-sm text-gray-600">Student Lead</div>
                </div>
                <div className="bg-white p-4 rounded shadow text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <span className="text-purple-700 font-bold text-2xl">SP</span>
                  </div>
                  <div className="font-semibold">S. Patel</div>
                  <div className="text-sm text-gray-600">Legal Advisor</div>
                </div>
              </div>
            </div>

            {/* Resources Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-purple-600 mb-4">Resources</h4>
                <ul className="space-y-3 text-gray-700">
                  <li><a href="#" className="text-purple-700 underline">IP Rights Handbook (PDF)</a></li>
                  <li><a href="#" className="text-purple-700 underline">Patent Application Form</a></li>
                  <li><a href="#" className="text-purple-700 underline">Recent Judgments on IP Law</a></li>
                  <li><a href="#" className="text-purple-700 underline">Helpline Numbers</a></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-purple-600 mb-4">Get Involved</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>Volunteer for outreach programs</li>
                  <li>Join research and publication teams</li>
                  <li>Participate in annual IP Awareness Week</li>
                  <li>Attend workshops and seminars</li>
                </ul>
              </div>
            </div>

            {/* Suggestions for Engagement */}
            <div className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 p-8 rounded-lg text-white text-center shadow-xl mb-10">
              <h4 className="text-xl font-semibold mb-3">Contact & Collaboration</h4>
              <p className="mb-2">Email: ipclinic@smslawcollege.edu.in</p>
              <p className="mb-2">Phone: +91-98765-43211</p>
              <p className="mb-4">Office Hours: Mon-Fri, 10am - 4pm</p>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default IntellectualPropertyLawClinicpage