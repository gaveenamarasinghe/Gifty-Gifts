import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { z as Gift } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AuthShell-jSR90okw.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/AuthShell.tsx";
/** Shared shell for login / register / password pages. */
function AuthShell({ title, subtitle, children, footer }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative overflow-hidden gradient-soft",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "absolute inset-0 gradient-glow",
			"aria-hidden": true
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "mx-auto flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid h-10 w-10 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gift, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-display text-2xl font-bold",
						children: "Gifty"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 rounded-[2rem] border border-border bg-card p-8 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-3xl font-bold",
							children: title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: subtitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 29,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-7",
							children
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				footer && /* @__PURE__ */ (void 0)("div", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: footer
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 20
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
//#endregion
export { AuthShell as t };
