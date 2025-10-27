"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Briefcase, Loader2 } from "lucide-react";

interface Requirement {
  id: number;
  title: string;
  department: string;
  deadline: string;
  file: string;
  notification_file: string;
}

export default function RequirementsPage() {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch("/api/requirements");

        if (!response.ok) {
          throw new Error(
            `Failed to fetch requirements: ${response.statusText}`
          );
        }

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.error || "Failed to fetch requirements");
        }

        setRequirements(data.data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching requirements"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequirements();
  }, []);
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
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[url('/assets/HeroSection/HeroSection1.jpeg')] bg-cover bg-right opacity-30 hidden lg:block" />
      </div>

      <div className="bg-white w-full">
        {" "}
        <div className="max-w-6xl mx-auto py-16 px-4">
          {/* Vacancies Section */}
          <section id="vacancies" className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-purple-700" />
              <h2 className="text-2xl font-bold text-purple-700">
                Current Vacancies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {isLoading ? (
                <div className="flex flex-row items-center  p-8  gap-4 justify-center">
                  <svg
                    className="animate-spin h-8 w- text-purple-600 "
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
                  <span className="text-lg font-medium text-purple-600">
                    Loading requirements, please wait...
                  </span>
                </div>
              ) : error ? (
                <div className="col-span-2 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-center">{error}</p>
                </div>
              ) : requirements.length === 0 ? (
                <div className="col-span-2 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-600 text-center">
                    No requirements available at the moment.
                  </p>
                </div>
              ) : (
                requirements.map((req) => (
                  <div
                    key={req.id}
                    className="bg-white rounded-lg shadow-xl hover:shadow-2xl p-6 flex flex-col"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {req.title}
                        </h3>
                        <div className="text-sm text-gray-500">
                          Department: {req.department}
                        </div>
                        {/* {req.deadline && (
                          <div className="text-sm text-gray-600 mt-1">
                            Last date:{" "}
                            <span className="font-medium">
                              {new Date(req.deadline).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                        )} */}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-4 flex-wrap">
                      {req.file && (
                        <Link
                          href={req.file}
                          target="_blank"
                          className="px-4 py-2 bg-purple-600 text-white rounded-md inline-flex items-center gap-2 hover:bg-purple-700 download-link transition-all duration-200"
                        >
                          <Download className="w-4 h-4" /> Download Form
                        </Link>
                      )}
                      {req.notification_file && (
                        <Link
                          href={req.notification_file}
                          target="_blank"
                          className="px-4 py-2 bg-purple-600 text-white rounded-md inline-flex items-center gap-2 hover:bg-purple-700 download-link transition-all duration-200"
                        >
                          <Download className="w-4 h-4" /> Download Notification
                        </Link>
                      )}
                    </div>
                  </div>
                ))
              )}
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
            <h3 className="text-xl font-semibold text-purple-700 mb-4">
              Important Notes
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Shortlisted candidates will be contacted via email/phone.</li>
              <li>
                Reservation and other rules apply as per university and
                regulatory guidelines.
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
      </div>
    </>
  );
}
