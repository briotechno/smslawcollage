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
} from "lucide-react";
import Image from "next/image";

const GrievanceRedressCommittee = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const committeeMembers = [
    {
      name: "Dr. Mahesh Patel",
      designation: "Principal In charge",
      position: "Chairperson",
      email: "smslcmeh@gmail.com",
      phone: "+91-98792 85000",
    },
    {
      name: "Dr. Daxa Paramar",
      designation: "Assistant Professor",
      position: "Member",
      email: "smslcmeh@gmail.com",
      phone: "+91-94298 06033",
    },
    {
      name: "Dr. Bhargavi Rao",
      designation: "Assistant Professor",
      position: "Member",
      email: "smslcmeh@gmail.com",
      phone: "+91-94298 06033",
    },
    {
      name: "Ms. Janki Patel",
      designation: "Assistant Professor",
      position: "Member",
      email: "smslcmeh@gmail.com",
      phone: "+91-98792 85000",
    },
    {
      name: "Ms. Kavita Patel",
      designation: "Student",
      position: "Member",
      email: "smslcmeh@gmail.com",
      phone: "+91-98792 85000",
    }
  ];

  const grievanceTypes = [
    {
      icon: Scale,
      title: "Academic Grievances",
      description: "Issues related to academic performance, grading, curriculum, or faculty conduct",
      examples: ["Grade disputes", "Course content issues", "Faculty behavior"],
    },
    {
      icon: Users,
      title: "Administrative Grievances",
      description: "Problems with administrative processes, documentation, or services",
      examples: ["Admission issues", "Fee structure", "Documentation delays"],
    },
    {
      icon: Shield,
      title: "Infrastructure Grievances",
      description: "Concerns about campus facilities, resources, or maintenance",
      examples: ["Library access", "Classroom facilities", "Hostel issues"],
    },
    {
      icon: Heart,
      title: "Personal Grievances",
      description: "Personal issues affecting academic or campus life",
      examples: ["Harassment complaints", "Discrimination", "Personal safety"],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Submit Complaint",
      description: "File your grievance through the online portal or in person",
      icon: FileText,
    },
    {
      step: 2,
      title: "Acknowledgment",
      description: "Receive confirmation within 24 hours of submission",
      icon: CheckCircle,
    },
    {
      step: 3,
      title: "Investigation",
      description: "Committee investigates the matter within 7-15 days",
      icon: Shield,
    },
    {
      step: 4,
      title: "Resolution",
      description: "Final decision and action taken within 30 days",
      icon: Scale,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-32">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
             <div className="absolute inset-0">
               <Image
                 src="/assets/HeroSection/HeroSection6.jpeg"
                 alt="Legal Education in India"
                 fill
                 className="object-fill lg:scale-y-[1.6]"
                 priority
               />
               
             </div>
     
             
           </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            
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
              <p className="text-lg text-gray-700 leading-relaxed">
                The <strong className="text-purple-600">Grievance Redress Committee</strong> is
                constituted as per UGC Regulations, 2015, and the Sexual Harassment of Women at
                Workplace Act, 2013, to deal with complaints of sexual harassment at the
                educational institution.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our committee is committed to providing a safe, fair, and transparent mechanism
                for addressing student grievances. We ensure that every complaint is handled
                with utmost confidentiality and resolved in a timely manner.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The committee comprises experienced faculty members, external experts, and
                student representatives to ensure a balanced and comprehensive approach to
                grievance resolution.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
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
              Meet our dedicated committee members committed to ensuring fair and
              transparent grievance resolution.
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

      {/* Grievance Types Section */}
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
              Types of <span className="text-purple-600">Grievances</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We handle various types of grievances to ensure comprehensive support
              for all student concerns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {grievanceTypes.map((type, index) => (
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
              <Scale className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Grievance <span className="text-purple-600">Process</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined process ensures your grievances are handled efficiently
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
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
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
              Have a Grievance to Report?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              We're here to help. Submit your grievance through our secure portal
              or contact us directly. Your concerns matter to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                Submit Grievance
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

export default GrievanceRedressCommittee;
