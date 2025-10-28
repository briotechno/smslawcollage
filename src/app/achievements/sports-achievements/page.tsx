"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Medal,
  Users,
  Calendar,
  Target,
  Activity,
} from "lucide-react";
import Image from "next/image";

interface Sports {
  title: string;
  description: string;
  year: string;
  category: string;
  award: string;
  prize: string;
  participants: string[];
}

const SportsAchievementsPage = () => {
  const [Sports, setSports] = useState<Sports[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // const achievements = [
  //   {
  //     title: "Badminton Silver Medal - Titanium Jural",
  //     description: "Ms. Kajal Shah (Sem VI) secured Silver medal in badminton in the event 'Titanium Jural' organized by GLS Law College.",
  //     year: "2024",
  //     category: "Badminton",
  //     award: "Silver Medal",
  //     prize: "Individual Excellence",
  //     participants: ["Ms. Kajal Shah"],
  //     event: "Titanium Jural",
  //   },
  //   {
  //     title: "Badminton Women's Double Winners",
  //     description: "Ms. Kajal Shah (Sem VI) was Silver trophy for winning the titles of Winners in Women's double in the event 'Titanium Jural' (Badminton) organized by GLS Law College.",
  //     year: "2024",
  //     category: "Badminton",
  //     award: "Silver Trophy",
  //     prize: "Women's Double",
  //     participants: ["Ms. Kajal Shah"],
  //     event: "Titanium Jural",
  //   },
  //   {
  //     title: "Justice League Badminton Champions",
  //     description: "Ms. Kajal Shah (Sem IV) was awarded 3 Gold Medals for winning the titles of Winners in Women's double in the event 'Justice League' (Badminton) organized by GNLU.",
  //     year: "2024",
  //     category: "Badminton",
  //     award: "3 Gold Medals",
  //     prize: "Women's Double Champions",
  //     participants: ["Ms. Kajal Shah"],
  //     event: "Justice League - GNLU",
  //   },
  //   {
  //     title: "Karate Bronze Medal - Petro Cup",
  //     description: "Ms. Mayuri Rathod (Sem II) was awarded bronze medal for securing third position (Karate) at Petro cup organized by PDPU.",
  //     year: "2024",
  //     category: "Karate",
  //     award: "Bronze Medal",
  //     prize: "3rd Position",
  //     participants: ["Ms. Mayuri Rathod"],
  //     event: "Petro Cup - PDPU",
  //   },
  //   {
  //     title: "Kumite Free Style Fight Bronze",
  //     description: "Mr. Prasant Chuhan (Sem VI) was awarded bronze medal for securing third position (Kumite (Free Style Fight)).",
  //     year: "2024",
  //     category: "Karate",
  //     award: "Bronze Medal",
  //     prize: "3rd Position",
  //     participants: ["Mr. Prasant Chuhan"],
  //     event: "Kumite Competition",
  //   },
  // ];

  const sportsCategories = [
    { name: "Badminton", count: 3, icon: Trophy, color: "from-blue-500 to-blue-600" },
    { name: "Karate", count: 2, icon: Medal, color: "from-red-500 to-red-600" },
    { name: "Individual Sports", count: 5, icon: Target, color: "from-green-500 to-green-600" },
    { name: "Team Events", count: 1, icon: Users, color: "from-purple-500 to-purple-600" },
  ];

  const stats = [
    { number: "5+", label: "Sports Medals", icon: Medal },
    { number: "3", label: "Gold Medals", icon: Trophy },
    { number: "2", label: "Silver Medals", icon: Award },
    { number: "2", label: "Bronze Medals", icon: Medal },
  ];

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("token") || sessionStorage.getItem("token")
            : null;

        const headers: any = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch("/api/achievements?type=sports", { headers });
        const data = await res.json();
        console.log("Data1>>", data)

        if (res.ok && data?.data) {
          setSports(data.data);
        } else {
          setSports([]);
        }
        console.log("Data2>>", data)
      } catch (err) {
        console.error("Failed to fetch Sports", err);
        setSports([]);
      } finally {
        setLoading(false);
      }
      console.log("Data show>>")
    };

    fetchSports();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[120vh] sm:h-[120vh] md:h-[130vh] lg:h-[130vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/HeroSection/HeroSection2.jpeg"
            alt="Sports Achievements"
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
                  Sports Excellence
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Sports
                <span className="block text-purple-300">Achievements</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed"
              >
                Celebrating our students' outstanding performance in sports and
                athletic competitions at various levels.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <Activity className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Sports <span className="text-purple-600">Statistics</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our students have consistently excelled in various sports disciplines,
              bringing home numerous medals and recognitions.
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
      </section> */}

      {/* Sports Categories Section */}
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
              <Trophy className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Sports <span className="text-purple-600">Categories</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our students participate and excel in various sports disciplines,
              from individual sports to team competitions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsCategories.map((category, index) => (
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
                <div className="p-6 flex flex-col items-start">
                  <div className="flex items-center justify-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                  {/* <div className="text-2xl font-bold text-purple-600 mb-2">
                    // {category.count}
                  </div> */}
                  {/* <div className="text-gray-600 font-medium">Achievements</div> */}
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
              <Medal className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Sports <span className="text-purple-600">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Detailed list of our students' outstanding sports achievements
              and athletic accomplishments.
            </p>
          </motion.div>

          <div className="space-y-8">
            {loading ? (
              <div className="flex justify-center py-20">
                <svg
                  className="animate-spin h-10 w-10 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              </div>
            ) : Sports.length === 0 ? (
              <p className="text-center text-gray-600 py-20">
                No academic Sports achievements available.
              </p>
            ) : (
              <div className="space-y-8 max-w-7xl mx-auto">
                {Sports.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Trophy className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {item.title}
                            </h3>
                            <div className="text-sm text-gray-500 flex gap-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" /> {item.year}
                              </span>
                              <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">
                                {item.category}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-3">{item.description}</p>

                        {item.participants?.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.participants.map((p: any, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="md:w-48 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">
                          {item.award || "—"}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">Award</div>
                        <div className="text-lg font-semibold text-gray-900">
                          {item.prize || "—"}
                        </div>
                        <div className="text-xs text-gray-500">Prize</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
              Join Our Sports Excellence
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Be part of our tradition of sports excellence and contribute to
              our continued success in athletic competitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Join Sports Team
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                View All Sports
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default SportsAchievementsPage;
