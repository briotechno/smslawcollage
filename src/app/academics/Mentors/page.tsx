"use client";
import Image from "next/image";
import React from "react";

const mentors = [
  {
    name: "Hon'ble Mr. Justice V. P. Patel",
    title: "Former Judge, High Court of Gujarat ",
    image: "/assets/Mentors/V. P. Patel.jpg",
  },
  {
    name: "Hon'ble Dr. Justice Ashokkumar C. Joshi",
    title: "Former Judge, High Court of Gujarat ",
    image: "/assets/Mentors/Ashokkumar C. Joshi.png",
  },
  {
    name: "Dr. Joseph Aristotle S",
    title: "Senior Advocate, Supreme Court of India | Former Standing Counsel, State Of Tamil Nadu | Former Secretary, Supreme Court Advocate On Record Association | Former Standing Counsel, State Of Karnataka | Advocate On Record",
    image: "/assets/Mentors/Joseph Aristotle S..png",
  },
  {
    name: "Adv. Ms. Priya Aristotal (Advocate on Record)",
    title: "Advocate, Supreme Court of India",
    image: "/assets/Mentors/Ms. Priya Aristotal.png",
  },
  {
    name: "Pro (Dr)  K.C Barot",
    title: "M.A, LL.B, M.Phil, Ph.D / L.D Arts College, Ahmedabad",
    image: "/assets/Mentors/K.C Barot.png",
  },
];

const Mentors = () => {
  return (
    <section id="Mentors" className="py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900 mb-6">
          Mentors <span className="text-purple-600">On Campus</span>
        </h1>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>

        <div className="bg-white shadow-md rounded-xl p-6 md:p-10 mb-10">
          <p className="text-gray-700 leading-relaxedtext-justify">
            A mentor in legal education is crucial for bridging the gap between academic study and professional practice. They offer invaluable practical insights, ethical guidance, and real-world wisdom that textbooks often miss. A mentor helps shape a student's professional identity, offering a safe space for discussing career aspirations and navigating the complexities of the legal field. Through personalized feedback and encouragement, they build confidence, refine critical thinking skills, and model professional integrity. Ultimately, the mentor’s role is about holistic development, ensuring students are not just knowledgeable, but also ethical, competent, and ready to thrive as future legal professionals.
          </p>
        </div>

        {/* Mentors List */}
        <div className="space-y-12">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Image */}
              <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Details */}
              <div className="md:w-2/3 text-center md:text-left space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-600">
                  {mentor.name}
                </h3>
                <p className="text-gray-700">{mentor.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
