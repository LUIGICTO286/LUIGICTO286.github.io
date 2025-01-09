import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const Storyline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement       | null>(null);
  const titleRef     = useRef<HTMLHeadingElement   | null>(null);
  const textRef      = useRef<HTMLParagraphElement | null>(null);
  const visualRef    = useRef<HTMLDivElement       | null>(null);

  useLayoutEffect(() => {
    if (
      !containerRef.current ||
      !titleRef.current ||
      !textRef.current ||
      !visualRef.current
    ) {
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
        // Typing effect for text
        gsap.to(textRef.current, {
          text: {
            value: textRef.current?.getAttribute('data-full-text') || '',
          },
          duration: 3,
          ease: 'power1.inOut',
        });

        // Animation for title text (coming from above with increasing opacity)
        gsap.to(titleRef.current, {
          opacity: 1, // Fade in to full opacity
          y: 0, // Move to its original position (y = 0)
          duration: 3,
          ease: 'power1.inOut',
        });

        // Animation for the visual element (Pump.Fun logo and growth chart)
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
  }, []);

  return (
    <div
      className="flex h-screen relative overflow-hidden border-4 border-red-500"
      ref={containerRef}
    >
      <div className="storyline w-full flex flex-col items-center justify-center">
        <h2
          className="storyline_title text-4xl font-bold mb-4"
          ref={titleRef}
          data-full-text="Born in the Trenches"
        >
          Born in the Trenches
        </h2>
        <p
          className="storyline_text text-lg text-center"
          ref={textRef}
          data-full-text="Within hours of its launch thru Pump.Fun $LUIGI skyrocketed from literally zero market cap to $70 million."
        >
          {/* Initial empty content for typing effect */}
        </p>
        <div className="storyline_visual mt-8 flex flex-col items-center" ref={visualRef}>
          {/* Placeholder for Pump.Fun logo */}
          <div
            className="w-24 h-24 bg-gray-300 rounded-full mb-4"
            title="Pump.Fun is a groundbreaking crypto project born from community-driven innovation. [Visit website]"
          ></div>
          {/* Placeholder for growth chart */}
          <div className="w-60 h-40 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};