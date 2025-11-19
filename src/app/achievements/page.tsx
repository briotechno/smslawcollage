"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Medal,
  Users,
  BookOpen,
  Target,
  Star,
  TrendingUp,
  Calendar,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AchievementsPage = () => {
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const achievementCategories = [
    {
      icon: BookOpen,
      title: "Academic Achievements",
      description: "Outstanding academic performance and scholarly accomplishments",
      achievements: [
        "National Moot Court Competition Winners",
        "University Gold Medal Recipients",
        "Research Paper Publications",
        "Academic Excellence Awards"
      ],
      href: "/achievements/academic-achievements",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Trophy,
      title: "Sports Achievements",
      description: "Excellence in sports and athletic competitions",
      achievements: [
        "Inter-University Sports Champions",
        "National Level Medals",
        "State Championship Titles",
        "Individual Sports Excellence"
      ],
      href: "/achievements/sports-achievements",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      title: "Cultural Achievements",
      description: "Recognition in cultural and artistic endeavors",
      achievements: [
        "Cultural Festival Winners",
        "Drama & Theatre Excellence",
        "Music & Dance Competitions",
        "Art & Literary Awards"
      ],
      href: "/achievements/cultural-achievements",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Participation",
      description: "Active participation in various competitions and events",
      achievements: [
        "National Level Competitions",
        "International Moot Courts",
        "Debate & Elocution Events",
        "Community Service Recognition"
      ],
      href: "/achievements/participation",
      color: "from-orange-500 to-orange-600",
    },
  ];

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("token") || sessionStorage.getItem("token")
            : null;

        const headers: Record<string, string> = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch("/api/achievements", { headers });
        const data = await res.json();
        console.log("Raw API Response:", data);

        if (res.ok) {
          // ✅ Handle both possible response formats
          const achievementsArray = Array.isArray(data)
            ? data
            : Array.isArray(data.data)
              ? data.data
              : [];

          // ✅ Show only first 4
          const firstFour = achievementsArray.slice(0, 4);
          setAchievements(firstFour);

          console.log("First 4 Achievements:", firstFour);
        } else {
          console.warn("API responded with error:", data);
          setAchievements([]);
        }
      } catch (err) {
        console.error("Failed to fetch achievements:", err);
        setAchievements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);


  // const recentHighlights = [
  //   {
  //     title: "National Moot Court Champions",
  //     description: "Our students secured 1st position in the National Moot Court Competition with a cash prize of ₹1,00,000",
  //     year: "2024",
  //     category: "Academic",
  //   },
  //   {
  //     title: "University Gold Medal",
  //     description: "Student secured highest percentage in University Examination among all law streams",
  //     year: "2024",
  //     category: "Academic",
  //   },
  //   {
  //     title: "Inter-University Sports Champions",
  //     description: "Won multiple medals in badminton, karate, and other sports at university level",
  //     year: "2024",
  //     category: "Sports",
  //   },
  //   {
  //     title: "Cultural Festival Winners",
  //     description: "Secured 1st position in Garba and Skit competitions at Gujarat University Youth Festival",
  //     year: "2024",
  //     category: "Cultural",
  //   },
  // ];

  const stats = [
    { number: "150+", label: "Total Achievements", icon: Trophy },
    { number: "25+", label: "National Level Awards", icon: Award },
    { number: "50+", label: "University Medals", icon: Medal },
    { number: "95%", label: "Student Success Rate", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-32">
      {/* Hero Section */}
     <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/assets/HeroSection/achivmentHero1.jpeg"
                alt="Legal Education in India"
                fill
                className="object-fill lg:scale-y-[1.6] translate-x-[10px] translate-y-[168px] translate-z-[10px]"
                priority
              />
              
            </div>
    
            
          </section>

      {/* Achievement Categories Section */}
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
              <Trophy className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Achievement <span className="text-purple-600">Categories</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of achievements across different domains
              that showcase the excellence of our students and institution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {achievementCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {category.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <Star className="w-4 h-4 text-purple-600" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                  {/* <Link
                    href={category.href}
                    className="w-full bg-gray-100 hover:bg-purple-600 text-gray-700 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlights Section */}
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
              <Award className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Recent <span className="text-purple-600">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Latest achievements and recognitions that showcase our continued
              commitment to excellence in legal education.
            </p>
          </motion.div>

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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={item._id || index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-600/10 rounded-full flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
                        {item.category || "General"}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {item.year || "—"}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
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
              Join Our Legacy of Excellence
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Be part of our tradition of academic excellence and achievement.
              Discover how you can contribute to our continued success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admission"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Apply Now
              </Link>
              <Link
                href="/about-us"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
