"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Lightbulb,
  Heart,
  Users,
  Globe,
  Award,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

const VisionMission = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const missionPoints = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description:
        "Provide world-class legal education through innovative teaching methods and comprehensive curriculum.",
    },
    {
      icon: Users,
      title: "Student Development",
      description:
        "Foster holistic development of students through mentorship, practical training, and character building.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "Prepare students for international legal practice through global collaborations and exchange programs.",
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description:
        "Instill values of justice, equity, and social responsibility in future legal professionals.",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      id="Vision-Mission-page"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
            <Lightbulb className="w-10 h-10 text-purple-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-purple-600">Vision & Mission</span>
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Guiding principles that shape our commitment to excellence in legal
            education and our vision for the future of legal professionals.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl shadow-xl p-8 lg:p-12 hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold ml-4 text-gray-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be a globally recognized center of excellence in legal
                education, producing ethical, competent, and socially
                responsible legal professionals who contribute to the
                advancement of justice and the rule of law.
              </p>
              <div className="bg-gradient-to-r from-purple-600/5 to-purple-700/5 rounded-xl p-6">
                <p className="text-purple-600 font-semibold italic">
                  "Empowering minds, shaping futures, building a just society
                  through excellence in legal education."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl shadow-xl p-8 lg:p-12 hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold ml-4 text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide comprehensive legal education that combines
                theoretical knowledge with practical skills, fostering critical
                thinking, ethical values, and professional excellence in our
                students.
              </p>
              <div className="space-y-3">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-600/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <point.icon className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide our institution and shape
              the character of our legal education programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Pursuing the highest standards in education and practice",
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "Upholding ethical principles and moral values",
              },
              {
                icon: Users,
                title: "Inclusivity",
                description:
                  "Embracing diversity and ensuring equal opportunities",
              },
              {
                icon: Globe,
                title: "Innovation",
                description:
                  "Embracing new ideas and modern approaches to legal education",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
