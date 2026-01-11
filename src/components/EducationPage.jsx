import React from 'react';
import { motion } from 'framer-motion';

const EducationPage = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-12 text-center`}
      >
        Education
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className={`${darkMode ? 'bg-gray-800 border-indigo-500' : 'bg-white border-indigo-600'} rounded-xl shadow-lg p-8 border-l-4`}
      >
        <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-2`}>
          Bachelor of Technology in Computer Science and Engineering
        </h3>
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
          Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha
        </p>
        <p className={`font-medium mb-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Jul. 2018 – Jun. 2022</p>
        <div className={`inline-block px-4 py-2 rounded-lg ${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'}`}>
          <span className={`font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>CGPA: 9.07</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EducationPage;
