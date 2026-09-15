import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as posts } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-D1ok_e58.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/blog.tsx?tsr-split=component";
function Blog() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: "Journal",
		title: "Ideas & guides",
		subtitle: "Written by the people tying the ribbons."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/blog/$slug",
			params: { slug: p.slug },
			className: "group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid aspect-[16/9] place-items-center gradient-soft text-6xl",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					"aria-hidden": true,
					className: "transition-smooth group-hover:scale-110",
					children: p.emoji
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
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: [
							new Date(p.date).toLocaleDateString("en-GB", {
								day: "numeric",
								month: "long",
								year: "numeric"
							}),
							" ",
							"· ",
							p.readingTime
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "mt-2 font-display text-xl font-semibold leading-snug",
						children: p.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: p.excerpt
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 17
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 15
			}, this)]
		}, p.slug, true, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 27
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
export { Blog as component };
