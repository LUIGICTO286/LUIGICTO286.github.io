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
      <div className="relative w-[90px] h-[90px] perspective-[1200px]">
        <div
          ref={logoRef}
          className="absolute w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(0deg)',
            transformOrigin: 'center',
          }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full flex items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
            }}
          >
            <img
              src="./nft.png"
              alt="NFT Icon"
              width={85}
              height={85}
            />
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full flex items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <img
              src="./luigi-icon.png"
              alt="Luigi Icon"
              width={75}
              height={75}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
