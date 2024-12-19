import React, { useEffect, useRef, useState } from 'react';
import { useSection } from './SectionContext';

const ScrollReveal = ({ children, id }) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { activeSections } = useSection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const shouldShow = isIntersecting && activeSections.has(id);

  return (
    <div
      id={id}
      ref={ref}
      className={`
        transform transition-all duration-1000
        ${shouldShow 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
        }
      `}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;