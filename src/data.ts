import { GatedDocument } from './types';

export interface PitchSlide {
  id: number;
  title: string;
  subtitle: string;
  highlights: string[];
}

export const GITHUB_DOCS_REPO_URL = "https://github.com/DianEddy/investors-GoodHeart/tree/main/000.%20PUBLIC%20DOCS";

export const PITCH_DECK_SLIDES: PitchSlide[] = [
  {
    id: 1,
    title: "The Goodheart Vision",
    subtitle: "Redefining Wardrobe Wellness & Decentralized Fashion Tech",
    highlights: [
      "AI digital closet management with Single-Picture-Multiple-Garment (SPMG) AI",
      "Circular social commerce for circularity and garment longevity",
      "Decentralized artisan network connecting skilled tailors directly with consumers"
    ]
  },
  {
    id: 2,
    title: "Market Problem & Opportunity",
    subtitle: "$1.5T+ Global Apparel Industry in Crisis",
    highlights: [
      "95% - 97% mass-produced fast-fashion leading to closet bloat and return waste",
      "Erosion of artisan craft and local tailoring heritage",
      "46% of consumers explicitly willing to pay premium prices for custom fit",
      "53% of Gen Z actively seeking personalized and custom apparel"
    ]
  },
  {
    id: 3,
    title: "Proprietary Technology",
    subtitle: "Single-Picture-Multiple-Garment (SPMG) AI",
    highlights: [
      "Instant wardrobe digitisation from everyday lifestyle photos",
      "Intelligent fit calibration and virtual tailor matchings",
      "Automated upcycling workflows connecting garments to verified artisans"
    ]
  },
  {
    id: 4,
    title: "Business Model & Traction",
    subtitle: "$57.5B+ Custom Apparel & Upcycling Market",
    highlights: [
      "Live mobile applications deployed on iOS, Android & Web",
      "Artisan marketplace transaction fees & premium subscription tiers",
      "B2B sustainability analytics for fashion brands and circular retailers"
    ]
  }
];

