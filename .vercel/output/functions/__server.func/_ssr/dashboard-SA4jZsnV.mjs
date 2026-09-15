import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link, p as Outlet, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as LogOut, C as Package, D as MapPin, L as Heart, M as LayoutDashboard, Q as Bell, U as CreditCard, g as Settings, i as User } from "../_libs/lucide-react.mjs";
import { f as useAuth, l as Button } from "./router-DGbT_glc.mjs";
import { n as Section } from "./PageHeader-BMK4AIo_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-SA4jZsnV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/dashboard.tsx?tsr-split=component";
var links = [
	{
		to: "/dashboard",
		label: "Overview",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/dashboard/orders",
		label: "My orders",
		icon: Package
	},
	{
		to: "/dashboard/addresses",
		label: "Addresses",
		icon: MapPin
	},
	{
		to: "/dashboard/payments",
		label: "Payment history",
		icon: CreditCard
	},
	{
		to: "/dashboard/notifications",
		label: "Notifications",
		icon: Bell
	},
	{
		to: "/dashboard/profile",
		label: "Profile",
		icon: User
	},
	{
		to: "/dashboard/settings",
		label: "Settings",
		icon: Settings
	}
];
function DashboardLayout() {
	const { user, loading, logout } = useAuth();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!loading && !user) navigate({ to: "/login" });
	}, [
		loading,
		user,
		navigate
	]);
	if (loading || !user) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-muted-foreground",
		children: "Loading your dashboard…"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 53,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 52,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
		className: "grid gap-8 lg:grid-cols-[260px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			className: "h-fit rounded-3xl border border-border bg-card p-5 shadow-soft lg:sticky lg:top-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3 rounded-2xl gradient-soft p-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid h-11 w-11 place-items-center rounded-full gradient-primary text-lg font-bold text-primary-foreground",
						children: (user.name ?? user.email ?? "G").charAt(0).toUpperCase()
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "truncate font-semibold",
							children: user.name ?? "Gifty customer"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: user.email
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "mt-4 flex flex-col gap-1",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: l.to,
						activeOptions: { exact: l.exact },
						className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-smooth hover:bg-accent hover:text-accent-foreground",
						activeProps: { className: "bg-accent text-accent-foreground" },
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(l.icon, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 15
							}, this),
							" ",
							l.label
						]
					}, l.to, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 27
					}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/wishlist",
						className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-smooth hover:bg-accent hover:text-accent-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 13
						}, this), " Wishlist"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					className: "mt-4 w-full",
					onClick: async () => {
						await logout();
						navigate({ to: "/" });
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 11
					}, this), " Sign out"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 92,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 91,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 10
	}, this);
}
//#endregion
export { DashboardLayout as component };
