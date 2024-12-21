import React from 'react';
import { Mail, Phone, MapPin, Cloud, GitBranch } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { resumeData } from '../../data/resume';

const Header = () => {
  const { personalInfo } = resumeData;
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: `https://github.com/${personalInfo.social.github}`,
      icon: GitBranch
    },
    {
      name: 'SoundCloud',
      url: `https://soundcloud.com/${personalInfo.social.soundcloud}`,
      icon: Cloud
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      content: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      content: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      content: personalInfo.location,
    },
  ];

  return (
    <div className="min-h-[50vh] md:min-h-screen w-full bg-[var(--bg-color,#f3f4f6)] text-[var(--text-color,#4B5563)] flex items-center justify-center">
      <ThemeToggle />
      
      <div className="max-w-4xl w-full px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            {personalInfo.name}
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-color,#4B5563)] opacity-90 max-w-2xl mx-auto">
            Data Engineer & Software Developer
          </p>
        </div>
        
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Contact Information Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 group w-full md:w-auto justify-center">
                  <Icon size={20} className="text-[var(--icon-color,#2563eb)]" />
                  <span className="text-sm md:text-base">{item.content}</span>
                </div>
              );

              return item.href ? (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 hover:text-[var(--icon-color,#2563eb)] transition-all duration-300 hover:-translate-y-1 group w-full md:w-auto justify-center"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>

          {/* Social Links Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <a 
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[var(--icon-color,#2563eb)] transition-all duration-300 hover:-translate-y-1 group w-full md:w-auto justify-center"
                >
                  <Icon size={20} className="text-[var(--icon-color,#2563eb)]" />
                  <span className="text-sm md:text-base">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;