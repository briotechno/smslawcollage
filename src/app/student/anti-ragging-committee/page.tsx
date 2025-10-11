"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  AlertTriangle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Scale,
  Heart,
  FileText,
  Eye,
  Ban,
} from "lucide-react";
import Image from "next/image";

const AntiRaggingCommittee = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const committeeMembers = [
    {
      name: "Dr. Mayuri H. Pandya",
      designation: "Dean, Faculty of Law",
      position: "Chairperson",
      email: "dean@smslawcollege.edu",
      phone: "+91-9876543210",
    },
    {
      name: "Ms. Vidhi Shah",
      designation: "Assistant Professor",
      position: "Member Secretary",
      email: "vidhi.shah@smslawcollege.edu",
      phone: "+91-9876543211",
    },
    {
      name: "Ms. Payal Mehta",
      designation: "Assistant Professor (Non-Law)",
      position: "Member",
      email: "payal.mehta@smslawcollege.edu",
      phone: "+91-9876543212",
    },
    {
      name: "Ms. Suja Nair",
      designation: "Assistant Professor (Law)",
      position: "Member",
      email: "suja.nair@smslawcollege.edu",
      phone: "+91-9876543213",
    },
    {
      name: "Dr. Prachi Motiyani",
      designation: "Assistant Professor, Gujarat University",
      position: "Third Party Member",
      email: "prachi.motiyani@gujaratuniversity.edu",
      phone: "+91-9876543214",
    },
    {
      name: "Ms. Urvashi Sharma",
      designation: "Student Representative (Semester I, 2021-26 Batch)",
      position: "Student Member",
      email: "urvashi.sharma@student.smslawcollege.edu",
      phone: "+91-9876543215",
    },
  ];

  const antiRaggingMeasures = [
    {
      icon: Shield,
      title: "Prevention Programs",
      description: "Comprehensive awareness programs to prevent ragging incidents",
      measures: ["Orientation sessions", "Anti-ragging workshops", "Student counseling"],
    },
    {
      icon: Eye,
      title: "Monitoring Systems",
      description: "24/7 monitoring and surveillance to ensure student safety",
      measures: ["CCTV surveillance", "Regular patrols", "Anonymous reporting"],
    },
    {
      icon: Scale,
      title: "Legal Framework",
      description: "Strict adherence to UGC regulations and legal provisions",
      measures: ["UGC guidelines compliance", "Legal action against offenders", "Documentation"],
    },
    {
      icon: Heart,
      title: "Support Services",
      description: "Counseling and support for victims of ragging",
      measures: ["Psychological support", "Medical assistance", "Academic support"],
    },
  ];

  const consequences = [
    {
      level: "Minor Offense",
      actions: ["Warning", "Community service", "Written apology"],
      description: "First-time minor violations with educational focus",
    },
    {
      level: "Moderate Offense",
      actions: ["Suspension (1-2 weeks)", "Parent notification", "Counseling"],
      description: "Repeated violations or moderate severity incidents",
    },
    {
      level: "Serious Offense",
      actions: ["Suspension (1-3 months)", "Academic penalty", "Legal action"],
      description: "Severe violations requiring immediate intervention",
    },
    {
      level: "Extreme Offense",
      actions: ["Expulsion", "Criminal charges", "Permanent ban"],
      description: "Most severe cases with criminal implications",
    },
  ];

  const reportingMethods = [
    {
      method: "Online Portal",
      description: "Submit complaints through our secure online system",
      icon: FileText,
      availability: "24/7",
    },
    {
      method: "Phone Helpline",
      description: "Call our dedicated anti-ragging helpline",
      icon: Phone,
      availability: "24/7",
    },
    {
      method: "Email",
      description: "Send detailed complaints via email",
      icon: Mail,
      availability: "24/7",
    },
    {
      method: "In-Person",
      description: "Visit the committee office for direct reporting",
      icon: Users,
      availability: "Mon-Fri: 9 AM - 5 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/Slider2.jpg"
            alt="Anti-Ragging Committee"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-purple-600/90 text-white text-sm font-semibold rounded-full mb-4">
                  Academic Year 2024-25
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Anti-Ragging
                <span className="block text-purple-300">Committee</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed"
              >
                Committed to creating a safe, respectful, and inclusive environment
                for all students. Zero tolerance for ragging in any form.
              </motion.p>
            </div>
          </div>
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
              <Ban className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Zero Tolerance <span className="text-purple-600">Policy</span>
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
                The <strong className="text-purple-600">Anti-Ragging Committee</strong> is
                constituted as per UGC Regulations, 2015, to prevent and address ragging
                incidents in educational institutions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We maintain a <strong>zero-tolerance policy</strong> towards ragging in any form.
                Our committee ensures immediate action against perpetrators and provides
                comprehensive support to victims.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The committee comprises experienced faculty members, external experts, and
                student representatives to ensure fair and impartial handling of all cases.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">+91-9876543210 (24/7)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">anti-ragging@smslawcollege.edu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Immediate Response Guaranteed</span>
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
              Our dedicated committee members are committed to maintaining a safe
              and respectful campus environment.
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
                <div className="space-y-2">
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

      {/* Anti-Ragging Measures Section */}
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
              Anti-Ragging <span className="text-purple-600">Measures</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive measures to prevent ragging and ensure student safety
              and well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {antiRaggingMeasures.map((measure, index) => (
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
                    <measure.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {measure.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {measure.description}
                </p>
                <div className="space-y-2">
                  {measure.measures.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences Section */}
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
              Consequences of <span className="text-purple-600">Ragging</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strict disciplinary action will be taken against anyone found guilty
              of ragging, with consequences ranging from warnings to expulsion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consequences.map((consequence, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {consequence.level}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {consequence.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {consequence.actions.map((action, actionIndex) => (
                    <div
                      key={actionIndex}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <Ban className="w-4 h-4 text-purple-600" />
                      {action}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Methods Section */}
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
              How to <span className="text-purple-600">Report</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple channels available for reporting ragging incidents.
              All reports are treated with strict confidentiality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reportingMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-100"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.method}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {method.description}
                  </p>
                  <div className="text-xs text-purple-600 font-medium">
                    {method.availability}
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
              Report Ragging Immediately
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              If you witness or experience ragging, report it immediately.
              Your safety and well-being are our top priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                Report Incident
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Emergency Helpline
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AntiRaggingCommittee;
