"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Check } from 'lucide-react';
import { useToast } from '@/components/Toast/ToastProvider';
import AdminLayout from '@/components/Admin/AdminLayout';

const EditRequirementClient: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get('id');
  const { showToast } = useToast();

  const [form, setForm] = useState({ title: '', department: '', deadline: '' });
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileUploading, setFileUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      // Try to use prefetched data if available
      try {
        const raw = sessionStorage.getItem(`prefetch:requirement:${id}`);
        if (raw) {
          const pref = JSON.parse(raw);
          setForm({ title: pref.title || '', department: pref.department || '', deadline: pref.deadline || '' });
          if (pref.file) {
            setUploadedFileUrl(pref.file);
            try { setUploadedFileName(pref.file.split('/').pop()); } catch {}
          }
          // clear prefetch after using it
          try { sessionStorage.removeItem(`prefetch:requirement:${id}`); } catch {}
          return; // done, no fetch required
        }
      } catch (_) {}

      setLoading(true);
      try {
        const res = await import('@/lib/adminFetch').then(m => m.default(`/api/requirements?id=${encodeURIComponent(id)}`));
        const data = await res.json();
        if (res.ok && data.success && data.data) {
          setForm({ title: data.data.title || '', department: data.data.department || '', deadline: data.data.deadline || '' });
          if (data.data.file) {
            setUploadedFileUrl(data.data.file);
            try { setUploadedFileName(data.data.file.split('/').pop()); } catch {}
          }
        }
      } catch (err) {
        // ignore
      }
      setLoading(false);
    })();
  }, [id]);

  const submit = async () => {
    if (!id) return;
    if (!form.title || !form.department || !form.deadline) {
      showToast({ type: 'error', title: 'Validation', message: 'Please fill required fields' });
      return;
    }
    setIsSubmitting(true);
    try {
      const payload: any = { id, ...form };
      if (uploadedFileUrl) payload.file = uploadedFileUrl;
      const res = await import('@/lib/adminFetch').then(m => m.default('/api/requirements', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }));
      const data = await res.json();
      if (res.ok && data.success) {
        showToast({ type: 'success', title: 'Updated', message: 'Requirement updated' });
        router.push('/admin/requirements');
      } else {
        showToast({ type: 'error', title: 'Error', message: data?.message || 'Failed to update' });
      }
    } catch (err) {
      showToast({ type: 'error', title: 'Network', message: 'Unable to update' });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
      {loading ? (
        <div className="text-center py-12 text-gray-600"><svg className="animate-spin h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg></div>
      ) : (
        <div className="space-y-4">
          <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Title" className="w-full px-4 py-3 border rounded" />
          <input value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} placeholder="Department" className="w-full px-4 py-3 border rounded" />
          <input type="date" value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} className="w-full px-4 py-3 border rounded" />

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

          <div className="flex justify-end gap-3 mt-6">
            <button onClick={() => router.push('/admin/requirements')} className="px-4 py-2 border rounded">Cancel</button>
            <button onClick={submit} disabled={isSubmitting} className={`px-4 py-2 bg-purple-600 text-white rounded ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}>
              {isSubmitting ? 'Saving...' : (<><Check className="inline w-4 h-4 mr-2"/> Save</>)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditRequirementClient;
