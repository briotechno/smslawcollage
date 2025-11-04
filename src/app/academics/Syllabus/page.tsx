"use client";

import React, { useEffect, useState } from "react";

const Syllabus = () => {
  const [loading, setLoading] = useState(true);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    // If iframe doesn't load within 8s, show a fallback (some sites block framing)
    const t = setTimeout(() => {
      if (loading) setBlocked(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [loading]);
  return (
    <div id="Syllabus" className="bg-gray-50 py-40">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900 mb-6">
          <span className="text-purple-600">Syllabus</span>
        </h1>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
      </div>
      <div className="overflow-x-auto max-w-7xl mx-auto px-5 sm:px-1">
        <table className="min-w-full border border-gray-200 text-gray-700">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Year</th>
              <th className="px-4 py-3 text-left">Internship Area</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3">First Year (Sem I & II)</td>
              <td className="px-4 py-3">
                Non-Government Organisation / Social Sector
              </td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-3">Second Year (Sem III & IV)</td>
              <td className="px-4 py-3">Trial Court (Criminal)</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">Third Year (Sem V & VI)</td>
              <td className="px-4 py-3">Trial Court (Civil)</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-3">Fourth Year (Sem VII & VIII)</td>
              <td className="px-4 py-3">High Court / Supreme Court</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Fifth Year (Sem IX & X)</td>
              <td className="px-4 py-3">Law Firms / Corporate Office</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* Embedded syllabus (NGU) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Full Syllabus</h3>
          <p className="text-sm text-gray-600">Embedded from North Gujarat University — opens below. If embedding is blocked you can open the link directly.</p>
        </div>

        <div className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {loading && !blocked && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/70">
              <div className="flex flex-col items-center">
                <svg className="animate-spin h-12 w-12 text-purple-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                <div className="text-purple-600 font-medium">Loading syllabus...</div>
              </div>
            </div>
          )}

          {!blocked ? (
            <iframe
              title="NGU Syllabus"
              src="https://www.ngu.ac.in/Syllabus.aspx"
              loading="lazy"
              onLoad={() => setLoading(false)}
              className="w-full h-[600px] md:h-[800px] lg:h-[900px] border-0"
            />
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-700 mb-4">We couldn't embed the external site — it may disallow framing. You can open it directly:</p>
              <a href="https://www.ngu.ac.in/Syllabus.aspx" target="_blank" rel="noreferrer" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition">Open Syllabus on NGU site</a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Syllabus;
