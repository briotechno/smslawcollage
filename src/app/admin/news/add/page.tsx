"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Plus, X } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";

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
  const [form, setForm] = useState<NewsItemForm>({
    title: "",
    summary: "",
    content: "",
    date: "",
    category: "General",
    status: "Draft",
    imageUrl: "",
    tags: [],
  });

  const addTag = () => {
    const tag = prompt("Enter tag");
    if (tag) setForm((p) => ({ ...p, tags: [...p.tags, tag] }));
  };
  const removeTag = (i: number) => setForm((p) => ({ ...p, tags: p.tags.filter((_, idx) => idx !== i) }));

  const submit = () => {
    if (!form.title || !form.summary || !form.date || !form.status) {
      alert("Please fill required fields (title, summary, date, status)");
      return;
    }
    console.log("Create news:", form);
    alert("News created successfully!");
    router.push("/admin/news");
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
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Add News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
              <input 
                value={form.title} 
                onChange={(e) => setForm({ ...form, title: e.target.value })} 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
                placeholder="Enter news title"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Summary *</label>
              <textarea 
                value={form.summary} 
                onChange={(e) => setForm({ ...form, summary: e.target.value })} 
                rows={3} 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter brief summary"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
              <textarea 
                value={form.content} 
                onChange={(e) => setForm({ ...form, content: e.target.value })} 
                rows={8} 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter full content"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
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
                <button onClick={addTag} className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Tag
                </button>
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
              <Check className="w-4 h-4" /> Save News
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddNewsPage;