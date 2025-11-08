"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { FaLeaf } from "react-icons/fa";

interface LegalAidActivity {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

// const activities = [
//   {
//     date: "03 DEC, 2019",
//     title: "Celebration of the International Day for Persons with Disabilities",
//     excerpt:
//       "The Legal Aid Clinic of GLS Law College conducted an awareness campaign in Blind People’s Association, Ahmedabad on account of the International Day for Persons with Disabilities. The campaign majorly focused on the Rights and Benefits available to the Visually Impaired, taking into light “The Protection of Persons with Disability Act, 2016",
//     image: "/assets/Noimage.jpg",
//   },
//   {
//     date: "17 JULy, 2019",
//     title: "Lex Juris Scienticia Quiz competition",
//     excerpt:
//       "The Lex Juris Scienticia was enlightened with the gracious presence of Hon’ble Justice R.R. Tripathi, Former Judge of Gujarat High Court. The chief guest opened up with law aspirants with the role media plays in accordance with the Judiciary. One cannot categorize every case in the frame of pendency",
//     image: "/assets/Noimage.jpg",
//   },
//   {
//     date: "27 FEB, 2018",
//     title: "Legal Clinic - Bakrol",
//     excerpt:
//       "The Student of legal aid Clinic of GLS Law College and In charge Faculty members with Two High court Advocate went to the Bakrol village for providing Free legal aid to People of Bakrol on 27th Feb. 2018 which has been adopted by Gujarat Law Society.",
//     image: "/assets/Noimage.jpg",
//   },
//   {
//     date: "22 MAR, 2018",
//     title: "Legal Clinic – A Legal Initiative at Bakrol (Ahmedabad)",
//     excerpt:
//       "The Student of legal aid Clinic of GLS Law College and In charge Faculty members with Two High court Advocate went to the Bakrol village for providing Free legal aid to People of Bakrol on 31st January 2018 which has been adopted by Gujarat Law Society.",
//     image: "/assets/Noimage.jpg",
//   },
//   {
//     date: "02 SEP, 2017",
//     title: "The Launch of ELC",
//     excerpt:
//       "Official launch of the Environmental Law Clinic with dignitaries and a flagship awareness drive.",
//     image: "/assets/Noimage.jpg",
//   },
// ];

const recentActivities = [
  "Lex Juris Scienticia Quiz competition",
  "Lex Juris Intra Quiz Competition",
  "Legal Awareness Camp at Jeevansandhya Old Age Home, Mahesana",
  "Legal Clinic - Bakrol",
  "Legal Awareness Campaign under LAC at Lakhudi and Gulbai Tekra(Mahesana)",
];

const LegalAidClinicpage = () => {
  const [activities, setActivities] = useState<LegalAidActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("token") || sessionStorage.getItem("token")
            : null;

        const headers: any = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch("/api/legal-aid", { headers });
        const data = await res.json();

        if (res.ok && data?.success) {
          setActivities(data.data || []);
        } else {
          setActivities([]);
        }
      } catch (err) {
        console.error("Failed to fetch legal aid activities", err);
        setActivities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 mt-32">
      {/* HERO SECTION */}
      <header className="relative w-full h-[110vh] sm:h-[120vh] md:h-[130vh] lg:h-[60vh] overflow-hidden">
        <Image
          src="/assets/HeroSection/HeroSection7.jpeg"
          alt="Environmental Law Clinic"
          fill
          style={{ objectFit: "fill", transform: "scaleY(1.5)", marginTop: 50 }}
          priority
        />
      </header>

      {/* Recent Activities section */}
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
              <FaLeaf className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Recent <span className="text-purple-600">Activities</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Develop essential skills through structured debate training and
              practice sessions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-content-center gap-8">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/10 rounded-full mb-4">
                  <FaLeaf className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {activity}
                </h4>
                <p className="text-gray-600 text-sm">
                  A highlight event under the Environmental Law Clinic
                  initiative.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Clinic content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* CONTENT COLUMN */}
          <section className="lg:col-span-12 py-5">
            {/* Environmental Activities list */}
            <section id="activities" className="mt-8 space-y-6">
              <h3 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-6">
                Legal <span className="text-purple-600">Aid Activities</span>
              </h3>
              <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>

              <div className="space-y-4">
                {/* Loader */}
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-20">
                    <svg
                      className="animate-spin h-10 w-10 text-purple-600 mb-4"
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
                ) : activities.length === 0 ? (
                  <p className="text-center text-gray-600 py-20">
                    No activities found.
                  </p>
                ) : (
                  <div className="space-y-6">
                    {activities.map((act, idx) => (
                      <motion.article
                        key={act.id || idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.05 }}
                        className="bg-white rounded-lg shadow p-5 border border-gray-100 flex flex-col md:flex-row gap-4"
                      >
                        <div className="md:w-30 h-28 relative rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={act.image || "/assets/Noimage.jpg"}
                            alt={act.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />{" "}
                            <span>
                              {new Date(act.date).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>

                          <h4 className="mt-2 text-lg font-semibold text-purple-600">
                            {act.title}
                          </h4>
                          <p className="mt-2 text-gray-600">{act.excerpt}</p>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};
export default LegalAidClinicpage;
