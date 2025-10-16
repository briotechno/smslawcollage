"use client";

import React, { useState, useEffect } from "react";
import {
  Trophy,
  Users,
  Music,
  BookOpen,
  Plus,
  Edit,
  Trash2,
  Search,
} from "lucide-react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useToast } from "@/components/Toast/ToastProvider";

interface Participant {
  name: string;
  rollNo: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string;
  award: string;
  prize: string;
  // participants: string[];
  participants: Participant[];
  event?: string;
  organizer?: string;
  level?: string;
  type: "academic" | "cultural" | "sports" | "participation";
}

const AdminAchievementsPage = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [selectedType, setSelectedType] = useState<
    "academic" | "cultural" | "sports" | "participation"
  >("academic");
  const [loading, setLoading] = useState(false);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingAchievement, setDeletingAchievement] =
    useState<Achievement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const achievementTypes = [
    {
      value: "academic",
      label: "Academic Achievements",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
    },
    {
      value: "cultural",
      label: "Cultural Achievements",
      icon: Music,
      color: "from-purple-500 to-purple-600",
    },
    {
      value: "sports",
      label: "Sports Achievements",
      icon: Trophy,
      color: "from-green-500 to-green-600",
    },
    {
      value: "participation",
      label: "Participation Records",
      icon: Users,
      color: "from-orange-500 to-orange-600",
    },
  ];

  // sample data
  // const sampleAchievements: Achievement[] = [
  //   {
  //     id: "1",
  //     title: "National Moot Court Competition Winners",
  //     description:
  //       "Mr. Aditya Dave, Mr. Monarch Pandya and Mr. Nathan Gomes bagged the winning Trophy.",
  //     year: "2024",
  //     category: "Moot Court",
  //     award: "1st Position",
  //     prize: "₹1,00,000",
  //     participants: [
  //       "Mr. Aditya Dave",
  //       "Mr. Monarch Pandya",
  //       "Mr. Nathan Gomes",
  //     ],
  //     type: "academic",
  //   },
  //   {
  //     id: "2",
  //     title: "Athena Moot Court Competition Winners",
  //     description:
  //       "Mr. Niel Bhatt, Mr. Jaydev Chudasma and Ms. Radhika Buddha secured first position.",
  //     year: "2019",
  //     category: "Moot Court",
  //     award: "1st Position",
  //     prize: "₹3,000",
  //     participants: [
  //       "Mr. Niel Bhatt",
  //       "Mr. Jaydev Chudasma",
  //       "Ms. Radhika Buddha",
  //     ],
  //     type: "cultural",
  //   },
  // ];

  // useEffect(() => {
  //   const filtered = sampleAchievements.filter(
  //     (a) => a.type === selectedType
  //   );
  //   setAchievements(filtered);
  // }, [selectedType]);

  const filteredAchievements = achievements.filter(
    (achievement) =>
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.year.includes(searchTerm)
  );

  const handleAddAchievement = () => {
    router.push("/admin/achievements/add");
  };

  const handleEditAchievement = (achievement: Achievement) => {
    router.push(`/admin/achievements/edit?id=${achievement.id}`);
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        const headers: any = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch("/api/achievements", { headers });
        const data = await res.json();

        if (res.ok && data?.success) {
          setAchievements(data.data || []);
        } else {
          setAchievements([]);
        }
      } catch (err) {
        console.error(err);
        setAchievements([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleDeleteAchievement = async () => {
    if (!deletingAchievement) return;

    setLoading(true);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const headers: any = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(`/api/achievements?id=${deletingAchievement.id}`, {
        method: "DELETE",
        headers,
      });

      const data = await res.json();

      if (res.ok && data?.success) {
        setAchievements((prev) =>
          prev.filter((a) => a.id !== deletingAchievement.id)
        );
        showToast({
          type: "success",
          title: "Achievement Deleted",
          message: `"${deletingAchievement.title}" has been successfully deleted.`,
        });
      } else {
        showToast({
          type: "error",
          title: "Deletion Failed",
          message: data?.message || "Something went wrong while deleting.",
        });
      }
    } catch (err) {
      console.error(err);
      showToast({
        type: "error",
        title: "Deletion Failed",
        message: "Something went wrong while deleting.",
      });
    } finally {
      setShowDeleteModal(false);
      setDeletingAchievement(null);
      setLoading(false);
    }
  };

  return (
    <AdminLayout
      title="Achievements Management"
      subtitle="Manage and organize all achievements"
    >
      {/* Achievement Type Selector */}
      <div className="mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          Select Achievement Type
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setSelectedType(type.value as any)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${selectedType === type.value
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 bg-white hover:border-purple-300"
                }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center`}
                >
                  <type.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div
                    className={`font-medium ${selectedType === type.value
                      ? "text-purple-700"
                      : "text-gray-900"
                      }`}
                  >
                    {type.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {achievements.length} achievements
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Add Button + Search */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search achievements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-black pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          onClick={handleAddAchievement}
          className="bg-purple-600 text-white px-5 py-2.5 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Achievement
        </button>
      </div>

      {/* Achievements Table / Cards */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="inline-flex items-center gap-3 p-6 rounded-lg">
              <svg
                className="animate-spin h-8 w-8 text-purple-600"
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
              <p className="text-gray-600 font-medium">Loading achievements...</p>
            </div>
          </div>
        ) : filteredAchievements.length === 0 ? (
          <div className="text-center py-12 px-4">
            <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No achievements found
            </h3>
            <p className="text-gray-500 mb-4">
              {searchTerm
                ? "Try adjusting your search criteria"
                : "Start by adding a new achievement"}
            </p>
            {!searchTerm && (
              <button
                onClick={handleAddAchievement}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Add First Achievement
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {[
                      "Achievement",
                      "Year",
                      "Category",
                      "Award",
                      "Participants",
                      "Actions",
                    ].map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAchievements.map((achievement) => (
                    <tr key={achievement.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {achievement.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {achievement.year}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {achievement.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {achievement.award}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {achievement.participants.slice(0, 2).map((p, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                            >
                              {p.name}
                            </span>
                          ))}
                          {achievement.participants.length > 2 && (
                            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                              +{achievement.participants.length - 2} more
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEditAchievement(achievement)}
                            className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setDeletingAchievement(achievement);
                              setShowDeleteModal(true);
                            }}
                            className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="block md:hidden divide-y divide-gray-200">
              {filteredAchievements.map((achievement) => (
                <div key={achievement.id} className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {achievement.title}
                    </h4>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditAchievement(achievement)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setDeletingAchievement(achievement);
                          setShowDeleteModal(true);
                        }}
                        className="text-red-600 hover:text-red-900 p-1 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    {achievement.description}
                  </p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>🏆 {achievement.award}</div>
                    <div>📅 {achievement.year}</div>
                    <div>🎯 {achievement.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && deletingAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full mx-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Delete Achievement
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Are you sure you want to delete{" "}
              <strong>{deletingAchievement.title}</strong>? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeletingAchievement(null);
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>

              <button
                onClick={handleDeleteAchievement}
                disabled={loading}
                className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${loading ? "opacity-70 cursor-wait" : ""
                  }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 mr-2 inline-block text-white"
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
                    Deleting...
                  </>
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminAchievementsPage;
