import { o as __toESM } from "../_runtime.mjs";
import { a as createUserWithEmailAndPassword, h as updateProfile, l as sendEmailVerification, o as deleteUser, p as signInWithPopup } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
import { D as googleProvider, T as facebookProvider, c as Input, l as Button, m as cn, w as auth } from "./router-DGbT_glc.mjs";
import { t as Label } from "./label-DT6-2IZ-.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { t as AuthShell } from "./AuthShell-jSR90okw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-V6YD1zot.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/register.tsx?tsr-split=component";
var API_URL = "http://localhost:5000";
var accountSchema = objectType({
	name: stringType().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
	email: stringType().email("Enter a valid email"),
	password: stringType().min(6, "Password must be at least 6 characters").max(72, "Password must be less than 72 characters"),
	role: enumType(["customer", "vendor"], { required_error: "Please select a role" })
});
var vendorSchema = objectType({
	shopName: stringType().min(2, "Shop name must be at least 2 characters").max(100, "Shop name must be less than 100 characters"),
	shopDescription: stringType().min(10, "Shop description must be at least 10 characters").max(500, "Shop description must be less than 500 characters"),
	address: stringType().min(5, "Please enter your shop address").max(250, "Address is too long"),
	openHours: stringType().min(3, "Please enter your opening hours").max(100, "Opening hours are too long"),
	phone: stringType().min(7, "Please enter a valid phone number").max(20, "Phone number is too long"),
	website: stringType().trim().optional().refine((value) => !value || /^https?:\/\/.+/.test(value), "Use a valid website URL")
});
var ROLE_OPTIONS = [{
	value: "customer",
	label: "Customer",
	description: "Browse and buy gifts"
}, {
	value: "vendor",
	label: "Vendor",
	description: "Sell products on Gifty"
}];
function Register() {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(1);
	const accountForm = useForm({
		resolver: u(accountSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			role: "customer"
		}
	});
	const vendorForm = useForm({
		resolver: u(vendorSchema),
		defaultValues: {
			shopName: "",
			shopDescription: "",
			address: "",
			openHours: "",
			phone: "",
			website: ""
		}
	});
	const selectedRole = accountForm.watch("role");
	async function handleNext() {
		if (!await accountForm.trigger([
			"name",
			"email",
			"password",
			"role"
		])) return;
		if (selectedRole === "vendor") {
			setStep(2);
			return;
		}
		await registerCustomer();
	}
	async function registerCustomer() {
		const data = accountForm.getValues();
		let firebaseUser = null;
		try {
			const credential = await createUserWithEmailAndPassword(auth, data.email, data.password);
			firebaseUser = credential.user;
			await updateProfile(credential.user, { displayName: data.name });
			const response = await fetch(`${API_URL}/api/auth/register`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					uid: credential.user.uid,
					email: data.email,
					name: data.name,
					role: "customer"
				})
			});
			const result = await response.json();
			if (!response.ok) throw new Error(result.message || "Backend registration failed");
			try {
				await sendEmailVerification(credential.user);
			} catch (verificationError) {
				console.error("Firebase verification email failed:", verificationError);
			}
			toast.success("Account created! Please verify your email.");
			navigate({ to: "/verify-email" });
		} catch (error) {
			if (firebaseUser) await deleteUser(firebaseUser).catch(() => {});
			throw error;
		}
	}
	async function registerVendor(data) {
		const accountData = accountForm.getValues();
		let firebaseUser = null;
		try {
			const credential = await createUserWithEmailAndPassword(auth, accountData.email, accountData.password);
			firebaseUser = credential.user;
			await updateProfile(credential.user, { displayName: accountData.name });
			const response = await fetch(`${API_URL}/api/auth/register`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					uid: credential.user.uid,
					email: accountData.email,
					name: accountData.name,
					role: "vendor",
					vendor: {
						shopName: data.shopName,
						shopDescription: data.shopDescription,
						address: data.address,
						openHours: data.openHours,
						phone: data.phone,
						website: data.website,
						name: data.shopName,
						location: data.address,
						hours: data.openHours,
						email: accountData.email
					}
				})
			});
			const result = await response.json();
			if (!response.ok) throw new Error(result.message || "Vendor registration failed");
			if (result.token) localStorage.setItem("gifty_token", result.token);
			if (result.user) localStorage.setItem("gifty_user", JSON.stringify(result.user));
			try {
				await sendEmailVerification(credential.user);
			} catch (verificationError) {
				console.error("Firebase verification email failed:", verificationError);
			}
			toast.success("Vendor account created successfully.");
			navigate({ to: "/vendor" });
		} catch (error) {
			if (firebaseUser) await deleteUser(firebaseUser).catch(() => {});
			throw error;
		}
	}
	async function registerGoogle() {
		await signInWithPopup(auth, googleProvider());
		toast.success("Google registration successful");
		navigate({ to: "/dashboard" });
	}
	async function registerFacebook() {
		await signInWithPopup(auth, facebookProvider());
		toast.success("Facebook registration successful");
		navigate({ to: "/dashboard" });
	}
	async function run(callback) {
		try {
			await callback();
		} catch (error) {
			let message = "Registration failed";
			switch (error.code) {
				case "auth/email-already-in-use":
					message = "This email already has an account";
					break;
				case "auth/invalid-email":
					message = "Invalid email address";
					break;
				case "auth/weak-password":
					message = "Password is too weak";
					break;
				case "auth/popup-closed-by-user":
					message = "Popup closed";
					break;
				default: message = error.message || message;
			}
			toast.error(message);
		}
	}
	if (step === 2 && selectedRole === "vendor") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthShell, {
		title: "Set up your shop",
		subtitle: "Tell us about your shop so customers can discover your products.",
		footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			"Already have an account?",
			" ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/login",
				className: "font-semibold text-primary hover:underline",
				children: "Sign in"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 289,
				columnNumber: 13
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 287,
			columnNumber: 132
		}, this),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			className: "space-y-4",
			noValidate: true,
			onSubmit: vendorForm.handleSubmit((data) => run(() => registerVendor(data))),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-6 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 flex-1 rounded-full bg-primary" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 297,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 flex-1 rounded-full bg-primary" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 298,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 296,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-medium text-muted-foreground",
						children: "STEP 2 OF 2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 302,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "mt-1 text-sm font-semibold",
						children: "Shop Information"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 304,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 301,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Shop Name" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 310,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						placeholder: "Gifty Creations",
						...vendorForm.register("shopName")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 312,
						columnNumber: 13
					}, this),
					vendorForm.formState.errors.shopName && /* @__PURE__ */ (void 0)("p", {
						className: "mt-1 text-xs text-destructive",
						children: vendorForm.formState.errors.shopName.message
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 314,
						columnNumber: 54
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 309,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Shop Description" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 322,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						placeholder: "Tell customers about your shop and products...",
						rows: 4,
						className: cn("flex w-full rounded-md border border-input", "bg-background px-3 py-2 text-sm", "ring-offset-background", "placeholder:text-muted-foreground", "focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-ring"),
						...vendorForm.register("shopDescription")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 324,
						columnNumber: 13
					}, this),
					vendorForm.formState.errors.shopDescription && /* @__PURE__ */ (void 0)("p", {
						className: "mt-1 text-xs text-destructive",
						children: vendorForm.formState.errors.shopDescription.message
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 326,
						columnNumber: 61
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 321,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Shop Address" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 334,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						placeholder: "123 Main Street, Colombo",
						...vendorForm.register("address")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 336,
						columnNumber: 13
					}, this),
					vendorForm.formState.errors.address && /* @__PURE__ */ (void 0)("p", {
						className: "mt-1 text-xs text-destructive",
						children: vendorForm.formState.errors.address.message
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 338,
						columnNumber: 53
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 333,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Contact Number" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 346,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						type: "tel",
						placeholder: "+94 77 123 4567",
						...vendorForm.register("phone")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 348,
						columnNumber: 13
					}, this),
					vendorForm.formState.errors.phone && /* @__PURE__ */ (void 0)("p", {
						className: "mt-1 text-xs text-destructive",
						children: vendorForm.formState.errors.phone.message
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 350,
						columnNumber: 51
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 345,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Opening Hours" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 358,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						placeholder: "Mon - Sat: 9:00 AM - 6:00 PM",
						...vendorForm.register("openHours")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 360,
						columnNumber: 13
					}, this),
					vendorForm.formState.errors.openHours && /* @__PURE__ */ (void 0)("p", {
						className: "mt-1 text-xs text-destructive",
						children: vendorForm.formState.errors.openHours.message
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 362,
						columnNumber: 55
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 357,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Website (optional)" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 370,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						type: "url",
						placeholder: "https://yourshop.com",
						...vendorForm.register("website")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 372,
						columnNumber: 13
					}, this),
					vendorForm.formState.errors.website && /* @__PURE__ */ (void 0)("p", {
						className: "mt-1 text-xs text-destructive",
						children: vendorForm.formState.errors.website.message
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 374,
						columnNumber: 53
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 369,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-2 gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setStep(1),
						disabled: vendorForm.formState.isSubmitting,
						children: "Back"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 382,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						disabled: vendorForm.formState.isSubmitting,
						children: vendorForm.formState.isSubmitting ? "Creating..." : "Create Vendor Account"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 386,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 381,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 293,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 287,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthShell, {
		title: "Create your account",
		subtitle: "Join Gifty and manage gifts, orders and wishlist.",
		footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			"Already have an account?",
			" ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/login",
				className: "font-semibold text-primary hover:underline",
				children: "Sign in"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 400,
				columnNumber: 11
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 398,
			columnNumber: 118
		}, this),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				className: "space-y-4",
				noValidate: true,
				onSubmit: accountForm.handleSubmit(handleNext),
				children: [
					selectedRole === "vendor" && /* @__PURE__ */ (void 0)("div", {
						className: "mb-6 flex items-center gap-2",
						children: [/* @__PURE__ */ (void 0)("div", { className: "h-1 flex-1 rounded-full bg-primary" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 408,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("div", { className: "h-1 flex-1 rounded-full bg-muted" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 409,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 407,
						columnNumber: 39
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "I want to register as" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 415,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-2 grid grid-cols-2 gap-3",
							children: ROLE_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: cn("cursor-pointer rounded-lg border p-3 text-sm transition-colors", selectedRole === option.value ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-primary/50"),
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "radio",
										value: option.value,
										className: "sr-only",
										...accountForm.register("role")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 419,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "block font-semibold",
										children: option.label
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 421,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "block text-xs text-muted-foreground",
										children: option.description
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 423,
										columnNumber: 17
									}, this)
								]
							}, option.value, true, {
								fileName: _jsxFileName,
								lineNumber: 418,
								columnNumber: 41
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 417,
							columnNumber: 11
						}, this),
						accountForm.formState.errors.role && /* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-xs text-destructive",
							children: accountForm.formState.errors.role.message
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 427,
							columnNumber: 49
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 414,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Full Name" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 435,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							placeholder: "John Smith",
							...accountForm.register("name")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 437,
							columnNumber: 11
						}, this),
						accountForm.formState.errors.name && /* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-xs text-destructive",
							children: accountForm.formState.errors.name.message
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 439,
							columnNumber: 49
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 434,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Email" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 447,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "email",
							placeholder: "you@example.com",
							...accountForm.register("email")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 449,
							columnNumber: 11
						}, this),
						accountForm.formState.errors.email && /* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-xs text-destructive",
							children: accountForm.formState.errors.email.message
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 451,
							columnNumber: 50
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 446,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Password" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 459,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "password",
							placeholder: "••••••••",
							...accountForm.register("password")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 461,
							columnNumber: 11
						}, this),
						accountForm.formState.errors.password && /* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-xs text-destructive",
							children: accountForm.formState.errors.password.message
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 463,
							columnNumber: 53
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 458,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						className: "w-full",
						disabled: accountForm.formState.isSubmitting,
						children: accountForm.formState.isSubmitting ? "Please wait..." : selectedRole === "vendor" ? "Next" : "Create Account"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 470,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 404,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "my-6 flex items-center gap-3 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px flex-1 bg-border" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 478,
						columnNumber: 9
					}, this),
					"or continue with",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px flex-1 bg-border" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 480,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 477,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => run(registerGoogle),
					children: "Google"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 484,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => run(registerFacebook),
					children: "Facebook"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 488,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 483,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 398,
		columnNumber: 10
	}, this);
}
//#endregion
export { Register as component };
