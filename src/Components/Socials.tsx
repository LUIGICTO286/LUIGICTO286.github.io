// src/Components/Links.tsx
import React, { useState } from 'react';
import { Modal } from './Modal'; // Assuming Modal is in the same directory
import { FaInstagram, FaTiktok, FaGithub, FaEnvelope, FaDiscord, FaTelegramPlane } from 'react-icons/fa';
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

  const links = [
    {
      href: 'https://t.me/luigiportal2024',
      icon: <FaTelegramPlane className={iconClass} />,
      label: 'TELEGRAM',
    },
    {
      href: 'https://x.com/sol_coin_luigi',
      icon: <XIcon className={iconClass} />,
      label: 'X (TWITTER)',
    },
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
      href: 'https://www.xiaohongshu.com/user/profile/6788615a000000000801d814?xsec_token=YBI6oe95MdSTzJZJFAm8aSz2GWlj8EezKUKkWvWfyK5L8=&xsec_source=app_share&xhsshare=CopyLink&appuid=6788615a000000000801d814&apptime=1737018288&share_id=3540da2be6ab4a07accd577714edbda0',
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
    {
      href: 'https://dexscreener.com/solana/awcxgpmbgvhyzgwe4refstfodghhrha12fhyjqbvqeul',
      icon: <DexScreenerIcon className={iconClass} />,
      label: 'DEXSCREENER',
    },
    /*{
      href: 'https://www.geckoterminal.com/solana/pools/AWcXGpmBGvhyZgWE4rEfSTFoDgHHrHa12fhyjqBvqeUL',
      icon: (
        <img
          className={`contrast-100 grayscale filter transition duration-300 hover:contrast-200 hover:grayscale-0 ${iconClass}`}
          src="./geckoterminal.svg"
          alt=""
        />
      ),
      label: 'GECKOTERMINAL',
    },*/
  ];

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Display the first 4 social links */}
      <div className="fixed bottom-2 left-2 flex flex-wrap items-center justify-start">
        {/* Button to open modal */}
        <button
          onClick={handleModalToggle}
          className="m-1 transform rounded-full bg-gray-100 p-2 text-sm transition-transform duration-300 ease-in-out hover:scale-125 hover:bg-gray-200"
          aria-label="Show all socials"
          style={{
            boxShadow: '0 0 5px #000, 0 0 5px #000, 0 0 5px #000',
          }}
        >
          <MoreIcon className={iconClass} />
        </button>
      </div>

      {/* Modal with all social links */}
      <Modal isOpen={isModalOpen} onClose={handleModalToggle} title={t('social.allsociallinks')}>
        <div className={`grid ${window.innerWidth < 640 ? 'grid-cols-3 grid-rows-3 gap-4' : 'grid-cols-2 gap-4 p-4'}`}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className={`${linkClass}`}
              aria-label={link.label}
            >
              <div>{link.icon}</div>
              <span className="hidden sm:ml-2 sm:inline sm:p-2">{link.label}</span>
            </a>
          ))}
        </div>
      </Modal>
    </>
  );
};
