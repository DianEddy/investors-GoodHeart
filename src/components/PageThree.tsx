import React, { useState } from 'react';
import { VideoPlayerCard } from './VideoPlayerCard';
import { Check, Layers, Sparkles, Tag, Eye } from 'lucide-react';

export interface PageThreeAssets {
  header1: string; // Blazer
  header2: string; // Skirt
  header3: string; // Handbag
  header4: string; // Red heels
  founderHero: string; // Founder in Skyscraper deck
  founderHeroVideo?: string;
  video1: string; // Consumer with phone in orange sweater
  video1File?: string;
  video2: string; // Tailored blazer model
  video2File?: string;
  teamMeeting: string; // Team meeting execution
}

interface PageThreeProps {
  assets: PageThreeAssets;
  onOpenAssetManager: () => void;
}

export const PageThree: React.FC<PageThreeProps> = ({
  assets,
  onOpenAssetManager,
}) => {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);
  const [showTaggedOverlay, setShowTaggedOverlay] = useState(true);

  const taggedItems = [
    { id: 1, name: 'Navy Pinstripe Cropped Blazer', img: assets.header1, price: '$480' },
    { id: 2, name: 'Pinstripe Asymmetric Wrap Skirt', img: assets.header2, price: '$340' },
    { id: 3, name: 'Structured Monogram Envelope Bag', img: assets.header3, price: '$620' },
    { id: 4, name: 'Patent Pointed Bow Pumps in Scarlet', img: assets.header4, price: '$290' },
  ];

  return (
    <div className="w-full bg-white transition-all duration-300 shadow-2xl overflow-hidden print:shadow-none text-black">
      {/* ========================================================
          TOP SECTION: Golden Yellow Banner + Founder & Tagged Items
          ======================================================== */}
      <header className="bg-[#FBB040] pt-4 pb-6 px-4 sm:px-6 relative">
        {/* Top Black Pill Badge */}
        <div className="flex justify-center mb-4">
          <div className="bg-black text-white px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-extrabold text-center tracking-tight shadow-xs max-w-[520px]">
            Onyi developed GoodHeart's Proprietary Single-Picture-Multiple-Garment (SPMG) Technology
          </div>
        </div>

        {/* Founder & 4 Tagged Header Circles Row */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Left Column: 4 Circular Header Images & Bio */}
          <div className="sm:col-span-6 flex flex-col justify-between h-full">
            {/* Top row with 4 circular items arranged neatly */}
            <div className="relative w-full h-[180px] sm:h-[190px] mb-2">
              {/* Circle 1: Blazer */}
              <div 
                onMouseEnter={() => setActiveHighlight(1)}
                onMouseLeave={() => setActiveHighlight(null)}
                className={`absolute top-0 left-2 sm:left-4 w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 border-black bg-white p-1.5 flex items-center justify-center shadow-xs cursor-pointer transition-transform hover:scale-108 z-20 ${
                  activeHighlight === 1 ? 'ring-3 ring-black scale-108' : ''
                }`}
                title="1. Cropped Pinstripe Blazer"
              >
                <img
                  src={assets.header1}
                  alt="Cropped Pinstripe Blazer"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Circle 2: Skirt */}
              <div 
                onMouseEnter={() => setActiveHighlight(2)}
                onMouseLeave={() => setActiveHighlight(null)}
                className={`absolute top-14 left-0 sm:left-2 w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 border-black bg-white p-1.5 flex items-center justify-center shadow-xs cursor-pointer transition-transform hover:scale-108 z-10 ${
                  activeHighlight === 2 ? 'ring-3 ring-black scale-108' : ''
                }`}
                title="2. Pinstripe Wrap Skirt"
              >
                <img
                  src={assets.header2}
                  alt="Pinstripe Wrap Skirt"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Circle 3: Bag */}
              <div 
                onMouseEnter={() => setActiveHighlight(3)}
                onMouseLeave={() => setActiveHighlight(null)}
                className={`absolute bottom-0 left-12 sm:left-14 w-18 h-18 sm:w-20 sm:h-20 rounded-full border-2 border-black bg-white p-1.5 flex items-center justify-center shadow-xs cursor-pointer transition-transform hover:scale-108 z-20 ${
                  activeHighlight === 3 ? 'ring-3 ring-black scale-108' : ''
                }`}
                title="3. Luxury Bag"
              >
                <img
                  src={assets.header3}
                  alt="Luxury Envelope Handbag"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Circle 4: Red Heels */}
              <div 
                onMouseEnter={() => setActiveHighlight(4)}
                onMouseLeave={() => setActiveHighlight(null)}
                className={`absolute bottom-0 right-2 sm:right-4 w-18 h-18 sm:w-20 sm:h-20 rounded-full border-2 border-black bg-white p-1.5 flex items-center justify-center shadow-xs cursor-pointer transition-transform hover:scale-108 z-20 ${
                  activeHighlight === 4 ? 'ring-3 ring-black scale-108' : ''
                }`}
                title="4. Red Bow Heels"
              >
                <img
                  src={assets.header4}
                  alt="Red Bow Pointed Heels"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
            </div>

            {/* Meet Our Founder Text */}
            <div className="px-1 text-left">
              <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-none mb-2">
                Meet Our<br />Founder
              </h2>
              <p className="text-[11px] sm:text-xs text-black leading-snug font-normal">
                In its inaugural year, Onyinye Egbueje led Goodheart in developing its proprietary Single-Picture-Multiple-Garment (SPMG) technology—revolutionizing the digital closet and resale space.
              </p>
            </div>
          </div>

          {/* Right Column: Founder Skyscraper Photo & Tagged Item Interactive Badge */}
          <div className="sm:col-span-6">
            <div className="relative w-full aspect-4/5 rounded-[32px] border-2 border-black overflow-hidden shadow-lg bg-neutral-900 group">
              {assets.founderHeroVideo ? (
                <video
                  src={assets.founderHeroVideo}
                  poster={assets.founderHero}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={assets.founderHero}
                  alt="Founder Onyinye Egbueje in skyscraper observation deck overlooking NYC skyline"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              )}

              {/* Tagged Overlay Pill */}
              <div 
                onClick={() => setShowTaggedOverlay(!showTaggedOverlay)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/85 hover:bg-black text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/20 cursor-pointer shadow-md backdrop-blur-xs transition whitespace-nowrap"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#FA383E] animate-pulse"></span>
                <span>Tap to view 4 tagged items</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================
          MIDDLE SECTION: 3 Pillars & Feature Comparison Matrix
          ======================================================== */}
      <main className="p-4 sm:p-7 bg-white space-y-10">
        {/* Sub-Section 1: Consumer-Focused Technology & 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
          {/* Left: Video 1 / Capsule Container (Young man in orange sweater) */}
          <div className="sm:col-span-5 flex justify-center">
            <div className="w-full max-w-[240px] sm:max-w-full">
              <VideoPlayerCard
                id="page3-video-1"
                defaultPoster={assets.video1}
                videoUrl={assets.video1File}
                alt="Consumer holding smartphone in orange sweater on green grass"
                roundedClass="rounded-[36px]"
                badgeText="Video 1: Consumer SPMG"
              />
            </div>
          </div>

          {/* Right: 3 Interconnected Pillars */}
          <div className="sm:col-span-7 space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight mb-1">
                Consumer-Focused Technology Supporting Wardrobe Wellness
              </h3>
              <p className="text-[11px] sm:text-xs text-black font-normal leading-snug">
                Goodheart solves the friction of wardrobe management and bespoke fashion through three interconnected pillars:
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {/* Pillar 1 */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-neutral-300">
                <div className="text-3xl sm:text-4xl font-black text-black leading-none shrink-0 w-8">
                  1
                </div>
                <div className="text-xs sm:text-sm font-black text-black leading-tight">
                  Instant Digital Closet (SPMG Technology)
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-neutral-300">
                <div className="text-3xl sm:text-4xl font-black text-black leading-none shrink-0 w-8">
                  2
                </div>
                <div className="text-xs sm:text-sm font-black text-black leading-tight">
                  Integrated Circular Marketplace
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-3.5">
                <div className="text-3xl sm:text-4xl font-black text-black leading-none shrink-0 w-8">
                  3
                </div>
                <div className="text-xs sm:text-sm font-black text-black leading-tight">
                  Decentralized "Alterations Manufacturing"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Section 2: Feature Matrix Table & Video 2 (Tailored blazer model) */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center pt-3 border-t border-neutral-200">
          {/* Left 7 Columns: Feature Comparison Table */}
          <div className="sm:col-span-7 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-2.5 pr-2 font-black text-black text-xs uppercase tracking-tight w-[28%]">
                    Feature
                  </th>
                  <th className="py-2.5 px-2 font-black text-black text-xs uppercase tracking-tight text-center w-[24%]">
                    Goodheart App
                  </th>
                  <th className="py-2.5 px-2 font-black text-black text-xs uppercase tracking-tight text-center w-[24%]">
                    Legacy Closet Apps
                  </th>
                  <th className="py-2.5 pl-2 font-black text-black text-xs uppercase tracking-tight text-center w-[24%]">
                    Standard Resale Apps
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {/* Row 1 */}
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 pr-2 font-bold text-black text-[11px] sm:text-xs leading-tight">
                    1-Photo OOTD Auto-Sorting
                  </td>
                  <td className="py-3 px-2 text-center font-black text-emerald-700 text-xs">
                    YES
                  </td>
                  <td className="py-3 px-2 text-center text-neutral-700 text-[10px] sm:text-[11px] leading-tight">
                    NO (Manual flat-lays)
                  </td>
                  <td className="py-3 pl-2 text-center text-neutral-700 text-[10px] sm:text-[11px] leading-tight">
                    NO (Manual item photos)
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 pr-2 font-bold text-black text-[11px] sm:text-xs leading-tight">
                    Direct Wardrobe-to-Marketplace
                  </td>
                  <td className="py-3 px-2 text-center font-black text-emerald-700 text-xs">
                    YES
                  </td>
                  <td className="py-3 px-2 text-center text-neutral-600 font-bold text-xs">
                    NO
                  </td>
                  <td className="py-3 pl-2 text-center text-neutral-700 text-[10px] sm:text-[11px] leading-tight">
                    YES (Isolated listing)
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 pr-2 font-bold text-black text-[11px] sm:text-xs leading-tight">
                    Native Artisan Communication
                  </td>
                  <td className="py-3 px-2 text-center font-black text-emerald-700 text-xs">
                    YES
                  </td>
                  <td className="py-3 px-2 text-center text-neutral-600 font-bold text-xs">
                    NO
                  </td>
                  <td className="py-3 pl-2 text-center text-neutral-600 font-bold text-xs">
                    NO
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 pr-2 font-bold text-black text-[11px] sm:text-xs leading-tight">
                    Permissioned Wardrobe Peeks
                  </td>
                  <td className="py-3 px-2 text-center font-black text-emerald-700 text-xs">
                    YES
                  </td>
                  <td className="py-3 px-2 text-center text-neutral-600 font-bold text-xs">
                    NO
                  </td>
                  <td className="py-3 pl-2 text-center text-neutral-600 font-bold text-xs">
                    NO
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right 5 Columns: Video 2 (Tailored double-breasted blazer) */}
          <div className="sm:col-span-5 flex justify-center">
            <div className="w-full max-w-[240px] sm:max-w-full">
              <VideoPlayerCard
                id="page3-video-2"
                defaultPoster={assets.video2}
                videoUrl={assets.video2File}
                alt="Man in tailored double-breasted blazer and trousers"
                roundedClass="rounded-[36px]"
                badgeText="Video 2: Alterations Engine"
              />
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================
          DISCIPLINED EXECUTION & PRODUCT VALIDATION BANNER
          ======================================================== */}
      <section className="relative w-full overflow-hidden bg-neutral-900 text-white min-h-[220px] flex items-center justify-center px-6 py-12 text-center">
        <img
          src={assets.teamMeeting}
          alt="Team collaborating in meeting room"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative z-10 max-w-lg mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Disciplined Execution & Product Validation
          </h3>
          <p className="text-xs sm:text-sm text-neutral-200 leading-snug font-medium">
            Under the leadership of Founder Onyinye Egbueje, Goodheart executed its Year 1 roadmap with maximum capital efficiency:
          </p>
        </div>
      </section>

      {/* ========================================================
          BOTTOM SECTION: Golden Yellow Banner with Year 1 Milestones
          ======================================================== */}
      <footer className="bg-[#FBB040] p-6 sm:p-8">
        <div className="border border-black p-5 sm:p-7 bg-[#FBB040]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight leading-none mb-5 uppercase text-left">
            YEAR 1 MILESTONES & TRACTION
          </h2>

          <ul className="space-y-3.5 text-xs sm:text-[13px] text-black leading-snug">
            <li className="flex items-start gap-2">
              <span className="font-black text-black text-sm leading-none">•</span>
              <div>
                <strong className="font-black uppercase">BETA VALIDATION:</strong> ONBOARDED 27 ORGANIC BETA USERS GENERATING EARLY SUBSCRIPTION REVENUE DURING SOFT LAUNCH.
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="font-black text-black text-sm leading-none">•</span>
              <div>
                <strong className="font-black uppercase">CORE TECH BUILT:</strong> VALIDATED AND DEPLOYED PROPRIETARY SPMG COMPUTER VISION TECHNOLOGY.
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="font-black text-black text-sm leading-none">•</span>
              <div>
                <strong className="font-black uppercase">PRODUCT DEVELOPMENT:</strong> 95% OF YEAR 1 AI & PRODUCT DEVELOPMENT GOALS COMPLETED.
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="font-black text-black text-sm leading-none">•</span>
              <div>
                <strong className="font-black uppercase">LIVE DEPLOYMENTS:</strong> SUCCESSFULLY LAUNCHED WEB APP AND PUBLISHED NATIVE APPS TO APPLE APP STORE & GOOGLE PLAY.
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
