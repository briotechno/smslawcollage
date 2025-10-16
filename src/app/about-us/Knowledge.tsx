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
  Briefcase,
  Globe,
  Shield,
  Lightbulb,
  TrendingUp,
  Heart,
} from "lucide-react";
import Link from "next/link";

const KnowledgeResource = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const reasons = [
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description:
        "Learn from distinguished legal professionals, former judges, and renowned academicians with decades of experience in the field.",
    },
    {
      icon: Scale,
      title: "Practical Legal Training",
      description:
        "Engage in moot courts, legal clinics, and real-world case studies that prepare you for actual legal practice.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "Modern curriculum covering all aspects of law with emphasis on contemporary legal issues and emerging fields.",
    },
    {
      icon: Users,
      title: "Diverse Learning Community",
      description:
        "Join a vibrant community of students from diverse backgrounds, fostering rich discussions and networking opportunities.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Accredited programs with recognition from legal bodies and strong placement support in top law firms and organizations.",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description:
        "Excellent placement record with graduates working in prestigious law firms, corporate houses, and judicial services.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "International collaborations and exchange programs that provide exposure to global legal systems and practices.",
    },
    {
      icon: Shield,
      title: "Ethical Foundation",
      description:
        "Strong emphasis on legal ethics, social justice, and professional responsibility in legal practice.",
    },
    {
      icon: Lightbulb,
      title: "Innovation in Teaching",
      description:
        "Modern teaching methods including case-based learning, interactive sessions, and technology-integrated education.",
    },
    {
      icon: TrendingUp,
      title: "Research Excellence",
      description:
        "Active research culture with faculty and students contributing to legal scholarship and policy development.",
    },
    {
      icon: Heart,
      title: "Social Impact",
      description:
        "Commitment to pro bono work, legal aid, and community service, making law accessible to all sections of society.",
    },
    {
      icon: Target,
      title: "Personal Development",
      description:
        "Holistic development focusing on communication skills, critical thinking, and leadership qualities essential for legal practice.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="Knowledge-Resource-page">
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
            <Target className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-purple-600">SMS Law College?</span>
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the unique advantages that make SMS Law College the
            preferred choice for aspiring legal professionals seeking excellence
            in legal education.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-purple-600/10 rounded-xl flex items-center justify-center group-hover:bg-purple-600/20 transition-colors duration-300">
                    <reason.icon className="w-7 h-7 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Legal Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful graduates who chose SMS Law College
              for their legal education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admission" passHref>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Apply Now
              </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KnowledgeResource;
