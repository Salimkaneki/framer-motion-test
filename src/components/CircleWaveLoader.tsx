'use client'

import { motion } from "framer-motion";
import React from "react";

export default function CircleWaveLoader() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-blue-500 rounded-full"
            initial={{ opacity: 0.7, scale: 0 }}
            animate={{ 
              opacity: 0,
              scale: 2,
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut",
            }}
          />
        ))}
        <motion.div 
          className="w-8 h-8 bg-blue-500 rounded-full"
          animate={{
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}