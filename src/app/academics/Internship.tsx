"use client";
import React from "react";
import Image from "next/image";

const Internship = () => {
  return (
    <section id="Internship" className="bg-gray-50 min-h-screen pt-24 pb-16">
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

        {/* Section 1: Introduction */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-10 mb-12">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">
            Significance of Internship in the Field of Law
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            The purpose of the internship program is to gain practical
            knowledge in the field of law. While interning, the students will be
            able to apply the practical aspect of the theories of academic
            learning in the professional setting under the guidance and
            supervision of both a professional staff member and a university
            faculty advisor. At the basis of the Internship, the students will
            be evaluated on their work attributes and contributions in the
            assigned work or community setting. The students will have various
            experiential learning opportunities during the internship program.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Clinical Legal Education is the essence of Modern Legal Education
            and thus to give emphasis on the same, SMS Law College has designed
            the Internship Programme for the students following BCI guidelines.
          </p>
        </div>

        {/* Section 2: Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Text Section */}
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-600 text-center md:text-left">
              Practical Legal Skills Required
            </h3>

            <div className="space-y-4 text-gray-700 text-justify text-sm sm:text-base leading-relaxed">
              <p>
                <span className="font-semibold text-purple-600">Analytical Skills:</span>{" "}
                Knowledge of substantive and legal procedure, identifying issues,
                designing strategies for resolution, motivating and coordinating action
                from multiple parties.
              </p>
              <p>
                <span className="font-semibold text-purple-600">Research and Writing Skills:</span>{" "}
                Conducting legal research, drafting contracts, letters, and documents,
                and citing to legal authority.
              </p>
              <p>
                <span className="font-semibold text-purple-600">Communication Skills:</span>{" "}
                Oral communication, client counselling, listening skills, and persuasive
                writing.
              </p>
              <p>
                All practical legal skills are rooted in “tacit knowledge” – the type of
                knowledge that is difficult to transfer by writing down or verbalizing.
                It is much more essential to experience the practice of law in order to
                acquire these skills.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="/assets/Noimage.jpg"
              alt="Internship Visual"
              width={400}
              height={300}
              className="w-full max-w-[350px] sm:max-w-[400px] rounded-lg shadow-md object-contain"
            />
          </div>
        </div>

        {/* Section 3: Objectives */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-10 mb-12">
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">
            Objectives of Internship Programme
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed text-justify">
            <li>
              To provide students with the necessary information for developing
              their careers and for defining professional strategies in future.
            </li>
            <li>
              To apply the knowledge and skills learned in the classroom to
              practical life and to develop new skills by being involved in
              actual cases and projects.
            </li>
            <li>
              To showcase the socio-legal reality by practical experiences.
            </li>
            <li>
              To empower students for effective participation in law school
              classes.
            </li>
          </ul>
        </div>

        {/* Section 4: Table */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-10">
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
        </div>
      </div>
    </section>
  );
};

export default Internship;
