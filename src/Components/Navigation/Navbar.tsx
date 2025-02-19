import { useState, useEffect } from 'react';
import { NavLinks } from './NavLinks';
import { LogoFlip } from './LogoFlip';
import { PledgeRedirect } from './PledgeRedirect';
import { LanguageSwitcher } from './LanguageSwitcher';
import { HamburgerIcon, CloseIcon } from '../../Libraries/Icons';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const navLinks = [
    { to: '/', label: t('navigation.home'), locked: false },
    { to: '/manifesto', label: t('navigation.manifesto'), locked: false },
    //{ to: '/history', label: t('navigation.history'), locked: true },
    //{ to: '/roadmap', label: t('navigation.roadmap'), locked: true },
    { to: '/how-to-buy', label: t('navigation.howtobuy'), locked: false },
    { to: '/whitepaper', label: t('navigation.whitepaper'), locked: false },
  ];

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
        className={`fixed left-0 top-0 z-50 w-full bg-black/40 font-bebas text-[--text-color] shadow-xl backdrop-blur-sm transition-transform duration-300 ease-in-out ${
          scrollingUp ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-evenly gap-4">
          <LogoFlip />

          <div className="hidden lg:flex">
            <NavLinks links={navLinks} />
          </div>

          <div className="flex items-center justify-center">
            <PledgeRedirect onClick={pledgeRedirect} />
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
        className={`fixed left-0 top-0 z-40 w-full transition-all duration-300 ease-in-out lg:hidden ${
          isMobileNavOpen ? 'h-screen bg-black/40 opacity-100 backdrop-blur-sm' : 'pointer-events-none h-0 opacity-0'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-4 font-[Jersey]">
          <NavLinks
            onClick={() => {
              setIsMobileNavOpen(false);
            }}
            links={navLinks}
          />
        </div>
      </div>
    </>
  );
};
