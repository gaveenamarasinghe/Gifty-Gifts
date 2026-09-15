import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { D as MapPin, O as Mail, x as Phone } from "../_libs/lucide-react.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
import { c as Input, l as Button } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
import { t as Label } from "./label-DT6-2IZ-.mjs";
import { t as Textarea } from "./textarea-BRU6zi2e.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D57mN6Wu.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/contact.tsx?tsr-split=component";
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(80),
	email: stringType().trim().email("Enter a valid email").max(255),
	subject: stringType().trim().min(3, "Add a subject").max(120),
	message: stringType().trim().min(10, "Tell us a little more").max(1e3)
});
function Contact() {
	const form = useForm({ resolver: u(schema) });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: "Say hello",
		title: "Contact us",
		subtitle: "Our gift concierge replies within the hour, seven days a week."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
		className: "grid gap-10 lg:grid-cols-[1fr_360px]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			noValidate: true,
			onSubmit: form.handleSubmit(() => {
				toast.success("Message sent — we'll reply within the hour.");
				form.reset();
			}),
			className: "space-y-5 rounded-3xl border border-border bg-card p-8 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "mb-2 block",
							children: "Name"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							...form.register("name"),
							placeholder: "Alex Morgan"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Err, { msg: form.formState.errors.name?.message }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "mb-2 block",
							children: "Email"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "email",
							...form.register("email"),
							placeholder: "alex@example.com"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Err, { msg: form.formState.errors.email?.message }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						className: "mb-2 block",
						children: "Subject"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						...form.register("subject"),
						placeholder: "Bespoke hamper for 40 people"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Err, { msg: form.formState.errors.subject?.message }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						className: "mb-2 block",
						children: "Message"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
						rows: 6,
						...form.register("message"),
						className: "rounded-2xl"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Err, { msg: form.formState.errors.message?.message }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "submit",
					variant: "hero",
					size: "lg",
					children: "Send message"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			className: "space-y-4",
			children: [
				{
					icon: Mail,
					label: "hello@gifty.shop",
					sub: "Email us"
				},
				{
					icon: Phone,
					label: "+1 555 0100",
					sub: "Mon–Sun, 8am–8pm"
				},
				{
					icon: MapPin,
					label: "12 Rosebury Lane, London",
					sub: "Studio & pickup"
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(c.icon, { className: "h-5 w-5 text-primary" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-semibold",
					children: c.label
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 17
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs text-muted-foreground",
					children: c.sub
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 17
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 15
				}, this)]
			}, c.label, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 21
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 10
	}, this);
}
function Err({ msg }) {
	return msg ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "mt-1.5 text-xs text-destructive",
		children: msg
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 85,
		columnNumber: 16
	}, this) : null;
}
//#endregion
export { Contact as component };
