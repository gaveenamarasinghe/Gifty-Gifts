import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { Q as Bell, l as Tag, o as Truck, z as Gift } from "../_libs/lucide-react.mjs";
import { l as Button, m as cn } from "./router-DGbT_glc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.notifications-CtAbJpSZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/dashboard.notifications.tsx?tsr-split=component";
var seed = [
	{
		id: "n1",
		icon: Truck,
		title: "Your order is out for delivery",
		time: "12 minutes ago",
		unread: true
	},
	{
		id: "n2",
		icon: Tag,
		title: "GIFTY10 — 10% off this weekend only",
		time: "Yesterday",
		unread: true
	},
	{
		id: "n3",
		icon: Gift,
		title: "Your wishlist item dropped in price",
		time: "3 days ago",
		unread: false
	},
	{
		id: "n4",
		icon: Bell,
		title: "Delivery confirmed for 14 July, 11:00–13:00",
		time: "Last week",
		unread: false
	}
];
function Notifications() {
	const [items, setItems] = (0, import_react.useState)(seed);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-wrap items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-3xl font-bold",
			children: "Notifications"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 11
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-1 text-muted-foreground",
			children: "Delivery updates and offers."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 36,
			columnNumber: 11
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			variant: "outline",
			onClick: () => setItems((p) => p.map((n) => ({
				...n,
				unread: false
			}))),
			children: "Mark all read"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
		className: "mt-8 space-y-3",
		children: items.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
			className: cn("flex items-center gap-4 rounded-3xl border border-border p-5 shadow-soft transition-smooth", n.unread ? "bg-accent" : "bg-card"),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-full gradient-primary text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(n.icon, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm font-semibold",
						children: n.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground",
						children: n.time
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 13
				}, this),
				n.unread && /* @__PURE__ */ (void 0)("span", {
					className: "h-2 w-2 rounded-full bg-primary",
					"aria-label": "Unread"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 26
				}, this)
			]
		}, n.id, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 25
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 10
	}, this);
}
//#endregion
export { Notifications as component };
