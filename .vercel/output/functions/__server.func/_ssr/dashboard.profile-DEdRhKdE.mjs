import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as Input, f as useAuth, l as Button } from "./router-DGbT_glc.mjs";
import { t as Label } from "./label-DT6-2IZ-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.profile-DEdRhKdE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/dashboard.profile.tsx?tsr-split=component";
function Profile() {
	const { user } = useAuth();
	const [name, setName] = (0, import_react.useState)(user?.name ?? "");
	const [phone, setPhone] = (0, import_react.useState)("+1 555 0100");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-3xl font-bold",
			children: "Profile"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-1 text-muted-foreground",
			children: "How we address you and where we reach you."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			className: "mt-8 rounded-3xl border border-border bg-card p-7 shadow-soft",
			onSubmit: (e) => {
				e.preventDefault();
				toast.success("Profile updated");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid h-16 w-16 place-items-center rounded-full gradient-primary text-2xl font-bold text-primary-foreground",
						children: (name || user?.email || "G").charAt(0).toUpperCase()
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => toast.message("Avatar upload goes to Cloudinary via /api/upload"),
						children: "Change avatar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "mb-2 block",
							children: "Full name"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							value: name,
							onChange: (e) => setName(e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "mb-2 block",
							children: "Email"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							value: user?.email ?? "",
							readOnly: true,
							className: "bg-muted"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "mb-2 block",
							children: "Phone"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							value: phone,
							onChange: (e) => setPhone(e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "mb-2 block",
							children: "Email verified"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							value: user?.emailVerified ? "Yes" : "Pending",
							readOnly: true,
							className: "bg-muted"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "submit",
					variant: "hero",
					className: "mt-6",
					children: "Save changes"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 10
	}, this);
}
//#endregion
export { Profile as component };
