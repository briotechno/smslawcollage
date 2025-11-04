"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  CheckCircle,
  Star,
  Award,
  Clock,
  Target,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AdmissionPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const programs = [
    {
      title: "L.L.B (3 Years Integrated)",
      description: "Comprehensive three-year integrated program combining Bachelor of Arts with Bachelor of Laws",
      duration: "3 Years",
      type: "Any Graduate",
      eligibility: "10+2 with 45% marks",
      intake: "10 Seats",
      features: [
        "Specialization Tracks",
        "Research Thesis",
        "International Law",
        "Advanced Legal Practice",
        "Academic Research"
      ],
      contact: {
        phone: "98792 85000",
        email: "smslcmeh@gmail.com"
      },
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "B.A.L.L.B (5 Years Integrated)",
      description: "Comprehensive five-year integrated program combining Bachelor of Arts with Bachelor of Laws",
      duration: "5 Years",
      type: "Under Graduate",
      eligibility: "10+2 with 45% marks",
      intake: "120 Seats",
      features: [
        "Core Legal Subjects",
        "Arts Foundation",
        "Moot Court Training",
        "Internship Program",
        "Research Projects"
      ],
      contact: {
        phone: "98792 85000",
        email: "smslcmeh@gmail.com"
      },
      // color: "from-purple-500 to-purple-600",
      color: "from-blue-500 to-blue-600",

    },
    // {
    //   title: "B.B.A.LL.B (Honours) (5 Years Integrated)",
    //   description: "Five-year integrated program combining Bachelor of Business Administration with Bachelor of Laws (Honours)",
    //   duration: "5 Years",
    //   type: "Undergraduate",
    //   eligibility: "10+2 with 45% marks",
    //   intake: "60 Seats",
    //   features: [
    //     "Business Law Focus",
    //     "Corporate Legal Practice",
    //     "Commercial Law",
    //     "Moot Court Training",
    //     "Industry Internships"
    //   ],
    //   contact: {
    //     phone: "98792 85000",
    //     email: "bba.llb@smslawcollege.edu"
    //   },
    //   color: "from-blue-500 to-blue-600",
    // },
    {
      title: "L.L.M (2 Year)",
      description: "Two-year Master of Laws program for advanced legal specialization",
      duration: "2 Year",
      type: "Post Graduate",
      eligibility: "Criminal Group & Business Group",
      intake: "20 Seats",
      features: [
        "Business Law Focus",
        "Corporate Legal Practice",
        "Commercial Law",
        "Moot Court Training",
        "Industry Internships"
      ],
      contact: {
        phone: "98792 85000",
        email: "smslcmeh@gmail.com"
      },
      color: "from-green-500 to-green-600",
    },
  ];

  const admissionProcess = [
    {
      step: 1,
      title: "Form Filling",
      description: "Left out students can fill new forms in programs",
      date: "11-12 October",
    },
    {
      step: 2,
      title: "Verification",
      description: "Those students who missed their verification can verify their application.",
      date: "11-13 October",
    },
    {
      step: 3,
      title: "Cancellation",
      description: "Student can cancel their admissions during the allotted cancellation period.",
      date: "11-12 October",
    },
    {
      step: 4,
      title: "Admissions",
      description: "Common admission rounds take place for finalizing admissions.",
      date: "15-16 October",
    },
  ];

  const importantDates = [
    {
      event: "Application Start Date",
      date: "March 1, 2024",
      status: "Open",
    },
    {
      event: "Last Date for Application",
      date: "May 31, 2024",
      status: "Upcoming",
    },
    {
      event: "Entrance Examination",
      date: "June 15, 2024",
      status: "Scheduled",
    },
    {
      event: "Interview & Counseling",
      date: "June 20-25, 2024",
      status: "Scheduled",
    },
    {
      event: "Admission Confirmation",
      date: "July 1, 2024",
      status: "Upcoming",
    },
    {
      event: "Academic Session Begins",
      date: "August 1, 2024",
      status: "Upcoming",
    },
  ];

  const requiredDocuments = [
    "10th & 12th Mark Sheets",
    "Transfer Certificate",
    "Migration Certificate",
    "Character Certificate",
    "Passport Size Photographs",
    "Aadhar Card Copy",
    "Caste Certificate (if applicable)",
    "Income Certificate (if applicable)",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[130vh] sm:h-[130vh] md:h-[140vh] lg:h-[140vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/HeroSection/HeroSection7.jpeg"
            alt="SMS Law College Admissions"
            fill
            // style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl xl:max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4 sm:mb-6"
              >
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600/90 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
                  Academic Year 2024-25
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                Admissions
                <span className="block text-purple-300">Open</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-xl"
              >
                Join SMS Law College and embark on your journey to legal excellence.
                Apply now for our comprehensive law programs designed to shape
                tomorrow's legal professionals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                {/* <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  Apply Now
                </button> */}
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Brochure
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <GraduationCap className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Academic <span className="text-purple-600">Programs</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of legal programs designed to
              prepare you for success in the legal profession.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
                      {program.type}
                    </span>
                    <span className="text-sm text-gray-500">{program.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span><strong>Eligibility:</strong> {program.eligibility}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span><strong>Intake:</strong> {program.intake}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <Star className="w-4 h-4 text-purple-600" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-purple-600" />
                        <span>{program.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-purple-600" />
                        <span>{program.contact.email}</span>
                      </div>
                    </div>
                  </div>

                 <Link href="https://gcas.gujgov.edu.in/" target="_blank"> <button className="w-full bg-gray-100 hover:bg-purple-600 text-gray-700 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <Target className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Admission <span className="text-purple-600">Process</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined admission process ensures a smooth and transparent
              application experience for all prospective students.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
              {admissionProcess.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between w-full mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      
                    </div>

                    <p className="text-gray-600 flex-1">{step.description}</p>

                    <div className="mt-4 text-sm text-gray-500">&nbsp;</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Important Dates Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <Calendar className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Important <span className="text-purple-600">Dates</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with important admission dates and deadlines for
              the academic year 2024-25.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importantDates.map((date, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {date.event}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${date.status === 'Open' ? 'bg-green-100 text-green-600' :
                    date.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                    {date.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <span className="font-medium">{date.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Required Documents Section */}
      {/* <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Required <span className="text-purple-600">Documents</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ensure you have all the necessary documents ready for the
              admission process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requiredDocuments.map((document:any, index:any) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 text-center"
              >
                <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {document}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Eligibility & Rules Section */}
      <section id="eligibility" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-4">
              <BookOpen className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Eligibility & <span className="text-purple-600">Admission Rules</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Clear and concise eligibility criteria, registration rules and minimum qualifying marks for applicants.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Detailed Eligibility */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility for admission</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold">(a) Three Years’ Law Degree Course</h4>
                    <p className="mt-2">
                      An applicant who has obtained a Bachelor degree in any stream from a University or an equivalent institution recognized as deemed to be University or from a foreign University declared as equivalent to an Indian Degree by a competent authority, shall be eligible for admission to three years’ degree course in law. There is no minimum age requirement for admission to three years’ law degree course.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">(b) Integrated Degree Program</h4>
                    <p className="mt-2">
                      An applicant who has successfully completed Senior Secondary School course (‘+2’) or equivalent (such as 11+1, ‘A’ level in Senior School Leaving certificate course) from a recognized University of India or abroad or from a Senior Secondary Board, Central or State or any qualification/certificate declared as equivalent by a competent authority such as Association of Indian Universities, shall be eligible for admission to the Integrated degree program.
                    </p>
                    <p className="mt-2">
                      An applicant should have completed 21 years of age on the prescribed last date for filing application to the Integrated Degree Program. However, for the applicants belonging to SC/ST/OBC/PWD/EWS, it shall be 23 years.
                    </p>
                    <p className="mt-2">
                      However, qualification obtained from any open university without any formal school education or from distance/correspondence education shall not be considered as equivalent to qualifying examination for admission.
                    </p>
                  </div>
                </div>
              </div>

              {/* Prohibition Card */}
              <div className="bg-white border-l-4 border-purple-600 rounded-lg shadow-sm p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Prohibition to register for two regular courses of study</h4>
                    <p className="mt-2 text-gray-700">
                      No student shall be allowed to simultaneously register for a law degree program with any other graduate or postgraduate or certificate course run by the same or any other University or an Institute for academic or professional learning excepting in the integrated degree program of the same institution. Provided that any short period part time certificate course on language, computer science or computer application of an Institute or any course run by a Center for Distance Learning of a University however, shall be excepted.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Minimum Marks Table */}
            <aside className="space-y-6">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Minimum marks</h4>
                <p className="text-sm text-gray-600 mb-4">Minimum percentage of marks in the qualifying or higher examination:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left table-auto border-collapse">
                    <thead>
                      <tr>
                        <th className="px-3 py-2 text-sm font-medium text-gray-600">Category</th>
                        <th className="px-3 py-2 text-sm font-medium text-gray-600">Minimum Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-3 py-3 text-gray-800">General</td>
                        <td className="px-3 py-3 font-semibold text-purple-600">45%</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="px-3 py-3 text-gray-800">OBC</td>
                        <td className="px-3 py-3 font-semibold text-purple-600">42%</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-3 text-gray-800">SC / ST</td>
                        <td className="px-3 py-3 font-semibold text-purple-600">40%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 text-sm text-gray-700">
                <strong>Note:</strong> These minimum marks are for the qualifying or higher examination and will be used for eligibility screening. Specific programs may have additional criteria.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <Phone className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-purple-600">Information</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our admission team for any queries or assistance
              with the application process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  {/* <span className="text-gray-700">SMS Law College Campus, Mehasana - 380006</span> */}
                  <p className="text-gray-700 text-sm">
                    Shri S M Shah Law Collage
                    <br />
                    Avani Seeda Vidhya Sankul,
                    Nagalpur High way
                    <br />
                    Mehsana 384002
                    <br />
                    Gujarat, India
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">+91 98792 85000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">admission@smslawcollege.edu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">smslcmeh@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Mon-Fri: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program-Specific Contacts</h3>
              <div className="space-y-6">
                {programs.map((program, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{program.title}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-purple-600" />
                        <span>{program.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-purple-600" />
                        <span>{program.contact.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Start Your Legal Journey Today
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join SMS Law College and become part of our legacy of legal excellence.
              Apply now and take the first step towards your legal career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Apply Online
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default AdmissionPage;
