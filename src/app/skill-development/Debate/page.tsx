"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Mic,
  Target,
  Award,
  Calendar,
  CheckCircle,
  Star,
  ExternalLink,
  ArrowRight,
  BookOpen,
  Globe,
  Trophy,
  MessageSquare,
  Brain,
} from "lucide-react";
import Image from "next/image";

const Debate = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const debateSkills = [
    {
      icon: Mic,
      title: "Public Speaking",
      description: "Develop confidence and clarity in expressing your arguments effectively.",
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Learn to analyze arguments, identify fallacies, and construct logical responses.",
    },
    {
      icon: MessageSquare,
      title: "Persuasion",
      description: "Master the art of convincing others through compelling arguments and evidence.",
    },
    {
      icon: Target,
      title: "Research Skills",
      description: "Develop strong research abilities to support your arguments with credible sources.",
    },
  ];

  const debateFormats = [
    {
      title: "Parliamentary Debate",
      description: "British Parliamentary style with teams of two, focusing on current affairs and policy issues.",
      duration: "7 minutes per speaker",
      participants: "4 speakers (2 teams)",
    },
    {
      title: "Lincoln-Douglas Debate",
      description: "One-on-one debate format focusing on values and philosophical questions.",
      duration: "6 minutes per speech",
      participants: "2 speakers",
    },
    {
      title: "Policy Debate",
      description: "Team-based debate on specific policy proposals with extensive research requirements.",
      duration: "8 minutes per speech",
      participants: "4 speakers (2 teams)",
    },
    {
      title: "Public Forum Debate",
      description: "Accessible format focusing on current events and public policy issues.",
      duration: "4 minutes per speech",
      participants: "4 speakers (2 teams)",
    },
  ];

  const benefits = [
    { benefit: "Enhanced Communication Skills", icon: Mic },
    { benefit: "Improved Critical Thinking", icon: Brain },
    { benefit: "Better Research Abilities", icon: BookOpen },
    { benefit: "Increased Confidence", icon: Trophy },
    { benefit: "Leadership Development", icon: Users },
    { benefit: "Global Perspective", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[110vh] sm:h-[120vh] md:h-[130vh] lg:h-[130vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/HeroSection/HeroSection4.jpeg"
            alt="Debate Skills Development"
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
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600/90 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
                  Skill Development
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                Debate
                <span className="block text-purple-300">Skills</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-xl"
              >
                Master the art of debate and develop essential skills in
                argumentation, critical thinking, and persuasive communication.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              <Mic className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Debate <span className="text-purple-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Develop essential skills through structured debate training
              and practice sessions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {debateSkills.map((skill, index) => (
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
                  <skill.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Debate Formats Section */}
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
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Debate <span className="text-purple-600">Formats</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn various debate formats and choose the one that best
              suits your interests and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {debateFormats.map((format, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {format.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {format.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    {format.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-purple-600" />
                    {format.participants}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <Award className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Benefits of <span className="text-purple-600">Debate</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the numerous benefits of participating in debate
              activities and competitions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/10 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.benefit}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Join Our Debate Program
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Develop your debate skills and become a confident speaker
              through our comprehensive training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Join Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Debate