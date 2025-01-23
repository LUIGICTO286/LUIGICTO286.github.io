import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export const LogoFlip: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  const bgColor = 'bg-yellow-700';
  const minZ = 1;
  const maxZ = 5;
  const steps = 20;

  const edgeLayers = Array.from({ length: steps }, (_, i) => minZ + ((maxZ - minZ) / (steps - 1)) * i);

  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        rotateY: 360,
        duration: 4,
        ease: '',
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="perspective-[1200px]">
        <Link to="/">
          <div
            ref={logoRef}
            className="relative h-[48px] w-[48px]"
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
              <img src="./nft.png" alt="NFT Icon" className="h-[32px] w-[32px] overflow-hidden rounded-full" />
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
                    <img
                      src="./luigi-icon.png"
                      alt="Luigi Icon"
                      className="h-[32px] w-[32px] overflow-hidden rounded-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};
