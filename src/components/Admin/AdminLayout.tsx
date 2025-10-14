"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaUser, FaCog, FaSignOutAlt, FaKey, FaTachometerAlt } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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

  const handleSubmit = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please enter all passwords");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    alert("Password changed successfully!");
    onClose();
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl text-black font-semibold mb-4">Change Password</h2>
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

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title, subtitle, actions }) => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, href: "/admin/dashboard" },
    { name: "Achievements", icon: <FaUser />, href: "/admin/achievements" },
    { name: "Admission", icon: <FaCog />, href: "#" },
    { name: "Calendar", icon: <FaTachometerAlt />, href: "#" },
    { name: "News & Announcements", icon: <FaUser />, href: "/admin/news" },
    { name: "Faculty", icon: <FaCog />, href: "/admin/faculty" },
    { name: "Moot Court", icon: <FaCog />, href: "#" },
    { name: "Legal Aid Clinic", icon: <FaCog />, href: "#" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-600 text-white flex flex-col sticky top-0 h-screen overflow-y-auto">
        <div className="p-6 text-2xl font-bold border-b">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
                pathname === item.href || 
                (item.href !== "#" && pathname.startsWith(item.href))
                  ? 'bg-white text-purple-600' 
                  : 'hover:bg-white hover:text-black'
              }`}
            >
              {item.icon} {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-30">
          <div>
            {title && <h1 className="text-2xl font-bold text-gray-900">{title}</h1>}
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>

          <div className="flex items-center gap-4">
            {actions && <div>{actions}</div>}
            
            {/* Admin Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <span className="text-gray-700 font-medium">Admin</span>
                <img
                  src="https://i.pravatar.cc/40"
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-300"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <FaKey /> Change Password
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {children}
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