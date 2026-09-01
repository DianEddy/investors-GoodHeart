export interface PitchSlide {
  id: number;
  title: string;
  subtitle: string;
  highlights: string[];
}

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
