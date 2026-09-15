import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-BMK4AIo_.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/PageHeader.tsx";
/** Shared page header used by every inner page for consistent rhythm. */
function PageHeader({ eyebrow, title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative overflow-hidden gradient-soft",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "absolute inset-0 gradient-glow",
			"aria-hidden": true
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20",
			children: [
				eyebrow && /* @__PURE__ */ (void 0)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary",
					children: eyebrow
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-3 font-display text-4xl font-bold md:text-5xl",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				subtitle && /* @__PURE__ */ (void 0)("p", {
					className: "mt-4 max-w-2xl text-muted-foreground",
					children: subtitle
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 22
				}, this),
				children && /* @__PURE__ */ (void 0)("div", {
					className: "mt-6",
					children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 22
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
/** Section heading for homepage rails. */
function SectionHeading({ eyebrow, title, action }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mb-8 flex flex-wrap items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [eyebrow && /* @__PURE__ */ (void 0)("p", {
			className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary",
			children: eyebrow
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 44,
			columnNumber: 11
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "mt-2 font-display text-3xl font-bold md:text-4xl",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 42,
			columnNumber: 7
		}, this), action]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 5
	}, this);
}
/** Standard page shell: constrained width + vertical rhythm. */
function Section({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: `mx-auto max-w-7xl px-4 py-16 sm:px-6 ${className}`,
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 5
	}, this);
}
//#endregion
export { Section as n, SectionHeading as r, PageHeader as t };
