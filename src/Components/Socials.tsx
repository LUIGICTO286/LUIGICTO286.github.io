// src/Components/Links.tsx
import React from 'react';
import { FaInstagram, FaTiktok, FaGithub, FaEnvelope, FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { CoinMarketCapIcon, XIcon, TensorIcon, DextToolsIcon, DexScreenerIcon } from '../Libraries/Icons';

export const Socials: React.FC = () => {
  const linkClass =
    'flex items-center p-1 m-1 text-[--text-color] front-social-external-links-responsive hover:text-red-400 hover:scale-110 transition duration-300';

  const iconClass = 'front-social-external-icons-responsive';

  const links = [
    {
      href: 'https://t.me/luigiportal2024',
      icon: <FaTelegramPlane className={iconClass} />,
      label: 'TELEGRAM',
    },
    {
      href: 'https://x.com/sol_coin_luigi',
      icon: <XIcon className={iconClass} />,
      label: 'X',
    },
    {
      href: 'https://www.tiktok.com/@luigi_coin_cto',
      icon: <FaTiktok className={iconClass} />,
      label: 'TIKTOK',
    },
    {
      href: 'https://discord.gg/2YEPKpwm',
      icon: <FaDiscord className={iconClass} />,
      label: 'DISCORD',
    },
    {
      href: 'https://www.instagram.com/luigi_sol_cto',
      icon: <FaInstagram className={iconClass} />,
      label: 'INSTAGRAM',
    },
    {
      href: 'https://github.com/LUIGICTO286',
      icon: <FaGithub className={iconClass} />,
      label: 'GITHUB',
    },
    {
      href: 'https://www.tensor.trade/portfolio?wallet=FDorEwAyyKMBEu6V1LVRGHSBe8wy6qqrCeAV98WWofvz',
      icon: <TensorIcon className={iconClass} />,
      label: 'NFT',
    },
    {
      href: 'mailto:info@soluigi.com',
      icon: <FaEnvelope className={iconClass} />,
      label: 'MAIL',
    },
    {
      href: 'https://coinmarketcap.com/de/currencies/luigi-mangione/',
      icon: <CoinMarketCapIcon className={iconClass} />,
      label: 'COINMARKETAP',
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
    {
      href: 'https://www.geckoterminal.com/solana/pools/AWcXGpmBGvhyZgWE4rEfSTFoDgHHrHa12fhyjqBvqeUL',
      icon: <FiExternalLink className={iconClass} />,
      label: 'GECKOTERMINAL',
    },
  ];

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith('mailto') ? '_self' : '_blank'}
          rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
          className={linkClass}
          aria-label={link.label}
        >
          <div>{link.icon}</div>
          <span className="ml-1 hidden md:inline">{link.label}</span>
        </a>
      ))}
    </div>
  );
};
