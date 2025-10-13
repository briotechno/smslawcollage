"use client";

import React, { useState } from "react";
import { FaUser, FaCog, FaSignOutAlt, FaKey, FaTachometerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setPosts(data.slice(0, 5));
    //         })
    // }, []);

    // useEffect(() => {
    //     const isLoggedIn = localStorage.getItem("isLoggedIn");
    //     if (!isLoggedIn) {
    //         // navigate("/login"); // if not logged in, go to login
    //     }
    // }, [navigate]);

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

        // Call your API here
        try {

        } catch (error) {

        }
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

const AdminDashboard = () => {
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        router.push("/login");
    };

    const menuItems = [
        { name: "Dashboard", icon: <FaTachometerAlt />, href: "#" },
        { name: "Achievements", icon: <FaUser />, href: "#" },
        { name: "Admission", icon: <FaCog />, href: "#" },
        { name: "Calendar", icon: <FaTachometerAlt />, href: "#" },
        { name: "News & Announcements", icon: <FaUser />, href: "#" },
        { name: "Faculty", icon: <FaCog />, href: "#" },
        { name: "Moot Court", icon: <FaCog />, href: "#" },
        { name: "Legal Aid Clinic", icon: <FaCog />, href: "#" },
    ];

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
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-purple-600 text-white flex flex-col">
                <div className="p-6 text-2xl font-bold border-b ">
                    Admin Panel
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 p-2 rounded-md hover:bg-white transition-colors hover:text-black"
                        >
                            {item.icon} {item.name}
                        </a>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <header className="flex items-center justify-between bg-white shadow px-6 py-4">
                    <div></div>

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
                </header>

                {/* Dashboard Content */}
                <main className="p-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cardData.map((card) => (
                            <div
                                key={card.title}
                                className="bg-white shadow rounded-lg p-6 flex flex-col justify-end"
                            >
                                <h1 className="text-gray-500 text-medium">{card.title}</h1>
                                <p className="text-2xl font-bold mt-2">{card.value}</p>
                                <button className="mt-4 border text-purple-600 hover:underline cursor-pointer">
                                    View
                                </button>
                            </div>
                        ))}
                    </div>
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

export default AdminDashboard;
