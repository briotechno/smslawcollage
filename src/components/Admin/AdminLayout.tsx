"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt, // Dashboard
  FaTrophy,         // Achievements
  FaUserTie,        // Faculty
  FaCalendarAlt,    // Calendar Events
  FaNewspaper,      // News
  FaUniversity,     // Admission
  FaBalanceScale,   // Moot Court / Legal
  FaHandsHelping,   // Legal Aid Clinic
  FaClipboardList,
  FaSignOutAlt,  // Requirements
} from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useToast } from "../Toast/ToastProvider";

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const ChangePasswordModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      showToast({
        type: "error",
        title: "Validation Error",
        message: "Please enter all passwords",
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast({
        type: "error",
        title: "Password Mismatch",
        message: "New password and confirm password do not match!",
      });
      return;
    }
    showToast({
      type: "success",
      title: "Password Updated",
      message: "Your password has been changed successfully!",
    });
    onClose();
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl text-black font-semibold mb-4">
          Change Password
        </h2>
        <div className="flex flex-col gap-3">
          {/* Current Password */}
          <div className="relative mb-3">
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="text-black border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showCurrent ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>

          {/* New Password */}
          <div className="relative mb-3">
            <input
              type={showNew ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="text-black border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showNew ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-3">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="text-black border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirm ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  title,
  subtitle,
  actions,
}) => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile drawer
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // desktop collapse
  const [authChecked, setAuthChecked] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    name?: string;
    image?: string;
  } | null>(null);

  // hydrate collapse state from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("admin.sidebarCollapsed");
      if (stored === "true") setSidebarCollapsed(true);
    } catch {}
  }, []);

  // client-side auth guard: use localStorage or sessionStorage token / isLoggedIn flag
  useEffect(() => {
    try {
      const isLoggedIn =
        localStorage.getItem("isLoggedIn") ||
        sessionStorage.getItem("isLoggedIn");
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      if (isLoggedIn === "true" || token) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
        if (!window.location.pathname.startsWith("/admin/login")) {
          window.location.href = "/admin/login";
        }
      }
    } catch (e) {
      setAuthorized(false);
      if (!window.location.pathname.startsWith("/admin/login")) {
        window.location.href = "/admin/login";
      }
    } finally {
      setAuthChecked(true);
    }
  }, []);

  // load current user from localStorage and listen for updates
  useEffect(() => {
    const loadUser = () => {
      try {
        const raw =
          typeof window !== "undefined"
            ? localStorage.getItem("user") || sessionStorage.getItem("user")
            : null;
        // const raw = localStorage.getItem('user');
        if (raw) {
          const parsed = JSON.parse(raw);
          setCurrentUser({ name: parsed.name, image: parsed.image });
          return;
        }
      } catch (e) {
        // ignore
      }
      setCurrentUser(null);
    };

    loadUser();

    const onStorage = (e: StorageEvent) => {
      if (e.key === "user") loadUser();
    };

    const onUserUpdated = () => loadUser();

    window.addEventListener("storage", onStorage);
    window.addEventListener("user-updated", onUserUpdated as EventListener);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(
        "user-updated",
        onUserUpdated as EventListener
      );
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        "admin.sidebarCollapsed",
        sidebarCollapsed ? "true" : "false"
      );
    } catch {}
  }, [sidebarCollapsed]);

  const menuItems = [
   { name: "Dashboard", icon: <FaTachometerAlt />, href: "/admin/dashboard" },
  { name: "Achievements", icon: <FaTrophy />, href: "/admin/achievements" },
  //{ name: "Admission", icon: <FaUniversity />, href: "#" },
  { name: "Calendar Events", icon: <FaCalendarAlt />, href: "/admin/Calendar" },
  { name: "News & Announcements", icon: <FaNewspaper />, href: "/admin/news" },
  { name: "Faculty", icon: <FaUserTie />, href: "/admin/faculty" },
  //{ name: "Moot Court", icon: <FaBalanceScale />, href: "#" },
  { name: "Legal Aid Clinic", icon: <FaHandsHelping />, href: "/admin/legal-aid" },
  { name: "Requirements", icon: <FaClipboardList />, href: "/admin/requirements" },
  ];

  const handleLogout = () => {
    try {
      localStorage.removeItem("isLoggedIn");
    } catch {}
    try {
      localStorage.removeItem("token");
    } catch {}
    try {
      localStorage.removeItem("user");
    } catch {}
    try {
      sessionStorage.removeItem("isLoggedIn");
    } catch {}
    try {
      sessionStorage.removeItem("token");
    } catch {}
    try {
      sessionStorage.removeItem("user");
    } catch {}
    setCurrentUser(null);
    window.location.href = "/admin/login";
  };

  // while we haven't checked auth, show a simple loader to avoid flashing admin UI
  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <svg
          className="animate-spin h-10 w-10 text-purple-600"
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
      </div>
    );
  }

  if (!authorized) {
    // if not authorized, we've already redirected; render nothing here
    return null;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 h-screen overflow-hidden bg-purple-600 text-white flex flex-col 
           transition-all duration-300 ease-in-out 
           ${
             sidebarOpen ? "translate-x-0" : "-translate-x-full"
           } md:translate-x-0 
           ${sidebarCollapsed ? "md:w-16" : "md:w-64"} w-64`}
        aria-label="Sidebar"
      >
        <div
          className={`flex items-center justify-between border-b ${
            sidebarCollapsed ? "p-4" : "p-6"
          }`}
        >
          <div
            className={`text-2xl font-bold ${
              sidebarCollapsed ? "opacity-0 md:opacity-0" : "opacity-100"
            } transition-opacity`}
          >
            Admin Panel
          </div>
          {/* Close on mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className={`flex-1 ${sidebarCollapsed ? "p-2" : "p-4"} space-y-1`}>
          {menuItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "#" && pathname.startsWith(item.href));
            return (
              <a
                key={item.name}
                href={item.href}
                title={item.name}
                className={`group flex items-center ${
                  sidebarCollapsed ? "justify-center px-2" : "gap-3 px-3"
                } py-2 rounded-md transition-all duration-200 
                  ${
                    active
                      ? "bg-white text-purple-700 shadow-sm"
                      : "hover:bg-white/10"
                  } 
                `}
              >
                <span className="text-lg shrink-0">{item.icon}</span>
                <span
                  className={`whitespace-nowrap transition-all duration-200 ${
                    sidebarCollapsed
                      ? "opacity-0 md:opacity-0 pointer-events-none w-0 overflow-hidden"
                      : "opacity-100 w-auto"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Footer */}
        <div className="md:hidden p-4 border-t border-purple-500">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-white/20"
            />
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-purple-200">Administrator</p>
            </div>
          </div>
        </div>

        {/* Collapse toggle (desktop only) */}
        <div
          className={`border-t ${
            sidebarCollapsed ? "p-2" : "p-4"
          } hidden md:block`}
        >
          <button
            onClick={() => setSidebarCollapsed((v) => !v)}
            className={`w-full bg-white/10 hover:bg-white/20 rounded-md transition-colors ${
              sidebarCollapsed ? "px-2 py-2" : "px-3 py-2"
            }`}
            aria-pressed={sidebarCollapsed}
            aria-label={
              sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
            }
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <div className="flex items-center justify-center">
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  sidebarCollapsed ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {!sidebarCollapsed && (
                <span className="ml-2 text-sm transition-opacity duration-200">
                  Collapse
                </span>
              )}
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col min-h-0 transition-[margin] duration-300`}
      >
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 sticky top-0 z-30">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            {/* Hamburger for mobile */}
            <button
              className="md:hidden inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="min-w-0 flex-1">
              {title && (
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 tracking-tight truncate">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base truncate">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {actions && <div className="hidden sm:block">{actions}</div>}

            {/* Admin Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 sm:gap-1 px-2 sm:px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-all duration-200 focus:outline-none border border-transparent hover:border-gray-200"
                aria-haspopup="menu"
                aria-expanded={dropdownOpen}
              >
                {/* Profile Image */}
                <img
                  src={currentUser?.image || "/assets/Noimage.jpg"}
                  alt={currentUser?.name || "profile"}
                  className="w-8 h-8 sm:w-8 sm:h-8 rounded-full border border-purple-500 shadow-sm object-cover"
                />

                {/* Name and Dropdown Icon */}
                <div className="flex items-center gap-1">
                  <span className="text-gray-800 font-medium hidden lg:inline text-sm sm:text-base">
                    {currentUser?.name ?? "Admin"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {dropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setDropdownOpen(false)}
                    aria-hidden="true"
                  />
                  <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-scale-in">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                    >
                      <FaSignOutAlt className="w-4 h-4" /> Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-3 sm:p-4 lg:p-6 bg-gray-50 overflow-y-auto animate-fade-in">
          <div className="max-w-full mx-auto">{children}</div>
        </main>
      </div>

      {/* Change Password Modal */}
      <ChangePasswordModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default AdminLayout;
