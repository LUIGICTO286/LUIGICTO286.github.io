import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type NavLink = {
  to: string;
  label: string;
};

type NavLinksProps = {
  links: NavLink[];
};

export const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  return (
    <div className="space-y-4 flex flex-col items-center lg:space-x-6 lg:space-y-0 lg:flex-row">
      {links.map(({ to, label }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
          <Link
            key={to}
            to={to}
            onMouseEnter={() => { setIsHovered(true); }} 
            onMouseLeave={() => { setIsHovered(false);}} 
            className="transition-all duration-300 ease-in-out text-base sm:text-2xl md:text-4xl lg:text-xl truncate p-1"
            style={{
              color: 'var(--navbar-text)', 
              backgroundColor: 'rgba(var(--background-color), 0.33)', 
              fontFamily: 'Bebas Neue',
              letterSpacing: '2px', 
              textShadow: isHovered
                ? '0 0 1px #FFF, 0 0 1px #FFF, 0 0 1px #FFF'
                : 'none',
              transform: isHovered ? 'scale(1.3)' : 'scale(1)', 
              transition:
                'transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out', 
            }}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};
