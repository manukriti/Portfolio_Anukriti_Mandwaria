import React from 'react';
import { motion } from 'framer-motion';

const SummaryPage = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-8`}
      >
        Professional Summary
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8`}
      >
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
          Front-end Developer with <span className={`font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>3+ years of experience</span> building
          responsive web applications using JavaScript (ES6+), jQuery, HTML, CSS, and React (Redux). Skilled in
          component-based development, REST API integration, performance optimization, and Agile delivery.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SummaryPage;
