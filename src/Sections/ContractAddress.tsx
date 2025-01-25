import { useState } from 'react';
import { FaCopy } from 'react-icons/fa'; // Importing Font Awesome icons

export const ContractAddress = () => {
  const contractAddress = '5XyKkFaJpAmsH4Tf2EFj3S61W3hC5cJhxNZQQ5h1pump';
  const solscanUrl = `https://solscan.io/token/${contractAddress}`;
  const [copySuccess, setCopySuccess] = useState('');

  // Font size settings for responsive design
  const a1FontSizes = 'text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]';
  const buttonFontSizes = 'text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] xl:text-[2.5rem]';

  // Function to handle copying to clipboard
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(contractAddress);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); // Clear the message after 2 seconds
    } catch (err) {
      setCopySuccess(`Failed to copy! ${contractAddress}`);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[var(--background-color)] px-4 py-8">
      <div className="flex max-w-md flex-col items-center justify-center space-y-4 rounded-lg bg-[var(--primary-color)] p-6 text-center shadow-lg">
        <h2 className="font-[VT323] text-2xl text-[var(--secondary-color)] sm:text-3xl">Contract Address</h2>

        {/* Display the contract address */}
        <div className="flex flex-col items-center space-y-2 sm:space-y-4">
          <a
            href={solscanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${a1FontSizes} break-words font-[VT323] text-[var(--secondary-color)] sm:text-xl md:text-2xl`}
            style={{ wordBreak: 'break-word' }}
          >
            {contractAddress}
          </a>

          {/* Copy to clipboard button */}
          <button
            onClick={copyToClipboard}
            className="flex items-center justify-center rounded-full bg-[var(--secondary-color)] p-3 text-[var(--primary-color)] transition duration-200 hover:bg-opacity-80 focus:outline-none"
            title="Copy to clipboard"
          >
            <FaCopy className={buttonFontSizes} />
          </button>
        </div>

        {/* Success or failure message */}
        {copySuccess && (
          <span
            className={`mt-2 font-[VT323] text-sm ${copySuccess === 'Copied!' ? 'text-green-500' : 'text-red-500'}`}
          >
            {copySuccess}
          </span>
        )}
      </div>
    </div>
  );
};
