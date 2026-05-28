"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  User, Mail, Phone, MapPin, Calendar, CreditCard, 
  GraduationCap, FileText, Building, Hash 
} from "lucide-react";

export default function StudentDashboard() {
  const router = useRouter();
  const [studentData, setStudentData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("studentToken");
      if (!token) {
        router.push("/student-panel/login");
        return;
      }

      try {
        const res = await fetch("/api/student/profile", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        
        if (data.success) {
          setStudentData(data.student);
        } else {
          // Token invalid or expired
          localStorage.removeItem("studentToken");
          localStorage.removeItem("studentData");
          router.push("/student-panel/login");
        }
      } catch (error) {
        console.error("Failed to fetch profile", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
      </div>
    );
  }

  if (!studentData) return null;

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {studentData.firstName}!</h1>
          <p className="text-gray-500 mt-1">Here are your registered student details.</p>
        </div>
        <button className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm transition-colors flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Download ID Card
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-purple-800 to-purple-600"></div>
          <div className="h-28 w-28 bg-white rounded-full p-1.5 z-10 mt-6 shadow-lg">
            <div className="h-full w-full bg-purple-100 rounded-full flex items-center justify-center border border-purple-200">
              <span className="text-3xl font-bold text-purple-700">
                {studentData.firstName[0]}{studentData.lastName[0]}
              </span>
            </div>
          </div>
          
          <h2 className="mt-4 text-xl font-bold text-gray-900">{studentData.firstName} {studentData.lastName}</h2>
          <div className="flex items-center gap-2 mt-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-100">
            <GraduationCap className="w-4 h-4" />
            Registered Student
          </div>
          
          <div className="w-full mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
              <Hash className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Enrollment Number</p>
                <p className="font-semibold text-gray-900">{studentData.enrollmentNumber || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-400 font-medium">ABC ID</p>
                <p className="font-semibold text-gray-900">{studentData.abcId || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
              <FileText className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-400 font-medium">HSC Roll Number</p>
                <p className="font-semibold text-gray-900">{studentData.hscRollNumber || 'N/A'}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Details */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Personal & Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3">Personal & Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400 font-medium">Full Name</p>
                  <p className="font-semibold text-gray-900">{studentData.firstName} {studentData.lastName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400 font-medium">Date of Birth</p>
                  <p className="font-semibold text-gray-900">{studentData.birthdate || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email Address</p>
                  <p className="font-semibold text-gray-900">{studentData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400 font-medium">Mobile Number</p>
                  <p className="font-semibold text-gray-900">{studentData.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Address Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3">Address Details</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-1">Full Address</p>
                  <p className="font-semibold text-gray-900">
                    {studentData.addressLine1}
                    {studentData.addressLine2 && <><br />{studentData.addressLine2}</>}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                  <Building className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-400 font-medium">District</p>
                    <p className="font-semibold text-gray-900">{studentData.district || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                  <Building className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-400 font-medium">State</p>
                    <p className="font-semibold text-gray-900">{studentData.state || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Pincode</p>
                    <p className="font-semibold text-gray-900">{studentData.pincode || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
