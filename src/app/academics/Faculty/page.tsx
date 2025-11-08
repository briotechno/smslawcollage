"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Mentor {
  id?: number;
  name: string;
  title?: string;
  post?: string;
  experience?: string;
  expertise?: string;
  image?: string;
  email?: string;
  phone?: string;
}

const Faculty = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);

  // Small sample administrative staff fallback
  const AdministrativeStaff: Mentor[] = [
    {
      name: "Mr. Manish Patel",
      title: "M.Com, B.Ed, PGDCA, Ph.D (Pursuing)",
      post: "Jr. Clerk",
      image: "/assets/admin_staff/manish_patel.jpeg",
    },
    { name: "Mr. Vijay Bhil", post: "Peon", image: "" },
    { name: "Ms. Jyostanaben K Makavana", post: "Sweeper", image: "" },
  ];

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

  const formatExperience = (exp?: string) => {
    if (!exp) return "Not specified";
    return exp;
  };

  const Card: React.FC<{ person: Mentor }> = ({ person }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden">
      <div className="p-6 flex flex-col items-center text-center">
        <div className="w-28 h-28 mb-4 relative rounded-full overflow-hidden shadow-sm flex items-center justify-center">
          <Image
            src={person.image || "/assets/Noimage.jpg"}
            alt={person.name}
            fill
            sizes="112px"
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-purple-600">{person.name}</h3>
        {person.title && (
          <p className="text-sm text-gray-600">{person.title}</p>
        )}
        <p className="mt-2 text-sm text-gray-700">
          <span className="font-medium text-gray-800">Post:</span>{" "}
          {person.post || "-"}
        </p>

        <div className="mt-3 text-sm text-gray-600 space-y-1 w-full">
          <p>
            <span className="font-semibold text-gray-800">Experience:</span>{" "}
            {formatExperience(person.experience)}
          </p>
          {person.expertise && (
            <p>
              <span className="font-semibold text-gray-800">Expertise:</span>{" "}
              {person.expertise}
            </p>
          )}
        </div>

        <div className="mt-4 flex gap-3">
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="px-3 py-1 text-xs rounded-full bg-purple-50 text-purple-700 border border-purple-100"
            >
              Email
            </a>
          )}
          {person.phone && (
            <a
              href={`tel:${person.phone}`}
              className="px-3 py-1 text-xs rounded-full bg-purple-50 text-purple-700 border border-purple-100"
            >
              Call
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="Faculty" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-900 mb-3">
          Faculty <span className="text-purple-600">Profiles</span>
        </h1>

        <div className="flex items-center justify-center mb-6">
          <div className="w-24 h-1 bg-purple-600"></div>
        </div>

        {/* Main heading shown above the faculty grid (matches Administrative Staff style) */}
        <h1 className="text-2xl sm:text-3xl text-center font-bold text-gray-900 my-10 mb-2">
          Faculty <span className="text-purple-600">Profile</span>
        </h1>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-10"></div>

        {/* Loader / Empty / Data */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-10">
            <svg
              className="animate-spin h-8 w-8 text-purple-600 mb-4"
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
          </div>
        ) : mentors.length === 0 ? (
          <p className="text-center text-gray-600 py-10">
            No faculty profiles available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors
              ?.sort((a: any, b: any) => (a.id || 0) - (b.id || 0))
              ?.map((mentor: any) => (
                <Card key={mentor.id || mentor.name} person={mentor} />
              ))}
          </div>
        )}

        {/* Administrative staff */}
        <h2 className="text-2xl sm:text-3xl text-center font-bold text-gray-900 my-10 mb-2">
          Administrative <span className="text-purple-600">Staff</span>
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AdministrativeStaff.map((p, i) => (
            <Card key={`admin-${i}`} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
