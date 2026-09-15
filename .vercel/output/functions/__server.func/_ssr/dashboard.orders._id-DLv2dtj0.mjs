import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { d as useShop, l as Button, n as Route, u as getProduct, y as currency } from "./router-DGbT_glc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.orders._id-DLv2dtj0.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/dashboard.orders.$id.tsx?tsr-split=component";
function OrderDetails() {
	const { id } = Route.useParams();
	const { orders } = useShop();
	const order = orders.find((o) => o.id === id);
	if (!order) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
		className: "font-display text-3xl font-bold",
		children: "Order not found"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 9
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
		asChild: true,
		variant: "outline",
		className: "mt-6",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/dashboard/orders",
			children: "Back to orders"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/dashboard/orders",
			className: "text-sm text-primary hover:underline",
			children: "← All orders"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "mt-4 font-display text-3xl font-bold",
			children: ["Order ", order.id]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-1 text-muted-foreground",
			children: order.status
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-8 rounded-3xl border border-border bg-card p-7 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Items"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-4 space-y-3",
					children: order.lines.map((l) => {
						const p = getProduct(l.productId);
						if (!p) return null;
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex items-center gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "grid h-11 w-11 place-items-center rounded-xl gradient-soft text-xl",
									"aria-hidden": true,
									children: p.emoji
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex-1",
									children: [
										p.name,
										" × ",
										l.qty,
										" ",
										l.giftWrap && /* @__PURE__ */ (void 0)("em", {
											className: "text-primary",
											children: "· gift wrapped"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 42,
											columnNumber: 34
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 40,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-medium",
									children: currency(p.price * l.qty)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 44,
									columnNumber: 17
								}, this)
							]
						}, l.productId, true, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 18
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
					className: "mt-6 space-y-2 border-t border-border pt-5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
							k: "Delivery",
							v: `${order.deliveryDate || "Next available"} · ${order.slot}`
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
							k: "Address",
							v: order.address
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
							k: "Payment",
							v: order.payment
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 11
						}, this),
						order.message && /* @__PURE__ */ (void 0)(Row, {
							k: "Gift note",
							v: order.message
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 29
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
							k: "Total paid",
							v: currency(order.total)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "hero",
						onClick: () => toast.success("Invoice PDF emailed to you"),
						children: "Download invoice"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/track-order",
							children: "Track this order"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 10
	}, this);
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex justify-between gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
			className: "text-muted-foreground",
			children: k
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 74,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
			className: "text-right font-medium",
			children: v
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 75,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 73,
		columnNumber: 10
	}, this);
}
//#endregion
export { OrderDetails as component };
