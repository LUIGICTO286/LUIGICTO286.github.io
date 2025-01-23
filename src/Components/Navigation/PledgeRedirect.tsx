import React from 'react';
import { SolanaIcon } from '../../Libraries/Icons';
import { useTranslation } from 'react-i18next';

interface PledgeProps {
  onClick: () => void;
}

export const PledgeRedirect: React.FC<PledgeProps> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      className={`nav-links-responsive duration-30 flex transform items-center justify-center space-x-2 truncate p-1 text-center 
      font-bebas tracking-wide text-[--text-color] transition-transform ease-in-out 
      hover:scale-125 `}
    >
      <SolanaIcon stroke="var(--text-color)" className="nav-language-responsive" />
      <span>{t('navigation.pledge')}</span>
    </button>
  );
};
