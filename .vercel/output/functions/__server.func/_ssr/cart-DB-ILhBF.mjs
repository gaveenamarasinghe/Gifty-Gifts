import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Plus, s as Trash2, w as Minus } from "../_libs/lucide-react.mjs";
import { c as Input, d as useShop, l as Button, u as getProduct, y as currency } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
import { t as Checkbox } from "./checkbox-D7gowe3i.mjs";
import { t as Label } from "./label-DT6-2IZ-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-DB-ILhBF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/cart.tsx?tsr-split=component";
function Cart() {
	const { cart, setQty, removeFromCart, toggleGiftWrap, totals, applyCoupon, coupon, removeCoupon } = useShop();
	const [code, setCode] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: "Almost there",
		title: "Your basket"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
		className: "grid gap-10 lg:grid-cols-[1fr_380px]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "space-y-4",
			children: [cart.length === 0 && /* @__PURE__ */ (void 0)("div", {
				className: "rounded-3xl border border-dashed border-border p-16 text-center",
				children: [
					/* @__PURE__ */ (void 0)("p", {
						className: "text-5xl",
						"aria-hidden": true,
						children: "🛍️"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Your basket is empty."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)(Button, {
						asChild: true,
						variant: "hero",
						className: "mt-6",
						children: /* @__PURE__ */ (void 0)(Link, {
							to: "/shop",
							children: "Start gifting"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 33
			}, this), cart.map((line) => {
				const p = getProduct(line.productId);
				if (!p) return null;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-5 rounded-3xl border border-border bg-card p-5 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "grid h-20 w-20 shrink-0 place-items-center rounded-2xl gradient-soft text-4xl",
							"aria-hidden": true,
							children: p.emoji
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-40 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/product/$slug",
									params: { slug: p.slug },
									className: "font-display text-lg font-semibold hover:text-primary",
									children: p.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm text-muted-foreground",
									children: [currency(p.price), " each"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 50,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-2 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
										id: `wrap-${p.id}`,
										checked: line.giftWrap,
										onCheckedChange: () => toggleGiftWrap(p.id)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 52,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										htmlFor: `wrap-${p.id}`,
										className: "cursor-pointer text-xs font-normal",
										children: "Add luxury gift wrapping (+$6)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 53,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 51,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center rounded-full border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => setQty(p.id, line.qty - 1),
									"aria-label": "Decrease quantity",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "w-8 text-center text-sm font-semibold",
									children: line.qty
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 62,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => setQty(p.id, line.qty + 1),
									"aria-label": "Increase quantity",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 64,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "w-20 text-right font-semibold",
							children: currency(p.price * line.qty)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => removeFromCart(p.id),
							"aria-label": `Remove ${p.name}`,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "text-destructive" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 17
						}, this)
					]
				}, line.productId, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 18
				}, this);
			})]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			className: "h-fit rounded-3xl border border-border bg-card p-7 shadow-card lg:sticky lg:top-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Order summary"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-5 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						value: code,
						onChange: (e) => setCode(e.target.value),
						placeholder: "Coupon code",
						"aria-label": "Coupon code",
						className: "rounded-full"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "soft",
						onClick: () => applyCoupon(code),
						children: "Apply"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 11
				}, this),
				coupon && /* @__PURE__ */ (void 0)("button", {
					onClick: removeCoupon,
					className: "mt-2 text-xs text-primary underline",
					children: ["Remove coupon ", coupon]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 22
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
					className: "mt-6 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
							label: "Subtotal",
							value: currency(totals.subtotal)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 13
						}, this),
						totals.discount > 0 && /* @__PURE__ */ (void 0)(Row, {
							label: "Discount",
							value: `−${currency(totals.discount)}`
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 37
						}, this),
						totals.wrap > 0 && /* @__PURE__ */ (void 0)(Row, {
							label: "Gift wrapping",
							value: currency(totals.wrap)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 33
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
							label: "Shipping",
							value: totals.shipping === 0 ? "Free" : currency(totals.shipping)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
							label: "Tax (5%)",
							value: currency(totals.tax)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "border-t border-border pt-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
								label: "Total",
								value: currency(totals.total),
								bold: true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 95,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 88,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					variant: "hero",
					size: "lg",
					className: "mt-6 w-full",
					disabled: cart.length === 0,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/checkout",
						children: "Proceed to checkout"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 text-center text-xs text-muted-foreground",
					children: "Free express shipping over $120"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 75,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 10
	}, this);
}
function Row({ label, value, bold }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
			className: bold ? "font-display text-lg font-semibold" : "text-muted-foreground",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 119,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
			className: bold ? "font-display text-lg font-bold text-primary" : "font-medium",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 122,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 118,
		columnNumber: 10
	}, this);
}
//#endregion
export { Cart as component };
