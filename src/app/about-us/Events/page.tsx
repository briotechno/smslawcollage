"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

const events = [
    {
        date: "2025-10-15",
        title: "Guest Lecture on Corporate Law",
        description: "Join our legal expert for a corporate law session.",
        image: "/assets/Slider2.jpg",
        color: "bg-purple-600",
    },
    {
        date: "2025-10-15",
        title: "Seminar on Intellectual Property",
        description: "Learn about IP laws in practice.",
        image: "/assets/Slider3.jpg",
        color: "bg-blue-500",
    },
    {
        date: "2025-10-20",
        title: "Workshop on Legal Drafting",
        description: "Hands-on workshop on drafting contracts.",
        image: "/assets/Slider1.jpg",
        color: "bg-green-500",
    },
    {
        date: "2025-10-25",
        title: "Mock Trial Competition",
        description: "Participate in a simulated court trial.",
        image: "/assets/Slider4.jpg",
        color: "bg-red-500",
    },
    {
        date: "2025-11-15",
        title: "Guest Lecture on Corporate Law",
        description: "Join our legal expert for a corporate law session.",
        image: "/assets/Slider2.jpg",
        color: "bg-purple-600",
    },
];

const Eventpage = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="Events-page">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl shadow-2xl p-8 md:p-12 my-5">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6 my-5">
                        <CalendarDays className="w-10 h-10 text-purple-600" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        All <span className="text-purple-600">Events</span>
                    </h1>
                    <div className="w-24 h-1 bg-purple-600 mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore all upcoming academic and co-curricular events happening across the campus.
                    </p>
                </motion.div>

                {/* Event List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
                        >
                            <div className="relative w-full h-56">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-3 left-3 bg-white/90 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full shadow">
                                    {event.date}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{event.description}</p>
                                {/* <div className="flex justify-end">
                                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-300">
                                        Know More
                                    </button>
                                </div> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Eventpage;
