import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  variant?: 'dark' | 'light';
}

export function QuetaxEmblem({ className = '', size = 36 }: { className?: string; size?: number | string }) {
  const rawId = useId();
  // Sanitize id for SVG element IDs (remove colons)
  const id = `qtx_${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`aspect-square shrink-0 block ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-label="QuetaX Emblem"
    >
      <defs>
        {/* Navy Ring Primary Gradient */}
        <linearGradient id={`${id}_qRing`} x1="30" y1="20" x2="170" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E4885" />
          <stop offset="45%" stopColor="#103362" />
          <stop offset="100%" stopColor="#081E3D" />
        </linearGradient>

        {/* Gold Growth Arrow Gradient */}
        <linearGradient id={`${id}_goldArrow`} x1="60" y1="130" x2="140" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D98E18" />
          <stop offset="40%" stopColor="#EAA72E" />
          <stop offset="80%" stopColor="#F5C04A" />
          <stop offset="100%" stopColor="#FFE082" />
        </linearGradient>

        {/* Bar 1 (Short) Gradient */}
        <linearGradient id={`${id}_bar1`} x1="70" y1="110" x2="84" y2="148" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A437C" />
          <stop offset="100%" stopColor="#0B2344" />
        </linearGradient>

        {/* Bar 2 (Medium) Gradient */}
        <linearGradient id={`${id}_bar2`} x1="90" y1="90" x2="106" y2="152" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1F4E8E" />
          <stop offset="100%" stopColor="#0E2D56" />
        </linearGradient>

        {/* Bar 3 (Tall) Gradient */}
        <linearGradient id={`${id}_bar3`} x1="110" y1="70" x2="128" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#255DA9" />
          <stop offset="100%" stopColor="#123766" />
        </linearGradient>

        {/* Q Tail Gradient */}
        <linearGradient id={`${id}_tail`} x1="95" y1="115" x2="180" y2="175" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#225396" />
          <stop offset="50%" stopColor="#103566" />
          <stop offset="100%" stopColor="#081E3D" />
        </linearGradient>

        {/* Subtle shadow filter for Arrow */}
        <filter id={`${id}_arrowShadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="1.5" stdDeviation="1.5" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Main Circular Ring Body of the 'Q' */}
      <path
        d="M 100 18 C 54.7 18 18 54.7 18 100 C 18 145.3 54.7 182 100 182 C 120.4 182 139 174.5 153.4 162 C 147.5 155.2 140.2 149.6 131.8 145.8 C 122.4 151.2 111.6 154.3 100 154.3 C 70 154.3 45.7 130 45.7 100 C 45.7 70 70 45.7 100 45.7 C 130 45.7 154.3 70 154.3 100 C 154.3 108.2 152.5 115.9 149.2 122.9 C 158 126.2 165.8 131.2 172.5 137.4 C 178.6 126.4 182 113.6 182 100 C 182 54.7 145.3 18 100 18 Z"
        fill={`url(#${id}_qRing)`}
      />

      {/* 3 Internal Growth Bar Columns */}
      {/* Column 1 (Left) */}
      <g>
        <path
          d="M 72 114 L 85 114 L 85 145 C 80.6 143.2 76.3 140.7 72 137.4 Z"
          fill={`url(#${id}_bar1)`}
        />
        <rect x="72" y="114" width="13" height="3" fill="#2E62A8" rx="0.5" />
      </g>

      {/* Column 2 (Center) */}
      <g>
        <path
          d="M 91 94 L 105 94 L 105 150 C 100.3 150.6 95.6 150.4 91 149.4 Z"
          fill={`url(#${id}_bar2)`}
        />
        <rect x="91" y="94" width="14" height="3.5" fill="#3B77C9" rx="0.5" />
      </g>

      {/* Column 3 (Right) */}
      <g>
        <path
          d="M 111 74 L 126 74 L 126 146 C 120.9 148.3 116 149.6 111 150.2 Z"
          fill={`url(#${id}_bar3)`}
        />
        <rect x="111" y="74" width="15" height="4" fill="#4B8BE3" rx="0.5" />
      </g>

      {/* Rising Trend Gold Arrow Line */}
      <g filter={`url(#${id}_arrowShadow)`}>
        <path
          d="M 68 127 L 91 100 L 102 109 L 130 75"
          stroke={`url(#${id}_goldArrow)`}
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="124,70 140,67 135,83 130,77"
          fill={`url(#${id}_goldArrow)`}
        />
      </g>

      {/* Dynamic Q Swoosh Tail flowing bottom-right */}
      <g>
        <path
          d="M 102 136 C 117 136 132 144 147 154 C 160 163 172 169 184 170 C 174 165 164 155 153 143 C 142 130 128 122 114 120 L 102 136 Z"
          fill={`url(#${id}_tail)`}
        />
        <path
          d="M 114 120 C 128 122 142 130 153 143 C 164 155 174 165 184 170 C 170 169 156 161 143 150 C 130 139 116 130 102 127 Z"
          fill="#1C4B88"
        />
        <path
          d="M 147 154 C 160 163 172 169 184 170 C 175 168 165 160 154 149"
          stroke="#EBF3FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.9"
        />
      </g>
    </svg>
  );
}

export function QuetaxLogo({
  className = '',
  size = 32,
  showText = true,
  variant = 'dark',
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="shrink-0 flex items-center justify-center">
        <QuetaxEmblem size={size} />
      </div>

      {showText && (
        <div className="flex flex-col select-none leading-none">
          <div className="flex items-baseline font-black tracking-tight text-lg">
            <span className={variant === 'light' ? 'text-white' : 'text-[#0B2240]'}>
              <span className="relative">
                Q
                <span className="absolute bottom-0 left-0 w-2.5 h-0.5 bg-[#EAA72E] rounded-full" />
              </span>
              ueta
            </span>
            <span className="text-[#EAA72E] ml-[0.5px]">X</span>
          </div>
          <span
            className={`text-[7px] font-bold tracking-[0.2em] uppercase mt-0.5 ${
              variant === 'light' ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Powering Value
          </span>
        </div>
      )}
    </div>
  );
}

export default QuetaxEmblem;
