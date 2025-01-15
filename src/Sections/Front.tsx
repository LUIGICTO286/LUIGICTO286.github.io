// src/Sections/Front.tsx

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Socials } from '../Components/Front/Socials';
import { ExternalLinks } from '../Components/Front/ExternalLinks';
import { useTranslation } from 'react-i18next';

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
    <div className="relative h-screen w-full">
      {/* Centered Image with Fading Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute h-full w-full"
          style={{
            backgroundImage: 'url(./luigi-walk.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        >
          {/* Gradient overlay on the image */}
          <div
            className="absolute inset-0"
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
      </div>

      {/* Animated Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div ref={bigTextRef} className="text-[8rem] text-[--text-color] sm:text-[8rem] lg:text-[8rem] xl:text-[12rem]">
          $LUIGI
        </div>
        <div
          ref={smallTextRef}
          className="text-[2rem] text-[--text-color] sm:text-[4rem] lg:text-[4rem] xl:text-[6rem]"
        >
          {t('front.front')}
        </div>
      </div>

      {/* Social Links in Bottom Left */}
      <div className="absolute bottom-0 left-0 flex w-full flex-wrap items-center justify-center gap-y-4 px-4 pb-4 lg:justify-between">
        <Socials />
        <ExternalLinks />
      </div>
    </div>
  );
};
