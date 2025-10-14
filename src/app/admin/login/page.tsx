"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { GoAlert } from "react-icons/go";

const Loginpage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });

  // Redirect if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    // if (isLoggedIn) router.push("/dashboard");
  }, [router]);

  const submit = async () => {
    let hasError = false;
    const newError = { email: "", password: "" };

    if (!email) {
      newError.email = "Username is required!";
      hasError = true;
    }
    if (!password) {
      newError.password = "Password is required!";
      hasError = true;
    }

    setError(newError);
    if (hasError) return;
    router.push("/admin/dashboard");
    // try {
    //   const res = await fetch("https://dummyjson.com/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ username: email, password, expiresInMins: 30 }),
    //   });

    //   const data = await res.json();

    //   if (res.ok) {
    //     localStorage.setItem("isLoggedIn", "true");
    //     localStorage.setItem("user", JSON.stringify(data));
    //     router.push("/admin/dashboard");
    //   } else {
    //     alert(data.message || "Login failed");
    //   }
    // } catch (err) {
    //   console.error(err);
    //   alert("Something went wrong!");
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <main className="w-full max-w-md">
        <section className="bg-white shadow-lg rounded-2xl p-8">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              A
            </div>
            <h1 className="text-2xl font-semibold text-purple-600">Welcome back</h1>
            <p className="text-gray-500 text-sm">
              Sign in to your account to continue
            </p>
          </div>

          <form className="space-y-4">

            {/* Username Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Username
              </label>
              <div className="relative mt-1">
                <input
                  id="email"
                  placeholder="Enter your username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`text-black block w-full rounded-md shadow-sm p-3 pr-10 ${
                    error.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  }`}
                />

                {error.email && (
                  <div className="flex items-center gap-2 mt-1">
                    <GoAlert className="text-red-500 text-lg" />
                    <p className="text-red-600 text-sm">{error.email}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={` text-black block w-full rounded-md shadow-sm p-3 pr-10 ${
                    error.password
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>

                {error.password && (
                  <div className="flex items-center gap-2 mt-1">
                    <GoAlert className="text-red-500 text-lg" />
                    <p className="text-red-600 text-sm">{error.password}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded" />
                <span className="text-black">Remember me</span>
              </label>
              <a href="#" className="text-black hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <div>
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-purple-600 text-white font-medium px-4 py-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={submit}
              >
                Sign in
              </button>
            </div>

            {/* <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="#" className="text-indigo-600 font-medium hover:underline">
                Sign up
              </a>
            </p> */}
          </form>
        </section>

        <p className="mt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </main>
    </div>
  );
};

export default Loginpage;
