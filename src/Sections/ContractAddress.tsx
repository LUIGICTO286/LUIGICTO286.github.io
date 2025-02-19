import { useState } from 'react';
import { FaCopy } from 'react-icons/fa'; // Importing Font Awesome icons

export const ContractAddress = () => {
  const contractAddress = '5XyKkFaJpAmsH4Tf2EFj3S61W3hC5cJhxNZQQ5h1pump';
  const solscanUrl = `https://solscan.io/token/${contractAddress}`;
  const [copySuccess, setCopySuccess] = useState('');

  // Font size settings for responsive design
  const a1FontSizes = 'text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]';
  const buttonFontSizes = 'text-[1rem] sm:text-[1rem] lg:text-[1rem] xl:text-[1rem]';

  // Function to handle copying to clipboard
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(contractAddress);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); // Clear the message after 2 seconds
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
    setTimeout(() => setCopySuccess(''), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg text-center ">
        {/* Display the contract address */}
        <div className="flex flex-col items-center space-y-2 sm:space-y-4">
          <a
            href={solscanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${a1FontSizes} break-words font-bebas text-[var(--secondary-color)] sm:text-xl md:text-2xl`}
            style={{ wordBreak: 'break-word' }}
          >
            {contractAddress}
          </a>

          {/* Copy to clipboard button */}
          <button
            onClick={copyToClipboard}
            className="ml-2 flex items-center justify-center rounded-full bg-[var(--secondary-color)] p-3 text-[var(--primary-color)] transition duration-200 hover:bg-opacity-80 focus:outline-none"
            title="Copy to clipboard"
          >
            <FaCopy className={buttonFontSizes} />
          </button>
        </div>

        {/* Success Message with Fade-Out Effect */}
        {copySuccess && (
          <span
            className={`absolute w-2/4 rounded-xl bg-white p-4 font-bebas text-sm shadow-xl ${copySuccess === 'Copied!' ? 'text-green-500' : 'text-red-500'}`}
          >
            {copySuccess}
          </span>
        )}
      </div>
    </div>
  );
};
