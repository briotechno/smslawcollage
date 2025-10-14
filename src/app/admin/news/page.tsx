"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Filter, Plus, Edit, Trash2, Calendar, Tag } from "lucide-react";
import { FaUser, FaCog, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

type NewsStatus = "Draft" | "Published" | "Archived";

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string; // ISO string or yyyy-mm-dd
  category: string;
  status: NewsStatus;
  imageUrl?: string;
}

const sampleNews: NewsItem[] = [
  {
    id: "n1",
    title: "Orientation Program for New Batch",
    summary: "Welcome session for the incoming students with faculty introductions.",
    content:
      "We cordially welcome the new batch. The orientation program will cover academic roadmap, code of conduct, and campus tour.",
    date: "2025-07-10",
    category: "Events",
    status: "Published",
  },
  {
    id: "n2",
    title: "Guest Lecture: Emerging Trends in Cyber Law",
    summary: "Industry expert session on cyber security and digital forensics.",
    content:
      "The session will focus on recent jurisprudence in cyber law, practical cases, and career pathways in this domain.",
    date: "2025-08-05",
    category: "Lectures",
    status: "Draft",
  },
];

const NewsAdminPage = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingItem, setDeletingItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    setNews(sampleNews);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/admin/login");
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, href: "/admin/dashboard" },
    { name: "Achievements", icon: <FaUser />, href: "/admin/achievements" },
    { name: "Admission", icon: <FaCog />, href: "#" },
    { name: "Calendar", icon: <FaTachometerAlt />, href: "#" },
    { name: "News & Announcements", icon: <FaUser />, href: "/admin/news", active: true },
    { name: "Faculty", icon: <FaCog />, href: "#" },
    { name: "Moot Court", icon: <FaCog />, href: "#" },
    { name: "Legal Aid Clinic", icon: <FaCog />, href: "#" },
  ];

  const filtered = news.filter((n) => {
    const q = searchTerm.toLowerCase();
    return (
      n.title.toLowerCase().includes(q) ||
      n.category.toLowerCase().includes(q) ||
      n.status.toLowerCase().includes(q) ||
      n.date.includes(searchTerm)
    );
  });

  const handleAdd = () => router.push("/admin/news/add");
  const handleEdit = (item: NewsItem) => router.push(`/admin/news/edit?id=${item.id}`);
  const openDelete = (item: NewsItem) => {
    setDeletingItem(item);
    setShowDeleteModal(true);
  };
  const handleDelete = () => {
    if (!deletingItem) return;
    setNews((prev) => prev.filter((n) => n.id !== deletingItem.id));
    setShowDeleteModal(false);
    setDeletingItem(null);
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
                (item as any).active ? "bg-white text-purple-600" : "hover:bg-white hover:text-black"
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
            <h1 className="text-2xl font-bold text-gray-900">News & Announcements</h1>
            <p className="text-gray-600">Manage all public news posts and announcements</p>
          </div>
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
        </header>

        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {/* Add */}
          <div className="mb-6 flex justify-end">
            <button onClick={handleAdd} className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add News
            </button>
          </div>

          {/* Search & Filter */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by title, category, status, date"
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

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">All News ({filtered.length})</h3>
            </div>
            {filtered.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No news found</h3>
                <p className="text-gray-500 mb-4">{searchTerm ? "Try changing your search" : "Start by creating a news post"}</p>
                {!searchTerm && (
                  <button onClick={handleAdd} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">Add First News</button>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filtered.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-500 truncate max-w-xl">{item.summary}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" /> {item.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full inline-flex items-center gap-1">
                            <Tag className="w-3 h-3" /> {item.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span
                            className={
                              item.status === "Published"
                                ? "px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full"
                                : item.status === "Draft"
                                ? "px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full"
                                : "px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                            }
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button onClick={() => handleEdit(item)} className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50" title="Edit">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button onClick={() => openDelete(item)} className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50" title="Delete">
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
        </main>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && deletingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Delete News</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete "{deletingItem.title}"? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => { setShowDeleteModal(false); setDeletingItem(null); }} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsAdminPage;


