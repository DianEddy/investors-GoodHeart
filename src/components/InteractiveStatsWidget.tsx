import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Percent, 
  ArrowUpRight, 
  BarChart3, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  PieChart, 
  Layers,
  ChevronRight,
  Sliders
} from 'lucide-react';

export type StatCategory = 'market-growth' | 'consumer-spend' | 'conversion-sales' | 'margin-roi';
export type AudienceMode = 'investors' | 'brands';

interface StatMetric {
  heroNumber: string;
  subheading: string;
  description: string;
  bullets: string[];
  investorFocus: string;
  brandFocus: string;
  trendBadge: string;
  benchmark: string;
  progressPercent: number;
}

const statsData: Record<StatCategory, StatMetric[]> = {
  'market-growth': [
    {
      heroNumber: '$112B',
      subheading: 'Global Custom & Bespoke Apparel Market',
      description: 'The global market for bespoke, tailored, and customizable fashion is experiencing exponential growth, driven by digital closet ecosystems and decentralized production.',
      bullets: [
        '$112 Billion total addressable market globally by 2028',
        'Direct shift from mass-produced fast fashion to on-demand circular craft',
        'High margin capture across localized artisan hubs'
      ],
      investorFocus: 'Massive TAM expansion fueled by next-gen computer vision and decentralized alteration networks.',
      brandFocus: 'Unlocks high-ticket bespoke product lines without carrying pre-manufactured sizing inventory risk.',
      trendBadge: 'TAM Growth',
      benchmark: 'vs $68B in 2022',
      progressPercent: 88,
    },
    {
      heroNumber: '9.8%–11.7%',
      subheading: 'Compound Annual Growth Rate (CAGR)',
      description: 'Sustained double-digit market growth outperforming traditional luxury retail and mass apparel segments.',
      bullets: [
        '9.8% to 11.7% forecast CAGR across key North American & European markets',
        'Accelerated adoption in AI-assisted wardrobe management platforms',
        'High recurring lifetime value (LTV) across digital closet subscribers'
      ],
      investorFocus: 'Predictable recurring SaaS and marketplace GMV take-rate expansion over multi-year horizon.',
      brandFocus: 'Fastest-growing consumer segment in modern lifestyle commerce with premium customer acquisition.',
      trendBadge: 'Compound Growth',
      benchmark: '2.4x Standard Retail CAGR',
      progressPercent: 76,
    },
    {
      heroNumber: '72%',
      subheading: 'Gen Z & Millennial Demand for Tailored & Unique Fits',
      description: 'Younger demographic cohorts overwhelmingly prioritize individualized fit, sustainability, and personal wardrobe expression over disposable mass retail.',
      bullets: [
        '72% of Gen Z and Millennial buyers actively seek customized fit solutions',
        'Strong alignment with circular sustainability and garment longevity',
        'Natural inclination to showcase wardrobe collections on digital social platforms'
      ],
      investorFocus: 'Secures high organic user retention and low customer acquisition costs (CAC) via peer network effects.',
      brandFocus: 'Connects directly with the most influential fashion-spending cohort with authentic brand resonance.',
      trendBadge: 'Demographic Demand',
      benchmark: '72% Demographic Affinity',
      progressPercent: 72,
    },
  ],
  'consumer-spend': [
    {
      heroNumber: '20%',
      subheading: 'Price Premium Willingness for Personalized Fit',
      description: 'Consumers demonstrate consistent willingness to pay an upfront premium for garments tailored specifically to their verified measurements.',
      bullets: [
        '20% average price premium accepted by consumers for bespoke alterations and perfect fit',
        'Eliminates discounting and clearance markdown margin erosion',
        'Higher perceived luxury value and emotional ownership of garments'
      ],
      investorFocus: 'Supports superior unit economics and high gross profit margins on both software and transaction fees.',
      brandFocus: 'Enables higher top-line pricing power without customer price resistance.',
      trendBadge: 'Pricing Power',
      benchmark: '+20% vs Off-the-Rack Pricing',
      progressPercent: 65,
    },
    {
      heroNumber: '67%',
      subheading: 'Consumers Value Custom & Alteration Options',
      description: 'Two-thirds of surveyed fashion buyers state that customization and accessible tailoring directly influence their purchase decision.',
      bullets: [
        '67% consider custom sizing options a primary factor when choosing between competing brands',
        'Drives immediate repeat purchases when fit accuracy is validated',
        'Transforms one-time purchasers into high-frequency loyal brand advocates'
      ],
      investorFocus: 'Sticky user retention and high Net Promoter Scores (NPS) across the SPMG user ecosystem.',
      brandFocus: 'Key competitive differentiator against fast-fashion conglomerates.',
      trendBadge: 'Purchase Driver',
      benchmark: '2 out of 3 Consumers',
      progressPercent: 67,
    },
    {
      heroNumber: '+10%–16%',
      subheading: 'Average Order Value (AOV) Lift',
      description: 'Integrating instant digital closet bundling and artisan alterations creates substantial increases in basket size at checkout.',
      bullets: [
        '+10% to +16% consistent lift in total basket value across digital wardrobe integrations',
        'Multi-item styling recommendations drive cross-category add-ons (blazers, skirts, footwear, bags)',
        'Seamless integration with circular trade-in wallet credits'
      ],
      investorFocus: 'Higher revenue density per transaction, maximizing monetization of the platform GMV flow.',
      brandFocus: 'Immediate bottom-line revenue boost on every customer checkout session.',
      trendBadge: 'AOV Expansion',
      benchmark: '+13% Median Basket Lift',
      progressPercent: 70,
    },
  ],
  'conversion-sales': [
    {
      heroNumber: '+50%',
      subheading: 'Conversion Rate Boost via SPMG AI Fitting',
      description: 'Single-Picture-Multiple-Garment recognition and instant virtual styling drastically reduce customer hesitation at point of purchase.',
      bullets: [
        '+50% increase in checkout conversion rates compared to standard static e-commerce product pages',
        'Removes sizing anxiety and uncertainty before purchase completion',
        'Frictionless 1-photo wardrobe auto-sorting connects items into complete outfits'
      ],
      investorFocus: 'Drives high funnel throughput and market-leading checkout velocity across partner platforms.',
      brandFocus: 'Doubles the efficiency of existing paid traffic campaigns and influencer collaborations.',
      trendBadge: 'Conversion Lift',
      benchmark: '1.5x Baseline E-Commerce',
      progressPercent: 85,
    },
    {
      heroNumber: '59%',
      subheading: 'Immediate Purchase Intent for Styled Ensembles',
      description: 'Nearly 60% of consumers make an immediate purchase decision when presented with complete multi-garment outfit pairings rather than single isolated SKUs.',
      bullets: [
        '59% of users convert when viewing full styled outfits (blazer + skirt + accessories)',
        'Integrated wardrobe visualization gives confidence in how new items fit existing closets',
        'Native artisan communication builds trust and removes final checkout hesitation'
      ],
      investorFocus: 'Enables platform lock-in as the primary operating system for daily wardrobe decisions.',
      brandFocus: 'Drives full-outfit bundle sales instead of discounted single clearance items.',
      trendBadge: 'Purchase Intent',
      benchmark: '59% Multi-Garment Intent',
      progressPercent: 59,
    },
    {
      heroNumber: '70%',
      subheading: 'Customer Preference Over Standard Stock Items',
      description: '70% of fashion enthusiasts state they explicitly prefer tailored or customized pieces over generic mass-market stock items.',
      bullets: [
        '70% long-term preference for garments connected to artisan alteration networks',
        'Promotes sustained garment longevity and circular resale liquidity',
        'High organic word-of-mouth referral and social media tagging'
      ],
      investorFocus: 'Solidifies defensible competitive moat against legacy resale apps (Poshmark, Depop) and flat-lay closet apps.',
      brandFocus: 'Elevates brand perception from commodity retailer to bespoke wardrobe partner.',
      trendBadge: 'Consumer Preference',
      benchmark: '70% Long-term Affinity',
      progressPercent: 70,
    },
  ],
  'margin-roi': [
    {
      heroNumber: '5x–8x',
      subheading: 'Marketing Return on Investment (ROI)',
      description: 'Campaigns powered by Goodheart community upcycle challenges and SPMG tagging generate industry-leading returns on brand marketing capital.',
      bullets: [
        '5x to 8x verified marketing ROI on co-branded creator and community campaigns',
        'High organic viral coefficient through user-shared closet snaps and OOTD tags',
        'Substantially lower effective CAC compared to saturated paid social ads'
      ],
      investorFocus: 'Demonstrates scalable go-to-market model with lean marketing spend and virality.',
      brandFocus: 'Guarantees measurable commercial return on partnership packages ($15k–$75k tiers).',
      trendBadge: 'Marketing ROI',
      benchmark: '6.5x Average Return',
      progressPercent: 92,
    },
    {
      heroNumber: '>20%',
      subheading: 'Return Rate Reduction via Tailored Fit',
      description: 'Poor fit is the #1 cause of e-commerce returns in apparel (costing brands up to 35% of revenue). Goodheart solves this at the root.',
      bullets: [
        'Over 20% direct reduction in e-commerce return rates through artisan alteration linkage',
        'Saves brands millions in reverse logistics, repackaging, and inventory depreciation',
        'Protects customer relationship by delivering a tailored fit on the first delivery'
      ],
      investorFocus: 'Unlocks massive enterprise value by solving the multi-billion dollar apparel return crisis.',
      brandFocus: 'Directly salvages bottom-line operating margins and eliminates dead-stock write-offs.',
      trendBadge: 'Return Reduction',
      benchmark: '>20% Margin Protection',
      progressPercent: 82,
    },
    {
      heroNumber: '48%',
      subheading: 'Willingness to Wait for Custom Artisan Production',
      description: 'Nearly half of modern fashion buyers are happy to accept reasonable production lead times in exchange for bespoke quality and bespoke alterations.',
      bullets: [
        '48% of customers willingly wait 7–14 days for bespoke fitting and artisan craftsmanship',
        'Enables on-demand, zero-inventory manufacturing models for partner fashion houses',
        'Significantly reduces working capital requirements and seasonal overproduction'
      ],
      investorFocus: 'Paves the way for agile, high-cashflow just-in-time decentralized apparel manufacturing.',
      brandFocus: 'Eliminates upfront inventory forecasting risk and storage overhead.',
      trendBadge: 'Supply Agility',
      benchmark: '48% Patient Demand',
      progressPercent: 48,
    },
  ],
};

