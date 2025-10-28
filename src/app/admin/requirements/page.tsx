"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useToast } from "@/components/Toast/ToastProvider";
import { useRouter } from "next/navigation";
import { Plus, Edit, Trash2, Calendar } from "lucide-react";

interface Requirement {
  id: string;
  title: string;
  department: string;
  deadline: string;
  file?: string;
}

const AdminRequirementsPage = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [list, setList] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState(false);
  const [editLoadingId, setEditLoadingId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleting, setDeleting] = useState<Requirement | null>(null);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await import("@/lib/adminFetch").then((m) =>
          m.default("/api/requirements")
        );
        const data = await res.json();
        if (res.ok && data.success) setList(data.data || []);
        else setList([]);
      } catch {
        setList([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const add = () => router.push("/admin/requirements/add");

  const edit = async (r: Requirement) => {
    setEditLoadingId(r.id);
    try {
      const res = await import("@/lib/adminFetch").then((m) =>
        m.default(`/api/requirements?id=${encodeURIComponent(r.id)}`)
      );
      const data = await res.json();
      if (res.ok && data.success && data.data) {
        sessionStorage.setItem(
          `prefetch:requirement:${r.id}`,
          JSON.stringify(data.data)
        );
        router.push(`/admin/requirements/edit?id=${r.id}`);
      } else {
        showToast({
          type: "error",
          title: "Fetch failed",
          message: data?.message || "Unable to load requirement",
        });
      }
    } catch {
      showToast({
        type: "error",
        title: "Network error",
        message: "Unable to fetch requirement",
      });
    } finally {
      setEditLoadingId(null);
    }
  };

  const askDelete = (r: Requirement) => {
    setDeleting(r);
    setShowDelete(true);
  };

  const confirmDelete = async () => {
    if (!deleting) return;
    setDeleteLoading(true);
    try {
      const res = await import("@/lib/adminFetch").then((m) =>
        m.default("/api/requirements", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: deleting.id }),
        })
      );
      const data = await res.json();
      if (res.ok && data.success) {
        setList((prev) => prev.filter((x) => x.id !== deleting.id));
        showToast({
          type: "success",
          title: "Deleted",
          message: "Requirement deleted successfully",
        });
      } else {
        showToast({
          type: "error",
          title: "Delete failed",
          message: data?.message || "Failed to delete",
        });
      }
    } catch {
      showToast({
        type: "error",
        title: "Network error",
        message: "Unable to delete",
      });
    } finally {
      setDeleteLoading(false);
      setShowDelete(false);
      setDeleting(null);
    }
  };

  return (
    <AdminLayout
      title="Requirements"
      subtitle="Manage vacancy and requirement listings"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 sm:gap-0">
        <button
          onClick={add}
          className="w-full sm:w-auto bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700 
                     transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" /> Add Requirement
        </button>
      </div>

      {/* Table Section */}
      <div className=" rounded-lg overflow-hidden">
        <div className="px-4 sm:px-6 py-4 bg-white border-b border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            All Requirements ({list.length})
          </h3>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Title
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Department
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Deadline
                </th>
                <th className="px-6 py-3 text-right font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={4} className="text-center py-8">
                    <div className="flex justify-center">
                      <svg
                        className="animate-spin h-6 w-6 text-purple-600"
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
                  </td>
                </tr>
              ) : list.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-10 text-gray-500">
                    No requirements found.
                  </td>
                </tr>
              ) : (
                list.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 truncate">{r.title}</td>
                    <td className="px-6 py-4">{r.department}</td>
                    <td className="px-6 py-4">{r.deadline}</td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <button
                        onClick={() => edit(r)}
                        disabled={!!editLoadingId}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => askDelete(r)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="block md:hidden space-y-4 mt-4">
          {list.length === 0 && !loading && (
            <div className="text-center text-gray-500 text-sm">
              No requirements found.
            </div>
          )}
          {list.map((r) => (
            <div
              key={r.id}
              className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                  {r.title}
                </h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => edit(r)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => askDelete(r)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Department:</span> {r.department}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Calendar className="w-4 h-4 text-gray-500" />
                {r.deadline}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDelete && deleting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] sm:max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Delete Requirement
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete “{deleting.title}”?
            </p>
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => {
                  setShowDelete(false);
                  setDeleting(null);
                }}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleteLoading}
                className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex justify-center items-center gap-2"
              >
                {deleteLoading && (
                  <svg
                    className="animate-spin h-4 w-4"
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
                )}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminRequirementsPage;
