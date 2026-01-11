import React from 'react';
import { motion } from 'framer-motion';

const CertificationsPage = ({ darkMode }) => {
  const items = [
    {
      title: 'Team and Code Excellence Award',
      description: 'Recognized for outstanding code quality and collaboration',
      organization: 'Happiest Minds'
    },
    {
      title: 'Insta Award (Extra Mile)',
      description: 'Awarded for consistent excellence and impactful contributions',
      organization: 'Happiest Minds'
    },
    {
      title: 'Internship Certification',
      description: '12-month certified internship in Product Team working on React-based fintech modules',
      organization: 'HighRadius Technologies'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-12 text-center`}
      >
        Certifications & Awards
      </motion.h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 cursor-pointer`}
          >
            <div className={`w-12 h-12 ${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'} rounded-full flex items-center justify-center mb-4`}>
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-2`}>{item.title}</h3>
            <p className={`mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
            <p className={`font-medium text-sm ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{item.organization}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CertificationsPage;
