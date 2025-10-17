"use client";

import React from "react";
import Link from "next/link";
// LayoutShell is applied by the root layout; do not wrap pages with it to avoid duplicate header/footer
import { Download, Briefcase } from "lucide-react";

const vacancies = [
  {
    id: "r1",
    title: "Head Clerk",
    department: "Clerk Law College",
    deadline: "",
    file: "/assets/હેડ કલાર્ક નું અરજી ફોર્મ PDF.pdf",
    notification: "/assets/NOC CLARK LAW COLLEGE.pdf",
  },
];

export default function RequirementsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-purple-800 text-white pt-44 pb-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Opportunities & Requirements
            </h1>
            <p className="text-lg text-purple-100 mb-6 w-[500px]">
              Explore current vacancies, eligibility criteria, and application
              procedures at SMS Law College.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[url('/assets/Slider2.jpg')] bg-cover bg-right opacity-30 hidden lg:block" />
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4">
        {/* Vacancies Section */}
        <section id="vacancies" className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Briefcase className="w-8 h-8 text-purple-700" />
            <h2 className="text-2xl font-bold text-gray-900">
              Current Vacancies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vacancies.map((v) => (
              <div
                key={v.id}
                className="bg-white rounded-lg shadow-xl hover:shadow-2xl p-6 flex flex-col"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {v.title}
                    </h3>
                    <div className="text-sm text-gray-500">
                      Department: {v.department}
                    </div>
                  </div>
                  {/* <div className="text-sm text-gray-600">
                    Last date: <span className="font-medium">{v.deadline}</span>
                  </div> */}
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <Link
                    href={v.file}
                    target="_blank"
                    className="px-4 py-2 bg-purple-600 text-white rounded-md inline-flex items-center gap-2 hover:bg-purple-700"
                  >
                    <Download className="w-4 h-4" /> Download Form
                  </Link>
                  <Link
                    href={v.notification}
                    target="_blank"
                    className="px-4 py-2 bg-purple-600 text-white rounded-md inline-flex items-center gap-2 hover:bg-purple-700"
                  >
                    <Download className="w-4 h-4" /> Download Notification
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Apply Section */}
        {/* <section id="apply" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">How to Apply</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>
              Download the requirement document and review eligibility criteria.
            </li>
            <li>
              Prepare the required documents (CV, certificates, experience
              letters).
            </li>
            <li>
              Apply online via the Admission page or send your application to
              the administrative office.
            </li>
            <li>
              Ensure your application reaches before the last date mentioned for
              each vacancy.
            </li>
          </ol>
        </section> */}

        {/* Important Notes / Contact */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Shortlisted candidates will be contacted via email/phone.</li>
            <li>
              Reservation and other rules apply as per university and regulatory
              guidelines.
            </li>
            <li>
              For queries, contact:{" "}
              <a
                href="mailto:info@smslawcollege.org"
                className="text-purple-700 underline"
              >
                info@smslawcollege.org
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
