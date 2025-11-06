"use client";
import React from "react";
import Image from "next/image";

const Internship = () => {
  return (
    <section id="Internship" className="bg-gray-50 min-h-screen py-40 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-gray-900 mb-3">
          Internship Programme -{" "}
          <span className="text-purple-600">SMS Law College</span>
        </h1>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        <p className="italic text-center text-gray-600 mb-10">
          “For the things we have to learn before we can do them, we learn by
          doing them.” – Aristotle
        </p>

        <div className="rounded-xl p-8 bg-white shadow-xl mb-10">
          <p className="text-lg text-gray-700 text-justify mb-6">
            The internship program is a cornerstone of modern legal education, serving as the crucial link between academic theory and professional practice. It moves beyond traditional classroom learning to provide law students with a vital opportunity to gain hands-on experience, develop essential legal skills, and prepare for the realities of a dynamic legal profession.
          </p>
        </div>

        {/* Section 1: Introduction */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-10 mb-12">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">
            Bridging the Gap Between Theory and Practice
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            While law school provides a strong foundation in legal principles and doctrines, it cannot fully replicate the complexities of real-world legal scenarios. Internships bridge this gap by exposing students to live cases, actual client interactions, and courtroom procedures under the supervision of experienced legal professionals. This practical application reinforces theoretical knowledge and helps students understand how laws function in society, which is difficult to achieve through textbooks alone.
          </p>
        </div>

        {/* Section 2: Skills */}
        <div className="grid md:grid-cols-1 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-purple-600 mb-4">Development of Core Legal Skills</h4>

            <p className="text-gray-700">A primary objective of legal internships is the development of critical professional skills. Interns are actively involved in tasks such as:</p>

            <ul className="list-disc mt-2 pl-6 space-y-3 text-gray-700">
              <li><span className="font-bold">
                Legal Research and Analysis:</span>
                 Conducting in-depth research using legal databases and preparing research notes and memos for their supervisors.</li>

              <li><span className="font-bold">
                Drafting and Writing:</span>
                 Preparing various legal documents, including contracts, agreements, petitions, affidavits, and legal opinions, which hones their ability to write in an organized, concise, and persuasive manner.</li>

              <li><span className="font-bold">
                Client Interaction </span>
                 Observing and eventually participating in client meetings and interviews, which helps them develop communication skills, empathy, and an understanding of client confidentiality and ethical considerations.</li>

              <li><span className="font-bold">
                Courtroom Exposure:</span>
                 Attending court hearings, arbitrations, and legal proceedings, providing insight into courtroom dynamics, advocacy skills, and professional etiquette.</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Objectives */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-10 mb-12">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">
            Career Orientation and Professional Growth
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Internships offer invaluable exposure to the diverse areas of law, such as corporate law, litigation, human rights, and intellectual property. This exposure allows students to explore different specializations and identify their true interests, guiding their career objectives and helping them make informed decisions about their future paths.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Furthermore, internships are a prime opportunity for professional networking. Working alongside experienced lawyers and judges allows students to build valuable connections that can lead to mentorship and future job opportunities. A strong internship record also significantly enhances a student's resume, demonstrating practical experience and a commitment to the profession, which gives them a competitive edge in the job market.
          </p>
        </div>

        {/* Section 4: Table */}
        {/* <div className="bg-white shadow-md rounded-xl p-6 md:p-10">
          <h3 className="text-2xl font-semibold text-purple-600 mb-6">
            Classification of Internship at SMS Law College
          </h3>

          <p className="text-gray-700 mb-4 text-justify">
            SMS Law College has designed the internship programme based on
            Academic requirements as per BCI guidelines and practical exposure
            to give a holistic view of the course.
          </p>

          <div className="overflow-x-auto">
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
        </div> */}
      </div>
    </section>
  );
};

export default Internship;
