import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
import { c as Input, f as useAuth, l as Button } from "./router-DGbT_glc.mjs";
import { t as Label } from "./label-DT6-2IZ-.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { t as AuthShell } from "./AuthShell-jSR90okw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-62Ml36Ye.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/login.tsx?tsr-split=component";
var schema = objectType({
	email: stringType().trim().email("Enter a valid email").max(255),
	password: stringType().min(6, "Password must be at least 6 characters").max(72)
});
function Login() {
	const navigate = useNavigate();
	const { login, loginWithGoogle, loginWithFacebook, demoMode } = useAuth();
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			email: "",
			password: ""
		}
	});
	async function run(action) {
		try {
			await action();
			toast.success("Welcome back to Gifty");
			navigate({ to: "/dashboard" });
		} catch (error) {
			let message = "Could not sign in";
			switch (error.code) {
				case "auth/user-not-found":
					message = "No account found with this email";
					break;
				case "auth/wrong-password":
					message = "Incorrect password";
					break;
				case "auth/invalid-credential":
					message = "Invalid email or password";
					break;
				case "auth/popup-closed-by-user":
					message = "Login popup closed";
					break;
				case "auth/popup-blocked":
					message = "Popup blocked by browser";
					break;
				case "auth/network-request-failed":
					message = "Network error. Try again.";
					break;
				default: message = error.message || message;
			}
			toast.error(message);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthShell, {
		title: "Welcome back",
		subtitle: "Sign in to track orders, save gifts and check out faster.",
		footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			"New to Gifty?",
			" ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/register",
				className: "font-semibold text-primary hover:underline",
				children: "Create an account"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 11
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 66,
			columnNumber: 119
		}, this),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				noValidate: true,
				className: "space-y-4",
				onSubmit: form.handleSubmit((values) => run(() => login(values.email, values.password))),
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "mb-2 block",
							children: "Email"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "email",
							placeholder: "you@example.com",
							...form.register("email")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 11
						}, this),
						form.formState.errors.email && /* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-xs text-destructive",
							children: form.formState.errors.email.message
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 43
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mb-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Password" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/forgot-password",
								className: "text-xs text-primary hover:underline",
								children: "Forgot?"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "password",
							placeholder: "••••••••",
							...form.register("password")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 11
						}, this),
						form.formState.errors.password && /* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-xs text-destructive",
							children: form.formState.errors.password.message
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 46
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						variant: "hero",
						size: "lg",
						className: "w-full",
						disabled: form.formState.isSubmitting,
						children: "Sign in"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "my-6 flex items-center gap-3 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px flex-1 bg-border" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 9
					}, this),
					"or continue with",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px flex-1 bg-border" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					onClick: () => run(loginWithGoogle),
					children: "Google"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					onClick: () => run(loginWithFacebook),
					children: "Facebook"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 7
			}, this),
			demoMode && /* @__PURE__ */ (void 0)("p", {
				className: "mt-6 rounded-2xl bg-accent p-3 text-center text-xs text-accent-foreground",
				children: "Demo mode enabled. Firebase keys are not configured."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 118,
				columnNumber: 20
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 66,
		columnNumber: 10
	}, this);
}
//#endregion
export { Login as component };
