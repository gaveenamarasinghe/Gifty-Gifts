import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { C as useProducts, i as Route$9 } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
import { t as ProductGrid } from "./ProductCard-BSqik8dL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-Cu4_Xau8.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/category.$slug.tsx?tsr-split=component";
function CategoryPage() {
	const { category } = Route$9.useLoaderData();
	const { products } = useProducts();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: category.emoji,
		title: category.name,
		subtitle: category.blurb
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductGrid, { items: products.filter((p) => p.category === category.slug) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 9
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
export { CategoryPage as component };
