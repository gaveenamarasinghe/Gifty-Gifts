import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as useShop, l as Button, y as currency } from "./router-DGbT_glc.mjs";
import { t as Badge } from "./badge-jFEf22J5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.orders-DFVsYUQO.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/dashboard.orders.tsx?tsr-split=component";
function Orders() {
	const { orders, cancelOrder } = useShop();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-3xl font-bold",
			children: "My orders"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-1 text-muted-foreground",
			children: "Every gift you've sent with Gifty."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 7
		}, this),
		orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-8 rounded-3xl border border-dashed border-border p-14 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-muted-foreground",
				children: "No orders yet."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				variant: "hero",
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/shop",
					children: "Send your first gift"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 30
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
			className: "mt-8 space-y-4",
			children: orders.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-display text-lg font-semibold",
							children: o.id
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-muted-foreground",
							children: new Date(o.date).toLocaleDateString("en-GB", {
								day: "numeric",
								month: "long",
								year: "numeric"
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							variant: o.status === "Cancelled" ? "destructive" : "secondary",
							className: "rounded-full",
							children: o.status
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-semibold text-primary",
							children: currency(o.total)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								size: "sm",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/dashboard/orders/$id",
									params: { id: o.id },
									children: "Details"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 39,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 19
							}, this), o.status !== "Cancelled" && o.status !== "Delivered" && /* @__PURE__ */ (void 0)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => cancelOrder(o.id),
								children: "Cancel"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 76
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 15
				}, this)
			}, o.id, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 28
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 18
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
//#endregion
export { Orders as component };
