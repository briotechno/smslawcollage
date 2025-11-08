"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const IntellectualPropertyLawClinicpage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 mt-32">
      {/* HERO SECTION */}
     <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/assets/HeroSection/HeroSection6.jpeg"
                alt="Legal Education in India"
                fill
                className="object-fill lg:scale-y-[1.6]"
                priority
              />
              
            </div>
    
            
          </section>

      {/*Intellectual Property Law Clinic */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section
            id="activities"
            className="mt-8 space-y-10 lg:col-span-12 py-5"
          >
            <h3 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-6">
              Intellectual
              <span className="text-purple-600"> Property Law Clinic</span>
            </h3>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <div className="rounded-xl p-8 bg-white shadow-xl mb-10">
              <p className="text-lg text-gray-700 text-justify">
                An{" "}
                <span className="text-purple-600 font-bold">
                  Intellectual Property (IP) Law Clinic
                </span>{" "}
                is an experiential learning program, typically affiliated with a
                law school, that provides a dual service: offering pro bono or
                low-cost legal assistance to the community while simultaneously
                providing law students with hands-on, practical experience in
                the complex field of IP law. These clinics are essential in
                bridging the gap between legal theory and practice, helping
                creators and small businesses navigate the intricacies of
                protecting their innovations and creative works.
              </p>
            </div>

            <div className="rounded-xl p-8 bg-white shadow-xl mb-10">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">
                Function and Purpose
              </h4>
              <p className="text-lg text-gray-700 text-justify mb-6">
                The primary function of an IP Law Clinic is to make legal
                assistance accessible to individuals and entities who might not
                have the financial resources for private counsel, such as
                independent inventors, artists, non-profits, and startups. By
                offering guidance on patents, trademarks, copyrights, and trade
                secrets, the clinics help these clients secure and leverage
                their intellectual assets, which are often vital for business
                growth and competitiveness.
              </p>

              <p>
                A secondary, but equally important, purpose is educational.
                Under the supervision of experienced faculty or practicing IP
                attorneys, law students gain invaluable real-world experience.
                They learn to interview clients, conduct comprehensive IP audits
                and searches, draft and file patent and trademark applications
                with relevant government offices (like the USPTO), negotiate
                licensing agreements, and, in some cases, assist with litigation
                strategies for infringement cases. This practical training
                develops critical skills in research, writing, oral
                communication, and strategic thinking, preparing students for a
                successful career in IP law.
              </p>
            </div>

            {/* Services Section */}
            <div className="grid md:grid-cols-1 gap-8 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-purple-600 mb-4">
                  Services Offered
                </h4>
                <p>
                  IP Law Clinics offer a wide range of services, which can
                  include:
                </p>
                <ul className="list-disc mt-2 pl-6 space-y-3 text-gray-700">
                  <li>
                    <span className="font-bold">IP Strategy Counselling:</span>
                    Helping clients identify their IP assets and formulate a
                    protection strategy.
                  </li>

                  <li>
                    <span className="font-bold">
                      Application Preparation and Filing:
                    </span>
                    Guiding clients through the process of preparing and
                    submitting applications for patents, trademarks, and
                    copyrights.
                  </li>

                  <li>
                    <span className="font-bold">
                      Legal Research and Analysis: 
                    </span>
                    Conducting patentability searches, trademark clearance
                    searches, and providing legal opinions on potential
                    infringement issues.
                  </li>

                  <li>
                    <span className="font-bold">Licensing and Agreements:</span>
                    Assisting with the drafting and negotiation of licensing
                    agreements, non-disclosure agreements (NDAs), and other
                    contracts involving IP.
                  </li>

                  <li>
                    <span className="font-bold">Educational Outreach:</span>
                     Organizing workshops and events to raise awareness about
                    the importance of IPRs among students and the broader
                    community.
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl p-8 bg-white shadow-xl mb-10">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">
                Impact
              </h4>
              <p className="text-lg text-gray-700 text-justify">
                The impact of IP Law Clinics is significant. They support
                economic development by enabling small businesses and
                entrepreneurs to protect their innovations, attract investment,
                and build their brands. For the clients, the clinic's assistance
                can be the difference between a great idea that gets copied and
                a sustainable business with a competitive advantage. For the
                legal system, these clinics foster a greater understanding of IP
                law and help ensure that legal protection is not solely the
                preserve of large corporations with substantial budgets.
              </p>
            </div>

            {/* Team Section */}
            {/* <div className="bg-purple-50 p-6 rounded-lg mb-10">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">Meet Our Team</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <span className="text-purple-700 font-bold text-2xl">RS</span>
                  </div>
                  <div className="font-semibold">Dr. R. Sharma</div>
                  <div className="text-sm text-gray-600">Faculty Coordinator</div>
                </div>
                <div className="bg-white p-4 rounded shadow text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <span className="text-purple-700 font-bold text-2xl">MK</span>
                  </div>
                  <div className="font-semibold">M. Khan</div>
                  <div className="text-sm text-gray-600">Student Lead</div>
                </div>
                <div className="bg-white p-4 rounded shadow text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <span className="text-purple-700 font-bold text-2xl">SP</span>
                  </div>
                  <div className="font-semibold">S. Patel</div>
                  <div className="text-sm text-gray-600">Legal Advisor</div>
                </div>
              </div>
            </div> */}

            {/* Resources Section */}
            {/* <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-purple-600 mb-4">Resources</h4>
                <ul className="space-y-3 text-gray-700">
                  <li><a href="#" className="text-purple-700 underline">IP Rights Handbook (PDF)</a></li>
                  <li><a href="#" className="text-purple-700 underline">Patent Application Form</a></li>
                  <li><a href="#" className="text-purple-700 underline">Recent Judgments on IP Law</a></li>
                  <li><a href="#" className="text-purple-700 underline">Helpline Numbers</a></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-purple-600 mb-4">Get Involved</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>Volunteer for outreach programs</li>
                  <li>Join research and publication teams</li>
                  <li>Participate in annual IP Awareness Week</li>
                  <li>Attend workshops and seminars</li>
                </ul>
              </div>
            </div> */}

            {/* Suggestions for Engagement */}
            {/* <div className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 p-8 rounded-lg text-white text-center shadow-xl mb-10">
              <h4 className="text-xl font-semibold mb-3">Contact & Collaboration</h4>
              <p className="mb-2">Email: ipclinic@smslawcollege.edu.in</p>
              <p className="mb-2">Phone: +91-98765-43211</p>
              <p className="mb-4">Office Hours: Mon-Fri, 10am - 4pm</p>

            </div> */}
          </section>
        </div>
      </main>
    </div>
  );
};
export default IntellectualPropertyLawClinicpage;
