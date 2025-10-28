"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Filter, Plus, Edit, Trash2, Calendar } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useToast } from "@/components/Toast/ToastProvider";

interface LegalAidActivity {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

const seed: LegalAidActivity[] = [
  {
    id: "la1",
    date: "03 DEC, 2019",
    title:
      "Celebration of the International Day for Persons with Disabilities",
    excerpt:
      "The Legal Aid Clinic of GLS Law College conducted an awareness campaign in Blind People's Association, Ahmedabad on account of the International Day for Persons with Disabilities.",
    image: "/assets/Noimage.jpg",
  },
  {
    id: "la2",
    date: "17 JUL, 2019",
    title: "Lex Juris Scienticia Quiz competition",
    excerpt:
      "The Lex Juris Scienticia was enlightened with the gracious presence of Hon'ble Justice R.R. Tripathi, Former Judge of Gujarat High Court.",
    image: "/assets/Noimage.jpg",
  },
  {
    id: "la3",
    date: "27 FEB, 2018",
    title: "Legal Clinic - Bakrol",
    excerpt:
      "Students of the Legal Aid Clinic provided free legal aid to the people of Bakrol village.",
    image: "/assets/Noimage.jpg",
  },
  {
    id: "la4",
    date: "22 MAR, 2018",
    title: "Legal Clinic – A Legal Initiative at Bakrol (Ahmedabad)",
    excerpt:
      "The Legal Aid Clinic team visited Bakrol village with two High Court advocates for free consultations.",
    image: "/assets/Noimage.jpg",
  },
  {
    id: "la5",
    date: "02 SEP, 2017",
    title: "The Launch of ELC",
    excerpt:
      "Official launch of the Environmental Law Clinic with dignitaries and awareness drive.",
    image: "/assets/Noimage.jpg",
  },
];

const LegalAidAdminPage = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [list, setList] = useState<LegalAidActivity[]>([]);
  const [search, setSearch] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState<LegalAidActivity | null>(null);
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Initialize with seed data
  useEffect(() => setList(seed), []);

  // Fetch API data
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("token") || sessionStorage.getItem("token")
            : null;
        const headers: any = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch("/api/legal-aid", { headers });
        const data = await res.json();

        if (res.ok && data?.success) {
          setList(data.data || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  // filter
  const filtered = list.filter((m) => {
    const q = search.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.excerpt.toLowerCase().includes(q) ||
      m.date.toLowerCase().includes(q)
    );
  });

  const add = () => router.push("/admin/legal-aid/add");
  const edit = (m: LegalAidActivity) =>
    router.push(`/admin/legal-aid/edit?id=${m.id}`);

  const askDelete = (m: LegalAidActivity) => {
    setDeleting(m);
    setShowDelete(true);
  };

  const confirmDelete = async () => {
    if (!deleting) return;
    setIsDeleting(true);

    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("token") || sessionStorage.getItem("token")
          : null;
      const headers: any = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(`/api/legal-aid?id=${deleting.id}`, {
        method: "DELETE",
        headers,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setList((prev) => prev.filter((x) => x.id !== deleting.id));
        showToast({
          type: "success",
          title: "Activity Deleted",
          message: `"${deleting.title}" deleted successfully.`,
        });
      } else {
        showToast({
          type: "error",
          title: "Deletion Failed",
          message: data.message || "Failed to delete the activity.",
        });
      }
    } catch (err) {
      console.error(err);
      showToast({
        type: "error",
        title: "Error",
        message: "Something went wrong while deleting.",
      });
    } finally {
      setDeleting(null);
      setShowDelete(false);
      setIsDeleting(false);
    }
  };

  return (
    <AdminLayout
      title="Legal Aid Activities"
      subtitle="Manage legal aid clinic activities and events"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
        <button
          onClick={add}
          className="w-full sm:w-auto bg-purple-600 text-white px-5 py-2.5 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Activity
        </button>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, description, date"
              className="w-full text-black pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-700 
                   rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Filter className="w-4 h-4" /> Filter
          </button>

        </div>
      </div>

      {/* Table View (Desktop) */}
      <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            All Activities ({filtered.length})
          </h3>
        </div>
 
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-600" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No activities found
            </h3>
            <p className="text-gray-500 mb-4">
              Start by adding a legal aid activity.
            </p>
            <button
              onClick={add}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Add Activity
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Activity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Excerpt
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filtered.map((m) => (
                  <tr key={m.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        src={m.image}
                        alt={m.title}
                        className="w-12 h-12 rounded object-cover border"
                      />
                      <span className="text-sm font-medium text-gray-900 truncate max-w-xs">
                        {m.title}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        {m.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 truncate max-w-md">
                      {m.excerpt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => edit(m)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => askDelete(m)}
                          className="text-red-600 hover:text-red-800"
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

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4 mt-4">
        {filtered.map((m) => (
          <div
            key={m.id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="relative w-14 h-14 rounded overflow-hidden border border-gray-200 bg-gray-50 flex-shrink-0">
                  <img
                    src={m.image || "/assets/Noimage.jpg"}
                    alt={m.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 leading-snug">
                    {m.title}
                  </h4>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" /> {m.date}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 mt-1">
                  <button
                    onClick={() => edit(m)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => askDelete(m)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-3">{m.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {showDelete && deleting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 max-w-sm sm:max-w-md w-[90%] mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Delete Activity
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete{" "}
              <strong className="text-gray-900">"{deleting.title}"</strong>?
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowDelete(false);
                  setDeleting(null);
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={isDeleting}
                className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center justify-center ${isDeleting ? "opacity-70 cursor-wait" : ""
                  }`}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default LegalAidAdminPage;
