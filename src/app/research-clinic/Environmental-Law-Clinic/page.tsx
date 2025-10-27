"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { FaLeaf } from "react-icons/fa";

const activities = [
  {
    date: "29 JUL, 2019",
    title: "Launch of 'Ecobuzz' - Enewsletter",
    excerpt:
      "Launch of the ecolobuzz e-newsletter by Environmental Law Clinic of SMS Law College to share research, news and activities.",
    image: "/assets/Noimage.jpg",
  },
  {
    date: "6 JUL, 2019",
    title: "Van Mahotsav Celebration",
    excerpt:
      "Annual tree-planting drive and awareness activities organised by the clinic with students and faculty.",
    image: "/assets/Noimage.jpg",
  },
  {
    date: "14 AUG, 2018",
    title: "Extempore Speech Competition",
    excerpt:
      "An inter-student competition to encourage awareness & advocacy on environmental legal issues.",
    image: "/assets/Noimage.jpg",
  },
  {
    date: "05 JUN, 2018",
    title: "World Environmental Day Celebration",
    excerpt:
      "Campus-wide events to spread awareness on reducing plastic use and sustainable practices.",
    image: "/assets/Noimage.jpg",
  },
  {
    date: "22 MAR, 2018",
    title: "World Water Day Celebration",
    excerpt:
      "Events emphasizing conservation and efficient use of water resources across campus.",
    image: "/assets/Noimage.jpg",
  },
  {
    date: "02 SEP, 2017",
    title: "The Launch of ELC",
    excerpt:
      "Official launch of the Environmental Law Clinic with dignitaries and a flagship awareness drive.",
    image: "/assets/Noimage.jpg",
  },
];

const recentActivities = [
  "Launch of Ecobuzz - Enewsletter",
  "Van Mahotsav Celebration",
  "Extempore Speech Competition",
  "World Water Day Celebration",
  "World Environmental Day Celebration",
  "The Launch of ELC",
];

const EnvironmentalLawClinicPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <header className="relative w-full h-[110vh] sm:h-[120vh] md:h-[130vh] lg:h-[130vh] overflow-hidden">
        <Image
          src="/assets/HeroSection/HeroSection3.jpeg"
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
              Environmental Law Clinic
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Environmental
              <span className="block text-purple-300">Law Clinic</span>
            </motion.h1>

            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed">
              Promoting environmental legal awareness, research, and sustainable
              community practices through education and outreach.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Recent Activities section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <FaLeaf className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Recent <span className="text-purple-600">Activities</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Develop essential skills through structured debate training and
              practice sessions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/10 rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {activity}
                </h4>
                <p className="text-gray-600 text-sm">
                  A highlight event under the Environmental Law Clinic initiative.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Clinic content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* CONTENT COLUMN */}
          <section className="lg:col-span-12 py-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-purple-600">
                About the Clinic
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                The Environmental Law Clinic bridges the gap between legal education
                and real-world governance. It promotes capacity building, legal aid,
                research, and community outreach for sustainable development.
              </p>

              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Founded</div>
                    <div className="text-sm text-gray-600">2017</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Location</div>
                    <div className="text-sm text-gray-600">
                      SMS Law College, Mahesana
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Environmental Activities list */}
            <section id="activities" className="mt-8 space-y-6">
              <h3 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-6">
                Environmental <span className="text-purple-600">Law Clinic Activities</span>
              </h3>
              <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>

              <div className="space-y-4">
                {activities.map((act, idx) => (
                  <motion.article
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    className="bg-white rounded-lg shadow p-5 border border-gray-100 flex flex-col md:flex-row gap-4"
                  >
                    <div className="md:w-40 h-28 relative rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={act.image}
                        alt={act.title}
                        fill
                      // style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" /> <span>{act.date}</span>
                      </div>

                      <h4 className="mt-2 text-lg font-semibold text-purple-600">
                        {act.title}
                      </h4>
                      <p className="mt-2 text-gray-600">{act.excerpt}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}
export default EnvironmentalLawClinicPage