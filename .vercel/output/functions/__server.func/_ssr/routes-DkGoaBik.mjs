import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as MapPin, O as Mail, W as Clock, d as Star, f as Sparkles, m as ShieldCheck, o as Truck, u as Store, x as Phone, z as Gift } from "../_libs/lucide-react.mjs";
import { C as useProducts, S as testimonials, _ as categories, l as Button } from "./router-DGbT_glc.mjs";
import { n as Section, r as SectionHeading } from "./PageHeader-BMK4AIo_.mjs";
import { t as ProductGrid } from "./ProductCard-BSqik8dL.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DkGoaBik.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var hero_gifts_default = "/assets/hero-gifts-Dym6Og_t.jpg";
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/index.tsx?tsr-split=component";
var perks = [
	{
		icon: Truck,
		title: "Same-day delivery",
		text: "Order before 4pm in 40+ cities."
	},
	{
		icon: Sparkles,
		title: "Hand-finished",
		text: "Wrapped and ribboned by our studio."
	},
	{
		icon: ShieldCheck,
		title: "Perfect or replaced",
		text: "48-hour no-questions guarantee."
	},
	{
		icon: Clock,
		title: "Timed slots",
		text: "Pick the exact two-hour window."
	}
];
function Home() {
	const { products } = useProducts();
	const seller = (() => {
		if (typeof window === "undefined") return null;
		try {
			const storedUser = localStorage.getItem("gifty_user");
			const user = storedUser ? JSON.parse(storedUser) : null;
			return user?.role === "vendor" && user.vendor ? user : null;
		} catch {
			return null;
		}
	})();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "relative overflow-hidden gradient-soft",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute inset-0 gradient-glow",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 15
							}, this), " Send Love, Deliver Happiness"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl",
							children: ["Gifts that feel ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-gradient",
								children: "unforgettable"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 31
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-6 max-w-lg text-lg text-muted-foreground",
							children: "Curated hampers, hand-tied peonies, same-morning cakes and personalised keepsakes — delivered in packaging they'll want to keep."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								variant: "hero",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/shop",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gift, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 19
									}, this), " Shop all gifts"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								variant: "outline",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/categories",
									children: "Browse categories"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 73,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
							className: "mt-10 flex flex-wrap gap-8",
							children: [
								["120k+", "Gifts delivered"],
								["4.9/5", "Average rating"],
								["40+", "Same-day cities"]
							].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
								className: "font-display text-3xl font-bold text-primary",
								children: v
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: l
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 19
							}, this)] }, l, true, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 120
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .8,
						delay: .1,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: hero_gifts_default,
						alt: "Pink luxury gift boxes tied with satin ribbon beside fresh peonies",
						width: 1408,
						height: 1104,
						className: "w-full rounded-[2.5rem] shadow-card"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute -bottom-6 -left-4 hidden rounded-3xl glass p-4 shadow-card sm:block float-slow",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "Delivered today"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-display text-lg font-bold",
							children: "1,284 smiles 💕"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
			className: "py-12!",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: perks.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-3xl border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(p.icon, { className: "h-6 w-6 text-primary" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mt-4 font-display text-lg font-semibold",
							children: p.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 111,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: p.text
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 15
						}, this)
					]
				}, p.title, true, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 27
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 107,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, {
			eyebrow: "Shop by occasion",
			title: "Every kind of happy",
			action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/categories",
					children: "See all"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 120,
					columnNumber: 15
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 119,
				columnNumber: 88
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 119,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5",
			children: categories.slice(0, 10).map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/category/$slug",
				params: { slug: c.slug },
				className: "group rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "block text-4xl transition-smooth group-hover:scale-110",
						"aria-hidden": true,
						children: c.emoji
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 126,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "mt-3 font-display text-base font-semibold",
						children: c.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 129,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: c.blurb
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 130,
						columnNumber: 15
					}, this)
				]
			}, c.slug, true, {
				fileName: _jsxFileName,
				lineNumber: 123,
				columnNumber: 45
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 122,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 118,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, {
			eyebrow: "From our sellers",
			title: "Featured gifts",
			action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/shop",
					children: "View all"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 138,
					columnNumber: 15
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 137,
				columnNumber: 83
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 137,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductGrid, { items: products.filter((product) => Boolean(product.vendorId)).slice(0, 8) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 140,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 136,
			columnNumber: 7
		}, this),
		seller && /* @__PURE__ */ (void 0)(Section, {
			className: "pt-0!",
			children: [/* @__PURE__ */ (void 0)(SectionHeading, {
				eyebrow: "Meet the seller",
				title: seller.vendor.name || seller.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 144,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)("div", {
				className: "grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-soft md:grid-cols-[1fr_2fr] md:items-center",
				children: [/* @__PURE__ */ (void 0)("div", { children: /* @__PURE__ */ (void 0)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (void 0)(Store, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 149,
							columnNumber: 19
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
						className: "font-display text-xl font-bold",
						children: seller.vendor.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 19
					}, this), /* @__PURE__ */ (void 0)("p", {
						className: "text-sm text-muted-foreground",
						children: seller.vendor.shopDescription
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 19
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 151,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 147,
					columnNumber: 15
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "grid gap-3 text-sm text-muted-foreground sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (void 0)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(MapPin, { className: "h-4 w-4 text-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 159,
								columnNumber: 17
							}, this), seller.vendor.location || seller.vendor.address]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 158,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(Phone, { className: "h-4 w-4 text-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 17
							}, this), seller.vendor.phone]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(Mail, { className: "h-4 w-4 text-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 167,
								columnNumber: 17
							}, this), seller.vendor.email || seller.email]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 145,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 143,
			columnNumber: 18
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, {
			eyebrow: "Real notes",
			title: "What gifters say"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 176,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-5 md:grid-cols-3",
			children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
				className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex gap-0.5",
						"aria-label": `${t.rating} out of 5 stars`,
						children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "h-4 w-4 fill-primary text-primary" }, i, false, {
							fileName: _jsxFileName,
							lineNumber: 182,
							columnNumber: 30
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", {
						className: "mt-4 text-sm leading-relaxed",
						children: [
							"\"",
							t.text,
							"\""
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 184,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", {
						className: "mt-5 text-sm font-semibold",
						children: [
							t.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-normal text-muted-foreground",
								children: ["· ", t.city]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 186,
								columnNumber: 26
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 185,
						columnNumber: 15
					}, this)
				]
			}, t.name, true, {
				fileName: _jsxFileName,
				lineNumber: 178,
				columnNumber: 34
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 177,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 175,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
			className: "pb-24!",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative overflow-hidden rounded-[2.5rem] gradient-primary px-8 py-16 text-center text-primary-foreground shadow-glow",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-4xl font-bold md:text-5xl",
						children: "Not sure what to send?"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 195,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mx-auto mt-4 max-w-xl opacity-90",
						children: "Tell us the occasion and budget — our gift concierge builds a bespoke hamper within an hour."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 196,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						size: "xl",
						variant: "soft",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/contact",
							children: "Talk to a gift concierge"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 201,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 200,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 194,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 193,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 10
	}, this);
}
//#endregion
export { Home as component };
