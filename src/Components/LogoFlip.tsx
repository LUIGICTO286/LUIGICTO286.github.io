// src/Components/LogoFlip.tsx

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const LogoFlip: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current) return;
    gsap.to(logoRef.current, {
      rotateY: 180,
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1, // Infinite loop
      yoyo: true,
    });
  }, []);

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="perspective-[1200px] relative h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] lg:h-[80px] lg:w-[80px] xl:h-[100px] xl:w-[100px]">
        <div
          ref={logoRef}
          className="absolute h-full w-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(0deg)',
            transformOrigin: 'center',
          }}
        >
          {/* Front Side */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
            }}
          >
            <img src="./nft.png" alt="NFT Icon" />
          </div>

          {/* Back Side */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <img src="./luigi-icon.png" alt="Luigi Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
