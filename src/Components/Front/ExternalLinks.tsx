// src/Components/ExternalLinks.tsx
import { FiExternalLink } from 'react-icons/fi';
import { DextToolsIcon, DexScreenerIcon } from '../../Libraries/Icons';

export const ExternalLinks = () => {
  const externalLinkClass =
    'flex items-center mx-2 text-[--text-color] social-external-links-responsive hover:text-red-400 hover:scale-110 transition duration-300';

  const iconClass = 'social-external-icons-responsive';

  return (
    <div className="flex flex-wrap justify-evenly">
      {/* DEXTOOLS Link */}
      <a
        href="https://www.dextools.io/app/en/token/luigioctoofficial?t=1734470060661"
        target="_blank"
        rel="noopener noreferrer"
        className={externalLinkClass}
      >
        <DextToolsIcon className={iconClass} />
        <span className="hidden sm:inline">DEXTOOLS</span>
      </a>

      {/* DEXSCREENER Link */}
      <a
        href="https://dexscreener.com/solana/awcxgpmbgvhyzgwe4refstfodghhrha12fhyjqbvqeul"
        target="_blank"
        rel="noopener noreferrer"
        className={externalLinkClass}
      >
        <DexScreenerIcon className={iconClass} />
        <span className="hidden sm:inline">DEXSCREENER</span>
      </a>

      {/* GECKOTERMINAL Link */}
      <a
        href="https://www.geckoterminal.com/solana/pools/AWcXGpmBGvhyZgWE4rEfSTFoDgHHrHa12fhyjqBvqeUL"
        target="_blank"
        rel="noopener noreferrer"
        className={externalLinkClass}
      >
        <FiExternalLink className={iconClass} />
        <span className="hidden sm:inline">GECKOTERMINAL</span>
      </a>
    </div>
  );
};
