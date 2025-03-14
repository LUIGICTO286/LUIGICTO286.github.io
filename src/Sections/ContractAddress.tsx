import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

export const ContractAddress = () => {
  const contractAddress = '5XyKkFaJpAmsH4Tf2EFj3S61W3hC5cJhxNZQQ5h1pump';
  const solscanUrl = `https://solscan.io/token/${contractAddress}`;
  const [copySuccess, setCopySuccess] = useState(false);

  // Function to handle copying to clipboard
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(contractAddress);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center -mx-4">
      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg text-center w-full max-w-3xl">
        {/* Address display with Tailwind responsive sizing */}
        <div className="flex flex-wrap items-center justify-center w-full px-2 sm:px-4 py-3 bg-[var(--primary-color)] bg-opacity-90 rounded-lg overflow-visible">
          {/* Hide "CA:" on very small screens */}
          <span className="inline text-sm xs:text-xl sm:text-2xl md:text-3xl mr-1 sm:mr-2 whitespace-nowrap font-[VT323] text-[var(--secondary-color)] flex-shrink-0 select-none block">
            CA:
          </span>
          <a
            href={solscanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[VT323] text-[var(--secondary-color)] no-underline hover:underline max-w-[calc(100%-60px)] flex items-center"
            title="View on Solscan"
          >
            <span className="text-xs xxs:text-sm xs:text-lg sm:text-xl md:text-2xl lg:text-3xl truncate">
              {contractAddress}
            </span>
          </a>

          {/* Copy button with tooltip */}
          <div className="relative ml-2 sm:ml-3">
            <button
              onClick={copyToClipboard}
              className="flex items-center justify-center rounded-full bg-[var(--secondary-color)] p-1.5 sm:p-2.5 text-[var(--primary-color)] transition-all duration-200 hover:bg-opacity-80 hover:scale-105 focus:outline-none shadow-md"
              title="Copy to clipboard"
              aria-label="Copy contract address"
            >
              <FaCopy className="text-sm sm:text-lg" />
            </button>
            {copySuccess && (
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-white rounded text-green-600 text-sm font-medium shadow-md whitespace-nowrap z-50">
                Copied
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2  bg-white rotate-45"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
