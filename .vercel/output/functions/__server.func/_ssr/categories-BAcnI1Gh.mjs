import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as categories, h as byCategory } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-BAcnI1Gh.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/categories.tsx?tsr-split=component";
function Categories() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: "Browse",
		title: "Gift categories",
		subtitle: "Nine curated worlds of gifting — every one finished by hand in our studio."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
		children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/category/$slug",
			params: { slug: c.slug },
			className: "group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid aspect-[16/10] place-items-center gradient-soft text-6xl",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					"aria-hidden": true,
					className: "transition-smooth group-hover:scale-110",
					children: c.emoji
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 17
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 15
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-xl font-semibold",
						children: c.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: c.blurb
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-3 text-xs uppercase tracking-widest text-primary",
						children: [byCategory(c.slug).length, " gifts"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 17
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 15
			}, this)]
		}, c.slug, true, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 32
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { Categories as component };
