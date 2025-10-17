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
  const [fileUploading, setFileUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [notificationUploading, setNotificationUploading] = useState(false);
  const [notificationFileUrl, setNotificationFileUrl] = useState<string | null>(null);
  const [notificationFileName, setNotificationFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!title || !department || !deadline) {
      showToast({ type: 'error', title: 'Validation', message: 'Please fill required fields' });
      return;
    }
    setIsSubmitting(true);
    try {
      // using adminFetch if available
      const payload: any = { title, department, deadline };
      if (uploadedFileUrl) payload.file = uploadedFileUrl;
      if (notificationFileUrl) payload.notification_file = notificationFileUrl;
      const res = await import('@/lib/adminFetch').then(m => m.default('/api/requirements', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }));
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Requirement Document (PDF)</label>
              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-700">{uploadedFileName ?? 'No file selected'}</div>
                <label className="inline-flex items-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-700">
                  {fileUploading ? (
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
                  ) : (
                    'Upload PDF'
                  )}
                  <input
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      // validate mime
                      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
                        showToast({ type: 'error', title: 'Invalid file', message: 'Only PDF files are allowed' });
                        return;
                      }
                      setFileUploading(true);
                      try {
                        const fd = new FormData();
                        fd.append('image', file, file.name);
                        const res = await import('@/lib/adminFetch').then(m => m.default('/api/upload', { method: 'POST', body: fd }));
                        const data = await res.json();
                        if (res.ok && data.success && data.url) {
                          setUploadedFileUrl(data.url);
                          setUploadedFileName(file.name);
                          showToast({ type: 'success', title: 'Uploaded', message: 'PDF uploaded successfully' });
                        } else {
                          showToast({ type: 'error', title: 'Upload failed', message: data?.message || 'Failed to upload PDF' });
                        }
                      } catch (err) {
                        console.error(err);
                        showToast({ type: 'error', title: 'Upload error', message: 'Unable to upload PDF' });
                      } finally {
                        setFileUploading(false);
                      }
                    }}
                  />
                </label>
              </div>
            </div>

            {/* Notification File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Notification File (PDF)</label>
              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-700">{notificationFileName ?? 'No file selected'}</div>
                <label className="inline-flex items-center gap-2 px-3 py-2 bg-purple-500 text-white rounded-md cursor-pointer hover:bg-purple-600">
                  {notificationUploading ? (
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
                  ) : (
                    'Upload PDF'
                  )}
                  <input
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
                        showToast({ type: 'error', title: 'Invalid file', message: 'Only PDF files are allowed' });
                        return;
                      }
                      setNotificationUploading(true);
                      try {
                        const fd = new FormData();
                        fd.append('image', file, file.name);
                        const res = await import('@/lib/adminFetch').then(m => m.default('/api/upload', { method: 'POST', body: fd }));
                        const data = await res.json();
                        if (res.ok && data.success && data.url) {
                          setNotificationFileUrl(data.url);
                          setNotificationFileName(file.name);
                          showToast({ type: 'success', title: 'Uploaded', message: 'Notification PDF uploaded' });
                        } else {
                          showToast({ type: 'error', title: 'Upload failed', message: data?.message || 'Failed to upload PDF' });
                        }
                      } catch (err) {
                        showToast({ type: 'error', title: 'Upload error', message: 'Unable to upload PDF' });
                      } finally {
                        setNotificationUploading(false);
                      }
                    }}
                  />
                </label>
              </div>
            </div>
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
