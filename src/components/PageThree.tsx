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
  const [isTaggedUnveiled, setIsTaggedUnveiled] = useState(false);

  const taggedItems = [
    { id: 1, name: 'Navy Pinstripe Cropped Blazer', tag: 'Top / Blazer (Asset 2)', img: assets.header1, price: '$480', category: 'Tailored Outerwear' },
    { id: 2, name: 'Pinstripe Asymmetric Wrap Skirt', tag: 'Skirt (Asset 3)', img: assets.header2, price: '$340', category: 'Bespoke Separates' },
    { id: 3, name: 'Structured Monogram Envelope Bag', tag: 'Luxury Handbag (Asset 4)', img: assets.header3, price: '$620', category: 'Leather Goods' },
    { id: 4, name: 'Patent Pointed Bow Pumps in Scarlet', tag: 'Pointed Heels (Asset 5)', img: assets.header4, price: '$290', category: 'Artisan Footwear' },
  ];

  return (
    <div className="w-full bg-white transition-all duration-300 shadow-2xl overflow-hidden print:shadow-none text-black">
      {/* ========================================================
          TOP SECTION: Golden Yellow Banner + Founder & Tagged Items
          ======================================================== */}
      <header className="bg-[#FBB040] pt-4 pb-6 px-3 sm:px-5 relative overflow-hidden">
        {/* Top Black Pill Badge */}
        <div className="flex justify-center mb-3">
          <div className="bg-black text-white px-4 py-1.5 rounded-full text-[9.5px] sm:text-[10.5px] font-extrabold text-center tracking-tight shadow-xs max-w-[540px]">
            Onyi developed GoodHeart's Proprietary Single-Picture-Multiple-Garment (SPMG) Technology
          </div>
        </div>

        {/* Founder & Meet Our Founder Section Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Left Column: Meet Our Founder Title, Bio & SPMG Overview */}
          <div className="md:col-span-6 flex flex-col justify-center space-y-3 py-1">
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-none">
              Meet Our<br />Founder
            </h2>
            <p className="text-xs sm:text-[13px] text-black leading-relaxed font-normal">
              In its inaugural year, Onyinye Egbueje led Goodheart in developing its proprietary <strong className="font-extrabold">Single-Picture-Multiple-Garment (SPMG)</strong> technology—revolutionizing the digital closet and resale space.
            </p>
            <p className="text-[11px] sm:text-xs text-neutral-800 leading-snug font-medium bg-white/60 p-2.5 rounded-xl border border-black/15">
              With a single full-body photo, SPMG neural segmentation automatically identifies, segments, tags, and catalogs each individual wardrobe piece into an actionable, shoppable closet asset.
            </p>

            {/* Interactive Status Indicator when unveiled */}
            {isTaggedUnveiled && (
              <div className="inline-flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-full text-[10px] font-extrabold shadow-xs self-start animate-fade-in">
                <Sparkles className="w-3.5 h-3.5 text-[#FBB040]" />
                <span>SPMG 4-Item Extraction Active</span>
              </div>
            )}
          </div>

          {/* Right Column: Founder Skyscraper Photo & Tagged Item Interactive Badge */}
          <div className="md:col-span-6">
            <div className="relative w-full aspect-4/5 rounded-[36px] border-2 border-black overflow-hidden shadow-lg bg-neutral-900 group">
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

              {/* Tagged Hotspots Pin Overlays on the founder's outfit */}
              {isTaggedUnveiled && (
                <>
                  {/* Pin 1: Blazer */}
                  <div 
                    onClick={() => setActiveHighlight(1)}
                    className="absolute top-[28%] left-[45%] -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group/pin"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-[#FA383E] opacity-75"></span>
                      <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#FA383E] text-white text-[10px] font-black border-2 border-white shadow-md">
                        1
                      </span>
                    </div>
                  </div>

                  {/* Pin 2: Skirt */}
                  <div 
                    onClick={() => setActiveHighlight(2)}
                    className="absolute top-[52%] left-[48%] -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group/pin"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-[#FA383E] opacity-75"></span>
                      <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#FA383E] text-white text-[10px] font-black border-2 border-white shadow-md">
                        2
                      </span>
                    </div>
                  </div>

                  {/* Pin 3: Bag */}
                  <div 
                    onClick={() => setActiveHighlight(3)}
                    className="absolute top-[58%] right-[18%] -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group/pin"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-[#FA383E] opacity-75"></span>
                      <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#FA383E] text-white text-[10px] font-black border-2 border-white shadow-md">
                        3
                      </span>
                    </div>
                  </div>

                  {/* Pin 4: Shoes */}
                  <div 
                    onClick={() => setActiveHighlight(4)}
                    className="absolute bottom-[16%] left-[48%] -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group/pin"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-[#FA383E] opacity-75"></span>
                      <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#FA383E] text-white text-[10px] font-black border-2 border-white shadow-md">
                        4
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* Tagged Overlay Pill Toggle Button */}
              <button 
                type="button"
                onClick={() => setIsTaggedUnveiled(!isTaggedUnveiled)}
                className={`absolute bottom-3 left-3 text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1.5 rounded-full flex items-center gap-2 border cursor-pointer shadow-lg backdrop-blur-md transition-all duration-300 z-40 ${
                  isTaggedUnveiled 
                    ? 'bg-[#FA383E] border-white scale-102 ring-2 ring-white/50' 
                    : 'bg-black/90 hover:bg-black border-white/20 hover:scale-102'
                }`}
                title="Tap to unveil 4 tagged items from the photo"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center">
                  <span className={`w-1.5 h-1.5 rounded-full ${isTaggedUnveiled ? 'bg-white' : 'bg-[#FA383E] animate-pulse'}`}></span>
                </span>
                <span>{isTaggedUnveiled ? '✓ 4 Items Unveiled (Tap to close)' : 'Tap to view 4 tagged items'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            UNVEILED 4-ITEM SPMG EXTRACTION DRAWER / BANNER
            ======================================================== */}
        {isTaggedUnveiled && (
          <div className="mt-4 pt-3 pb-1 border-t-2 border-dashed border-black/30 animate-fade-in">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5 text-xs font-black text-black uppercase tracking-tight">
                <Tag className="w-3.5 h-3.5 text-[#FA383E]" />
                <span>SPMG 1-Photo Tagged Wardrobe Items (Unveiled)</span>
              </div>
              <span className="text-[10px] font-bold text-neutral-800 bg-white/80 px-2 py-0.5 rounded-full border border-black/15">
                Extracted via SPMG Neural Vision
              </span>
            </div>

            {/* 4 Unveiled Item Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {taggedItems.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveHighlight(item.id)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  className={`bg-white rounded-xl p-2.5 border-2 border-black flex flex-col justify-between transition-all duration-200 shadow-xs cursor-pointer ${
                    activeHighlight === item.id ? 'ring-3 ring-black scale-103 bg-amber-50/70' : 'hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#FA383E] text-white text-[10px] font-black flex items-center justify-center">
                      {item.id}
                    </span>
                    <span className="text-[10px] font-extrabold text-black">
                      {item.price}
                    </span>
                  </div>

                  <div className="aspect-square w-full bg-neutral-100/70 rounded-lg p-1.5 mb-2 flex items-center justify-center overflow-hidden border border-neutral-200">
                    <img
                      src={item.img}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        // If external raw URL fails (e.g. private repo), use fallback visual
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                        }
                      }}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>

                  <div>
                    <div className="text-[9px] font-extrabold text-[#FA383E] uppercase tracking-wider truncate">
                      {item.tag}
                    </div>
                    <h5 className="text-[11px] font-black text-black leading-tight truncate mt-0.5">
                      {item.name}
                    </h5>
                    <p className="text-[9.5px] text-neutral-600 font-medium truncate mt-0.5">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
