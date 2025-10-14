"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Upload } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";

interface LegalAidActivityForm {
  date: string;
  title: string;
  excerpt: string;
  image: string; // URL or base64
}

const LegalAidAddPage = () => {
  const router = useRouter();
  const [form, setForm] = useState<LegalAidActivityForm>({
    date: "",
    title: "",
    excerpt: "",
    image: "/assets/Noimage.jpg",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const submit = () => {
    if (!form.title || !form.excerpt || !form.date) {
      alert("Please fill required fields (title, excerpt, date)");
      return;
    }
    console.log("Create legal aid activity:", form);
    alert("Legal Aid Activity added successfully!");
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

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
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
              Date *
            </label>
            <input
              type="text"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., 03 DEC, 2019"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Image
            </label>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-200 bg-gray-50">
                <img
                  src={form.image}
                  alt="Activity Preview"
                  className="object-cover w-full h-full"
                />
              </div>
              <label className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-700 transition-colors">
                <Upload className="w-4 h-4" />
                Upload
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
              Excerpt *
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
