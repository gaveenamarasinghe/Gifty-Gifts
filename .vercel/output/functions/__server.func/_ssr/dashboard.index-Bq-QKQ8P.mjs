import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Package, L as Heart, n as Wallet } from "../_libs/lucide-react.mjs";
import { d as useShop, f as useAuth, l as Button, x as products, y as currency } from "./router-DGbT_glc.mjs";
import { a as CartesianGrid, i as Bar, n as YAxis, o as Tooltip, r as XAxis, s as ResponsiveContainer, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.index-Bq-QKQ8P.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/dashboard.index.tsx?tsr-split=component";
var spend = [
	{
		month: "Feb",
		total: 120
	},
	{
		month: "Mar",
		total: 210
	},
	{
		month: "Apr",
		total: 90
	},
	{
		month: "May",
		total: 305
	},
	{
		month: "Jun",
		total: 180
	},
	{
		month: "Jul",
		total: 260
	}
];
function DashboardHome() {
	const { user } = useAuth();
	const { orders, wishlist, recent } = useShop();
	const spent = orders.reduce((s, o) => s + o.total, 0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-3xl font-bold",
				children: [
					"Hello, ",
					user?.name?.split(" ")[0] ?? "gifter",
					" 👋"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Here's what's happening with your gifts."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						icon: Package,
						label: "Orders placed",
						value: String(orders.length)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						icon: Wallet,
						label: "Total spent",
						value: currency(spent)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						icon: Heart,
						label: "Wishlist items",
						value: String(wishlist.length)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Gifting over time"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 h-64",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart, {
							data: spend,
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "var(--border)",
									vertical: false
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
									dataKey: "month",
									stroke: "var(--muted-foreground)",
									fontSize: 12,
									tickLine: false,
									axisLine: false
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 57,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(YAxis, {
									stroke: "var(--muted-foreground)",
									fontSize: 12,
									tickLine: false,
									axisLine: false
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 58,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { contentStyle: {
									borderRadius: 16,
									border: "1px solid var(--border)",
									background: "var(--card)"
								} }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bar, {
									dataKey: "total",
									fill: "var(--primary)",
									radius: [
										10,
										10,
										0,
										0
									]
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 64,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-xl font-semibold",
						children: "Recent orders"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/dashboard/orders",
							children: "View all"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 9
				}, this), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-5 text-sm text-muted-foreground",
					children: "No orders yet — your first gift awaits."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 32
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-5 space-y-3",
					children: orders.slice(0, 3).map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
						className: "flex items-center justify-between rounded-2xl gradient-soft p-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-medium",
								children: o.id
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted-foreground",
								children: o.status
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-semibold text-primary",
								children: currency(o.total)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 17
							}, this)
						]
					}, o.id, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 42
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 18
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 7
			}, this),
			recent.length > 0 && /* @__PURE__ */ (void 0)("section", {
				className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
				children: [/* @__PURE__ */ (void 0)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Recently viewed"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "mt-5 flex flex-wrap gap-3",
					children: recent.map((id) => {
						const p = products.find((x) => x.id === id);
						if (!p) return null;
						return /* @__PURE__ */ (void 0)(Link, {
							to: "/product/$slug",
							params: { slug: p.slug },
							className: "flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm transition-smooth hover:border-primary",
							children: [
								/* @__PURE__ */ (void 0)("span", {
									"aria-hidden": true,
									children: p.emoji
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 19
								}, this),
								" ",
								p.name
							]
						}, id, true, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 18
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 29
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
}
function Stat({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-5 w-5 text-primary" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-4 font-display text-3xl font-bold",
				children: value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 115,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs uppercase tracking-widest text-muted-foreground",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 116,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 113,
		columnNumber: 10
	}, this);
}
//#endregion
export { DashboardHome as component };
