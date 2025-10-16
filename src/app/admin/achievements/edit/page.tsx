"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Plus,
  X,
  Check,
  ArrowLeft,
} from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useToast } from "@/components/Toast/ToastProvider";
import { motion, AnimatePresence } from "framer-motion";

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
  type: 'academic' | 'cultural' | 'sports' | 'participation';
}

const EditAchievementContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const achievementId = searchParams.get('id');
  const { showToast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [newParticipant, setNewParticipant] = useState("");
  const [formData, setFormData] = useState<Partial<Achievement>>({
    title: '',
    description: '',
    year: '',
    category: '',
    award: '',
    prize: '',
    participants: [],
    event: '',
    organizer: '',
    level: '',
    type: 'academic'
  });

  // Sample data - in real app, this would come from API
  const sampleAchievements: Achievement[] = [
    {
      id: '1',
      title: "National Moot Court Competition Winners",
      description: "Mr. Aditya Dave, Mr. Monarch Pandya and Mr. Nathan Gomes - students of Semester IX bagged the winning Trophy and the cash prize of Rs 1 Lakh in The National Moot Court Competition organised by L.J.School of Law.",
      year: "2024",
      category: "Moot Court",
      award: "1st Position",
      prize: "₹1,00,000",
      participants: ["Mr. Aditya Dave", "Mr. Monarch Pandya", "Mr. Nathan Gomes"],
      type: 'academic'
    },
    {
      id: '2',
      title: "Athena Moot Court Competition Winners",
      description: "Mr. Niel Bhatt (II), Mr. Jaydev Chudasma (IV) and Ms. Radhika Buddha (VI) secured first position with cash prize of rupees 3000/- at Athena Moot Court Competition hosted by National Literary and Cultural Competition - L.J. College, Mehasana, 2019.",
      year: "2019",
      category: "Moot Court",
      award: "1st Position",
      prize: "₹3,000",
      participants: ["Mr. Niel Bhatt", "Mr. Jaydev Chudasma", "Ms. Radhika Buddha"],
      event: "Athena Moot Court Competition",
      type: 'cultural'
    },
    {
      id: '3',
      title: "Badminton Silver Medal - Titanium Jural",
      description: "Ms. Kajal Shah (Sem VI) secured Silver medal in badminton in the event 'Titanium Jural' organized by GLS Law College.",
      year: "2024",
      category: "Badminton",
      award: "Silver Medal",
      prize: "Individual Excellence",
      participants: ["Ms. Kajal Shah"],
      event: "Titanium Jural",
      type: 'sports'
    },
    {
      id: '4',
      title: "7th ILMU National Moot Court Competition",
      description: "Institute of Law, Nirma University hosted 7th ILMU National Moot Court Competition in association with The Chambers of K.T.S. Tulsi, 2017 wherein GLS Law College was represented by Shyam Naik (Sem IV), Krina Majithiya (Sem II), and Aaditya Karnavat (Sem II).",
      year: "2017",
      category: "Moot Court",
      award: "Participation",
      prize: "National Level",
      participants: ["Shyam Naik", "Krina Majithiya", "Aaditya Karnavat"],
      organizer: "Institute of Law, Nirma University",
      level: "National",
      type: 'participation'
    }
  ];

  useEffect(() => {
    if (achievementId) {
      // Find the achievement by ID
      const achievement = sampleAchievements.find(a => a.id === achievementId);
      if (achievement) {
        setFormData(achievement);
      }
    }
  }, [achievementId]);

  const handleAddParticipant = () => {
    if (!newParticipant.trim()) {
      showToast({
        type: "error",
        title: "Empty Field",
        message: "Please enter a participant name.",
      });
      return;
    }
    setFormData((prev) => ({
      ...prev,
      participants: [...(prev.participants || []), newParticipant.trim()],
    }));
    showToast({
      type: "success",
      title: "Participant Added",
      message: `${newParticipant.trim()} has been added to the achievement.`,
    });
    setNewParticipant("");
    setShowModal(false);
  };

  const handleUpdateAchievement = () => {
    if (!formData) return;
    if (
      !formData.title ||
      !formData.description ||
      !formData.year ||
      !formData.category
    ) {
      showToast({
        type: "error",
        title: "Validation Error",
        message: "Please fill in all required fields"
      });
      return;
    }

    // In a real app, this would make an API call
    console.log("Update news:", formData);

    // Show success message
    showToast({
      type: "success",
      title: "Participant Updated",
      message: `"${formData.title}" has been successfully added!`
    });

    // Navigate back to achievements page
    router.push("/admin/achievements");
  };

  // const addParticipant = () => {
  //   const participant = prompt("Enter participant name:");
  //   if (participant) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       participants: [...(prev.participants || []), participant],
  //     }));
  //   }
  // };

  const removeParticipant = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      participants: prev.participants?.filter((_, i) => i !== index) || [],
    }));
  };

  if (!achievementId) {
    return (
      <AdminLayout title="Achievement not found" subtitle="The requested achievement could not be found">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Achievement not found</h1>
          <button
            onClick={() => router.push("/admin/achievements")}
            className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
          >
            Back to Achievements
          </button>
        </div>
      </AdminLayout>
    );
  }

  if (!formData.title) {
    return (
      <AdminLayout title="Edit Achievement" subtitle="Update achievement record">
        <div className="text-center py-12">
          <div className="text-gray-500">Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout
      title="Edit Achievement"
      subtitle="Update achievement record"
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
              Edit Achievement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
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
                Description <span className="text-red-500">*</span>
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
                Year <span className="text-red-500">*</span>
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
                Category <span className="text-red-500">*</span>
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
                  onClick={() => setShowModal(true)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Participant
                </button>

                {/* Participant Modal */}
                <AnimatePresence>
                  {showModal && (
                    <motion.div
                      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Add Participant
                        </h3>
                        <input
                          type="text"
                          value={newParticipant}
                          onChange={(e) => setNewParticipant(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
                          placeholder="Enter participant name"
                        />

                        <div className="flex justify-end gap-3">
                          <button
                            onClick={() => {
                              setShowModal(false);
                              setNewParticipant("");
                            }}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleAddParticipant}
                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition flex items-center gap-2"
                          >
                            <Check className="w-4 h-4" />
                            Save
                          </button>
                        </div>

                        <button
                          onClick={() => setShowModal(false)}
                          className="absolute top-3 right-3 text-gray-800"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              onClick={handleUpdateAchievement}
              className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              Update Achievement
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

const EditAchievementPage = () => {
  return (
    <Suspense fallback={
      <AdminLayout title="Edit Achievement" subtitle="Update achievement details">
        <div className="text-center py-12">
          <div className="text-gray-500">Loading...</div>
        </div>
      </AdminLayout>
    }>
      <EditAchievementContent />
    </Suspense>
  );
};

export default EditAchievementPage;