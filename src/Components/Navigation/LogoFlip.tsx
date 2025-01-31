import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const LogoFlip: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  const bgColor = 'bg-yellow-700';
  const sizeCoin =
    'relative h-[48px] w-[48px] sm:w-[48px] sm:h-[48px] md:w-[64px] md:h-[64px] xl:w-[86px] xl:h-[86px] overflow-hidden ';
  const sizeImg =
    'h-[32px] w-[32px] sm:w-[32px] sm:h-[32px] md:w-[48px] md:h-[48px] xl:w-[64px] xl:h-[64px] overflow-hidden rounded-full';
  const minZ = 1;
  const maxZ = 5;
  const steps = 10;

  const edgeLayers = Array.from({ length: steps }, (_, i) => minZ + ((maxZ - minZ) / (steps - 1)) * i);

  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        rotateY: 360,
        duration: 10,
        ease: '',
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="perspective-[1200px]">
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
              boxShadow: 'inset 0 0px 6px rgba(0, 0, 0, 0.6)',
              borderRadius: '50%',
              backfaceVisibility: 'hidden',
            }}
          >
            <img src="./nft.png" alt="NFT Icon" className={sizeImg} />
          </div>

          {/* Border / Edge */}
          {edgeLayers.map((z, index) => (
            <div
              key={index}
              className={`absolute h-full w-full rounded-full ${
                index === edgeLayers.length - 1 ? 'border-4 border-yellow-700 bg-yellow-500' : bgColor
              }`}
              style={{
                transform: `translateZ(-${z}px)`,
                zIndex: -1,
              }}
            >
              {index === edgeLayers.length - 1 && (
                <div
                  className="absolute flex h-full w-full flex-col items-center justify-center rounded-full border-2 border-yellow-700 bg-yellow-500"
                  style={{
                    boxShadow: 'inset 0 0px 6px rgba(0, 0, 0, 0.6)',
                    borderRadius: '50%',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <img src="./luigi-icon.png" alt="Luigi Icon" className={sizeImg} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
