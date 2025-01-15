// src/Components/ExternalLinks.tsx
import { FiExternalLink } from 'react-icons/fi';
import { DextToolsIcon, DexScreenerIcon } from './Icons';

export const ExternalLinks = () => {
  const externalLinkClass =
    'flex mx-1 text-[--text-color] text-[1.5rem] sm:text-[2rem] lg:text-[2rem] xl:text-[2rem] hover:text-red-400 hover:scale-110 transition duration-300';

  return (
    <div className="flex flex-wrap justify-evenly">
      <a
        href="https://www.dextools.io/app/en/token/luigioctoofficial?t=1734470060661"
        target="_blank"
        rel="noopener noreferrer"
        className={externalLinkClass}
      >
        <DextToolsIcon width={36} height={36} />
        DEXTOOLS
      </a>
      <a
        href="https://dexscreener.com/solana/awcxgpmbgvhyzgwe4refstfodghhrha12fhyjqbvqeul"
        target="_blank"
        rel="noopener noreferrer"
        className={externalLinkClass}
      >
        <DexScreenerIcon width={36} height={36} />
        DEXSCREENER
      </a>
      <a
        href="https://www.geckoterminal.com/solana/pools/AWcXGpmBGvhyZgWE4rEfSTFoDgHHrHa12fhyjqBvqeUL"
        target="_blank"
        rel="noopener noreferrer"
        className={externalLinkClass}
      >
        <FiExternalLink /> GECKOTERMINAL
      </a>
    </div>
  );
};
