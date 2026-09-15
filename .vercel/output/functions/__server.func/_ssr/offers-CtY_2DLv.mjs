import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { g as byTag, v as coupons } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
import { t as ProductGrid } from "./ProductCard-BSqik8dL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/offers-CtY_2DLv.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/offers.tsx?tsr-split=component";
function Offers() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			eyebrow: "Save more",
			title: "Offers & coupons",
			subtitle: "Live codes you can use at checkout today."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
			className: "!pb-8",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: coupons.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-3xl border border-dashed border-primary/40 bg-card p-8 text-center shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-display text-3xl font-bold text-gradient",
						children: c.code
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 10,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: c.label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 11,
						columnNumber: 15
					}, this)]
				}, c.code, true, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 29
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 7,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
			className: "!pt-0",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mb-8 font-display text-3xl font-bold",
				children: "Gifts on offer"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductGrid, { items: byTag("offer") }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { Offers as component };
