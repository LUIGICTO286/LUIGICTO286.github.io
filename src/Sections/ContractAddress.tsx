import { useState } from 'react';
import { FaCopy } from 'react-icons/fa'; // Importing Font Awesome icons (you need @fortawesome/react-icons)

export const ContractAddress = () => {
  const contractAddress = '5XyKkFaJpAmsH4Tf2EFj3S61W3hC5cJhxNZQQ5h1pump';
  const solscanUrl = `https://solscan.io/token/${contractAddress}`;
  const [copySuccess, setCopySuccess] = useState('');

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
    <div className="flex h-screen flex-col items-center justify-center text-center text-[--secondary-color]">
      <h2 className="mb-4 text-2xl font-semibold">Contract Address</h2>
      <div className="flex items-center space-x-2">
        <a href={solscanUrl} target="_blank" rel="noopener noreferrer" className="body-text font-mono text-lg">
          {contractAddress}
        </a>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 rounded-full bg-[--secondary-color] p-2 text-[--primary-color] transition duration-200 hover:bg-opacity-80"
          title="Copy to clipboard"
        >
          <FaCopy />
        </button>
      </div>
      {copySuccess && <span className="mt-2 text-sm text-green-500">{copySuccess}</span>}
    </div>
  );
};
