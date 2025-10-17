"use client";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/Toast/ToastProvider";
import { ArrowLeft, Plus } from "lucide-react";

const AddCalendarEventPage = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = typeof window !== "undefined" ? (localStorage.getItem("token") || sessionStorage.getItem("token")) : null;
      const headers: any = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;
      const res = await fetch("/api/calendar", {
        method: "POST",
        headers,
        body: JSON.stringify({ title, description, date, color }),
      });
      const data = await res.json();
      if (res.ok && data?.success) {
        showToast({ type: "success", title: "Event added", message: "Calendar event created" });
        router.push("/admin/Calendar");
      } else {
        showToast({ type: "error", title: "Add failed", message: data.message || "Add failed" });
      }
    } catch (err) {
      showToast({ type: "error", title: "Network error", message: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout title="Add Calendar Event">
        <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push("/admin/Calendar")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Calendar
        </button>
      </div>
    
      <form className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Event title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Description</label>
          <textarea
            placeholder="Event description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Color</label>
          <div className="flex items-center gap-4">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="border p-2 rounded w-16 h-10"
            />
            <span className="inline-block w-10 h-10 rounded-full border" style={{ background: color || '#eee' }}></span>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-8">
          <button type="button" onClick={() => router.push('/admin/Calendar')} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
          <button
            type="submit"
            className={`bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-wait" : "hover:bg-purple-700"}`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2"><span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span> Saving...</span>
            ) : <>Save Event</>}
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default AddCalendarEventPage;
