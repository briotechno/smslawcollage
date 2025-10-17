"use client";

import React, { useEffect, useState } from "react";
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

interface CalendarEvent {
  date: string;
  title: string;
  description: string;
  color: string;
}

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  imageUrl: string;
}

const Resource = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [modalEvents, setModalEvents] = useState<CalendarEvent[]>([]);

  // Api call for Calender page
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("token") || sessionStorage.getItem("token")
            : null;
        const headers: any = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch("/api/calendar", { headers });
        const data = await res.json();

        if (res.ok && data?.success) {
          setEvents(data.data || []);
        } else {
          setEvents([]);
        }
      } catch (err) {
        console.error("Failed to fetch events", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Api call for Event page
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : null;
        const headers: any = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;
        const res = await fetch("/api/news", { headers });
        const data = await res.json();
        if (res.ok && data?.success) {
          setNews(data.data || []);
        } else {
          setNews([]);
        }
      } catch (err) {
        setNews([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

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
  // const events = [
  //   {
  //     date: "2025-10-15",
  //     title: "Guest Lecture on Corporate Law",
  //     description: "Join our legal expert for a corporate law session.",
  //     color: "bg-purple-600"
  //   },
  //   {
  //     date: "2025-11-15",
  //     title: "Guest Lecture on Corporate Law",
  //     description: "Join our legal expert for a corporate law session.",
  //     color: "bg-purple-600"
  //   },
  //   {
  //     date: "2025-10-15",
  //     title: "Seminar on Intellectual Property",
  //     description: "Learn about IP laws in practice.",
  //     color: "bg-blue-500"
  //   },
  //   {
  //     date: "2025-10-20",
  //     title: "Workshop on Legal Drafting",
  //     description: "Hands-on workshop on drafting contracts.",
  //     color: "bg-green-500"
  //   },
  //   {
  //     date: "2025-10-25",
  //     title: "Mock Trial Competition",
  //     description: "Participate in a simulated court trial.",
  //     color: "bg-red-500"
  //   },
  // ];

  const handleEventClick = (event: CalendarEvent) => {
    setModalEvents([event]);
    setModalOpen(true);
  };

  const firstNews = news[0];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="Knowledge-Resource-page">
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
            <BookOpen className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Knowledge <span className="text-purple-600">Resources</span>
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive learning resources, digital libraries, and academic support systems designed to enhance your legal education journey.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{resource.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{resource.description}</p>
                <div className="space-y-2">
                  {resource.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <Star className="w-4 h-4 text-purple-600" />
                      {feature}
                    </div>
                  ))}
                </div>
                {/* <button className="mt-6 w-full bg-gray-100 hover:bg-purple-600 text-gray-700 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Access Resource
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>

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

              {loading ? (
                <div className="flex flex-col items-center justify-center col-span-full py-20">
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
                  {/* <p className="text-gray-600 text-lg">Loading news...</p> */}
                </div>
              ) : !firstNews ? (
                <p className="text-center text-gray-600 col-span-full py-20">No news available.</p>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
                  <Image
                    src={firstNews.imageUrl || "/assets/Slider2.jpg"}
                    alt={firstNews.title}
                    width={600}
                    height={400}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="inset-0 flex flex-col justify-end p-6">
                    <h2 className="text-2xl font-bold text-black mb-2">{firstNews.title}</h2>
                    <p className="text-xl font-semibold text-black mb-2">{firstNews.summary}</p>
                    <p className="text-xl font-semibold text-black mb-8">{firstNews.content}</p>
                    <h3 className="absolute top-3 left-3 bg-white/90 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full shadow">
                      {firstNews.category}
                    </h3>
                    <p className="absolute text-purple-700 text-sm font-semibold px-3 py-1 rounded-full shadow text-gray-200 text-xs mt-1">
                      {new Date(firstNews.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              )}
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
