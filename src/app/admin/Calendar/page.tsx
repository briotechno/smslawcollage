"use client";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/Toast/ToastProvider";
import { Plus, Edit, Trash2, Calendar, Search, Filter } from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  color?: string;
}

const AdminCalendarPage = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingEvent, setDeletingEvent] = useState<CalendarEvent | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const token = typeof window !== "undefined" ? (localStorage.getItem("token") || sessionStorage.getItem("token")) : null;
        const headers: any = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;
        const res = await fetch("/api/calendar", { headers });
        const data = await res.json();
        if (res.ok && data?.success) {
          setEvents(data.data || []);
        } else {
          setEvents([]);
        }
      } catch (err) {
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = events.filter((e) => {
    const q = searchTerm.toLowerCase();
    return (
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.date.includes(searchTerm)
    );
  });

  const handleAdd = () => router.push("/admin/Calendar/add");
  const handleEdit = (event: CalendarEvent) => {
    router.push(`/admin/Calendar/edit?id=${event.id}`);
  };
  const openDelete = (event: CalendarEvent) => {
    setDeletingEvent(event);
    setShowDeleteModal(true);
  };
  const handleDelete = async () => {
    if (!deletingEvent) return;
    setLoading(true);
    try {
      const token = typeof window !== "undefined" ? (localStorage.getItem("token") || sessionStorage.getItem("token")) : null;
      const headers: any = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;
      const res = await fetch(`/api/calendar?id=${deletingEvent.id}`, {
        method: "DELETE",
        headers,
      });
      const data = await res.json();
      if (res.ok && data?.success) {
        showToast({ type: "success", title: "Deleted", message: "Event deleted" });
        setEvents((prev) => prev.filter((e) => e.id !== deletingEvent.id));
      } else {
        showToast({ type: "error", title: "Delete failed", message: data.message || "Delete failed" });
      }
    } catch (err) {
      showToast({ type: "error", title: "Network error", message: "Network error" });
    } finally {
      setLoading(false);
      setShowDeleteModal(false);
      setDeletingEvent(null);
    }
  };

  return (
    <AdminLayout title="Calendar Event Admin">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between mb-6">
        <div></div>
          <button
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            onClick={handleAdd}
          >
            <Plus className="w-5 h-5" /> Add Event
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, description, date"
                className="w-full text-black pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>
         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Calendar Events ({filtered.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center py-12">
                    <div className="inline-flex items-center gap-3 p-6 rounded-lg">
                      <svg className="animate-spin h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      {/* <span className="text-lg text-purple-600 font-semibold">Loading events...</span> */}
                    </div>
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-12">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
                    <p className="text-gray-500 mb-4">Start by adding a calendar event</p>
                    <button onClick={handleAdd} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">Add First Event</button>
                  </td>
                </tr>
              ) : (
                filtered.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {event.color ? (
                          <span className="inline-block w-10 h-10 rounded-full border" style={{ background: event.color }} title={event.color}></span>
                        ) : (
                          <span className="inline-block w-10 h-10 rounded-full border bg-gray-100 text-gray-400 flex items-center justify-center">—</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">{event.title}</td>
                    <td className="px-6 py-4 text-gray-900">{event.description}</td>
                    <td className="px-6 py-4 text-gray-900">{event.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => handleEdit(event)} className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50" title="Edit" disabled={loading}>
                          <Edit className="w-4 h-4" />
                        </button>
                        <button onClick={() => openDelete(event)} className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50" title="Delete" disabled={loading}>
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        </div>
         
        {showDeleteModal && (
           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Delete Event</h2>
      <p className="text-gray-600 mb-6">
        Are you sure you want to delete "<span className="font-medium">{deletingEvent?.title}</span>"?
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => {
            setShowDeleteModal(false);
            setDeletingEvent(null);
          }}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          disabled={loading}
        >
          Cancel
        </button>

        <button
          onClick={handleDelete}
          disabled={loading}
          className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${
            loading ? "opacity-70 cursor-wait" : ""
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-4 w-4 mr-2 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Deleting...
            </>
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminCalendarPage;
