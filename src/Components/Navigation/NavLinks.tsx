import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LockIcon } from '../../Libraries/Icons.tsx';

type NavLink = {
  to: string;
  label: string;
  locked: boolean;
};

type NavLinksProps = {
  links: NavLink[];
  onClick?: () => void;
};

export const NavLinks: React.FC<NavLinksProps> = ({ links, onClick }) => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleRedirect = (link: { to: string; label: string; locked: boolean }) => {
    if (link.to.startsWith('#')) {
      const sectionId = link.to.slice(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
      } else {
        navigate('/manifesto'); // Fallback navigation if the section doesn't exist
      }
    } else {
      navigate(link.to); // Use navigate for regular page routes
    }
  };

  return (
    <div className="flex flex-col  items-center space-y-4 font-[Jersey] lg:flex-row lg:space-x-6 lg:space-y-0">
      {links.map(({ to, label, locked }) => {
        return (
          <div key={to} className="relative flex flex-col items-center">
            {locked && (
              <LockIcon
                width={24}
                height={24}
                stroke="var(--text-color)"
                className="absolute inset-0 z-50 m-auto flex items-center justify-center"
              />
            )}

            <Link
              to={locked ? '' : to}
              onClick={(e) => {
                if (locked) {
                  e.preventDefault();
                } else {
                  onClick && onClick();
                  handleRedirect({ to, label, locked });
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
