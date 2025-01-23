import React from 'react';
import { Link } from 'react-router-dom';
import { LockIcon } from '../../Libraries/Icons.tsx';

type NavLink = {
  to: string;
  label: string;
  locked: boolean;
};

type NavLinksProps = {
  links: NavLink[];
  onLinkClick: (link: NavLink) => void; // Handling the link click logic here
};

export const NavLinks: React.FC<NavLinksProps> = ({ links, onLinkClick }) => {
  return (
    <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
      {links.map(({ to, label, locked }) => {
        return (
          <div key={to} className="group relative flex flex-col items-center">
            {locked && (
              <LockIcon
                width={24}
                height={24}
                stroke="var(--text-color)"
                className="absolute inset-0 z-20 m-auto flex items-center justify-center"
              />
            )}

            <Link
              to={locked ? '#' : to} // Default to '#' if locked (no page change happens)
              onClick={(e) => {
                // Prevent default behavior if the link is locked
                if (locked) {
                  e.preventDefault(); // Disable clicking entirely if locked
                } else {
                  // Call onLinkClick for both types of actions (scroll or navigate)
                  onLinkClick({ to, label, locked });
                }
              }}
              className={`nav-links-responsive truncate p-1 font-bebas text-[--text-color] 
                ${locked ? 'cursor-not-allowed opacity-50' : 'hover:scale-125 '} 
                transform transition-transform duration-300 ease-in-out `}
            >
              {label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
