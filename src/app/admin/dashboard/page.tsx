"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Trophy, 
  UserPlus, 
  Calendar, 
  Newspaper, 
  Users, 
  Gavel, 
  Scale,
  TrendingUp,
  Activity,
  Clock,
  Star,
  Award,
  ArrowRight,
  Plus,
  Eye
} from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";

const AdminDashboard = () => {
    const router = useRouter();

    const cardData = [
        { 
            title: "Achievements", 
            value: "47", 
            change: "+12%", 
            icon: Trophy,
            color: "from-yellow-400 to-orange-500",
            bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
            route: "/admin/achievements",
            description: "Student achievements"
        },
        { 
            title: "Faculty", 
            value: "23", 
            change: "+3", 
            icon: Users,
            color: "from-blue-400 to-blue-600",
            bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
            route: "/admin/faculty",
            description: "Faculty members"
        },
        { 
            title: "News & Announcements", 
            value: "156", 
            change: "+8", 
            icon: Newspaper,
            color: "from-green-400 to-green-600",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
            route: "/admin/news",
            description: "Published articles"
        },
        { 
            title: "Legal Aid Clinic", 
            value: "89", 
            change: "+15%", 
            icon: Scale,
            color: "from-purple-400 to-purple-600",
            bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
            route: "/admin/legal-aid",
            description: "Legal aid activities"
        },
        { 
            title: "Admission", 
            value: "342", 
            change: "+45", 
            icon: UserPlus,
            color: "from-pink-400 to-pink-600",
            bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
            route: "#",
            description: "Applications received"
        },
        { 
            title: "Calendar", 
            value: "28", 
            change: "Current", 
            icon: Calendar,
            color: "from-indigo-400 to-indigo-600",
            bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
            route: "#",
            description: "Upcoming events"
        },
        { 
            title: "Moot Court", 
            value: "12", 
            change: "+2", 
            icon: Gavel,
            color: "from-red-400 to-red-600",
            bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
            route: "#",
            description: "Court exercises"
        }
    ];

    const recentActivities = [
        { action: "New achievement added", item: "Sports Championship 2024", time: "2 hours ago", icon: Trophy },
        { action: "Faculty profile updated", item: "Dr. Sarah Johnson", time: "4 hours ago", icon: Users },
        { action: "News article published", item: "Legal Aid Clinic Updates", time: "6 hours ago", icon: Newspaper },
        { action: "Legal aid activity added", item: "Community Outreach Program", time: "1 day ago", icon: Scale },
    ];

    const handleCardClick = (route: string) => {
        if (route !== "#") {
            router.push(route);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <AdminLayout title="Dashboard" subtitle="Welcome back! Here's what's happening at GLS Law College">
            <div className="space-y-8">
                {/* Stats Overview */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {cardData.map((card, index) => (
                        <motion.div
                            key={card.title}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            className={`${card.bgColor} rounded-xl p-6 cursor-pointer group hover:shadow-lg transition-all duration-300 border border-white/50`}
                            onClick={() => handleCardClick(card.route)}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-lg bg-gradient-to-r ${card.color} shadow-lg`}>
                                    <card.icon className="w-6 h-6 text-white" />
                    </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-gray-800">{card.value}</div>
                                    <div className={`text-sm font-medium ${
                                        card.change.includes('+') ? 'text-green-600' : 
                                        card.change === 'Current' ? 'text-blue-600' : 'text-gray-600'
                                    }`}>
                                        {card.change}
                </div>
            </div>
        </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">{card.title}</h3>
                                <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                                <div className="flex items-center text-sm font-medium text-purple-600 group-hover:text-purple-700 transition-colors">
                                    {card.route !== "#" ? (
                                        <>
                                            <Eye className="w-4 h-4 mr-1" />
                                            View Details
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    ) : (
                                        <>
                                            <Clock className="w-4 h-4 mr-1" />
                                            Coming Soon
                                        </>
                                    )}
                                </div>
                </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Quick Actions & Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Quick Actions */}
                    <motion.div 
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                <Activity className="w-5 h-5 mr-2 text-purple-600" />
                                Quick Actions
                            </h3>
                            <div className="space-y-3">
                                <button 
                                    onClick={() => router.push("/admin/achievements/add")}
                                    className="w-full flex items-center justify-between p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors group"
                                >
                                    <div className="flex items-center">
                                        <Plus className="w-4 h-4 mr-3 text-purple-600" />
                                        <span className="font-medium text-gray-800">Add Achievement</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                                </button>
                        <button
                                    onClick={() => router.push("/admin/faculty/add")}
                                    className="w-full flex items-center justify-between p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group"
                                >
                                    <div className="flex items-center">
                                        <Plus className="w-4 h-4 mr-3 text-blue-600" />
                                        <span className="font-medium text-gray-800">Add Faculty</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </button>
                                <button
                                    onClick={() => router.push("/admin/news/add")}
                                    className="w-full flex items-center justify-between p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group"
                                >
                                    <div className="flex items-center">
                                        <Plus className="w-4 h-4 mr-3 text-green-600" />
                                        <span className="font-medium text-gray-800">Add News</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => router.push("/admin/legal-aid/add")}
                                    className="w-full flex items-center justify-between p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors group"
                                >
                                    <div className="flex items-center">
                                        <Plus className="w-4 h-4 mr-3 text-orange-600" />
                                        <span className="font-medium text-gray-800">Add Legal Aid Activity</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                    </div>
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div 
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                <Clock className="w-5 h-5 mr-2 text-purple-600" />
                                Recent Activity
                            </h3>
                            <div className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="p-2 rounded-lg bg-purple-100 mr-4">
                                            <activity.icon className="w-4 h-4 text-purple-600" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-800">{activity.action}</p>
                                            <p className="text-sm text-gray-600">{activity.item}</p>
                                        </div>
                                        <div className="text-sm text-gray-500">{activity.time}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Performance Metrics */}
                <motion.div 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Performance Overview</h3>
                            <p className="text-purple-100">Key metrics for this month</p>
                        </div>
                        <TrendingUp className="w-12 h-12 text-purple-200" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">98%</div>
                            <div className="text-purple-200 text-sm">Content Accuracy</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">24/7</div>
                            <div className="text-purple-200 text-sm">System Uptime</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">A+</div>
                            <div className="text-purple-200 text-sm">Performance Grade</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