const categoryTabs: { id: StatCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'market-growth', label: 'Market Growth', icon: TrendingUp },
  { id: 'consumer-spend', label: 'Consumer Spend', icon: DollarSign },
  { id: 'conversion-sales', label: 'Conversion & Sales', icon: ShoppingBag },
  { id: 'margin-roi', label: 'Margin & ROI', icon: Percent },
];

interface InteractiveStatsWidgetProps {
  initialAudience?: AudienceMode;
  onSelectTier?: (tierName: string) => void;
}

export const InteractiveStatsWidget: React.FC<InteractiveStatsWidgetProps> = ({
  initialAudience = 'investors',
  onSelectTier,
}) => {
  const [audienceMode, setAudienceMode] = useState<AudienceMode>(initialAudience);
  const [activeCategory, setActiveCategory] = useState<StatCategory>('market-growth');
  const [expandedCardIdx, setExpandedCardIdx] = useState<number | null>(0);

  const currentMetrics = statsData[activeCategory];

  return (
    <section className="w-full bg-white rounded-2xl border-2 border-black overflow-hidden shadow-lg transition-all duration-300">
      {/* ========================================================
          1. HEADER SECTION & AUDIENCE TOGGLE MODE
          ======================================================== */}
      <div className="bg-[#FBB040] p-5 sm:p-6 border-b-2 border-black">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Title and Subtitle */}
          <div>
            <div className="inline-flex items-center gap-1.5 bg-black text-white px-3 py-1 rounded-full text-[11px] font-extrabold tracking-tight mb-2 shadow-xs">
              <BarChart3 className="w-3.5 h-3.5 text-[#FBB040]" />
              <span>INTERACTIVE DATA & IMPACT SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-tight">
              Market Potential & Commercial ROI
            </h2>
            <p className="text-xs sm:text-[13px] text-neutral-900 font-medium max-w-xl">
              Validated industry data and empirical unit economics proving the power of SPMG digital closets, bespoke tailoring, and circular fashion.
            </p>
          </div>

          {/* Toggle Mode Button Group */}
          <div className="shrink-0 bg-black/10 p-1 rounded-xl border border-black/20 flex items-center gap-1">
            <button
              onClick={() => setAudienceMode('investors')}
              className={`px-3.5 py-2 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 ${
                audienceMode === 'investors'
                  ? 'bg-black text-white shadow-xs scale-102'
                  : 'text-neutral-900 hover:text-black hover:bg-black/5'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>For Investors</span>
            </button>

            <button
              onClick={() => setAudienceMode('brands')}
              className={`px-3.5 py-2 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 ${
                audienceMode === 'brands'
                  ? 'bg-[#FA383E] text-white shadow-xs scale-102'
                  : 'text-neutral-900 hover:text-black hover:bg-black/5'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>For Brand Partners</span>
            </button>
          </div>
        </div>

        {/* Mode Focus Indicator Pill */}
        <div className="mt-3.5 pt-3 border-t border-black/15 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-black uppercase text-[11px] tracking-wider">Active Lens:</span>
            <span className="font-semibold text-neutral-900 bg-white/70 px-2.5 py-0.5 rounded-full border border-black/15">
              {audienceMode === 'investors'
                ? '📈 Market Size, CAGR, Valuation Multipliers & Scalability'
                : '🎯 Brand Conversion Lift, Average Order Value & 5x-8x ROI'}
            </span>
          </div>
          <span className="hidden md:inline text-[11px] font-bold text-neutral-800">
            Click cards to explore in-depth metrics
          </span>
        </div>
      </div>

      {/* ========================================================
          2. FOUR INTERACTIVE CATEGORY TABS
          ======================================================== */}
      <div className="bg-neutral-100 p-2 sm:p-3 border-b border-neutral-300 grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {categoryTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                setExpandedCardIdx(0);
              }}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-[13px] flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? 'bg-white text-black border border-black shadow-xs font-black'
                  : 'bg-transparent text-neutral-600 hover:text-black hover:bg-neutral-200/70 border border-transparent'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-black' : 'text-neutral-500'}`} />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================
          3. MAIN CONTENT DISPLAY: HERO NUMBER CARDS
          ======================================================== */}
      <div className="p-4 sm:p-6 bg-white space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentMetrics.map((metric, idx) => {
            const isExpanded = expandedCardIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setExpandedCardIdx(idx)}
                className={`relative rounded-xl p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'border-2 border-black bg-neutral-50/90 shadow-md ring-1 ring-black/10'
                    : 'border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50/50'
                }`}
              >
                {/* Top Badge & Benchmark */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800">
                    {metric.trendBadge}
                  </span>
                  <span className="text-[11px] font-bold text-neutral-500">
                    {metric.benchmark}
                  </span>
                </div>

                {/* Large Hero Number */}
                <div className="mb-2">
                  <div className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-none">
                    {metric.heroNumber}
                  </div>
                  <h4 className="text-sm font-black text-neutral-900 tracking-tight leading-snug mt-1.5">
                    {metric.subheading}
                  </h4>
                </div>

                {/* Progress bar visual */}
                <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden mb-3">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      audienceMode === 'investors' ? 'bg-black' : 'bg-[#FA383E]'
                    }`}
                    style={{ width: `${metric.progressPercent}%` }}
                  />
                </div>

                {/* Brief Subheading & Description */}
                <p className="text-xs text-neutral-700 leading-snug mb-3">
                  {metric.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-1.5 mb-4 text-[11px] text-neutral-800">
                  {metric.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-black font-black text-xs leading-none">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Dynamic Audience Focus Box */}
                <div className={`p-3 rounded-lg border text-xs leading-snug mt-auto ${
                  audienceMode === 'investors'
                    ? 'bg-amber-50/80 border-amber-300 text-amber-950'
                    : 'bg-red-50/80 border-red-200 text-red-950'
                }`}>
                  <div className="font-extrabold text-[10px] uppercase tracking-wider mb-0.5 flex items-center gap-1">
                    {audienceMode === 'investors' ? (
                      <>
                        <TrendingUp className="w-3 h-3 text-amber-700" />
                        <span>Investor Takeaway</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3 h-3 text-red-600" />
                        <span>Brand Partner Advantage</span>
                      </>
                    )}
                  </div>
                  <p className="font-semibold text-[11px]">
                    {audienceMode === 'investors' ? metric.investorFocus : metric.brandFocus}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive Callout Bar */}
        <div className="mt-4 p-4 rounded-xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-extrabold text-[#FBB040] uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Strategic Partnership & Investment Window</span>
            </div>
            <div className="text-xs text-neutral-300 font-normal">
              {audienceMode === 'investors'
                ? 'Join Goodheart’s seed round to capture value across decentralized fashion computer vision.'
                : 'Pilot a Community Upcycle Challenge or integrate SPMG tagging into your brand catalog.'}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onSelectTier && (
              <button
                onClick={() => onSelectTier(audienceMode === 'investors' ? 'INVESTOR SEED ALLOCATION' : 'TIER 2: CATALYST PACKAGE ($35,000)')}
                className="bg-[#FA383E] hover:bg-[#e02d33] text-white px-4 py-2 rounded-lg font-black text-xs uppercase tracking-wider transition shadow-sm cursor-pointer whitespace-nowrap"
              >
                {audienceMode === 'investors' ? 'Request Term Sheet' : 'Explore Packages'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
