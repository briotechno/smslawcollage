"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
  LayoutDashboard, 
  User, 
  BookOpen, 
  CreditCard, 
  FileText, 
  Bell, 
  Search, 
  Menu,
  X,
  LogOut,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarLinks = [
  { name: "Dashboard", href: "/student-panel/dashboard", icon: LayoutDashboard },
  { name: "My Profile", href: "/student-panel/dashboard/profile", icon: User },
  { name: "Academics", href: "/student-panel/dashboard/academics", icon: BookOpen },
  { name: "Fees & Dues", href: "/student-panel/dashboard/fees", icon: CreditCard },
  { name: "Exam Results", href: "/student-panel/dashboard/results", icon: FileText },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [studentData, setStudentData] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Read student info from localStorage to populate the header
    const data = localStorage.getItem("studentData");
    if (data) {
      try {
        setStudentData(JSON.parse(data));
      } catch (err) {
        console.error("Failed to parse student data");
      }
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 md:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white shadow-2xl flex flex-col transition-transform duration-300 md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
              <Image src="/assets/logo2.png" alt="Logo" fill className="object-cover p-1" />
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight tracking-tight">S.M. Shah</h2>
              <p className="text-purple-200 text-xs font-medium">Law College Dashboard</p>
            </div>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-white/70 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-select-dropdown">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href}>
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-white/15 text-white shadow-inner border border-white/10' : 'text-purple-100 hover:bg-white/5 hover:text-white'}`}>
                  <link.icon className={`w-5 h-5 ${isActive ? 'text-purple-200' : 'text-purple-300'}`} />
                  <span className="font-medium text-sm">{link.name}</span>
                  {isActive && <ChevronRight className="w-4 h-4 ml-auto text-purple-300" />}
                </div>
              </Link>
            )
          })}
        </div>

        <div className="p-4 border-t border-white/10">
          <Link href="/student-panel/login" onClick={() => {
            localStorage.removeItem("studentToken");
            localStorage.removeItem("studentData");
          }}>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-purple-200 hover:bg-red-500/20 hover:text-red-100 transition-colors cursor-pointer">
              <LogOut className="w-5 h-5" />
              <span className="font-medium text-sm">Logout</span>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 shadow-sm flex items-center justify-between px-4 sm:px-8 z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 w-64 md:w-96 focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-400 transition-all">
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search resources, notices..." 
                className="bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {studentData ? `${studentData.firstName} ${studentData.lastName}` : "Loading..."}
                </p>
                <p className="text-xs text-gray-500">
                  {studentData ? studentData.enrollmentNumber : ""}
                </p>
              </div>
              <div className="h-10 w-10 bg-purple-100 text-purple-700 font-bold rounded-full flex items-center justify-center border-2 border-purple-200 shadow-sm">
                {studentData ? `${studentData.firstName[0]}${studentData.lastName[0]}`.toUpperCase() : "..."}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 custom-select-dropdown">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
}
