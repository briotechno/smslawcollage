"use client";

import React from "react";
import { FileIcon } from "lucide-react";


const llbSyllabus = [
  {
    name: "LLB Semester 1 Syllabus",
    file: "/assets/Syllabus/LLB/LLB SEM-1.pdf",
  },
  {
    name: "LLB Semester 2 Syllabus",
    file: "/assets/Syllabus/LLB/LLB SEM-2.pdf",
  },
  {
    name: "LLB Semester 3 Syllabus",
    file: "/assets/Syllabus/LLB/LLB SEM-3.pdf",
  },
  {
    name: "LLB Semester 4 Syllabus",
    file: "/assets/Syllabus/LLB/LLBSEM4_MODIFIED.pdf",
  },
  {
    name: "LLB Semester 5 Syllabus",
    file: "/assets/Syllabus/LLB/LLBSEM5_MODIFIED.pdf",
  },
  {
    name: "LLB Semester 6 Syllabus",
    file: "/assets/Syllabus/LLB/LLBSEM6_MODIFIED.pdf",
  },
];

const llmSyllabus = [
  {
    name: "LLM Semester 1 Syllabus",
    file: "/assets/Syllabus/LLM/LLMSEM1_MODIFIED.pdf",
  },
  {
    name: "LLM Semester 2 Syllabus",
    file: "/assets/Syllabus/LLM/LLMSEM2_MODIFIED.pdf",
  },
  {
    name: "LLM Semester 3 Syllabus",
    file: "/assets/Syllabus/LLM/LLMSEM3_MODIFIED.pdf",
  },
  {
    name: "LLM Semester 4 Syllabus",
    file: "/assets/Syllabus/LLM/LLMSEM4_MODIFIED.pdf",
  },
];

const PdfCard = ({ name, file }: { name: string; file: string }) => (
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex items-center gap-6 ">
    <div className="flex-shrink-0 flex flex-col items-center justify-center">
      <FileIcon className="w-14 h-14 text-red-600 mb-2" />
      <span className="text-xs text-red-700 font-semibold">PDF</span>
    </div>
    <div className="flex-1">
      <div className="font-semibold text-gray-900 text-lg mb-1 flex items-center">
        <span className="mr-2">{name}</span>
      </div>
      <a href={file} download className="inline-flex items-center mt-2 text-purple-600 hover:text-purple-800 font-medium download-link">
        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 16a2 2 0 002 2h10a2 2 0 002-2v-4a1 1 0 10-2 0v4H5v-4a1 1 0 10-2 0v4z" />
          <path d="M7 10V4a1 1 0 112 0v6h2a1 1 0 010 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 010-2h2z" />
        </svg>
        Download PDF
      </a>
    </div>
  </div>
);

const Syllabus = () => (
  <div id="Syllabus" className="bg-gray-50 py-32 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900 mb-6">
        <span className="text-purple-600">Syllabus</span>
      </h1>
      <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>

      {/* LLB Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">LLB Syllabus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {llbSyllabus.map((pdf) => (
            <PdfCard key={pdf.name} name={pdf.name} file={pdf.file} />
          ))}
        </div>
      </section>

      {/* LLM Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">LLM Syllabus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {llmSyllabus.map((pdf) => (
            <PdfCard key={pdf.name} name={pdf.name} file={pdf.file} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Syllabus;
