"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Calendar,
  Globe,
  Target,
  CheckCircle,
  Star,
  ExternalLink,
  ArrowRight,
  Scale,
  Gavel,
  Shield,
  Building,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LegalEducation = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const legalEducationFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Well-structured curriculum covering all aspects of legal education from fundamentals to advanced topics.",
    },
    {
      icon: Scale,
      title: "Practical Training",
      description: "Hands-on experience through moot courts, internships, and real-world case studies.",
    },
    {
      icon: Gavel,
      title: "Professional Development",
      description: "Focus on developing advocacy skills, legal research, and professional ethics.",
    },
    {
      icon: Shield,
      title: "Ethical Foundation",
      description: "Strong emphasis on legal ethics, social justice, and professional responsibility.",
    },
  ];

  const careerPaths = [
    {
      title: "Litigation",
      description: "Practice in courts as advocates, representing clients in various legal matters.",
      icon: Gavel,
    },
    {
      title: "Corporate Law",
      description: "Work with corporations on legal matters, contracts, and compliance issues.",
      icon: Building,
    },
    {
      title: "Legal Research",
      description: "Conduct research for law firms, courts, or academic institutions.",
      icon: BookOpen,
    },
    {
      title: "Public Service",
      description: "Serve in government legal departments, public prosecutors, or judges.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/Slider2.jpg"
            alt="Legal Education in India"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl xl:max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4 sm:mb-6"
              >
                <span className="inline-block px-3 sm:px-4 sm:py-2 bg-purple-600/90 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
                  Legal Education
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                Legal Education
                <span className="block text-purple-300">in India</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-xl"
              >
                Understanding the comprehensive legal education system in India,
                from undergraduate programs to specialized legal training.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <BookOpen className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Key Features of <span className="text-purple-600">Legal Education</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our legal education system is designed to provide comprehensive
              training in law, ethics, and professional practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalEducationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
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
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <Target className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Career <span className="text-purple-600">Opportunities</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Legal education opens doors to diverse career paths in the legal profession.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <career.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {career.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {career.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Start Your Legal Journey
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join SMS Law College and begin your path to becoming a successful legal professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admission" passHref>
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Apply Now
                </button>
              </Link>
              <Link href="/" passHref>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegalEducation;