import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { d as useShop, m as cn, y as currency } from "./router-DGbT_glc.mjs";
import { t as Badge } from "./badge-jFEf22J5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.payments-DMbOwBjZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ui/table.tsx";
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 7
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 7,
	columnNumber: 5
}, void 0));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 18,
	columnNumber: 3
}, void 0));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 26,
	columnNumber: 3
}, void 0));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 34,
	columnNumber: 3
}, void 0));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 44,
	columnNumber: 5
}, void 0));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 60,
	columnNumber: 3
}, void 0));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 75,
	columnNumber: 3
}, void 0));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 90,
	columnNumber: 3
}, void 0));
TableCaption.displayName = "TableCaption";
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/dashboard.payments.tsx?tsr-split=component";
function Payments() {
	const { orders } = useShop();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-3xl font-bold",
			children: "Payment history"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 10,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-1 text-muted-foreground",
			children: "Every transaction on your Gifty account."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 11,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-soft",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Order" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 15
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Date" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 15
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Method" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 15
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Status" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 15
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
					className: "text-right",
					children: "Amount"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 15
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 13
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: [orders.length === 0 && /* @__PURE__ */ (void 0)(TableRow, { children: /* @__PURE__ */ (void 0)(TableCell, {
				colSpan: 5,
				className: "py-10 text-center text-muted-foreground",
				children: "No payments yet."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 17
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 37
			}, this), orders.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					className: "font-medium",
					children: o.id
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: new Date(o.date).toLocaleDateString("en-GB") }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					className: "capitalize",
					children: o.payment
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
					variant: o.status === "Cancelled" ? "destructive" : "secondary",
					className: "rounded-full",
					children: o.status === "Cancelled" ? "Refunded" : "Paid"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 19
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					className: "text-right font-semibold text-primary",
					children: currency(o.total)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 17
				}, this)
			] }, o.id, true, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 30
			}, this))] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
//#endregion
export { Payments as component };
