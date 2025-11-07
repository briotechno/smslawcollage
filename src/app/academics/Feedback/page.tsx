"use client";

import React, { useState } from "react";
import { init, send } from "@emailjs/browser";
import { useToast } from "@/components/Toast/ToastProvider";

const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Prevent non-numeric characters in phone field
    if (name === 'phone' && value !== '' && !/^[+\d\s]*$/.test(value)) {
      return;
    }
    
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    // Name validation: at least 3 characters, only letters and spaces
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!nameRegex.test(form.name.trim())) {
      showToast({
        type: "warning",
        title: "Invalid Name",
        message: "Please enter a valid name with at least 3 characters, using only letters and spaces.",
      });
      return false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.email)) {
      showToast({
        type: "warning",
        title: "Invalid Email",
        message: "Please enter a valid email address.",
      });
      return false;
    }

    // Phone validation: Indian phone number (10 digits, optional +91 prefix)
    const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(form.phone.replace(/\s/g, ""))) {
      showToast({
        type: "warning",
        title: "Invalid Phone Number",
        message: "Please enter a valid 10-digit Indian phone number.",
      });
      return false;
    }

    // Message validation: minimum 10 characters
    if (form.message.trim().length < 10) {
      showToast({
        type: "warning",
        title: "Message Too Short",
        message: "Please write a message with at least 10 characters.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    // EmailJS SDK credentials (dummy values) - replace with real IDs or env vars
    const SERVICE_ID = "service_rewmnvn";
    const TEMPLATE_ID = "template_a3fkrrr";
    const USER_ID = "p8hpaHux6lPBkME77";

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

      if (emailOk) {
          showToast({
            type: "success",
            title: "Thank You!",
            message: "Your feedback has been submitted.",
          });
        } else {
          showToast({
            type: "error",
            title: "Oops!",
            message: "Something went wrong. Please confirm your details and try again",
          });
        }
        setForm({ name: "", email: "", phone: "", message: "" });
     
      
    } catch (err) {
      console.error(err);
      showToast({
        type: "error",
        title: "Submission Failed",
        message: "We couldn't submit your feedback. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Feedback" className="bg-gray-50 py-48 px-4 sm:px-6 lg:px-8">
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
                placeholder="Enter your full name (min. 3 characters)"
                className="w-full border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md p-3 text-gray-800"
                pattern="[A-Za-z\s]{3,}"
                title="Name must contain at least 3 letters (no numbers or special characters)"
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
                className="w-full border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md p-3 text-gray-800"
                pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Please enter a valid email address"
                required
              />
            </div>

            {/* Phone */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                className="w-full border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md p-3 text-gray-800"
                pattern="(?:\+91)?[6-9]\d{9}"
                title="Please enter a valid 10-digit Indian mobile number"
                maxLength={13}
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
                placeholder="Write your message (min. 10 characters)..."
                rows={5}
                className="w-full border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md p-3 text-gray-800"
                minLength={10}
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
