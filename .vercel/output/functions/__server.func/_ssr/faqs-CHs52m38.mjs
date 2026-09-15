import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { X as ChevronDown } from "../_libs/lucide-react.mjs";
import { b as faqs, m as cn } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faqs-CHs52m38.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ui/accordion.tsx";
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 13,
	columnNumber: 3
}, void 0));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 31,
			columnNumber: 7
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 22,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 21,
	columnNumber: 3
}, void 0));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("pb-4 pt-0", className),
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 46,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 41,
	columnNumber: 3
}, void 0));
AccordionContent.displayName = Content2.displayName;
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/faqs.tsx?tsr-split=component";
function Faqs() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: "Help",
		title: "Frequently asked",
		subtitle: "Can't find it? Our concierge replies within the hour."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion, {
		type: "single",
		collapsible: true,
		className: "mx-auto max-w-3xl",
		children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItem, {
			value: `item-${i}`,
			className: "border-border",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionTrigger, {
				className: "text-left font-display text-lg",
				children: f.q
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 15
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionContent, {
				className: "text-muted-foreground",
				children: f.a
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 15
			}, this)]
		}, f.q, true, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 31
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
export { Faqs as component };
