export interface CaseStudy {
  slug: string;
  index: string;
  title: string;
  stage: string;
  years: string;
  category: string;
  blurb: string;
  /** marks the AI-native case that gets the console accent treatment */
  aiNative?: boolean;
}

export const cases: CaseStudy[] = [
  {
    slug: 'ruralvia',
    index: '01',
    title: 'Ruralvía',
    stage: 'Product design',
    years: '2018–2019',
    category: 'Product design',
    blurb: 'Mobile-first fintech. Product design, end to end: vision, flows and the differentiator.',
  },
  {
    slug: 'flame',
    index: '02',
    title: 'Flame',
    stage: 'Systems at scale',
    years: '2020–2024',
    category: 'Design systems & design ops',
    blurb: "Santander's global design system across 11 markets. From designing components to designing the conditions for a system to scale.",
  },
  {
    slug: 'erneszt',
    index: '03',
    title: 'Erneszt',
    stage: 'AI from scratch',
    years: '2026',
    category: 'AI-native product',
    blurb: 'An AI-native product, built from zero. The thesis, made real.',
    aiNative: true,
  },
];
