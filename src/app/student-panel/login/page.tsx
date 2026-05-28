"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/Toast/ToastProvider";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, BookOpen, ArrowLeft, GraduationCap, Bell, User, Eye, EyeOff } from "lucide-react";

export default function StudentLogin() {
  const router = useRouter();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/student/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ loginId, password }),
      });
      const data = await res.json();

      if (data.success) {
        // Save token and student info for the dashboard
        localStorage.setItem("studentToken", data.token);
        localStorage.setItem("studentData", JSON.stringify(data.student));
        showToast({
          type: "success",
          title: "Login Successful",
          message: "Welcome to your student dashboard!"
        });
        router.push("/student-panel/dashboard");
      } else {
        showToast({
          type: "error",
          title: "Login Failed",
          message: data.error || "Invalid credentials."
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

      {/* Left Side - College Info (Hidden on very small screens) */}
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
              Shri S.M Shah<br />Law College
            </h1>
            <p className="text-purple-100 text-lg font-medium max-w-md mb-10 drop-shadow">
              Avni Seeds Vidhya Sankul Nagalpur Highway Mahesana-384002
            </p>

            <div className="space-y-6 mt-4">
              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/80 text-white font-bold border border-purple-300 shadow-lg flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[1.1rem] drop-shadow-md">Enter Credentials</h3>
                  <p className="text-purple-100 text-sm mt-1 max-w-sm drop-shadow">Provide your registered Email address or Student ID along with your password.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/80 text-white font-bold border border-purple-300 shadow-lg flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[1.1rem] drop-shadow-md">Secure Login</h3>
                  <p className="text-purple-100 text-sm mt-1 max-w-sm drop-shadow">Ensure your details are correct. Check 'Remember me' for convenience next time.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/80 text-white font-bold border border-purple-300 shadow-lg flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[1.1rem] drop-shadow-md">Access Dashboard</h3>
                  <p className="text-purple-100 text-sm mt-1 max-w-sm drop-shadow">Click on the "Sign In" button to securely access your academic portal.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 md:p-12 bg-gray-50 relative overflow-y-auto h-full">

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
          className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 space-y-8"
        >
          <div>
            <div className="md:hidden mx-auto h-16 w-16 bg-purple-100 flex items-center justify-center rounded-2xl shadow-sm mb-6">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Sign In
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Access your student portal
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-5">
              <div>
                <label htmlFor="login-id" className="block text-sm font-medium text-gray-700 mb-1">
                  Enrollment Number or Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="login-id"
                    name="loginId"
                    type="text"
                    autoComplete="username"
                    required
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    className="block w-full pl-11 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm"
                    placeholder="e.g. EN12345678 or 9876543210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-12 py-3.5 text-base text-gray-900 placeholder-gray-400 border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-purple-600 transition-colors cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Eye className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 cursor-pointer">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500 transition-colors">
                  Forgot password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 shadow-md transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing In..." : "Sign In"}
                {!isLoading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/student-panel/signup"
                className="font-semibold text-purple-700 hover:text-purple-600 transition-colors"
              >
                Create one now
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
