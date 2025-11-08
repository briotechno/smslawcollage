"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Trophy,
  Medal,
  Users,
  Calendar,
} from "lucide-react";
import Image from "next/image";

interface Achievement {
  title: string;
  description: string;
  year: string;
  category: string;
  award: string;
  prize: string;
  participants: string[];
}

const AcademicAchievementsPage = () => {
  // const [activities, setActivities] = React.useState<any[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = React.useState(true);

  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 40 },
  //   show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  // };

  // const achievements = [
  //   {
  //     title: "National Moot Court Competition Winners",
  //     description: "Mr. Aditya Dave, Mr. Monarch Pandya and Mr. Nathan Gomes - students of Semester IX bagged the winning Trophy and the cash prize of Rs 1 Lakh in The National Moot Court Competition organised by L.J.School of Law.",
  //     year: "2024",
  //     category: "Moot Court",
  //     award: "1st Position",
  //     prize: "₹1,00,000",
  //     participants: ["Mr. Aditya Dave", "Mr. Monarch Pandya", "Mr. Nathan Gomes"],
  //   },
  //   {
  //     title: "Best Student Advocate Award",
  //     description: "Mr. Aditya Dave also bagged the trophy and a cash prize of Rs. 10,000 for the award of the Best Student Advocate in the same competition.",
  //     year: "2024",
  //     category: "Individual Excellence",
  //     award: "Best Student Advocate",
  //     prize: "₹10,000",
  //     participants: ["Mr. Aditya Dave"],
  //   },
  //   {
  //     title: "National Debate Competition Selection",
  //     description: "Ms. Pooja Brambhatt (semester 2) and Ms. Nandini Hirani (semester 4) have been selected at the State Level for the National Debate Competition on Reservations – Swabhiman, organised by MIT, Pune.",
  //     year: "2024",
  //     category: "Debate",
  //     award: "State Level Selection",
  //     prize: "National Participation",
  //     participants: ["Ms. Pooja Brambhatt", "Ms. Nandini Hirani"],
  //   },
  //   {
  //     title: "POCSO Act National Project",
  //     description: "Ms. Nandini Hirani (semester 4) was selected as one of the best speakers for the same competition and was selected to work on a national project of The Protection of Children from Sexual Offences (POCSO) Act.",
  //     year: "2024",
  //     category: "Research Project",
  //     award: "National Project Selection",
  //     prize: "Research Opportunity",
  //     participants: ["Ms. Nandini Hirani"],
  //   },
  //   {
  //     title: "University Gold Medal - 2018",
  //     description: "Ms. Rhishika Srivastav (student of First Year) was awarded 'Notary Mrs. Dharmishtha R. Bhatt and Advocate Mr. Rushikumar N. Bhatt' Gold medal by Gujarat University for Securing highest percentage in University Examination 2018; amongst all streams of Integrated Law i.e. B.B.A.LL.B, B.Com LL.B and B.A.LL.B.",
  //     year: "2018",
  //     category: "Academic Excellence",
  //     award: "Gold Medal",
  //     prize: "Highest Percentage",
  //     participants: ["Ms. Rhishika Srivastav"],
  //   },
  //   {
  //     title: "University Gold Medal - 2017",
  //     description: "Ms. Kavya Jhawar (student of First Year) was awarded 'Notary Mrs. Dharmistha R. Bhatt and Advocate Mr. Rushikumar N. Bhatt' Gold Medal by the president of India Shri Ramnath Kovind by Gujarat University for securing highest percentage in University Examination 2017; among all streams of Integrated Law i.e. B.B.A LL.B, B.COM LL.B and B.A.LL.B.",
  //     year: "2017",
  //     category: "Academic Excellence",
  //     award: "Gold Medal",
  //     prize: "Highest Percentage",
  //     participants: ["Ms. Kavya Jhawar"],
  //   },
  //   {
  //     title: "University Gold Medal - 2016",
  //     description: "Ms. Khushali Oza (student of First Year) was awarded 'Notary Mrs. Dharmishtha R. Bhatt and Advocate Mr. Rushikumar N. Bhatt' Gold Medal by Gujarat University for Securing highest percentage in University Examination 2016; amongst all streams of Integrated Law i.e. B.B.A.LL.B, B.Com LL.B and B.A.LL.B.",
  //     year: "2016",
  //     category: "Academic Excellence",
  //     award: "Gold Medal",
  //     prize: "Highest Percentage",
  //     participants: ["Ms. Khushali Oza"],
  //   },
  //   {
  //     title: "State Level Moot Court Competition",
  //     description: "Mr. Kishan Brahmbhatt (VIII), Varun Bharda (VI) and Megha Garg (VI) secured first position with cash prize of Rs. 6000 at State Level (Gujarati) Moot court Competition at Parul Institute of Law, Parul University, 2019.",
  //     year: "2019",
  //     category: "Moot Court",
  //     award: "1st Position",
  //     prize: "₹6,000",
  //     participants: ["Mr. Kishan Brahmbhatt", "Varun Bharda", "Megha Garg"],
  //   },
  //   {
  //     title: "National Moot Court Competition",
  //     description: "Ms. Riyah Sindhi (VI), Mr. Arshad Shaikh (VI) and Ms. Tanmayi Poojari (IV) secured 1st Runner-up position with cash prize of rupees 50,000, at 3rd Late Girishbhai Patel National Moot Court competition at L.J. College, Mehasana, 2019.",
  //     year: "2019",
  //     category: "Moot Court",
  //     award: "1st Runner-up",
  //     prize: "₹50,000",
  //     participants: ["Ms. Riyah Sindhi", "Mr. Arshad Shaikh", "Ms. Tanmayi Poojari"],
  //   },
  //   {
  //     title: "Research Article Publication",
  //     description: "Article 44: A dead Letter to be revived, a research article by Ms. Khushali Oza was Published by Gujarat Law Reporter in September issue 2016 citation [2016 (3) 57 (3) G.L.R]. Also many legal web sites like Legal Service India and Legally India also published her Article.",
  //     year: "2016",
  //     category: "Research Publication",
  //     award: "Published Article",
  //     prize: "Academic Recognition",
  //     participants: ["Ms. Khushali Oza"],
  //   },
  // ];

  // const categories = [
  //   { name: "Moot Court", count: 4, icon: Trophy },
  //   { name: "Academic Excellence", count: 3, icon: Medal },
  //   { name: "Research", count: 2, icon: BookOpen },
  //   { name: "Debate", count: 1, icon: Users },
  // ];

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("token") || sessionStorage.getItem("token")
            : null;

        const headers: any = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch("/api/achievements?type=academic", { headers });
        const data = await res.json();
        console.log("Data1>>", data)

        if (res.ok && data?.data) {
          setAchievements(data.data);
        } else {
          setAchievements([]);
        }
        console.log("Data2>>", data)
      } catch (err) {
        console.error("Failed to fetch achievements", err);
        setAchievements([]);
      } finally {
        setLoading(false);
      }
      console.log("Data show>>")
    };

    fetchAchievements();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 mt-32">
      {/* Hero Section */}
      <section className="relative w-full min-h-[120vh] sm:min-h-[120vh] md:min-h-[130vh] lg:min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/HeroSection/HeroSection1.jpeg"
            alt="Academic Achievements"
            fill
            style={{ objectFit: "fill",transform:'scaleY(1.6)' }}
            priority
          />
          
        </div>

        
      </section>

      {/* Categories Overview Section */}
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
              <BookOpen className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Achievement <span className="text-purple-600">Categories</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our students excel across various academic domains, from moot court
              competitions to research publications and academic excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
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
                  <category.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {category.count}
                </div>
                <div className="text-gray-600 font-medium">Achievements</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements List Section */}
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
              Notable <span className="text-purple-600">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive list of our students' outstanding academic
              achievements and recognitions.
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
          ) : achievements.length === 0 ? (
            <p className="text-center text-gray-600 py-20">
              No academic achievements available.
            </p>
          ) : (
            <div className="space-y-8 max-w-7xl mx-auto">
              {achievements.map((item, i) => (
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
                          {item.participants.map((p:any, idx) => (
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
              Join Our Academic Excellence
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Be part of our tradition of academic excellence and contribute to
              our continued success in legal education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Apply for Admission
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                View All Achievements
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default AcademicAchievementsPage;
