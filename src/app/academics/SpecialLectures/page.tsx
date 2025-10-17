import React from "react";

const SpecialLectures = () => {
  return <div id="Special-Lectures" className="bg-gray-50 py-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900 mb-6">
        Special Lectures
        <span className="text-purple-600"> by Experts on Campus</span>
      </h1>
      <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
      <div className="space-y-8">
        <p className="text-gray-600 text-lg text-center mb-8">
          Our Special Lecture Series brings distinguished legal professionals, scholars, and practitioners to campus, 
          offering students unique insights into contemporary legal issues and specialized areas of law.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Expert Speaker Series</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Supreme Court Advocates share insights on Constitutional Law developments</li>
              <li>High Court Judges discuss judicial interpretation and landmark cases</li>
              <li>Senior lawyers present case studies from corporate law practice</li>
              <li>Legal scholars explore emerging trends in international law</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Specialized Topics</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Artificial Intelligence and Legal Technology</li>
              <li>Environmental Law and Climate Change Litigation</li>
              <li>Intellectual Property Rights in Digital Age</li>
              <li>Alternative Dispute Resolution Methods</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-purple-600 mb-4">Benefits to Students</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Direct interaction with legal luminaries and industry experts</li>
            <li>Exposure to practical aspects of law beyond textbook learning</li>
            <li>Understanding current trends and challenges in legal practice</li>
            <li>Networking opportunities with professional legal community</li>
            <li>Certificate of participation for attending specialized lectures</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 italic">
            Special lectures are conducted regularly throughout the academic year. 
            Students will be notified about upcoming lectures through the college portal and notice board.
          </p>
        </div>
      </div>
    </div>
  </div>
    ;
};

export default SpecialLectures;
