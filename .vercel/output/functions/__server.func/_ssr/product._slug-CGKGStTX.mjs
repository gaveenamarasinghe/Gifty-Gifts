import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as Heart, b as Plus, d as Star, m as ShieldCheck, o as Truck, p as ShoppingBag, w as Minus } from "../_libs/lucide-react.mjs";
import { C as useProducts, _ as categories, d as useShop, l as Button, m as cn, r as Route$1, y as currency } from "./router-DGbT_glc.mjs";
import { n as Section } from "./PageHeader-BMK4AIo_.mjs";
import { t as Badge } from "./badge-jFEf22J5.mjs";
import { t as ProductGrid } from "./ProductCard-BSqik8dL.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-CGKGStTX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ui/tabs.tsx";
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 12,
	columnNumber: 3
}, void 0));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 27,
	columnNumber: 3
}, void 0));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 42,
	columnNumber: 3
}, void 0));
TabsContent.displayName = Content.displayName;
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/product.$slug.tsx?tsr-split=component";
function ProductDetail() {
	const { product } = Route$1.useLoaderData();
	const { addToCart, toggleWishlist, wishlist, markViewed } = useShop();
	const [qty, setQty] = (0, import_react.useState)(1);
	const saved = wishlist.includes(product.id);
	const category = categories.find((c) => c.slug === product.category);
	const { products } = useProducts();
	const related = products.filter((p) => p.category === product.category && p.id !== product.id);
	(0, import_react.useEffect)(() => {
		markViewed(product.id);
	}, [product.id]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
			className: "pb-8!",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				className: "mb-8 text-sm text-muted-foreground",
				"aria-label": "Breadcrumb",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "hover:text-primary",
						children: "Home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 11
					}, this),
					" ",
					"/",
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/shop",
						className: "hover:text-primary",
						children: "Shop"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 11
					}, this),
					" ",
					"/",
					" ",
					category && /* @__PURE__ */ (void 0)(Link, {
						to: "/category/$slug",
						params: { slug: category.slug },
						className: "hover:text-primary",
						children: category.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 24
					}, this),
					" ",
					"/ ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-foreground",
						children: product.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group relative aspect-square overflow-hidden rounded-[2.5rem] gradient-soft shadow-card",
					children: product.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: product.image,
						alt: product.name,
						className: "h-full w-full object-cover"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 30
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						"aria-hidden": true,
						className: "absolute inset-0 grid place-items-center text-[10rem] transition-smooth group-hover:scale-125",
						children: product.emoji
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 118
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
						variant: "secondary",
						className: "rounded-full",
						children: category?.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mt-4 font-display text-4xl font-bold md:text-5xl",
						children: product.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 flex items-center gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "flex",
								"aria-label": `Rated ${product.rating} out of 5`,
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: cn("h-4 w-4", i < Math.round(product.rating) ? "fill-primary text-primary" : "text-border") }, i, false, {
									fileName: _jsxFileName,
									lineNumber: 70,
									columnNumber: 32
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-medium",
								children: product.rating
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted-foreground",
								children: [
									"(",
									product.reviews,
									" reviews)"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-6 leading-relaxed text-muted-foreground",
						children: product.description
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 flex items-baseline gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-display text-4xl font-bold text-primary",
								children: currency(product.price)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-lg text-muted-foreground line-through",
								children: currency(product.mrp)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								className: "rounded-full gradient-primary text-primary-foreground",
								children: ["Save ", currency(product.mrp - product.price)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-sm text-success",
						children: [
							"In stock — ",
							product.stock,
							" ready to ship"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center rounded-full border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "ghost",
										size: "icon",
										onClick: () => setQty((q) => Math.max(1, q - 1)),
										"aria-label": "Decrease quantity",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 95,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 94,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "w-10 text-center font-semibold",
										children: qty
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 97,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "ghost",
										size: "icon",
										onClick: () => setQty((q) => q + 1),
										"aria-label": "Increase quantity",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 99,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 98,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "hero",
								size: "lg",
								onClick: () => addToCart(product.id, qty),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 17
								}, this), " Add to basket"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outline",
								size: "lg",
								onClick: () => toggleWishlist(product.id),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: cn(saved && "fill-primary text-primary") }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 106,
									columnNumber: 17
								}, this), saved ? "Saved" : "Wishlist"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Perk, {
							icon: Truck,
							title: "Same-day delivery",
							text: "Order before 4pm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Perk, {
							icon: ShieldCheck,
							title: "Perfect or replaced",
							text: "48-hour guarantee"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 36,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
			className: "pt-8!",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				defaultValue: "details",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, {
						className: "rounded-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "details",
								className: "rounded-full",
								children: "Details"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "delivery",
								className: "rounded-full",
								children: "Delivery"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "reviews",
								className: "rounded-full",
								children: "Reviews"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 121,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "details",
						className: "mt-6 max-w-3xl leading-relaxed text-muted-foreground",
						children: [product.description, " Every Gifty order is finished by hand in our studio, wrapped in recycled tissue and sealed with a wax stamp. Add a handwritten note free at checkout."]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "delivery",
						className: "mt-6 max-w-3xl leading-relaxed text-muted-foreground",
						children: "Same-day delivery in 40+ cities for orders placed before 4pm. Choose your delivery date and a two-hour slot at checkout. Free express shipping over $120."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 136,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "reviews",
						className: "mt-6 space-y-4",
						children: [
							{
								n: "Rowan T.",
								r: 5,
								t: "Arrived exactly on time and looked even better in person."
							},
							{
								n: "Priya M.",
								r: 5,
								t: "The packaging alone made my mum cry. Worth every penny."
							},
							{
								n: "Luca B.",
								r: 4,
								t: "Beautiful gift, though I wish there were more size options."
							}
						].map((rv) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-semibold",
									children: rv.n
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 155,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex",
									children: Array.from({ length: rv.r }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "h-3.5 w-3.5 fill-primary text-primary" }, i, false, {
										fileName: _jsxFileName,
										lineNumber: 159,
										columnNumber: 34
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 156,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 154,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: rv.t
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 162,
								columnNumber: 17
							}, this)]
						}, rv.n, true, {
							fileName: _jsxFileName,
							lineNumber: 153,
							columnNumber: 24
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 119,
			columnNumber: 7
		}, this),
		related.length > 0 && /* @__PURE__ */ (void 0)(Section, {
			className: "pt-0!",
			children: [/* @__PURE__ */ (void 0)("h2", {
				className: "mb-8 font-display text-3xl font-bold",
				children: "You may also love"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 169,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)(ProductGrid, { items: related.slice(0, 4) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 170,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 168,
			columnNumber: 30
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 10
	}, this);
}
function Perk({ icon: Icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-5 w-5 text-primary" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 184,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-sm font-semibold",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 186,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-xs text-muted-foreground",
			children: text
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 187,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 185,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 183,
		columnNumber: 10
	}, this);
}
//#endregion
export { ProductDetail as component };
