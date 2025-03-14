import React, { useState, useEffect } from 'react';
import { Modal } from './Modal'; // Assuming Modal is in the same directory
import { FaTelegramPlane, FaTiktok, FaInstagram, FaGithub, FaEnvelope, FaDiscord } from 'react-icons/fa';
import {
  CoinMarketCapIcon,
  XIcon,
  TensorIcon,
  DextToolsIcon,
  DexScreenerIcon,
  MoreIcon,
  XiaohongshuIcon,
} from '../Libraries/Icons';
import { useTranslation } from 'react-i18next';

export const Socials: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 260);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 260);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const linkClass =
    'flex items-center m-1 text-[--primary-color] social-external-links-responsive hover:text-red-400 hover:scale-110 transition duration-300';

  const iconClass = 'social-external-icons-responsive';

  // Most used social links (visible outside modal)
  const topLinks = [
    {
      href: 'https://x.com/sol_luigi_coin',
      icon: <XIcon className={iconClass} />,
      label: 'X (TWITTER)',
    },
    {
      href: 'https://t.me/luigicto2024',
      icon: <FaTelegramPlane className={iconClass} />,
      label: 'TELEGRAM',
    },
    {
      href: 'https://dexscreener.com/solana/awcxgpmbgvhyzgwe4refstfodghhrha12fhyjqbvqeul',
      icon: <DexScreenerIcon className={iconClass} />,
      label: 'DEXSCREENER',
    },
  ];

  // All social links (shown in modal)
  const allLinks = [
    ...topLinks,
    {
      href: 'https://www.tiktok.com/@luigi_sol_cto',
      icon: <FaTiktok className={iconClass} />,
      label: 'TIKTOK',
    },
    {
      href: 'https://www.discord.gg/luigisol',
      icon: <FaDiscord className={iconClass} />,
      label: 'DISCORD',
    },
    {
      href: 'https://www.instagram.com/luigi_sol_cto',
      icon: <FaInstagram className={iconClass} />,
      label: 'INSTAGRAM',
    },
    {
      href: 'https://www.xiaohongshu.com/user/profile/6788615a000000000801d814',
      icon: <XiaohongshuIcon className={iconClass} />,
      label: 'XIAOHONGSHU',
    },
    {
      href: 'https://github.com/LUIGICTO286',
      icon: <FaGithub className={iconClass} />,
      label: 'GITHUB',
    },
    {
      href: 'https://www.tensor.trade/portfolio?wallet=FDorEwAyyKMBEu6V1LVRGHSBe8wy6qqrCeAV98WWofvz',
      icon: <TensorIcon className={iconClass} />,
      label: 'NFT (LUIGI286)',
    },
    {
      href: 'mailto:info@soluigi.com',
      icon: <FaEnvelope className={iconClass} />,
      label: 'MAIL',
    },
    {
      href: 'https://coinmarketcap.com/de/currencies/luigi-mangione/',
      icon: <CoinMarketCapIcon className={iconClass} />,
      label: 'COINMARKETCAP',
    },
    {
      href: 'https://www.dextools.io/app/en/token/luigioctoofficial',
      icon: <DextToolsIcon className={iconClass} />,
      label: 'DEXTOOLS',
    },
  ];

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Display top social links outside modal */}
      <div
        className="fixed bottom-2 z-50 flex flex-col items-center space-x-2 rounded-r-xl bg-gray-100 p-2 pl-6"
        style={{ boxShadow: '0 0 5px #000' }}
      >
        <div className="flex ">
          {!isSmallScreen && (
            <div className="flex">
              {topLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}
          {/* "More" button opens modal */}
          <button onClick={handleModalToggle} className={`${linkClass} pl-2`} aria-label="Show all socials">
            <MoreIcon className={iconClass} />
          </button>
        </div>
      </div>

      {/* Modal with all social links */}
      <Modal isOpen={isModalOpen} onClose={handleModalToggle} title={t('social.allsociallinks')}>
        <div className="grid grid-cols-2 gap-6 p-2 sm:grid-cols-3">
          {allLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className={linkClass}
              aria-label={link.label}
            >
              {link.icon}
              <span className="ml-4 mr-2 sm:inline">{link.label}</span>
            </a>
          ))}
        </div>
      </Modal>
    </>
  );
};
