import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as ChevronUp, X as ChevronDown, Z as Check } from "../_libs/lucide-react.mjs";
import { C as useProducts, _ as categories, c as Input, l as Button, m as cn, o as Route$17 } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
import { t as ProductGrid } from "./ProductCard-BSqik8dL.mjs";
import { t as Checkbox } from "./checkbox-D7gowe3i.mjs";
import { t as Label } from "./label-DT6-2IZ-.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-iys5w2k3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ui/slider.tsx";
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderRange, { className: "absolute h-full bg-primary" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 16,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 15,
		columnNumber: 5
	}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 18,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 10,
	columnNumber: 3
}, void 0));
Slider.displayName = Slider$1.displayName;
var _jsxFileName$1 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ui/select.tsx";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4 opacity-50" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 29,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 28,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 19,
	columnNumber: 3
}, void 0));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronUp, { className: "h-4 w-4" }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 44,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 39,
	columnNumber: 3
}, void 0));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4" }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 58,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 53,
	columnNumber: 3
}, void 0));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollUpButton, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 79,
			columnNumber: 7
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 80,
			columnNumber: 7
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollDownButton, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 89,
			columnNumber: 7
		}, void 0)
	]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 68,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 67,
	columnNumber: 3
}, void 0));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 99,
	columnNumber: 3
}, void 0));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 121,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 120,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 119,
		columnNumber: 5
	}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItemText, { children }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 124,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 111,
	columnNumber: 3
}, void 0));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 133,
	columnNumber: 3
}, void 0));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/shop.tsx?tsr-split=component";
var PER_PAGE = 8;
function Shop() {
	const search = Route$17.useSearch();
	const navigate = useNavigate();
	const { products } = useProducts();
	const [q, setQ] = (0, import_react.useState)(search.q ?? "");
	const [cats, setCats] = (0, import_react.useState)(search.category ? [search.category] : []);
	const [maxPrice, setMaxPrice] = (0, import_react.useState)(150);
	const [minRating, setMinRating] = (0, import_react.useState)(0);
	const [inStock, setInStock] = (0, import_react.useState)(false);
	const [sort, setSort] = (0, import_react.useState)("popular");
	const [page, setPage] = (0, import_react.useState)(1);
	const filtered = (0, import_react.useMemo)(() => {
		let list = products.filter((p) => (q === "" || (p.name + p.description).toLowerCase().includes(q.toLowerCase())) && (cats.length === 0 || cats.includes(p.category)) && p.price <= maxPrice && p.rating >= minRating && (!inStock || p.stock > 0));
		list = [...list].sort((a, b) => {
			if (sort === "price-asc") return a.price - b.price;
			if (sort === "price-desc") return b.price - a.price;
			if (sort === "rating") return b.rating - a.rating;
			return b.reviews - a.reviews;
		});
		return list;
	}, [
		products,
		q,
		cats,
		maxPrice,
		minRating,
		inStock,
		sort
	]);
	const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
	const current = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
	function toggleCat(slug) {
		setPage(1);
		setCats((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: "The collection",
		title: "Shop all gifts",
		subtitle: "Eighteen studio-finished gifts, filtered exactly how you like them."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
		className: "grid gap-10 lg:grid-cols-[280px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			className: "h-fit rounded-3xl border border-border bg-card p-6 shadow-soft lg:sticky lg:top-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Filters"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						htmlFor: "shop-search",
						children: "Search"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						id: "shop-search",
						value: q,
						onChange: (e) => {
							setQ(e.target.value);
							setPage(1);
							navigate({
								to: "/shop",
								search: { q: e.target.value || void 0 },
								replace: true
							});
						},
						placeholder: "Peonies, teddy, perfume…",
						className: "mt-2 rounded-full"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
						className: "text-sm font-semibold",
						children: "Category"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 space-y-2.5",
						children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
								id: `cat-${c.slug}`,
								checked: cats.includes(c.slug),
								onCheckedChange: () => toggleCat(c.slug)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: `cat-${c.slug}`,
								className: "cursor-pointer text-sm font-normal",
								children: [
									c.emoji,
									" ",
									c.name
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 19
							}, this)]
						}, c.slug, true, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 36
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: ["Max price: $", maxPrice] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slider, {
						value: [maxPrice],
						min: 10,
						max: 150,
						step: 5,
						onValueChange: ([v]) => {
							setMaxPrice(v);
							setPage(1);
						},
						className: "mt-3"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
						className: "text-sm font-semibold",
						children: "Minimum rating"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 flex gap-2",
						children: [
							0,
							4.5,
							4.7,
							4.8
						].map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							variant: minRating === r ? "hero" : "outline",
							onClick: () => {
								setMinRating(r);
								setPage(1);
							},
							children: r === 0 ? "Any" : `${r}+`
						}, r, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 44
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
						id: "in-stock",
						checked: inStock,
						onCheckedChange: (v) => setInStock(Boolean(v))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						htmlFor: "in-stock",
						className: "cursor-pointer text-sm font-normal",
						children: "In stock only"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-6 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: [filtered.length, " gifts"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
					value: sort,
					onValueChange: setSort,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
						className: "w-52 rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Sort" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
							value: "popular",
							children: "Most popular"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
							value: "rating",
							children: "Highest rated"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
							value: "price-asc",
							children: "Price: low to high"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
							value: "price-desc",
							children: "Price: high to low"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 17
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductGrid, { items: current }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 127,
				columnNumber: 11
			}, this),
			pages > 1 && /* @__PURE__ */ (void 0)("nav", {
				className: "mt-10 flex justify-center gap-2",
				"aria-label": "Pagination",
				children: Array.from({ length: pages }).map((_, i) => /* @__PURE__ */ (void 0)(Button, {
					size: "icon",
					variant: page === i + 1 ? "hero" : "outline",
					onClick: () => setPage(i + 1),
					"aria-current": page === i + 1 ? "page" : void 0,
					children: i + 1
				}, i, false, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 28
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 129,
				columnNumber: 25
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 111,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 50,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 10
	}, this);
}
//#endregion
export { Shop as component };
