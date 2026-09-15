import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { I as House, b as Plus, s as Trash2 } from "../_libs/lucide-react.mjs";
import { c as Input, l as Button } from "./router-DGbT_glc.mjs";
import { t as Label } from "./label-DT6-2IZ-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.addresses-BB3krdtH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/dashboard.addresses.tsx?tsr-split=component";
var seed = [{
	id: "a1",
	label: "Home",
	line: "12 Rosebury Lane",
	city: "London",
	postcode: "SW1A 1AA"
}, {
	id: "a2",
	label: "Work",
	line: "4 Shoreditch High St",
	city: "London",
	postcode: "E1 6JJ"
}];
function Addresses() {
	const [list, setList] = (0, import_react.useState)(seed);
	const [form, setForm] = (0, import_react.useState)({
		label: "",
		line: "",
		city: "",
		postcode: ""
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-3xl font-bold",
			children: "Addresses"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 36,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-1 text-muted-foreground",
			children: "Saved addresses make checkout a two-tap affair."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2",
			children: list.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(House, { className: "h-5 w-5 text-primary" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "icon",
							variant: "ghost",
							"aria-label": `Delete ${a.label} address`,
							onClick: () => setList((p) => p.filter((x) => x.id !== a.id)),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "text-destructive" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 44,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-3 font-display text-lg font-semibold",
						children: a.label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							a.line,
							", ",
							a.city,
							" ",
							a.postcode
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 13
					}, this)
				]
			}, a.id, true, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 24
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			className: "mt-8 rounded-3xl border border-border bg-card p-7 shadow-soft",
			onSubmit: (e) => {
				e.preventDefault();
				setList((p) => [...p, {
					id: "a" + Date.now(),
					...form
				}]);
				setForm({
					label: "",
					line: "",
					city: "",
					postcode: ""
				});
				toast.success("Address saved");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Add an address"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-5 grid gap-4 sm:grid-cols-2",
					children: [
						["label", "Label (Home, Work…)"],
						["line", "Street address"],
						["city", "City"],
						["postcode", "Postcode"]
					].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						className: "mb-2 block",
						children: label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						required: true,
						value: form[key],
						onChange: (e) => setForm((f) => ({
							...f,
							[key]: e.target.value
						}))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 15
					}, this)] }, key, true, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 152
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "submit",
					variant: "hero",
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 11
					}, this), " Save address"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 10
	}, this);
}
//#endregion
export { Addresses as component };
