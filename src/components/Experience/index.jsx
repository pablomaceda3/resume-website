import React from 'react';
import { Building2, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { resumeData } from '../../data/resume';

const ExperienceItem = ({ title, company, location, period, achievements }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-2 mb-4">
      <Building2 size={24} className="text-[var(--icon-color)] transition-all duration-300 group-hover:scale-110" />
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
    </div>
    
    <div className="flex items-center gap-3 mb-6 text-[var(--secondary-text)]">
      <span className="font-medium text-lg">{company}</span>
      <span>•</span>
      <div className="flex items-center gap-1">
        <MapPin size={18} className="text-[var(--icon-color)]" />
        <span>{location}</span>
      </div>
      <span>•</span>
      <div className="flex items-center gap-1">
        <Calendar size={18} className="text-[var(--icon-color)]" />
        <span>{period}</span>
      </div>
    </div>
    
    <ul className="space-y-4">
      {achievements.map((achievement, index) => (
        <li 
          key={index} 
          className="group relative pl-8 flex items-start gap-2"
        >
          <ArrowRight 
            size={16} 
            className="absolute left-0 top-[0.4em] text-[var(--icon-color)] transition-all duration-300 
                       group-hover:translate-x-1" 
          />
          <span className="text-lg text-[var(--secondary-text)] leading-relaxed">
            {achievement}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <div className="w-full bg-[var(--bg-color)] text-[var(--text-color)] p-12 transition-all duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 tracking-tight">Experience</h2>
        {resumeData.experience.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;