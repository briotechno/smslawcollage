"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Filter, Plus, Edit, Trash2, Calendar, Image as ImageIcon } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";

interface LegalAidActivity {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

const seed: LegalAidActivity[] = [
  {
    id: "la1",
    date: "03 DEC, 2019",
    title: "Celebration of the International Day for Persons with Disabilities",
    excerpt: "The Legal Aid Clinic of GLS Law College conducted an awareness campaign in Blind People's Association, Ahmedabad on account of the International Day for Persons with Disabilities. The campaign majorly focused on the Rights and Benefits available to the Visually Impaired, taking into light \"The Protection of Persons with Disability Act, 2016\"",
    image: "/assets/Noimage.jpg",
  },
  {
    id: "la2",
    date: "17 JULy, 2019",
    title: "Lex Juris Scienticia Quiz competition",
    excerpt: "The Lex Juris Scienticia was enlightened with the gracious presence of Hon'ble Justice R.R. Tripathi, Former Judge of Gujarat High Court. The chief guest opened up with law aspirants with the role media plays in accordance with the Judiciary. One cannot categorize every case in the frame of pendency",
    image: "/assets/Noimage.jpg",
  },
  {
    id: "la3",
    date: "27 FEB, 2018",
    title: "Legal Clinic - Bakrol",
    excerpt: "The Student of legal aid Clinic of GLS Law College and In charge Faculty members with Two High court Advocate went to the Bakrol village for providing Free legal aid to People of Bakrol on 27th Feb. 2018 which has been adopted by Gujarat Law Society.",
    image: "/assets/Noimage.jpg",
  },
  {
    id: "la4",
    date: "22 MAR, 2018",
    title: "Legal Clinic – A Legal Initiative at Bakrol (Ahmedabad)",
    excerpt: "The Student of legal aid Clinic of GLS Law College and In charge Faculty members with Two High court Advocate went to the Bakrol village for providing Free legal aid to People of Bakrol on 31st January 2018 which has been adopted by Gujarat Law Society.",
    image: "/assets/Noimage.jpg",
  },
  {
    id: "la5",
    date: "02 SEP, 2017",
    title: "The Launch of ELC",
    excerpt: "Official launch of the Environmental Law Clinic with dignitaries and a flagship awareness drive.",
    image: "/assets/Noimage.jpg",
  },
];

const LegalAidAdminPage = () => {
  const router = useRouter();
  const [list, setList] = useState<LegalAidActivity[]>([]);
  const [search, setSearch] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState<LegalAidActivity | null>(null);

  useEffect(() => setList(seed), []);

  const filtered = list.filter((m) => {
    const q = search.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.excerpt.toLowerCase().includes(q) ||
      m.date.toLowerCase().includes(q)
    );
  });

  const add = () => router.push("/admin/legal-aid/add");
  const edit = (m: LegalAidActivity) => router.push(`/admin/legal-aid/edit?id=${m.id}`);
  const askDelete = (m: LegalAidActivity) => {
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
      title="Legal Aid Activities" 
      subtitle="Manage legal aid clinic activities and events"
    >
      <div className="flex items-center justify-between mb-6">
        <div></div>
        <button onClick={add} className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" /> Add Activity
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, excerpt, or date"
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
          <h3 className="text-lg font-semibold text-gray-900">All Activities ({filtered.length})</h3>
        </div>
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No activities found</h3>
            <p className="text-gray-500 mb-4">Start by adding a legal aid activity</p>
            <button onClick={add} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">Add First Activity</button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Excerpt</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filtered.map((m) => (
                  <tr key={m.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded overflow-hidden border border-gray-200 bg-gray-50">
                          <img 
                            src={m.image} 
                            alt={m.title} 
                            className="object-cover w-full h-full" 
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 max-w-xs truncate">{m.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-gray-900">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        {m.date}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-lg truncate">{m.excerpt}</div>
                    </td>
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
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Delete Activity</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete "{deleting.title}"?</p>
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

export default LegalAidAdminPage;
