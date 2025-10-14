"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, X, Check, ArrowLeft } from "lucide-react";
import {
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaKey,
  FaTachometerAlt,
} from "react-icons/fa";

interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string;
  award: string;
  prize: string;
  participants: string[];
  event?: string;
  organizer?: string;
  level?: string;
  type: "academic" | "cultural" | "sports" | "participation";
}

const AddAchievementPage = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Achievement>>({
    title: "",
    description: "",
    year: "",
    category: "",
    award: "",
    prize: "",
    participants: [],
    event: "",
    organizer: "",
    level: "",
    type: "academic",
  });

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/admin/login");
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, href: "/admin/dashboard" },
    {
      name: "Achievements",
      icon: <FaUser />,
      href: "/admin/achievements",
      active: true,
    },
    { name: "Admission", icon: <FaCog />, href: "#" },
    { name: "Calendar", icon: <FaTachometerAlt />, href: "#" },
    { name: "News & Announcements", icon: <FaUser />, href: "#" },
    { name: "Faculty", icon: <FaCog />, href: "#" },
    { name: "Moot Court", icon: <FaCog />, href: "#" },
    { name: "Legal Aid Clinic", icon: <FaCog />, href: "#" },
  ];

  const handleAddAchievement = () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.year ||
      !formData.category
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // In a real app, this would make an API call
    console.log("Adding achievement:", formData);

    // Show success message
    alert("Achievement added successfully!");

    // Navigate back to achievements page
    router.push("/admin/achievements");
  };

  const addParticipant = () => {
    const participant = prompt("Enter participant name:");
    if (participant) {
      setFormData((prev) => ({
        ...prev,
        participants: [...(prev.participants || []), participant],
      }));
    }
  };

  const removeParticipant = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      participants: prev.participants?.filter((_, i) => i !== index) || [],
    }));
  };

  return (
    <div className="min-h-screen h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-600 text-white flex flex-col sticky top-0 h-screen overflow-y-auto">
        <div className="p-6 text-2xl font-bold border-b">Admin Panel</div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
                item.active
                  ? "bg-white text-purple-600"
                  : "hover:bg-white hover:text-black"
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
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/admin/achievements")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Achievements
            </button>
           
          </div>

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
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Form Content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Add New Achievement
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter achievement title"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter achievement description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year *
                  </label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, year: e.target.value }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., 2024"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., Moot Court, Debate, Sports"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Award
                  </label>
                  <input
                    type="text"
                    value={formData.award}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        award: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., 1st Position, Gold Medal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prize
                  </label>
                  <input
                    type="text"
                    value={formData.prize}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        prize: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., ₹1,00,000, Trophy"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event
                  </label>
                  <input
                    type="text"
                    value={formData.event}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        event: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Event name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organizer
                  </label>
                  <input
                    type="text"
                    value={formData.organizer}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        organizer: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Organizer name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Level
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        level: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Level</option>
                    <option value="Local">Local</option>
                    <option value="State">State</option>
                    <option value="National">National</option>
                    <option value="International">International</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Achievement Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        type: e.target.value as any,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="academic">Academic Achievements</option>
                    <option value="cultural">Cultural Achievements</option>
                    <option value="sports">Sports Achievements</option>
                    <option value="participation">Participation Records</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Participants
                  </label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {formData.participants?.map((participant, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-2"
                      >
                        {participant}
                        <button
                          onClick={() => removeParticipant(index)}
                          className="text-purple-500 hover:text-purple-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={addParticipant}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Participant
                  </button>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => router.push("/admin/achievements")}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddAchievement}
                  className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Save Achievement
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddAchievementPage;
