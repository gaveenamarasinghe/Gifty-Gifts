import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { C as Package, I as House, Z as Check, o as Truck } from "../_libs/lucide-react.mjs";
import { c as Input, d as useShop, l as Button, m as cn } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-order-EWbY0aAp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/track-order.tsx?tsr-split=component";
var steps = [
	{
		key: "Processing",
		icon: Check,
		label: "Order confirmed"
	},
	{
		key: "Packed",
		icon: Package,
		label: "Packed in studio"
	},
	{
		key: "Out for delivery",
		icon: Truck,
		label: "Out for delivery"
	},
	{
		key: "Delivered",
		icon: House,
		label: "Delivered"
	}
];
function TrackOrder() {
	const { orders } = useShop();
	const [id, setId] = (0, import_react.useState)("");
	const [searched, setSearched] = (0, import_react.useState)(false);
	const order = orders.find((o) => o.id.toLowerCase() === id.trim().toLowerCase());
	const activeIndex = order ? Math.max(0, steps.findIndex((s) => s.key === order.status)) : 0;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: "Where's my gift?",
		title: "Track your order",
		subtitle: "Enter the order number from your confirmation email."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 34,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			className: "mx-auto flex max-w-lg gap-2",
			onSubmit: (e) => {
				e.preventDefault();
				setSearched(true);
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				value: id,
				onChange: (e) => setId(e.target.value),
				placeholder: "GFT-XXXXXX",
				"aria-label": "Order number",
				className: "h-12 rounded-full"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				type: "submit",
				variant: "hero",
				size: "lg",
				children: "Track"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 36,
			columnNumber: 9
		}, this),
		searched && !order && /* @__PURE__ */ (void 0)("p", {
			className: "mt-8 text-center text-muted-foreground",
			children: "No order found with that number. Check your confirmation email."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 32
		}, this),
		order && /* @__PURE__ */ (void 0)("div", {
			className: "mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-card",
			children: [
				/* @__PURE__ */ (void 0)("p", {
					className: "text-sm text-muted-foreground",
					children: ["Order ", order.id]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (void 0)("h2", {
					className: "font-display text-2xl font-bold",
					children: order.status
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (void 0)("ol", {
					className: "mt-8 space-y-6",
					children: steps.map((s, i) => /* @__PURE__ */ (void 0)("li", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: cn("grid h-10 w-10 place-items-center rounded-full", i <= activeIndex ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"),
							children: /* @__PURE__ */ (void 0)(s.icon, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 19
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: i <= activeIndex ? "font-semibold" : "text-muted-foreground",
							children: s.label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 19
						}, this)]
					}, s.key, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 36
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 13
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 19
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 10
	}, this);
}
//#endregion
export { TrackOrder as component };
