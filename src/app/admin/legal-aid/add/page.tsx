"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Upload } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useToast } from "@/components/Toast/ToastProvider";

interface LegalAidActivityForm {
  date: string;
  title: string;
  excerpt: string;
  image: string; // URL or base64
}

const LegalAidAddPage = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<LegalAidActivityForm>({
    date: "",
    title: "",
    excerpt: "",
    image: "/assets/Noimage.jpg",
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const preview = URL.createObjectURL(file);
      setForm((p) => ({ ...p, image: preview }));
      setIsUploadingImage(true);
      try {
        const fd = new FormData();
        fd.append('image', file, file.name);
        const res = await import('@/lib/adminFetch').then(m => m.default('/api/upload', { method: 'POST', body: fd }));
        const data = await res.json();
        if (res.ok && data.success && data.url) {
          setForm((p) => ({ ...p, image: data.url }));
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
    };

  const submit = () => {
    if (!form.title || !form.excerpt || !form.date) {
      showToast({
        type: "error",
        title: "Validation Error",
        message: "Please fill in all required fields"
      });
      return;
    }
    (async () => {
      try {
        const payload = { ...form } as any;
        // send empty string if default placeholder
        if (payload.imageUrl === "/assets/Noimage.jpg") payload.imageUrl = "";
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        const headers: any = { "Content-Type": "application/json" };
        if (token) headers['Authorization'] = `Bearer ${token}`;
        const res = await fetch("/api/legal-aid", {
          method: "POST",
          headers,
          credentials: "include",
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          showToast({
            type: "success",
            title: "Faculty Added",
            message: `"${form.title}" has been successfully added to the faculty!`
          });
          router.push("/admin/legal-aid");
        } else {
          showToast({
            type: "error",
            title: "Create failed",
            message: data.message || "Failed to create news"
          });
        }
      } catch (err) {
        console.error(err);
        showToast({ type: "error", title: "Network error", message: "Unable to create news" });
      }
      setIsSubmitting(false);
    })();
    console.log("Create legal aid activity:", form);
    router.push("/admin/legal-aid");
  };

  return (
    <AdminLayout
      title="Add Legal Aid Activity"
      subtitle="Create a new legal aid clinic activity"
    >
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push("/admin/legal-aid")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Legal Aid Activities
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white text-black rounded-lg shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter activity title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., 03 DEC, 2019"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Activity Image </label>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-200 bg-gray-50">
                <img
                  src={form.image}
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
                {isUploadingImage ? 'Uploading...' : 'Upload'}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt <span className="text-red-500">*</span>
            </label>
            <textarea
              value={form.excerpt}
              onChange={(e) =>
                setForm({ ...form, excerpt: e.target.value })
              }
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter detailed description of the activity"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => router.push("/admin/legal-aid")}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <Check className="w-4 h-4" /> Save Activity
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default LegalAidAddPage;
