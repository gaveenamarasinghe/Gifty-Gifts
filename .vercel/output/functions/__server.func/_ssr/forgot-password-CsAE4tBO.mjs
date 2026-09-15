import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as Input, f as useAuth, l as Button } from "./router-DGbT_glc.mjs";
import { t as Label } from "./label-DT6-2IZ-.mjs";
import { t as AuthShell } from "./AuthShell-jSR90okw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-CsAE4tBO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/forgot-password.tsx?tsr-split=component";
function ForgotPassword() {
	const { forgotPassword } = useAuth();
	const [email, setEmail] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthShell, {
		title: "Forgot password",
		subtitle: "We'll email you a secure link to choose a new one.",
		footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/login",
			className: "font-semibold text-primary hover:underline",
			children: "Back to sign in"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 115
		}, this),
		children: sent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "rounded-2xl bg-accent p-4 text-sm text-accent-foreground",
			children: [
				"If an account exists for ",
				email,
				", a reset link is on its way."
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 15
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			className: "space-y-4",
			onSubmit: async (e) => {
				e.preventDefault();
				try {
					await forgotPassword(email);
				} finally {
					setSent(true);
					toast.success("Reset link sent");
				}
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
				className: "mb-2 block",
				children: "Email"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				type: "email",
				required: true,
				value: email,
				onChange: (e) => setEmail(e.target.value),
				placeholder: "you@example.com"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				type: "submit",
				variant: "hero",
				size: "lg",
				className: "w-full",
				children: "Send reset link"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 16
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 10
	}, this);
}
//#endregion
export { ForgotPassword as component };
