import React from 'react';
import { motion } from 'framer-motion';

const SkillsPage = ({ darkMode }) => {
  const coreSkills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'jQuery',
    'React', 'Redux Toolkit', 'TypeScript', 'Git', 'Redux', 'Tailwind CSS'
  ];
  
  const additionalSkills = [
    'REST APIs', 'Responsive Design', 'i18n', 'Unit Testing', 'Agile'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-12 text-center`}
      >
        Technical Skills
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8`}
        >
          <h3 className={`text-2xl font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mb-6`}>Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {coreSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode
                    ? 'bg-indigo-900 text-indigo-300'
                    : 'bg-indigo-100 text-indigo-700'
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8`}
        >
          <h3 className={`text-2xl font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mb-6`}>Additional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsPage;
