import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <div className="min-h-[50vh] md:min-h-screen w-full bg-[var(--bg-color,#f3f4f6)] text-[var(--text-color,#4B5563)] flex items-center justify-center">
      <ThemeToggle />
      
      <div className="max-w-4xl w-full px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Pablo Maceda
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-color,#4B5563)] opacity-90 max-w-2xl mx-auto">
            Data Engineer & Software Developer
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <a href="mailto:pablomaceda3@gmail.com" 
             className="flex items-center gap-3 hover:text-[var(--icon-color,#2563eb)] transition-all duration-300 hover:-translate-y-1 group w-full md:w-auto justify-center">
            <Mail size={20} className="text-[var(--icon-color,#2563eb)]" />
            <span className="text-sm md:text-base">pablomaceda3@gmail.com</span>
          </a>
          
          <a href="tel:(281) 750-2521"
             className="flex items-center gap-3 hover:text-[var(--icon-color,#2563eb)] transition-all duration-300 hover:-translate-y-1 group w-full md:w-auto justify-center">
            <Phone size={20} className="text-[var(--icon-color,#2563eb)]" />
            <span className="text-sm md:text-base">(281) 750-2521</span>
          </a>
          
          <div className="flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 group w-full md:w-auto justify-center">
            <MapPin size={20} className="text-[var(--icon-color,#2563eb)]" />
            <span className="text-sm md:text-base">Austin, TX, 78626</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;