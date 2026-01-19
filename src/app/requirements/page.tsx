"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Briefcase, Loader2, Eye, FileText, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PDF_PATHS = {
  OBJECTION_FORM: "/assets/pdf/OBJECTION FORM.pdf",
  INSTRUCTION_QUERY: "/assets/pdf/Instruction for Quary.pdf",
};

const PAPER_PDF_PATHS = [
  {
    id: "set-a",
    title: "Paper Set A",
    questionFile: "/assets/paper_pdf/PAPER SET-A.pdf",
    answerFile: "/assets/paper_pdf/Answer-Key-Paper-A.jpeg",
  },
  {
    id: "set-b",
    title: "Paper Set B",
    questionFile: "/assets/paper_pdf/PAPER SET-B.pdf",
    answerFile: "/assets/paper_pdf/Answer-Key-Paper-B.jpeg",
  },
  {
    id: "set-c",
    title: "Paper Set C",
    questionFile: "/assets/paper_pdf/PAPER SET-C.pdf",
    answerFile: "/assets/paper_pdf/Answer-Key-Paper-C.jpeg",
  },
  {
    id: "set-d",
    title: "Paper Set D",
    questionFile: "/assets/paper_pdf/PAPER SET-D.pdf",
    answerFile: "/assets/paper_pdf/Answer-Key-Paper-D.jpeg",
  },
];

interface MoreItem {
  title: string;
  file: string;
  allowDownload: boolean;
}

