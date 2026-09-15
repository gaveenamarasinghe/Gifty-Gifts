import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as CircleCheck } from "../_libs/lucide-react.mjs";
import { d as useShop, l as Button, s as Route$24, y as currency } from "./router-DGbT_glc.mjs";
import { n as Section } from "./PageHeader-BMK4AIo_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-success-CPh_M17p.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/order-success.tsx?tsr-split=component";
function OrderSuccess() {
	const { id } = Route$24.useSearch();
	const { orders } = useShop();
	const order = orders.find((o) => o.id === id);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
		className: "!py-24",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-xl rounded-[2.5rem] border border-border bg-card p-12 text-center shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "mx-auto h-16 w-16 text-primary" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-6 font-display text-4xl font-bold",
					children: "Order confirmed"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 text-muted-foreground",
					children: "A confirmation email is on its way. We'll text you when your gift is out for delivery."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 9
				}, this),
				order && /* @__PURE__ */ (void 0)("dl", {
					className: "mt-8 space-y-2 rounded-3xl gradient-soft p-6 text-left text-sm",
					children: [
						/* @__PURE__ */ (void 0)(Row, {
							k: "Order number",
							v: order.id
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Row, {
							k: "Total paid",
							v: currency(order.total)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Row, {
							k: "Delivery",
							v: `${order.deliveryDate || "Next available"} · ${order.slot}`
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Row, {
							k: "Address",
							v: order.address
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "hero",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/track-order",
							children: "Track my order"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/shop",
							children: "Keep shopping"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 10
	}, this);
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
			className: "text-muted-foreground",
			children: k
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
			className: "text-right font-medium",
			children: v
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 10
	}, this);
}
//#endregion
export { OrderSuccess as component };
