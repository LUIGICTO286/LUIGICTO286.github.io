import { Navbar } from './Navigation/Navbar';
// import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
//  Include later
//  <p className="flex items-end justify-center text-sm text-[--text-color] sm:text-lg md:text-xl lg:text-2xl">
//    &copy; {new Date().getFullYear()} $Luigi CTO on Solana.
//  </p>