const moreItems: MoreItem[] = [
  {
    title: "Objection Form",
    file: PDF_PATHS.OBJECTION_FORM,
    allowDownload: true,
  },
  {
    title: "Instruction/Query",
    file: PDF_PATHS.INSTRUCTION_QUERY,
    allowDownload: false,
  },
];

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePdf, setActivePdf] = useState<{
    url: string;
    title: string;
    allowDownload: boolean;
    type?: "standard" | "dual";
    pairContent?: {
      leftUrl: string;
      rightUrl: string;
      leftTitle: string;
      rightTitle: string;
    };
  } | null>(null);

  const handleView = (
    url: string,
    title: string,
    allowDownload: boolean = true
  ) => {
    setActivePdf({ url, title, allowDownload, type: "standard" });
    setIsModalOpen(true);
  };

  const handleDualView = (
    questionUrl: string,
    answerUrl: string,
    title: string
  ) => {
    setActivePdf({
      url: questionUrl,
      title,
      allowDownload: true,
      type: "dual",
      pairContent: {
        leftUrl: questionUrl,
        rightUrl: answerUrl,
        leftTitle: "Question Paper",
        rightTitle: "Answer Key",
      },
    });
    setIsModalOpen(true);
  };

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
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-purple-800 text-white pt-32 pb-32 md:pt-44 md:pb-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Opportunities & Requirements
            </h1>
            <p className="text-base md:text-lg text-purple-100 mb-6 lg:w-[500px]">
              Explore current vacancies, eligibility criteria, and application
              procedures at SMS Law College.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[url('/assets/HeroSection/HeroSection1.jpeg')] bg-cover bg-right opacity-30 hidden lg:block" />
      </div>

      <div className="bg-white w-full">
        <div className="max-w-6xl mx-auto py-16 px-4">
          {/* Vacancies Section */}
          <section id="vacancies" className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-purple-700" />
              <h2 className="text-2xl font-bold text-purple-700">
                Current Vacancies
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {isLoading ? (
                <div className="col-span-full flex flex-row items-center p-12 gap-4 justify-center">
                  <svg
                    className="animate-spin h-10 w-10 text-purple-600"
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
                  <span className="text-xl font-medium text-purple-600">
                    Loading vacancies...
                  </span>
                </div>
              ) : error ? (
                <div className="col-span-full bg-red-50 border border-red-200 rounded-2xl p-6">
                  <p className="text-red-600 text-center font-medium">{error}</p>
                </div>
              ) : requirements.length === 0 ? (
                <div className="col-span-full bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <p className="text-gray-600 text-center font-medium">
                    No vacancies available at the moment.
                  </p>
                </div>
              ) : (
                requirements.map((req) => (
                  <div
                    key={req.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  >
                    <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-4 md:gap-6 flex-1">
                        <div className="bg-purple-50 p-3 md:p-4 rounded-xl group-hover:bg-purple-100 transition-colors shrink-0">
                          <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-purple-700" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                            {req.title}
                          </h3>
                          <span className="text-xs md:text-sm font-medium px-2 py-0.5 bg-gray-100 rounded-lg text-gray-500">
                            {req.department}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-wrap md:flex-nowrap shrink-0 w-full md:w-auto">
                        {req.file && (
                          <Link
                            href={req.file}
                            target="_blank"
                            className="flex-1 md:flex-none px-4 md:px-6 py-2.5 md:py-3 bg-purple-600 text-white rounded-xl inline-flex items-center justify-center gap-2 hover:bg-purple-700 transition-all duration-200 font-semibold text-sm shadow-md shadow-purple-200"
                          >
                            <Download className="w-4 h-4" /> <span className="whitespace-nowrap">Download Form</span>
                          </Link>
                        )}
                        {req.notification_file && (
                          <Link
                            href={req.notification_file}
                            target="_blank"
                            className="flex-1 md:flex-none px-4 md:px-6 py-2.5 md:py-3 bg-purple-50 text-purple-700 rounded-xl inline-flex items-center justify-center gap-2 hover:bg-purple-100 transition-all duration-200 font-semibold text-sm border border-purple-100"
                          >
                            <Download className="w-4 h-4" /> <span className="whitespace-nowrap">Notification</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* More Section */}
          <section id="more" className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <FileText className="w-8 h-8 text-purple-700" />
              <h2 className="text-2xl font-bold text-purple-700">More Resources</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {moreItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4 md:gap-6 flex-1">
                      <div className="bg-purple-50 p-3 md:p-4 rounded-xl group-hover:bg-purple-100 transition-colors shrink-0">
                        <FileText className="w-5 h-5 md:w-6 md:h-6 text-purple-700" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap md:flex-nowrap shrink-0 w-full md:w-auto">
                      <button
                        onClick={() =>
                          handleView(item.file, item.title, item.allowDownload)
                        }
                        className="flex-1 md:flex-none px-4 md:px-6 py-2.5 md:py-3 bg-purple-100 text-purple-700 rounded-xl inline-flex items-center justify-center gap-2 hover:bg-purple-200 transition-all duration-200 font-semibold text-sm cursor-pointer"
                      >
                        <Eye className="w-4 h-4" /> <span className="whitespace-nowrap">View</span>
                      </button>
                      {item.allowDownload && (
                        <Link
                          href={item.file}
                          target="_blank"
                          className="flex-1 md:flex-none px-4 md:px-6 py-2.5 md:py-3 bg-purple-600 text-white rounded-xl inline-flex items-center justify-center gap-2 hover:bg-purple-700 transition-all duration-200 font-semibold text-sm shadow-md shadow-purple-200"
                        >
                          <Download className="w-4 h-4" /> <span className="whitespace-nowrap">Download</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

{/* Question Paper & Answer Key Section */}
          <section id="papers" className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-purple-700" />
              <h2 className="text-2xl font-bold text-purple-700">
                Question Papers & Answer Keys
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {PAPER_PDF_PATHS.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4 md:gap-6 flex-1">
                      <div className="bg-purple-50 p-3 md:p-4 rounded-xl group-hover:bg-purple-100 transition-colors shrink-0">
                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-purple-700" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                      <button
                        onClick={() =>
                          handleDualView(
                            item.questionFile,
                            item.answerFile,
                            item.title
                          )
                        }
                        className="w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 bg-purple-100 text-purple-700 rounded-xl inline-flex items-center justify-center gap-2 hover:bg-purple-200 transition-all duration-200 font-semibold text-sm cursor-pointer"
                      >
                        <Eye className="w-4 h-4" /> <span className="whitespace-nowrap">View Paper & Key</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
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

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {isModalOpen && activePdf && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className={`relative bg-white rounded-2xl shadow-2xl w-full flex flex-col overflow-hidden ${activePdf.type === "dual" ? "max-w-[95vw] h-[95vh]" : "max-w-5xl h-[90vh]"
                }`}
            >
              {/* Modal Header */}
              <div className="p-4 border-b flex justify-between items-center bg-purple-50">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    {activePdf.type === "dual" ? (
                      <BookOpen className="w-5 h-5 text-purple-700" />
                    ) : (
                      <FileText className="w-5 h-5 text-purple-700" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-purple-900 truncate max-w-[250px] md:max-w-md">
                    {activePdf.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {activePdf.allowDownload && activePdf.type !== "dual" && (
                    <Link
                      href={activePdf.url}
                      target="_blank"
                      download
                      className="p-2 text-purple-600 hover:bg-purple-100 rounded-full transition-colors hidden md:block"
                      title="Download"
                    >
                      <Download className="w-5 h-5" />
                    </Link>
                  )}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                    title="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* PDF Content */}
              <div className="flex-1 bg-gray-100 relative overflow-y-auto lg:overflow-hidden">
                {activePdf.type === "dual" && activePdf.pairContent ? (
                  <div className="flex h-auto lg:h-full gap-4 p-4 flex-col lg:flex-row">
                    {/* Left Side: Question Paper */}
                    <div className="flex-none lg:flex-1 flex flex-col gap-2 h-[500px] lg:h-full">
                      <div className="flex items-center justify-between px-2">
                        <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">
                          {activePdf.pairContent.leftTitle}
                        </span>
                        <Link
                          href={activePdf.pairContent.leftUrl}
                          target="_blank"
                          download
                          className="text-purple-600 hover:text-purple-800 flex items-center gap-1 text-xs font-semibold"
                        >
                          <Download className="w-3 h-3" /> Download
                        </Link>
                      </div>
                      <div className="flex-1 bg-white rounded-xl shadow-inner overflow-hidden border border-gray-200">
                        <iframe
                          src={activePdf.pairContent.leftUrl}
                          className="w-full h-full border-none"
                          title={activePdf.pairContent.leftTitle}
                        />
                      </div>
                    </div>

                    {/* Divider for Desktop */}
                    <div className="hidden lg:block w-[1px] bg-gray-300" />

                    {/* Right Side: Answer Key */}
                    <div className="flex-none lg:flex-1 flex flex-col gap-2 h-[500px] lg:h-full">
                      <div className="flex items-center justify-between px-2">
                        <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">
                          {activePdf.pairContent.rightTitle}
                        </span>
                        <Link
                          href={activePdf.pairContent.rightUrl}
                          target="_blank"
                          download
                          className="text-purple-600 hover:text-purple-800 flex items-center gap-1 text-xs font-semibold"
                        >
                          <Download className="w-3 h-3" /> Download
                        </Link>
                      </div>
                      <div className="flex-1 bg-white rounded-xl shadow-inner overflow-auto border border-gray-200 flex justify-center items-start">
                        {activePdf.pairContent.rightUrl.toLowerCase().endsWith(".pdf") ? (
                          <iframe
                            src={activePdf.pairContent.rightUrl}
                            className="w-full h-full border-none"
                            title={activePdf.pairContent.rightTitle}
                          />
                        ) : (
                          <img
                            src={activePdf.pairContent.rightUrl}
                            alt={activePdf.pairContent.rightTitle}
                            className="max-w-full h-auto object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={`${activePdf.url}#toolbar=${activePdf.allowDownload ? 1 : 0
                      }`}
                    className="w-full h-full border-none"
                    title={activePdf.title}
                  />
                )}
              </div>

              {/* Modal Footer (Mobile Download Only) */}
              {activePdf.allowDownload && activePdf.type !== "dual" && (
                <div className="p-4 border-t bg-white md:hidden">
                  <Link
                    href={activePdf.url}
                    target="_blank"
                    download
                    className="w-full py-3 bg-purple-600 text-white rounded-xl flex items-center justify-center gap-2 font-semibold"
                  >
                    <Download className="w-5 h-5" /> Download Document
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
