import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { DownArrowIcon } from '../Libraries/Icons';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

const animatedFontSizes = 'text-[3rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem]';
const pFontSizes = 'text-[2rem] sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]';
const h1FontSizes = 'text-[2rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem]';

export const Manifesto: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<HTMLDivElement | null>(null);
  const scrollLayerRef = useRef<HTMLDivElement | null>(null);
  const [isLastCompleted, setIsLastCompleted] = useState(false);
  const [manifestoSections, setManifestoSections] = useState<string[]>([]);
  const [manifestoSectionsAnimated, setManifestoSectionsAnimated] = useState<boolean[]>([]);

  useEffect(() => {
    setManifestoSections([
      t('manifesto.h1'),
      t('manifesto.line01'),
      t('manifesto.line02'),
      t('manifesto.line03'),
      t('manifesto.line04'),
      t('manifesto.line05'),
      t('manifesto.line06'),
      t('manifesto.line07'),
      t('manifesto.line08'),
      t('manifesto.line09'),
      t('manifesto.line10'),
      t('manifesto.line11'),
      t('manifesto.line12'),
      t('manifesto.line13'),
      t('manifesto.line14'),
      t('manifesto.line15'),
      t('manifesto.line16'),
      t('manifesto.line17'),
      t('manifesto.line18'),
      t('manifesto.line19'),
      t('manifesto.line20'),
      t('manifesto.line21'),
      t('manifesto.line22'),
    ]);
    setManifestoSectionsAnimated([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
  }, [t]); // Re-run when language changes

  useLayoutEffect(() => {
    if (!containerRef.current || !textRef.current || !animationRef.current || !scrollLayerRef.current) return;

    // Dynamically calculate `end` based on the number of sections to animate
    const remainingSectionsCount = manifestoSections.filter((_, index) => !manifestoSectionsAnimated[index]).length;
    const dynamicEnd = `bottom+=${remainingSectionsCount * 200}%`;

    const timeline = gsap.timeline({
      scrollTrigger: {
        id: 'manifesto-animation',
        trigger: containerRef.current,
        start: 'top top',
        end: dynamicEnd,
        scrub: 0.5,
        pin: true,
        invalidateOnRefresh: true, // Recalculate on refresh
        markers: false,
        onLeave: () => {
          ScrollTrigger.getById('manifesto-animation')?.kill();
          if (containerRef.current) {
            containerRef.current.style.position = 'relative';
          }
        },
        onEnter: () => {
          // Scroll symbol layer appears when container enters the viewport
          gsap.to(scrollLayerRef.current, { opacity: 1, duration: 0.5 });
        },
        onLeaveBack: () => {
          // Hide scroll symbol layer when leaving the container viewport
          gsap.to(scrollLayerRef.current, { opacity: 0, duration: 0.5 });
        },
        onUpdate: (self) => {
          if (self.direction === 1) {
            timeline.time(self.progress * timeline.duration());
          } else if (self.direction === -1) {
            timeline.pause();
          }
        },
      },
    });

    const firstLine = manifestoSections[0];
    const restLines = manifestoSections.slice(1);

    // Special animation for the first line
    if (!manifestoSectionsAnimated[0]) {
      timeline
        .fromTo(
          animationRef.current,
          {
            opacity: 0.5,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            onStart: () => {
              if (animationRef.current) {
                animationRef.current.innerHTML = `<h1 class="${h1FontSizes}">${firstLine}</h1>`;
              }
            },
          }
        )
        .to(animationRef.current, {
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            if (textRef.current) {
              textRef.current.innerHTML = `<h1 class="${h1FontSizes} text-center">${firstLine}</h1>`;
            }
            setManifestoSectionsAnimated((prev) => {
              const updated = [...prev];
              updated[0] = true;
              return updated;
            });
          },
        });
    }

    // Typing animations for the rest of the manifesto
    restLines.forEach((text, index) => {
      const actualIndex = index + 1;
      const isLast = actualIndex === manifestoSections.length - 1;

      if (!manifestoSectionsAnimated[actualIndex]) {
        timeline
          .fromTo(
            animationRef.current,
            {
              text: { value: '', delimiter: '' },
              opacity: 1,
            },
            {
              text: { value: text, delimiter: '' },
              opacity: 1,
              duration: 2.5,
              ease: 'power2.inOut',
              onStart: () => {
                if (animationRef.current) {
                  animationRef.current.className = `${animatedFontSizes} absolute h-full w-full flex justify-center items-center text-center`;
                }
              },
            }
          )
          .to(animationRef.current, {
            opacity: 0,
            duration: 1.2,
            ease: 'power2.in',
            onComplete: () => {
              if (!isLast && textRef.current) {
                textRef.current.innerHTML += `${text} </br>`;
              }
              if (isLast && textRef.current) {
                setIsLastCompleted(true);
              }
              setManifestoSectionsAnimated((prev) => {
                const updated = [...prev];
                updated[actualIndex] = true;
                return updated;
              });
            },
          });
      }
    });

    return () => {
      ScrollTrigger.getById('manifesto-animation')?.kill();
      ScrollTrigger.clearMatchMedia();
    };
  }, [manifestoSections, manifestoSectionsAnimated]);

  useEffect(() => {
    if (isLastCompleted && textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'power3.out',
          onComplete: () => {
            if (containerRef.current) {
              gsap.to(window, {
                scrollTo: containerRef.current.clientHeight,
                duration: 1,
                ease: 'power2.inOut',
              });
            }
          },
        }
      );
    }
    if (isLastCompleted && scrollLayerRef.current) {
      gsap.fromTo(
        scrollLayerRef.current,
        {
          opacity: 1,
          scale: 1,
        },
        {
          opacity: 0,
          scale: 0,
          duration: 0.3,
          ease: 'power3.out',
          onComplete: () => {
            if (containerRef.current) {
              gsap.to(window, {
                scrollTo: containerRef.current.clientHeight,
                duration: 1,
                ease: 'power2.inOut',
              });
            }
          },
        }
      );
    }
  }, [isLastCompleted]); // hier muss noch dynamisch der h-screen gestezt werden abhängig von de rgröße wieviel der Text real nun benötigt...

  return (
    <div ref={containerRef} className="manifesto-container justify-left relative flex h-screen text-[--text-color]">
      {/* Progressive text container */}
      <div ref={textRef} className={`${pFontSizes} items-left justify-top mx-4 flex w-full flex-col opacity-25`}></div>

      {/* Animation layer */}
      <div
        ref={animationRef}
        className={`${animatedFontSizes} absolute flex h-full w-full items-center justify-center text-center`}
      ></div>

      {/* Scroll symbol layer */}
      <div ref={scrollLayerRef} className="fixed bottom-4 flex w-full items-center justify-center opacity-0">
        <div className="flex flex-col items-center">
          <div id="scroll-icon" className="text-center text-[--text-color]">
            <DownArrowIcon width={36} height={36} className="h-8 w-8 animate-bounce" />
          </div>
          <span className="mt-2 text-sm text-[--text-color]">{t('manifesto.scrolltoreveal')}</span>
        </div>
      </div>
    </div>
  );
};
