import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { NavLinks } from './NavLinks';
import { LogoFlip } from './LogoFlip';
import { PledgeRedirect } from './PledgeRedirect';
import { LanguageSwitcher } from './LanguageSwitcher';
import { HamburgerIcon, CloseIcon } from '../../Libraries/Icons';

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const navLinks = [
    { to: '/', label: 'Home', locked: false },
    { to: '#manifesto', label: 'Manifesto', locked: false },
    { to: '/History', label: 'History', locked: true },
    { to: '/Roadmap', label: 'Roadmap', locked: true },
    { to: '/how-to-buy', label: 'How to buy', locked: true },
  ];

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRedirect = (link: { to: string; label: string; locked: boolean }) => {
    if (link.to.startsWith('#')) {
      scrollToSection(link.to);
    } else {
      window.location.href = link.to;
    }
    setIsMobileNavOpen(false);
  };

  const pledgeRedirect = () => {
    window.location.href = 'https://luigi-donation-dash.netlify.app/';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        setScrollingUp(false);
        if (prevScrollY <= 0) {
          setScrollingUp(true);
        }
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
      <nav
        className={classNames(
          'fixed w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-sm shadow-xl transition-transform duration-300 ease-in-out',
          { '-translate-y-[100%]': !scrollingUp, 'translate-y-0': scrollingUp }
        )}
        style={{ color: 'var(--text-color)', fontFamily: 'Bebas-Neue' }}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-evenly gap-4">
          <LogoFlip />

          <div className="hidden lg:flex">
            <NavLinks links={navLinks} onLinkClick={handleRedirect} />
          </div>

          <div className="flex items-center justify-center">
            <PledgeRedirect onClick={pledgeRedirect} label="Pledge" />
          </div>

          <div className="flex items-center">
            <LanguageSwitcher />
          </div>

          <button className="lg:hidden" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            {isMobileNavOpen ? (
              <CloseIcon className="nav-icons-responsive" stroke="var(--text-color)" />
            ) : (
              <HamburgerIcon className="nav-icons-responsive" stroke="var(--text-color)" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={classNames('lg:hidden fixed left-0 top-0 w-full z-40 transition-all duration-300 ease-in-out', {
          'h-screen bg-black/40 backdrop-blur-sm': isMobileNavOpen,
          'h-0 opacity-0 cursor-default': !isMobileNavOpen,
        })}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-4">
          <NavLinks
            links={navLinks}
            onLinkClick={handleRedirect} // Use the same handler here for mobile
          />
        </div>
      </div>
    </>
  );
};
