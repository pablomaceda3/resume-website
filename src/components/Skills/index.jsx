import React from 'react';
import { 
  Code, 
  Terminal, 
  Database, 
  Cloud, 
  Server,
  Box,
  Wrench,
  GitBranch,
  Bell
} from 'lucide-react';
import { resumeData } from '../../data/resume';

const SkillBadge = ({ skill, icon: Icon }) => (
  <div className="group relative inline-flex">
    <div className="px-3 py-1 rounded-full text-sm font-medium border border-[var(--text-color,#4B5563)] border-opacity-20 
                    text-[var(--text-color,#4B5563)] flex items-center gap-2 transition-all duration-200 
                    hover:bg-[var(--icon-color,#2563eb)] hover:border-transparent hover:text-white">
      <Icon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      <span>{skill}</span>
    </div>
  </div>
);

const SkillCategory = ({ icon: Icon, title, skills }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-4">
      <Icon size={24} className="text-[var(--icon-color,#2563eb)]" />
      <h3 className="text-xl font-semibold text-[var(--text-color,#4B5563)]">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillBadge 
          key={skill.name} 
          skill={skill.name} 
          icon={skill.icon} 
        />
      ))}
    </div>
  </div>
);

// Map icons to skills based on keywords
const getIconForSkill = (skill) => {
  const lowerSkill = skill.toLowerCase();
  if (lowerSkill.includes('python')) return Terminal;
  if (lowerSkill.includes('sql')) return Database;
  if (lowerSkill.includes('js') || lowerSkill.includes('javascript')) return Code;
  if (lowerSkill.includes('html')) return Code;
  if (lowerSkill.includes('aws')) return Cloud;
  if (lowerSkill.includes('terraform')) return Server;
  if (lowerSkill.includes('docker')) return Box;
  if (lowerSkill.includes('ansible')) return Wrench;
  if (lowerSkill.includes('git')) return GitBranch;
  if (lowerSkill.includes('pagerduty')) return Bell;
  if (lowerSkill.includes('mongo') || lowerSkill.includes('sql')) return Database;
  return Code; // default icon
};

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: resumeData.skills.languages.map(skill => ({
        name: skill,
        icon: getIconForSkill(skill)
      }))
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: resumeData.skills.cloudInfra.map(skill => ({
        name: skill,
        icon: getIconForSkill(skill)
      }))
    },
    {
      icon: Database,
      title: "Databases",
      skills: resumeData.skills.databases.map(skill => ({
        name: skill,
        icon: getIconForSkill(skill)
      }))
    },
    {
      icon: Server,
      title: "Frameworks",
      skills: resumeData.skills.frameworks.map(skill => ({
        name: skill,
        icon: getIconForSkill(skill)
      }))
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: resumeData.skills.tools.map(skill => ({
        name: skill,
        icon: getIconForSkill(skill)
      }))
    }
  ];

  return (
    <div className="w-full bg-[var(--bg-color,#f3f4f6)] text-[var(--text-color,#4B5563)] p-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Skills;