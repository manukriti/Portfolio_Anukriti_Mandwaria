import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExperiencePage = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState('tmf');

  const projects = {
    tmf: {
      title: 'TMF (IFrame)',
      highlights: [
        'Built and optimized responsive UI using JavaScript (ES6+), jQuery, HTML5, CSS3, improving cross-device compatibility and reducing layout-related bugs by 25%',
        'Implemented dynamic DOM manipulation and event handling with modern ES6+ features, reducing code duplication by 20%',
        'Applied lazy loading at module level for heavy components, reducing initial load time by 35%',
        'Designed and integrated search, scroll, and i18n translation, leading to 20% faster data retrieval',
        'Reduced pre-release UI bugs by 25% through testing and debugging best practices'
      ]
    },
    cobalt: {
      title: 'Cobalt',
      highlights: [
        'Developed responsive and reusable UI components in React.js using Bootstrap and ES6+ patterns',
        'Implemented controlled and uncontrolled form components with validation and error states',
        'Managed application state using Hooks, Context API, and useReducer for scalable data flow',
        'Integrated React Router with sessionStorage for seamless navigation and session state preservation',
        'Consumed REST APIs using async/await, fetch and axios, improving data reliability'
      ]
    }
  };

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
        className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}
      >
        Experience
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Senior Software Engineer</h3>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Happiest Minds Technologies, Bangalore</p>
        <p className={`font-medium ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Aug. 2022 – Present</p>
      </motion.div>

      <div className="flex gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setSelectedProject('tmf')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedProject === 'tmf'
              ? 'bg-indigo-600 text-white shadow-lg'
              : darkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          TMF Project
        </button>
        <button
          onClick={() => setSelectedProject('cobalt')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedProject === 'cobalt'
              ? 'bg-indigo-600 text-white shadow-lg'
              : darkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Cobalt Project
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8`}
        >
          <h4 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-6`}>{projects[selectedProject].title}</h4>
          <ul className="space-y-4">
            {projects[selectedProject].highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className={`text-xl mt-1 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>•</span>
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ExperiencePage;
