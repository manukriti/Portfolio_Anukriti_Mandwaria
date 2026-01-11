import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import SummaryPage from "./components/SummaryPage";
import SkillsPage from "./components/SkillsPage";
import ExperiencePage from "./components/ExperiencePage";
import CertificationsPage from "./components/CertificationsPage";
import EducationPage from "./components/EducationPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <Navigation
        currentPage={currentPage}
        navigateTo={navigateTo}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className="pt-16">
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <HomePage key="home" darkMode={darkMode} />
          )}
          {currentPage === "summary" && (
            <SummaryPage key="summary" darkMode={darkMode} />
          )}
          {currentPage === "skills" && (
            <SkillsPage key="skills" darkMode={darkMode} />
          )}
          {currentPage === "experience" && (
            <ExperiencePage key="experience" darkMode={darkMode} />
          )}
          {currentPage === "certifications" && (
            <CertificationsPage key="certifications" darkMode={darkMode} />
          )}
          {currentPage === "education" && (
            <EducationPage key="education" darkMode={darkMode} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
