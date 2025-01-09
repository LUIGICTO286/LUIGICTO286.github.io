// src/Components/Socials.tsx
// import { FaTiktok, FaInstagram, FaEnvelope, FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { FaTiktok, FaEnvelope, FaTelegramPlane } from 'react-icons/fa';
import { XIcon } from './Icons';

export const Socials = () => {
  const socialsClass = "text-white text-4xl hover:text-red-400 hover:scale-110 transition duration-300";

  return (
    <div className="">
      <div className="flex justify-center space-x-4 ">
        <a
          href="https://www.tiktok.com/@luigi_coin_cto"
          target="_blank"
          rel="noopener noreferrer"
          className= {socialsClass}
        >
          <FaTiktok />
        </a>
        {/*
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className= {socialsClass}
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className= {socialsClass}
        >
          <FaDiscord />
        </a>   
        */}
        <a
          href="https://t.me/luigiportal2024"
          target="_blank"
          rel="noopener noreferrer"
          className= {socialsClass}
        >
          <FaTelegramPlane />
        </a>               

        <a
          href="https://x.com/luigi_sol_cto"
          target="_blank"
          rel="noopener noreferrer"
          className= {socialsClass}
        >
          <XIcon
            width={36}
            height={36}
            className= {socialsClass}
          /> 
        </a>    

        <a
          href="mailto:luigicto286@gmail.com"
          className= {socialsClass}
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};
