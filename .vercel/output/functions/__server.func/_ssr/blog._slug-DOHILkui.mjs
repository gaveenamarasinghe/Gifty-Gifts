import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Route$10 } from "./router-DGbT_glc.mjs";
import { n as Section } from "./PageHeader-BMK4AIo_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-DOHILkui.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/blog.$slug.tsx?tsr-split=component";
function BlogPost() {
	const { post } = Route$10.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
		className: "!max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/blog",
				className: "text-sm text-primary hover:underline",
				children: "← Back to the journal"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-8 text-6xl",
				"aria-hidden": true,
				children: post.emoji
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-4 font-display text-4xl font-bold md:text-5xl",
				children: post.title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: [
					new Date(post.date).toLocaleDateString("en-GB", {
						day: "numeric",
						month: "long",
						year: "numeric"
					}),
					" ",
					"· ",
					post.readingTime,
					" read"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 space-y-5 leading-relaxed text-muted-foreground",
				children: post.body.map((para, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: para }, i, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 67
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
//#endregion
export { BlogPost as component };
