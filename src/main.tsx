//import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin globally
gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById('root')!).render(
    <App />
);
