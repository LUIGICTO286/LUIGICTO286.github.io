import { Socials } from './Socials';
import { Link }    from 'react-router-dom';

const navLinks = [
  { to: '/'          , label: 'Home' }      ,
  { to: '/Roadmap'   , label: 'Roadmap' }   ,
  { to: '/how-to-buy', label: 'How to buy' },
  { to: '/Manifesto' , label: 'Manifesto' } ,
];

const classH3   = "prose sm:prose-sm lg:prose-lg xl:prose-xl text-[--secondary-color] mb-4";
const classLink = "hover:text-red-400 transition text-[--secondary-color] underline-none";

export const Footer = () => {
  return (
    <footer
      className="w-full min-h-fit py-16 "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Social Media Section */}
        <Socials />

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 justify-items-center prose sm:prose-sm lg:prose-lg xl:prose-xl p-4">
          {/* Pages Section */}
          <div>
            <h3
              className={ classH3 }
            >
              Pages
            </h3>
            <ul className="">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={ classLink }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3
              className={ classH3 }
            >
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className={ classLink }
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/impressum"
                  className={ classLink }
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-sm" style={{ color: 'var(--primary-color)' }}>
            &copy; {new Date().getFullYear()} Luigi Mangione CTO on Solana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
