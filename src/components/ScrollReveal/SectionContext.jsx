import React, { createContext, useState, useContext } from 'react';

const SectionContext = createContext();

const SectionProvider = ({ children }) => {
  const [activeSections, setActiveSections] = useState(new Set());

  const activateSection = (sectionId) => {
    setActiveSections(prev => new Set([...prev, sectionId]));
  };

  return (
    <SectionContext.Provider value={{ activeSections, activateSection }}>
      {children}
    </SectionContext.Provider>
  );
};

const useSection = () => useContext(SectionContext);

export { SectionProvider, useSection };
export default SectionContext;