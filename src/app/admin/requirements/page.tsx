"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useToast } from "@/components/Toast/ToastProvider";
import { useRouter } from "next/navigation";
import { Plus, Edit, Trash2 } from "lucide-react";

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
        const res = await import('@/lib/adminFetch').then(m => m.default('/api/requirements'));
        const data = await res.json();
        if (res.ok && data.success) setList(data.data || []);
        else setList([]);
      } catch (err) {
        setList([]);
      }
      setLoading(false);
    })();
  }, []);

  const add = () => router.push('/admin/requirements/add');
  const edit = async (r: Requirement) => {
    // show per-row spinner while we prefetch the single requirement
    setEditLoadingId(r.id);
    try {
      const res = await import('@/lib/adminFetch').then(m => m.default(`/api/requirements?id=${encodeURIComponent(r.id)}`));
      const data = await res.json();
      if (res.ok && data.success && data.data) {
        try {
          sessionStorage.setItem(`prefetch:requirement:${r.id}`, JSON.stringify(data.data));
        } catch {}
        router.push(`/admin/requirements/edit?id=${r.id}`);
      } else {
        showToast({ type: 'error', title: 'Fetch failed', message: data?.message || 'Unable to load requirement' });
      }
    } catch (err) {
      showToast({ type: 'error', title: 'Network', message: 'Unable to fetch requirement' });
    }
    setEditLoadingId(null);
  };
  const askDelete = (r: Requirement) => { setDeleting(r); setShowDelete(true); };

  const confirmDelete = async () => {
    if (!deleting) return;
    setDeleteLoading(true);
    try {
      const res = await import('@/lib/adminFetch').then(m => m.default('/api/requirements', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: deleting.id }) }));
      const data = await res.json();
      if (res.ok && data.success) {
        setList(prev => prev.filter(x => x.id !== deleting.id));
        showToast({ type: 'success', title: 'Deleted', message: 'Requirement deleted' });
      } else {
        showToast({ type: 'error', title: 'Delete failed', message: data?.message || 'Failed to delete' });
      }
    } catch (err) {
      showToast({ type: 'error', title: 'Network', message: 'Unable to delete' });
    }
    setDeleteLoading(false);
    setShowDelete(false);
    setDeleting(null);
  };

  return (
    <AdminLayout title="Requirements" subtitle="Manage vacancy and requirement listings">
      <div className="flex items-center justify-between mb-6">
        <div />
        <button onClick={add} className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" /> Add Requirement
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Requirements ({list.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            {loading ? (
              <tbody className="bg-white">
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-600">
                 <div className="flex justify-center w-full"> <svg className="animate-spin h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg></div>
                  </td>
                </tr>
              </tbody>
            ) : list.length === 0 ? (
              <tbody className="bg-white">
                <tr>
                  <td colSpan={4} className="px-6 py-20 text-center text-gray-500">
                    <div className="space-y-3">
                      <div className="text-lg font-medium">No requirements found</div>
                      <div className="text-sm">There are currently no requirement records. Click below to add one.</div>
                      <div>
                        <button onClick={add} className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                          <Plus className="w-4 h-4" /> Add Requirement
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="bg-white divide-y divide-gray-200">
                {list.map(r => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4"><div className="text-sm font-medium text-gray-900 max-w-xs truncate">{r.title}</div></td>
                    <td className="px-6 py-4"><div className="text-sm text-gray-900">{r.department}</div></td>
                    <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{r.deadline}</div></td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => edit(r)} disabled={!!editLoadingId} className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 flex items-center justify-center" title="Edit">
                          {editLoadingId === r.id ? (
                            <svg className="animate-spin h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
                          ) : (
                            <Edit className="w-4 h-4" />
                          )}
                        </button>
                        <button onClick={() => askDelete(r)} className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 flex items-center justify-center" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>

      {showDelete && deleting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Delete Requirement</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete "{deleting.title}"?</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => { setShowDelete(false); setDeleting(null); }} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={confirmDelete} disabled={deleteLoading} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-2 justify-center">
                {deleteLoading ? (
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
                ) : null}
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
