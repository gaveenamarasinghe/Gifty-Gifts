import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { c as ThumbsUp, d as Star } from "../_libs/lucide-react.mjs";
import { l as Button, x as products } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-DE10VF5r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/reviews.tsx?tsr-split=component";
var reviews = [
	{
		name: "Amara P.",
		rating: 5,
		product: products[0].name,
		text: "The hamper arrived in a box so beautiful my sister kept it. Delivery was to the minute.",
		likes: 24
	},
	{
		name: "Diego R.",
		rating: 5,
		product: products[4].name,
		text: "Ordered the peony bouquet at 11pm for next-day. It looked exactly like the photo — maybe better.",
		likes: 18
	},
	{
		name: "Sana K.",
		rating: 5,
		product: products[2].name,
		text: "The engraved necklace is genuinely luxury quality. Third order this year.",
		likes: 31
	},
	{
		name: "Tom H.",
		rating: 4,
		product: products[6].name,
		text: "Cake was superb and clearly fresh. Would love a smaller size option.",
		likes: 7
	},
	{
		name: "Nour A.",
		rating: 5,
		product: products[16].name,
		text: "The giant bear is enormous and unbelievably soft. My daughter refuses to let go.",
		likes: 42
	},
	{
		name: "Mira L.",
		rating: 5,
		product: products[8].name,
		text: "Best chocolates I've sent anyone. The packaging feels like a jewellery box.",
		likes: 15
	}
];
function Reviews() {
	const [liked, setLiked] = (0, import_react.useState)([]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: "4.9 out of 5",
		title: "Customer reviews",
		subtitle: "Verified notes from people who actually sent the gift."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
		children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
			className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex gap-0.5",
					"aria-label": `${r.rating} out of 5 stars`,
					children: Array.from({ length: r.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "h-4 w-4 fill-primary text-primary" }, i, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 30
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 15
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 text-xs uppercase tracking-widest text-primary",
					children: r.product
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 15
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", {
					className: "mt-2 text-sm leading-relaxed",
					children: [
						"\"",
						r.text,
						"\""
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 15
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", {
					className: "mt-5 flex items-center justify-between text-sm font-semibold",
					children: [r.name, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => setLiked((p) => p.includes(r.name) ? p.filter((n) => n !== r.name) : [...p, r.name]),
						"aria-label": `Mark ${r.name}'s review helpful`,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThumbsUp, { className: liked.includes(r.name) ? "fill-primary text-primary" : "" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 19
						}, this), r.likes + (liked.includes(r.name) ? 1 : 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 15
				}, this)
			]
		}, r.name, true, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 29
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 45,
		columnNumber: 10
	}, this);
}
//#endregion
export { Reviews as component };
