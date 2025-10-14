
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Filter, Plus, Edit, Trash2, GraduationCap } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";

interface FacultyItem {
  id: string;
  name: string;
  title: string;
  post: string;
  experience: string;
  expertise: string;
  image: string;
}

const seed: FacultyItem[] = [
  {
    id: "f1",
    name: "Hon’ble Mr. Justice Ashokkumar Laxminarayan Dave",
    title: "Former Judge of Gujarat High Court",
    post: "Mentor & Visiting Faculty",
    experience: "35 Years",
    expertise: "Constitutional Law, Criminal Law, Legal Ethics",
    image: "/assets/Noimage.jpg",
  },
];

const FacultyAdminPage = () => {
  const router = useRouter();
  const [list, setList] = useState<FacultyItem[]>([]);
  const [search, setSearch] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState<FacultyItem | null>(null);

  useEffect(() => setList(seed), []);

  const filtered = list.filter((m) => {
    const q = search.toLowerCase();
    return (
      m.name.toLowerCase().includes(q) ||
      m.title.toLowerCase().includes(q) ||
      m.post.toLowerCase().includes(q) ||
      m.expertise.toLowerCase().includes(q)
    );
  });

  const add = () => router.push("/admin/faculty/add");
  const edit = (m: FacultyItem) => router.push(`/admin/faculty/edit?id=${m.id}`);
  const askDelete = (m: FacultyItem) => {
    setDeleting(m);
    setShowDelete(true);
  };
  const confirmDelete = () => {
    if (!deleting) return;
    setList((prev) => prev.filter((x) => x.id !== deleting.id));
    setShowDelete(false);
    setDeleting(null);
  };

  return (
    <AdminLayout 
      title="Faculty" 
      subtitle="Manage mentors and faculty profiles"
    >
      <div className="flex items-center justify-between mb-6">
        <div></div>
        <button onClick={add} className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" /> Add Faculty
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, title, post, expertise"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Faculty ({filtered.length})</h3>
        </div>
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <GraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No entries found</h3>
            <p className="text-gray-500 mb-4">Start by adding a faculty member</p>
            <button onClick={add} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">Add First Faculty</button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faculty</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expertise</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filtered.map((m) => (
                  <tr key={m.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={m.image} alt={m.name} className="w-10 h-10 rounded object-cover border" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{m.name}</div>
                          <div className="text-sm text-gray-500">{m.experience}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{m.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{m.post}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 truncate max-w-lg">{m.expertise}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => edit(m)} className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button onClick={() => askDelete(m)} className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDelete && deleting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Delete Faculty</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete "{deleting.name}"?</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => { setShowDelete(false); setDeleting(null); }} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">Delete</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default FacultyAdminPage;


