import React from "react";

const Syllabus = () => {
  return (
    <div id="Syllabus" className="bg-gray-50 py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </div>
  )
};

export default Syllabus;
