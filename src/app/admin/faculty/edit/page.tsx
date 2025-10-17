
"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Check, Upload } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useToast } from "@/components/Toast/ToastProvider";

interface FacultyForm {
  name: string;
  title: string;
  post: string;
  experience: string;
  expertise: string;
  image: string;
}

const fetchById = async (id: string): Promise<FacultyForm | null> => {
  try {
    const res = await import('@/lib/adminFetch').then(m => m.default(`/api/faculty?id=${encodeURIComponent(id)}`));
    const data = await res.json();
    if (res.ok && data.success) return data.data as FacultyForm;
    return null;
  } catch (err) {
    return null;
  }
};

const FacultyEditContent = () => {
  const router = useRouter();
  const { showToast } = useToast();

  const params = useSearchParams();
  const id = params.get("id");
  const [form, setForm] = useState<FacultyForm | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const data = await fetchById(id);
      setForm(
        data ?? {
          name: "",
          title: "",
          post: "",
          experience: "",
          expertise: "",
          image: "/assets/Noimage.jpg",
        }
      );
    })();
  }, [id]);

  const submit = () => {
    if (!form) return;
    if (!form.name || !form.title || !form.post) {
      showToast({
        type: "error",
        title: "Validation Error",
        message: "Please fill in all required fields"
      });
      return;
    }

    (async () => {
      setIsSubmitting(true);
      try {
        const payload: any = { ...form, id };
        if (payload.image === '/assets/Noimage.jpg') payload.image = '';
        const token = typeof window !== "undefined" ? (localStorage.getItem("token") || sessionStorage.getItem("token")) : null;
        const headers: any = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await import('@/lib/adminFetch').then(m => m.default('/api/faculty', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }));
  const data = await res.json();
        if (res.ok && data.success) {
          showToast({ type: 'success', title: 'Updated', message: 'Faculty updated successfully' });
          router.push('/admin/faculty');
        } else {
          showToast({ type: 'error', title: 'Update failed', message: data?.message || 'Failed to update faculty' });
        }
      } catch (err) {
        console.error(err);
        showToast({ type: 'error', title: 'Network error', message: 'Unable to update faculty' });
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  if (!id) {
    return (
      <AdminLayout title="Faculty not found" subtitle="The requested faculty member could not be found">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Faculty not found</h1>
          <button onClick={() => router.push("/admin/faculty")} className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">Back to Faculty</button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout
      title="Edit Faculty"
      subtitle="Update faculty member profile"
    >
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => router.push("/admin/faculty")} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Back to Faculty
        </button>
        <div />
      </div>

      {!form ? (
        <div className="text-center py-12 text-gray-600 h-[80vh] flex items-center justify-center">
            <svg
              className="animate-spin h-8 w-8 text-purple-600"
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
      ) : (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title <span className="text-red-500">*</span></label>
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Post <span className="text-red-500">*</span></label>
              <input value={form.post} onChange={(e) => setForm({ ...form, post: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
              <input value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-200 bg-gray-50">
                  <img
                    src={form.image || '/assets/Noimage.jpg'}
                    alt="Faculty Preview"
                    className="object-cover w-full h-full"
                  />
                </div>
                <label className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-700 transition-colors">
                  {isUploadingImage ? (
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  ) : (
                    <Upload className="w-4 h-4" />
                  )}
                  {isUploadingImage ? 'Uploading...' : 'Upload Image'}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file || !form) return;
                      const preview = URL.createObjectURL(file);
                      setForm((p) => p ? ({ ...p, image: preview }) : p);
                      setIsUploadingImage(true);
                      try {
                        const fd = new FormData();
                        fd.append('image', file, file.name);
                        const res = await import('@/lib/adminFetch').then(m => m.default('/api/upload', { method: 'POST', body: fd }));
                        const data = await res.json();
                        if (res.ok && data.success && data.url) {
                          setForm((p) => p ? ({ ...p, image: data.url }) : p);
                          showToast({ type: 'success', title: 'Uploaded', message: 'Image uploaded successfully' });
                        } else {
                          showToast({ type: 'error', title: 'Upload failed', message: data?.message || 'Failed to upload image' });
                        }
                      } catch (err) {
                        console.error(err);
                        showToast({ type: 'error', title: 'Upload error', message: 'Unable to upload image' });
                      } finally {
                        setIsUploadingImage(false);
                      }
                    }}
                  />
                </label>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Expertise</label>
              <textarea value={form.expertise} onChange={(e) => setForm({ ...form, expertise: e.target.value })} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
            <button onClick={() => router.push("/admin/faculty")} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">Cancel</button>
            <button onClick={submit} disabled={isSubmitting} className={`px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}>
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Updating...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" /> Update Faculty
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

const FacultyEditPage = () => {
  return (
    <Suspense fallback={
      <AdminLayout title="Edit Faculty" subtitle="Update faculty member details">
        <div className="text-center py-12">
          <div className="text-gray-500">Loading...</div>
        </div>
      </AdminLayout>
    }>
      <FacultyEditContent />
    </Suspense>
  );
};

export default FacultyEditPage;


