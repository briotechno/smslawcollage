"use client";

import React from "react";
import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";
import Image from "next/image";

const PrincipalNotice = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-6">
                        <Megaphone className="w-10 h-10 text-purple-600" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        Principal <span className="text-purple-600">Massage</span>
                    </h1>
                    <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Section */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image
                                src="/assets/HeroSection/PrincipalImage.png"
                                alt="SMS Law College Campus"
                                width={600}
                                height={400}
                                className="w-full object-cover"
                            />
                            <div className="absolute inset-0 "></div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                <strong className="text-purple-600">Welcome to our SMS Law College</strong>{" "}
                                We are committed to providing you with a rigorous and enriching legal education that will prepare you to make a meaningful impact on society. Law is a powerful instrument for social change, and it is our shared responsibility to uphold the ideals of justice and the constitution. We believe that quality education results from hard work and dedication, and our faculty is here to guide you. We encourage you to embrace the theoretical knowledge and practical experiences offered through our curriculum, from moot court competitions to internships. Step out of your comfort zone, engage in extracurricular activities, and become the compassionate and responsible legal professionals our society needs. Together, we will strive for academic excellence and equip you with the skills and values to uphold justice and serve the community. 
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                With a rich heritage of academic excellence and a
                                forward-thinking approach to legal education, we provide
                                students with the knowledge, skills, and ethical foundation
                                necessary to excel in the dynamic field of law. Our curriculum
                                is designed to bridge the gap between theoretical knowledge and
                                practical application.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PrincipalNotice;
