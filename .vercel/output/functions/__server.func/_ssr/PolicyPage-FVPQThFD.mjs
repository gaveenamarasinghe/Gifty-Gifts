import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PolicyPage-FVPQThFD.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/PolicyPage.tsx";
/** Shared layout for the four legal/policy pages. */
function PolicyPage({ title, intro, sections, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: "Legal",
		title,
		subtitle: intro
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
		className: "!max-w-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "space-y-8",
			children: [sections.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display text-xl font-semibold",
				children: s.heading
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 15
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 leading-relaxed text-muted-foreground",
				children: s.body
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 15
			}, this)] }, s.heading, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 13
			}, this)), children]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-12 text-xs text-muted-foreground",
			children: [
				"Last updated ",
				(/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
					month: "long",
					year: "numeric"
				}),
				"."
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
//#endregion
export { PolicyPage as t };
