// src/Sections/Story.tsx
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Storyline } from './Storyline';

export const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;

    const sections = gsap.utils.toArray<HTMLDivElement>('.storyline-section');

    // Pin and horizontal scroll setup
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1), // Scroll through all sections
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${window.innerWidth * sections.length}`,
        scrub: true,
        pin: true, // Pin the section while animating
        snap: 1 / (sections.length - 1), // Snap to each section
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="story-container relative h-screen overflow-hidden border-8 border-blue-500">
      <div ref={scrollWrapperRef} className="story-scroll-wrapper flex h-full w-max">
        {/* First Milestone */}
        <div className="storyline-section min-w-screen flex h-full items-center justify-center bg-gray-100">
          <Storyline
            title="Born in the Trenches"
            text="Within hours of its launch thru Pump.Fun $LUIGI skyrocketed from literally zero market cap to $70 million."
            visualAlt="Pump.Fun is a groundbreaking crypto project born from community-driven innovation."
          />
        </div>

        {/* Second Milestone */}
        <div className="storyline-section min-w-screen flex h-full items-center justify-center bg-gray-200">
          <Storyline
            title="Community Takeover"
            text="The original developer sold all his stakes in Pump.Fun. The community took over completely, forming a decentralized leadership model."
            visualAlt="CTO stands for 'Community Takeover Organization,' emphasizing decentralized governance."
          />
        </div>

        {/* Add more milestones */}
        <div className="storyline-section min-w-screen flex h-full items-center justify-center bg-gray-300">
          <Storyline
            title="A New Dawn"
            text="With decentralized leadership, the community ushered in new features and ideas for Pump.Fun."
            visualAlt="A collective effort driving innovation and progress in decentralized finance."
          />
        </div>
      </div>
    </div>
  );
};
