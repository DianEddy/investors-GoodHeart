import React from 'react';
import { FashionSketches } from './FashionSketches';
import blazerImg from '../assets/images/cropped_pinstripe_blazer_1788270955333.jpg';
import redHeelsImg from '../assets/images/red_bow_heels_1788270972239.jpg';
import skirtImg from '../assets/images/pinstripe_wrap_skirt_1788270984147.jpg';
import sofaLifestyleImg from '../assets/images/lifestyle_sofa_laptop_1788271004391.jpg';

interface PageOneProps {
  onOpenPitchModal: () => void;
  onOpenSummaryModal: () => void;
}

export const PageOne: React.FC<PageOneProps> = ({
  onOpenPitchModal,
  onOpenSummaryModal,
}) => {
  return (
    <div className="w-full bg-white transition-all duration-300 shadow-2xl overflow-hidden print:shadow-none text-black">
      {/* ========================================================
          TOP YELLOW BANNER
          ======================================================== */}
      <header className="bg-[#FBB040] pt-6 pb-8 px-4 sm:px-6 text-center">
        {/* Top CTA Button */}
        <div className="mb-4 flex justify-center">
          <button
            onClick={onOpenPitchModal}
            id="top-download-pitch-deck-btn"
            className="bg-[#FA383E] hover:bg-[#e02d33] active:scale-98 transition text-white px-5 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs"
          >
            DOWNLOAD PITCH DECK
          </button>
        </div>

        {/* Product Cards Row */}
        <div className="flex justify-center items-center gap-3 sm:gap-3.5 mb-5 px-1">
          {/* Card 1: Cropped Pinstripe Blazer */}
          <div className="w-[32%] h-[135px] sm:h-[145px] rounded-[22px] border-2 border-black bg-white flex items-center justify-center p-2 shadow-xs overflow-hidden">
            <img
              src={blazerImg}
              alt="Navy Pinstripe Cropped Blazer"
              className="max-w-full max-h-full object-contain mix-blend-multiply"
            />
          </div>

          {/* Card 2: Red Bow Shoes */}
          <div className="w-[28%] h-[105px] sm:h-[115px] rounded-[22px] border-2 border-black bg-white flex items-center justify-center p-2 shadow-xs overflow-hidden">
            <img
              src={redHeelsImg}
              alt="Red Bow Pointed Heels"
              className="max-w-full max-h-full object-contain mix-blend-multiply"
            />
          </div>

          {/* Card 3: Pinstripe Wrap Skirt */}
          <div className="w-[32%] h-[135px] sm:h-[145px] rounded-[22px] border-2 border-black bg-white flex items-center justify-center p-2 shadow-xs overflow-hidden">
            <img
              src={skirtImg}
              alt="Navy Pinstripe Wrap Skirt"
              className="max-w-full max-h-full object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* Large Title */}
        <h1 className="text-5xl sm:text-[62px] font-black text-black tracking-tight leading-none mb-3">
          GOODHEART
        </h1>

        {/* Tagline */}
        <div className="text-sm sm:text-base font-bold text-black mb-2 tracking-tight">
          Redefining Wardrobe Wellness & Decentralized Fashion Tech
        </div>

        {/* Sub-description */}
        <p className="text-[11px] sm:text-xs text-black leading-relaxed max-w-[480px] mx-auto font-normal">
          Goodheart unifies AI digital closet management, circular social commerce, and a decentralized artisan network to bring personalization and trade preservation to modern fashion.
        </p>
      </header>

      {/* ========================================================
          MIDDLE WHITE CONTENT SECTION
          ======================================================== */}
      <main className="p-6 sm:p-8 bg-white">
        {/* Metrics Block with Fashion Sketches */}
        <div className="flex items-center gap-4 sm:gap-6 mb-8">
          {/* Left Sketches */}
          <div className="w-[36%] sm:w-[38%] shrink-0">
            <FashionSketches />
          </div>

          {/* Right Metrics Box (Sharp Corners) */}
          <div className="w-[64%] sm:w-[62%] border border-black p-4 sm:p-5 bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-black text-black tracking-tight mb-3">
                KEY SNAPSHOT METRICS:
              </h3>

              <div className="space-y-2.5 text-xs text-black leading-snug">
                <div>
                  <strong className="font-bold">Live Product:</strong> iOS, Android & Web App Deployed
                </div>

                <div>
                  <strong className="font-bold">Core Tech:</strong> Proprietary Single-Picture-Multiple-Garment (SPMG) AI
                </div>

                <div>
                  <strong className="font-bold">Market Opportunity:</strong> $57.5B+ Custom Apparel & Upcycling Market
                </div>
              </div>
            </div>

            <button
              onClick={onOpenSummaryModal}
              id="download-summary-btn"
              className="w-full bg-[#FA383E] hover:bg-[#e02d33] active:scale-98 transition text-white py-2.5 px-3 rounded-xl font-bold text-xs cursor-pointer shadow-xs text-center mt-4"
            >
              Download Executive Summary (PDF)
            </button>
          </div>
        </div>

        {/* Market Info Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 items-start">
          {/* Left text column */}
          <div className="text-[11px] sm:text-xs text-black leading-snug">
            <p className="mb-4">
              Mass-produced apparel accounts for 95% to 97% of global apparel consumption in a $1.5T+ industry. The result? Fast-fashion fatigue, closet bloat, and an erosion of skilled human trades like tailoring and upcycling..
            </p>

            <h4 className="font-bold text-xs sm:text-sm text-black mb-1">
              Personalization drives well-being
            </h4>

            <p>
              Wearing tailored, personalized garments measurably increases self-esteem while drastically cutting costly retail returns
            </p>
          </div>

          {/* Right stats card (Sharp Corners) */}
          <div className="border border-black p-3.5 sm:p-4 bg-white">
            <div className="text-xs sm:text-sm font-bold text-black leading-tight mb-3">
              The Fashion Market Is Changing—<br />
              Mass Apparel Is Broken
            </div>

            {/* Stat 1 */}
            <div className="flex items-center py-2.5 border-b border-black gap-2">
              <div className="text-3xl sm:text-4xl font-black text-black shrink-0 w-16 sm:w-20 tracking-tighter">
                46%
              </div>
              <div className="text-[10px] sm:text-[11px] text-black leading-tight">
                of consumers are explicitly willing to pay higher prices for personalized apparel.
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center py-2.5 gap-2">
              <div className="text-3xl sm:text-4xl font-black text-black shrink-0 w-16 sm:w-20 tracking-tighter">
                53%
              </div>
              <div className="text-[10px] sm:text-[11px] text-black leading-tight">
                of Gen Z consumers express direct interest in custom clothing.
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================
          BOTTOM YELLOW BANNER
          ======================================================== */}
      <footer className="bg-[#FBB040] pt-6 pb-6 px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-none mb-1">
          THE GOODHEART SOLUTION
        </h2>
        <h3 className="text-sm sm:text-base font-black text-black tracking-normal mb-5">
          PROPRIETARY TECHNOLOGY
        </h3>

        {/* Lifestyle Sofa Image */}
        <div className="w-full overflow-hidden shadow-md">
          <img 
            src={sofaLifestyleImg} 
            alt="Person using Goodheart technology on sofa with laptop"
            className="w-full h-auto object-cover"
          />
        </div>
      </footer>
    </div>
  );
};
