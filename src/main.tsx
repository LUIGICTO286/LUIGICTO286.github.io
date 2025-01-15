// src/main.tsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import App from './App.tsx';
import './i18n';
import './index.css';

// Register GSAP plugin globally
gsap.registerPlugin(ScrollTrigger, TextPlugin);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
