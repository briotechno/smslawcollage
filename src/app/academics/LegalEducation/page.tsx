"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  ExternalLink,
  Scale,
  Gavel,
  Shield,
  Building,
  Scale3D,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LegalEducation = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const legalEducationFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Well-structured curriculum covering all aspects of legal education from fundamentals to advanced topics.",
    },
    {
      icon: Scale,
      title: "Practical Training",
      description: "Hands-on experience through moot courts, internships, and real-world case studies.",
    },
    {
      icon: Gavel,
      title: "Professional Development",
      description: "Focus on developing advocacy skills, legal research, and professional ethics.",
    },
    {
      icon: Shield,
      title: "Ethical Foundation",
      description: "Strong emphasis on legal ethics, social justice, and professional responsibility.",
    },
  ];

  const careerPaths = [
    {
      title: "Litigation",
      description: "Practice in courts as advocates, representing clients in various legal matters.",
      icon: Gavel,
    },
    {
      title: "Corporate Law",
      description: "Work with corporations on legal matters, contracts, and compliance issues.",
      icon: Building,
    },
    {
      title: "Legal Research",
      description: "Conduct research for law firms, courts, or academic institutions.",
      icon: BookOpen,
    },
    {
      title: "Public Service",
      description: "Serve in government legal departments, public prosecutors, or judges.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[110vh] sm:h-[120vh] md:h-[130vh] lg:h-[130vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/HeroSection/HeroSection6.jpeg"
            alt="Legal Education in India"
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
                <span className="inline-block px-3 py-2 sm:py-2 bg-purple-600/90 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
                  Legal Education
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                Legal Education
                <span className="block text-purple-300">in India</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-xl"
              >
                Understanding the comprehensive legal education system in India,
                from undergraduate programs to specialized legal training.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <Gavel className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900">
              Legal <span className="text-purple-600"> Education In India
              </span>
            </h1>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </motion.div >
          <div className="rounded-xl p-8 bg-white shadow-xl mb-10">
            <p className="text-lg text-gray-700 text-justify mb-6">
              Legal education in India is crucial for creating a just society by equipping students with legal knowledge and fostering law-abiding citizens. Its objectives have evolved from solely training lawyers for courts to preparing graduates for diverse roles like policymakers and administrators, with a growing emphasis on social responsibility and practical skills. Indian legal education has roots in the British system but is adapting to modern global challenges by expanding its curriculum, promoting critical thinking, and integrating theoretical and practical learning to meet the demands of the legal profession and a complex society. </p>
          </div>

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
            <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900">
              Careers In <span className="text-purple-600"> After Legal Area
              </span>
            </h1>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </motion.div >
          <p className="text-lg text-gray-700 text-justify mb-6">
            Careers in the legal field are diverse and include traditional roles like <span className="text-purple-600 font-bold">attorney, judge, and prosecutor</span>, as well as non-lawyer positions such as <span className="text-purple-600 font-bold">paralegal, court reporter, and legal assistant</span>. Specializations range from corporate and environmental law to <span className="text-purple-600 font-bold">intellectual property and criminal law</span>, while some roles, like <span className="text-purple-600 font-bold">legal journalism or legal tech consulting</span> blend legal skills with other fields.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">

            {/* Lawyer roles */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">
                Lawyer roles</h4>

              <ul className="list-disc mt-2 pl-6 space-y-3 text-gray-700">
                <li><span className="font-bold">
                  Corporate Lawyer:</span>
                  Advises companies on legal matters, contracts, and compliance.</li>

                <li><span className="font-bold">
                  Litigation Lawyer:</span>
                  Represents clients in court proceedings.</li>

                <li><span className="font-bold">
                  Public Prosecutor: </span>
                  Represents the state in criminal trials.</li>

                <li><span className="font-bold">
                  Judge or Magistrate:</span>
                  Works in the judiciary to administer justice.</li>

                <li><span className="font-bold">
                  Intellectual Property Lawyer:</span>
                  Focuses on patents, copyrights, and trademarks.</li>

                <li><span className="font-bold">
                  Environmental Lawyer:</span>
                  Handles cases related to pollution, natural resources, and ecological issues.</li>

                <li><span className="font-bold">
                  Human Rights Lawyer:</span>
                  Advocates for individuals whose rights have been violated.</li>

                <li><span className="font-bold">
                  Legal Advisor:</span>
                  Provides legal counsel to individuals, corporations, or organizations. </li>
              </ul>
            </div>

            {/* Judicial Services Officer */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">Judicial Services Officer</h4>

              <p className="text-gray-700">This prestigious career involves becoming a judge or magistrate by clearing the Judicial Services Examination.</p>

              <ul className="list-disc mt-2 pl-6 space-y-3 text-gray-700">
                <li><span className="font-bold">
                  Responsibilities:</span>
                  Adjudicate cases, interpret laws, and deliver judgments.</li>

                <li><span className="font-bold">
                  Salary:</span>
                  Generally, offers higher starting salaries and includes opportunities for advancement. </li>
              </ul>
            </div>

            {/* Public Prosecutor */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">Public Prosecutor</h4>

              <p className="text-gray-700">Working for the government, a public prosecutor represents the state in criminal proceedings. </p>

              <ul className="list-disc mt-2 pl-6 space-y-3 text-gray-700">
                <li><span className="font-bold">
                  Responsibilities:</span>
                  Present evidence, question witnesses, and work closely with law enforcement agencies.</li>
              </ul>
            </div>

            {/*  */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">
                Non-lawyer and specialized roles</h4>

              <ul className="list-disc mt-2 pl-6 space-y-3 text-gray-700">
                <li><span className="font-bold">
                  Paralegal:</span>
                  Supports lawyers with research, document preparation, and administrative tasks.</li>

                <li><span className="font-bold">
                  Court Reporter:</span>
                  Creates official transcripts of legal proceedings.</li>

                <li><span className="font-bold">
                  Legal Journalist::</span>
                  Reports on and interprets legal cases and issues for the public.</li>

                <li><span className="font-bold">
                  Legal Consultant:</span>
                  Offers expert advice on legal matters without representing clients in court.</li>

                <li><span className="font-bold">
                  Compliance Officer:</span>
                  Ensures that a company adheres to legal and regulatory standards.</li>

                <li><span className="font-bold">
                  Legal Tech Consultant:</span>
                  Helps legal firms implement technology for better efficiency.</li>

                <li><span className="font-bold">
                  Mediator:</span>
                  Helps parties resolve disputes outside of court.</li>

                <li><span className="font-bold">
                  Legal Assistant:</span>
                  Provides administrative and legal support in a law office</li>

                <li><span className="font-bold">
                  Legal Researcher:</span>
                  Conducts in-depth legal research for law firms, corporations, or government bodies</li>
              </ul>
            </div>
          </div>

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
              Key Features of <span className="text-purple-600">Legal Education</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our legal education system is designed to provide comprehensive
              training in law, ethics, and professional practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalEducationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
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
              <Target className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Career <span className="text-purple-600">Opportunities</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Legal education opens doors to diverse career paths in the legal profession.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <career.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {career.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {career.description}
                    </p>
                  </div>
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
              Start Your Legal Journey
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join SMS Law College and begin your path to becoming a successful legal professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/admission" passHref>
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Apply Now
                </button>
              </Link>
              <Link href="/" passHref>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default LegalEducation;