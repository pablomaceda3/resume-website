import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Sidebar from './components/Sidebar';
import Education from './components/Education';
import Skills from './components/Skills';
import ScrollReveal from './components/ScrollReveal';
import { SectionProvider } from './components/ScrollReveal/SectionContext';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Move theme initialization to App component
  useEffect(() => {
    // Set initial theme based on system preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const isDarkMode = darkModeMediaQuery.matches;
    
    // Set initial CSS variables
    document.documentElement.classList.add('transition-colors', 'duration-200');
    document.documentElement.style.setProperty('--bg-color', isDarkMode ? '#1f2937' : '#f3f4f6');
    document.documentElement.style.setProperty('--text-color', isDarkMode ? '#e5e7eb' : '#4B5563');
    document.documentElement.style.setProperty('--icon-color', isDarkMode ? '#60a5fa' : '#2563eb');
    
    // Listen for system theme changes
    const handleThemeChange = (e) => {
      const newIsDarkMode = e.matches;
      document.documentElement.style.setProperty('--bg-color', newIsDarkMode ? '#1f2937' : '#f3f4f6');
      document.documentElement.style.setProperty('--text-color', newIsDarkMode ? '#e5e7eb' : '#4B5563');
      document.documentElement.style.setProperty('--icon-color', newIsDarkMode ? '#60a5fa' : '#2563eb');
    };
    
    darkModeMediaQuery.addEventListener('change', handleThemeChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  return (
    <SectionProvider>
      <div className="min-h-screen bg-[var(--bg-color,#f3f4f6)]">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        
        <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-20'}`}>
          <Header />
          
          <div className="space-y-32 pb-32 mt-8">
            <ScrollReveal id="summary">
              <Summary />
            </ScrollReveal>
            
            <ScrollReveal id="experience">
              <Experience />
            </ScrollReveal>
            
            <ScrollReveal id="education">
              <Education />
            </ScrollReveal>

            <ScrollReveal id="skills">
              <Skills />
            </ScrollReveal>
          </div>
        </main>
      </div>
    </SectionProvider>
  );
};

export default App;