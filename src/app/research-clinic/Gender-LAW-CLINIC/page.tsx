"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const GenderLAWCLINICpage = () => {
  // Accordion item component
  const AccordionItem: React.FC<{
    title: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
  }> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

    return (
      <div>
        <button
          onClick={() => setIsOpen((s) => !s)}
          className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none hover:bg-purple-50"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-semibold text-purple-600">{title}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="p-4 pt-0 text-gray-700">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const AccordionList: React.FC = () => (
    <div>
      <AccordionItem title="Core Mission and Objectives" defaultOpen>
        <p>
          The primary mission of a Gender Law Clinic is to support the
          creation of an environment free from violence, discrimination, and
          bias, where all individuals, regardless of gender, can live with
          dignity and participate fully in society. This mission is pursued
          through several key objectives:
        </p>

        <ul className="list-disc mt-2 pl-6 space-y-3 text-gray-700">
          <li>
            <span className="font-bold">Providing Legal Assistance:</span>
            Offering free or low-cost legal aid, counseling, and
            representation to individuals who face barriers in accessing
            justice due to their gender or related axes of marginalization
            (such as caste, disability, or sexuality).
          </li>

          <li>
            <span className="font-bold">Empowerment and Awareness:</span>
            Empowering clients and communities by increasing their awareness
            of their legal rights and entitlements under national and
            international law. This involves de-mystifying legal processes
            and building the confidence of individuals to assert their
            rights.
          </li>

          <li>
            <span className="font-bold">Advocacy and Law Reform:</span>
            Engaging in strategic advocacy, including research, policy
            drafting, and litigation, to challenge discriminatory laws,
            practices, and social norms. Clinics often work with civil
            society organizations and international bodies like the UN to
            propose evidence-based legal and policy recommendations.
          </li>

          <li>
            <span className="font-bold">Education and Capacity Building:</span>
            Integrating the principles of gender justice into legal
            education by training law students in empathetic lawyering,
            critical legal theory, and intersectional approaches to law.
            This prepares the next generation of legal professionals to be
            agents of social change.
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Methodology and Approach">
        <p>
          Gender Law Clinics often adopt a bottom-up, community-centric
          approach, foregrounding the lived experiences of marginalized
          persons. Their methodologies include:
        </p>

        <ul className="list-disc mt-2 pl-6 space-y-3 text-gray-700">
          <li>
            <span className="font-bold">Direct Legal Services:</span>
            Handling a diverse range of cases, including domestic violence,
            sexual harassment, property and inheritance rights, reproductive
            justice, and legal name and gender changes for transgender
            persons.
          </li>

          <li>
            <span className="font-bold">Community Engagement:</span>
            Organizing legal literacy workshops, camps, and public sessions
            in local languages to reach a wider audience, particularly in
            rural or underserved areas.
          </li>

          <li>
            <span className="font-bold">Intersectional Focus:</span>
            Recognizing that gender inequality is often compounded by other
            forms of discrimination (e.g., race, class, caste). Clinics use
            an intersectional perspective to address these complex,
            structural inequalities comprehensively.
          </li>

          <li>
            <span className="font-bold">Collaborative Networks:</span>
            Partnering with pro-bono lawyers, activists, NGOs, and
            government bodies to ensure holistic support for clients, which
            may include connecting them with shelters, job training, or
            medical services.
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Impact on Legal Education and Social Justice">
        <p>The impact of Gender Law Clinics extends beyond individual cases:</p>

        <ul className="list-disc mt-2 pl-6 space-y-3 text-gray-700">
          <li>
            <span className="font-bold">Experiential Learning:</span>
            Students gain practical skills in client interviewing, legal
            research, drafting legal documents, and courtroom
            representation, moving beyond abstract classroom teaching to
            "law in action".
          </li>

          <li>
            <span className="font-bold">Fostering Social Consciousness:</span>
            The direct engagement with communities and victims of injustice
            helps students reflect on their own privileges and their
            professional responsibility to public service and social
            justice.
          </li>

          <li>
            <span className="font-bold">Challenging Systemic Bias:</span>
            Clinics actively work to address the "gender-biased" and
            "gender-insensitive" laws and judgments that persist within the
            legal system, advocating for a more equitable and inclusive
            justice system.
          </li>

          <li>
            <span className="font-bold">Generating Knowledge:</span>
            Through their case work and research, clinics strengthen
            existing literature on gender studies and produce valuable
            resources, such as handbooks and advocacy manuals, that can be
            used by activists and other legal professionals globally.
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Challenges and Future Directions">
        <p className="text-lg text-gray-700 text-justify mb-6">
          Despite their vital work, Gender Law Clinics face challenges,
          including limited funding, low awareness of legal rights in some
          communities, and persistent cultural and patriarchal barriers
          that discourage individuals from seeking help. The future of
          these clinics relies on continued advocacy, sustainable funding
          models, and innovative approaches, such as integrating
          technology and expanding their reach to address emerging issues
          related to gender identity and sexual orientation.
        </p>

        <p>
          In essence, Gender Law Clinics are crucial institutions in the
          ongoing struggle for gender equality, acting as dynamic
          interfaces between academia, civil society, and the formal
          justice system to promote justice and human rights for all.
        </p>
      </AccordionItem>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 mt-32">
      {/* HERO SECTION */}
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

      {/* Gender LAW CLINIC */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section id="activities" className="space-y-6 lg:col-span-12 py-5">
            <h3 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-6">
              Gender
              <span className="text-purple-600"> LAW CLINIC</span>
            </h3>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>

            <div className="rounded-xl p-8 bg-white shadow-xl mb-10">
              <p className="text-lg text-gray-700 text-justify">
                A{" "}
                <span className="text-purple-600 font-bold">Gender Law Clinic (GLC)</span>{" "}
                is a specialized legal aid and educational initiative, typically associated with law schools or non-profit organizations, that focuses on advancing gender justice and equality. These clinics serve a dual purpose: providing essential, often free, legal services to marginalized genders and offering law students practical, real-world experience in advocating for social change.
              </p>
            </div>

            {/* Accordion container - replace static sections with animated accordion */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden divide-y divide-gray-200">
                <AccordionList />
              </div>
            </div>

            {/* Team Section (kept commented) */}
            {/* <div className="bg-purple-50 p-6 rounded-lg mb-10">
              ...
            </div> */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default GenderLAWCLINICpage;
