import { Navbar } from './Navigation/Navbar';
// import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Socials } from '../Components/Socials';

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Socials />
    </div>
  );
};
//  Include later
//  <p className="flex items-end justify-center text-sm text-[--text-color] sm:text-lg md:text-xl lg:text-2xl">
//    &copy; {new Date().getFullYear()} $Luigi CTO on Solana.
//  </p>
