import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedCircleProps {
  size?: number; // Circle size in pixels (default: 174)
  duration?: number; // Animation duration in seconds (default: 5)
  delay?: number; // Animation delay in seconds (default: 0)
  borderColor?: string; // Color of the border (default: green)
}

export const AnimatedCircle: React.FC<AnimatedCircleProps> = ({
  size = 174,
  duration = 5,
  delay = 0,
  borderColor = '#000000',
}) => {
  const percentageRef = useRef<HTMLSpanElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!percentageRef.current || !pathRef.current) return;

    const circumference = Math.PI * (size - 24); // Calculate circumference based on size

    // GSAP Animation for the SVG border
    gsap.fromTo(
      pathRef.current,
      { strokeDashoffset: circumference }, // Initial offset (fully hidden)
      {
        strokeDashoffset: 0, // Full stroke (fully visible)
        duration,
        delay,
        ease: 'linear',
      }
    );

    // GSAP Animation for the percentage number
    gsap.to(
      {},
      {
        duration,
        delay,
        onUpdate: function () {
          const progress = Math.round((this.progress() as number) * 100);
          percentageRef.current!.textContent = `${progress}%`;
        },
        onComplete: function () {
          const progress = Math.round((this.progress() as number) * 100);
          percentageRef.current!.textContent = `${progress}%`;
        },
      }
    );
  }, [duration, delay, size]);

  const radius = (size - 24) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={borderColor}
          strokeWidth="8"
          fill="none"
          ref={pathRef}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference,
          }}
        />
      </svg>
      <span
        ref={percentageRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: `${size / 8}px`, // Dynamically set font size relative to size
          fontWeight: 'bold',
          color: borderColor,
        }}
      >
        0%
      </span>
    </div>
  );
};
