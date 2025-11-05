"use client";

import React, { useState } from "react";
import { init, send } from "@emailjs/browser";

const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);
    // EmailJS SDK credentials (dummy values) - replace with real IDs or env vars
    const SERVICE_ID = "service_dummy";
    const TEMPLATE_ID = "template_dummy";
    const USER_ID = "user_dummy";

    const sendEmail = async (payload: { name: string; email: string; phone: string; message: string; }) => {
      try {
        // initialize EmailJS (safe to call client-side for public user ID)
        try { init(USER_ID); } catch (e) { /* ignore init errors */ }

        const template_params = {
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          message: payload.message,
        };

        await send(SERVICE_ID, TEMPLATE_ID, template_params);
        return true;
      } catch (e) {
        console.error("EmailJS SDK send error", e);
        return false;
      }
    };

    try {
      const emailOk = await sendEmail(form as any);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        if (emailOk) {
          alert("Feedback submitted and email sent successfully!");
        } else {
          alert("Feedback submitted but email could not be sent.");
        }
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        if (emailOk) {
          alert("Email sent but saving feedback failed on server.");
        } else {
          alert("Something went wrong while submitting feedback.");
        }
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while submitting feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Feedback" className="bg-gray-50 py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900 mb-6">
          <span className="text-purple-600">Feedback</span>
        </h1>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          We value your feedback! Please share your thoughts and suggestions
          about our programs, faculty, or facilities — it helps us improve and
          serve you better.
        </p>

        {/* Feedback Form */}
        <div className="bg-white shadow-md rounded-2xl p-8 md:p-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 focus:ring-2 focus:ring-[#007BAA] focus:border-transparent rounded-md p-3 text-gray-800"
                required
              />
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full border border-gray-300 focus:ring-2 focus:ring-[#007BAA] focus:border-transparent rounded-md p-3 text-gray-800"
                required
              />
            </div>

            {/* Phone */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 focus:ring-2 focus:ring-[#007BAA] focus:border-transparent rounded-md p-3 text-gray-800"
                required
              />
            </div>

            {/* Message */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                className="w-full border border-gray-300 focus:ring-2 focus:ring-[#007BAA] focus:border-transparent rounded-md p-3 text-gray-800"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 sm:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-[#005f82] transition duration-200"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Feedback"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
