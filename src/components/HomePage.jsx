import React from "react";
import { motion } from "framer-motion";

const HomePage = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen flex items-center justify-center ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-indigo-900"
          : "bg-gradient-to-br from-blue-50 to-indigo-100"
      } px-4`}
    >
      <div className="text-center">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`text-5xl md:text-7xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          } mb-4`}
        >
          Anukriti Mandwaria
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`text-xl md:text-2xl ${
            darkMode ? "text-gray-300" : "text-gray-600"
          } mb-8`}
        >
          Frontend Developer | React | JavaScript | TypeScript
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="mailto:kritim323@gmail.com"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="https://linkedin.com/in/anukriti-mandwaria"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-lg border-2 border-indigo-600 transition-colors ${
              darkMode
                ? "bg-gray-800 text-indigo-400 hover:bg-gray-700"
                : "bg-white text-indigo-600 hover:bg-indigo-50"
            }`}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/manukriti"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-lg transition-colors ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-800 text-white hover:bg-gray-900"
            }`}
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
