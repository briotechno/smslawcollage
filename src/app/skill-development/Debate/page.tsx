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
  BookMarked,
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
    <div className="min-h-screen bg-gray-50 mt-32">
      {/* Hero Section */}
     <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/assets/HeroSection/HeroSection4.jpeg"
                alt="Legal Education in India"
                fill
                className="object-fill lg:scale-y-[1.9]"
                priority
              />
              
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
              <BookMarked className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
               <span className="text-purple-600">Debate</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </motion.div >

          <div className="rounded-xl p-8 bg-white shadow-xl mb-10">
            <p className="text-lg text-gray-700 text-justify mb-6">
              Debate in law faculty is a cornerstone of legal education, serving as a dynamic arena where future lawyers hone the critical skills necessary for a successful career in law. It is far more than a mere academic exercise; it is a simulated courtroom or legislative chamber designed to cultivate rigorous analytical thinking, persuasive argumentation, and a deep understanding of complex legal principles. At its core, legal debate demands meticulous preparation. Students must thoroughly research case law, statutes, and legal theories to build a robust argument. This process teaches them not only how to find relevant legal sources but also how to synthesize and apply them to specific factual scenarios, much like preparing for a real trial or crafting a legal brief.
            </p>
            <p className="text-lg text-gray-700 text-justify mb-6">
              The actual debate itself is an exercise in intellectual agility. Participants learn to articulate their positions with clarity and precision, anticipating counterarguments and responding effectively under pressure. They develop the art of persuasion, mastering how to structure an argument logically, use evidence compellingly, and appeal to reason and principle. These skills are vital for courtroom advocacy, client negotiations, and legal writing. Furthermore, legal debate fosters critical listening skills. To counter an opponent's argument effectively, one must first fully comprehend it, a skill essential for cross-examination and negotiation. This constant exchange of ideas also encourages students to view legal issues from multiple perspectives, challenging their assumptions and promoting a more nuanced understanding of justice and the law's inherent complexities.
            </p>
            <p className="text-lg text-gray-700 text-justify mb-6">
              Ultimately, debate in law faculty bridges the gap between legal theory and practice. It equips students with the confidence and competence to advocate effectively, think on their feet, and navigate the adversarial nature of the legal system. It is an invaluable training ground that prepares students to become articulate, thoughtful, and effective legal professionals.
            </p>
          </div>

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