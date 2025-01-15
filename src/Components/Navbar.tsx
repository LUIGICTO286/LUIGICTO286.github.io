import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { NavLinks } from './NavLinks';
import { LogoFlip } from './LogoFlip';
import { PledgeRedirect } from './PledgeRedirect';
import { LanguageSwitcher } from './LanguageSwitcher';
import { HamburgerIcon, CloseIcon } from './Icons';

type LanguageOption = { code: string; flag: string };

const languageOptions: LanguageOption[] = [
  { code: 'en', flag: '/Locales/SVG/us.svg' },
  { code: 'cn', flag: '/Locales/SVG/cn.svg' },
  { code: 'it', flag: '/Locales/SVG/it.svg' },
  { code: 'de', flag: '/Locales/SVG/de.svg' },
  { code: 'ru', flag: '/Locales/SVG/ru.svg' },
];

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [selectedLanguageFlag, setSelectedLanguageFlag] = useState('');

  const navLinks = [
    { to: '/', label: 'Home', locked: false },
    { to: '/Manifesto', label: 'Manifesto', locked: true },
    { to: '/History', label: 'History', locked: true },
    { to: '/Roadmap', label: 'Roadmap', locked: true },
    { to: '/how-to-buy', label: 'How to buy', locked: true },
  ];

  const handleLanguageChange = (language: string) => {
    const selectedLanguage = languageOptions.find((lang) => lang.code === language);
    if (selectedLanguage) setSelectedLanguageFlag(selectedLanguage.flag);
  };

  const handleRedirect = () => {
    window.location.href = 'https://luigi-donation-dash.netlify.app/'; // Replace with your dApp URL
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY || prevScrollY <= 0) {
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
      <nav
        className={classNames(
          'lg:flex fixed w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-sm shadow-xl transition-transform duration-300 ease-in-out',
          { '-translate-y-[100%]': !scrollingUp, 'translate-y-0': scrollingUp }
        )}
        style={{ color: 'var(--text-color)', fontFamily: 'Bebas-Neue' }}
      >
        <div className="container mx-auto flex items-center justify-evenly gap-4">
          <LogoFlip />

          <div className="hidden lg:flex">
            <NavLinks links={navLinks} />
          </div>

          <div className="flex items-center justify-center">
            <PledgeRedirect onClick={handleRedirect} label="Pledge" />
          </div>

          <div className="flex items-center">
            <LanguageSwitcher onLanguageChange={handleLanguageChange} />
          </div>

          <button className="lg:hidden" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            {isMobileNavOpen ? (
              <CloseIcon width={24} height={24} stroke="var(--text-color)" />
            ) : (
              <HamburgerIcon width={24} height={24} stroke="var(--text-color)" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={classNames('lg:hidden fixed left-0 top-0 w-full z-40 transition-all duration-300 ease-in-out', {
          'h-screen bg-black/40 backdrop-blur-sm': isMobileNavOpen,
          'h-0 opacity-0': !isMobileNavOpen,
        })}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-4">
          <NavLinks links={navLinks} onLinkClick={() => setIsMobileNavOpen(false)} />
        </div>
      </div>
    </>
  );
};
