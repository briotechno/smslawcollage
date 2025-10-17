"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Mentor {
  name: string;
  title: string;
  post: string;
  experience: string;
  expertise: string;
  image: string;
}

const Faculty = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("token") || sessionStorage.getItem("token")
            : null;

        const headers: any = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch("/api/faculty", { headers });
        const data = await res.json();

        if (res.ok && data?.success) {
          setMentors(data.data || []);
        } else {
          setMentors([]);
        }
      } catch (err) {
        console.error("Failed to fetch faculty", err);
        setMentors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div id="Faculty" className="bg-gray-50 py-40 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900 mb-6">
        Faculty <span className="text-purple-600">Profile</span>
      </h1>
      <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>

      {/* Loader / Empty / Data */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <svg
            className="animate-spin h-10 w-10 text-purple-600 mb-4"
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
          {/* <p className="text-gray-600 text-lg">Loading faculty profiles...</p> */}
        </div>
      ) : mentors.length === 0 ? (
        <p className="text-center text-gray-600 py-20">
          No faculty profiles available.
        </p>
      ) : (
        <div className="space-y-12 max-w-7xl mx-auto">
          {mentors.map((mentor: any, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Image */}
              <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3 flex align-items-center justify-center">
                <Image
                  src={mentor.image || "/assets/Noimage.jpg"}
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
                    <span className="font-semibold text-gray-800">
                      Experience:
                    </span>{" "}
                    {mentor.experience}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Expertise:
                    </span>{" "}
                    {mentor.expertise}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Faculty;
