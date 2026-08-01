"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Search, GraduationCap, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { useToast } from "@/components/Toast/ToastProvider";

interface StudentItem {
  id: string;
  firstName: string;
  lastName: string;
  enrollmentNumber: string;
  email: string;
  phone: string;
  abcId: string;
  hscRollNumber: string;
  state: string;
  district: string;
  createdAt: string;
}

const StudentAdminPage = () => {
  const [list, setList] = useState<StudentItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/students?page=${page}&limit=${limit}`);
        const data = await res.json();
        if (res.ok && data?.success) {
          setList(data.data || []);
          setTotal(data.total || 0);
        } else {
          setList([]);
          showToast({ type: 'error', title: 'Load failed', message: data?.error || 'Unable to load students' });
        }
      } catch (err) {
        setList([]);
        showToast({ type: 'error', title: 'Network error', message: 'Unable to load students' });
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [page]); // Reload when page changes

  const filtered = useMemo(() => {
    return list.filter((m) => {
      const q = search.toLowerCase();
      const fullName = `${m.firstName} ${m.lastName}`.toLowerCase();
      return (
        fullName.includes(q) ||
        (m.enrollmentNumber || "").toLowerCase().includes(q) ||
        (m.email || "").toLowerCase().includes(q) ||
        (m.phone || "").includes(q)
      );
    });
  }, [list, search]);

  const totalPages = Math.ceil(total / limit);

  return (
    <AdminLayout
      title="Registered Students"
      subtitle="View and manage all registered student details"
    >
      {/* search */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, phone, or enrollment number..."
              className="w-full text-black pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Student Directory {total > 0 && <span className="text-sm text-gray-500 ml-2">(Total: {total})</span>}
          </h3>
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center text-center py-16 px-4">
            <div className="inline-flex items-center gap-3 p-6 rounded-lg">
              <svg className="animate-spin h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            </div>
            <p className="text-gray-500 mt-2 animate-pulse">Loading students...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <GraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
            <p className="text-gray-500 mb-4">No registered students match your search criteria.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrollment No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Joined On</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filtered.map((m) => (
                  <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center border border-purple-200">
                          <span className="text-purple-700 font-bold">
                            {m.firstName?.[0]}{m.lastName?.[0]}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{m.firstName} {m.lastName}</div>
                          <div className="text-xs text-gray-500">ABC ID: {m.abcId || 'N/A'}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{m.email}</div>
                      <div className="text-xs text-gray-500">{m.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-mono bg-gray-100 px-2 py-1 rounded inline-block">
                        {m.enrollmentNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{m.district || 'N/A'}</div>
                      <div className="text-xs text-gray-500">{m.state || 'N/A'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                          [Secured]
                       </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                      {new Date(m.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Pagination Controls */}
        {!loading && total > 0 && (
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
             <div className="text-sm text-gray-700">
               Showing <span className="font-medium">{(page - 1) * limit + 1}</span> to <span className="font-medium">{Math.min(page * limit, total)}</span> of <span className="font-medium">{total}</span> results
             </div>
             <div className="flex items-center gap-2">
               <button 
                 onClick={() => setPage(p => Math.max(1, p - 1))}
                 disabled={page === 1}
                 className="p-2 rounded border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
               >
                 <ChevronLeft className="w-4 h-4" />
               </button>
               <span className="text-sm font-medium text-gray-700 px-2">Page {page} of {totalPages}</span>
               <button 
                 onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                 disabled={page === totalPages || totalPages === 0}
                 className="p-2 rounded border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
               >
                 <ChevronRight className="w-4 h-4" />
               </button>
             </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default StudentAdminPage;
