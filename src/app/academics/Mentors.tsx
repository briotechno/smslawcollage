"use client";
import Image from "next/image";
import React from "react";

const mentors = [
  {
    name: "Hon’ble Mr. Justice Ashokkumar Laxminarayan Dave",
    title: "Former Judge of Gujarat High Court",
    image: "/assets/Noimage.jpg",
  },
  {
    name: "Hon’ble Mr. Justice Babulal Chandulal Patel",
    title:
      "Former Chief Justice of Jammu & Kashmir High Court and Delhi High Court",
    image: "/assets/Noimage.jpg",
  },
  {
    name: "Hon’ble Ms. Justice Rekha Manharlal Doshit",
    title: "Former Judge of Gujarat High Court",
    image: "/assets/Noimage.jpg",
  },
  {
    name: "Hon’ble Mr. Justice Ravikumar Rameshwardayal Tripathi",
    title: "Former Judge of Gujarat High Court",
    image: "/assets/Noimage.jpg",
  },
];

const Mentors = () => {
  return (
    <section id="Mentors" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900 mb-6">
          Mentors <span className="text-purple-600">On Campus</span>
        </h1>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>

        {/* Mentors List */}
        <div className="space-y-12">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
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
