
"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
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

const mockFetchFaculty = async (id: string): Promise<FacultyForm | null> => {
  if (id === "f1") {
    return {
      name: "Hon’ble Mr. Justice Ashokkumar Laxminarayan Dave",
      title: "Former Judge of Gujarat High Court",
      post: "Mentor & Visiting Faculty",
      experience: "35 Years",
      expertise: "Constitutional Law, Criminal Law, Legal Ethics",
      image: "/assets/Noimage.jpg",
    };
  }
  return null;
};

const FacultyEditContent = () => {
  const router = useRouter();
  const { showToast } = useToast();

  const params = useSearchParams();
  const id = params.get("id");
  const [form, setForm] = useState<FacultyForm | null>(null);

  useEffect(() => {
    if (!id) return;
    (async () => setForm((await mockFetchFaculty(id)) ?? {
      name: "",
      title: "",
      post: "",
      experience: "",
      expertise: "",
      image: "/assets/Noimage.jpg",
    }))();
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
    console.log("Update faculty:", { id, ...form });
    showToast({
      type: "success",
      title: "Faculty Updated",
      message: `Faculty updated successfully!`
    });
    router.push("/admin/faculty");
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
        <div className="text-center text-gray-600">Loading...</div>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Expertise</label>
              <textarea value={form.expertise} onChange={(e) => setForm({ ...form, expertise: e.target.value })} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
            <button onClick={() => router.push("/admin/faculty")} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">Cancel</button>
            <button onClick={submit} className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2">
              <Check className="w-4 h-4" /> Update Faculty
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


