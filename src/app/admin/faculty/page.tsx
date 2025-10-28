
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Filter, Plus, Edit, Trash2, GraduationCap } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useToast } from "@/components/Toast/ToastProvider";

interface FacultyItem {
  id: string;
  name: string;
  title: string;
  post: string;
  experience: string;
  expertise: string;
  image: string;
}

const seed: FacultyItem[] = [];

const FacultyAdminPage = () => {
  const router = useRouter();
  const [list, setList] = useState<FacultyItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const [itemLoadingId, setItemLoadingId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [search, setSearch] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState<FacultyItem | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await import('@/lib/adminFetch').then(m => m.default('/api/faculty'));
        const data = await res.json();
        if (res.ok && data?.success) {
          setList(data.data || []);
        } else {
          setList([]);
          showToast({ type: 'error', title: 'Load failed', message: data?.message || 'Unable to load faculty' });
        }
      } catch (err) {
        setList([]);
        showToast({ type: 'error', title: 'Network error', message: 'Unable to load faculty' });
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = list.filter((m) => {
    const q = search.toLowerCase();
    return (
      m.name.toLowerCase().includes(q) ||
      m.title.toLowerCase().includes(q) ||
      m.post.toLowerCase().includes(q) ||
      m.expertise.toLowerCase().includes(q)
    );
  });

  const add = () => router.push("/admin/faculty/add");
  const edit = (m: FacultyItem) => {
    setItemLoadingId(m.id);
    router.push(`/admin/faculty/edit?id=${m.id}`);
  };
  const askDelete = (m: FacultyItem) => {
    setDeleting(m);
    setShowDelete(true);
  };
  const confirmDelete = async () => {
    if (!deleting) return;
    setIsDeleting(true);
    try {
      const res = await import('@/lib/adminFetch').then(m => m.default(`/api/faculty?id=${encodeURIComponent(deleting.id)}`, { method: 'DELETE' }));
      const data = await res.json();
      if (res.ok && data.success) {
        setList((prev) => prev.filter((x) => x.id !== deleting.id));
        showToast({ type: 'success', title: 'Deleted', message: 'Faculty removed' });
      } else {
        showToast({ type: 'error', title: 'Delete failed', message: data?.message || 'Unable to delete' });
      }
    } catch (err) {
      showToast({ type: 'error', title: 'Network error', message: 'Unable to delete faculty' });
    } finally {
      setIsDeleting(false);
      setShowDelete(false);
      setDeleting(null);
    }
  };

  return (
    <AdminLayout
      title="Faculty"
      subtitle="Manage mentors and faculty profiles"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <button
          onClick={add}
          className="w-full sm:w-auto bg-purple-600 text-white px-5 py-2.5 rounded-lg 
               hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" /> Add Faculty
        </button>
      </div>

      {/* serch */}
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

      <div className="rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-white border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Faculty ({filtered.length})</h3>
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center text-center py-16 px-4">
            <div className="inline-flex items-center gap-3 p-6 rounded-lg ">
              <svg className="animate-spin h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <GraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No entries found</h3>
            <p className="text-gray-500 mb-4">Start by adding a faculty member</p>
            <button onClick={add} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">Add First Faculty</button>
          </div>
        ) : (
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faculty</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expertise</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filtered.map((m) => (
                  <tr key={m.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={m.image == "" ? "/assets/Noimage.jpg" : m.image}
                          alt={m.name}
                          className="w-10 h-10 rounded object-cover border"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{m.name}</div>
                          <div className="text-sm text-gray-500">{m.experience}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{m.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{m.post}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 truncate max-w-[400px]">
                      {m.expertise}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => edit(m)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                          title="Edit"
                          disabled={!!itemLoadingId}
                        >
                          {itemLoadingId === m.id ? (
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
                          onClick={() => askDelete(m)}
                          className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                          title="Delete"
                          disabled={isDeleting && deleting?.id === m.id}
                        >
                          {isDeleting && deleting?.id === m.id ? (
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
        )}
        <div className="block md:hidden space-y-4 mt-4">
          {filtered.map((m) => (
            <div key={m.id} className="border rounded-lg p-4 shadow-sm bg-white">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={m.image == "" ? "/assets/Noimage.jpg" : m.image}
                  alt={m.name}
                  className="w-12 h-12 rounded object-cover border"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{m.name}</h4>
                  <p className="text-gray-500 text-sm">{m.title}</p>
                </div>
                <div className="flex justify-end gap-3 mt-3">
                  <button
                    onClick={() => edit(m)}
                    className="text-blue-600 hover:text-blue-800"
                    disabled={!!itemLoadingId}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => askDelete(m)}
                    className="text-red-600 hover:text-red-800"
                    disabled={isDeleting && deleting?.id === m.id}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium text-gray-800">Post:</span> {m.post}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium text-gray-800">Expertise:</span> {m.expertise}
              </p>

            </div>
          ))}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDelete && deleting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-sm sm:max-w-md w-[90%] sm:w-full mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Delete Faculty</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete "{deleting.name}"?</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => { setShowDelete(false); setDeleting(null); }} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={confirmDelete} disabled={isDeleting} className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${isDeleting ? 'opacity-70 cursor-wait' : ''}`}>
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

export default FacultyAdminPage;


