import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="perspective-[1200px] size-auto">
        <Link to="/">
          <div
            ref={logoRef}
            className="nav-logo-responsive relative"
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
        </Link>
      </div>
    </div>
  );
};
