import React, { useState } from 'react';
import './HowToBuy.css';
import { NextIcon, PrevIcon } from '../../Libraries/Icons';
import { CONTRACT_ADDRESS, SOLSCAN_URL } from '../../constants';
import { FaCopy } from 'react-icons/fa';

export const HowToBuy: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [allVisible, setAllVisible] = useState<boolean>(false);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const isStepVisible = (step: number) => {
    return allVisible || currentStep === step;
  };

  const navigationButtonsClassNames = 'navButton mb-16 rounded-3xl bg-gray-200';
  return (
    <>
      <div className="contentWrapper font-[VT323] text-white">
        <h1 className="text-[4rem]">How to Buy</h1>
        <div className="content">
          <div className={`step ${isStepVisible(1) ? 'visible' : 'hidden'}`}>
            <h2 className="stepTitle">Step 1: Download a Crypto Wallet</h2>
            <div className="stepText">
              There are several crypto wallets to choose from within the Solana network:
              <div className="flex justify-center space-x-8 pt-4">
                <div>
                  <img src={'/logos/solflare-logo.png'} alt="Solflare" className="walletLogo" />
                  <p className="text-center">Solflare</p>
                </div>
                <div>
                  <img src={'/logos/exodus-logo.png'} alt="Exodus" className="walletLogo" />
                  <p className="text-center">Exodus</p>
                </div>
                <div>
                  <img src={'/logos/atomic-logo.png'} alt="Atomic" className="walletLogo" />
                  <p className="text-center">Atomic Wallet</p>
                </div>
              </div>
              <p className="pt-4">
                If you are using a desktop computer, you can download Google Chrome and the wallet Chrome extension. If
                you prefer using your mobile phone, you can download the wallet via Google Play or the iOS App Store if
                it’s available.
              </p>
            </div>
          </div>
          <div className={`step ${isStepVisible(2) ? 'visible' : 'hidden'}`}>
            <h2 className="stepTitle">Step 2: Set Up Your Wallet</h2>
            <p className="stepText">
              Register and set up the crypto wallet via the wallet’s Google Chrome extension or via the mobile app you
              downloaded in Step 1. You may refer to the wallet’s support page for reference. Make sure to keep your
              seed phrase safe, and take note of your wallet address.
            </p>
          </div>
          <div className={`step ${isStepVisible(3) ? 'visible' : 'hidden'}`}>
            <h2 className="stepTitle">Step 3: Buy SOL as Your Base Currency</h2>
            <p className="stepText">
              Once your wallet is set up, you can log in to any crypto exchange platform, like Binance, Bybit, etc.
              (once you are registered).
            </p>
          </div>
          <div className={`step ${isStepVisible(4) ? 'visible' : 'hidden'}`}>
            <h2 className="stepTitle">Step 4: Send SOL From Crypto Exchange to Your Crypto Wallet</h2>
            <p className="stepText">
              Once you buy your SOL, go to your wallet section and look for the SOL you purchased. Click on withdraw and
              fill up the required information. Set the network to Solana, provide your wallet address, and the amount
              you want to transfer. Click the withdraw button and wait for your SOL to appear in your wallet.
            </p>
          </div>
          <div className={`step ${isStepVisible(5) ? 'visible' : 'hidden'}`}>
            <h2 className="stepTitle">Step 5: Choose a Decentralized Exchange (DEX)</h2>
            <div className="stepText">
              There are several DEXs to choose from:
              <div className="flex justify-center space-x-8 pt-4">
                <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
                  <img src={'/logos/dexscreener-logo.png'} alt="Dexscreener" className="walletLogo" />
                  <p className="text-center">Dexscreener</p>
                </a>
                <a href="https://www.geckoterminal.com/pl" target="_blank" rel="noopener noreferrer">
                  <img src={'/logos/geckoterminal-logo.png'} alt="Geckoterminal" className="walletLogo" />
                  <p className="text-center">Geckoterminal</p>
                </a>
              </div>
              You just have to make sure the wallet you selected in Step 2 is supported by the exchange.
            </div>
          </div>
          <div className={`step ${isStepVisible(6) ? 'visible' : 'hidden'}`}>
            <h2 className="stepTitle">Step 6: Connect Your Wallet</h2>
            <p className="stepText">
              Connect your wallet to the DEX you want to use by using your wallet address from Step 2.
            </p>
          </div>
          <div className={`step ${isStepVisible(7) ? 'visible' : 'hidden'}`}>
            <h2 className="stepTitle">Step 7: Trade Your SOL With the Coin You Want to Get</h2>
            <p className="stepText">
              Select your SOL as the payment and select Luigi Mangione as the coin you want to acquire.
            </p>
          </div>
          <div className={`step ${isStepVisible(8) ? 'visible' : 'hidden'}`}>
            <h2 className="stepTitle">Step 8: If Luigi Mangione Doesn’t Appear, Find its Smart Contract</h2>
            <p className="stepText">
              If the coin you want does not appear on the DEX, you can refer to{' '}
              <a href="https://explorer.solana.com/" target="_blank" rel="noopener noreferrer">
                Solana Explorer
              </a>{' '}
              and find the smart contract address. You can then copy and paste it into Raydium. Beware of scams and make
              sure you got the official contract address:
              <br />
              <div className="flex items-center space-x-2 pt-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(CONTRACT_ADDRESS);
                  }}
                  className="flex items-center space-x-1 rounded-full bg-[--secondary-color] p-2 text-[--primary-color] transition duration-200 hover:bg-opacity-80"
                  title="Copy to clipboard"
                >
                  <FaCopy />
                </button>
                <a href={SOLSCAN_URL} target="_blank" rel="noopener noreferrer">
                  <code className="break-all text-sm">${CONTRACT_ADDRESS}</code>
                </a>
              </div>
            </p>
          </div>
          <div className={`step ${isStepVisible(9) ? 'visible' : 'hidden'}`}>
            <h2 className="stepTitle">Step 9: Apply the Swap</h2>
            <p>
              Once you are done with the previous steps, you can click on the Swap button. From deciding where to buy
              Luigi Mangione to making the purchase, your crypto transaction is now complete!
            </p>
          </div>
        </div>
      </div>

      <div className="navigationButtons">
        <button onClick={prevStep} disabled={allVisible || currentStep == 1} className={navigationButtonsClassNames}>
          <PrevIcon />
        </button>
        <button onClick={nextStep} disabled={allVisible || currentStep == 9} className={navigationButtonsClassNames}>
          <NextIcon />
        </button>
        <button
          className={navigationButtonsClassNames}
          onClick={() => {
            setAllVisible(!allVisible);
          }}
        >
          {allVisible ? 'Hide all' : 'Show all'}
        </button>
      </div>
    </>
  );
};

export default HowToBuy;
