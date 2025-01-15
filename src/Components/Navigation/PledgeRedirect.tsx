import React, { useState } from 'react';
import { SolanaIcon } from '../../Libraries/Icons';

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
        'nav-links-responsive flex items-center justify-center space-x-2 p-1 font-bebas tracking-wide hover:scale-125'
      }
      style={{
        textShadow: isHovered ? '0 0 1px #FFF, 0 0 1px #FFF, 0 0 1px #FFF' : 'none',
        transform: isHovered ? 'scale(1.25)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
      }}
    >
      <SolanaIcon stroke="var(--text-color)" className="nav-language-responsive" />
      <span>{label}</span>
    </button>
  );
};