export const GATED_DOCUMENTS: GatedDocument[] = [
  // ==========================================
  // REAL REPO DOCUMENTS (000. PUBLIC DOCS)
  // ==========================================
  {
    id: 'doc-005-primary-pitch-deck',
    title: '005. Goodheart 2026 Primary Pitch Deck',
    subtitle: 'Official 2026 Primary Pitch Deck Presentation',
    tier: 'open-access',
    category: 'Strategic',
    description: 'The official 2026 Primary Pitch Deck for Goodheart Technologies Inc., detailing wardrobe wellness, SPMG AI computer vision, market mechanics, and business model.',
    pages: 18,
    updatedDate: '2026',
    badge: 'Official Repository PDF',
    fileFormat: 'PDF Document (22.3 MB)',
    downloadFileName: '005. Goodheart 2026 Primary Pitch Deck.pdf',
    fileSize: '22.3 MB',
    fileType: 'pdf',
    localUrl: '/docs/005. Goodheart 2026 Primary Pitch Deck.pdf',
    githubUrl: 'https://raw.githubusercontent.com/DianEddy/investors-GoodHeart/main/000.%20PUBLIC%20DOCS/005.%20Goodheart%202026%20Primary%20Pitch%20Deck.pdf',
    githubBlobUrl: 'https://github.com/DianEddy/investors-GoodHeart/blob/main/000.%20PUBLIC%20DOCS/005.%20Goodheart%202026%20Primary%20Pitch%20Deck.pdf',
    summaryPoints: [
      'The Goodheart Vision: AI wardrobe management + decentralized artisan guild.',
      'Market Breakdown: $1.5T global apparel crisis & 46% custom-fit willingness.',
      'Proprietary Single-Picture-Multiple-Garment (SPMG) computer vision pipeline.',
      'Unit monetization across B2C subscriptions, marketplace take-rates, and B2B brand packages.'
    ],
    fullReportText: `================================================================================
GOODHEART - 2026 PRIMARY PITCH DECK (GITHUB REPOSITORY RELEASE)
REDEFINING WARDROBE WELLNESS & DECENTRALIZED FASHION TECH
FILE: 005. Goodheart 2026 Primary Pitch Deck.pdf (22.3 MB)
SOURCE: github.com/DianEddy/investors-GoodHeart/tree/main/000. PUBLIC DOCS
================================================================================

SLIDE 1: THE GOODHEART VISION
- AI digital closet management with Single-Picture-Multiple-Garment (SPMG) AI.
- Circular social commerce driving garment longevity and re-commerce.
- Decentralized artisan network connecting skilled tailors directly with consumers.

SLIDE 2: MARKET PROBLEM & OPPORTUNITY
- Mass-produced apparel accounts for 95% to 97% of consumption in a $1.5T+ industry.
- 46% of consumers are explicitly willing to pay higher prices for personalized apparel.
- 53% of Gen Z consumers express direct interest in custom clothing.

SLIDE 3: PROPRIETARY TECHNOLOGY
- Single-Picture-Multiple-Garment (SPMG) AI engine for sub-second outfit digitization.
- Automatically isolates and standardizes tops, bottoms, shoes, bags, and outerwear from casual lifestyle photos.
- Standardized measurement translation for artisan match-making.

SLIDE 4: BUSINESS MODEL & TRACTION
- $57.5B+ custom apparel and upcycling addressable market.
- Live applications deployed across iOS, Android, and Web.
- Diversified revenue: B2C subscriptions ($9.99/mo), 12% marketplace take-rate, and B2B Brand Collaboration Tiers ($20k-$50k).

CONTACT FOUNDER:
Founder & CEO: Dian Eddy
Email: pitch@goodheart.fashion | edidirect@edimassive.com
Web: https://www.goodheartapp.com
`
  },
  {
    id: 'doc-001-about-goodheart',
    title: '001. About Goodheart',
    subtitle: 'Brand & Product Overview Poster',
    tier: 'open-access',
    category: 'Strategic',
    description: 'High-resolution infographic and visual overview highlighting Goodheart\'s mission, wardrobe wellness pillars, and digital closet technology.',
    pages: 1,
    updatedDate: '2026',
    badge: 'High-Res Asset',
    fileFormat: 'PNG Image (1.9 MB)',
    downloadFileName: '001. About Goodheart.png',
    fileSize: '1.9 MB',
    fileType: 'image',
    localUrl: '/docs/001. About Goodheart.png',
    githubUrl: 'https://raw.githubusercontent.com/DianEddy/investors-GoodHeart/main/000.%20PUBLIC%20DOCS/001.%20About%20Goodheart.png',
    githubBlobUrl: 'https://github.com/DianEddy/investors-GoodHeart/blob/main/000.%20PUBLIC%20DOCS/001.%20About%20Goodheart.png',
    summaryPoints: [
      'Comprehensive infographic covering Wardrobe Wellness ecosystem.',
      'High-resolution visual detailing the SPMG AI user journey.',
      'Open to all investors, partners, and media.'
    ],
    fullReportText: `================================================================================
001. ABOUT GOODHEART (OFFICIAL REPOSITORY DOCUMENT)
SOURCE: github.com/DianEddy/investors-GoodHeart/tree/main/000. PUBLIC DOCS
FILE: 001. About Goodheart.png (1.9 MB)
================================================================================

Goodheart is building the operating system for personalized fashion. By merging AI-powered wardrobe classification (SPMG AI) with an on-demand decentralized network of master tailors and circular upcyclers, Goodheart solves the retail return crisis while scaling sustainable personal wellness.

KEY PILLARS:
1. AI Digital Closet Management: One-click wardrobe scanning from everyday lifestyle photos.
2. Decentralized Artisan Guild: Connects consumers directly with vetted tailors for custom alterations, repairs, and bespoke recreations.
3. Circular Re-Commerce: Extends garment lifecycle through peer trade-in and upcycle marketplaces.
`
  },
  {
    id: 'doc-002-investors',
    title: '002. Goodheart for Investors',
    subtitle: 'Executive Investor Briefing Graphic',
    tier: 'open-access',
    category: 'Financial',
    description: 'Visual investor one-pager covering addressable market sizing ($57.5B), revenue drivers, unit economics, and seed round allocation.',
    pages: 1,
    updatedDate: '2026',
    badge: 'Executive Briefing',
    fileFormat: 'PNG Image (3.2 MB)',
    downloadFileName: '002. Goodheart for Investors.png',
    fileSize: '3.2 MB',
    fileType: 'image',
    localUrl: '/docs/002. Goodheart for Investors.png',
    githubUrl: 'https://raw.githubusercontent.com/DianEddy/investors-GoodHeart/main/000.%20PUBLIC%20DOCS/002.%20Goodheart%20for%20Investors.png',
    githubBlobUrl: 'https://github.com/DianEddy/investors-GoodHeart/blob/main/000.%20PUBLIC%20DOCS/002.%20Goodheart%20for%20Investors.png',
    summaryPoints: [
      'Visual breakdown of market TAM/SAM/SOM.',
      'High-level monetization streams and target Seed terms.',
      'Instant download directly from repository.'
    ],
    fullReportText: `================================================================================
002. GOODHEART FOR INVESTORS (OFFICIAL REPOSITORY DOCUMENT)
SOURCE: github.com/DianEddy/investors-GoodHeart/tree/main/000. PUBLIC DOCS
FILE: 002. Goodheart for Investors.png (3.2 MB)
================================================================================

INVESTOR SNAPSHOT:
- Seed Financing Target: $1.5M (SAFE / Preferred)
- Valuation Cap: $12.0M
- Key Moat: Single-Picture-Multiple-Garment (SPMG) AI with pending patent filings.
- Expansion Vectors: B2C Subscriptions, 12% Tailor Marketplace Take-Rate, B2B Fashion House Partnerships.
`
  },
  {
    id: 'doc-003-brands',
    title: '003. Goodheart for Brands',
    subtitle: 'B2B Brand Partnership & Enterprise Tier Sheet',
    tier: 'open-access',
    category: 'Commercial',
    description: 'Overview sheet for fashion brand collaborations, sponsored wardrobe upcycling challenges, deadstock rework drops, and creator coupon programs.',
    pages: 1,
    updatedDate: '2026',
    badge: 'Brand Partnership Sheet',
    fileFormat: 'PNG Image (2.9 MB)',
    downloadFileName: '003. Goodheart for Brands .png',
    fileSize: '2.9 MB',
    fileType: 'image',
    localUrl: '/docs/003. Goodheart for Brands .png',
    githubUrl: 'https://raw.githubusercontent.com/DianEddy/investors-GoodHeart/main/000.%20PUBLIC%20DOCS/003.%20Goodheart%20for%20Brands%20.png',
    githubBlobUrl: 'https://github.com/DianEddy/investors-GoodHeart/blob/main/000.%20PUBLIC%20DOCS/003.%20Goodheart%20for%20Brands%20.png',
    summaryPoints: [
      'Pioneer ($20k), Catalyst ($35k), and Horizon ($50k) sponsorship tiers.',
      'Integration opportunities for sustainable retail brands.',
      'Direct contact routing for fashion brand partnerships.'
    ],
    fullReportText: `================================================================================
003. GOODHEART FOR BRANDS (OFFICIAL REPOSITORY DOCUMENT)
SOURCE: github.com/DianEddy/investors-GoodHeart/tree/main/000. PUBLIC DOCS
FILE: 003. Goodheart for Brands .png (2.9 MB)
================================================================================

COLLABORATION TIERS:
- Pioneer Tier ($20,000): In-app challenge, digital closet placements, $5k creator pool.
- Catalyst Tier ($35,000): Customization portal, deadstock drop events, $10k creator pool.
- Horizon Tier ($50,000): Enterprise AI silhouette fine-tuning, global co-campaigns.
`
  },
  {
    id: 'doc-004-year-1-review',
    title: '004. Goodheart Year 1 in Review',
    subtitle: 'Annual Progress, Community Growth & Milestones',
    tier: 'open-access',
    category: 'Strategic',
    description: 'Official Year 1 operational review report detailing app deployment across platforms, artisan onboarding, and initial user feedback.',
    pages: 8,
    updatedDate: '2026',
    badge: 'Annual Review PDF',
    fileFormat: 'PDF Document (677 KB)',
    downloadFileName: '004. Goodheart Year 1 in Review .pdf',
    fileSize: '677 KB',
    fileType: 'pdf',
    localUrl: '/docs/004. Goodheart Year 1 in Review .pdf',
    githubUrl: 'https://raw.githubusercontent.com/DianEddy/investors-GoodHeart/main/000.%20PUBLIC%20DOCS/004.%20Goodheart%20Year%201%20in%20Review%20.pdf',
    githubBlobUrl: 'https://github.com/DianEddy/investors-GoodHeart/blob/main/000.%20PUBLIC%20DOCS/004.%20Goodheart%20Year%201%20in%20Review%20.pdf',
    summaryPoints: [
      'Recap of Year 1 product developments and launch milestones.',
      'Community engagement metrics across early tailor networks.',
      'Full PDF available for instant direct download.'
    ],
    fullReportText: `================================================================================
004. GOODHEART YEAR 1 IN REVIEW (OFFICIAL REPOSITORY DOCUMENT)
SOURCE: github.com/DianEddy/investors-GoodHeart/tree/main/000. PUBLIC DOCS
FILE: 004. Goodheart Year 1 in Review .pdf (677 KB)
================================================================================

YEAR 1 HIGHLIGHTS:
- Deployment of Goodheart on iOS, Android, and Web.
- Beta launch of the Single-Picture-Multiple-Garment (SPMG) AI engine.
- Onboarding of inaugural cohort of independent master tailors.
- Initial brand pilot discussions with sustainable fashion labels.
`
  },
  {
    id: 'doc-006-short-form-plan',
    title: '006. Goodheart Short-Form Business Plan',
    subtitle: 'Executive Business Plan & Strategic Roadmap Archive',
    tier: 'open-access',
    category: 'Strategic',
    description: 'Complete short-form business plan bundle containing executive summaries, strategic roadmap, market analysis, and operating plan.',
    pages: 14,
    updatedDate: '2026',
    badge: 'Business Plan Package',
    fileFormat: 'ZIP Archive (2.0 MB)',
    downloadFileName: '006. Goodheart Short-Form Business Plan.zip',
    fileSize: '2.0 MB',
    fileType: 'zip',
    localUrl: '/docs/006. Goodheart Short-Form Business Plan.zip',
    githubUrl: 'https://raw.githubusercontent.com/DianEddy/investors-GoodHeart/main/000.%20PUBLIC%20DOCS/006.%20Goodheart%20Short-Form%20Business%20Plan.zip',
    githubBlobUrl: 'https://github.com/DianEddy/investors-GoodHeart/blob/main/000.%20PUBLIC%20DOCS/006.%20Goodheart%20Short-Form%20Business%20Plan.zip',
    summaryPoints: [
      'Comprehensive short-form business plan archive.',
      'Market opportunity analysis, go-to-market funnel, and growth roadmap.',
      'Compressed ZIP format with all supporting documentation.'
    ],
    fullReportText: `================================================================================
006. GOODHEART SHORT-FORM BUSINESS PLAN (OFFICIAL REPOSITORY DOCUMENT)
SOURCE: github.com/DianEddy/investors-GoodHeart/tree/main/000. PUBLIC DOCS
FILE: 006. Goodheart Short-Form Business Plan.zip (2.0 MB)
================================================================================

This package contains the condensed business plan for Goodheart Technologies Inc., outlining operational strategy, regulatory framework, marketing vectors, and organizational milestones.
`
  },
  {
    id: 'doc-007-archived-pitch-decks',
    title: '007. Goodheart Archived Pitch Decks 2026',
    subtitle: 'Historical Deck Iterations & Evolution Log',
    tier: 'open-access',
    category: 'Strategic',
    description: 'Compilation of Goodheart\'s pitch deck iterations showing the evolutionary journey of the company from early prototype concepts to the current Seed stage.',
    pages: 12,
    updatedDate: '2026',
    badge: 'Archived Reference',
    fileFormat: 'PDF Document (1.8 MB)',
    downloadFileName: '007. Goodheart Archived Pitch Decks 2026.pdf',
    fileSize: '1.8 MB',
    fileType: 'pdf',
    localUrl: '/docs/007. Goodheart Archived Pitch Decks 2026.pdf',
    githubUrl: 'https://raw.githubusercontent.com/DianEddy/investors-GoodHeart/main/000.%20PUBLIC%20DOCS/007.%20Goodheart%20Archived%20Pitch%20Decks%202026.pdf',
    githubBlobUrl: 'https://github.com/DianEddy/investors-GoodHeart/blob/main/000.%20PUBLIC%20DOCS/007.%20Goodheart%20Archived%20Pitch%20Decks%202026.pdf',
    summaryPoints: [
      'Complete historical record of deck versions and thesis development.',
      'Helpful for investors tracking founder velocity and execution pace.'
    ],
    fullReportText: `================================================================================
007. GOODHEART ARCHIVED PITCH DECKS 2026 (OFFICIAL REPOSITORY DOCUMENT)
SOURCE: github.com/DianEddy/investors-GoodHeart/tree/main/000. PUBLIC DOCS
FILE: 007. Goodheart Archived Pitch Decks 2026.pdf (1.8 MB)
================================================================================

Archived presentations and narrative evolution for Goodheart Technologies Inc.
`
  },
  {
    id: 'doc-008-2027-projections',
    title: '008. Goodheart 2027 Projections',
    subtitle: 'Forward Growth Modeling & Expansion Package',
    tier: 'investor-gated',
    category: 'Financial',
    description: 'Detailed financial modeling archive for 2027 projections, cohort retention forecasts, GMV targets, and international market expansion budgets.',
    pages: 10,
    updatedDate: '2026/2027',
    badge: 'Financial Package',
    fileFormat: 'ZIP Archive (1.6 MB)',
    downloadFileName: '008. Goodheart 2027 Projections.zip',
    fileSize: '1.6 MB',
    fileType: 'zip',
    localUrl: '/docs/008. Goodheart 2027 Projections.zip',
    githubUrl: 'https://raw.githubusercontent.com/DianEddy/investors-GoodHeart/main/000.%20PUBLIC%20DOCS/008.%20Goodheart%202027%20Projections.zip',
    githubBlobUrl: 'https://github.com/DianEddy/investors-GoodHeart/blob/main/000.%20PUBLIC%20DOCS/008.%20Goodheart%202027%20Projections.zip',
    summaryPoints: [
      'Multi-year sensitivity analysis and revenue build-up spreadsheets.',
      'CapEx and SPMG cloud inference scale cost structures.',
      'Downloadable ZIP archive with models.'
    ],
    fullReportText: `================================================================================
008. GOODHEART 2027 PROJECTIONS (OFFICIAL REPOSITORY DOCUMENT)
SOURCE: github.com/DianEddy/investors-GoodHeart/tree/main/000. PUBLIC DOCS
FILE: 008. Goodheart 2027 Projections.zip (1.6 MB)
================================================================================

Forward-looking financial statements, cohort retention models, and growth projections for 2027.
`
  },
  {
    id: 'doc-009-archived-sf-plan',
    title: '009. Goodheart Archived S:F Business Plan 2026',
    subtitle: 'Strategic Foundation & Architecture Reference',
    tier: 'open-access',
    category: 'Strategic',
    description: 'Strategic Foundation (S:F) business plan archive detailing the original product vision, artisan network design, and sustainability charter.',
    pages: 9,
    updatedDate: '2026',
    badge: 'Strategic Reference',
    fileFormat: 'PDF Document (896 KB)',
    downloadFileName: '009. Goodheart Archived S:F Business Plan 2026.pdf',
    fileSize: '896 KB',
    fileType: 'pdf',
    localUrl: '/docs/009. Goodheart Archived S:F Business Plan 2026.pdf',
    githubUrl: 'https://raw.githubusercontent.com/DianEddy/investors-GoodHeart/main/000.%20PUBLIC%20DOCS/009.%20Goodheart%20Archived%20S%3AF%20Business%20Plan%202026.pdf',
    githubBlobUrl: 'https://github.com/DianEddy/investors-GoodHeart/blob/main/000.%20PUBLIC%20DOCS/009.%20Goodheart%20Archived%20S%3AF%20Business%20Plan%202026.pdf',
    summaryPoints: [
      'Foundational strategic planning document.',
      'Artisan guild economic incentives and quality assurance framework.'
    ],
    fullReportText: `================================================================================
009. GOODHEART ARCHIVED S:F BUSINESS PLAN 2026 (OFFICIAL REPOSITORY DOCUMENT)
SOURCE: github.com/DianEddy/investors-GoodHeart/tree/main/000. PUBLIC DOCS
FILE: 009. Goodheart Archived S:F Business Plan 2026.pdf (896 KB)
================================================================================

Foundational blueprint for Goodheart's wardrobe wellness ecosystem and artisan guild.
`
  }
];
