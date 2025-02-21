import { FaCoins, FaHeart, FaMedkit, FaBullhorn } from 'react-icons/fa';

export const Whitepaper = () => {
  const textStyle = 'text-white leading-relaxed'; // General text style
  const paragraphStyles = `${textStyle} text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]`; // Paragraph styles
  const heading1Styles = `${textStyle} text-[1.5rem] sm:text-[2rem] lg:text-[3rem] xl:text-[4rem] font-bold`;
  const heading2Styles = `${textStyle} text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] font-semibold`;
  const heading3Styles = `${textStyle} text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-medium`;

  return (
    <div className="mt-[25vh] flex flex-col items-center justify-center px-4 text-left font-sans sm:px-8 lg:px-20">
      <div className="whitepaper w-full max-w-5xl">
        {/* Introduction Section */}
        <section className="mb-16 rounded-lg py-8">
          <h1 className={`${heading1Styles} mb-6 text-center`}>$LUIGI Whitepaper</h1>

          {/* Purpose */}
          <h2 className={`${heading2Styles} mb-4`}>
            <FaBullhorn className="mr-2 inline text-yellow-400" />
            Purpose
          </h2>
          <p className={`${paragraphStyles} mb-4`}>
            <strong>$LUIGI</strong> represents outrage transformed into action. Our mission is to challenge a healthcare
            system that serves the few at the expense of the many. We demand transparency and fairness.
          </p>
          <p className={`${paragraphStyles} mb-4`}>
            Built on principles of justice and reform, we aim to expose harmful practices and foster unity through
            decentralized solutions.
          </p>

          {/* Problem */}
          <h2 className={`${heading2Styles} mb-4`}>
            <FaHeart className="mr-2 inline text-red-400" />
            The Problem
          </h2>
          <p className={`${paragraphStyles} mb-4`}>
            Insurance companies profit from human suffering, reducing lives to mere statistics. Their unchecked greed
            denies essential care and undermines trust.
          </p>
          <p className={`${paragraphStyles} mb-4`}>
            Media platforms silence dissent, erasing voices advocating for change. We need sustainable,
            censorship-resistant ways to communicate.
          </p>

          {/* Solution */}
          <h2 className={`${heading2Styles} mb-4`}>
            <FaMedkit className="mr-2 inline text-green-400" />
            Our Solution
          </h2>
          <p className={`${paragraphStyles} mb-4`}>
            By leveraging the <strong>Solana blockchain</strong>, we anchor our efforts in transparency and
            decentralization. We are the first wave of <strong>DeCare</strong>—a decentralized healthcare system.
          </p>
          <p className={`${paragraphStyles} mb-4`}>
            Our near-term goal is establishing a <strong>community-governed charity wallet</strong> to fund medical
            bills and drive political action. Long-term, we aim to provide equitable healthcare access and build a
            fairer system.
          </p>
        </section>

        {/* Tokenomics Section */}
        <section className="mb-16 py-8">
          <h2 className={`${heading2Styles} mb-6`}>Tokenomics</h2>

          {/* Token Metrics */}
          <h3 className={`${heading3Styles} mb-4`}>Token Metrics</h3>
          <p className={`${paragraphStyles} mb-4`}>
            <strong>Maximum Supply:</strong> 999,946,063.07
          </p>
          <p className={`${paragraphStyles} mb-4`}>
            <strong>Current Supply:</strong> 999,946,063.07
          </p>
          <ul className={`${paragraphStyles} list-disc space-y-2 pl-6`}>
            <li>0% tax on transactions</li>
            <li>Renounced contract ownership</li>
            <li>Community-driven (CTO)</li>
            <li>100% publicly tradable supply: No developer tokens or locked allocations</li>
          </ul>

          {/* Technology */}
          <h3 className={`${heading3Styles} mb-4 mt-8`}>Technology</h3>
          <p className={`${paragraphStyles} mb-4`}>
            <strong>$LUIGI</strong> is a <strong>Solana Program Library (SPL) token</strong> built on the Solana
            blockchain.
          </p>
          <p className={`${paragraphStyles}`}>
            The smart contract ensures secure, transparent, and efficient transactions without the need for a central
            authority.
          </p>
        </section>

        {/* Roadmap Section */}
        <section className="mb-16 py-8">
          <h2 className={`${heading2Styles} mb-6`}>Roadmap</h2>
          <h3 className={`${heading3Styles} mb-4`}>
            <FaCoins className="mr-2 inline text-yellow-400" />
            Upcoming Developments
          </h3>
          <ul className={`${paragraphStyles} list-decimal space-y-4 pl-6`}>
            <li>
              <strong>Potential CEX Listings:</strong> We aim to make $LUIGI available on centralized exchanges,
              expanding accessibility.
            </li>
            <li>
              <strong>Pledge Wallet:</strong> Holders can send 1,000 $LUIGI to a new multisig pledge wallet to enter a
              draw. A Telegram bot will automate draws, display purchases, and announce winners.
            </li>
            <li>
              <strong>Donation Cycle Integration:</strong> The Pledge Wallet will fund healthcare-related causes.
            </li>
            <li>
              <strong>Website Enhancements:</strong> Engaging visuals and animations for a better user experience.
            </li>
            <li>
              <strong>Community Growth:</strong> Building a robust community, reaching milestones of 100,000 holders.
            </li>
          </ul>
        </section>

        {/* Conclusion Section */}
        <section className="mb-16 py-8">
          <h2 className={`${heading2Styles} mb-6`}>Conclusion</h2>
          <p className={`${paragraphStyles} mb-4`}>
            <strong>$LUIGI</strong> aims to lead the way as a transformative token with a clear purpose—exposing the
            injustices of the healthcare system and creating a decentralized alternative focused on fairness and access.
          </p>
          <p className={`${paragraphStyles} mb-4`}>
            Together, we will shine a light on a broken system and build a future driven by justice, solidarity, and the
            power of the people.
          </p>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className={`${textStyle} text-sm sm:text-lg`}>© {new Date().getFullYear()} $LUIGI on Solana.</p>
      </div>
    </div>
  );
};
