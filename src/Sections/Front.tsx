import React, { useEffect, useRef } from 'react';
import { Socials } from '../Components/Socials';
import { FiExternalLink } from 'react-icons/fi';
import gsap from 'gsap';

export const Front: React.FC = () => {
  const bigTextRef = useRef<HTMLDivElement | null>(null);
  const smallTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate $LUIGI text
    gsap.fromTo(
      bigTextRef.current,
      { x: '-100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
      }
    );

    // Fade in smaller text
    gsap.fromTo(
      smallTextRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Centered Image with Fading Effect */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className="relative w-full h-full"
          style={{
            backgroundImage: 'url(./luigi-walk.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        >
          {/* Gradient overlay on the image */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  ellipse at center, 
                  rgba(0, 0, 0, 0) 20%, /* Bright center */
                  rgba(0, 0, 0, 1) 60%, /* Darker toward the edges */
                  rgba(0, 0, 0, 1) 100% /* Very dark at the outermost edges */
                )
              `,
            }}
          ></div>
        </div>
      </div>

      {/* Animated Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div
          ref={bigTextRef}
          className="text-white text-[8rem] sm:text-[8rem] lg:text-[8rem] xl:text-[12rem] font-bold tracking-wide leading-tight"
        >
          $LUIGI
        </div>
        <div
          ref={smallTextRef}
          className="text-white text-[2rem] sm:text-[4rem] lg:text-[4rem] xl:text-[6rem] font-medium"
        >
          Community Takeover on Solana
        </div>
      </div>

      {/* Social Links in Bottom Left */}
      <div className="absolute left-0 bottom-0 flex flex-wrap w-full justify-center sm:justify-between items-center">
        <div className="flex m-4">
          <Socials />
        </div>

        {/* DEX Tools Link in Bottom Right */}
        <div className="flex items-center gap-2 m-4">
          <a
            href="https://dexscreener.com/solana/awcxgpmbgvhyzgwe4refstfodghhrha12fhyjqbvqeul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg flex items-center gap-1 hover:text-red-400 transition duration-300"
          >
            <FiExternalLink /> DEX SCREENER
          </a>
          <a
            href="https://www.dextools.io/app/en/token/luigioctoofficial?t=1734470060661"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg flex items-center gap-1 hover:text-red-400 transition duration-300"
          >
            <FiExternalLink /> DEXTools
          </a>
        </div>
      </div>
    </div>
  );
};
