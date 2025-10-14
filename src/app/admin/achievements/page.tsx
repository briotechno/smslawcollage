"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Medal,
  Users,
  Calendar,
  Star,
  ExternalLink,
  Target,
  TrendingUp,
  Activity,
  Zap,
  Music,
  Palette,
  Theater,
  BookOpen,
  GraduationCap,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  ChevronDown,
  X,
  Check,
} from "lucide-react";
import { useRouter } from "next/navigation";
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
  type: 'academic' | 'cultural' | 'sports' | 'participation';
}

const AdminAchievementsPage = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<'academic' | 'cultural' | 'sports' | 'participation'>('academic');
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingAchievement, setDeletingAchievement] = useState<Achievement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const achievementTypes = [
    { value: 'academic', label: 'Academic Achievements', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
    { value: 'cultural', label: 'Cultural Achievements', icon: Music, color: 'from-purple-500 to-purple-600' },
    { value: 'sports', label: 'Sports Achievements', icon: Trophy, color: 'from-green-500 to-green-600' },
    { value: 'participation', label: 'Participation Records', icon: Users, color: 'from-orange-500 to-orange-600' },
  ];

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
    // Filter achievements by selected type
    const filtered = sampleAchievements.filter(achievement => achievement.type === selectedType);
    setAchievements(filtered);
  }, [selectedType]);

  const filteredAchievements = achievements.filter(achievement =>
    achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    achievement.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    achievement.year.includes(searchTerm)
  );

  const handleAddAchievement = () => {
    router.push('/admin/achievements/add');
  };

  const handleEditAchievement = (achievement: Achievement) => {
    router.push(`/admin/achievements/edit?id=${achievement.id}`);
  };

  const handleDeleteAchievement = () => {
    if (!deletingAchievement) return;

    setAchievements(prev => prev.filter(achievement => achievement.id !== deletingAchievement.id));
    setShowDeleteModal(false);
    setDeletingAchievement(null);
  };

  const openDeleteModal = (achievement: Achievement) => {
    setDeletingAchievement(achievement);
    setShowDeleteModal(true);
  };

  return (
    <AdminLayout 
      title="Achievements Management" 
      subtitle="Manage and organize all achievements"
    >
      {/* Achievement Type Selector */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Achievement Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievementTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setSelectedType(type.value as any)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedType === type.value
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 bg-white hover:border-purple-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center`}>
                  <type.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className={`font-medium ${selectedType === type.value ? 'text-purple-700' : 'text-gray-900'}`}>
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

      {/* Add Achievement Button */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={handleAddAchievement}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Achievement
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search achievements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Achievements Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {achievementTypes.find(t => t.value === selectedType)?.label} ({filteredAchievements.length})
          </h3>
        </div>

        {filteredAchievements.length === 0 ? (
          <div className="text-center py-12">
            <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No achievements found</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm ? 'Try adjusting your search criteria' : 'Start by adding a new achievement'}
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
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Achievement
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Award
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Participants
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAchievements.map((achievement) => (
                  <tr key={achievement.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {achievement.title}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {achievement.description}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {achievement.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                        {achievement.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {achievement.award}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {achievement.participants.slice(0, 2).map((participant, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                          >
                            {participant}
                          </span>
                        ))}
                        {achievement.participants.length > 2 && (
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                            +{achievement.participants.length - 2} more
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleEditAchievement(achievement)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => openDeleteModal(achievement)}
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
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && deletingAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Delete Achievement</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "{deletingAchievement.title}"? This action cannot be undone.
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
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Delete Achievement
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminAchievementsPage;
