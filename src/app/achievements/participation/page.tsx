"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Calendar,
  Star,
  ExternalLink,
  Target,
  TrendingUp,
  Award,
  Trophy,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

interface Participation {
  title: string;
  description: string;
  year: string;
  category: string;
  award: string;
  prize: string;
  participants: string[];
}

const ParticipationPage = () => {
  const [Participation, setParticipation] = useState<Participation[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const participationRecords = [
    {
      title: "7th ILMU National Moot Court Competition",
      description: "Institute of Law, Nirma University hosted 7th ILMU National Moot Court Competition in association with The Chambers of K.T.S. Tulsi, 2017 wherein GLS Law College was represented by Shyam Naik (Sem IV), Krina Majithiya (Sem II), and Aaditya Karnavat (Sem II).",
      year: "2017",
      category: "Moot Court",
      level: "National",
      participants: ["Shyam Naik", "Krina Majithiya", "Aaditya Karnavat"],
      organizer: "Institute of Law, Nirma University",
    },
    {
      title: "Bar Council of India National Moot Court Competition",
      description: "Bar Council of India had organized a national moot court competition in Delhi on February 5, 2016. Altogether 44 teams from across the country participated in the competition. A student of GLS Law College Dhyanesh Vaishnav – Sem I (Batch 2015) represented Gujarat University and qualified in the quarter-final round.",
      year: "2016",
      category: "Moot Court",
      level: "National",
      participants: ["Dhyanesh Vaishnav"],
      organizer: "Bar Council of India",
    },
    {
      title: "6th ILNU Moot Court Competition",
      description: "Institute of Law, Nirma University had organized 6th ILNU Moot Court Competition on February 13, 2016. The event had hosted 22 teams. Of which 8 teams qualified in the quarter final round. GLS Law College team was one of the qualifying teams in the quarter final round. The successful team comprised of Aditya Dave, Kishan Brahmbhatt and Khushali Oza – students of Sem I (Batch 2015).",
      year: "2016",
      category: "Moot Court",
      level: "National",
      participants: ["Aditya Dave", "Kishan Brahmbhatt", "Khushali Oza"],
      organizer: "Institute of Law, Nirma University",
    },
    {
      title: "14th Surana International Technology Law Moot Court Competition",
      description: "14th edition of Surana International Technology Law Moot Court Competition was organized at Symbiosis Law School, Pune wherein GLS Law College was represented by Khushali Oza, Kishan Brahmbhatt, Prashant Chauhan, and Nupur Vats, students of Sem III (Batch 2015).",
      year: "2015",
      category: "Moot Court",
      level: "International",
      participants: ["Khushali Oza", "Kishan Brahmbhatt", "Prashant Chauhan", "Nupur Vats"],
      organizer: "Symbiosis Law School, Pune",
    },
    {
      title: "5th National Client Counseling Competition",
      description: "Faculty of Law, M.S. University, Baroda had organized 5th National Client Counseling Competition wherein Rutvi Brahmbhatt student of Sem IV (Batch 2015) and Varun Bharda student of Sem I (Batch 2016) represented GLS Law College.",
      year: "2015-16",
      category: "Client Counseling",
      level: "National",
      participants: ["Rutvi Brahmbhatt", "Varun Bharda"],
      organizer: "Faculty of Law, M.S. University, Baroda",
    },
    {
      title: "6th Agahi Annual National Parliamentary Debate Competition",
      description: "Rajiv Gandhi National University of Law, Punjab organized the 6th Agahi Annual National Parliamentary Debate Competition 2016 and GLS Law College was represented by Arshad Sheikh, Parth Bhagat, Priyal Shah, and Niddhi Shah; students of Sem I (Batch 2016).",
      year: "2016",
      category: "Debate",
      level: "National",
      participants: ["Arshad Sheikh", "Parth Bhagat", "Priyal Shah", "Niddhi Shah"],
      organizer: "Rajiv Gandhi National University of Law, Punjab",
    },
    {
      title: "4th Open British Parliamentary Debate Tournament",
      description: "Gujarat National Law University hosted the fourth edition of open British Parliamentary Debate tournament wherein GLS Law College was represented by Hitesh Vachani, Kavya Jhawar, Namrata Dalal, and Megha Garg; students Sem I (Batch 2016).",
      year: "2016",
      category: "Debate",
      level: "National",
      participants: ["Hitesh Vachani", "Kavya Jhawar", "Namrata Dalal", "Megha Garg"],
      organizer: "Gujarat National Law University",
    },
  ];

  const participationCategories = [
    { name: "Moot Court", count: 4, icon: Trophy, color: "from-purple-500 to-purple-600" },
    { name: "Debate", count: 2, icon: Users, color: "from-blue-500 to-blue-600" },
    { name: "Client Counseling", count: 1, icon: BookOpen, color: "from-green-500 to-green-600" },
    { name: "International", count: 1, icon: Globe, color: "from-orange-500 to-orange-600" },
  ];

  const stats = [
    { number: "7+", label: "National Events", icon: Trophy },
    { number: "1", label: "International Event", icon: Globe },
    { number: "25+", label: "Student Participants", icon: Users },
    { number: "100%", label: "Qualification Rate", icon: TrendingUp },
  ];

  useEffect(() => {
    const fetchParticipation = async () => {
      try {
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("token") || sessionStorage.getItem("token")
            : null;

        const headers: any = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch("/api/achievements?type=Participation", { headers });
        const data = await res.json();
        console.log("Data1>>", data)

        if (res.ok && data?.data) {
          setParticipation(data.data);
        } else {
          setParticipation([]);
        }
        console.log("Data2>>", data)
      } catch (err) {
        console.error("Failed to fetch Participation", err);
        setParticipation([]);
      } finally {
        setLoading(false);
      }
      console.log("Data show>>")
    };

    fetchParticipation();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 mt-32">
      {/* Hero Section */}
           <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/assets/HeroSection/HeroSection4.jpeg"
                      alt="Legal Education in India"
                      fill
                      className="object-fill lg:scale-y-[1.6]"
                      priority
                    />
                    
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
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Participation <span className="text-purple-600">Statistics</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our students actively participate in various national and international
              competitions, showcasing their skills and knowledge.
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

      {/* Participation Categories Section */}
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
              Participation <span className="text-purple-600">Categories</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our students participate in various types of competitions and events,
              from moot courts to debates and client counseling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {participationCategories.map((category, index) => (
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
                    {/* <div className="text-2xl font-bold text-purple-600 mb-1">
                      {category.count}
                    </div> */}
                    {/* <div className="text-gray-600 font-medium text-sm">Events</div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Records Section */}
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
              Participation <span className="text-purple-600">Records</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Detailed records of our students' participation in various national
              and international competitions and events.
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
            ) : Participation.length === 0 ? (
              <p className="text-center text-gray-600 py-20">
                No academic Participation achievements available.
              </p>
            ) : (
              <div className="space-y-8 max-w-7xl mx-auto">
                {Participation.map((item, i) => (
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
                              <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium text-center">
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
              Join Our Active Community
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Be part of our tradition of active participation and contribute to
              our continued success in various competitions and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Join Competitions
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                View All Events
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default ParticipationPage;
