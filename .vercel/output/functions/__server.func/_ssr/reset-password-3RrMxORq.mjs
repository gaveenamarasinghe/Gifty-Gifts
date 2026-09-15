import { o as __toESM } from "../_runtime.mjs";
import { g as verifyPasswordResetCode, i as confirmPasswordReset } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as getFirebaseAuth, O as isFirebaseConfigured, c as Input, l as Button } from "./router-DGbT_glc.mjs";
import { t as Label } from "./label-DT6-2IZ-.mjs";
import { t as AuthShell } from "./AuthShell-jSR90okw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-3RrMxORq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/reset-password.tsx?tsr-split=component";
function ResetPassword() {
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const oob = new URLSearchParams(window.location.search).get("oobCode");
		setCode(oob);
		const auth = getFirebaseAuth();
		if (oob && auth) verifyPasswordResetCode(auth, oob).catch(() => toast.error("This reset link has expired"));
	}, []);
	async function submit(e) {
		e.preventDefault();
		if (password.length < 6) return toast.error("Password must be at least 6 characters");
		if (password !== confirm) return toast.error("Passwords don't match");
		const auth = getFirebaseAuth();
		if (isFirebaseConfigured && auth && code) try {
			await confirmPasswordReset(auth, code, password);
		} catch {
			return toast.error("Could not reset password — request a new link");
		}
		toast.success("Password updated — please sign in");
		navigate({ to: "/login" });
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthShell, {
		title: "New password",
		subtitle: "Choose something you haven't used before.",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			className: "space-y-4",
			onSubmit: submit,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
					className: "mb-2 block",
					children: "New password"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					type: "password",
					value: password,
					onChange: (e) => setPassword(e.target.value),
					required: true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
					className: "mb-2 block",
					children: "Confirm password"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					type: "password",
					value: confirm,
					onChange: (e) => setConfirm(e.target.value),
					required: true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "submit",
					variant: "hero",
					size: "lg",
					className: "w-full",
					children: "Update password"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 10
	}, this);
}
//#endregion
export { ResetPassword as component };
