import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Sidebar from './components/Sidebar';
import Education from './components/Education';
import Skills from './components/Skills';
import ScrollReveal from './components/ScrollReveal';
import { SectionProvider } from './components/ScrollReveal/SectionContext';
import { Menu } from 'lucide-react';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <SectionProvider>
      <div className="min-h-screen bg-[var(--bg-color,#f3f4f6)]">
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-[var(--bg-color,#f3f4f6)] 
                      shadow-md border border-[var(--text-color,#4B5563)] border-opacity-20"
          >
            <Menu className="text-[var(--text-color,#4B5563)]" />
          </button>
        )}

        {/* Overlay for mobile when sidebar is open */}
        {isMobile && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <Sidebar 
          isOpen={isSidebarOpen} 
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isMobile={isMobile}
        />
        
        <main 
          className={`
            transition-all duration-300
            ${isMobile 
              ? 'ml-0 px-4' 
              : isSidebarOpen 
                ? 'ml-72' 
                : 'ml-20'
            }
          `}
        >
          <Header />
          
          <div className="space-y-16 md:space-y-32 pb-16 md:pb-32 mt-8">
            <ScrollReveal id="summary">
              <Summary />
            </ScrollReveal>

            <ScrollReveal id="skills">
              <Skills />
            </ScrollReveal>
            
            <ScrollReveal id="experience">
              <Experience />
            </ScrollReveal>
            
            <ScrollReveal id="education">
              <Education />
            </ScrollReveal>

          </div>
        </main>
      </div>
    </SectionProvider>
  );
};

export default App;