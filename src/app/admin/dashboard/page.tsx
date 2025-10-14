"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/Admin/AdminLayout";

const AdminDashboard = () => {
    const router = useRouter();

    const cardData = [
        { title: "Achievements", value: "1,245" },
        { title: "Admission", value: "1,245" },
        { title: "Calendar", value: "1,245" },
        { title: "News & Announcements", value: "1,245" },
        { title: "Faculty", value: "1,245" },
        { title: "Moot Court", value: "1,245" },
        { title: "Legal Aid Clinic", value: "1,245" },
    ];

    return (
        <AdminLayout title="Dashboard" subtitle="Welcome to the admin panel">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cardData.map((card) => (
                    <div
                        key={card.title}
                        className="bg-white shadow rounded-lg p-6 flex flex-col justify-end"
                    >
                        <h1 className="text-gray-500 text-medium">{card.title}</h1>
                        <p className="text-2xl font-bold mt-2">{card.value}</p>
                        <button 
                            onClick={() => {
                                if (card.title === "Achievements") {
                                    router.push("/admin/achievements");
                                }
                            }}
                            className="mt-4 border text-purple-600 hover:underline cursor-pointer"
                        >
                            View
                        </button>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
