"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  Send,
  ArrowRight,
  GraduationCap,
  Scale,
  Users,
  Award,
} from "lucide-react";

const socialIcons = [
  {
    icon: Facebook,
    link: "https://facebook.com",
    color: "#3b5998",
    label: "Facebook",
  },
  {
    icon: Twitter,
    link: "https://twitter.com",
    color: "#00acee",
    label: "Twitter",
  },
  {
    icon: Youtube,
    link: "https://youtube.com",
    color: "#FF0000",
    label: "YouTube",
  },
  {
    icon: Instagram,
    link: "https://instagram.com",
    color: "#E4405F",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    link: "https://linkedin.com",
    color: "#0077B5",
    label: "LinkedIn",
  },
];

const quickLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Academics", href: "/academics" },
  { name: "Admission", href: "/admission" },
  { name: "Faculty", href: "/academics" },
  { name: "Research", href: "/research-clinic" },
  { name: "Contact", href: "/contact" },
];

const programs = [
  { name: "LLB Program", href: "/academics" },
  { name: "LLM Program", href: "/academics" },
  { name: "Diploma Courses", href: "/academics" },
  { name: "Certificate Courses", href: "/academics" },
  { name: "Skill Development", href: "/skill-development" },
  { name: "Internship", href: "/academics" },
];

const galleryItems = [
  { src: "/assets/Slider1.jpg", title: "Campus Life" },
  { src: "/assets/Slider2.jpg", title: "Guest Lecture" },
  { src: "/assets/Slider3.jpg", title: "Orientation" },
  { src: "/assets/Slider4.jpg", title: "Workshop" },
  { src: "/assets/Slider5.jpg", title: "Seminar" },
  { src: "/assets/Slider1.jpg", title: "Sports Day" },
];

const stats = [
  { icon: Users, number: "500+", label: "Students" },
  { icon: GraduationCap, number: "15+", label: "Years Experience" },
  { icon: Award, number: "50+", label: "Awards" },
  { icon: Scale, number: "95%", label: "Success Rate" },
];

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* College Info & Contact */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src="/assets/Logo.png"
                  alt="SMS Law College Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div className="ml-3">
                  <h3 className="text-xl font-bold text-white">
                    SMS Law College
                  </h3>
                  <p className="text-sm text-purple-200">Justice for All</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Empowering future legal professionals with comprehensive
                education, practical training, and ethical values that shape
                tomorrow's justice system.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">
                      SMS Law College
                      <br />
                      Mahesana – 380 006
                      <br />
                      Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" />
                  <p className="text-gray-300 text-sm">+91 98765 43210</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    info@smslawcollege.edu.in
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-white flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Mon - Fri: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-300 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Programs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">
                Programs
              </h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <Link
                      href={program.href}
                      className="text-gray-300 hover:text-purple-300 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">
                Get In Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-purple-800 border border-purple-700 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-purple-800 border border-purple-700 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-purple-800 border border-purple-700 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-purple-800 border border-purple-700 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-purple-500"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-purple-100" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-purple-500"
        >
          <h3 className="text-xl font-semibold mb-6 text-white text-center">
            Photo Gallery
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {galleryItems.map(({ src, title }, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-medium">Follow Us:</span>
              <div className="flex gap-3">
                {socialIcons.map(
                  ({ icon: Icon, link, color, label }, index) => (
                    <motion.a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={label}
                    >
                      <Icon size={18} color="#fff" />
                    </motion.a>
                  )
                )}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © Copyright {new Date().getFullYear()} SMS Law College. All
                Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Maintained by{" "}
                <a
                  href="https://www.briotechno.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0073aa] hover:underline"
                >
                  BRIOTECHNO
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
