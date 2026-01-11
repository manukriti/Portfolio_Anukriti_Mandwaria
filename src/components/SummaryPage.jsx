import React from "react";
import { motion } from "framer-motion";

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
        className={`text-4xl font-bold ${
          darkMode ? "text-white" : "text-gray-800"
        } mb-8`}
      >
        Professional Summary
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } rounded-xl shadow-lg p-8`}
      >
        <p
          className={`text-lg ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } leading-relaxed`}
        >
          Front-end Developer with{" "}
          <span
            className={`font-semibold ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            3.5+ years of experience
          </span>{" "}
          developing responsive web applications using JavaScript (ES6+),
          TypeScript, React (Redux), HTML5, CSS3, and jQuery. Strong expertise
          in API integration, performance optimization, and component-driven
          development, with proven ability to collaborate in Agile teams to
          deliver scalable solutions.
        </p>
        <br />
        <p
          className={`text-lg ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } leading-relaxed`}
        >
          I have hands-on experience working with modern frontend tooling,
          including Vite for fast builds, Tailwind CSS and Bootstrap for
          scalable styling, and . I thrive in Agile environments, collaborate
          closely with cross-functional teams, and take ownership of delivering
          high-quality, production-ready user interfaces.
        </p>
        <br />
        <p
          className={`text-lg ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } leading-relaxed`}
        >
          Currently focused on building performant, accessible, and visually
          polished frontend applications using modern React ecosystems.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SummaryPage;
