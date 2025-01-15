import React, { useState, useEffect } from 'react';
import { LogoFlip } from './LogoFlip.tsx';
import { useLocation } from 'react-router-dom'; // Import useLocation if using React Router

export const Loading: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Get the current location (React Router)

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0); // Scroll to top whenever the component is mounted or location changes
    }, 1500); // Adjust timeout as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, [location]);

  if (!loading) {
    return null;
  }

  return (
    <div className="animate-fade-in fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[--background-color]">
      <LogoFlip />
      <h1 className="mt-4 text-[2rem] text-[--text-color] sm:text-[2rem] lg:text-[1.5rem] xl:text-[2rem]">$LUIGI</h1>
    </div>
  );
};
