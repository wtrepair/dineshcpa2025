export type DemoHotspot = {
  href: string;
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

export type DemoExpansion = {
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

export type DemoPageData = {
  id: string;
  slug: string;
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  hotspots: DemoHotspot[];
  expansions: DemoExpansion[];
  heroIntro?: DemoExpansion;
  contentStartTop?: number;
};

const headerHotspots: DemoHotspot[] = [
  { href: "/demo1", label: "Demo home", left: 0.6, top: 0.1, width: 8.5, height: 1.4 },
  { href: "/demo1/about", label: "About", left: 45.5, top: 0.15, width: 3.4, height: 1.1 },
  { href: "/demo1/faqs", label: "FAQs", left: 49.2, top: 0.15, width: 2.7, height: 1.1 },
  { href: "/demo1/personal", label: "Personal", left: 52.3, top: 0.15, width: 4.2, height: 1.1 },
  { href: "/demo1/corporate", label: "Corporate", left: 56.8, top: 0.15, width: 4.9, height: 1.1 },
  { href: "/demo1/insights", label: "Insights", left: 62.2, top: 0.15, width: 3.8, height: 1.1 },
  { href: "/demo1/contact", label: "Contact", left: 66.5, top: 0.15, width: 3.9, height: 1.1 },
  { href: "/demo1", label: "Search", left: 73.2, top: 0.1, width: 18.1, height: 1.25 },
  { href: "/demo1/contact", label: "Sign In", left: 92.2, top: 0.1, width: 5.5, height: 1.25 },
];

const footerHotspots: DemoHotspot[] = [
  { href: "/demo1/contact", label: "Book free 10-year review", left: 11.3, top: 90.2, width: 15.9, height: 1.35 },
  { href: "/demo1/contact", label: "Schedule a consultation", left: 11.3, top: 92.0, width: 15.9, height: 1.35 },
  { href: "/demo1", label: "Footer home", left: 35.8, top: 91.9, width: 4.2, height: 1.05 },
  { href: "/demo1/about", label: "Footer about", left: 35.8, top: 93.4, width: 4.2, height: 1.05 },
  { href: "/demo1/contact", label: "Footer contact", left: 35.8, top: 94.9, width: 5.0, height: 1.05 },
  { href: "/demo1/insights", label: "Footer insights", left: 35.8, top: 96.4, width: 4.8, height: 1.05 },
  { href: "/demo1/faqs", label: "Footer FAQs", left: 35.8, top: 97.8, width: 3.6, height: 1.05 },
  { href: "/demo1/personal", label: "Footer personal", left: 46.0, top: 91.9, width: 7.2, height: 1.15 },
  { href: "/demo1/corporate", label: "Footer corporate", left: 46.0, top: 95.2, width: 7.2, height: 1.15 },
  { href: "/demo1/contact", label: "Footer newsletter signup", left: 69.4, top: 95.2, width: 21.6, height: 1.35 },
];

function withCommonHotspots(extra: DemoHotspot[] = []) {
  return [...headerHotspots, ...footerHotspots, ...extra];
}

export const demoPages: DemoPageData[] = [
  {
    id: "1",
    slug: "home",
    title: "Home",
    src: "/demo1/svg/page-1.svg",
    alt: "Dinesh CPA demo home page",
    width: 612,
    height: 2046.76,
    hotspots: withCommonHotspots([
      { href: "/demo1/about", label: "Learn more about us", left: 55.4, top: 15.0, width: 12.3, height: 1.15 },
      { href: "/demo1/contact", label: "Free 10-Year Tax Review", left: 24.4, top: 38.55, width: 19.8, height: 1.25 },
      { href: "/demo1/insights", label: "More Insights", left: 62.1, top: 57.15, width: 8.7, height: 1.05 },
    ]),
    expansions: [
      { label: "Core benefits cards", left: 9.8, top: 33.8, width: 80.5, height: 9.2 },
      { label: "Free 10-year tax review", left: 6.8, top: 48.4, width: 86.8, height: 20.6 },
      { label: "Client testimonial panel", left: 0.0, top: 77.1, width: 100.0, height: 12.1 },
    ],
    heroIntro: { label: "Dinesh CPA hero", left: 7.3, top: 2.05, width: 85.4, height: 13.7 },
    contentStartTop: 18.15,
  },
  {
    id: "2",
    slug: "personal",
    title: "Personal",
    src: "/demo1/svg/page-2.svg",
    alt: "Dinesh CPA demo personal taxes page",
    width: 612,
    height: 2145.6419,
    hotspots: withCommonHotspots([
      { href: "/demo1/contact", label: "Personal review CTA", left: 25.0, top: 44.1, width: 18.8, height: 1.2 },
      { href: "/demo1/insights", label: "Personal insights", left: 61.8, top: 70.65, width: 8.8, height: 1.05 },
    ]),
    expansions: [
      { label: "Personal tax services", left: 6.8, top: 30.4, width: 86.5, height: 18.2 },
      { label: "Personal planning details", left: 7.2, top: 50.3, width: 85.8, height: 19.8 },
    ],
  },
  {
    id: "3",
    slug: "contact",
    title: "Contact",
    src: "/demo1/svg/page-3.svg",
    alt: "Dinesh CPA demo contact page",
    width: 612,
    height: 1309.9433,
    hotspots: withCommonHotspots([
      { href: "mailto:info@dineshcpa.com", label: "Contact question button", left: 44.0, top: 13.7, width: 11.4, height: 1.25 },
      { href: "mailto:info@dineshcpa.com", label: "Contact form and map area", left: 8.2, top: 46.4, width: 75.0, height: 17.5 },
    ]),
    expansions: [{ label: "Contact form and map", left: 7.0, top: 37.3, width: 86.0, height: 32.0 }],
  },
  {
    id: "4",
    slug: "corporate",
    title: "Corporate",
    src: "/demo1/svg/page-4.svg",
    alt: "Dinesh CPA demo corporate taxes page",
    width: 612,
    height: 2137.7457,
    hotspots: withCommonHotspots([
      { href: "/demo1/contact", label: "Corporate review CTA", left: 25.0, top: 44.2, width: 18.8, height: 1.2 },
      { href: "/demo1/insights", label: "Corporate insights", left: 61.7, top: 70.4, width: 8.8, height: 1.05 },
    ]),
    expansions: [
      { label: "Business services cards", left: 9.6, top: 31.7, width: 80.9, height: 17.1 },
      { label: "Corporate planning section", left: 6.7, top: 49.4, width: 87.2, height: 20.2 },
    ],
  },
  {
    id: "5",
    slug: "about",
    title: "About",
    src: "/demo1/svg/page-5.svg",
    alt: "Dinesh CPA demo about page",
    width: 612,
    height: 1310.6562,
    hotspots: withCommonHotspots([
      { href: "/demo1/contact", label: "About contact button", left: 43.2, top: 61.2, width: 11.4, height: 1.35 },
    ]),
    expansions: [{ label: "About Dinesh CPA", left: 7.0, top: 32.4, width: 86.0, height: 32.0 }],
  },
  {
    id: "6",
    slug: "faqs",
    title: "FAQs",
    src: "/demo1/svg/page-6.svg",
    alt: "Dinesh CPA demo FAQs page",
    width: 612,
    height: 1310.6562,
    hotspots: withCommonHotspots(),
    expansions: [{ label: "FAQ answers", left: 7.0, top: 31.4, width: 86.0, height: 34.0 }],
  },
  {
    id: "7",
    slug: "insights",
    title: "Insights",
    src: "/demo1/svg/page-7.svg",
    alt: "Dinesh CPA demo insights page",
    width: 612,
    height: 1310.6562,
    hotspots: withCommonHotspots([
      { href: "/demo1/contact", label: "Insight card one", left: 12.3, top: 40.6, width: 24.3, height: 11.6 },
      { href: "/demo1/contact", label: "Insight card two", left: 38.6, top: 40.6, width: 24.0, height: 11.6 },
      { href: "/demo1/contact", label: "Insight card three", left: 64.8, top: 40.6, width: 24.2, height: 11.6 },
      { href: "/demo1/contact", label: "Insight card four", left: 12.3, top: 54.2, width: 24.3, height: 11.6 },
      { href: "/demo1/contact", label: "Insight card five", left: 38.6, top: 54.2, width: 24.0, height: 11.6 },
      { href: "/demo1/contact", label: "Insight card six", left: 64.8, top: 54.2, width: 24.2, height: 11.6 },
    ]),
    expansions: [{ label: "Insights grid", left: 8.8, top: 34.0, width: 82.4, height: 37.0 }],
  },
];

const aliases = new Map<string, DemoPageData>(
  demoPages.flatMap((page) => [
    [page.id, page],
    [page.slug, page],
  ]),
);

export function getDemoPage(page?: string) {
  if (!page || page === "home") {
    return demoPages[0];
  }

  return aliases.get(page.toLowerCase());
}
