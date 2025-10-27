"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Users,
  Calendar,
  Star,
  Target,
  TrendingUp,
  Music,
  Palette,
  Theater,
} from "lucide-react";
import Image from "next/image";

const CulturalAchievementsPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const achievements = [
    {
      title: "Athena Moot Court Competition Winners",
      description: "Mr. Niel Bhatt (II), Mr. Jaydev Chudasma (IV) and Ms. Radhika Buddha (VI) secured first position with cash prize of rupees 3000/- at Athena Moot Court Competition hosted by National Literary and Cultural Competition - L.J. College, Mehasana, 2019.",
      year: "2019",
      category: "Moot Court",
      award: "1st Position",
      prize: "₹3,000",
      participants: ["Mr. Niel Bhatt", "Mr. Jaydev Chudasma", "Ms. Radhika Buddha"],
      event: "Athena Moot Court Competition",
    },
    {
      title: "Debate and Elocution Champions",
      description: "Mr. Vrund Joshi (II), Ms. Nandini Hirani (II) and Mr. Shyam Naik (VIII) secured first position in debate and in Elocution competition at Athena Moot Court Competition hosted by National Literary and Cultural Competition - L.J. College, Mehasana, 2019.",
      year: "2019",
      category: "Debate & Elocution",
      award: "1st Position",
      prize: "Debate & Elocution",
      participants: ["Mr. Vrund Joshi", "Ms. Nandini Hirani", "Mr. Shyam Naik"],
      event: "Athena Moot Court Competition",
    },
    {
      title: "Folk Dance Garba Competition",
      description: "Secured 3rd Position in 'Folk Dance' Garba Competition at Zonal Level in Gujarat University Youth Festival – 2018-19.",
      year: "2018-19",
      category: "Folk Dance",
      award: "3rd Position",
      prize: "Zonal Level",
      participants: ["GLS Law College Team"],
      event: "Gujarat University Youth Festival",
    },
    {
      title: "Skit Competition Champions",
      description: "Secured 1st position in 'Skit' in Gujarat University Youth Festival – 2017-18.",
      year: "2017-18",
      category: "Drama",
      award: "1st Position",
      prize: "Skit Competition",
      participants: ["GLS Law College Team"],
      event: "Gujarat University Youth Festival",
    },
    {
      title: "Garba Dance Champions",
      description: "Secured 1st position in 'Garba' in Youth Festival – 2017-18. At Zonal Level.",
      year: "2017-18",
      category: "Folk Dance",
      award: "1st Position",
      prize: "Zonal Level",
      participants: ["GLS Law College Team"],
      event: "Youth Festival",
    },
    {
      title: "Best Rally Award",
      description: "Best Rally Award at Gujarat University Youth Festival 2016 – 'Yugam'.",
      year: "2016",
      category: "Rally",
      award: "Best Rally Award",
      prize: "Yugam Festival",
      participants: ["GLS Law College Team"],
      event: "Gujarat University Youth Festival",
    },
    {
      title: "Mimicry Excellence",
      description: "Pranav Shah, student of Semester-I, secured the trophy for best performance in Mimicry at zonal level in Youth Festival 2016.",
      year: "2016",
      category: "Mimicry",
      award: "Best Performance",
      prize: "Zonal Level",
      participants: ["Pranav Shah"],
      event: "Youth Festival",
    },
  ];

  const culturalCategories = [
    { name: "Drama & Theater", count: 2, icon: Theater, color: "from-purple-500 to-purple-600" },
    { name: "Folk Dance", count: 2, icon: Music, color: "from-green-500 to-green-600" },
    { name: "Debate & Elocution", count: 1, icon: Users, color: "from-blue-500 to-blue-600" },
    { name: "Moot Court", count: 1, icon: Trophy, color: "from-orange-500 to-orange-600" },
    { name: "Rally & Events", count: 1, icon: Target, color: "from-red-500 to-red-600" },
  ];

  const stats = [
    { number: "7+", label: "Cultural Awards", icon: Award },
    { number: "4", label: "1st Positions", icon: Trophy },
    { number: "3", label: "Zonal Level", icon: Star },
    { number: "100%", label: "Participation Rate", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/HeroSection/HeroSection3.jpeg"
            alt="Cultural Achievements"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-purple-600/90 text-white text-sm font-semibold rounded-full mb-4">
                  Cultural Excellence
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Cultural
                <span className="block text-purple-300">Achievements</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed"
              >
                Celebrating our students' outstanding performance in cultural
                activities, arts, and creative competitions.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              <Palette className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Cultural <span className="text-purple-600">Statistics</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our students have consistently excelled in various cultural activities,
              bringing home numerous awards and recognitions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Categories Section */}
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
              <Music className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Cultural <span className="text-purple-600">Categories</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our students participate and excel in various cultural disciplines,
              from performing arts to literary competitions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {culturalCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-2">
                      {category.name}
                    </h3>
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {category.count}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">Achievements</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements List Section */}
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
              Cultural <span className="text-purple-600">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Detailed list of our students' outstanding cultural achievements
              and artistic accomplishments.
            </p>
          </motion.div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {achievement.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {achievement.year}
                          </span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">
                            {achievement.category}
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                            {achievement.event}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {achievement.participants.map((participant, participantIndex) => (
                        <span
                          key={participantIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {participant}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-2">
                          {achievement.award}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">Award</div>
                        <div className="text-lg font-semibold text-gray-900">
                          {achievement.prize}
                        </div>
                        <div className="text-xs text-gray-500">Achievement</div>
                      </div>
                    </div>
                  </div>
                </div>
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
              Join Our Cultural Excellence
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Be part of our tradition of cultural excellence and contribute to
              our continued success in arts and cultural activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Join Cultural Activities
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                View All Cultural Events
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default CulturalAchievementsPage;
