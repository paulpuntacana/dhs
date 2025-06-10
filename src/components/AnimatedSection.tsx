import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClasses = {
    fadeIn: isVisible ? 'animate-fadeIn' : 'opacity-0',
    slideUp: isVisible ? 'animate-slideUp' : 'opacity-0 translate-y-8',
    slideLeft: isVisible ? 'animate-slideLeft' : 'opacity-0 translate-x-8',
    slideRight: isVisible ? 'animate-slideRight' : 'opacity-0 -translate-x-8',
    scale: isVisible ? 'animate-scale' : 'opacity-0 scale-95',
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;