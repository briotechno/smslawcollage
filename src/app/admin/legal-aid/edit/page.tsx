"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Check, Upload } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useToast } from "@/components/Toast/ToastProvider";

interface LegalAidActivityForm {
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

const LegalAidEditContent = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { showToast } = useToast();
  const id = params.get("id");
  const [form, setForm] = useState<LegalAidActivityForm | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch activity by ID
  const fetchById = async (id: string): Promise<LegalAidActivityForm | null> => {
    try {
      const res = await fetch(`/api/legal-aid?id=${encodeURIComponent(id)}`);
      const data = await res.json();
      if (res.ok && data.success) {
        return data.data as LegalAidActivityForm;
      }
      return null;
    } catch (err) {
      console.error("Fetch failed:", err);
      return null;
    }
  };

  useEffect(() => {
    if (!id) return;
    (async () => {
      const data = await fetchById(id);
      if (data) {
        setForm(data);
      } else {
        // fallback in case of empty API
        setForm({
          date: "",
          title: "",
          excerpt: "",
          image: "/assets/Noimage.jpg",
        });
      }
      setLoading(false); 
    })();
  }, [id]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && form) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!form) return;
    if (!form.title || !form.excerpt || !form.date) {
      showToast({
        type: "error",
        title: "Validation Error",
        message: "Please fill in all required fields",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = { ...form, id };
      const token =
  typeof window !== "undefined" ? (localStorage.getItem("token") || sessionStorage.getItem("token")) : null;
      const headers: any = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch("/api/legal-aid", {
        method: "PUT",
        headers,
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        showToast({
          type: "success",
          title: "Legal Aid Activity Updated",
          message: `"${form.title}" updated successfully!`,
        });
        router.push("/admin/legal-aid");
      } else {
        showToast({
          type: "error",
          title: "Update failed",
          message: data.message || "Failed to update legal aid activity",
        });
      }
    } catch (err) {
      console.error(err);
      showToast({
        type: "error",
        title: "Network error",
        message: "Unable to update legal aid activity",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!id) {
    return (
      <AdminLayout title="Activity not found" subtitle="The requested legal aid activity could not be found">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Activity not found</h1>
          <button onClick={() => router.push("/admin/legal-aid")} className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">Back to Legal Aid Activities</button>
        </div>
      </AdminLayout>
    );
  }

  if (loading || !form) {
    return (
      <AdminLayout title="Edit Legal Aid Activity" subtitle="Update legal aid clinic activity">
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="flex flex-col items-center justify-center text-center">
            <svg className="animate-spin h-6 w-6 text-purple-600 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          </div>
          {/* <div className="text-gray-500">Loading activity details...</div> */}
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Edit Legal Aid Activity" subtitle="Update legal aid clinic activity">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push("/admin/legal-aid")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Legal Aid Activities
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
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
                <img src={form.image} alt="Activity Preview" className="object-cover w-full h-full" />
              </div>
              <label className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-700 transition-colors">
                <Upload className="w-4 h-4" />
                Upload
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt <span className="text-red-500">*</span>
            </label>
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
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
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2 ${isSubmitting ? "opacity-70 cursor-wait" : ""}`}
          >
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
                <Check className="w-4 h-4" /> Update Legal Aid Activity
              </>
            )}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

const LegalAidEditPage = () => (
  <Suspense
    fallback={
      <AdminLayout title="Edit Legal Aid Activity" subtitle="Update legal aid clinic activity">
        <div className="text-center py-12">
          <div className="animate-spin h-6 w-6 mx-auto text-purple-600 mb-3 border-4 border-purple-400 border-t-transparent rounded-full"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </AdminLayout>
    }
  >
    <LegalAidEditContent />
  </Suspense>
);

export default LegalAidEditPage;
