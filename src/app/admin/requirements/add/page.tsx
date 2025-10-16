"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/Admin/AdminLayout";
import { ArrowLeft, Check } from "lucide-react";
import { useToast } from "@/components/Toast/ToastProvider";

const AddRequirementPage = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!title || !department || !deadline) {
      showToast({ type: 'error', title: 'Validation', message: 'Please fill required fields' });
      return;
    }
    setIsSubmitting(true);
    try {
      // using adminFetch if available
      const res = await import('@/lib/adminFetch').then(m => m.default('/api/requirements', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, department, deadline }) }));
      const data = await res.json();
      if (res.ok && data.success) {
        showToast({ type: 'success', title: 'Added', message: 'Requirement added' });
        router.push('/admin/requirements');
      } else {
        showToast({ type: 'error', title: 'Error', message: data?.message || 'Failed to add' });
      }
    } catch (err) {
      showToast({ type: 'error', title: 'Network', message: 'Unable to add requirement' });
    }
    setIsSubmitting(false);
  };

  return (
    <AdminLayout title="Add Requirement" subtitle="Create a new vacancy or requirement">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => router.push('/admin/requirements')} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-5 h-5" /> Back
        </button>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full px-4 py-3 border rounded" />
          <input value={department} onChange={e => setDepartment(e.target.value)} placeholder="Department" className="w-full px-4 py-3 border rounded" />
          <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className="w-full px-4 py-3 border rounded" />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={() => router.push('/admin/requirements')} className="px-4 py-2 border rounded">Cancel</button>
          <button onClick={submit} disabled={isSubmitting} className={`px-4 py-2 bg-purple-600 text-white rounded ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}>
            {isSubmitting ? 'Saving...' : (<><Check className="inline w-4 h-4 mr-2"/> Save</>)}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddRequirementPage;
