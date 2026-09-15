import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as Input, f as useAuth, l as Button, m as cn } from "./router-DGbT_glc.mjs";
import { t as Label } from "./label-DT6-2IZ-.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.settings-D04QyoVC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ui/switch.tsx";
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 18,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 10,
	columnNumber: 3
}, void 0));
Switch.displayName = Switch$1.displayName;
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/dashboard.settings.tsx?tsr-split=component";
function Settings() {
	const { logout } = useAuth();
	const [prefs, setPrefs] = (0, import_react.useState)({
		email: true,
		sms: false,
		offers: true
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Settings"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Notifications, password and account."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Notifications"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-5 space-y-4",
					children: [
						["email", "Email order updates"],
						["sms", "SMS delivery alerts"],
						["offers", "Occasional offers and new arrivals"]
					].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: key,
							className: "font-normal",
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
							id: key,
							checked: prefs[key],
							onCheckedChange: (v) => setPrefs((p) => ({
								...p,
								[key]: v
							}))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 15
						}, this)]
					}, key, true, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 162
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Change password"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					className: "mt-5 grid gap-4 sm:grid-cols-2",
					onSubmit: (e) => {
						e.preventDefault();
						toast.success("Password updated");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "mb-2 block",
							children: "Current password"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "password",
							required: true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "mb-2 block",
							children: "New password"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "password",
							required: true,
							minLength: 6
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "submit",
							variant: "hero",
							className: "sm:col-span-2 sm:w-fit",
							children: "Update password"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "rounded-3xl border border-destructive/30 bg-card p-7 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-xl font-semibold",
						children: "Danger zone"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Deleting your account removes your orders, addresses and wishlist permanently."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-5 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							onClick: () => logout(),
							children: "Sign out everywhere"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "destructive",
							onClick: () => toast.error("Account deletion requires email confirmation"),
							children: "Delete account"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 10
	}, this);
}
//#endregion
export { Settings as component };
