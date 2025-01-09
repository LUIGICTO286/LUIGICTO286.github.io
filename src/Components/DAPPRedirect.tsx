import React from 'react';
import { SolanaIcon } from './Icons';

interface DAPPRedirectProps {
  onClick: () => void;
  label?: string;
}

export const DAPPRedirect: React.FC<DAPPRedirectProps> = ({
  onClick,
  label = '',
}) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center gap-3 px-3 py-1 
        prose sm:prose-sm lg:prose-lg xl:prose-xl text-[--var-secondary]
        rounded-lg transition-all 
        hover:bg-white hover:text-black
        font-bebas
      "
    >
      <SolanaIcon width={24} height={24} stroke="black" />
      <span className="">{label}</span>
    </button>
  );
};
