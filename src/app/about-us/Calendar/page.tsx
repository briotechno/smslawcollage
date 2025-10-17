"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CalendarEvent {
  date: string;
  title: string;
  description: string;
  color: string;
}

const Calendarpage = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalEvents, setModalEvents] = useState<CalendarEvent[]>([]);

  // 🔹 Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
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

  // 🔹 Month setup
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay();

  // 🔹 Month navigation
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else setCurrentMonth(currentMonth - 1);
    setSelectedDay(null);
    setModalEvents([]);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else setCurrentMonth(currentMonth + 1);
    setSelectedDay(null);
    setModalEvents([]);
  };

  // 🔹 Handle day click
  const handleDayClick = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayEvents = events.filter((e) => e.date === dateStr);
    setSelectedDay(day);
    setModalEvents(dayEvents);
  };

  const handleEventClick = (event: CalendarEvent) => {
    setModalEvents([event]);
  };

  // 🔹 Loader
  const Loader = () => (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <svg
        className="animate-spin h-12 w-12 text-purple-600 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      {loading && <Loader />}
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900">
          <span className="text-purple-600 mb-12">Calendar</span>
        </h1>
        <div className="w-32 h-1 bg-purple-600 mx-auto mt-4 rounded-full mb-12"></div>

        <div className="flex justify-start mb-6">
          <Link href="/" passHref>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 my-5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start relative">
            {/* Calendar Section */}
            <div className="lg:col-span-2 text-center">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="px-4 py-1.5 rounded-md bg-white shadow hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition font-semibold flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Prev
                  </button>

                  <h2 className="text-xl font-bold text-gray-800">
                    {months[currentMonth]} {currentYear}
                  </h2>

                  <button
                    onClick={nextMonth}
                    className="px-4 py-1.5 rounded-md bg-white shadow hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition font-semibold flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Weekdays */}
                <div className="grid grid-cols-7 text-center text-lg font-semibold text-gray-700 border-b pb-2 mb-3">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d}>{d}</div>
                  ))}
                </div>

                {/* Days */}
                <div className="grid grid-cols-7 text-center text-gray-800 gap-y-3">
                  {Array.from({ length: startDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const dayEvents = events.filter((e) => e.date === dateStr);
                    const isToday =
                      day === today.getDate() &&
                      currentMonth === today.getMonth() &&
                      currentYear === today.getFullYear();

                    return (
                      <div
                        key={day}
                        onClick={() => handleDayClick(day)}
                        className={`relative flex flex-col items-center justify-center py-2 mx-1 rounded-lg cursor-pointer text-lg transition-all duration-200 
                          ${isToday
                            ? "bg-purple-600 text-white font-bold shadow-md"
                            : selectedDay === day
                            ? "bg-purple-100 text-purple-800 font-semibold ring-1 ring-purple-400"
                            : "hover:bg-purple-100"
                          }`}
                      >
                        {day}
                        <div className="flex justify-center gap-1 mt-1">
                          {dayEvents.map((event, idx) => (
                            <span
                              key={idx}
                              className={`w-2 h-2 rounded-full ${event.color}`}
                              title={event.title}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEventClick(event);
                              }}
                            ></span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Event Details Panel */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: selectedDay !== null ? 0 : 100,
                opacity: selectedDay !== null ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className={`bg-purple-50 rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 overflow-y-auto h-full max-h-[90vh] ${
                selectedDay !== null ? "block" : "hidden lg:block"
              }`}
            >
              <h3 className="text-xl font-bold text-purple-600 mb-4">
                {selectedDay
                  ? `Events on ${selectedDay} ${months[currentMonth]} ${currentYear}`
                  : "Select a date"}
              </h3>
              {modalEvents.length > 0 ? (
                modalEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="mb-4 p-4 bg-white rounded-xl shadow-md border-l-4"
                    style={{ borderColor: event.color.replace("bg-", "").replace("-500", "") }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800">
                      {event.title}
                    </h4>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No events for this day.</p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calendarpage;
