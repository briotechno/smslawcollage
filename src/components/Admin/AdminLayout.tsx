"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaCog, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

type AdminActiveKey = "dashboard" | "achievements" | "news" | "admission" | "calendar" | "faculty" | "moot" | "legal";

export default function AdminLayout({
  active,
  title,
  subtitle,
  actions,
  children,
}: {
  active: AdminActiveKey;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { key: "dashboard", name: "Dashboard", icon: <FaTachometerAlt />, href: "/admin/dashboard" },
    { key: "achievements", name: "Achievements", icon: <FaUser />, href: "/admin/achievements" },
    { key: "admission", name: "Admission", icon: <FaCog />, href: "#" },
    { key: "calendar", name: "Calendar", icon: <FaTachometerAlt />, href: "#" },
    { key: "news", name: "News & Announcements", icon: <FaUser />, href: "/admin/news" },
    { key: "faculty", name: "Faculty", icon: <FaCog />, href: "/admin/faculty" },
    { key: "moot", name: "Moot Court", icon: <FaCog />, href: "#" },
    { key: "legal", name: "Legal Aid Clinic", icon: <FaCog />, href: "#" },
  ] as const;

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-600 text-white flex flex-col sticky top-0 h-screen overflow-y-auto">
        <div className="p-6 text-2xl font-bold border-b">Admin Panel</div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
                active === item.key ? "bg-white text-purple-600" : "hover:bg-white hover:text-black"
              }`}
            >
              {item.icon} {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-0">
        <header className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-30">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-4">
            {actions}
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 focus:outline-none">
                <span className="text-gray-700 font-medium">Admin</span>
                <img src="https://i.pravatar.cc/40" alt="profile" className="w-10 h-10 rounded-full border-2 border-gray-300" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <button onClick={handleLogout} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}


