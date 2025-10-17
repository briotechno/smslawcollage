"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

interface NewsItem {
    id: string;
    title: string;
    summary: string;
    content: string;
    category: string;
    date: string;
    imageUrl: string;
}

const Eventpage = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
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

    // Full-page loader component
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
            {/* <p className="text-gray-600 text-lg">Loading events...</p> */}
        </div>
    );

    return (
        <>
            {loading && <Loader />}

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
                        {!loading && news.length === 0 && (
                            <p className="text-center text-gray-600 col-span-full">No event available.</p>
                        )}
                        {!loading &&
                            news.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative rounded-2xl overflow-hidden shadow-lg mb-6"
                                >
                                    <Image
                                        src={item.imageUrl || "null"}
                                        alt={item.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-[350px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                                        <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
                                        <p className="text-xl font-semibold text-white mb-2">{item.summary}</p>
                                        <p className="text-xl font-semibold text-white mb-8">{item.content}</p>
                                        <h3 className="absolute bg-white/90 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full shadow">
                                            {item.category}
                                        </h3>
                                        <p className="absolute top-3 left-3 bg-white/90 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full shadow text-gray-200 text-xs mt-1">
                                            {new Date(item.date).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Eventpage;
