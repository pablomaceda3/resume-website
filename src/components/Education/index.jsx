import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <div className="w-full bg-[var(--bg-color)] text-[var(--text-color)] p-12 transition-all duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 tracking-tight">Education</h2>
        
        <div className="group mb-12">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={24} className="text-[var(--icon-color)] transition-all duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold tracking-tight">The University of Texas at Austin</h3>
          </div>
          
          <div className="flex items-center gap-3 text-[var(--secondary-text)]">
            <span className="font-medium text-lg">BS in Biomedical Engineering</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={18} className="text-[var(--icon-color)]" />
              <span>2017</span>
            </div>
          </div>
        </div>

        <div className="group mb-12">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={24} className="text-[var(--icon-color)] transition-all duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold tracking-tight">The University of Texas at Austin</h3>
          </div>
          
          <div className="flex items-center gap-3 text-[var(--secondary-text)]">
            <span className="font-medium text-lg">Data Analytics Bootcamp</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={18} className="text-[var(--icon-color)]" />
              <span>2019</span>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={24} className="text-[var(--icon-color)] transition-all duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold tracking-tight">dbt Labs</h3>
          </div>
          
          <div className="flex items-center gap-3 text-[var(--secondary-text)]">
            <span className="font-medium text-lg">dbt Fundamentals Certificate</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={18} className="text-[var(--icon-color)]" />
              <span>2024</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;