import React from 'react';
import { User, Briefcase, GraduationCap, Code, ChevronLeft } from 'lucide-react';
import { useSection } from '../ScrollReveal/SectionContext';

const Sidebar = ({ isOpen, onToggle }) => {
  const { activateSection } = useSection();
  
  const navItems = [
    { icon: User, label: 'Summary', href: '#summary' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: GraduationCap, label: 'Education', href: '#education' },
    { icon: Code, label: 'Skills', href: '#skills' },
  ];

  const smoothScroll = (targetPosition, duration = 1000) => {
    // Add offset to account for browser toolbar (96px should give enough breathing room)
    const offset = 96;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - offset;
    let startTime = null;

    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = t => t < 0.5 
        ? 4 * t * t * t 
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      
      window.scrollTo(0, startPosition + (distance * ease(progress)));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleClick = (e, href, label) => {
    e.preventDefault();
    const sectionId = href.slice(1); // Remove the # from href
    activateSection(sectionId);
    
    const element = document.querySelector(href);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      smoothScroll(targetPosition, 1500);
    }
  };

  return (
    <aside 
      className={`
        fixed top-0 left-0 h-full 
        bg-[var(--bg-color,#f3f4f6)] 
        border-r border-[var(--text-color,#4B5563)] border-opacity-20
        transition-all duration-300 ease-in-out
        ${isOpen ? 'w-72' : 'w-20'}
        z-50
      `}
    >
      <button 
        onClick={onToggle}
        className="absolute -right-4 top-8 bg-[var(--bg-color,#f3f4f6)] rounded-full p-2
                   border border-[var(--text-color,#4B5563)] border-opacity-20
                   hover:bg-opacity-80 transition-all duration-200 cursor-pointer
                   shadow-sm hover:shadow-md group"
      >
        <ChevronLeft 
          className={`transform transition-all duration-300 text-[var(--text-color,#4B5563)] 
            group-hover:text-[var(--icon-color,#2563eb)] ${isOpen ? '' : 'rotate-180'}`}
          size={20}
        />
      </button>

      <nav className="pt-8 px-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleClick(e, item.href, item.label)}
            className="flex items-center mb-6 text-[var(--text-color,#4B5563)] 
                     hover:text-[var(--icon-color,#2563eb)] transition-colors
                     rounded-lg hover:bg-opacity-10 hover:bg-[var(--text-color,#4B5563)]
                     px-3 py-2"
            title={!isOpen ? item.label : ''}
          >
            <div className="w-6 flex justify-center">
              <item.icon size={24} />
            </div>
            {isOpen && (
              <span className="ml-4 font-medium">
                {item.label}
              </span>
            )}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;