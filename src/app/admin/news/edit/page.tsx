"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Check, Plus, X } from "lucide-react";
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

// Mock fetch by id
const mockFetchById = async (id: string): Promise<NewsItemForm | null> => {
  const map: Record<string, NewsItemForm> = {
    n1: {
      title: "Orientation Program for New Batch",
      summary: "Welcome session for the incoming students with faculty introductions.",
      content: "We cordially welcome the new batch. The orientation program will cover academic roadmap, code of conduct, and campus tour.",
      date: "2025-07-10",
      category: "Events",
      status: "Published",
      imageUrl: "",
      tags: ["orientation", "students"],
    },
    n2: {
      title: "Guest Lecture: Emerging Trends in Cyber Law",
      summary: "Industry expert session on cyber security and digital forensics.",
      content: "The session will focus on recent jurisprudence in cyber law, practical cases, and career pathways in this domain.",
      date: "2025-08-05",
      category: "Lectures",
      status: "Draft",
      imageUrl: "",
      tags: ["cyber law", "lecture"],
    },
  };
  return map[id] ?? null;
};

const EditNewsContent = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [newTag, setNewTag] = useState("");
  const params = useSearchParams();
  const id = params.get("id");
  const [form, setForm] = useState<NewsItemForm | null>(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const data = await mockFetchById(id);
      setForm(
        data ?? {
          title: "",
          summary: "",
          content: "",
          date: "",
          category: "General",
          status: "Draft",
          imageUrl: "",
          tags: [],
        }
      );
    })();
  }, [id]);

  // const addTag = () => {
  //   const tag = prompt("Enter tag");
  //   if (tag) setForm((p) => p ? ({ ...p, tags: [...p.tags, tag] }) : null);
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
    if (!form) return; // guard
    setForm({
      ...form,
      tags: [...form.tags, newTag.trim()],
    });
    showToast({
      type: "success",
      title: "Tag Added",
      message: `"${newTag.trim()}" has been added successfully.`,
    });
    setNewTag("");
    setShowModal(false);
  };

  const removeTag = (i: number) => setForm((p) => p ? ({ ...p, tags: p.tags.filter((_, idx) => idx !== i) }) : null);


  const submit = () => {
    if (!form) return;
    if (
      !form.title || !form.summary || !form.date || !form.content || !form.status
    ) {
      showToast({
        type: "error",
        title: "Validation Error",
        message: "Please fill in all required fields"
      });
      return;
    }

    // In a real app, this would make an API call
    console.log("Update news:", form);

    // Show success message
    showToast({
      type: "success",
      title: "News Updated",
      message: `"${form.title}" has been successfully added!`
    });

    // Navigate back to achievements page
    router.push("/admin/news");
  };

  if (!id) {
    return (
      <AdminLayout title="News not found" subtitle="The requested news article could not be found">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">News not found</h1>
          <button
            onClick={() => router.push("/admin/news")}
            className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
          >
            Back to News
          </button>
        </div>
      </AdminLayout>
    );
  }

  if (!form) {
    return (
      <AdminLayout title="Edit News" subtitle="Update news article">
        <div className="text-center py-12">
          <div className="text-gray-500">Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout
      title="Edit News"
      subtitle="Update news article"
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
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Edit News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Title <span className="text-red-500">*</span></label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="https://example.com/image.jpg"
              />
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
              className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Check className="w-4 h-4" /> Update News
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

const EditNewsPage = () => {
  return (
    <Suspense fallback={
      <AdminLayout title="Edit News" subtitle="Update news item">
        <div className="text-center py-12">
          <div className="text-gray-500">Loading...</div>
        </div>
      </AdminLayout>
    }>
      <EditNewsContent />
    </Suspense>
  );
};

export default EditNewsPage;