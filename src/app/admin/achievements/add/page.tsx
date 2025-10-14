"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, X, Check, ArrowLeft } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";

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
    <AdminLayout 
      title="Add New Achievement" 
      subtitle="Create a new achievement record"
    >
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push("/admin/achievements")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Achievements
        </button>
      </div>

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
                rows={4}
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
                  setFormData((prev) => ({
                    ...prev,
                    year: e.target.value,
                  }))
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
                placeholder="e.g., Moot Court"
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
                placeholder="e.g., 1st Position"
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
                placeholder="e.g., ₹1,00,000"
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
                placeholder="e.g., National Moot Court Competition"
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
                placeholder="e.g., L.J. School of Law"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Level
              </label>
              <input
                type="text"
                value={formData.level}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    level: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g., National"
              />
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
                <option value="academic">Academic</option>
                <option value="cultural">Cultural</option>
                <option value="sports">Sports</option>
                <option value="participation">Participation</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Participants
              </label>
              <div className="space-y-2">
                {formData.participants?.map((participant, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="px-3 py-2 bg-gray-100 rounded-md flex-1">
                      {participant}
                    </span>
                    <button
                      onClick={() => removeParticipant(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={addParticipant}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Participant
                </button>
              </div>
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
    </AdminLayout>
  );
};

export default AddAchievementPage;