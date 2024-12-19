import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Set initial theme based on system preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkModeMediaQuery.matches);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    document.documentElement.style.setProperty('--bg-color', newIsDark ? '#1f2937' : '#f3f4f6');
    document.documentElement.style.setProperty('--text-color', newIsDark ? '#e5e7eb' : '#4B5563');
    document.documentElement.style.setProperty('--icon-color', newIsDark ? '#60a5fa' : '#2563eb');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 p-3 rounded-full 
                bg-[var(--bg-color,#f3f4f6)] 
                border border-[var(--text-color,#4B5563)] border-opacity-20
                hover:bg-opacity-80 transition-all duration-200
                shadow-sm hover:shadow-md"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="text-[var(--icon-color,#2563eb)]" size={20} />
      ) : (
        <Moon className="text-[var(--icon-color,#2563eb)]" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;