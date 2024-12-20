import React from 'react';
import { resumeData } from '../../data/resume';

const Summary = () => {
  return (
    <div className="w-full bg-[var(--bg-color)] text-[var(--text-color)] p-12 transition-all duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 tracking-tight">
          Summary
        </h2>
        <p className="text-xl leading-relaxed text-[var(--secondary-text)]">
          {resumeData.summary}
        </p>
      </div>
    </div>
  );
};

export default Summary;