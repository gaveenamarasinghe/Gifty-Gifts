import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as useShop, l as Button, x as products } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
import { t as ProductGrid } from "./ProductCard-BSqik8dL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-CoSHfztk.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/wishlist.tsx?tsr-split=component";
function Wishlist() {
	const { wishlist } = useShop();
	const items = products.filter((p) => wishlist.includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: "Saved",
		title: "Your wishlist",
		subtitle: "Gifts you've kept an eye on."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-3xl border border-dashed border-border p-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-5xl",
				"aria-hidden": true,
				children: "💝"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 13
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-4 text-muted-foreground",
				children: "Nothing saved yet."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 13
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				variant: "hero",
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/shop",
					children: "Find something lovely"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 15
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 13
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 31
	}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductGrid, { items }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 20
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
//#endregion
export { Wishlist as component };
