import React, { useState } from 'react';
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

  const linkClass =
    'flex items-center p-1 m-1 text-[--primary-color] social-external-links-responsive hover:text-red-400 hover:scale-110 transition duration-300';

  const iconClass = 'social-external-icons-responsive';

  // Most used social links (visible outside modal)
  const topLinks = [
    {
      href: 'https://x.com/sol_coin_luigi',
      icon: <XIcon className={iconClass} />,
      label: 'X (TWITTER)',
    },
    {
      href: 'https://t.me/luigiportal2024',
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
      href: 'https://www.dextools.io/app/en/token/luigioctoofficial?t=1734470060661',
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
        className="fixed bottom-2 left-2 flex items-center space-x-2 rounded-xl bg-gray-100 p-2"
        style={{ boxShadow: '0 0 5px #000' }}
      >
        {topLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition duration-300 hover:scale-110 "
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}

        {/* "More" button opens modal */}
        <button
          onClick={handleModalToggle}
          className="rounded-full p-2 transition duration-300 hover:scale-125 "
          aria-label="Show all socials"
        >
          <MoreIcon className={iconClass} />
        </button>
      </div>

      {/* Modal with all social links */}
      <Modal isOpen={isModalOpen} onClose={handleModalToggle} title={t('social.allsociallinks')}>
        <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3">
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
              <span className="ml-2 hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </div>
      </Modal>
    </>
  );
};
