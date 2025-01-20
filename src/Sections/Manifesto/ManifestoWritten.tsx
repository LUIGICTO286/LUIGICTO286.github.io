import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const h1FontSizes = 'text-[2rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem]';
const pFontSizes = 'text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]';

export const ManifestoWritten: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize scroll-triggered animation
  useEffect(() => {
    if (containerRef.current) {
      const lines = containerRef.current.querySelectorAll('.manifesto-line');

      // GSAP animation with ScrollTrigger
      gsap.fromTo(
        lines,
        { opacity: 0, x: -100 }, // Start off-screen to the left
        {
          opacity: 1,
          x: 0, // Slide into position
          stagger: 0.3, // Delay between animations for each line
          duration: 1.2, // Duration for each line's animation
          ease: 'power2.out', // Smooth easing effect
          scrollTrigger: {
            trigger: containerRef.current, // Trigger animation when container is in viewport
            start: 'top center', // Start when top of container hits center of viewport
            toggleActions: 'play none none none', // Play animation once
          },
        }
      );

      // Clean up ScrollTrigger instances on unmount
      return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, []);

  return (
    <div
      ref={containerRef}
      id="manifesto"
      className="manifesto-container relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-blue-900 px-6 text-left font-[VT323] text-white"
    >
      {/* Manifesto Heading */}
      <h1 className={`${h1FontSizes} mb-8 font-bold`}>{t('manifesto.h1')}</h1>

      {/* Manifesto Lines */}
      <div className="space-y-4">
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line01')}</p>
        <p className={`${pFontSizes} manifesto-line italic`}>{t('manifesto.line02')}</p>
        <p className={`${pFontSizes} manifesto-line text-red-500`}>{t('manifesto.line03')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line04')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line05')}</p>
        <p className={`${pFontSizes} manifesto-line font-bold`}>{t('manifesto.line06')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line07')}</p>
        <p className={`${pFontSizes} manifesto-line underline`}>{t('manifesto.line08')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line09')}</p>
        <p className={`${pFontSizes} manifesto-line text-blue-500`}>{t('manifesto.line10')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line11')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line12')}</p>
        <p className={`${pFontSizes} manifesto-line text-green-500`}>{t('manifesto.line13')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line14')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line15')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line16')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line17')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line18')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line19')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line20')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line21')}</p>
        <p className={`${pFontSizes} manifesto-line`}>{t('manifesto.line22')}</p>
        <p className={`${pFontSizes} manifesto-line text-yellow-500`}>{t('manifesto.line23')}</p>
        <p className={`${pFontSizes} manifesto-line text-center`}>{t('manifesto.line24')}</p>
      </div>
      <div className="h-fit w-full">
        <p className="mt-4 flex items-center justify-center text-sm text-[--text-color] sm:text-lg md:text-xl lg:text-2xl">
          &copy; {new Date().getFullYear()} $LUIGI on Solana.
        </p>
      </div>
    </div>
  );
};
