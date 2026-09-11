/**
 * Demo catalog + seed data.
 *
 * These objects mirror the Firestore collections documented in
 * backend/firebase/seed.js so the storefront renders identically whether it is
 * reading from Firestore or running in demo mode.
 */

export type Category = {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  blurb: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string; // category slug
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  stock: number;
  emoji: string;
  image?: string;
  description: string;
  tags: Array<"new" | "featured" | "bestseller" | "offer">;
  vendorId?: string;
  vendorName?: string;
  status?: string;
  brand?: string;
  occasion?: string;
  discount?: number;
};

export const categories: Category[] = [
  {
    id: "c1",
    slug: "gift-hampers",
    name: "Gift Hampers",
    emoji: "🎁",
    blurb: "Curated boxes of joy",
  },
  {
    id: "c2",
    slug: "personalized",
    name: "Personalized",
    emoji: "✨",
    blurb: "Made just for them",
  },
  { id: "c3", slug: "flowers", name: "Flowers", emoji: "💐", blurb: "Fresh hand-tied blooms" },
  { id: "c4", slug: "cakes", name: "Cakes", emoji: "🎂", blurb: "Baked the same morning" },
  { id: "c5", slug: "chocolates", name: "Chocolates", emoji: "🍫", blurb: "Single-origin cocoa" },
  { id: "c6", slug: "perfumes", name: "Perfumes", emoji: "🧴", blurb: "Signature scents" },
  { id: "c7", slug: "jewellery", name: "Jewellery", emoji: "💍", blurb: "Everyday heirlooms" },
  {
    id: "c8",
    slug: "greeting-cards",
    name: "Greeting Cards",
    emoji: "💌",
    blurb: "Letterpress notes",
  },
  { id: "c9", slug: "teddy-bears", name: "Teddy Bears", emoji: "🧸", blurb: "Impossibly soft" },
];

function p(
  id: number,
  name: string,
  category: string,
  price: number,
  mrp: number,
  rating: number,
  reviews: number,
  emoji: string,
  description: string,
  tags: Product["tags"],
): Product {
  return {
    id: `p${id}`,
    slug: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    name,
    category,
    price,
    mrp,
    rating,
    reviews,
    stock: 8 + ((id * 7) % 40),
    emoji,
    description,
    tags,
  };
}

