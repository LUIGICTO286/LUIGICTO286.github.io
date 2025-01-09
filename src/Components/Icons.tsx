import React from 'react';

type IconProps = {
  width?: number;
  height?: number;
  stroke?: string;
  className?: string;
};

export const HamburgerIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  stroke = 'currentColor',
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  stroke = 'currentColor',
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 18L18 6M6 6l12 12"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DownArrowIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  stroke = 'currentColor',
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 330 330"
    xmlns="http://www.w3.org/2000/svg"
    fill={stroke}
    className={className}
  >
    <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  stroke = 'currentColor',
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    fill={stroke}
    className={className}
  >
    <path d="M60 120C26.9 120 0 93.1 0 60S26.9 0 60 0s60 26.9 60 60-26.9 60-60 60zM60 5C29.7 5 5 29.7 5 60s24.7 55 55 55 55-24.7 55-55S90.3 5 60 5z" />
    <path d="M60 120c-19.3 0-34.4-26.4-34.4-60S40.7 0 60 0s34.4 26.4 34.4 60-15.1 60-34.4 60zM60 5C43.8 5 30.5 29.7 30.5 60s13.2 55 29.5 55 29.5-24.7 29.5-55S76.2 5 60 5z" />
    <path d="M12.2 25.6h95.6v5H12.2zM12.2 89.5h95.6v5H12.2zM2.5 57.5h115v5H2.5z" />
    <path d="M57.5 2.5h5v115h-5z" />
  </svg>
);

export const SolanaIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  stroke = 'currentColor',
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 397.7 311.7"
    xmlns="http://www.w3.org/2000/svg"
    fill={stroke}
    className={className}
  >
    <defs>
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="360.8791"
        y1="351.4553"
        x2="141.213"
        y2="-69.2936"
        gradientTransform="matrix(1 0 0 -1 0 314)"
      >
        <stop offset="0" style={{ stopColor: '#00FFA3' }} />
        <stop offset="1" style={{ stopColor: '#DC1FFF' }} />
      </linearGradient>
      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1="264.8291"
        y1="401.6014"
        x2="45.163"
        y2="-19.1475"
        gradientTransform="matrix(1 0 0 -1 0 314)"
      >
        <stop offset="0" style={{ stopColor: '#00FFA3' }} />
        <stop offset="1" style={{ stopColor: '#DC1FFF' }} />
      </linearGradient>
      <linearGradient
        id="SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1="312.5484"
        y1="376.688"
        x2="92.8822"
        y2="-44.061"
        gradientTransform="matrix(1 0 0 -1 0 314)"
      >
        <stop offset="0" style={{ stopColor: '#00FFA3' }} />
        <stop offset="1" style={{ stopColor: '#DC1FFF' }} />
      </linearGradient>
    </defs>
    <path
      d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
    c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
      fill="url(#SVGID_1_)"
    />
    <path
      d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
    c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
      fill="url(#SVGID_2_)"
    />
    <path
      d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4
    c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
      fill="url(#SVGID_3_)"
    />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({
  width = 36,
  height = 36,
  stroke = 'currentColor',
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 300 271"
    xmlns="http://www.w3.org/2000/svg"
    fill={stroke}
    className={className}
  >
    <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/>
  </svg>
);
