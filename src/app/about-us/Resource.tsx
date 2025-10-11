"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Library,
  Database,
  Globe,
  Users,
  Award,
  FileText,
  Search,
  Download,
  ExternalLink,
  Clock,
  Star,
} from "lucide-react";
import Image from "next/image";

const Resource = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const resources = [
    {
      icon: Library,
      title: "Digital Library",
      description:
        "Access to thousands of legal books, journals, and research papers from leading publishers worldwide.",
      features: ["50,000+ Books", "Online Access", "24/7 Availability"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Database,
      title: "Legal Database",
      description:
        "Comprehensive database of case laws, statutes, and legal precedents for research and study.",
      features: ["Case Laws", "Statutes", "Legal Precedents"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Globe,
      title: "Online Resources",
      description:
        "Access to international legal databases, e-journals, and online legal research tools.",
      features: ["International Access", "E-Journals", "Research Tools"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Study Groups",
      description:
        "Collaborative learning through organized study groups and peer-to-peer knowledge sharing.",
      features: ["Peer Learning", "Study Groups", "Collaboration"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: FileText,
      title: "Research Papers",
      description:
        "Access to faculty and student research papers, theses, and academic publications.",
      features: ["Research Papers", "Theses", "Publications"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Award,
      title: "Academic Support",
      description:
        "Comprehensive academic support including tutoring, mentoring, and career guidance.",
      features: ["Tutoring", "Mentoring", "Career Guidance"],
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Books & Journals" },
    { number: "100+", label: "Online Databases" },
    { number: "24/7", label: "Access Available" },
    { number: "95%", label: "Student Satisfaction" },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      id="Knowledge-Resource-page"
    >
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
            Knowledge <span className="text-purple-600">Resources</span>
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive learning resources, digital libraries, and
            academic support systems designed to enhance your legal education
            journey.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center`}
                  >
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {resource.description}
                </p>
                <div className="space-y-2">
                  {resource.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <Star className="w-4 h-4 text-purple-600" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-gray-100 hover:bg-purple-600 text-gray-700 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Access Resource
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Additional Learning Support
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Beyond traditional resources, we provide comprehensive support
                including research assistance, writing workshops, and access to
                legal technology tools that prepare you for modern legal
                practice.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    Advanced Search Capabilities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    Offline Access to Resources
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">24/7 Technical Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/Slider2.jpg"
                alt="Learning Resources"
                width={500}
                height={400}
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resource;
