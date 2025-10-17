"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { useToast } from "@/components/Toast/ToastProvider";

const Loginpage = () => {
  const router = useRouter();
  const { showToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    // if there's an existing token saved, redirect to dashboard
    try {
      const isLoggedIn = localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn");
      if (isLoggedIn === "true") router.replace("/admin/dashboard");
    } catch (e) {
      // ignore storage errors
    }
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

    setIsLoading(true);
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
        credentials: "include",
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
    showToast({ type: "error", title: "Login failed", message: data.message || "Login failed" });
        setIsLoading(false);
        return;
      }

      // Save token according to 'remember' preference; cookie may be HttpOnly
      try {
        if (data?.token) {
          if (remember) sessionStorage.removeItem('token');
          try { 
            if (remember) localStorage.setItem("token", data.token);
            else sessionStorage.setItem("token", data.token);
          } catch {}
        }
        // optimistic mark
        try {
          if (remember) localStorage.setItem("isLoggedIn", "true");
          else sessionStorage.setItem("isLoggedIn", "true");
        } catch {}
        // store user object if returned by the API
        if (data?.user) {
          try {
            const payload = JSON.stringify(data.user);
            if (remember) localStorage.setItem('user', payload);
            else sessionStorage.setItem('user', payload);
          } catch {}
        }
      } catch (e) {
        // ignore
      }

      showToast({ type: "success", title: "Signed in", message: "Login successful — redirecting…" });
      router.push("/admin/dashboard");
      setIsLoading(false);
     
    } catch (err) {
      console.error(err);
  showToast({ type: "error", title: "Network error", message: "Network error — please try again" });
      setIsLoading(false);
    }
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
            <p className="text-gray-500 text-sm">Sign in to your account to continue</p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 rounded"
                  />
                <span className="text-black">Remember me</span>
              </label>
            
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-md bg-purple-600 text-white font-medium px-4 py-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isLoading ? "opacity-70 cursor-wait" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
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
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
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
