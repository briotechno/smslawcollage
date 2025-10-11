"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const VisionMission = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="py-10 bg-gradient-to-br from-gray-50 to-blue-50"
      id="Vision-Mission-page"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-3">
        {/* Section Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0073aa] mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Vision & Mission
        </motion.h2>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Vision */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-start hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 sm:p-4 rounded-full flex items-center justify-center">
                <Eye className="text-[#0073aa] w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold ml-3 sm:ml-4 text-[#0073aa]">
                Vision
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum itaque saepe eius
              consectetur, officia suscipit repudiandae quia odio. Ipsum ipsa est excepturi vero
              molestiae voluptates ab nihil non quasi cumque.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-start hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 sm:p-4 rounded-full flex items-center justify-center">
                <Target className="text-[#0073aa] w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold ml-3 sm:ml-4 text-[#0073aa]">
                Mission
              </h3>
            </div>
            <ul className="list-disc ml-5 sm:ml-6 text-gray-600 leading-relaxed space-y-2 text-sm sm:text-base text-justify">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id laborum, modi
                ullam quos ipsa nesciunt odit, distinctio repellat obcaecati totam quis libero
                sapiente laudantium provident, delectus doloremque culpa blanditiis!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id laborum, modi
                ullam quos ipsa nesciunt odit, distinctio repellat obcaecati totam quis libero
                sapiente laudantium provident, delectus doloremque culpa blanditiis!
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
