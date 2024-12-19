import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Box, 
  Cloud,
  Terminal,
  Blocks,
  Globe,
  Cpu
} from 'lucide-react';

const SkillBadge = ({ skill, icon: Icon }) => (
  <div className="group relative inline-flex">
    <div className="px-3 py-1 rounded-full text-sm font-medium border border-[var(--text-color,#4B5563)] border-opacity-20 text-[var(--text-color,#4B5563)] flex items-center gap-2 transition-all duration-200 hover:bg-[var(--icon-color,#2563eb)] hover:text-white dark:hover:text-black">
      <Icon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-white dark:text-black" />
      <span>{skill}</span>
    </div>
  </div>
);

const SkillCategory = ({ icon: Icon, title, skills }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-4">
      <Icon size={24} className="text-[var(--icon-color,#2563eb)]" />
      <h3 className="text-xl font-semibold">{title}</h3>
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

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: Terminal },
        { name: "SQL", icon: Database },
        { name: "NoSQL", icon: Database },
        { name: "JavaScript", icon: Code },
        { name: "HTML", icon: Code },
        { name: "CSS", icon: Globe },
        { name: "Terraform", icon: Blocks }
      ]
    },
    {
      icon: Server,
      title: "Frameworks & Tools",
      skills: [
        { name: "Pyramid", icon: Cpu },
        { name: "Django", icon: Cpu },
        { name: "Flask", icon: Cpu },
        { name: "FastAPI", icon: Cpu },
        { name: "Docker", icon: Box }
      ]
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      skills: [
        { name: "MongoDB", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "AWS", icon: Cloud }
      ]
    }
  ];

  return (
    <div id="skills" className="w-full bg-[var(--bg-color,#f3f4f6)] text-[var(--text-color,#4B5563)] p-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">  {/* Changed from ml-8 to max-w-4xl mx-auto */}
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Skills;