// SectionContext.jsx
import React, { createContext, useContext, useState } from 'react';

const SectionContext = createContext();

export const useSection = () => useContext(SectionContext);

export const SectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('summary');

  const activateSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <SectionContext.Provider value={{ activeSection, activateSection }}>
      {children}
    </SectionContext.Provider>
  );
};