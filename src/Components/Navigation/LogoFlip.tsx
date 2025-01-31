import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const LogoFlip: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  const sizeCoin =
    'relative h-[48px] w-[48px] sm:w-[48px] sm:h-[48px] md:w-[64px] md:h-[64px] xl:w-[86px] xl:h-[86px]  ';
  const sizeImg =
    'h-[32px] w-[32px] sm:w-[32px] sm:h-[32px] md:w-[48px] md:h-[48px] xl:w-[64px] xl:h-[64px] rounded-full';

  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        rotateY: 360,
        duration: 5,
        ease: 'power1.inOut',
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="perspective-[1200px] relative">
        {/* Coin Wrapper */}
        <div
          ref={logoRef}
          className={sizeCoin}
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'center',
          }}
        >
          {/* Front Side */}
          <div
            className="absolute flex h-full w-full flex-col items-center justify-center rounded-full border-4 border-yellow-700 bg-yellow-500"
            style={{
              transform: 'rotateY(0deg)',
              backfaceVisibility: 'hidden',
              boxShadow: 'inset 0 0px 6px rgba(0, 0, 0, 0.6)',
            }}
          >
            <img src="./nft.png" alt="NFT Icon" className={sizeImg} />
          </div>

          {/* Back Side */}
          <div
            className="absolute flex h-full w-full flex-col items-center justify-center rounded-full border-4 border-yellow-700 bg-yellow-500"
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              boxShadow: 'inset 0 0px 6px rgba(0, 0, 0, 0.6)',
            }}
          >
            <img src="./luigi-icon.png" alt="Luigi Icon" className={sizeImg} />
          </div>
        </div>
      </div>
    </div>
  );
};
