"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Scale,
  Users,
  Award,
  BookOpen,
  Target,
} from "lucide-react";
import Image from "next/image";

const AboutClg = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const features = [
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description:
        "Learn from experienced legal professionals and renowned academicians",
    },
    {
      icon: Scale,
      title: "Practical Training",
      description: "Hands-on experience through moot courts and legal clinics",
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "Join a vibrant community of aspiring legal professionals",
    },
    {
      icon: Award,
      title: "Recognition",
      description:
        "Accredited programs with industry recognition and placement support",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-purple-600">SMS Law College</span>
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-purple-600">SMS Law College</strong>{" "}
                stands as a beacon of excellence in legal education, committed
                to nurturing the next generation of legal professionals. Our
                institution combines traditional legal wisdom with modern
                pedagogical approaches to create a comprehensive learning
                environment.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                With a rich heritage of academic excellence and a
                forward-thinking approach to legal education, we provide
                students with the knowledge, skills, and ethical foundation
                necessary to excel in the dynamic field of law. Our curriculum
                is designed to bridge the gap between theoretical knowledge and
                practical application.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in fostering critical thinking, analytical skills,
                and a deep understanding of justice and equity. Our students
                graduate not just as legal professionals, but as advocates for
                justice and positive change in society.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  15+
                </div>
                <div className="text-gray-600 font-medium">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-medium">
                  Successful Graduates
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/HeroSection/HeroSection2.jpeg"
                alt="SMS Law College Campus"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Our Mission</div>
                  <div className="text-sm text-gray-600">
                    Excellence in Legal Education
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutClg;
