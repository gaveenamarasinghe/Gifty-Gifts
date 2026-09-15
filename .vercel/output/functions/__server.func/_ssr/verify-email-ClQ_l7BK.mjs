import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link, v as useNavigate, y as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as MailCheck, q as CircleCheckBig } from "../_libs/lucide-react.mjs";
import { t as AuthShell } from "./AuthShell-jSR90okw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify-email-ClQ_l7BK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/verify-email.tsx?tsr-split=component";
var REDIRECT_DELAY_MS = 2500;
function VerifyEmail() {
	const navigate = useNavigate();
	const isVerified = useSearch({ from: "/verify-email" }).status === "success";
	(0, import_react.useEffect)(() => {
		if (!isVerified) return;
		const timeout = setTimeout(() => {
			navigate({ to: "/" });
		}, REDIRECT_DELAY_MS);
		return () => clearTimeout(timeout);
	}, [isVerified, navigate]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthShell, {
		title: isVerified ? "Email verified 🎉" : "Check your inbox",
		subtitle: isVerified ? "Your Gifty account is now active." : "We've sent you a verification link.",
		footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/",
			className: "font-semibold text-primary hover:underline",
			children: "Go home"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 191
		}, this),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col items-center text-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: `flex h-16 w-16 items-center justify-center rounded-full transition-colors ${isVerified ? "bg-green-500/10" : "bg-primary/10"}`,
				children: isVerified ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheckBig, { className: "h-9 w-9 text-green-500" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 25
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MailCheck, { className: "h-9 w-9 text-primary" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 78
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-5 text-sm text-muted-foreground",
				children: isVerified ? "Redirecting you to Gifty home..." : "Click the verification link in your email to activate your account."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 10
	}, this);
}
//#endregion
export { VerifyEmail as component };
