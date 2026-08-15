import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade';
  delay?: number; // seconds
  duration?: number; // seconds
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.65,
  threshold = 0.12,
  className = '',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'none';
    switch (variant) {
      case 'fade-up': return 'translateY(35px)';
      case 'fade-down': return 'translateY(-35px)';
      case 'fade-left': return 'translateX(-35px)';
      case 'fade-right': return 'translateX(35px)';
      case 'zoom-in': return 'scale(0.92)';
      case 'fade': return 'none';
      default: return 'translateY(35px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal-item ${isVisible ? 'revealed' : ''} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
};
