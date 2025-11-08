"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  FileText,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Scale,
  Heart,
  Eye,
  Lock,
} from "lucide-react";
import Image from "next/image";

const InternalComplaintCommittee = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const committeeMembers = [
    {
      name: "Dr. Mahesh Patel",
      designation: "Princioal in Charge Faculty of Law",
      position: "Chairperson",
      email: "smslcmeh@gmail.com",
      phone: "+91-98792 85000",
    },
    {
      name: "Dr. Bhargavi Rao",
      designation: "Assistant Professor",
      position: "Member Secretary",
      email: "smslcmeh@gmail.com",
      phone: "+91-94298 06033",
    },
    {
      name: "Dr. Daxa Paramar",
      designation: "Assistant Professor",
      position: "Member",
      email: "smslcmeh@gmail.com",
      phone: "+91-94298 06033",
    },
    {
      name: "Dr. Kaushalraj Upadhyaya",
      designation: "Assistant Professor",
      position: "Member",
      email: "smslcmeh@gmail.com",
      phone: "+91-94298 06033",
    },
    {
      name: "Dr. Parima Raval ",
      designation: "Assistant Professor, HNG University, Patan",
      position: "Third Party Member",
      email: "smslcmeh@gmail.com",
      phone: "+91-94274 59570",
    },
    {
      name: "Ms. Nidhi Acharya",
      designation: "Student Representative (LL.M Sem -1  Batch- 2025-26)",
      position: "Student Member",
      email: "smslcmeh@gmail.com",
      phone: "+91-70162 76379",
    },
    {
      name: "Ms. Ekta Shukla",
      designation: "Student Representative (LL.M Sem -1 Batch- 2025-26)",
      position: "Student Member",
      email: "smslcmeh@gmail.com",
      phone: "+91-84693 26222",
    },
  ];

  const complaintTypes = [
    {
      icon: Scale,
      title: "Sexual Harassment",
      description: "Complaints related to sexual harassment at workplace",
      examples: ["Unwanted advances", "Inappropriate behavior", "Gender discrimination"],
    },
    {
      icon: Users,
      title: "Discrimination",
      description: "Issues related to discrimination based on various factors",
      examples: ["Caste discrimination", "Religious bias", "Age discrimination"],
    },
    {
      icon: Shield,
      title: "Workplace Harassment",
      description: "General workplace harassment and bullying",
      examples: ["Verbal abuse", "Intimidation", "Hostile environment"],
    },
    {
      icon: Heart,
      title: "Personal Safety",
      description: "Concerns about personal safety and security",
      examples: ["Threats", "Stalking", "Physical harassment"],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Complaint Submission",
      description: "Submit your complaint through secure channels",
      icon: FileText,
      duration: "Immediate",
    },
    {
      step: 2,
      title: "Initial Review",
      description: "Committee reviews and acknowledges complaint",
      icon: Eye,
      duration: "24-48 hours",
    },
    {
      step: 3,
      title: "Investigation",
      description: "Thorough investigation of the complaint",
      icon: Shield,
      duration: "7-15 days",
    },
    {
      step: 4,
      title: "Resolution",
      description: "Final decision and implementation of remedies",
      icon: Scale,
      duration: "30 days",
    },
  ];

  const confidentialityMeasures = [
    {
      icon: Lock,
      title: "Strict Confidentiality",
      description: "All complaints are handled with utmost confidentiality",
    },
    {
      icon: Shield,
      title: "Protection from Retaliation",
      description: "Complainants are protected from any form of retaliation",
    },
    {
      icon: Heart,
      title: "Support Services",
      description: "Counseling and support services for all parties involved",
    },
    {
      icon: Scale,
      title: "Fair Investigation",
      description: "Impartial and fair investigation process",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-32">
      {/* Hero Section */}
      <section className="relative w-full min-h-[130vh] sm:min-h-[120vh] md:min-h-[130vh] lg:min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/HeroSection/HeroSection7.jpeg"
            alt="Internal Complaint Committee"
            fill
             style={{ objectFit: "fill",transform:'scaleY(1.5)',marginTop:50 }}
            priority
          />
                </div>

       
      </section>

      {/* Introduction Section */}
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
              <Shield className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About the <span className="text-purple-600">Committee</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-justify text-gray-700 leading-relaxed">
                The <strong className="text-purple-600">Internal Complaints Committee (ICC)</strong> is
                constituted as per UGC Regulations, 2015, and the Sexual Harassment of Women at
                Workplace Act, 2013, to deal with complaints of sexual harassment at the
                educational institution.
              </p>

              <p className="text-lg text-justify text-gray-700 leading-relaxed">
                Our committee is committed to providing a safe, respectful, and inclusive
                environment for all members of the college community. We ensure that every
                complaint is handled with sensitivity, confidentiality, and fairness.
              </p>

              <p className="text-lg text-justify text-gray-700 leading-relaxed">
                The committee comprises experienced faculty members, external experts, and
                student representatives to ensure a balanced and comprehensive approach to
                complaint resolution.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">+91-98792 85000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">smslcmeh@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Mon-Fri: 9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Confidential Reporting</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Committee Members Section */}
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
              Committee <span className="text-purple-600">Members</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated committee members are committed to ensuring a safe and
              respectful environment for all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-purple-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{member.designation}</p>
                </div>
                <div className="space-y-2 flex flex-col items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-purple-600" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-purple-600" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complaint Types Section */}
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
              <FileText className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Types of <span className="text-purple-600">Complaints</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We handle various types of complaints to ensure comprehensive support
              for all community members.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complaintTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <div
                      key={exampleIndex}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
              <Scale className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Complaint <span className="text-purple-600">Process</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined process ensures complaints are handled efficiently
              and resolved in a timely manner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <div className="text-sm text-purple-600 font-medium">
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality Measures Section */}
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
              <Lock className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Confidentiality <span className="text-purple-600">Measures</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We maintain strict confidentiality and provide comprehensive protection
              for all parties involved in the complaint process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {confidentialityMeasures.map((measure, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <measure.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {measure.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {measure.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Need to File a Complaint?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              We're here to help. Submit your complaint through our secure portal
              or contact us directly. All complaints are handled with strict confidentiality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                File Complaint
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Contact Committee
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default InternalComplaintCommittee;
