// src/Sections/Historyline.tsx
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Props Interface
interface HistorylineProps {
  title: string;
  text: string;
  visualAlt: string;
}

export const Historyline: React.FC<HistorylineProps> = ({ title, text, visualAlt }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !titleRef.current || !textRef.current || !visualRef.current) {
      return;
    }

    // Initial setup: Hide elements offscreen and invisible
    gsap.set(titleRef.current, { opacity: 0, y: -100 });
    gsap.set(textRef.current, { opacity: 1 });
    gsap.set(visualRef.current, { opacity: 0, scale: 0.8 });

    // ScrollTrigger setup
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: '+=100%',
      scrub: true,
      onEnter: () => {
        // Animation for title text
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 3,
          ease: 'power1.inOut',
        });

        // Typing effect for text
        gsap.to(textRef.current, {
          text: { value: text },
          duration: 3,
          ease: 'power1.inOut',
        });

        // Animation for the visual element (logo and chart)
        gsap.to(visualRef.current, {
          opacity: 1,
          scale: 1,
          duration: 3,
          ease: 'power2.out',
        });
      },
    });

    // Cleanup ScrollTrigger context on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [text]);

  return (
    <div
      className="relative flex h-screen overflow-hidden border-4 border-red-500 text-[--secondary-color]"
      ref={containerRef}
    >
      <div className="storyline flex w-full flex-col items-center justify-center">
        <h2 className="storyline_title mb-4 text-4xl font-bold" ref={titleRef}>
          {title}
        </h2>
        <p className="storyline_text text-center text-lg" ref={textRef} data-full-text={text}>
          {/* Initial empty content for typing effect */}
        </p>
        <div className="storyline_visual mt-8 flex flex-col items-center" ref={visualRef}>
          {/* Placeholder for Pump.Fun logo */}
          <div className="mb-4 h-24 w-24 rounded-full bg-gray-300" title={visualAlt}></div>
          {/* Placeholder for growth chart */}
          <div className="h-40 w-60 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
