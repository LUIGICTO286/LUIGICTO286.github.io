import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { NavLinks } from './NavLinks';
import { LogoFlip } from './LogoFlip';
import { DAPPRedirect } from './DAPPRedirect';
import { HamburgerIcon, CloseIcon } from './Icons';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleRedirect = () => {
    window.open('https://luigi-donation-dash.netlify.app', '_blank');
  };
  
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/History', label: 'History' },
    { to: '/Manifesto', label: 'Manifesto' },
    { to: '/Roadmap', label: 'Roadmap' },
    { to: '/how-to-buy', label: 'How to buy' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav
        className={classNames(
          'lg:flex fixed w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-sm shadow-xl transition-transform duration-300 ease-in-out',
          { '-translate-y-[100%]': !scrollingUp, 'translate-y-0': scrollingUp }
        )}
        style={{ color: 'var(--navbar-text)', fontFamily: 'Bebas-Neue' }}
      >
        <div className="container mx-auto gap-4 flex items-center justify-evenly">
          <LogoFlip />

          <div className="hidden lg:flex">
            <NavLinks links={navLinks} />
          </div>

          <div className="flex items-center justify-center">
            <DAPPRedirect onClick={handleRedirect} label="PLEDGE" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden"
            onClick={() => {
              setIsMobileNavOpen(!isMobileNavOpen);
            }}
          >
            {isMobileNavOpen ? (
              <CloseIcon
                width={24}
                height={24}
                stroke="var(--navbar-text)"
                className="transition-transform transform hover:scale-110"
              />
            ) : (
              <HamburgerIcon
                width={24}
                height={24}
                stroke="var(--navbar-text)"
                className="transition-transform transform hover:scale-110"
              />
            )}
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={classNames(
          'lg:hidden fixed left-0 top-0 w-full z-40 transition-all duration-300 ease-in-out',
          {
            'h-screen bg-black/60 backdrop-blur-sm': isMobileNavOpen,
            'h-0 opacity-0': !isMobileNavOpen,
          }
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <NavLinks links={navLinks} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
