import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { B as Funnel, C as Package, D as MapPin, F as ImageOff, H as Ellipsis, K as CircleCheck, L as Heart, O as Mail, P as ImagePlus, R as Globe, S as Pencil, T as MessageCircle, W as Clock, Y as ChevronRight, _ as Send, b as Plus, d as Star, et as BadgeCheck, f as Sparkles, h as Share2, m as ShieldCheck, o as Truck, p as ShoppingBag, r as Users, s as Trash2, t as X, u as Store, v as Search, x as Phone, y as Ribbon, z as Gift } from "../_libs/lucide-react.mjs";
import { C as useProducts } from "./router-DGbT_glc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vendor-C9tFumfz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/vendor.tsx?tsr-split=component";
/**
* Professional Vendor Dashboard + Storefront
* Gift Marketplace / AliExpress-inspired
* WhatsApp Business-style vendor profile features
*/
var palette = {
	bg: "#FFF9FB",
	surface: "#FFFFFF",
	surfaceTint: "#FFF6FA",
	ink: "#2B1A22",
	inkSoft: "#8A6B76",
	hairline: "#F3DCE6",
	rose: "#C2185B",
	roseDark: "#9E1450",
	roseSoft: "#FCE7EF",
	roseSofter: "#FFF0F6",
	blush: "#F9D9E6",
	success: "#1B8A5A",
	successSoft: "#E8F7F0",
	warning: "#D97706"
};
var fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,440;9..144,560;9..144,650&family=Inter:wght@400;500;600;700&display=swap');

.vendor-page * {
  box-sizing: border-box;
}

.vendor-page {
  font-family: 'Inter', sans-serif;
  color: ${palette.ink};
}

.vendor-display {
  font-family: 'Fraunces', serif;
}

.vendor-page button,
.vendor-page input,
.vendor-page textarea,
.vendor-page select {
  font-family: inherit;
}

@keyframes vp-rise {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.vp-hero-anim {
  animation: vp-rise 0.6s ease-out both;
}

.vp-tab-btn {
  position: relative;
  transition: color 0.15s ease;
}

.vp-tab-btn[data-active="true"]::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -13px;
  height: 2px;
  background: ${palette.rose};
}

.vp-focus:focus-visible {
  outline: 2px solid ${palette.rose};
  outline-offset: 2px;
}

.vp-primary-btn {
  transition: background 0.15s ease, transform 0.15s ease;
}

.vp-primary-btn:hover {
  background: ${palette.roseDark};
  transform: translateY(-1px);
}

.vp-card-hover {
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.vp-card-hover:hover {
  box-shadow: 0 10px 28px rgba(194, 24, 91, 0.1);
  transform: translateY(-2px);
}

.vp-row:hover {
  background: ${palette.roseSofter};
}

.vp-input:focus {
  outline: none;
  border-color: ${palette.rose} !important;
  box-shadow: 0 0 0 3px rgba(194, 24, 91, 0.08);
}

.vp-conv:hover {
  background: ${palette.roseSofter};
}

.vp-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.vp-scrollbar::-webkit-scrollbar-thumb {
  background: ${palette.blush};
  border-radius: 20px;
}

@media (max-width: 800px) {
  .vendor-overview-grid {
    grid-template-columns: 1fr !important;
  }

  .vendor-products-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .vendor-table-header,
  .vendor-product-row {
    grid-template-columns: minmax(0, 1fr) 75px 60px !important;
  }

  .vendor-table-category,
  .vendor-table-actions-label {
    display: none !important;
  }

  .vendor-product-actions {
    grid-column: 1 / -1;
    justify-content: flex-end !important;
    margin-top: 8px;
  }

  .messages-panel {
    grid-template-columns: 1fr !important;
  }

  .messages-sidebar {
    border-right: none !important;
    border-bottom: 1px solid ${palette.hairline};
    max-height: 190px;
    overflow-y: auto;
  }
}

@media (max-width: 560px) {
  .vendor-page {
    padding: 14px 10px 40px !important;
  }

  .vendor-products-grid {
    grid-template-columns: 1fr 1fr !important;
  }

  .vendor-form-grid {
    grid-template-columns: 1fr !important;
  }

  .vendor-hero-actions {
    width: 100%;
  }

  .vendor-hero-actions button:last-child {
    flex: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .vp-hero-anim {
    animation: none;
  }

  .vp-card-hover,
  .vp-primary-btn {
    transition: none;
  }
}
`;
var ICONS = {
	Gift,
	Sparkles,
	Package,
	Ribbon,
	Heart,
	Star
};
var ICON_NAMES = Object.keys(ICONS);
var initialConversations = [
	{
		id: 1,
		name: "Amara J.",
		initial: "A",
		unread: 2,
		status: "Online",
		messages: [{
			from: "buyer",
			text: "Hi, can the keepsake box be engraved with two names?",
			time: "10:02 AM"
		}, {
			from: "buyer",
			text: "Also, does it ship in a gift box already?",
			time: "10:03 AM"
		}]
	},
	{
		id: 2,
		name: "Devon R.",
		initial: "D",
		unread: 0,
		status: "Last seen today",
		messages: [{
			from: "buyer",
			text: "Order #4021 arrived today, it's lovely, thank you!",
			time: "Yesterday"
		}, {
			from: "vendor",
			text: "So glad it arrived safely! Thank you for the order.",
			time: "Yesterday"
		}]
	},
	{
		id: 3,
		name: "Priya N.",
		initial: "P",
		unread: 1,
		status: "Online",
		messages: [{
			from: "buyer",
			text: "Do you have the wrapping paper in a plain kraft option?",
			time: "Mon"
		}]
	}
];
function StoreBanner() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "vp-hero-anim",
		style: {
			position: "relative",
			height: 180,
			borderRadius: 18,
			overflow: "hidden",
			background: `linear-gradient(120deg, ${palette.rose} 0%, ${palette.roseDark} 100%)`
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 800 180",
				preserveAspectRatio: "none",
				style: {
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					opacity: .55
				},
				children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					cx: i * 75 + 30,
					cy: i % 2 === 0 ? 35 : 135,
					r: i % 2 === 0 ? 48 : 62,
					fill: "rgba(255,255,255,0.06)"
				}, i, false, {
					fileName: _jsxFileName,
					lineNumber: 303,
					columnNumber: 24
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 294,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					position: "absolute",
					left: 30,
					bottom: 26,
					color: "#fff",
					zIndex: 2
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "vendor-display",
					style: {
						fontSize: 30,
						fontWeight: 650
					},
					children: "Thoughtful gifts for every moment"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 313,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						marginTop: 6,
						fontSize: 13,
						color: "rgba(255,255,255,0.85)"
					},
					children: "Handmade • Personalised • Carefully wrapped"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 320,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 306,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					position: "absolute",
					right: 28,
					top: 24,
					fontFamily: "'Fraunces', serif",
					fontSize: 13,
					letterSpacing: "0.02em",
					color: "rgba(255,255,255,0.85)",
					fontStyle: "italic"
				},
				children: "wrapped with care, since 2018"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 329,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 287,
		columnNumber: 10
	}, this);
}
function StatChip({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			display: "flex",
			alignItems: "center",
			gap: 8
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
			size: 16,
			color: palette.inkSoft
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 357,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			style: {
				fontSize: 13.5,
				color: palette.inkSoft
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
					style: {
						color: palette.ink,
						fontWeight: 700
					},
					children: value
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 363,
					columnNumber: 9
				}, this),
				" ",
				label
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 359,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 352,
		columnNumber: 10
	}, this);
}
function ProductCard({ product, onAddToCart }) {
	const Icon = ICONS[product.icon ?? "Gift"] || Gift;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "vp-card-hover",
		style: {
			background: palette.surface,
			border: `1px solid ${palette.hairline}`,
			borderRadius: 14,
			overflow: "hidden"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				height: 150,
				background: palette.roseSoft,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
				position: "relative"
			},
			children: [product.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: product.image,
				alt: product.name,
				style: {
					width: "100%",
					height: "100%",
					objectFit: "cover"
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 396,
				columnNumber: 26
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
				size: 40,
				color: palette.rose,
				strokeWidth: 1.5
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 400,
				columnNumber: 15
			}, this), product.stock < 10 && /* @__PURE__ */ (void 0)("span", {
				style: {
					position: "absolute",
					top: 10,
					left: 10,
					background: "#fff",
					color: palette.roseDark,
					padding: "4px 8px",
					borderRadius: 999,
					fontSize: 10.5,
					fontWeight: 700
				},
				children: "Low stock"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 402,
				columnNumber: 32
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 387,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: { padding: 14 },
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						fontSize: 13.5,
						fontWeight: 600,
						lineHeight: 1.4,
						minHeight: 38
					},
					children: product.name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 420,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						fontSize: 11.5,
						color: palette.inkSoft,
						marginTop: 6,
						minHeight: 32,
						lineHeight: 1.4
					},
					children: product.description
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 429,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "flex",
						alignItems: "baseline",
						justifyContent: "space-between",
						marginTop: 14
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						style: {
							fontSize: 17,
							fontWeight: 700,
							color: palette.roseDark
						},
						children: ["$", product.price.toFixed(2)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 445,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						style: {
							fontSize: 11,
							color: palette.inkSoft
						},
						children: [product.stock, " available"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 453,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 439,
					columnNumber: 9
				}, this),
				onAddToCart && /* @__PURE__ */ (void 0)("button", {
					type: "button",
					onClick: onAddToCart,
					className: "vp-primary-btn vp-focus",
					style: {
						marginTop: 12,
						width: "100%",
						border: "none",
						background: palette.rose,
						color: "#fff",
						borderRadius: 9,
						padding: "9px",
						cursor: "pointer",
						fontSize: 12.5,
						fontWeight: 600
					},
					children: "Add to cart"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 461,
					columnNumber: 25
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 417,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 381,
		columnNumber: 10
	}, this);
}
function BusinessInfoCard({ vendor, onEdit }) {
	const info = [
		{
			icon: MapPin,
			label: "Business location",
			value: vendor.location
		},
		{
			icon: Clock,
			label: "Business hours",
			value: vendor.hours
		},
		{
			icon: Phone,
			label: "Phone number",
			value: vendor.phone
		},
		{
			icon: Mail,
			label: "Business email",
			value: vendor.email
		},
		{
			icon: Globe,
			label: "Website",
			value: vendor.website
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			background: "#fff",
			border: `1px solid ${palette.hairline}`,
			borderRadius: 14,
			padding: 20
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: 18
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						fontSize: 15,
						fontWeight: 700
					},
					children: "Business information"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 519,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						fontSize: 12,
						color: palette.inkSoft,
						marginTop: 3
					},
					children: "WhatsApp Business-style profile"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 526,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 518,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onEdit,
					className: "vp-focus",
					style: {
						width: 34,
						height: 34,
						borderRadius: 8,
						border: `1px solid ${palette.hairline}`,
						background: "#fff",
						cursor: "pointer"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, {
						size: 14,
						color: palette.inkSoft
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 543,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 535,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 512,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: 16
				},
				children: info.map((item) => {
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							display: "flex",
							gap: 11
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								width: 34,
								height: 34,
								borderRadius: 9,
								background: palette.roseSoft,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexShrink: 0
							},
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
								size: 15,
								color: palette.roseDark
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 568,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 558,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: { minWidth: 0 },
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									fontSize: 11,
									color: palette.inkSoft,
									marginBottom: 2
								},
								children: item.label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 574,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									fontSize: 12.5,
									fontWeight: 500,
									overflow: "hidden",
									textOverflow: "ellipsis"
								},
								children: item.value
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 582,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 571,
							columnNumber: 15
						}, this)]
					}, item.label, true, {
						fileName: _jsxFileName,
						lineNumber: 554,
						columnNumber: 16
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 547,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					marginTop: 20,
					paddingTop: 16,
					borderTop: `1px solid ${palette.hairline}`,
					display: "flex",
					alignItems: "center",
					gap: 8,
					fontSize: 12.5,
					color: palette.success,
					fontWeight: 600
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { size: 16 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 606,
					columnNumber: 9
				}, this), "Verified business account"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 595,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 506,
		columnNumber: 10
	}, this);
}
function MessagesSummaryCard({ conversations, onOpen }) {
	const unreadTotal = conversations.reduce((sum, conversation) => {
		return sum + conversation.unread;
	}, 0);
	const preview = conversations.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "vp-card-hover",
		style: {
			background: palette.surface,
			border: `1px solid ${palette.hairline}`,
			borderRadius: 14,
			padding: 20
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: 10,
					marginBottom: 16
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							width: 42,
							height: 42,
							borderRadius: 12,
							background: palette.rose,
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, {
							size: 20,
							color: "#fff"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 643,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 634,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							fontSize: 14,
							fontWeight: 700
						},
						children: "Buyer messages"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 647,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							fontSize: 11.5,
							color: palette.inkSoft,
							marginTop: 3
						},
						children: "Professional customer messaging"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 654,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 646,
						columnNumber: 9
					}, this),
					unreadTotal > 0 && /* @__PURE__ */ (void 0)("span", {
						style: {
							marginLeft: "auto",
							background: palette.rose,
							color: "#fff",
							fontSize: 11,
							fontWeight: 700,
							borderRadius: 999,
							padding: "4px 9px"
						},
						children: [unreadTotal, " new"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 663,
						columnNumber: 29
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 628,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: 12
				},
				children: preview.map((conversation) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "flex",
						gap: 10,
						alignItems: "center"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								width: 34,
								height: 34,
								borderRadius: "50%",
								background: palette.roseSoft,
								color: palette.roseDark,
								fontSize: 12.5,
								fontWeight: 700,
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							},
							children: conversation.initial
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 686,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								minWidth: 0,
								flex: 1
							},
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									fontSize: 12.5,
									fontWeight: 600
								},
								children: conversation.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 705,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									fontSize: 11.5,
									color: palette.inkSoft,
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "ellipsis",
									marginTop: 2
								},
								children: conversation.messages[conversation.messages.length - 1]?.text
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 712,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 701,
							columnNumber: 13
						}, this),
						conversation.unread > 0 && /* @__PURE__ */ (void 0)("span", { style: {
							width: 8,
							height: 8,
							borderRadius: "50%",
							background: palette.rose
						} }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 724,
							columnNumber: 41
						}, this)
					]
				}, conversation.id, true, {
					fileName: _jsxFileName,
					lineNumber: 681,
					columnNumber: 38
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 676,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onOpen,
				className: "vp-primary-btn vp-focus",
				style: {
					marginTop: 18,
					width: "100%",
					background: palette.rose,
					color: "#fff",
					fontSize: 13.5,
					fontWeight: 600,
					padding: "11px 0",
					borderRadius: 10,
					border: "none",
					cursor: "pointer"
				},
				children: "Open messages"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 733,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					fontSize: 11.5,
					color: palette.inkSoft,
					textAlign: "center",
					marginTop: 9
				},
				children: "Avg. response time: 12 minutes"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 748,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 622,
		columnNumber: 10
	}, this);
}
function MessagesPanel({ conversations, setConversations }) {
	const [activeId, setActiveId] = (0, import_react.useState)(conversations[0]?.id ?? null);
	const [draft, setDraft] = (0, import_react.useState)("");
	const quickReplies = [
		"Hello! Thank you for contacting our store. How can I help you today?",
		"Yes, we can personalise this item for you.",
		"Your order will be carefully wrapped and prepared within 1–2 business days.",
		"Thank you for your order and support!"
	];
	const active = conversations.find((conversation) => conversation.id === activeId);
	function openConversation(id) {
		setActiveId(id);
		setConversations((previous) => previous.map((conversation) => conversation.id === id ? {
			...conversation,
			unread: 0
		} : conversation));
	}
	function sendMessage() {
		if (!draft.trim() || !active) return;
		setConversations((previous) => previous.map((conversation) => conversation.id === active.id ? {
			...conversation,
			messages: [...conversation.messages, {
				from: "vendor",
				text: draft.trim(),
				time: "Now"
			}]
		} : conversation));
		setDraft("");
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "messages-panel",
		style: {
			display: "grid",
			gridTemplateColumns: "260px minmax(0, 1fr)",
			border: `1px solid ${palette.hairline}`,
			borderRadius: 16,
			overflow: "hidden",
			minHeight: 460,
			background: "#fff"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "messages-sidebar vp-scrollbar",
			style: {
				borderRight: `1px solid ${palette.hairline}`,
				background: palette.surfaceTint
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					padding: "16px 14px",
					fontSize: 14,
					fontWeight: 700,
					borderBottom: `1px solid ${palette.hairline}`
				},
				children: "Customer messages"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 801,
				columnNumber: 9
			}, this), conversations.map((conversation) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => openConversation(conversation.id),
				className: "vp-conv vp-focus",
				style: {
					width: "100%",
					display: "flex",
					alignItems: "center",
					gap: 10,
					padding: "13px 14px",
					border: "none",
					borderBottom: `1px solid ${palette.hairline}`,
					background: conversation.id === activeId ? palette.roseSoft : "transparent",
					cursor: "pointer",
					textAlign: "left"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							position: "relative",
							width: 36,
							height: 36,
							borderRadius: "50%",
							background: "#fff",
							color: palette.roseDark,
							fontSize: 12.5,
							fontWeight: 700,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexShrink: 0
						},
						children: [conversation.initial, conversation.status === "Online" && /* @__PURE__ */ (void 0)("span", { style: {
							position: "absolute",
							width: 9,
							height: 9,
							borderRadius: "50%",
							background: palette.success,
							right: -1,
							bottom: 1,
							border: "2px solid #fff"
						} }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 838,
							columnNumber: 52
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 822,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								fontSize: 13,
								fontWeight: 600
							},
							children: conversation.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 854,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								fontSize: 11.5,
								color: palette.inkSoft,
								whiteSpace: "nowrap",
								overflow: "hidden",
								textOverflow: "ellipsis",
								marginTop: 2
							},
							children: conversation.messages[conversation.messages.length - 1]?.text
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 861,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 850,
						columnNumber: 13
					}, this),
					conversation.unread > 0 && /* @__PURE__ */ (void 0)("span", { style: {
						width: 8,
						height: 8,
						borderRadius: "50%",
						background: palette.rose
					} }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 873,
						columnNumber: 41
					}, this)
				]
			}, conversation.id, true, {
				fileName: _jsxFileName,
				lineNumber: 810,
				columnNumber: 44
			}, this))]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 797,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				minWidth: 0
			},
			children: active ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						padding: "14px 18px",
						borderBottom: `1px solid ${palette.hairline}`,
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							fontSize: 14,
							fontWeight: 700
						},
						children: active.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 896,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							fontSize: 11,
							color: active.status === "Online" ? palette.success : palette.inkSoft,
							marginTop: 2
						},
						children: active.status
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 903,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 895,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ellipsis, {
						size: 20,
						color: palette.inkSoft
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 912,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 888,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "vp-scrollbar",
					style: {
						flex: 1,
						padding: 18,
						display: "flex",
						flexDirection: "column",
						gap: 12,
						overflowY: "auto",
						background: "#FFFCFD"
					},
					children: active.messages.map((message, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							display: "flex",
							justifyContent: message.from === "vendor" ? "flex-end" : "flex-start"
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								maxWidth: "75%",
								background: message.from === "vendor" ? palette.rose : palette.roseSoft,
								color: message.from === "vendor" ? "#fff" : palette.ink,
								fontSize: 13.5,
								padding: "10px 13px",
								borderRadius: 14,
								lineHeight: 1.45
							},
							children: [message.text, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									fontSize: 10.5,
									opacity: .72,
									marginTop: 4
								},
								children: message.time
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 939,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 928,
							columnNumber: 19
						}, this)
					}, index, false, {
						fileName: _jsxFileName,
						lineNumber: 924,
						columnNumber: 56
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 915,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						padding: "8px 12px",
						borderTop: `1px solid ${palette.hairline}`,
						display: "flex",
						gap: 8,
						overflowX: "auto"
					},
					children: quickReplies.map((reply, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setDraft(reply),
						style: {
							whiteSpace: "nowrap",
							border: `1px solid ${palette.hairline}`,
							background: palette.roseSofter,
							color: palette.roseDark,
							borderRadius: 999,
							padding: "6px 10px",
							fontSize: 11,
							cursor: "pointer"
						},
						children: ["Quick reply ", index + 1]
					}, index, true, {
						fileName: _jsxFileName,
						lineNumber: 957,
						columnNumber: 51
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 950,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "flex",
						gap: 8,
						padding: 12,
						borderTop: `1px solid ${palette.hairline}`
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						className: "vp-input",
						value: draft,
						onChange: (event) => setDraft(event.target.value),
						onKeyDown: (event) => {
							if (event.key === "Enter") sendMessage();
						},
						placeholder: "Write a reply…",
						style: {
							flex: 1,
							border: `1px solid ${palette.hairline}`,
							borderRadius: 10,
							padding: "10px 12px",
							fontSize: 13.5
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 977,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: sendMessage,
						"aria-label": "Send message",
						className: "vp-primary-btn vp-focus",
						style: {
							background: palette.rose,
							border: "none",
							borderRadius: 10,
							width: 44,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							cursor: "pointer"
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, {
							size: 17,
							color: "#fff"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 999,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 989,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 971,
					columnNumber: 13
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 887,
				columnNumber: 19
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					padding: 24,
					fontSize: 13.5,
					color: palette.inkSoft
				},
				children: "No conversation selected."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1002,
				columnNumber: 17
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 882,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 788,
		columnNumber: 10
	}, this);
}
function ProductForm({ initial, onCancel, onSave }) {
	const [form, setForm] = (0, import_react.useState)(initial || {
		name: "",
		price: "",
		stock: "",
		category: "",
		description: "",
		icon: "Gift",
		image: null
	});
	const [imageError, setImageError] = (0, import_react.useState)("");
	function update(field, value) {
		setForm((previous) => ({
			...previous,
			[field]: value
		}));
	}
	function handleImageChange(event) {
		const file = event.target.files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			setImageError("Please choose an image file.");
			return;
		}
		if (file.size > 4194304) {
			setImageError("Image is too large — please use one under 4MB.");
			return;
		}
		setImageError("");
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === "string") update("image", reader.result);
		};
		reader.readAsDataURL(file);
	}
	function handleSubmit(event) {
		event.preventDefault();
		if (!form.name.trim() || !form.price || !form.stock) return;
		onSave({
			...form,
			price: parseFloat(String(form.price)),
			stock: parseInt(String(form.stock), 10)
		});
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
		onSubmit: handleSubmit,
		style: {
			background: palette.surfaceTint,
			border: `1px solid ${palette.hairline}`,
			borderRadius: 14,
			padding: 18,
			marginBottom: 20
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginBottom: 16
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						fontSize: 15,
						fontWeight: 700
					},
					children: initial ? "Edit gift item" : "Add a new gift item"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1081,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onCancel,
					className: "vp-focus",
					style: {
						border: "none",
						background: "none",
						cursor: "pointer"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, {
						size: 18,
						color: palette.inkSoft
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1093,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1088,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1075,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "vendor-form-grid",
				style: {
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: 12
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { gridColumn: "1 / -1" },
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							style: labelStyle,
							children: "Item name"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1105,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							required: true,
							className: "vp-input",
							value: form.name,
							onChange: (event) => update("name", event.target.value),
							style: inputStyle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1107,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1102,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						style: labelStyle,
						children: "Price (USD)"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1111,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						required: true,
						type: "number",
						step: "0.01",
						min: "0",
						className: "vp-input",
						value: form.price,
						onChange: (event) => update("price", event.target.value),
						style: inputStyle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1113,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1110,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						style: labelStyle,
						children: "Stock quantity"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1117,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						required: true,
						type: "number",
						min: "0",
						className: "vp-input",
						value: form.stock,
						onChange: (event) => update("stock", event.target.value),
						style: inputStyle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1119,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1116,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						style: labelStyle,
						children: "Category"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1123,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						className: "vp-input",
						value: form.category,
						onChange: (event) => update("category", event.target.value),
						style: inputStyle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1125,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1122,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						style: labelStyle,
						children: "Product icon"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1129,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
						className: "vp-input",
						value: form.icon,
						onChange: (event) => update("icon", event.target.value),
						style: {
							...inputStyle,
							background: "#fff"
						},
						children: ICON_NAMES.map((name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
							value: name,
							children: name
						}, name, false, {
							fileName: _jsxFileName,
							lineNumber: 1135,
							columnNumber: 37
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1131,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1128,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { gridColumn: "1 / -1" },
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							style: labelStyle,
							children: "Product image"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1144,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 12
							},
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									width: 72,
									height: 72,
									borderRadius: 12,
									background: palette.roseSoft,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									overflow: "hidden",
									flexShrink: 0,
									border: `1px solid ${palette.hairline}`
								},
								children: form.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: form.image,
									alt: "Item preview",
									style: {
										width: "100%",
										height: "100%",
										objectFit: "cover"
									}
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1163,
									columnNumber: 29
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImagePlus, {
									size: 24,
									color: palette.rose
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1167,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1151,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: 7
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										style: {
											display: "inline-flex",
											alignItems: "center",
											gap: 6,
											width: "fit-content",
											padding: "8px 12px",
											borderRadius: 8,
											border: `1px solid ${palette.hairline}`,
											background: "#fff",
											fontSize: 12.5,
											fontWeight: 600,
											cursor: "pointer"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImagePlus, { size: 14 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1188,
												columnNumber: 17
											}, this),
											form.image ? "Replace photo" : "Upload photo",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "file",
												accept: "image/*",
												onChange: handleImageChange,
												style: { display: "none" }
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1192,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1175,
										columnNumber: 15
									}, this),
									form.image && /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => update("image", null),
										style: {
											display: "flex",
											alignItems: "center",
											gap: 5,
											border: "none",
											background: "none",
											color: palette.roseDark,
											fontSize: 12,
											padding: 0,
											cursor: "pointer"
										},
										children: [/* @__PURE__ */ (void 0)(ImageOff, { size: 13 }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1208,
											columnNumber: 19
										}, this), "Remove photo"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1197,
										columnNumber: 30
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										style: {
											fontSize: 11,
											color: palette.inkSoft
										},
										children: "PNG or JPG, maximum 4MB."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1212,
										columnNumber: 15
									}, this),
									imageError && /* @__PURE__ */ (void 0)("span", {
										style: {
											fontSize: 11,
											color: palette.roseDark
										},
										children: imageError
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1219,
										columnNumber: 30
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1170,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1146,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1141,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { gridColumn: "1 / -1" },
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							style: labelStyle,
							children: "Description"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1232,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							className: "vp-input",
							rows: 3,
							value: form.description,
							onChange: (event) => update("description", event.target.value),
							style: {
								...inputStyle,
								resize: "vertical"
							}
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1234,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1229,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1097,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					gap: 10,
					justifyContent: "flex-end",
					marginTop: 16
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onCancel,
					style: secondaryButtonStyle,
					children: "Cancel"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1247,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "submit",
					className: "vp-primary-btn vp-focus",
					style: primaryButtonStyle,
					children: initial ? "Save changes" : "Add item"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1251,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1241,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 1068,
		columnNumber: 10
	}, this);
}
function ManageProductsPanel({ products, onAdd, onUpdate, onDelete }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [showForm, setShowForm] = (0, import_react.useState)(false);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [confirmDeleteId, setConfirmDeleteId] = (0, import_react.useState)(null);
	const filtered = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
	const editingItem = products.find((product) => product.id === editingId) || null;
	async function addProduct(data) {
		try {
			await onAdd({
				...data,
				price: Number(data.price),
				stock: Number(data.stock),
				mrp: Number(data.price),
				rating: 0,
				reviews: 0,
				emoji: "🎁",
				tags: [],
				status: "active"
			});
			setShowForm(false);
		} catch (error) {
			alert(error instanceof Error ? error.message : "Failed to add product");
		}
	}
	async function updateProduct(data) {
		const existing = products.find((product) => product.id === editingId);
		if (!existing) return;
		try {
			await onUpdate({
				...existing,
				...data,
				price: Number(data.price),
				stock: Number(data.stock),
				mrp: Number(data.mrp || data.price)
			});
			setEditingId(null);
		} catch (error) {
			alert(error instanceof Error ? error.message : "Failed to update product");
		}
	}
	async function deleteProduct(id) {
		try {
			await onDelete(id);
			setConfirmDeleteId(null);
		} catch (error) {
			alert(error instanceof Error ? error.message : "Failed to remove product");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				display: "flex",
				gap: 10,
				alignItems: "center",
				marginBottom: 16,
				flexWrap: "wrap"
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					position: "relative",
					flex: 1,
					minWidth: 200
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, {
					size: 15,
					color: palette.inkSoft,
					style: {
						position: "absolute",
						left: 11,
						top: "50%",
						transform: "translateY(-50%)"
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1330,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					className: "vp-input",
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: "Search your gift items…",
					style: {
						width: "100%",
						border: `1px solid ${palette.hairline}`,
						borderRadius: 9,
						padding: "10px 12px 10px 34px",
						fontSize: 13.5
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1337,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1325,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => {
					setShowForm(true);
					setEditingId(null);
				},
				className: "vp-primary-btn vp-focus",
				style: {
					display: "flex",
					alignItems: "center",
					gap: 6,
					...primaryButtonStyle
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { size: 16 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1355,
					columnNumber: 11
				}, this), "Add gift item"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1346,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 1318,
			columnNumber: 7
		}, this),
		showForm && /* @__PURE__ */ (void 0)(ProductForm, {
			onCancel: () => setShowForm(false),
			onSave: addProduct
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 1360,
			columnNumber: 20
		}, this),
		editingItem && /* @__PURE__ */ (void 0)(ProductForm, {
			initial: {
				name: editingItem.name,
				price: String(editingItem.price),
				stock: String(editingItem.stock),
				category: editingItem.category ?? "",
				description: editingItem.description ?? "",
				icon: editingItem.icon ?? "Gift",
				image: editingItem.image ?? null
			},
			onCancel: () => setEditingId(null),
			onSave: updateProduct
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 1362,
			columnNumber: 23
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				border: `1px solid ${palette.hairline}`,
				borderRadius: 12,
				overflow: "hidden",
				background: "#fff"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "vendor-table-header",
					style: {
						display: "grid",
						gridTemplateColumns: "minmax(0,1fr) 90px 80px 110px 100px",
						padding: "11px 14px",
						background: palette.surfaceTint,
						fontSize: 11,
						fontWeight: 700,
						color: palette.inkSoft,
						textTransform: "uppercase"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Item" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1388,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Price" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1389,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Stock" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1390,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "vendor-table-category",
							children: "Category"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1391,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "vendor-table-actions-label",
							style: { textAlign: "right" },
							children: "Actions"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1393,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1378,
					columnNumber: 9
				}, this),
				filtered.length === 0 && /* @__PURE__ */ (void 0)("div", {
					style: {
						padding: 30,
						fontSize: 13.5,
						color: palette.inkSoft,
						textAlign: "center"
					},
					children: "No gift items match your search."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1400,
					columnNumber: 35
				}, this),
				filtered.map((product) => {
					const Icon = Gift;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "vendor-product-row vp-row",
						style: {
							display: "grid",
							gridTemplateColumns: "minmax(0,1fr) 90px 80px 110px 100px",
							alignItems: "center",
							padding: "11px 14px",
							borderTop: `1px solid ${palette.hairline}`
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: 10,
									minWidth: 0
								},
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									style: {
										width: 36,
										height: 36,
										borderRadius: 9,
										background: palette.roseSoft,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										overflow: "hidden",
										flexShrink: 0
									},
									children: product.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: product.image,
										alt: "",
										style: {
											width: "100%",
											height: "100%",
											objectFit: "cover"
										}
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1435,
										columnNumber: 36
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
										size: 17,
										color: palette.rose
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1439,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1424,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									style: {
										fontSize: 13.5,
										overflow: "hidden",
										textOverflow: "ellipsis",
										whiteSpace: "nowrap"
									},
									children: product.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1442,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1418,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								style: {
									fontSize: 13.5,
									fontWeight: 700,
									color: palette.roseDark
								},
								children: ["$", product.price.toFixed(2)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1452,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								style: {
									fontSize: 13.5,
									color: product.stock < 10 ? palette.rose : palette.ink
								},
								children: product.stock
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1460,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "vendor-table-category",
								style: {
									fontSize: 13,
									color: palette.inkSoft
								},
								children: product.category || "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1467,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "vendor-product-actions",
								style: {
									display: "flex",
									gap: 6,
									justifyContent: "flex-end"
								},
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => {
										setEditingId(product.id);
										setShowForm(false);
									},
									style: iconButtonStyle,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, {
										size: 14,
										color: palette.inkSoft
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1483,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1479,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setConfirmDeleteId(product.id),
									style: iconButtonStyle,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, {
										size: 14,
										color: palette.roseDark
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1487,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1486,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1474,
								columnNumber: 15
							}, this)
						]
					}, product.id, true, {
						fileName: _jsxFileName,
						lineNumber: 1411,
						columnNumber: 16
					}, this);
				})
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 1372,
			columnNumber: 7
		}, this),
		confirmDeleteId !== null && /* @__PURE__ */ (void 0)("div", {
			style: {
				position: "fixed",
				inset: 0,
				background: "rgba(43,26,34,0.35)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: 16,
				zIndex: 100
			},
			children: /* @__PURE__ */ (void 0)("div", {
				style: {
					background: "#fff",
					borderRadius: 16,
					padding: 22,
					maxWidth: 340,
					width: "100%",
					boxShadow: "0 20px 60px rgba(0,0,0,0.18)"
				},
				children: [
					/* @__PURE__ */ (void 0)("div", {
						style: {
							fontSize: 16,
							fontWeight: 700,
							marginBottom: 8
						},
						children: "Remove this gift item?"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1512,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						style: {
							fontSize: 13.5,
							color: palette.inkSoft,
							marginBottom: 20,
							lineHeight: 1.6
						},
						children: "This action cannot be undone. The product will no longer be visible to buyers."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1520,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						style: {
							display: "flex",
							gap: 10,
							justifyContent: "flex-end"
						},
						children: [/* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setConfirmDeleteId(null),
							style: secondaryButtonStyle,
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1534,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => deleteProduct(confirmDeleteId),
							style: {
								...primaryButtonStyle,
								background: palette.roseDark
							},
							children: "Remove item"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1538,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1529,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1504,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 1494,
			columnNumber: 36
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 1317,
		columnNumber: 10
	}, this);
}
function Vendor() {
	const { products: catalogProducts, addProduct, updateProduct, deleteProduct } = useProducts();
	const vendorId = (() => {
		try {
			const storedUser = localStorage.getItem("gifty_user");
			const parsedUser = storedUser ? JSON.parse(storedUser) : null;
			return parsedUser?.uid || parsedUser?.id || null;
		} catch {
			return null;
		}
	})();
	const [tab, setTab] = (0, import_react.useState)("overview");
	const [following, setFollowing] = (0, import_react.useState)(false);
	const products = (0, import_react.useMemo)(() => catalogProducts.filter((product) => !vendorId || product.vendorId === vendorId), [catalogProducts, vendorId]);
	const [conversations, setConversations] = (0, import_react.useState)(initialConversations);
	const [vendor, setVendor] = (0, import_react.useState)(() => {
		const fallback = {
			name: "Wrapped & Co. Gifts",
			location: "Colombo, Sri Lanka",
			hours: "Mon–Sat, 9:00 AM – 8:00 PM",
			phone: "+94 77 123 4567",
			email: "hello@wrappedandco.com",
			website: "wrappedandco.com"
		};
		try {
			const storedUser = localStorage.getItem("gifty_user");
			const storedVendor = (storedUser ? JSON.parse(storedUser) : null)?.vendor;
			return storedVendor ? {
				...fallback,
				...storedVendor
			} : fallback;
		} catch {
			return fallback;
		}
	});
	const [editingProfile, setEditingProfile] = (0, import_react.useState)(false);
	const [productSearch, setProductSearch] = (0, import_react.useState)("");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const categories = (0, import_react.useMemo)(() => ["All", ...Array.from(new Set(products.map((product) => product.category).filter((category) => Boolean(category))))], [products]);
	const storefrontProducts = (0, import_react.useMemo)(() => {
		return products.filter((product) => {
			const matchesSearch = product.name.toLowerCase().includes(productSearch.toLowerCase());
			const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
			return matchesSearch && matchesCategory;
		});
	}, [
		products,
		productSearch,
		selectedCategory
	]);
	const tabs = [
		{
			id: "overview",
			label: "Overview"
		},
		{
			id: "products",
			label: "Storefront"
		},
		{
			id: "manage",
			label: "Manage items"
		},
		{
			id: "messages",
			label: "Messages"
		},
		{
			id: "policies",
			label: "Shipping & returns"
		}
	];
	function handleShare() {
		if (navigator.share && typeof window !== "undefined") navigator.share({
			title: vendor.name,
			text: `Visit ${vendor.name}`,
			url: window.location.href
		});
		else {
			navigator.clipboard?.writeText(window.location.href);
			alert("Store link copied to clipboard.");
		}
	}
	function saveVendorProfile() {
		try {
			const storedUser = localStorage.getItem("gifty_user");
			if (storedUser) {
				const parsedUser = JSON.parse(storedUser);
				localStorage.setItem("gifty_user", JSON.stringify({
					...parsedUser,
					vendor
				}));
			}
		} catch {}
		setEditingProfile(false);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "vendor-page",
		style: {
			background: palette.bg,
			minHeight: "100vh",
			padding: "24px 16px 50px"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: fontImport }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1655,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					maxWidth: 1100,
					margin: "0 auto"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "vp-hero-anim",
						style: {
							display: "flex",
							alignItems: "center",
							gap: 6,
							fontSize: 12.5,
							color: palette.inkSoft,
							marginBottom: 14
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Marketplace" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1669,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { size: 13 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1671,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Gifts & Novelty" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1673,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { size: 13 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1675,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								style: { color: palette.ink },
								children: vendor.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1677,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1661,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StoreBanner, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1684,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "vp-hero-anim",
						style: {
							display: "flex",
							flexWrap: "wrap",
							gap: 18,
							alignItems: "flex-end",
							justifyContent: "space-between",
							marginTop: -38,
							padding: "0 6px",
							position: "relative"
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								display: "flex",
								alignItems: "flex-end",
								gap: 14
							},
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									width: 82,
									height: 82,
									borderRadius: 18,
									background: "#fff",
									border: `4px solid ${palette.bg}`,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									boxShadow: "0 6px 20px rgba(194,24,91,0.16)"
								},
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gift, {
									size: 34,
									color: palette.rose,
									strokeWidth: 1.6
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1712,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1701,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: { paddingBottom: 4 },
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: 8,
										flexWrap: "wrap"
									},
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
										className: "vendor-display",
										style: {
											fontSize: 26,
											fontWeight: 650,
											margin: 0
										},
										children: vendor.name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1724,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BadgeCheck, {
										size: 20,
										color: palette.rose,
										fill: palette.roseSoft
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1732,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1718,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: 10,
										marginTop: 6,
										flexWrap: "wrap"
									},
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: 4,
											fontSize: 13.5
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {
												size: 14,
												fill: palette.rose,
												color: palette.rose
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1748,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "4.8" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1750,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												style: { color: palette.inkSoft },
												children: "(1,204 ratings)"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1752,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1742,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: 4,
											fontSize: 11.5,
											color: palette.success,
											background: palette.successSoft,
											padding: "4px 9px",
											borderRadius: 999,
											fontWeight: 700
										},
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { size: 13 }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1770,
											columnNumber: 19
										}, this), "Business account"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1759,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1735,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1715,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1696,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "vendor-hero-actions",
							style: {
								display: "flex",
								gap: 10,
								paddingBottom: 4
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: handleShare,
									"aria-label": "Share store",
									style: iconButtonStyle,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share2, {
										size: 17,
										color: palette.inkSoft
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1783,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1782,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setFollowing((previous) => !previous),
									"aria-label": "Follow store",
									style: {
										...iconButtonStyle,
										background: following ? palette.roseSoft : "#fff"
									},
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, {
										size: 17,
										color: following ? palette.roseDark : palette.inkSoft,
										fill: following ? palette.roseDark : "none"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1790,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1786,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setTab("products"),
									className: "vp-primary-btn vp-focus",
									style: primaryButtonStyle,
									children: "Visit store"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1793,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1777,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1686,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "vp-hero-anim",
						style: {
							display: "flex",
							flexWrap: "wrap",
							gap: 24,
							background: "#fff",
							border: `1px solid ${palette.hairline}`,
							borderRadius: 14,
							padding: "15px 20px",
							marginTop: 20
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatChip, {
								icon: Package,
								label: "products",
								value: String(products.length)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1809,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatChip, {
								icon: Users,
								label: "followers",
								value: "12.4K"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1811,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatChip, {
								icon: ShoppingBag,
								label: "orders shipped",
								value: "28.6K"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1813,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatChip, {
								icon: Clock,
								label: "response rate",
								value: "98%"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1815,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatChip, {
								icon: Truck,
								label: "on-time delivery",
								value: "96%"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1817,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1799,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							display: "flex",
							gap: 26,
							borderBottom: `1px solid ${palette.hairline}`,
							marginTop: 28,
							marginBottom: 24,
							flexWrap: "wrap"
						},
						children: tabs.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setTab(item.id),
							"data-active": tab === item.id,
							className: "vp-tab-btn vp-focus",
							style: {
								background: "none",
								border: "none",
								padding: "0 0 13px",
								fontSize: 14,
								fontWeight: 700,
								color: tab === item.id ? palette.ink : palette.inkSoft,
								cursor: "pointer"
							},
							children: item.label
						}, item.id, false, {
							fileName: _jsxFileName,
							lineNumber: 1828,
							columnNumber: 29
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1820,
						columnNumber: 9
					}, this),
					tab === "overview" && /* @__PURE__ */ (void 0)("div", {
						className: "vendor-overview-grid",
						style: {
							display: "grid",
							gridTemplateColumns: "minmax(0,1fr) 310px",
							gap: 26
						},
						children: [/* @__PURE__ */ (void 0)("div", { children: [
							/* @__PURE__ */ (void 0)("div", {
								style: {
									background: "#fff",
									border: `1px solid ${palette.hairline}`,
									borderRadius: 14,
									padding: 22,
									marginBottom: 20
								},
								children: [/* @__PURE__ */ (void 0)("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: 8,
										marginBottom: 12
									},
									children: [/* @__PURE__ */ (void 0)(Store, {
										size: 18,
										color: palette.rose
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1860,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("h2", {
										className: "vendor-display",
										style: {
											fontSize: 20,
											margin: 0
										},
										children: "About our business"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1862,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1854,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									style: {
										fontSize: 14,
										lineHeight: 1.75,
										color: palette.inkSoft,
										marginBottom: 0
									},
									children: "We make small, thoughtful things for the moments people want to mark. From candles poured in Colombo to personalised keepsake boxes, every parcel leaves our workshop carefully wrapped by hand."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1870,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1847,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 14
								},
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", {
									className: "vendor-display",
									style: {
										fontSize: 20,
										margin: 0
									},
									children: "Featured gifts"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1889,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("div", {
									style: {
										fontSize: 12.5,
										color: palette.inkSoft,
										marginTop: 4
									},
									children: "Popular products from this store"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1896,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1888,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setTab("products"),
									style: {
										border: "none",
										background: "none",
										color: palette.roseDark,
										fontSize: 12.5,
										fontWeight: 700,
										cursor: "pointer"
									},
									children: "View all"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1905,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1882,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "vendor-products-grid",
								style: {
									display: "grid",
									gridTemplateColumns: "repeat(3, minmax(0,1fr))",
									gap: 14
								},
								children: products.slice(0, 6).map((product) => /* @__PURE__ */ (void 0)(ProductCard, { product }, product.id, false, {
									fileName: _jsxFileName,
									lineNumber: 1922,
									columnNumber: 54
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1917,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1846,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: 18
							},
							children: [/* @__PURE__ */ (void 0)(MessagesSummaryCard, {
								conversations,
								onOpen: () => setTab("messages")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1931,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)(BusinessInfoCard, {
								vendor,
								onEdit: () => setEditingProfile(true)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1933,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1926,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1841,
						columnNumber: 32
					}, this),
					tab === "products" && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
						style: {
							display: "flex",
							gap: 12,
							flexWrap: "wrap",
							marginBottom: 20
						},
						children: [/* @__PURE__ */ (void 0)("div", {
							style: {
								position: "relative",
								flex: 1,
								minWidth: 220
							},
							children: [/* @__PURE__ */ (void 0)(Search, {
								size: 17,
								color: palette.inkSoft,
								style: {
									position: "absolute",
									left: 12,
									top: "50%",
									transform: "translateY(-50%)"
								}
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1949,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("input", {
								className: "vp-input",
								value: productSearch,
								onChange: (event) => setProductSearch(event.target.value),
								placeholder: "Search products in this store...",
								style: {
									width: "100%",
									border: `1px solid ${palette.hairline}`,
									borderRadius: 10,
									padding: "11px 12px 11px 38px",
									fontSize: 13.5,
									background: "#fff"
								}
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1956,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1944,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							style: {
								display: "flex",
								gap: 8,
								alignItems: "center",
								flexWrap: "wrap"
							},
							children: [/* @__PURE__ */ (void 0)(Funnel, {
								size: 16,
								color: palette.inkSoft
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1972,
								columnNumber: 17
							}, this), categories.map((category) => /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setSelectedCategory(category),
								style: {
									border: selectedCategory === category ? `1px solid ${palette.rose}` : `1px solid ${palette.hairline}`,
									background: selectedCategory === category ? palette.roseSoft : "#fff",
									color: selectedCategory === category ? palette.roseDark : palette.inkSoft,
									padding: "8px 12px",
									borderRadius: 999,
									fontSize: 12,
									fontWeight: 600,
									cursor: "pointer"
								},
								children: category
							}, category, false, {
								fileName: _jsxFileName,
								lineNumber: 1974,
								columnNumber: 45
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1966,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1938,
						columnNumber: 13
					}, this), storefrontProducts.length === 0 ? /* @__PURE__ */ (void 0)("div", {
						style: {
							padding: 40,
							textAlign: "center",
							background: "#fff",
							borderRadius: 14,
							border: `1px solid ${palette.hairline}`,
							color: palette.inkSoft
						},
						children: "No products found."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1989,
						columnNumber: 48
					}, this) : /* @__PURE__ */ (void 0)("div", {
						className: "vendor-products-grid",
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(4, minmax(0,1fr))",
							gap: 16
						},
						children: storefrontProducts.map((product) => /* @__PURE__ */ (void 0)(ProductCard, {
							product,
							onAddToCart: () => alert(`${product.name} added to cart`)
						}, product.id, false, {
							fileName: _jsxFileName,
							lineNumber: 2003,
							columnNumber: 52
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1998,
						columnNumber: 24
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1937,
						columnNumber: 32
					}, this),
					tab === "manage" && /* @__PURE__ */ (void 0)(ManageProductsPanel, {
						products,
						onAdd: addProduct,
						onUpdate: updateProduct,
						onDelete: deleteProduct
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 2007,
						columnNumber: 30
					}, this),
					tab === "messages" && /* @__PURE__ */ (void 0)(MessagesPanel, {
						conversations,
						setConversations
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 2009,
						columnNumber: 32
					}, this),
					tab === "policies" && /* @__PURE__ */ (void 0)("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
							gap: 16
						},
						children: [
							{
								icon: Package,
								title: "Dispatch time",
								body: "Orders are carefully wrapped and handed to our courier within 1–2 business days."
							},
							{
								icon: Truck,
								title: "Shipping",
								body: "Tracked local delivery takes approximately 3–5 days. International shipping times depend on the destination."
							},
							{
								icon: ShieldCheck,
								title: "Returns",
								body: "Unused eligible items can be returned within 14 days. Personalised products are made to order and are final sale."
							},
							{
								icon: MessageCircle,
								title: "Customer support",
								body: "Contact our store directly through the in-app messaging system for fast assistance."
							}
						].map((policy) => {
							const Icon = policy.icon;
							return /* @__PURE__ */ (void 0)("div", {
								className: "vp-card-hover",
								style: {
									background: "#fff",
									border: `1px solid ${palette.hairline}`,
									borderRadius: 14,
									padding: 20
								},
								children: [
									/* @__PURE__ */ (void 0)("div", {
										style: {
											width: 42,
											height: 42,
											borderRadius: 11,
											background: palette.roseSoft,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											marginBottom: 16
										},
										children: /* @__PURE__ */ (void 0)(Icon, {
											size: 20,
											color: palette.roseDark
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2050,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2040,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										style: {
											fontSize: 15,
											fontWeight: 700,
											marginBottom: 8
										},
										children: policy.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2053,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										style: {
											fontSize: 13,
											lineHeight: 1.65,
											color: palette.inkSoft
										},
										children: policy.body
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2061,
										columnNumber: 19
									}, this)
								]
							}, policy.title, true, {
								fileName: _jsxFileName,
								lineNumber: 2034,
								columnNumber: 18
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 2011,
						columnNumber: 32
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1657,
				columnNumber: 7
			}, this),
			editingProfile && /* @__PURE__ */ (void 0)("div", {
				style: {
					position: "fixed",
					inset: 0,
					zIndex: 100,
					background: "rgba(43,26,34,0.35)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: 16
				},
				children: /* @__PURE__ */ (void 0)("div", {
					style: {
						background: "#fff",
						borderRadius: 16,
						width: "100%",
						maxWidth: 500,
						padding: 22,
						maxHeight: "90vh",
						overflowY: "auto"
					},
					children: [
						/* @__PURE__ */ (void 0)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 18
							},
							children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
								style: {
									fontSize: 16,
									fontWeight: 700
								},
								children: "Edit business profile"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2099,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", {
								style: {
									fontSize: 12,
									color: palette.inkSoft,
									marginTop: 3
								},
								children: "Manage your public vendor information"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2106,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 2098,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setEditingProfile(false),
								style: {
									border: "none",
									background: "none",
									cursor: "pointer"
								},
								children: /* @__PURE__ */ (void 0)(X, { size: 20 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 2120,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2115,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 2092,
							columnNumber: 13
						}, this),
						[
							["name", "Business name"],
							["location", "Location"],
							["hours", "Business hours"],
							["phone", "Phone number"],
							["email", "Email address"],
							["website", "Website"]
						].map(([field, label]) => /* @__PURE__ */ (void 0)("div", {
							style: { marginBottom: 13 },
							children: [/* @__PURE__ */ (void 0)("label", {
								style: labelStyle,
								children: label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2127,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("input", {
								className: "vp-input",
								value: vendor[field],
								onChange: (event) => setVendor((previous) => ({
									...previous,
									[field]: event.target.value
								})),
								style: inputStyle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2129,
								columnNumber: 17
							}, this)]
						}, field, true, {
							fileName: _jsxFileName,
							lineNumber: 2124,
							columnNumber: 242
						}, this)),
						/* @__PURE__ */ (void 0)("div", {
							style: {
								display: "flex",
								justifyContent: "flex-end",
								gap: 10,
								marginTop: 20
							},
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setEditingProfile(false),
								style: secondaryButtonStyle,
								children: "Cancel"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2141,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: saveVendorProfile,
								style: primaryButtonStyle,
								children: "Save profile"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2145,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 2135,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 2083,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 2073,
				columnNumber: 26
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 1650,
		columnNumber: 10
	}, this);
}
var labelStyle = {
	fontSize: 12,
	color: palette.inkSoft,
	display: "block",
	marginBottom: 5,
	fontWeight: 500
};
var inputStyle = {
	width: "100%",
	border: `1px solid ${palette.hairline}`,
	borderRadius: 9,
	padding: "9px 11px",
	fontSize: 13.5,
	background: "#fff"
};
var primaryButtonStyle = {
	padding: "10px 18px",
	borderRadius: 9,
	border: "none",
	background: palette.rose,
	color: "#fff",
	fontSize: 13.5,
	fontWeight: 700,
	cursor: "pointer"
};
var secondaryButtonStyle = {
	padding: "10px 16px",
	borderRadius: 9,
	border: `1px solid ${palette.hairline}`,
	background: "#fff",
	color: palette.ink,
	fontSize: 13.5,
	cursor: "pointer"
};
var iconButtonStyle = {
	width: 38,
	height: 38,
	borderRadius: 9,
	border: `1px solid ${palette.hairline}`,
	background: "#fff",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer"
};
//#endregion
export { Vendor as component };
