// src/Components/Socials.tsx
import { FaInstagram, FaTiktok, FaGithub, FaEnvelope, FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { XIcon, TensorIcon } from '../../Libraries/Icons';

export const Socials = () => {
  const socialLinkClass =
    'flex items-center mx-2 text-[--text-color] front-social-external-links-responsive hover:text-red-400 hover:scale-110 transition duration-300';

  const iconClass = 'front-social-external-icons-responsive';

  return (
    <div className="flex flex-wrap justify-evenly">
      {/* Telegram */}
      <a href="https://t.me/luigiportal2024" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
        <FaTelegramPlane className={iconClass} />
      </a>

      {/* X (formerly Twitter) */}
      <a href="https://x.com/sol_coin_luigi" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
        <XIcon className={iconClass} />
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@luigi_coin_cto"
        target="_blank"
        rel="noopener noreferrer"
        className={socialLinkClass}
      >
        <FaTiktok className={iconClass} />
      </a>

      {/* Discord */}
      <a href="https://discord.gg/2YEPKpwm" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
        <FaDiscord className={iconClass} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/luigi_sol_cto"
        target="_blank"
        rel="noopener noreferrer"
        className={socialLinkClass}
      >
        <FaInstagram className={iconClass} />
      </a>

      {/* GitHub */}
      <a href="https://github.com/LUIGICTO286" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
        <FaGithub className={iconClass} />
      </a>

      {/* Tensor */}
      <a
        href="https://www.tensor.trade/portfolio?wallet=FDorEwAyyKMBEu6V1LVRGHSBe8wy6qqrCeAV98WWofvz"
        target="_blank"
        rel="noopener noreferrer"
        className={socialLinkClass}
      >
        <TensorIcon className={iconClass} />
      </a>

      {/* Email */}
      <a href="mailto:info@soluigi.com" className={socialLinkClass}>
        <FaEnvelope className={iconClass} />
      </a>
    </div>
  );
};
