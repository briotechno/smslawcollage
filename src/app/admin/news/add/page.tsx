"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Plus, X, Upload } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/Toast/ToastProvider";

type NewsStatus = "Draft" | "Published" | "Archived";

interface NewsItemForm {
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  status: NewsStatus;
  imageUrl?: string;
  tags: string[];
}

const AddNewsPage = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [form, setForm] = useState<NewsItemForm>({
    title: "",
    summary: "",
    content: "",
    date: "",
    category: "General",
    status: "Draft",
    imageUrl: "/assets/Noimage.jpg",
    tags: [],
  });

  // const addTag = () => {
  //   const tag = prompt("Enter tag");
  //   if (tag) setForm((p) => ({ ...p, tags: [...p.tags, tag] }));
  // };

  const handleAddTag = () => {
    if (!newTag.trim()) {
      showToast({
        type: "error",
        title: "Empty Field",
        message: "Please enter a tag name.",
      });
      return;
    }
    setForm((prev) => ({
      ...prev,
      tags: [...prev.tags, newTag.trim()],
    }));
    showToast({
      type: "success",
      title: "Tag Added",
      message: `"${newTag.trim()}" has been added successfully.`,
    });
    setNewTag("");
    setShowModal(false);
  };

  const removeTag = (i: number) => setForm((p) => ({ ...p, tags: p.tags.filter((_, idx) => idx !== i) }));

  // const submit = () => {
  //   if (!form.title || !form.summary || !form.date || !form.status) {
  //     alert("Please fill required fields (title, summary, date, status)");
  //     return;
  //   }
  //   console.log("Create news:", form);
  //   alert("News created successfully!");
  //   router.push("/admin/news");
  // };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // show a temporary preview while uploading
    const preview = URL.createObjectURL(file);
    setForm((p) => ({ ...p, imageUrl: preview }));
    setIsUploadingImage(true);
    try {
      const fd = new FormData();
      fd.append("image", file, file.name);
      const res = await import("@/lib/adminFetch").then((m) => m.default("/api/upload", { method: "POST", body: fd }));
      const data = await res.json();
      if (res.ok && data.success && data.url) {
        setForm((p) => ({ ...p, imageUrl: data.url }));
        showToast({ type: "success", title: "Uploaded", message: "Image uploaded successfully" });
      } else {
        showToast({ type: "error", title: "Upload failed", message: data?.message || "Failed to upload image" });
      }
    } catch (err) {
      console.error(err);
      showToast({ type: "error", title: "Upload error", message: "Unable to upload image" });
    } finally {
      setIsUploadingImage(false);
    }
  };

  const submit = () => {
    setIsSubmitting(true);
    if (
      !form.title || !form.summary || !form.date || !form.content || !form.status
    ) {
      showToast({
        type: "error",
        title: "Validation Error",
        message: "Please fill in all required fields"
      });
      setIsSubmitting(false);
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
        const res = await fetch("/api/news", {
          method: "POST",
          headers,
          credentials: "include",
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          showToast({ type: "success", title: "News Added", message: `"${form.title}" added` });
          router.push("/admin/news");
        } else {
          showToast({ type: "error", title: "Create failed", message: data.message || "Failed to create news" });
        }
      } catch (err) {
        console.error(err);
        showToast({ type: "error", title: "Network error", message: "Unable to create news" });
      }
      setIsSubmitting(false);
    })();
  };

  return (
    <AdminLayout
      title="Add News"
      subtitle="Create a new news article or announcement"
    >
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push("/admin/news")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to News
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white text-black rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Add News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Title 
                <span className="text-red-500">*</span></label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter news title"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Summary <span className="text-red-500">*</span></label>
              <textarea
                value={form.summary}
                onChange={(e) => setForm({ ...form, summary: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter brief summary"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Content <span className="text-red-500">*</span></label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter full content"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date <span className="text-red-500">*</span></label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <input
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g., Events, Announcements"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status <span className="text-red-500">*</span></label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value as NewsStatus })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Archived">Archived</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image </label>
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-200 bg-gray-50">
                  <img
                    src={form.imageUrl}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
              <div className="space-y-2">
                {form.tags.map((tag, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="px-3 py-2 bg-gray-100 rounded-md flex-1">{tag}</span>
                    <button onClick={() => removeTag(i)} className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={() => setShowModal(true)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Add Tag
                </button>

                {/* Tag Modal */}
                <AnimatePresence>
                  {showModal && (
                    <motion.div
                      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Add Tag
                        </h3>
                        <input
                          type="text"
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
                          placeholder="Enter tag name"
                        />

                        <div className="flex justify-end gap-3">
                          <button
                            onClick={() => {
                              setShowModal(false);
                              setNewTag("");
                            }}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleAddTag}
                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition flex items-center gap-2"
                          >
                            <Check className="w-4 h-4" /> Save
                          </button>
                        </div>

                        <button
                          onClick={() => setShowModal(false)}
                          className="absolute top-3 right-3 text-gray-800"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => router.push("/admin/news")}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={submit}
              disabled={isSubmitting}
              className={`px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" /> Save News
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddNewsPage;