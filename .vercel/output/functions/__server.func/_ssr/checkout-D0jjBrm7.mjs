import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Banknote, G as Circle, U as CreditCard, n as Wallet } from "../_libs/lucide-react.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
import { c as Input, d as useShop, l as Button, m as cn, u as getProduct, y as currency } from "./router-DGbT_glc.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-BMK4AIo_.mjs";
import { t as Label } from "./label-DT6-2IZ-.mjs";
import { t as Textarea } from "./textarea-BRU6zi2e.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/@radix-ui/react-radio-group+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-D0jjBrm7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ui/radio-group.tsx";
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 11,
		columnNumber: 10
	}, void 0);
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-3.5 w-3.5 fill-primary" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 29,
				columnNumber: 9
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 28,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 20,
		columnNumber: 5
	}, void 0);
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/checkout.tsx?tsr-split=component";
/** Validation runs client-side here and again in the Express API (express-validator). */
var schema = objectType({
	fullName: stringType().trim().min(2, "Please enter your full name").max(80),
	email: stringType().trim().email("Enter a valid email").max(255),
	phone: stringType().trim().min(7, "Enter a valid phone number").max(20),
	address: stringType().trim().min(6, "Enter the delivery address").max(200),
	city: stringType().trim().min(2, "Enter a city").max(80),
	postcode: stringType().trim().min(3, "Enter a postcode").max(12),
	deliveryDate: stringType().min(1, "Pick a delivery date"),
	slot: stringType().min(1, "Pick a time slot"),
	message: stringType().trim().max(300, "Keep the note under 300 characters").optional(),
	payment: enumType([
		"stripe",
		"cod",
		"wallet"
	])
});
var slots = [
	"09:00 – 11:00",
	"11:00 – 13:00",
	"13:00 – 15:00",
	"15:00 – 17:00",
	"17:00 – 19:00"
];
function Checkout() {
	const { cart, totals, placeOrder } = useShop();
	const navigate = useNavigate();
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			payment: "stripe",
			slot: slots[0],
			deliveryDate: "",
			message: ""
		}
	});
	function onSubmit(values) {
		const order = placeOrder({
			address: `${values.address}, ${values.city} ${values.postcode}`,
			deliveryDate: values.deliveryDate,
			slot: values.slot,
			message: values.message ?? "",
			payment: values.payment
		});
		navigate({
			to: "/order-success",
			search: { id: order.id }
		});
	}
	if (cart.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { title: "Checkout" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 64,
		columnNumber: 9
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-3xl border border-dashed border-border p-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-muted-foreground",
			children: "Your basket is empty."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 67,
			columnNumber: 13
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			asChild: true,
			variant: "hero",
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/shop",
				children: "Browse gifts"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 15
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 68,
			columnNumber: 13
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 66,
		columnNumber: 11
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 65,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 63,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
		eyebrow: "Final step",
		title: "Checkout",
		subtitle: "Delivery details, gift note and payment."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 76,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
		className: "grid gap-10 lg:grid-cols-[1fr_380px]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			onSubmit: form.handleSubmit(onSubmit),
			className: "space-y-8",
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					title: "Delivery address",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
								label: "Full name",
								error: form.formState.errors.fullName?.message,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									...form.register("fullName"),
									placeholder: "Alex Morgan"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 82,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
								label: "Email",
								error: form.formState.errors.email?.message,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									type: "email",
									...form.register("email"),
									placeholder: "alex@example.com"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 85,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
								label: "Phone",
								error: form.formState.errors.phone?.message,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									...form.register("phone"),
									placeholder: "+1 555 0100"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 88,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
								label: "Postcode",
								error: form.formState.errors.postcode?.message,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									...form.register("postcode"),
									placeholder: "SW1A 1AA"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 91,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 90,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
								label: "Address",
								error: form.formState.errors.address?.message,
								full: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									...form.register("address"),
									placeholder: "12 Rosebury Lane"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
								label: "City",
								error: form.formState.errors.city?.message,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									...form.register("city"),
									placeholder: "London"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					title: "Delivery date & slot",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Delivery date",
							error: form.formState.errors.deliveryDate?.message,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								type: "date",
								...form.register("deliveryDate")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Time slot",
							error: form.formState.errors.slot?.message,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
								...form.register("slot"),
								className: "h-10 w-full rounded-full border border-input bg-background px-4 text-sm",
								children: slots.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: s }, s, false, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 35
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					title: "Gift message",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
						...form.register("message"),
						rows: 3,
						placeholder: "Happy birthday — hope this makes your day sparkle.",
						className: "rounded-2xl"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: "Handwritten on cotton card, free of charge."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					title: "Payment method",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
						value: form.watch("payment"),
						onValueChange: (v) => form.setValue("payment", v),
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PayOption, {
								value: "stripe",
								icon: CreditCard,
								label: "Card (Stripe)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PayOption, {
								value: "wallet",
								icon: Wallet,
								label: "Wallet"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PayOption, {
								value: "cod",
								icon: Banknote,
								label: "Cash on delivery"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 122,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "submit",
					variant: "hero",
					size: "xl",
					className: "w-full",
					children: ["Pay ", currency(totals.total)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 130,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 78,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			className: "h-fit rounded-3xl border border-border bg-card p-7 shadow-card lg:sticky lg:top-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Your order"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-5 space-y-3",
					children: cart.map((l) => {
						const p = getProduct(l.productId);
						if (!p) return null;
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex items-center gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "grid h-11 w-11 place-items-center rounded-xl gradient-soft text-xl",
									"aria-hidden": true,
									children: p.emoji
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 142,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex-1",
									children: [
										p.name,
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-muted-foreground",
											children: ["× ", l.qty]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 146,
											columnNumber: 30
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 145,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-medium",
									children: currency(p.price * l.qty)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 148,
									columnNumber: 19
								}, this)
							]
						}, l.productId, true, {
							fileName: _jsxFileName,
							lineNumber: 141,
							columnNumber: 20
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 137,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
					className: "mt-6 space-y-2 border-t border-border pt-5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
								className: "text-muted-foreground",
								children: "Subtotal"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 154,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: currency(totals.subtotal) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 153,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
								className: "text-muted-foreground",
								children: "Shipping"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: totals.shipping === 0 ? "Free" : currency(totals.shipping) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 159,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 157,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
								className: "text-muted-foreground",
								children: "Tax"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 162,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: currency(totals.tax) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 161,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between border-t border-border pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
								className: "font-display text-lg font-semibold",
								children: "Total"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 166,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
								className: "font-display text-lg font-bold text-primary",
								children: currency(totals.total)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 167,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 152,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 135,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 77,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 75,
		columnNumber: 10
	}, this);
}
function Card({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "mb-5 font-display text-xl font-semibold",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 184,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 183,
		columnNumber: 10
	}, this);
}
function Field({ label, error, full, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: full ? "sm:col-span-2" : void 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
				className: "mb-2 block",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 200,
				columnNumber: 7
			}, this),
			children,
			error && /* @__PURE__ */ (void 0)("p", {
				className: "mt-1.5 text-xs text-destructive",
				children: error
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 202,
				columnNumber: 17
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 199,
		columnNumber: 10
	}, this);
}
function PayOption({ value, icon: Icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
		htmlFor: `pay-${value}`,
		className: "flex cursor-pointer items-center gap-3 rounded-2xl border border-border p-4 transition-smooth hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-accent",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroupItem, {
				value,
				id: `pay-${value}`
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 215,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-4 w-4 text-primary" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 216,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-sm font-medium",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 217,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 214,
		columnNumber: 10
	}, this);
}
//#endregion
export { Checkout as component };
