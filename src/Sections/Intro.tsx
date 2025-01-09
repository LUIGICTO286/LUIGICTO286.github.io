import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import classNames from 'classnames';

gsap.registerPlugin(ScrollTrigger);

const imageSources = [
  'https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg',
  'https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/1.jpg',
  'https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/2.jpg',
  'https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/3.jpg',
  'https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/4.jpg',
  'https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/5.jpg',
  'https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/6.jpg',
  'https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/7.jpg',
  'https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/8.jpg',
];

export const Intro: React.FC = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const gallery = document.querySelector<HTMLElement>('#gallery');
      const middleGrid = document.querySelector<HTMLElement>('.middle-grid');
      const otherGrids = document.querySelectorAll<HTMLElement>(
        '.gallery__item:not(.middle-grid)'
      );

      if (!gallery || !middleGrid) {
        return; // Elements not found
      }

      // Pin the gallery and handle the middle grid scaling and blur effect
      ScrollTrigger.create({
        trigger: gallery,
        start: 'top top', // Start pinning when gallery reaches the top of the viewport
        end: '+=100%', // Pin for the duration of the gallery height
        scrub: true,
        pin: true, // Pin the gallery
        // markers: true, // Enable debugging markers
        onUpdate: (self) => {
          const scaleValue = 1 + self.progress * 2; // Scale middle grid from 1 to 3
          const blurValue = 20 * self.progress; // Blur other grids from 0px to 20px

          // Scale the middle grid
          gsap.set(middleGrid, {
            scale: scaleValue,
          });

          // Apply blur to other grids
          otherGrids.forEach((grid) => {
            gsap.set(grid, {
              filter: `blur(${blurValue}px)`,
            });
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Gallery Section */}
      <div
        className="grid grid-cols-3 grid-rows-3 w-[100vw] h-[100vh] relative overflow-hidden"
        id="gallery"
      >
        {imageSources.map((image, index) => (
          <div
            key={index}
            className={classNames(
              'gallery__item flex items-center justify-center bg-cover bg-center rounded m-5',
              {
                'middle-grid z-10': index === 4, // Center grid
              }
            )}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
