"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Library,
  Database,
  Globe,
  Users,
  Award,
  FileText,
  Star,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Resource = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEvents, setModalEvents] = useState<{ title: string; description: string }[]>([]);

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayEvents = events.filter(e => e.date === dateStr);

    if (dayEvents.length > 0) {
      setModalEvents(dayEvents);
      setModalOpen(true);
    } else {
      setModalEvents([]);
      setModalOpen(false);
    }
  };

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

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  // First & last day of current month
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay(); // Sunday = 0

  // Handlers for month change
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDay(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDay(null);
  };

  // Events
  const events = [
    {
      date: "2025-10-15",
      title: "Guest Lecture on Corporate Law",
      description: "Join our legal expert for a corporate law session.",
      color: "bg-purple-600"
    },
    {
      date: "2025-11-15",
      title: "Guest Lecture on Corporate Law",
      description: "Join our legal expert for a corporate law session.",
      color: "bg-purple-600"
    },
    {
      date: "2025-10-15",
      title: "Seminar on Intellectual Property",
      description: "Learn about IP laws in practice.",
      color: "bg-blue-500"
    },
    {
      date: "2025-10-20",
      title: "Workshop on Legal Drafting",
      description: "Hands-on workshop on drafting contracts.",
      color: "bg-green-500"
    },
    {
      date: "2025-10-25",
      title: "Mock Trial Competition",
      description: "Participate in a simulated court trial.",
      color: "bg-red-500"
    },
  ];

  const handleEventClick = (event: { title: string; description: string; color: string }) => {
    setModalEvents([event]);
    setModalOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="Knowledge-Resource-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* Calendar + News Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 my-16 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start flex-col">
            {/* Calendar */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                <span className="text-purple-600 mb-12">Calendar</span>
              </h1>
              <div className="w-32 h-1 bg-purple-600 mx-auto mt-4 rounded-full mb-12"></div>

              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="px-4 py-1.5 rounded-md bg-white shadow hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition font-semibold"
                  >
                    &lt; Prev
                  </button>
                  <h2 className="text-xl font-bold text-gray-800">{months[currentMonth]} {currentYear}</h2>
                  <button
                    onClick={nextMonth}
                    className="px-4 py-1.5 rounded-md bg-white shadow hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition font-semibold"
                  >
                    Next &gt;
                  </button>
                </div>

                {/* Weekdays */}
                <div className="grid grid-cols-7 text-center text-lg font-semibold text-gray-700 border-b pb-2 mb-3">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-7 text-center text-gray-800 gap-y-3">
                  {Array.from({ length: startDay }).map((_, i) => (
                    <div key={`empty-${i}`}></div>
                  ))}

                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isToday =
                      day === today.getDate() &&
                      currentMonth === today.getMonth() &&
                      currentYear === today.getFullYear();

                    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const dayEvents = events.filter((e) => e.date === dateStr);

                    return (
                      <div
                        key={day}
                        onClick={() => handleDayClick(day)}
                        className={`relative flex flex-col items-center justify-center py-2 mx-1 rounded-lg cursor-pointer text-lg transition-all duration-200 
                                                    ${isToday
                            ? "bg-purple-600 text-white font-bold shadow-md"
                            : selectedDay === day
                              ? "bg-purple-100 text-purple-800 font-semibold r ring-purple-400 mx-1"
                              : "hover:bg-purple-100 mx-1"
                          }`}
                      >
                        {day}

                        {/* Multiple colored dots */}
                        <div className="flex justify-center gap-1 mt-1">
                          {dayEvents.map((event, idx) => (
                            <span
                              key={idx}
                              className={`w-2 h-2 rounded-full cursor-pointer ${event.color}`}
                              title={event.title}
                              onClick={(e) => {
                                e.stopPropagation(); // prevent parent day click
                                handleEventClick(event);
                              }}
                            ></span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 flex justify-end">
                  <Link href="/about-us/Calendar" passHref>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                      View All
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>

                {/* Open model */}
                {modalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl relative">
                      <button
                        onClick={() => setModalOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-purple-600 font-bold text-xl"
                      >
                        ×
                      </button>
                      <h3 className="text-xl font-bold text-purple-600 mb-4">Event</h3>
                      {modalEvents.map((event, idx) => (
                        <div key={idx} className="mb-3 p-3 bg-gray-50 rounded-lg shadow">
                          <h4 className="font-semibold text-gray-900">{event.title}</h4>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* News & Events Section */}
            <div className="flex flex-col">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  News <span className="text-purple-600">& Events</span>
                </h1>
                <div className="w-32 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/assets/Slider2.jpg"
                  alt="Events"
                  width={600}
                  height={400}
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Upcoming Legal Workshops
                  </h2>
                  <p className="text-gray-200 text-sm">
                    Join our interactive events and expand your legal expertise with professionals and mentors.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Additional Learning Support</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Beyond traditional resources, we provide research assistance, writing workshops, and access to legal technology tools that prepare you for modern legal practice.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <Link href="/about-us/Events" passHref>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                    View All
                    <ArrowRight className="w-5 h-5" />
                  </button>

                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resource;
