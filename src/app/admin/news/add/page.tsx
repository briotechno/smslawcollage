"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Plus, X } from "lucide-react";
import { FaUser, FaCog, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/admin/login");
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, href: "/admin/dashboard" },
    { name: "News & Announcements", icon: <FaUser />, href: "/admin/news", active: true },
    { name: "Achievements", icon: <FaUser />, href: "/admin/achievements" },
    { name: "Admission", icon: <FaCog />, href: "#" },
  ];

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
    <div className="min-h-screen h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-600 text-white flex flex-col sticky top-0 h-screen overflow-y-auto">
        <div className="p-6 text-2xl font-bold border-b">Admin Panel</div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className={`flex items-center gap-3 p-2 rounded-md transition-colors ${(item as any).active ? "bg-white text-purple-600" : "hover:bg-white hover:text-black"}`}>
              {item.icon} {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-0">
        <header className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => router.push("/admin/news")} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" /> Back to News
            </button>
          </div>
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 focus:outline-none">
              <span className="text-gray-700 font-medium">Admin</span>
              <img src="https://i.pravatar.cc/40" alt="profile" className="w-10 h-10 rounded-full border-2 border-gray-300" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <button onClick={handleLogout} className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Summary *</label>
                <textarea value={form.summary} onChange={(e) => setForm((p) => ({ ...p, summary: e.target.value }))} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea value={form.content} onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))} rows={8} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                <input type="date" value={form.date} onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <input value={form.category} onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
                <select value={form.status} onChange={(e) => setForm((p) => ({ ...p, status: e.target.value as NewsStatus }))} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input value={form.imageUrl} onChange={(e) => setForm((p) => ({ ...p, imageUrl: e.target.value }))} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {form.tags.map((t, i) => (
                    <span key={i} className="px-3 py-2 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-2">
                      {t}
                      <button onClick={() => removeTag(i)} className="text-purple-500 hover:text-purple-700">
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
                <button type="button" onClick={addTag} className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Tag
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
              <button onClick={() => router.push("/admin/news")} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button onClick={submit} className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2">
                <Check className="w-4 h-4" /> Save News
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddNewsPage;


