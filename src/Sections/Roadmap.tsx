// src/Sections/Roadmap.tsx

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Milestone {
  id: number;
  label: string;
  position: { x: number; y: number }; // x remains constant for vertical alignment
}

const milestones: Milestone[] = [
  { id: 1, label: 'Startpunkt', position: { x: 50, y: 0 } },
  { id: 2, label: 'Meilenstein 2', position: { x: 50, y: 100 } },
  { id: 3, label: 'Meilenstein 3', position: { x: 50, y: 200 } },
  { id: 4, label: 'Ziel', position: { x: 50, y: 300 } },
];

export const Roadmap: React.FC = () => {
  const lineRefs = useRef<Array<SVGPathElement | null>>([]);
  const circleRefs = useRef<Array<SVGCircleElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate each line on scroll
    lineRefs.current.forEach((line) => {
      if (line) {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

        ScrollTrigger.create({
          trigger: line,
          start: 'top center',
          end: 'bottom center',
          onUpdate: (self) => {
            gsap.to(line, {
              strokeDashoffset: length - self.progress * length,
              duration: 0.5,
              ease: 'power1.out',
            });
          },
        });
      }
    });

    // Animate milestones (scale in as they come into view)
    circleRefs.current.forEach((circle) => {
      if (circle) {
        ScrollTrigger.create({
          trigger: circle,
          start: 'top center',
          end: 'center center',
          onEnter: () =>
            gsap.fromTo(circle, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'bounce.out' }),
        });
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex h-[100vh] flex-col items-center"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <svg
        className="h-[50vh] w-full max-w-md"
        style={{ height: milestones[milestones.length - 1].position.y + 50 }}
        viewBox={`0 0 100 ${milestones[milestones.length - 1].position.y + 50}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Render dashed lines */}
        {milestones.map((milestone, index) => {
          if (index === 0) return null; // No line before the first milestone

          const prev = milestones[index - 1];
          return (
            <path
              key={`line-${index}`}
              ref={(el) => (lineRefs.current[index - 1] = el)}
              d={`M ${prev.position.x} ${prev.position.y} L ${milestone.position.x} ${milestone.position.y}`}
              stroke="blue"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Render milestones */}
        {milestones.map((milestone) => (
          <g key={`milestone-${milestone.id}`}>
            <circle
              ref={(el) => (circleRefs.current[milestone.id - 1] = el)}
              cx={milestone.position.x}
              cy={milestone.position.y}
              r="5"
              fill="blue"
            />
            <text x={milestone.position.x + 10} y={milestone.position.y + 5} fill="black" fontSize="8">
              {milestone.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};
