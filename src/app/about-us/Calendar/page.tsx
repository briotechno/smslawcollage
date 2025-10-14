"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendarpage = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [modalEvents, setModalEvents] = useState<
        { title: string; description: string; color?: string }[]
    >([]);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();

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

    const events = [
        {
            date: "2025-10-15",
            title: "Guest Lecture on Corporate Law",
            description: "Join our legal expert for a corporate law session.",
            color: "bg-purple-600",
        },
        {
            date: "2025-10-15",
            title: "Seminar on Intellectual Property",
            description: "Learn about IP laws in practice.",
            color: "bg-blue-500",
        },
        {
            date: "2025-10-20",
            title: "Workshop on Legal Drafting",
            description: "Hands-on workshop on drafting contracts.",
            color: "bg-green-500",
        },
        {
            date: "2025-10-25",
            title: "Mock Trial Competition",
            description: "Participate in a simulated court trial.",
            color: "bg-red-500",
        },
    ];

    const handleDayClick = (day: number) => {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(
            day
        ).padStart(2, "0")}`;
        const dayEvents = events.filter((e) => e.date === dateStr);

        setSelectedDay(day);
        setModalEvents(dayEvents);
    };

    const handleEventClick = (event: {
        title: string;
        description: string;
        color?: string;
    }) => {
        setModalEvents([event]);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 my-16"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start relative">
                        {/* Calendar Section */}
                        <div className="lg:col-span-2 text-center">
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                                <span className="text-purple-600 mb-12">Calendar</span>
                            </h1>
                            <div className="w-32 h-1 bg-purple-600 mx-auto mt-4 rounded-full mb-12"></div>

                            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
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
                                        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(
                                            2,
                                            "0"
                                        )}-${String(day).padStart(2, "0")}`;
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
                                                            ? "bg-purple-100 text-purple-800 font-semibold r ring-purple-400 mx-1"
                                                            : "hover:bg-purple-100 mx-1"
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

                        {/* Event Details Panel (Right Side) */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{
                                x: selectedDay !== null ? 0 : 100,
                                opacity: selectedDay !== null ? 1 : 0,
                            }}
                            transition={{ duration: 0.4 }}
                            className={`bg-purple-50 rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 overflow-y-auto h-full max-h-[100vh] ${selectedDay !== null ? "block" : "hidden lg:block"
                                }`}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-purple-600">
                                    {selectedDay
                                        ? `Events on ${selectedDay} ${months[currentMonth]}`
                                        : "Select a date"}
                                </h3>
                                {selectedDay !== null && (
                                    <button
                                        onClick={() => {
                                            setSelectedDay(null);
                                            setModalEvents([]);
                                        }}
                                        className="text-gray-500 hover:text-purple-600 text-lg font-bold"
                                    >
                                        ×
                                    </button>
                                )}
                            </div>

                            {selectedDay !== null && modalEvents.length === 0 && (
                                <p className="text-gray-600 italic">No events on this day.</p>
                            )}

                            {modalEvents.length > 0 &&
                                modalEvents.map((event, idx) => (
                                    <div
                                        key={idx}
                                        className="mb-3 p-3 bg-white rounded-lg shadow hover:shadow-md transition"
                                    >
                                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                                        <p className="text-gray-600">{event.description}</p>
                                    </div>
                                ))}

                            {selectedDay === null && (
                                <p className="text-gray-600">Select a date to view events.</p>
                            )}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Calendarpage;
