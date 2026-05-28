"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/Toast/ToastProvider";
import { motion } from "framer-motion";
import { User, Mail, Lock, Phone, ArrowRight, ArrowLeft, UserPlus, BookOpen, GraduationCap, Bell, Calendar, Hash, MapPin, Building, CreditCard, ChevronDown, Eye, EyeOff } from "lucide-react";

const CustomSelect = ({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  icon: Icon,
  disabled = false
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`block w-full pl-11 pr-10 py-3.5 text-base border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm cursor-pointer flex items-center ${disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : 'text-gray-900'}`}
      >
        <span className={`block truncate ${!value ? 'text-gray-400' : ''}`}>
          {value ? value : placeholder}
        </span>
      </div>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <ChevronDown className={`h-5 w-5 ${disabled ? 'text-gray-300' : 'text-gray-400'} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
          <ul className="py-1">
            {options.map((opt: any, idx: number) => (
              <li
                key={idx}
                onClick={() => handleSelect(opt.value)}
                className={`px-4 py-2 hover:bg-purple-50 cursor-pointer text-sm transition-colors ${value === opt.value ? 'bg-purple-100 text-purple-700 font-medium' : 'text-gray-700'}`}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function StudentSignup() {
  const router = useRouter();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    enrollmentNumber: "",
    abcId: "",
    hscRollNumber: "",
    email: "",
    phone: "",
    birthdate: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    district: "",
    pincode: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [statesList, setStatesList] = useState<any[]>([]);
  const [districtsList, setDistrictsList] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json")
      .then(res => res.json())
      .then(data => {
        if (data && data.states) {
          setStatesList(data.states);
        }
      })
      .catch(err => {
        console.error("Failed to fetch states:", err);
        setStatesList([
          { state: "Gujarat", districts: ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"] }
        ]);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "state") {
      const stateObj = statesList.find(s => s.state === value);
      setDistrictsList(stateObj ? stateObj.districts : []);
      setFormData(prev => ({ ...prev, state: value, district: "" }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      showToast({
        type: "error",
        title: "Password Mismatch",
        message: "Your passwords do not match. Please try again."
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const res = await fetch("/api/student/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (data.success) {
        showToast({
          type: "success",
          title: "Registration Successful",
          message: "Your account has been created. Please login."
        });
        router.push("/student-panel/login");
      } else {
        showToast({
          type: "error",
          title: "Signup Failed",
          message: data.error || "Could not register your account."
        });
      }
    } catch (err) {
      console.error(err);
      showToast({
        type: "error",
        title: "Error",
        message: "Something went wrong. Please try again later."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col md:flex-row overflow-hidden">
      {/* Back Button - Absolute */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Left Side - College Info */}
      <div className="hidden md:flex md:w-1/2 relative p-12 text-white flex-col justify-between overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Law College background"
            className="object-cover w-full h-full"
          />
          {/* Deep Purple Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/85 to-purple-900/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-purple-900/40"></div>
        </div>

        <div className="relative z-10 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logos Row - Clean and Professional */}
            <div className="flex items-center gap-6 mb-10">
              {/* College Logo */}
              <div className="h-24 w-24 relative bg-white rounded-full shadow-2xl border-[3px] border-white/30 flex-shrink-0 overflow-hidden flex items-center justify-center">
                <Image src="/assets/logo2.png" alt="College logo" fill className="object-contain scale-[1.15]" />
              </div>

              {/* Divider */}
              <div className="h-16 w-[2px] bg-white/30 rounded-full"></div>

              {/* Other Logos */}
              <div className="flex gap-5 items-center bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/50">
                <div className="h-12 w-24 relative">
                  <Image src="/assets/headerImage/G20.png" alt="G20" fill className="object-contain" />
                </div>
                <div className="h-10 w-[1px] bg-gray-300"></div>
                <div className="h-12 w-10 relative">
                  <Image src="/assets/headerImage/mhrd.png" alt="MHRD" fill className="object-contain" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 drop-shadow-lg tracking-tight">
              Begin Your<br />Legal Journey
            </h1>
            <p className="text-purple-100 text-lg font-medium max-w-md mb-10 drop-shadow">
              Shri S.M Shah Law College, Mahesana
            </p>

            <div className="space-y-6 mt-4">
              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/80 text-white font-bold border border-purple-300 shadow-lg flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[1.1rem] drop-shadow-md">Personal Details</h3>
                  <p className="text-purple-100 text-sm mt-1 max-w-sm drop-shadow">Enter your full name, valid email address, and active phone number.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/80 text-white font-bold border border-purple-300 shadow-lg flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[1.1rem] drop-shadow-md">Create Password</h3>
                  <p className="text-purple-100 text-sm mt-1 max-w-sm drop-shadow">Choose a strong and secure password to protect your student account.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/80 text-white font-bold border border-purple-300 shadow-lg flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[1.1rem] drop-shadow-md">Complete Registration</h3>
                  <p className="text-purple-100 text-sm mt-1 max-w-sm drop-shadow">Click "Create Account" to join the portal and access study materials.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex items-start justify-center p-4 sm:p-8 md:py-12 bg-gray-50 relative overflow-y-auto h-full">

        {/* Mobile Back Button */}
        <Link
          href="/"
          className="md:hidden absolute top-6 left-6 z-50 flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-full text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-2xl bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 space-y-8 mt-12 md:mt-0"
        >
          <div>
            <div className="md:hidden mx-auto h-16 w-16 bg-purple-100 flex items-center justify-center rounded-2xl shadow-sm mb-6">
              <UserPlus className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Create Account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Join the student portal today
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSignup}>
            <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5">

              <div className="sm:col-span-2">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2 mb-2">Personal Details</h3>
              </div>

              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User className="h-5 w-5 text-gray-400" /></div>
                  <input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="John" />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User className="h-5 w-5 text-gray-400" /></div>
                  <input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="Doe" />
                </div>
              </div>

              {/* Birthdate */}
              <div>
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">Birthdate</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Calendar className="h-5 w-5 text-gray-400" /></div>
                  <input id="birthdate" name="birthdate" type="date" required value={formData.birthdate} onChange={handleChange} className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Phone className="h-5 w-5 text-gray-400" /></div>
                  <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="+91 9876543210" />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Mail className="h-5 w-5 text-gray-400" /></div>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="student@example.com" />
                </div>
              </div>

              <div className="sm:col-span-2 mt-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2 mb-2">Academic Details</h3>
              </div>

              {/* Enrollment Number */}
              <div>
                <label htmlFor="enrollmentNumber" className="block text-sm font-medium text-gray-700 mb-1">Enrollment Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Hash className="h-5 w-5 text-gray-400" /></div>
                  <input id="enrollmentNumber" name="enrollmentNumber" type="text" required value={formData.enrollmentNumber} onChange={handleChange} className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="e.g. 1234567890" />
                </div>
              </div>

              {/* ABC ID */}
              <div>
                <label htmlFor="abcId" className="block text-sm font-medium text-gray-700 mb-1">ABC (Apar ID)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><CreditCard className="h-5 w-5 text-gray-400" /></div>
                  <input id="abcId" name="abcId" type="text" required value={formData.abcId} onChange={handleChange} className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="ABC ID" />
                </div>
              </div>

              {/* HSC Roll Number */}
              <div className="sm:col-span-2">
                <label htmlFor="hscRollNumber" className="block text-sm font-medium text-gray-700 mb-1">HSC Roll Number (12th)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><GraduationCap className="h-5 w-5 text-gray-400" /></div>
                  <input id="hscRollNumber" name="hscRollNumber" type="text" required value={formData.hscRollNumber} onChange={handleChange} className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="12th Roll Number" />
                </div>
              </div>

              <div className="sm:col-span-2 mt-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2 mb-2">Address Details</h3>
              </div>

              {/* Address Line 1 */}
              <div className="sm:col-span-2">
                <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><MapPin className="h-5 w-5 text-gray-400" /></div>
                  <input id="addressLine1" name="addressLine1" type="text" required value={formData.addressLine1} onChange={handleChange} className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="House/Flat No., Building Name" />
                </div>
              </div>

              {/* Address Line 2 */}
              <div className="sm:col-span-2">
                <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-1">Address Line 2 (Optional)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><MapPin className="h-5 w-5 text-gray-400" /></div>
                  <input id="addressLine2" name="addressLine2" type="text" value={formData.addressLine2} onChange={handleChange} className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="Street, Area, Landmark" />
                </div>
              </div>

              {/* Pincode */}
              <div className="sm:col-span-2">
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><MapPin className="h-5 w-5 text-gray-400" /></div>
                  <input id="pincode" name="pincode" type="text" required value={formData.pincode} onChange={handleChange} className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="e.g. 384002" maxLength={6} pattern="[0-9]{6}" />
                </div>
              </div>

              {/* State */}
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <CustomSelect
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  options={statesList.map(s => ({ label: s.state, value: s.state }))}
                  placeholder="Select State"
                  icon={Building}
                />
              </div>

              {/* District */}
              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">District</label>
                <CustomSelect
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  options={districtsList.map(d => ({ label: d, value: d }))}
                  placeholder="Select District"
                  icon={Building}
                  disabled={!formData.state}
                />
              </div>

              <div className="sm:col-span-2 mt-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2 mb-2">Account Security</h3>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock className="h-5 w-5 text-gray-400" /></div>
                  <input id="password" name="password" type={showPassword ? "text" : "password"} required value={formData.password} onChange={handleChange} className="block w-full pl-11 pr-10 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="••••••••" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-purple-600 transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock className="h-5 w-5 text-gray-400" /></div>
                  <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} required value={formData.confirmPassword} onChange={handleChange} className="block w-full pl-11 pr-10 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm" placeholder="••••••••" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-purple-600 transition-colors cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 shadow-md transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
                {!isLoading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/student-panel/login"
                className="font-semibold text-purple-700 hover:text-purple-600 transition-colors"
              >
                Log in instead
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
