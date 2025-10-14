"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Upload } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";

interface FacultyForm {
  name: string;
  title: string;
  post: string;
  experience: string;
  expertise: string;
  image: string; // URL or base64
}

const FacultyAddPage = () => {
  const router = useRouter();
  const [form, setForm] = useState<FacultyForm>({
    name: "",
    title: "",
    post: "",
    experience: "",
    expertise: "",
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
    if (!form.name || !form.title || !form.post) {
      alert("Please fill required fields (name, title, post)");
      return;
    }
    console.log("Create faculty:", form);
    alert("Faculty added successfully!");
    router.push("/admin/faculty");
  };

  return (
    <AdminLayout
      title="Add Faculty"
      subtitle="Create a new faculty member profile"
    >
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push("/admin/faculty")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Faculty
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Post *
            </label>
            <input
              value={form.post}
              onChange={(e) => setForm({ ...form, post: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Experience
            </label>
            <input
              value={form.experience}
              onChange={(e) =>
                setForm({ ...form, experience: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* IMAGE UPLOAD SECTION */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Faculty Image
            </label>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-200 bg-gray-50">
                <img
                  src={form.image}
                  alt="Faculty Preview"
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
              Expertise
            </label>
            <textarea
              value={form.expertise}
              onChange={(e) =>
                setForm({ ...form, expertise: e.target.value })
              }
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => router.push("/admin/faculty")}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <Check className="w-4 h-4" /> Save Faculty
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default FacultyAddPage;
