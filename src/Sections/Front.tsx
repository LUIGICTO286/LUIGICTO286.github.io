// src/Sections/Front.tsx

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { ContractAddress } from './ContractAddress';

export const Front: React.FC = () => {
  const { t } = useTranslation();
  const bigTextRef = useRef<HTMLDivElement | null>(null);
  const smallTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate $LUIGI text
    gsap.fromTo(
      bigTextRef.current,
      { x: '-100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
      }
    );

    // Fade in smaller text
    gsap.fromTo(
      smallTextRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    /* Centered Image with Fading Effect */
    <div
      className="relative inset-0 flex h-screen w-full flex-col items-center justify-end text-center"
      style={{
        backgroundImage: 'url(./luigi-walk.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }}
    >
      <div className="z-40 mb-32">
        {/* Animated Text */}
        <h1
          ref={bigTextRef}
          style={{
            textShadow: '0 0 10px #000, 0 0 10px #000, 0 0 10px #000',
          }}
          className="font-[VT323] text-[6rem] text-[--text-color] sm:text-[8rem] lg:text-[8rem] xl:text-[12rem]"
        >
          $LUIGI
        </h1>
        <div ref={smallTextRef}>
          <ContractAddress />
        </div>
      </div>
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{
          background: `
                  radial-gradient(
                    ellipse at center, 
                    rgba(0, 0, 0, 0) 20%, /* Bright center */
                    rgba(0, 0, 0, 1) 60%, /* Darker toward the edges */
                    rgba(0, 0, 0, 1) 100% /* Very dark at the outermost edges */
                  )
                `,
        }}
      ></div>
    </div>
  );
};
