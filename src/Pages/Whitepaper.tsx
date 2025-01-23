// src/Pages/Whitepaper.tsx
import { AnimatedCircle } from '../Components/AnimatedCircle/AnimatedCircle';
import { FaCoins, FaHandshake, FaHeart, FaMedkit, FaBullhorn } from 'react-icons/fa'; // Importing icons

export const Whitepaper = () => {
  const pFontSizes = 'text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]'; // Paragraph font sizes, with responsive increases.
  const h1FontSizes = 'text-[2rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem]'; // Main headers
  const h2FontSizes = 'text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem]'; // Section headers, smaller than h1
  const h3FontSizes = 'text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]'; // Sub-section headers
  // const backgroundFade = 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600';
  const cardShdaow = '';

  return (
    <div className="mt-[25vh] flex h-fit flex-col items-center justify-center px-4 text-left font-sans text-[--text-color] sm:px-8 lg:px-20">
      <div className="whitepaper w-full max-w-5xl">
        {/* Introduction Section */}
        <section className="introduction mb-16 rounded-lg py-8">
          <h1 className={`${h1FontSizes} mb-6 text-center font-bold text-white`}>$LUIGI Whitepaper</h1>

          {/* Purpose */}
          <h3 className={`${h3FontSizes} mb-2 text-left font-medium text-white`}>
            <FaBullhorn className={`mr-2 inline ${h3FontSizes} text-yellow-400`} />
            Purpose
          </h3>
          <p className={`${pFontSizes} mb-4 text-white`}>
            <strong>$LUIGI</strong> represents outrage transformed into action. Our mission is to challenge a healthcare
            system that serves the few at the expense of the many. We demand transparency and fairness.
          </p>
          <p className={`${pFontSizes} mb-4 text-white`}>
            Built on principles of justice and reform, we aim to expose harmful practices and foster unity through
            decentralized solutions.
          </p>

          {/* Problem */}
          <h3 className={`${h3FontSizes} mb-2 text-left font-medium text-white`}>
            <FaHeart className={`mr-2 inline ${h3FontSizes} text-red-400`} />
            The Problem
          </h3>
          <p className={`${pFontSizes} mb-4 text-white`}>
            Insurance companies profit from human suffering, reducing lives to mere statistics. Their unchecked greed
            denies essential care and undermines trust.
          </p>
          <p className={`${pFontSizes} mb-4 text-white`}>
            Media platforms silence dissent, erasing voices advocating for change. We need sustainable,
            censorship-resistant ways to communicate.
          </p>

          {/* Solution */}
          <h3 className={`${h3FontSizes} mb-2 text-left font-medium text-white`}>
            <FaMedkit className={`mr-2 inline ${h3FontSizes} text-green-400`} />
            Our Solution
          </h3>
          <p className={`${pFontSizes} mb-4 text-white`}>
            By leveraging the <strong>Solana blockchain</strong>, we anchor our efforts in transparency and
            decentralization. We are the first wave of <strong>DeCare</strong>—a decentralized healthcare system.
          </p>
          <p className={`${pFontSizes} mb-4 text-white`}>
            Our near-term goal is establishing a <strong>community-governed charity wallet</strong> to fund medical
            bills and drive political action. Long-term, we aim to provide equitable healthcare access and build a
            fairer system.
          </p>

          {/* Vision */}
          <h3 className={`${h3FontSizes} mb-2 text-left font-medium text-white`}>
            <FaHandshake className={`mr-2 inline ${h3FontSizes} text-blue-400`} />
            Vision
          </h3>
          <p className={`${pFontSizes} mb-4 text-white`}>
            <strong>$LUIGI</strong> symbolizes justice, solidarity, and hope. Together, we will create a healthcare
            system defined by <strong>fairness, access, and care</strong>—not corporate profit.
          </p>
          <p className="mt-6 text-lg font-semibold text-white">
            <strong>The Flippening is upon us:</strong> $LUIGI &gt; $UHC
          </p>
        </section>

        {/* Divider */}
        <div className="my-8 h-[2px] w-full bg-gray-300"></div>

        {/* Tokenomics Section */}
        <section className="tokenomics rounded-lgpy-8 mb-16">
          <h2 className={`${h2FontSizes} mb-4 font-semibold text-white`}>Tokenomics</h2>
          <div className="flex flex-col">
            {/* Grid Item 1 & 2 (Maximum Supply and Current Supply) */}
            <div className="flex h-full w-full flex-row justify-between">
              <div>
                <p className={`${pFontSizes} mb-2 text-white`}>
                  <strong>Maximum Supply:</strong> 999,946,063.07
                </p>{' '}
                <p className={`${pFontSizes} mb-2 text-white`}>
                  <strong>Current Supply:</strong> 999,946,063.07
                </p>
                <AnimatedCircle size={300} duration={5} borderColor="green" />
              </div>
            </div>

            {/* Grid Item 9, 10, 11, 12 (List Items) */}
            <div className="col-span-4 row-span-1">
              <h3 className={`${h3FontSizes} mb-4 text-white`}>Token Metrics:</h3>
              <ul className={`${pFontSizes} list-disc space-y-2 pl-6 text-white`}>
                <li>0% tax on transactions</li>
                <li>Renounced contract ownership</li>
                <li>Community-driven (CTO)</li>
                <li>100% publicly tradable supply: No developer tokens or locked allocations.</li>
              </ul>
            </div>

            <div className="col-span-4 row-span-1">
              <h3 className={`${h3FontSizes} mb-2 text-white`}>Technology:</h3>
              <p className={`${pFontSizes} mb-2 text-white`}>
                <strong>$LUIGI</strong> is a <strong>Solana Program Library (SPL) token</strong> built on the Solana
                blockchain.
              </p>
              <p className={`${pFontSizes} text-white`}>
                The smart contract ensures secure, transparent, and efficient transactions without the need for a
                central authority.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="my-8 h-[2px] w-full bg-gray-300"></div>

        {/* Roadmap Section */}
        <section className="roadmap mb-16 rounded-lg py-8">
          <h2 className={`${h2FontSizes} mb-4 font-semibold text-white`}>Roadmap</h2>
          <h3 className={`${h3FontSizes} mb-4 text-left font-medium text-white`}>
            <FaCoins className={`mr-2 inline ${h3FontSizes} text-yellow-400`} />
            Upcoming Developments:
          </h3>
          <ol className="list-decimal space-y-4 pl-6 text-white">
            <li>
              <strong>Potential CEX Listings</strong>
              <p>
                We aim to make <strong>$LUIGI</strong> available on centralized exchanges, expanding accessibility.
              </p>
            </li>
            <li>
              <strong>Pledge Wallet</strong>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Holders can send <strong>1,000 $LUIGI</strong> to a new multisig pledge wallet to enter a draw.
                </li>
                <li>
                  A Telegram bot will be developed to automate the draw, display ticket purchases, and announce winners.
                </li>
                <li>
                  Draw happens every 24 hours:
                  <ul className="list-disc space-y-1 pl-6">
                    <li>
                      <strong>70%</strong> of collected tokens go to the winner.
                    </li>
                    <li>
                      <strong>20%</strong> is added to the pledge donation wallet.
                    </li>
                    <li>
                      <strong>10%</strong> is burned to reduce supply.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Donation Cycle Integration</strong>
              <p>
                The Pledge Wallet will become an integral part of our charity efforts to fund healthcare-related causes.
              </p>
            </li>
            <li>
              <strong>Website Enhancements</strong>
              <p>Finalizing the website with engaging visuals and animations to elevate the user experience.</p>
            </li>
            <li>
              <strong>Community Growth</strong>
              <p>
                Building a robust community of holders, reaching milestones of <strong>30,000</strong>,{' '}
                <strong>40,000</strong>, <strong>50,000</strong>, and eventually <strong>100,000</strong> holders
                on-chain.
              </p>
            </li>
          </ol>
          <p className="mt-4 text-white">
            <strong>Beyond This:</strong> No set roadmap. No promises. We evolve alongside our community, guided by its
            needs and collective goals.
          </p>
        </section>

        {/* Divider */}
        <div className="my-8 h-[2px] w-full bg-gray-300"></div>

        {/* Conclusion Section */}
        <section className="conclusion mb-16 rounded-lg  py-8">
          <h2 className={`${h2FontSizes} mb-4 font-semibold text-white`}>Conclusion</h2>
          <p className={`${pFontSizes} mb-4 text-white`}>
            <strong>$LUIGI</strong> aims to lead the way as a transformative meme coin with a clear purpose—exposing the
            injustices of the healthcare system and creating a decentralized alternative focused on fairness and access.
          </p>
          <p className={`${pFontSizes} mb-4 text-white`}>
            By anchoring its efforts on the Solana blockchain, renouncing central ownership, and prioritizing
            community-driven growth, <strong>$LUIGI</strong> fosters inclusivity, transparency, and sustainable impact.
          </p>
          <p className={`${pFontSizes} mb-4 text-white`}>
            Together, we will shine a light on a broken system and build a future driven by{' '}
            <strong>justice, solidarity, and the power of the people</strong>.
          </p>
          <p className="text-lg font-bold text-white">
            <strong>We are $LUIGI.</strong>
          </p>
        </section>
      </div>
      <div className="h-fit w-full">
        <p className="mt-4 flex items-center justify-center text-sm text-[--text-color] sm:text-lg md:text-xl lg:text-2xl">
          &copy; {new Date().getFullYear()} $LUIGI on Solana.
        </p>
      </div>
    </div>
  );
};
