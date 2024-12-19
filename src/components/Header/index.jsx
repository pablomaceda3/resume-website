import React, { useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Header = () => {

  return (
    <div className="min-h-screen w-full bg-[var(--bg-color,#f3f4f6)] text-[var(--text-color,#4B5563)] flex items-center justify-center">
      <div className="absolute top-4 right-4">
      </div>
      
      <div className="max-w-4xl w-full px-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6">
            Pablo Maceda
          </h1>
          <p className="text-xl text-[var(--text-color,#4B5563)] opacity-90 max-w-2xl mx-auto">
            Data Engineer & Software Developer
          </p>
        </div>
        
        <div className="flex justify-center gap-8 flex-wrap">
          <a href="mailto:pablomaceda3@gmail.com" 
             className="flex items-center gap-3 hover:text-[var(--icon-color,#2563eb)] transition-all duration-300 hover:-translate-y-1 group">
            <Mail size={20} className="text-[var(--icon-color,#2563eb)]" />
            <span>pablomaceda3@gmail.com</span>
          </a>
          
          <a href="tel:(281) 750-2521"
             className="flex items-center gap-3 hover:text-[var(--icon-color,#2563eb)] transition-all duration-300 hover:-translate-y-1 group">
            <Phone size={20} className="text-[var(--icon-color,#2563eb)]" />
            <span>(281) 750-2521</span>
          </a>
          
          <div className="flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 group">
            <MapPin size={20} className="text-[var(--icon-color,#2563eb)]" />
            <span>Austin, TX, 78626</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;