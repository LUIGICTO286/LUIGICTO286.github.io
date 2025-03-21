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
        backgroundPosition: '50% 40%',
      }}
    >
      <div className=" z-10 mb-16 px-2">
        <div ref={bigTextRef} className="flex items-baseline justify-start">
          <h1
            style={{
              textShadow: '0 0 10px #000, 0 0 10px #000, 0 0 10px #000',
            }}
            className="font-bebas text-[6rem] leading-none text-[--text-color] sm:text-[8rem] lg:text-[8rem] xl:text-[12rem]"
          >
            $LUIGI
          </h1>
          <h2
            className="ml-2 text-2xl leading-none text-[--text-color] sm:text-3xl lg:text-4xl xl:text-5xl"
            style={{
              verticalAlign: 'baseline',
              position: 'relative',
              textShadow: '0 0 10px #000, 0 0 10px #000, 0 0 10px #000',
            }}
          >
            mangione
          </h2>
        </div>
        <hr className="mb-4 flex items-start border-4 border-gray-400" />

        <div ref={smallTextRef}>
          <ContractAddress />
        </div>
      </div>
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{
          background: `
          linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%, /* Black at the top */
        rgba(0, 0, 0, 0.6) 10%, /* Getting lighter */
        rgba(0, 0, 0, 0) 20%, /* Transparent in the middle */
        rgba(0, 0, 0, 0) 60%, /* Staying transparent */
        rgba(0, 0, 0, 0.6) 70%, /* Getting darker toward the bottom */
        rgba(0, 0, 0, 1) 100% /* Black at the bottom */
          )
        `,
        }}
      ></div>
    </div>
  );
};
