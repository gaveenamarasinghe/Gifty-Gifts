import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as Heart, d as Star, p as ShoppingBag } from "../_libs/lucide-react.mjs";
import { d as useShop, l as Button, m as cn, y as currency } from "./router-DGbT_glc.mjs";
import { t as Badge } from "./badge-jFEf22J5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-BSqik8dL.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ProductCard.tsx";
function ProductCard({ product, vendorName }) {
	const { addToCart, toggleWishlist, wishlist } = useShop();
	const saved = wishlist.includes(product.id);
	const off = Math.round((product.mrp - product.price) / product.mrp * 100);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
		className: "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/product/$slug",
				params: { slug: product.slug },
				className: "relative block aspect-square overflow-hidden gradient-soft",
				"aria-label": product.name,
				children: [product.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: product.image,
					alt: product.name,
					className: "h-full w-full object-cover transition-smooth group-hover:scale-110"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					"aria-hidden": true,
					className: "absolute inset-0 grid place-items-center text-7xl transition-smooth group-hover:scale-110",
					children: product.emoji
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 11
				}, this), off > 0 && /* @__PURE__ */ (void 0)(Badge, {
					className: "absolute left-3 top-3 rounded-full gradient-primary text-primary-foreground",
					children: [off, "% off"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "ghost",
				size: "icon",
				"aria-label": saved ? "Remove from wishlist" : "Add to wishlist",
				onClick: () => toggleWishlist(product.id),
				className: "absolute right-3 top-3 rounded-full bg-background/80 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: cn("h-4 w-4", saved && "fill-primary text-primary") }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-1 flex-col p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "h-3.5 w-3.5 fill-primary text-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-medium text-foreground",
								children: product.rating
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
								"(",
								product.reviews,
								")"
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "mt-1.5 font-display text-base font-semibold leading-snug",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/product/$slug",
							params: { slug: product.slug },
							children: product.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 9
					}, this),
					(vendorName || product.vendorName) && /* @__PURE__ */ (void 0)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: ["Sold by ", vendorName || product.vendorName]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 line-clamp-2 text-sm text-muted-foreground",
						children: product.description
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-2 flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-lg font-bold text-primary",
							children: currency(product.price)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-sm text-muted-foreground line-through",
							children: currency(product.mrp)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "hero",
						className: "mt-4 w-full",
						onClick: () => addToCart(product.id),
						"aria-label": `Add ${product.name} to basket`,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 11
						}, this), " Add to basket"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: product.stock > 0 ? `${product.stock} available` : "Currently unavailable"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
function ProductGrid({ items }) {
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "rounded-3xl border border-dashed border-border p-12 text-center text-muted-foreground",
		children: "No gifts match your filters just yet."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 95,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid grid-cols-2 gap-5 lg:grid-cols-4",
		children: items.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product: p }, p.id, false, {
			fileName: _jsxFileName,
			lineNumber: 103,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 101,
		columnNumber: 5
	}, this);
}
//#endregion
export { ProductGrid as t };
