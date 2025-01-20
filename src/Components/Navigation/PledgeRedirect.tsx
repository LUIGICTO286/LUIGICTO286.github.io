import React from 'react';
import { SolanaIcon } from '../../Libraries/Icons';

interface PledgeProps {
  onClick: () => void;
  label?: string;
}

export const PledgeRedirect: React.FC<PledgeProps> = ({ onClick, label = 'Pledge' }) => {
  return (
    <button
      onClick={onClick}
      className={`nav-links-responsive duration-30 flex transform items-center justify-center space-x-2 truncate p-1 text-center 
      font-bebas tracking-wide text-[--text-color] transition-transform ease-in-out 
      hover:scale-125 hover:[text-shadow:0_0_1px_#FFF,0_0_1px_#FFF,0_0_1px_#FFF]`}
    >
      <SolanaIcon stroke="var(--text-color)" className="nav-language-responsive" />
      <span>{label}</span>
    </button>
  );
};
