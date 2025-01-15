import React, { useState } from 'react';
import { SolanaIcon } from './Icons';

interface PledgeProps {
  onClick: () => void;
  label?: string;
}

export const PledgeRedirect: React.FC<PledgeProps> = ({ onClick, label = 'Pledge' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={
        'flex items-center justify-center space-x-2 p-1 font-bebas text-[2rem] sm:text-[2rem] lg:text-[1.5rem] xl:text-[2rem] tracking-wide hover:scale-125'
      }
      style={{
        textShadow: isHovered ? '0 0 1px #FFF, 0 0 1px #FFF, 0 0 1px #FFF' : 'none',
        transform: isHovered ? 'scale(1.25)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
      }}
    >
      <SolanaIcon width={30} height={30} stroke="var(--text-color)" className="" />
      <span>{label}</span>
    </button>
  );
};
