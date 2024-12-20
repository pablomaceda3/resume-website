import React from 'react';
import { resumeData } from '../../data/resume';

const Summary = () => {
  const technologies = [
    'Python', 'SQL', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <div className="w-full bg-[var(--bg-color)] text-[var(--text-color)] p-12 transition-all duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Main Summary */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight">
            Summary
          </h2>
          <p className="text-xl leading-relaxed text-[var(--secondary-text)]">
            Driven, multidisciplinary data engineer with a passion for ETL and building data pipelines. 
            Adept at individual work and collaborating with teams to create maintainable, robust, and 
            scalable data engines.
          </p>
        </div>

        {/* Technologies */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight">
            Technologies
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-full bg-[var(--bg-color)] border border-[var(--secondary-text)] 
                            transition-all duration-300 hover:scale-105 hover:border-[var(--icon-color)]"
              >
                <span className="text-[var(--text-color)] font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;