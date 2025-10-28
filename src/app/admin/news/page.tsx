"use client";

import AdminLayout from "@/components/Admin/AdminLayout";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/Toast/ToastProvider";
import { Search, Filter, Plus, Edit, Trash2, Calendar, Tag } from "lucide-react";

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
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const [itemLoadingId, setItemLoadingId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingItem, setDeletingItem] = useState<NewsItem | null>(null);

  // Fetch News
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const token = typeof window !== "undefined" ? (localStorage.getItem("token") || sessionStorage.getItem("token")) : null;
        const headers: any = {};
        if (token) headers['Authorization'] = `Bearer ${token}`;
        const res = await fetch("/api/news", { headers });
        const data = await res.json();
        if (res.ok && data?.success) {
          setNews(data.data || []);
        } else {
          setNews([]);
        }
      } catch (err) {
        setNews([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = news.filter((n) => {
    const q = searchTerm.toLowerCase();
    return (
      n.title.toLowerCase().includes(q) ||
      n.category.toLowerCase().includes(q) ||
      n.status.toLowerCase().includes(q) ||
      n.date.includes(searchTerm)
    );
  });

  // Add component
  const handleAdd = () => router.push("/admin/news/add");

  //Edit component
  const handleEdit = (item: NewsItem) => {
    setItemLoadingId(item.id);
    // navigate away; spinner will be visible until navigation
    router.push(`/admin/news/edit?id=${item.id}`);
  };

  //Delete component
  const openDelete = (item: NewsItem) => {
    setDeletingItem(item);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!deletingItem) return;
    setIsDeleting(true);
    try {
      const token = typeof window !== "undefined" ? (localStorage.getItem("token") || sessionStorage.getItem("token")) : null;
      const headers: any = {};
      if (token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(`/api/news?id=${deletingItem.id}`, { method: "DELETE", credentials: "include", headers });
      const data = await res.json();
      if (res.ok && data.success) {
        setNews((prev) => prev.filter((n) => n.id !== deletingItem.id));
        showToast({ type: "success", title: "Deleted", message: "News deleted successfully" });
      } else {
        showToast({ type: "error", title: "Delete failed", message: data.message || "Delete failed" });
      }
    } catch (err) {
      showToast({ type: "error", title: "Network error", message: "Unable to delete news" });
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
      setDeletingItem(null);
    }
  };

  return (
    <AdminLayout
      title="News & Events"
      subtitle="Manage all institutional news and announcements"
    >
      {/* Header + Add Button */}
      <div className="flex items-center justify-between mb-6">
        <div></div>
        <button
          onClick={handleAdd}
          className="w-full sm:w-auto bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" /> Add News
        </button>
      </div>

      {/* Search + Filter */}
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
                className="w-full text-black pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <button
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-700 
             rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Filter className="w-4 h-4" /> Filter
          </button>

        </div>
      </div>

      {/* Table + Card Responsive Section */}
      <div className="rounded-lg overflow-hidden">

        <div className="bg-white px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            All News ({filtered.length})
          </h3>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <svg
              className="animate-spin h-6 w-6 text-purple-600 mx-auto"
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
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No news found
            </h3>
            <p className="text-gray-500 mb-4">
              {searchTerm ? "Try changing your search" : "Start by creating a news post"}
            </p>
            {!searchTerm && (
              <button
                onClick={handleAdd}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Add First News
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-t border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filtered.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden border border-gray-200">
                          <Image
                            src={item.imageUrl || "/placeholder.png"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-3 text-gray-900 font-medium">
                        {item.title}
                      </td>
                      <td className="px-6 py-3 text-gray-600 truncate max-w-xs">
                        {item.summary}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" /> {item.date}
                      </td>
                      <td className="px-6 py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                            disabled={!!itemLoadingId}
                            title="Edit"
                          >
                            {itemLoadingId === item.id ? (
                              <svg
                                className="animate-spin h-4 w-4 text-blue-600"
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
                            ) : (
                              <Edit className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            onClick={() => openDelete(item)}
                            className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                            disabled={isDeleting && deletingItem?.id === item.id}
                            title="Delete"
                          >
                            {isDeleting && deletingItem?.id === item.id ? (
                              <svg
                                className="animate-spin h-4 w-4 text-red-600"
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
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden flex flex-col gap-4 mt-4">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col gap-2 hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openDelete(item)}
                        className="text-red-600 hover:text-red-800 p-1 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-gray-700">{item.summary}</p>

                  {/* Date + Category */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4 text-gray-400" />
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Delete Modal */}
      {showDeleteModal && deletingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Delete News</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete "{deletingItem.title}"? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => { setShowDeleteModal(false); setDeletingItem(null); }} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">Cancel</button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${isDeleting ? 'opacity-70 cursor-wait' : ''}`}
              >
                {isDeleting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Deleting...
                  </>
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default NewsAdminPage;
