"use client";

import React from "react";
import { HardHat } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfilePage() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12 text-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6 shadow-sm border-2 border-purple-200"
      >
        <HardHat className="w-12 h-12 text-purple-600" />
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-gray-900 mb-2"
      >
        Profile - Work In Progress
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-gray-500 max-w-md mx-auto"
      >
        This section is currently under development. We are building something great for you. Please check back later!
      </motion.p>
    </div>
  );
}
