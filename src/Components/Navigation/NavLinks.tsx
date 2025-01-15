import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LockIcon } from '../../Libraries/Icons.tsx';

type NavLink = {
  to: string;
  label: string;
  locked: boolean;
};

type NavLinksProps = {
  links: NavLink[];
  onLinkClick?: () => void;
};

export const NavLinks: React.FC<NavLinksProps> = ({ links, onLinkClick }) => {
  return (
    <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
      {links.map(({ to, label, locked }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
          <div key={to} className="group relative flex flex-col items-center">
            {locked && (
              <>
                <LockIcon
                  width={24}
                  height={24}
                  stroke="var(--text-color)"
                  className="absolute inset-0 z-20 m-auto flex items-center justify-center"
                />
              </>
            )}

            {/* Nav Link */}
            <Link
              to={locked ? '#' : to}
              onMouseEnter={() => !locked && setIsHovered(true)}
              onMouseLeave={() => !locked && setIsHovered(false)}
              onClick={() => {
                if (!locked && onLinkClick) onLinkClick();
              }}
              className={`nav-links-responsive truncate p-1 font-bebas tracking-wide text-[--text-color] ${locked ? ' opacity-50' : ''}`}
              style={{
                textShadow: isHovered ? '0 0 1px #FFF, 0 0 1px #FFF, 0 0 1px #FFF' : 'none',
                transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
              }}
            >
              {label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
