"use client";

import React from "react";
import Image from "next/image";

const mentors = [
  {
    name: "Hon’ble Mr. Justice Ashokkumar Laxminarayan Dave",
    title: "Former Judge of Gujarat High Court",
    post: "Mentor & Visiting Faculty",
    experience: "35 Years",
    expertise: "Constitutional Law, Criminal Law, Legal Ethics",
    image: "/assets/Noimage.jpg",
  },
  {
    name: "Hon’ble Mr. Justice Babulal Chandulal Patel",
    title:
      "Former Chief Justice of Jammu & Kashmir High Court and Delhi High Court",
    post: "Guest Mentor",
    experience: "40 Years",
    expertise: "Civil Procedure, Administrative Law, Human Rights",
    image: "/assets/Noimage.jpg",
  },
  {
    name: "Hon’ble Ms. Justice Rekha Manharlal Doshit",
    title: "Former Judge of Gujarat High Court",
    post: "Mentor - Legal Studies",
    experience: "32 Years",
    expertise: "Corporate Law, Family Law, Gender Justice",
    image: "/assets/Noimage.jpg",
  },
  {
    name: "Hon’ble Mr. Justice Ravikumar Rameshwardayal Tripathi",
    title: "Former Judge of Gujarat High Court",
    post: "Senior Mentor",
    experience: "38 Years",
    expertise: "Criminal Law, Constitutional Law, Judicial Process",
    image: "/assets/Noimage.jpg",
  },
];

const Faculty = () => {
  return (
    <div id="Faculty" className="bg-gray-50 py-40 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900 mb-6">
        Faculty <span className="text-purple-600">Profile</span>
      </h1>
      <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>

      {/* Faculty List */}
      <div className="space-y-12 max-w-7xl mx-auto">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3 flex justify-center">
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={180}
                height={180}
                className="rounded-lg object-cover shadow-md"
              />
            </div>

            {/* Details */}
            <div className="md:w-2/3 text-center md:text-left space-y-3">
              <h3 className="text-xl font-semibold text-purple-600">
                {mentor.name}
              </h3>
              <p className="text-gray-700 font-medium">{mentor.title}</p>

              <div className="text-gray-600 space-y-1">
                <p>
                  <span className="font-semibold text-gray-800">Post:</span>{" "}
                  {mentor.post}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Experience:</span>{" "}
                  {mentor.experience}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Expertise:</span>{" "}
                  {mentor.expertise}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