export const products: Product[] = [
  p(
    1,
    "Rose Gold Luxe Hamper",
    "gift-hampers",
    129,
    159,
    4.9,
    218,
    "🎁",
    "A signature Gifty hamper: single-origin chocolates, a scented candle, dried roses and a handwritten note, packed in a rose-gold keepsake box.",
    ["featured", "bestseller"],
  ),
  p(
    2,
    "Sweetheart Celebration Box",
    "gift-hampers",
    89,
    110,
    4.7,
    142,
    "🍬",
    "Pastel confetti box filled with macarons, pralines and a mini bottle of sparkling rosé.",
    ["bestseller", "offer"],
  ),
  p(
    3,
    "Engraved Name Necklace",
    "personalized",
    74,
    95,
    4.8,
    331,
    "✨",
    "18k gold-plated nameplate necklace, engraved by hand in up to 12 characters.",
    ["new", "featured"],
  ),
  p(
    4,
    "Custom Photo Crystal",
    "personalized",
    59,
    79,
    4.6,
    96,
    "🔮",
    "Your favourite photo laser-etched inside optical crystal with a warm LED base.",
    ["new"],
  ),
  p(
    5,
    "Blush Peony Bouquet",
    "flowers",
    65,
    80,
    4.9,
    405,
    "💐",
    "Twenty-four stems of blush peonies and eucalyptus, hand-tied in silk ribbon.",
    ["bestseller", "featured"],
  ),
  p(
    6,
    "Eternal Rose Dome",
    "flowers",
    119,
    149,
    4.8,
    187,
    "🌹",
    "A preserved rose that lasts three years, under hand-blown glass.",
    ["offer"],
  ),
  p(
    7,
    "Velvet Red Truffle Cake",
    "cakes",
    48,
    58,
    4.7,
    264,
    "🎂",
    "Belgian truffle sponge with cream cheese frosting. Baked fresh the morning of delivery.",
    ["bestseller"],
  ),
  p(
    8,
    "Strawberry Cloud Cake",
    "cakes",
    44,
    52,
    4.5,
    121,
    "🍰",
    "Airy chiffon layers, mascarpone cream and macerated strawberries.",
    ["new"],
  ),
  p(
    9,
    "Grand Cru Chocolate Box",
    "chocolates",
    39,
    49,
    4.8,
    298,
    "🍫",
    "Twenty-four hand-tempered pralines from single-origin Ecuadorian cocoa.",
    ["featured"],
  ),
  p(
    10,
    "Pink Champagne Truffles",
    "chocolates",
    29,
    36,
    4.6,
    154,
    "🥂",
    "Champagne ganache dusted in raspberry powder.",
    ["offer"],
  ),
  p(
    11,
    "Amour Eau de Parfum",
    "perfumes",
    95,
    130,
    4.7,
    176,
    "🧴",
    "Peony, bergamot and vanilla musk in a faceted crystal flacon. 50ml.",
    ["featured", "offer"],
  ),
  p(
    12,
    "Midnight Bloom Perfume",
    "perfumes",
    110,
    140,
    4.6,
    88,
    "🌙",
    "Night jasmine, amber and soft leather. An evening signature.",
    ["new"],
  ),
  p(
    13,
    "Pearl Drop Earrings",
    "jewellery",
    82,
    105,
    4.8,
    209,
    "💍",
    "Freshwater pearls set in recycled sterling silver.",
    ["bestseller"],
  ),
  p(
    14,
    "Heart Charm Bracelet",
    "jewellery",
    68,
    85,
    4.7,
    143,
    "💖",
    "Adjustable chain with a polished heart charm, ready to engrave.",
    ["offer"],
  ),
  p(
    15,
    "Letterpress Love Notes",
    "greeting-cards",
    18,
    24,
    4.9,
    312,
    "💌",
    "Set of six cotton-paper cards, letterpressed in blush ink.",
    ["new"],
  ),
  p(
    16,
    "Birthday Confetti Card",
    "greeting-cards",
    12,
    16,
    4.5,
    77,
    "🎉",
    "Pop-open card that releases biodegradable confetti.",
    ["offer"],
  ),
  p(
    17,
    "Giant Cuddle Bear",
    "teddy-bears",
    89,
    115,
    4.9,
    421,
    "🧸",
    "One metre of ultra-plush teddy with a satin bow.",
    ["bestseller", "featured"],
  ),
  p(
    18,
    "Mini Blush Bear Duo",
    "teddy-bears",
    42,
    55,
    4.6,
    132,
    "🐻",
    "A pair of pocket bears that hold hands with magnets.",
    ["new"],
  ),
];

export const coupons = [
  { code: "GIFTY10", label: "10% off your order", type: "percent" as const, value: 10 },
  { code: "LOVE25", label: "$25 off orders over $150", type: "flat" as const, value: 25, min: 150 },
  { code: "FREESHIP", label: "Free express shipping", type: "shipping" as const, value: 0 },
];

export const testimonials = [
  {
    name: "Amara P.",
    city: "London",
    text: "The hamper arrived in a box so beautiful my sister kept it. Delivery was to the minute.",
    rating: 5,
  },
  {
    name: "Diego R.",
    city: "Madrid",
    text: "Ordered the peony bouquet at 11pm for next-day. It looked exactly like the photo.",
    rating: 5,
  },
  {
    name: "Sana K.",
    city: "Dubai",
    text: "The engraved necklace is genuinely luxury quality. Third order this year.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "How fast can you deliver?",
    a: "Same-day delivery is available in 40+ cities when you order before 4pm. Everywhere else is next-day express.",
  },
  {
    q: "Can I add a gift message?",
    a: "Yes — at checkout you can add a handwritten note, choose gift wrapping and hide the price from the recipient.",
  },
  {
    q: "Do you deliver on a specific date and time?",
    a: "Choose your delivery date and a two-hour time slot at checkout, including weekends and holidays.",
  },
  {
    q: "What is your refund policy?",
    a: "If anything arrives less than perfect, tell us within 48 hours and we replace it or refund you in full.",
  },
  {
    q: "Do you ship internationally?",
    a: "We ship to 22 countries. Perishables such as cakes and flowers are sourced from a local partner florist or bakery.",
  },
];

export const findProduct = (slug: string) => products.find((x) => x.slug === slug);
export const byTag = (tag: Product["tags"][number]) => products.filter((x) => x.tags.includes(tag));
export const byCategory = (slug: string) => products.filter((x) => x.category === slug);
export const currency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
