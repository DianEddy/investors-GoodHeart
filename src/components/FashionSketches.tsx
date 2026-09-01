import React from 'react';

export const FashionSketches: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      {/* Tilted Pants Sketch */}
      <svg
        className="absolute -top-6 -left-4 sm:left-0 w-36 sm:w-44 md:w-52 h-auto text-black"
        viewBox="0 0 160 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-28deg)' }}
      >
        {/* Waistband */}
        <path
          d="M 30 20 L 130 20 L 126 38 L 34 38 Z"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Belt Loops */}
        <line x1="48" y1="20" x2="48" y2="38" stroke="#000000" strokeWidth="3" />
        <line x1="80" y1="20" x2="80" y2="38" stroke="#000000" strokeWidth="3" />
        <line x1="112" y1="20" x2="112" y2="38" stroke="#000000" strokeWidth="3" />

        {/* Fly Line & Button */}
        <path d="M 80 38 L 80 75 Q 80 82 72 85" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Pocket Lines */}
        <path d="M 34 45 Q 52 50 48 70" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <path d="M 126 45 Q 108 50 112 70" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

        {/* Outer and Inseam Legs */}
        <path
          d="M 34 38 L 10 205 L 56 205 L 77 86 L 98 205 L 146 205 L 126 38"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Creases */}
        <line x1="33" y1="78" x2="28" y2="195" stroke="#000000" strokeWidth="2.5" strokeDasharray="6 4" />
        <line x1="120" y1="78" x2="124" y2="195" stroke="#000000" strokeWidth="2.5" strokeDasharray="6 4" />

        {/* Cuffs */}
        <line x1="10" y1="195" x2="56" y2="195" stroke="#000000" strokeWidth="3" />
        <line x1="98" y1="195" x2="146" y2="195" stroke="#000000" strokeWidth="3" />
      </svg>

      {/* Tilted T-Shirt Sketch */}
      <svg
        className="absolute bottom-2 left-6 sm:left-14 w-32 sm:w-40 md:w-44 h-auto text-black"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-15deg)' }}
      >
        {/* Collar */}
        <path
          d="M 52 25 C 64 38 96 38 108 25"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 52 25 C 64 32 96 32 108 25"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Shoulders, Sleeves & Body Outline */}
        <path
          d="M 52 25 L 20 42 L 35 75 L 48 66 L 48 140 L 112 140 L 112 66 L 125 75 L 140 42 L 108 25"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Sleeve Seams */}
        <path d="M 48 66 L 36 40" stroke="#000000" strokeWidth="2.5" />
        <path d="M 112 66 L 124 40" stroke="#000000" strokeWidth="2.5" />

        {/* Bottom Hem */}
        <line x1="48" y1="132" x2="112" y2="132" stroke="#000000" strokeWidth="2" />
      </svg>
    </div>
  );
};
