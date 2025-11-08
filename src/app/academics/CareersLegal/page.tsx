"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Gavel,
  Building,
  Shield,
  Users,
  Award,
  Target,
  CheckCircle,
  Star,
  ExternalLink,
  ArrowRight,
  Scale,
  BookOpen,
  Globe,
} from "lucide-react";
import Image from "next/image";

const CareersLegal = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const careerOptions = [
    {
      icon: Gavel,
      title: "Litigation Lawyer",
      description: "Represent clients in courts, handle civil and criminal cases, and provide legal advocacy.",
      salary: "₹3-15 LPA",
      experience: "0-5 years",
      requirements: ["LL.B Degree", "Bar Council Registration", "Court Practice Experience"],
    },
    {
      icon: Building,
      title: "Corporate Lawyer",
      description: "Work with corporations on legal matters, contracts, mergers, and compliance issues.",
      salary: "₹5-25 LPA",
      experience: "1-8 years",
      requirements: ["LL.B/LL.M Degree", "Corporate Law Knowledge", "Business Acumen"],
    },
    {
      icon: Shield,
      title: "Public Prosecutor",
      description: "Represent the state in criminal cases and ensure justice is served in the public interest.",
      salary: "₹4-12 LPA",
      experience: "2-10 years",
      requirements: ["LL.B Degree", "Government Service", "Criminal Law Expertise"],
    },
    {
      icon: Scale,
      title: "Judge",
      description: "Preside over court proceedings, make legal decisions, and ensure fair administration of justice.",
      salary: "₹8-30 LPA",
      experience: "10+ years",
      requirements: ["LL.B Degree", "Legal Practice Experience", "Judicial Service Exam"],
    },
    {
      icon: BookOpen,
      title: "Legal Researcher",
      description: "Conduct legal research, analyze cases, and provide insights for law firms or academic institutions.",
      salary: "₹3-10 LPA",
      experience: "0-5 years",
      requirements: ["LL.B/LL.M Degree", "Research Skills", "Analytical Thinking"],
    },
    {
      icon: Users,
      title: "Legal Consultant",
      description: "Provide expert legal advice to individuals and organizations on specific legal matters.",
      salary: "₹4-20 LPA",
      experience: "3-15 years",
      requirements: ["LL.B Degree", "Specialized Knowledge", "Client Management"],
    },
  ];

  const skillsRequired = [
    { skill: "Legal Research", icon: BookOpen },
    { skill: "Analytical Thinking", icon: Target },
    { skill: "Communication", icon: Users },
    { skill: "Problem Solving", icon: CheckCircle },
    { skill: "Ethics & Integrity", icon: Shield },
    { skill: "Time Management", icon: Award },
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

      {/* Career Options Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/*  */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 
            bg-purple-600/10 rounded-full mb-6">
              <Briefcase className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Career <span className="text-purple-600">Options</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover various career paths available in the legal profession
              and find the one that matches your interests and skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerOptions.map((career, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100 mb-15"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center">
                    <career.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {career.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-purple-600" />
                        {career.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-purple-600" />
                        {career.experience}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {career.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <div className="space-y-2">
                    {career.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/*  */}
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
          <div className="rounded-xl p-8 bg-white shadow-xl mb-10">
            <p className="text-lg text-gray-700 text-justify">
              Careers in the legal field are diverse and include traditional roles like <span className="text-purple-600 font-bold">attorney, judge, and prosecutor</span>, as well as non-lawyer positions such as <span className="text-purple-600 font-bold">paralegal, court reporter, and legal assistant</span>. Specializations range from corporate and environmental law to <span className="text-purple-600 font-bold">intellectual property and criminal law</span>, while some roles, like <span className="text-purple-600 font-bold">legal journalism or legal tech consulting</span> blend legal skills with other fields.
            </p>
          </div>

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
        </div>
      </section>

      {/* Skills Required Section */}
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
              Essential <span className="text-purple-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Develop these key skills to excel in your legal career and
              stand out in the competitive legal profession.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsRequired.map((skill, index) => (
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
                  <skill.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {skill.skill}
                </h3>
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
              Start Your Legal Career
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join SMS Law College and begin your journey towards a successful
              career in the legal profession.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Apply Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default CareersLegal