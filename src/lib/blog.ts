export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  emoji: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "how-to-choose-the-perfect-hamper",
    title: "How to choose the perfect gift hamper",
    excerpt: "Five questions our concierge asks before building any bespoke box.",
    date: "2026-06-12",
    readingTime: "4 min",
    emoji: "🎁",
    body: [
      "A hamper works when it tells a small story about the person receiving it. Before we build one, we ask five questions: what is the occasion, what do they treat themselves to, what do they never buy themselves, do they share, and how will it arrive?",
      "The last one matters more than people expect. A hamper opened at a reception desk needs different packaging from one opened at a kitchen table.",
      "Our rule of thumb: one hero item, two supporting items, and one small surprise that costs almost nothing but feels personal — a handwritten note, a pressed flower, a wax seal.",
    ],
  },
  {
    slug: "flowers-that-last-longer",
    title: "Seven ways to make cut flowers last twice as long",
    excerpt: "Our florists' honest advice — and the one supermarket trick that actually works.",
    date: "2026-05-28",
    readingTime: "3 min",
    emoji: "💐",
    body: [
      "Recut stems at a 45-degree angle under running water, change the water every two days, and keep the vase away from fruit bowls — ripening fruit releases ethylene, which ages blooms fast.",
      "Skip the aspirin myth. A teaspoon of sugar plus a drop of bleach genuinely does outperform it: sugar feeds the stems, bleach keeps the bacteria down.",
      "Peonies in particular prefer a cool room and a deep drink on the first night.",
    ],
  },
  {
    slug: "personalised-gifts-that-do-not-feel-cheesy",
    title: "Personalised gifts that don't feel cheesy",
    excerpt: "Engraving is easy to get wrong. Here's the line between sentimental and awkward.",
    date: "2026-05-04",
    readingTime: "5 min",
    emoji: "✨",
    body: [
      "The best personalisation is quiet. An initial inside a band, a date on the clasp, coordinates on the back of a pendant — details only the wearer knows about.",
      "Avoid full sentences on jewellery, and avoid nicknames on anything worn in public.",
      "For photo gifts, choose an image with negative space. Crowded photos lose everything at small sizes.",
    ],
  },
];

export const findPost = (slug: string) => posts.find((p) => p.slug === slug);
