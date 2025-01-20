import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useTranslation } from 'react-i18next';
import { DownArrowIcon, NextIcon } from '../../Libraries/Icons';

gsap.registerPlugin(TextPlugin);

const animatedFontSizes = 'text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]';

interface ManifestoAnimationProps {
  onReveal: () => void; // Callback prop for revealing manifesto
}

export const ManifestoAnimation: React.FC<ManifestoAnimationProps> = ({ onReveal }) => {
  const { t, i18n } = useTranslation();
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const animationRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollLayerRef = useRef<HTMLDivElement | null>(null);
  const buttonBackRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [manifestoSections, setManifestoSections] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  // Populate sections when translations are loaded
  useEffect(() => {
    if (i18n.isInitialized) {
      setManifestoSections([
        t('manifesto.h1'),
        t('manifesto.line01'),
        // t('manifesto.line02'),
        // t('manifesto.line03'),
        // t('manifesto.line04'),
        // t('manifesto.line05'),
        // t('manifesto.line06'),
        // t('manifesto.line07'),
        // t('manifesto.line08'),
        // t('manifesto.line09'),
        // t('manifesto.line10'),
        // t('manifesto.line11'),
        // t('manifesto.line12'),
        // t('manifesto.line13'),
        // t('manifesto.line14'),
        // t('manifesto.line15'),
        // t('manifesto.line16'),
        // t('manifesto.line17'),
        // t('manifesto.line18'),
        // t('manifesto.line19'),
        // t('manifesto.line20'),
        // t('manifesto.line21'),
        // t('manifesto.line22'),
        // t('manifesto.line23'),
        // t('manifesto.line24'),
      ]);
    }
  }, [t, i18n.isInitialized]);

  // Intersection Observer to detect when the component is in view
  useEffect(() => {
    const containerEl = containerRef.current; // Safely reference containerRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on IntersectionObserver
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

    if (containerEl) {
      observer.observe(containerEl); // Start observing the container
    }

    return () => {
      if (containerEl) {
        observer.unobserve(containerEl); // Clean up observer
      }
    };
  }, []);

  // Cursor blinking animation
  useEffect(() => {
    gsap.to(cursorRef.current, {
      autoAlpha: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, []);

  // Handling last animation for buttons
  useEffect(() => {
    if (manifestoSections.length > 0 && currentIndex === manifestoSections.length - 1) {
      setIsAnimating(true);
      if (buttonBackRef.current && buttonNextRef.current) {
        gsap.to([buttonBackRef.current, buttonNextRef.current], {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            setIsAnimating(false);
            setAnimationFinished(true);
          },
        });
      }
    }
  }, [currentIndex, manifestoSections.length]);

  // Handling last animation for scrolltoreveal
  useEffect(() => {
    if (scrollLayerRef.current && animationFinished) {
      setIsAnimating(true);
      gsap.from(scrollLayerRef.current, {
        opacity: 0,
        duration: 3,
        onComplete: () => {
          setIsAnimating(false);
          setAnimationFinished(true);
        },
      });
    }
  }, [animationFinished]);

  // Handle typing animation and visibility
  useEffect(() => {
    if (!animationRef.current || isAnimating || manifestoSections.length === 0 || !isVisible) return;

    const section = manifestoSections[currentIndex];
    setIsAnimating(true);

    // Typewriter effect with cursor movement
    gsap.fromTo(
      animationRef.current,
      { text: { value: '' } },

      {
        text: {
          value: section,
        },
        duration: 3,
        ease: 'none',
        onUpdate: () => {
          // Append cursor after the current text
          if (cursorRef.current && animationRef.current) {
            animationRef.current.appendChild(cursorRef.current);
          }
        },
        onComplete: () => {
          setIsAnimating(false); // Allow navigation once animation completes
        },
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, manifestoSections, isVisible]); // Dont add isAnimating to dependecies, make infinite loop

  const handleReveal = () => {
    if (containerRef.current && animationFinished) {
      setIsAnimating(true);

      gsap.to(containerRef.current, {
        backgroundColor: 'black',
        duration: 1,
      });

      gsap.to(containerRef.current.children, {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        onComplete: () => {
          setIsAnimating(false);
          setAnimationFinished(true);
          onReveal();
        },
      });
    }
  };

  // Handle button click to update currentIndex
  const handleNext = () => {
    if (currentIndex < manifestoSections.length - 1 && !isAnimating) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0 && !isAnimating) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      ref={containerRef}
      id="manifesto"
      className="manifesto-container relative flex h-screen flex-col items-center justify-center "
    >
      <div className="mx-4 flex flex-row">
        {/* Animated text display */}
        <div
          ref={animationRef}
          className={`${animatedFontSizes} text-left font-[VT323] text-[--text-color]`}
          style={{
            textShadow: '0 0 5px #000, 0 0 5px #000, 0 0 5px #000',
          }}
        ></div>

        {/* Cursor element */}
        <span ref={cursorRef} id="cursor" className={`${animatedFontSizes} text-[--text-color]`}>
          _
        </span>
      </div>

      {/* Conditional rendering for navigation buttons or scroll symbol */}
      {!animationFinished ? (
        <div className="absolute left-0 top-0 flex h-full w-full items-end justify-center space-x-4">
          <button
            ref={buttonBackRef}
            onClick={handleBack}
            disabled={currentIndex === 0 || isAnimating}
            style={{
              boxShadow: '0 0 5px #000, 0 0 5px #000, 0 0 5px #000',
            }}
            className="mb-16 rounded-3xl bg-gray-200 px-4 py-2 text-sm font-bold hover:bg-gray-300 disabled:opacity-50"
          >
            <NextIcon width={36} height={36} className="rotate-180" />
          </button>
          <button
            ref={buttonNextRef}
            onClick={handleNext}
            disabled={currentIndex === manifestoSections.length - 1 || isAnimating}
            style={{
              boxShadow: '0 0 5px #000, 0 0 5px #000, 0 0 5px #000',
            }}
            className="mb-16 rounded-3xl bg-gray-200 px-4 py-2 hover:bg-gray-300 disabled:opacity-50"
          >
            <NextIcon width={36} height={36} />
          </button>
        </div>
      ) : (
        <div
          ref={scrollLayerRef}
          className="absolute left-0 top-0 flex h-full w-full items-end justify-center space-x-4 text-[--text-color]"
        >
          <div className="mb-8 flex flex-col items-center ">
            <button
              id="scroll-icon"
              className="flex flex-col items-center justify-center text-center"
              onClick={handleReveal}
              disabled={currentIndex === manifestoSections.length - 1 && isAnimating}
            >
              <span className="mt-2 text-xl text-[--text-color]">{t('manifesto.scrolltoreveal')}</span>
              <DownArrowIcon width={36} height={36} className="h-8 w-8 animate-bounce text-[--text-color]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
