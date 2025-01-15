// src/Components/Socials.tsx
import { FaTiktok, FaGithub, FaEnvelope, FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { XIcon, TensorIcon } from './Icons';

export const Socials = () => {
  const socialsClass = 'text-[--text-color] text-4xl hover:text-red-400 hover:scale-110 transition duration-300 mx-1';

  return (
    <div className="flex flex-wrap justify-evenly">
      <a
        href="https://www.tiktok.com/@luigi_coin_cto"
        target="_blank"
        rel="noopener noreferrer"
        className={socialsClass}
      >
        <FaTiktok />
      </a>
      <a href="github.com/LUIGICTO286" target="_blank" rel="noopener noreferrer" className={socialsClass}>
        <FaGithub />
      </a>
      <a href="discord.gg/2YEPKpwm" target="_blank" rel="noopener noreferrer" className={socialsClass}>
        <FaDiscord />
      </a>
      <a href="https://t.me/luigiportal2024" target="_blank" rel="noopener noreferrer" className={socialsClass}>
        <FaTelegramPlane />
      </a>
      <a href="https://x.com/sol_coin_luigi" target="_blank" rel="noopener noreferrer" className={socialsClass}>
        <XIcon width={36} height={36} className={socialsClass} />
      </a>
      <a
        href="https://www.tensor.trade/portfolio?wallet=FDorEwAyyKMBEu6V1LVRGHSBe8wy6qqrCeAV98WWofvz"
        target="_blank"
        rel="noopener noreferrer"
        className={socialsClass}
      >
        <TensorIcon width={36} height={36} className={socialsClass} />
      </a>
      <a href="mailto:info@soluigi.com " className={socialsClass}>
        <FaEnvelope />
      </a>
    </div>
  );
};
