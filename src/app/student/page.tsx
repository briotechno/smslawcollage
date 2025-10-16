"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Library,
  Scale,
  Target,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";

const StudentPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const studentStats = [
    { icon: Users, number: "500+", label: "Active Students" },
    { icon: Award, number: "95%", label: "Pass Rate" },
    { icon: BookOpen, number: "15+", label: "Programs Offered" },
    { icon: Globe, number: "50+", label: "Countries Represented" },
  ];

  const programs = [
    {
      title: "Bachelor of Laws (LL.B)",
      duration: "3 Years",
      type: "Undergraduate",
      description: "Comprehensive foundation in legal principles and practice",
      features: [
        "Core Legal Subjects",
        "Moot Court Training",
        "Internship Program",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Master of Laws (LL.M)",
      duration: "2 Years",
      type: "Postgraduate",
      description: "Advanced specialization in various legal fields",
      features: [
        "Specialization Tracks",
        "Research Thesis",
        "International Exposure",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Diploma in Legal Practice",
      duration: "1 Year",
      type: "Professional",
      description: "Practical training for legal practice and advocacy",
      features: ["Court Practice", "Client Counseling", "Legal Drafting"],
      color: "from-green-500 to-green-600",
    },
  ];

  const studentLife = [
    {
      icon: Users,
      title: "Student Organizations",
      description:
        "Join various clubs and societies for networking and skill development",
      activities: ["Debate Society", "Moot Court Club", "Legal Aid Society"],
    },
    {
      icon: Calendar,
      title: "Campus Events",
      description:
        "Regular seminars, workshops, and cultural events throughout the year",
      activities: ["Legal Seminars", "Cultural Festivals", "Sports Events"],
    },
    {
      icon: Library,
      title: "Study Spaces",
      description: "Modern library facilities with 24/7 access and study rooms",
      activities: ["Digital Library", "Group Study Rooms", "Research Labs"],
    },
    {
      icon: Heart,
      title: "Student Support",
      description:
        "Comprehensive support services for academic and personal development",
      activities: ["Counseling Services", "Career Guidance", "Financial Aid"],
    },
  ];

  const resources = [
    {
      icon: Library,
      title: "Digital Library",
      description: "Access to 50,000+ legal books, journals, and databases",
      access: "24/7 Online Access",
    },
    {
      icon: Scale,
      title: "Moot Court",
      description: "State-of-the-art moot court for practical legal training",
      access: "Scheduled Sessions",
    },
    {
      icon: Globe,
      title: "International Programs",
      description: "Exchange programs and international legal exposure",
      access: "Application Based",
    },
    {
      icon: Shield,
      title: "Career Services",
      description: "Placement assistance and career development programs",
      access: "All Students",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      program: "LL.B Graduate",
      year: "2023",
      content:
        "SMS Law College provided me with excellent legal education and practical training that prepared me for my career in corporate law.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      program: "LL.M Student",
      year: "2024",
      content:
        "The faculty's expertise and the comprehensive curriculum have given me deep insights into international law and human rights.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      program: "LL.B Graduate",
      year: "2022",
      content:
        "The moot court training and internship opportunities were instrumental in building my confidence as a legal professional.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[130vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/Slider2.jpg"
            alt="SMS Law College Students"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl xl:max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4 sm:mb-6"
              >
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600/90 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
                  Student Life at SMS Law College
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                Your Journey to
                <span className="block text-purple-300">Legal Excellence</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-xl"
              >
                Join a vibrant community of aspiring legal professionals.
                Experience world-class education, practical training, and
                comprehensive support that shapes tomorrow's legal leaders.
              </motion.p>

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Watch Student Stories
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  Apply Now
                </button>
              </motion.div> */}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {studentStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/10 rounded-full mb-4 group-hover:bg-purple-600/20 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <GraduationCap className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Academic <span className="text-purple-600">Programs</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of legal programs designed to
              prepare you for success in the legal profession.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
                      {program.type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  {/* <button className="w-full bg-gray-100 hover:bg-purple-600 text-gray-700 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Student <span className="text-purple-600">Life</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience a vibrant campus life with diverse activities, support
              services, and opportunities for personal and professional growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentLife.map((life, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/10 rounded-full mb-4">
                  <life.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {life.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {life.description}
                </p>
                <div className="space-y-1">
                  {life.activities.map((activity, activityIndex) => (
                    <div
                      key={activityIndex}
                      className="text-sm text-gray-500 flex items-center justify-center gap-1"
                    >
                      <Star className="w-3 h-3 text-purple-600" />
                      {activity}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Student <span className="text-purple-600">Resources</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive resources and support services designed to
              enhance your academic journey and career development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600/10 rounded-xl mb-4">
                    <resource.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {resource.description}
                  </p>
                  <div className="text-xs text-purple-600 font-medium">
                    {resource.access}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <Heart className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Student <span className="text-purple-600">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our students about their transformative experiences at
              SMS Law College.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.program} • {testimonial.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Start Your Legal Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join hundreds of successful legal professionals who began their
              careers at SMS Law College. Apply now and take the first step
              towards your legal career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Apply Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StudentPage;
