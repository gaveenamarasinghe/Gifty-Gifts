import { o as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { a as getApp, o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { a as createUserWithEmailAndPassword, c as onAuthStateChanged, d as setPersistence, f as signInWithEmailAndPassword, h as updateProfile, l as sendEmailVerification, m as signOut, n as GoogleAuthProvider, p as signInWithPopup, r as browserLocalPersistence, s as getAuth, t as FacebookAuthProvider, u as sendPasswordResetEmail } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { t as getFirestore } from "../_libs/@firebase/firestore+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { B as notFound, _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useNavigate, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { E as Menu, L as Heart, N as Instagram, V as Facebook, a as Twitter, i as User, p as ShoppingBag, t as X, v as Search, z as Gift } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/firebase-3jYZ8am9.js
var firebaseConfig = {
	apiKey: "AIzaSyDnAi1nb2IjdTpKTJQZPSwBT8jDCiSar2M",
	authDomain: "giftlk-7a0af.firebaseapp.com",
	projectId: "giftlk-7a0af",
	storageBucket: "giftlk-7a0af.firebasestorage.app",
	messagingSenderId: "866418843452",
	appId: "1:866418843452:web:0f8dbccb6952f3acaf8839"
};
var isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId);
var app = null;
var auth = null;
if (isFirebaseConfigured) {
	app = getApps().length ? getApp() : initializeApp(firebaseConfig);
	auth = getAuth(app);
	getFirestore(app);
	setPersistence(auth, browserLocalPersistence).catch((error) => {
		console.error("Firebase persistence error:", error);
	});
}
function getFirebaseAuth() {
	return auth;
}
function googleProvider() {
	const provider = new GoogleAuthProvider();
	provider.setCustomParameters({ prompt: "select_account" });
	return provider;
}
function facebookProvider() {
	const provider = new FacebookAuthProvider();
	provider.setCustomParameters({ display: "popup" });
	return provider;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/ProductContext-Cg3TxOXO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var API_URL$1 = "http://localhost:5000";
function getToken() {
	return localStorage.getItem("gifty_token");
}
async function fetchJson(path, options = {}) {
	const headers = {
		"Content-Type": "application/json",
		...options.headers || {}
	};
	const token = getToken();
	if (token) headers.Authorization = `Bearer ${token}`;
	const response = await fetch(`${API_URL$1}${path}`, {
		...options,
		headers
	});
	return {
		response,
		data: (response.headers.get("content-type") || "").includes("application/json") ? await response.json() : null
	};
}
var _jsxFileName$9 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/context/ProductContext.tsx";
function normalizeProduct(product) {
	return {
		...product,
		mrp: product.mrp ?? product.price,
		reviews: product.reviews ?? product.reviewCount ?? 0,
		rating: product.rating ?? 0,
		emoji: product.emoji ?? "🎁",
		tags: product.tags ?? []
	};
}
var ProductContext = (0, import_react.createContext)(null);
function ProductProvider({ children }) {
	const [products, setProducts] = (0, import_react.useState)([]);
	const reloadProducts = async () => {
		try {
			const { response, data } = await fetchJson("/api/products");
			if (!response.ok) throw new Error(data?.message || "Failed to load products");
			setProducts((data.products || []).map(normalizeProduct));
		} catch (error) {
			console.warn("Product reload failed", error);
			setProducts([]);
		}
	};
	const addProduct = async (product) => {
		const { response, data } = await fetchJson("/api/products", {
			method: "POST",
			body: JSON.stringify(product)
		});
		if (!response.ok) throw new Error(data?.message || "Failed to create product");
		const created = normalizeProduct(data.product);
		setProducts((prev) => [created, ...prev]);
		return created;
	};
	const updateProduct = async (product) => {
		const { response, data } = await fetchJson(`/api/products/${product.id}`, {
			method: "PUT",
			body: JSON.stringify(product)
		});
		if (!response.ok) throw new Error(data?.message || "Failed to update product");
		const updated = normalizeProduct(data.product);
		setProducts((prev) => prev.map((p) => p.id === updated.id ? updated : p));
		return updated;
	};
	const deleteProduct = async (productId) => {
		const { response, data } = await fetchJson(`/api/products/${productId}`, { method: "DELETE" });
		if (!response.ok) throw new Error(data?.message || "Failed to delete product");
		setProducts((prev) => prev.filter((p) => p.id !== productId));
	};
	(0, import_react.useEffect)(() => {
		reloadProducts();
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		products,
		reloadProducts,
		addProduct,
		updateProduct,
		deleteProduct
	}), [products]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 79,
		columnNumber: 10
	}, this);
}
function useProducts() {
	const ctx = (0, import_react.useContext)(ProductContext);
	if (!ctx) throw new Error("useProducts must be used inside ProductProvider");
	return ctx;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/data-CGn8964w.js
var categories = [
	{
		id: "c1",
		slug: "gift-hampers",
		name: "Gift Hampers",
		emoji: "🎁",
		blurb: "Curated boxes of joy"
	},
	{
		id: "c2",
		slug: "personalized",
		name: "Personalized",
		emoji: "✨",
		blurb: "Made just for them"
	},
	{
		id: "c3",
		slug: "flowers",
		name: "Flowers",
		emoji: "💐",
		blurb: "Fresh hand-tied blooms"
	},
	{
		id: "c4",
		slug: "cakes",
		name: "Cakes",
		emoji: "🎂",
		blurb: "Baked the same morning"
	},
	{
		id: "c5",
		slug: "chocolates",
		name: "Chocolates",
		emoji: "🍫",
		blurb: "Single-origin cocoa"
	},
	{
		id: "c6",
		slug: "perfumes",
		name: "Perfumes",
		emoji: "🧴",
		blurb: "Signature scents"
	},
	{
		id: "c7",
		slug: "jewellery",
		name: "Jewellery",
		emoji: "💍",
		blurb: "Everyday heirlooms"
	},
	{
		id: "c8",
		slug: "greeting-cards",
		name: "Greeting Cards",
		emoji: "💌",
		blurb: "Letterpress notes"
	},
	{
		id: "c9",
		slug: "teddy-bears",
		name: "Teddy Bears",
		emoji: "🧸",
		blurb: "Impossibly soft"
	}
];
function p(id, name, category, price, mrp, rating, reviews, emoji, description, tags) {
	return {
		id: `p${id}`,
		slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
		name,
		category,
		price,
		mrp,
		rating,
		reviews,
		stock: 8 + id * 7 % 40,
		emoji,
		description,
		tags
	};
}
var products = [
	p(1, "Rose Gold Luxe Hamper", "gift-hampers", 129, 159, 4.9, 218, "🎁", "A signature Gifty hamper: single-origin chocolates, a scented candle, dried roses and a handwritten note, packed in a rose-gold keepsake box.", ["featured", "bestseller"]),
	p(2, "Sweetheart Celebration Box", "gift-hampers", 89, 110, 4.7, 142, "🍬", "Pastel confetti box filled with macarons, pralines and a mini bottle of sparkling rosé.", ["bestseller", "offer"]),
	p(3, "Engraved Name Necklace", "personalized", 74, 95, 4.8, 331, "✨", "18k gold-plated nameplate necklace, engraved by hand in up to 12 characters.", ["new", "featured"]),
	p(4, "Custom Photo Crystal", "personalized", 59, 79, 4.6, 96, "🔮", "Your favourite photo laser-etched inside optical crystal with a warm LED base.", ["new"]),
	p(5, "Blush Peony Bouquet", "flowers", 65, 80, 4.9, 405, "💐", "Twenty-four stems of blush peonies and eucalyptus, hand-tied in silk ribbon.", ["bestseller", "featured"]),
	p(6, "Eternal Rose Dome", "flowers", 119, 149, 4.8, 187, "🌹", "A preserved rose that lasts three years, under hand-blown glass.", ["offer"]),
	p(7, "Velvet Red Truffle Cake", "cakes", 48, 58, 4.7, 264, "🎂", "Belgian truffle sponge with cream cheese frosting. Baked fresh the morning of delivery.", ["bestseller"]),
	p(8, "Strawberry Cloud Cake", "cakes", 44, 52, 4.5, 121, "🍰", "Airy chiffon layers, mascarpone cream and macerated strawberries.", ["new"]),
	p(9, "Grand Cru Chocolate Box", "chocolates", 39, 49, 4.8, 298, "🍫", "Twenty-four hand-tempered pralines from single-origin Ecuadorian cocoa.", ["featured"]),
	p(10, "Pink Champagne Truffles", "chocolates", 29, 36, 4.6, 154, "🥂", "Champagne ganache dusted in raspberry powder.", ["offer"]),
	p(11, "Amour Eau de Parfum", "perfumes", 95, 130, 4.7, 176, "🧴", "Peony, bergamot and vanilla musk in a faceted crystal flacon. 50ml.", ["featured", "offer"]),
	p(12, "Midnight Bloom Perfume", "perfumes", 110, 140, 4.6, 88, "🌙", "Night jasmine, amber and soft leather. An evening signature.", ["new"]),
	p(13, "Pearl Drop Earrings", "jewellery", 82, 105, 4.8, 209, "💍", "Freshwater pearls set in recycled sterling silver.", ["bestseller"]),
	p(14, "Heart Charm Bracelet", "jewellery", 68, 85, 4.7, 143, "💖", "Adjustable chain with a polished heart charm, ready to engrave.", ["offer"]),
	p(15, "Letterpress Love Notes", "greeting-cards", 18, 24, 4.9, 312, "💌", "Set of six cotton-paper cards, letterpressed in blush ink.", ["new"]),
	p(16, "Birthday Confetti Card", "greeting-cards", 12, 16, 4.5, 77, "🎉", "Pop-open card that releases biodegradable confetti.", ["offer"]),
	p(17, "Giant Cuddle Bear", "teddy-bears", 89, 115, 4.9, 421, "🧸", "One metre of ultra-plush teddy with a satin bow.", ["bestseller", "featured"]),
	p(18, "Mini Blush Bear Duo", "teddy-bears", 42, 55, 4.6, 132, "🐻", "A pair of pocket bears that hold hands with magnets.", ["new"])
];
var coupons = [
	{
		code: "GIFTY10",
		label: "10% off your order",
		type: "percent",
		value: 10
	},
	{
		code: "LOVE25",
		label: "$25 off orders over $150",
		type: "flat",
		value: 25,
		min: 150
	},
	{
		code: "FREESHIP",
		label: "Free express shipping",
		type: "shipping",
		value: 0
	}
];
var testimonials = [
	{
		name: "Amara P.",
		city: "London",
		text: "The hamper arrived in a box so beautiful my sister kept it. Delivery was to the minute.",
		rating: 5
	},
	{
		name: "Diego R.",
		city: "Madrid",
		text: "Ordered the peony bouquet at 11pm for next-day. It looked exactly like the photo.",
		rating: 5
	},
	{
		name: "Sana K.",
		city: "Dubai",
		text: "The engraved necklace is genuinely luxury quality. Third order this year.",
		rating: 5
	}
];
var faqs = [
	{
		q: "How fast can you deliver?",
		a: "Same-day delivery is available in 40+ cities when you order before 4pm. Everywhere else is next-day express."
	},
	{
		q: "Can I add a gift message?",
		a: "Yes — at checkout you can add a handwritten note, choose gift wrapping and hide the price from the recipient."
	},
	{
		q: "Do you deliver on a specific date and time?",
		a: "Choose your delivery date and a two-hour time slot at checkout, including weekends and holidays."
	},
	{
		q: "What is your refund policy?",
		a: "If anything arrives less than perfect, tell us within 48 hours and we replace it or refund you in full."
	},
	{
		q: "Do you ship internationally?",
		a: "We ship to 22 countries. Perishables such as cakes and flowers are sourced from a local partner florist or bakery."
	}
];
var byTag = (tag) => products.filter((x) => x.tags.includes(tag));
var byCategory = (slug) => products.filter((x) => x.category === slug);
var currency = (n) => n.toLocaleString("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
});
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/blog-C1QV2t_R.js
var posts = [
	{
		slug: "how-to-choose-the-perfect-hamper",
		title: "How to choose the perfect gift hamper",
		excerpt: "Five questions our concierge asks before building any bespoke box.",
		date: "2026-06-12",
		readingTime: "4 min",
		emoji: "🎁",
		body: [
			"A hamper works when it tells a small story about the person receiving it. Before we build one, we ask five questions: what is the occasion, what do they treat themselves to, what do they never buy themselves, do they share, and how will it arrive?",
			"The last one matters more than people expect. A hamper opened at a reception desk needs different packaging from one opened at a kitchen table.",
			"Our rule of thumb: one hero item, two supporting items, and one small surprise that costs almost nothing but feels personal — a handwritten note, a pressed flower, a wax seal."
		]
	},
	{
		slug: "flowers-that-last-longer",
		title: "Seven ways to make cut flowers last twice as long",
		excerpt: "Our florists' honest advice — and the one supermarket trick that actually works.",
		date: "2026-05-28",
		readingTime: "3 min",
		emoji: "💐",
		body: [
			"Recut stems at a 45-degree angle under running water, change the water every two days, and keep the vase away from fruit bowls — ripening fruit releases ethylene, which ages blooms fast.",
			"Skip the aspirin myth. A teaspoon of sugar plus a drop of bleach genuinely does outperform it: sugar feeds the stems, bleach keeps the bacteria down.",
			"Peonies in particular prefer a cool room and a deep drink on the first night."
		]
	},
	{
		slug: "personalised-gifts-that-do-not-feel-cheesy",
		title: "Personalised gifts that don't feel cheesy",
		excerpt: "Engraving is easy to get wrong. Here's the line between sentimental and awkward.",
		date: "2026-05-04",
		readingTime: "5 min",
		emoji: "✨",
		body: [
			"The best personalisation is quiet. An initial inside a band, a date on the clasp, coordinates on the back of a pendant — details only the wearer knows about.",
			"Avoid full sentences on jewellery, and avoid nicknames on anything worn in public.",
			"For photo gifts, choose an image with negative space. Crowded photos lose everything at small sizes."
		]
	}
];
var findPost = (slug) => posts.find((p) => p.slug === slug);
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DGbT_glc.js
var styles_default = "/assets/styles-D4KJj-kM.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var _jsxFileName$8 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/context/AuthContext.tsx";
var AuthContext = (0, import_react.createContext)(null);
var API_URL = "http://localhost:5000";
var DEMO_KEY = "gifty.demo-user";
function mapUser(firebaseUser, role = "customer") {
	return {
		uid: firebaseUser.uid,
		email: firebaseUser.email,
		name: firebaseUser.displayName,
		photoURL: firebaseUser.photoURL,
		emailVerified: firebaseUser.emailVerified,
		role
	};
}
async function loginBackend(firebaseUser) {
	const idToken = await firebaseUser.getIdToken(true);
	const response = await fetch(`${API_URL}/api/auth/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ idToken })
	});
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Backend login failed");
	if (data.token) localStorage.setItem("gifty_token", data.token);
	if (data.user) {
		localStorage.setItem("gifty_user", JSON.stringify(data.user));
		return data.user.role || "customer";
	}
	return "customer";
}
function AuthProvider({ children }) {
	const demoMode = !isFirebaseConfigured;
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	function setDemoUser(next) {
		setUser(next);
		if (next) localStorage.setItem(DEMO_KEY, JSON.stringify(next));
		else localStorage.removeItem(DEMO_KEY);
	}
	(0, import_react.useEffect)(() => {
		if (demoMode) {
			const saved = localStorage.getItem(DEMO_KEY);
			if (saved) setUser(JSON.parse(saved));
			setLoading(false);
			return;
		}
		if (!auth) {
			setLoading(false);
			return;
		}
		return onAuthStateChanged(auth, async (firebaseUser) => {
			if (!firebaseUser) {
				setUser(null);
				setLoading(false);
				return;
			}
			try {
				const role = await loginBackend(firebaseUser);
				setUser(mapUser(firebaseUser, role));
			} catch (error) {
				console.error(error);
				setUser(mapUser(firebaseUser));
			}
			setLoading(false);
		});
	}, [demoMode]);
	const value = (0, import_react.useMemo)(() => ({
		user,
		loading,
		demoMode,
		async register(name, email, password) {
			if (demoMode) return setDemoUser({
				uid: "demo-" + Date.now(),
				email,
				name,
				photoURL: null,
				emailVerified: false,
				role: "customer"
			});
			if (!auth) throw new Error("Firebase not configured");
			const credential = await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(credential.user, { displayName: name });
			await sendEmailVerification(credential.user);
			const role = await loginBackend(credential.user);
			setUser(mapUser(credential.user, role));
		},
		async login(email, password) {
			if (demoMode) return setDemoUser({
				uid: "demo-user",
				email,
				name: email.split("@")[0],
				photoURL: null,
				emailVerified: true,
				role: "customer"
			});
			if (!auth) throw new Error("Firebase not configured");
			const credential = await signInWithEmailAndPassword(auth, email, password);
			const role = await loginBackend(credential.user);
			setUser(mapUser(credential.user, role));
		},
		async loginWithGoogle() {
			if (demoMode) return setDemoUser({
				uid: "demo-google",
				email: "guest@gifty.shop",
				name: "Gifty Guest",
				photoURL: null,
				emailVerified: true,
				role: "customer"
			});
			if (!auth) throw new Error("Firebase not configured");
			const credential = await signInWithPopup(auth, googleProvider());
			const role = await loginBackend(credential.user);
			setUser(mapUser(credential.user, role));
		},
		async loginWithFacebook() {
			if (demoMode) return setDemoUser({
				uid: "demo-facebook",
				email: "guest@gifty.shop",
				name: "Gifty Guest",
				photoURL: null,
				emailVerified: true,
				role: "customer"
			});
			if (!auth) throw new Error("Firebase not configured");
			const credential = await signInWithPopup(auth, facebookProvider());
			const role = await loginBackend(credential.user);
			setUser(mapUser(credential.user, role));
		},
		async logout() {
			if (demoMode) return setDemoUser(null);
			if (auth) await signOut(auth);
			localStorage.removeItem("gifty_token");
			localStorage.removeItem("gifty_user");
			setUser(null);
		},
		async forgotPassword(email) {
			if (demoMode) return;
			if (!auth) throw new Error("Firebase not configured");
			await sendPasswordResetEmail(auth, email, { url: window.location.origin + "/reset-password" });
		},
		async resendVerification() {
			if (demoMode) return;
			if (!auth?.currentUser) throw new Error("No authenticated user");
			await sendEmailVerification(auth.currentUser);
		}
	}), [
		user,
		loading,
		demoMode
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 342,
		columnNumber: 10
	}, this);
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be inside AuthProvider");
	return ctx;
}
/**
* ShopContext — cart, wishlist, recently viewed and orders.
* Persisted to localStorage so the basket survives refreshes; the Express API
* mirrors the same shape in the `carts`, `wishlists` and `orders` collections.
*/
var _jsxFileName$7 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/context/ShopContext.tsx";
var productCache = /* @__PURE__ */ new Map();
var getProduct = (id) => productCache.get(id);
var ShopContext = (0, import_react.createContext)(null);
var KEY = "gifty.shop";
var GIFT_WRAP_PRICE = 6;
function ShopProvider({ children }) {
	const { products } = useProducts();
	const [cart, setCart] = (0, import_react.useState)([]);
	const [wishlist, setWishlist] = (0, import_react.useState)([]);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [recent, setRecent] = (0, import_react.useState)([]);
	const [coupon, setCoupon] = (0, import_react.useState)(null);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) {
				const s = JSON.parse(raw);
				setCart(s.cart ?? []);
				setWishlist(s.wishlist ?? []);
				setOrders(s.orders ?? []);
				setRecent(s.recent ?? []);
				setCoupon(s.coupon ?? null);
			}
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		localStorage.setItem(KEY, JSON.stringify({
			cart,
			wishlist,
			orders,
			recent,
			coupon
		}));
	}, [
		cart,
		wishlist,
		orders,
		recent,
		coupon,
		hydrated
	]);
	(0, import_react.useEffect)(() => {
		productCache = new Map(products.map((p) => [p.id, p]));
	}, [products]);
	const totals = (0, import_react.useMemo)(() => {
		const subtotal = cart.reduce((s, l) => s + (getProduct(l.productId)?.price ?? 0) * l.qty, 0);
		const wrap = cart.filter((l) => l.giftWrap).length * GIFT_WRAP_PRICE;
		const c = coupons.find((x) => x.code === coupon);
		let discount = 0;
		let freeShip = false;
		if (c) {
			if (c.type === "percent") discount = Math.round(subtotal * c.value / 100);
			if (c.type === "flat" && subtotal >= (c.min ?? 0)) discount = c.value;
			if (c.type === "shipping") freeShip = true;
		}
		const shipping = subtotal === 0 || subtotal > 120 || freeShip ? 0 : 9;
		const tax = Math.round((subtotal - discount) * .05);
		return {
			subtotal,
			discount,
			wrap,
			shipping,
			tax,
			total: Math.max(0, subtotal - discount + wrap + shipping + tax),
			count: cart.reduce((s, l) => s + l.qty, 0)
		};
	}, [cart, coupon]);
	const value = (0, import_react.useMemo)(() => ({
		cart,
		wishlist,
		orders,
		recent,
		coupon,
		totals,
		addToCart(productId, qty = 1) {
			setCart((prev) => {
				if (prev.find((l) => l.productId === productId)) return prev.map((l) => l.productId === productId ? {
					...l,
					qty: l.qty + qty
				} : l);
				return [...prev, {
					productId,
					qty,
					giftWrap: false
				}];
			});
			toast.success(`${getProduct(productId)?.name ?? "Item"} added to your basket`);
		},
		removeFromCart(productId) {
			setCart((prev) => prev.filter((l) => l.productId !== productId));
		},
		setQty(productId, qty) {
			setCart((prev) => qty <= 0 ? prev.filter((l) => l.productId !== productId) : prev.map((l) => l.productId === productId ? {
				...l,
				qty
			} : l));
		},
		toggleGiftWrap(productId) {
			setCart((prev) => prev.map((l) => l.productId === productId ? {
				...l,
				giftWrap: !l.giftWrap
			} : l));
		},
		clearCart() {
			setCart([]);
			setCoupon(null);
		},
		toggleWishlist(productId) {
			setWishlist((prev) => {
				const has = prev.includes(productId);
				toast[has ? "message" : "success"](has ? "Removed from wishlist" : "Saved to wishlist");
				return has ? prev.filter((x) => x !== productId) : [...prev, productId];
			});
		},
		applyCoupon(code) {
			const found = coupons.find((c) => c.code.toLowerCase() === code.trim().toLowerCase());
			if (!found) {
				toast.error("That coupon code isn't valid");
				return false;
			}
			setCoupon(found.code);
			toast.success(found.label + " applied");
			return true;
		},
		removeCoupon() {
			setCoupon(null);
		},
		markViewed(productId) {
			setRecent((prev) => [productId, ...prev.filter((x) => x !== productId)].slice(0, 8));
		},
		placeOrder(details) {
			const order = {
				...details,
				id: "GFT-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
				date: (/* @__PURE__ */ new Date()).toISOString(),
				status: "Processing",
				lines: cart,
				total: totals.total
			};
			setOrders((prev) => [order, ...prev]);
			setCart([]);
			setCoupon(null);
			return order;
		},
		cancelOrder(id) {
			setOrders((prev) => prev.map((o) => o.id === id ? {
				...o,
				status: "Cancelled"
			} : o));
			toast.success("Order cancelled — refund issued within 3 days");
		}
	}), [
		cart,
		wishlist,
		orders,
		recent,
		coupon,
		totals
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShopContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 202,
		columnNumber: 10
	}, this);
}
function useShop() {
	const ctx = (0, import_react.useContext)(ShopContext);
	if (!ctx) throw new Error("useShop must be used inside <ShopProvider>");
	return ctx;
}
var _jsxFileName$6 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ui/button.tsx";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90",
			/** Signature Gifty pink gradient CTA */
			hero: "gradient-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:shadow-glow",
			soft: "bg-accent text-accent-foreground hover:bg-primary-soft",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-border bg-background shadow-soft hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-5 py-2",
			sm: "h-8 px-4 text-xs",
			lg: "h-12 px-8 text-base",
			xl: "h-14 px-10 text-base",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 47,
		columnNumber: 7
	}, void 0);
});
Button.displayName = "Button";
var _jsxFileName$5 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ui/input.tsx";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 8,
		columnNumber: 7
	}, void 0);
});
Input.displayName = "Input";
var _jsxFileName$4 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ui/sheet.tsx";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 22,
	columnNumber: 3
}, void 0));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetOverlay, {}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 62,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 65,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Close"
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 66,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 64,
		columnNumber: 7
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$4,
	lineNumber: 63,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$4,
	lineNumber: 61,
	columnNumber: 3
}, void 0));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 75,
	columnNumber: 3
}, void 0);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 80,
	columnNumber: 3
}, void 0);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 91,
	columnNumber: 3
}, void 0));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 103,
	columnNumber: 3
}, void 0));
SheetDescription.displayName = DialogDescription.displayName;
var _jsxFileName$3 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/Navbar.tsx";
var nav = [
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/categories",
		label: "Categories"
	},
	{
		to: "/new-arrivals",
		label: "New"
	},
	{
		to: "/best-sellers",
		label: "Best Sellers"
	},
	{
		to: "/offers",
		label: "Offers"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const { totals, wishlist } = useShop();
	const { user } = useAuth();
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	function submit(e) {
		e.preventDefault();
		navigate({
			to: "/shop",
			search: { q: q || void 0 }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "sticky top-0 z-50 glass",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, {}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 39,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 38,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 37,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetContent, {
						side: "left",
						className: "w-80",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
							className: "mt-8 flex flex-col gap-1",
							children: [
								nav.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: n.to,
									onClick: () => setOpen(false),
									className: "rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-accent",
									children: n.label
								}, n.to, false, {
									fileName: _jsxFileName$3,
									lineNumber: 45,
									columnNumber: 17
								}, this)),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-4 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
									children: "Categories"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 54,
									columnNumber: 15
								}, this),
								categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/category/$slug",
									params: { slug: c.slug },
									onClick: () => setOpen(false),
									className: "rounded-xl px-3 py-2 text-sm hover:bg-accent",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											"aria-hidden": true,
											children: c.emoji
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 65,
											columnNumber: 19
										}, this),
										" ",
										c.name
									]
								}, c.slug, true, {
									fileName: _jsxFileName$3,
									lineNumber: 58,
									columnNumber: 17
								}, this))
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 43,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 42,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 36,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					"aria-label": "Gifty home",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid h-9 w-9 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gift, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 74,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 73,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-display text-2xl font-bold tracking-tight",
						children: "Gifty"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 76,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 72,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "ml-4 hidden items-center gap-1 lg:flex",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: n.to,
						className: "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:bg-accent hover:text-accent-foreground",
						activeProps: { className: "text-primary" },
						children: n.label
					}, n.to, false, {
						fileName: _jsxFileName$3,
						lineNumber: 81,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 79,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: submit,
					className: "ml-auto hidden max-w-xs flex-1 md:block",
					role: "search",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 94,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search gifts…",
							"aria-label": "Search gifts",
							className: "h-10 rounded-full border-border bg-background/70 pl-9"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 95,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 93,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 92,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "ml-auto flex items-center gap-1 md:ml-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "ghost",
							size: "icon",
							"aria-label": "Wishlist",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/wishlist",
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, {}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 108,
									columnNumber: 15
								}, this), wishlist.length > 0 && /* @__PURE__ */ (void 0)(Dot, { value: wishlist.length }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 109,
									columnNumber: 39
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 107,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 106,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "ghost",
							size: "icon",
							"aria-label": "Basket",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/cart",
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, {}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 114,
									columnNumber: 15
								}, this), totals.count > 0 && /* @__PURE__ */ (void 0)(Dot, { value: totals.count }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 115,
									columnNumber: 36
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 113,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 112,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: user ? "ghost" : "hero",
							size: user ? "icon" : "sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: user ? "/dashboard" : "/login",
								"aria-label": "Account",
								children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, {}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 120,
									columnNumber: 23
								}, this) : "Sign in"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 119,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 118,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 105,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 35,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 34,
		columnNumber: 5
	}, this);
}
function Dot({ value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground",
		children: value
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 131,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/Footer.tsx";
var shopLinks = [
	{
		to: "/shop",
		label: "All Gifts"
	},
	{
		to: "/new-arrivals",
		label: "New Arrivals"
	},
	{
		to: "/featured",
		label: "Featured"
	},
	{
		to: "/best-sellers",
		label: "Best Sellers"
	},
	{
		to: "/offers",
		label: "Offers"
	}
];
var helpLinks = [
	{
		to: "/track-order",
		label: "Track Order"
	},
	{
		to: "/faqs",
		label: "FAQs"
	},
	{
		to: "/shipping-policy",
		label: "Shipping Policy"
	},
	{
		to: "/refund-policy",
		label: "Refund Policy"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var legalLinks = [
	{
		to: "/about",
		label: "About Gifty"
	},
	{
		to: "/blog",
		label: "Journal"
	},
	{
		to: "/reviews",
		label: "Reviews"
	},
	{
		to: "/privacy-policy",
		label: "Privacy Policy"
	},
	{
		to: "/terms",
		label: "Terms & Conditions"
	}
];
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "mt-24 border-t border-border gradient-soft",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/",
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "grid h-9 w-9 place-items-center rounded-2xl gradient-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gift, { className: "h-5 w-5" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 43,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 42,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-display text-2xl font-bold",
									children: "Gifty"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 45,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 41,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 max-w-sm text-sm text-muted-foreground",
								children: "Send Love, Deliver Happiness. Hand-finished gifts, same-day delivery in 40+ cities."
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 47,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
								className: "mt-6 flex max-w-sm gap-2",
								onSubmit: (e) => {
									e.preventDefault();
									toast.success("You're on the list — 10% off is on its way.");
									setEmail("");
								},
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "Your email",
									"aria-label": "Email for newsletter",
									className: "h-11 rounded-full"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 58,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									type: "submit",
									variant: "hero",
									className: "h-11",
									children: "Join"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 67,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 50,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 flex gap-2",
								children: [
									Instagram,
									Twitter,
									Facebook
								].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "grid h-9 w-9 place-items-center rounded-full bg-background text-primary shadow-soft",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 77,
										columnNumber: 19
									}, this)
								}, i, false, {
									fileName: _jsxFileName$2,
									lineNumber: 73,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 71,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 40,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterCol, {
							title: "Shop",
							links: shopLinks
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 83,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterCol, {
							title: "Help",
							links: helpLinks
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 84,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterCol, {
							title: "Company",
							links: legalLinks
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 85,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 39,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12 flex flex-wrap gap-2 border-t border-border pt-8",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/category/$slug",
						params: { slug: c.slug },
						className: "rounded-full bg-background px-3 py-1.5 text-xs text-muted-foreground shadow-soft transition-smooth hover:text-primary",
						children: c.name
					}, c.slug, false, {
						fileName: _jsxFileName$2,
						lineNumber: 90,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 88,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-8 text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Gifty. All rights reserved."
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 101,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 38,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 37,
		columnNumber: 5
	}, this);
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
		className: "font-display text-sm font-semibold uppercase tracking-widest",
		children: title
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 112,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
		className: "mt-4 space-y-2.5",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: l.to,
			className: "text-sm text-muted-foreground transition-smooth hover:text-primary",
			children: l.label
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 116,
			columnNumber: 13
		}, this) }, l.to, false, {
			fileName: _jsxFileName$2,
			lineNumber: 115,
			columnNumber: 11
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 113,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 111,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/components/ui/sonner.tsx";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 7,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName = "C:/Users/DELL/OneDrive/Desktop/Gifts/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-[70vh] items-center justify-center gradient-soft px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-7xl",
					"aria-hidden": true,
					children: "🎁"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-4 font-display text-5xl font-bold text-gradient",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-3 text-xl font-semibold",
					children: "This gift went missing"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex h-11 items-center rounded-full gradient-primary px-6 text-sm font-medium text-primary-foreground shadow-glow",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/shop",
						className: "inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium",
						children: "Browse gifts"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-2xl font-semibold",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex h-11 items-center rounded-full gradient-primary px-6 text-sm font-medium text-primary-foreground",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 61,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 60,
		columnNumber: 5
	}, this);
}
var Route$40 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Gifty — Send Love, Deliver Happiness" },
			{
				name: "description",
				content: "Luxury gift hampers, flowers, cakes and personalised keepsakes, delivered same day."
			},
			{
				name: "author",
				content: "Gifty"
			},
			{
				property: "og:site_name",
				content: "Gifty"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#FF4F87"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon",
				sizes: "any"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Gifty",
				slogan: "Send Love, Deliver Happiness",
				description: "Luxury gift store for hampers, flowers, cakes and personalised gifts."
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 139,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 138,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 143,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 141,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 137,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$40.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShopProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground",
				children: "Skip to content"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 13
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 163,
				columnNumber: 13
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 166,
					columnNumber: 15
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 164,
				columnNumber: 13
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 168,
				columnNumber: 13
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster$1, { position: "top-center" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 169,
				columnNumber: 13
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 156,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 155,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 154,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 153,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$38 = () => import("./routes-DkGoaBik.mjs");
var Route$39 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Gifty — Luxury Gifts Delivered Same Day" },
			{
				name: "description",
				content: "Gift hampers, peonies, fresh cakes, chocolates and personalised keepsakes. Same-day delivery, handwritten notes, beautiful packaging."
			},
			{
				property: "og:title",
				content: "Gifty — Luxury Gifts Delivered Same Day"
			},
			{
				property: "og:description",
				content: "Send Love, Deliver Happiness. Curated luxury gifts with same-day delivery."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$38, "component")
});
var $$splitComponentImporter$37 = () => import("./about-CkQITye5.mjs");
var Route$38 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Gifty — Our Story" },
			{
				name: "description",
				content: "Gifty is a small studio obsessed with the moment a gift is opened. Meet the makers."
			},
			{
				property: "og:title",
				content: "About Gifty — Our Story"
			},
			{
				property: "og:description",
				content: "A studio obsessed with the moment a gift is opened."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$37, "component")
});
var $$splitComponentImporter$36 = () => import("./best-sellers-Ow0AgIwF.mjs");
var Route$37 = createFileRoute("/best-sellers")({
	head: () => ({
		meta: [
			{ title: "Best Sellers — Gifty" },
			{
				name: "description",
				content: "The most loved Gifty gifts, ranked by thousands of reviews."
			},
			{
				property: "og:title",
				content: "Best Sellers — Gifty"
			},
			{
				property: "og:description",
				content: "Top-rated hampers, bouquets and keepsakes."
			},
			{
				property: "og:url",
				content: "/best-sellers"
			}
		],
		links: [{
			rel: "canonical",
			href: "/best-sellers"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./blog-D1ok_e58.mjs");
var Route$36 = createFileRoute("/blog")({
	head: () => ({
		meta: [
			{ title: "The Gifty Journal — Gifting Ideas & Guides" },
			{
				name: "description",
				content: "Gifting guides from the Gifty studio: hampers, flower care and personalisation done well."
			},
			{
				property: "og:title",
				content: "The Gifty Journal"
			},
			{
				property: "og:description",
				content: "Guides and ideas from our gift concierge."
			},
			{
				property: "og:url",
				content: "/blog"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$35, "component")
});
var $$splitComponentImporter$34 = () => import("./cart-DB-ILhBF.mjs");
var Route$35 = createFileRoute("/cart")({
	head: () => ({
		meta: [
			{ title: "Your Basket — Gifty" },
			{
				name: "description",
				content: "Review your Gifty basket, add gift wrapping and apply coupons."
			},
			{
				property: "og:title",
				content: "Your Basket — Gifty"
			},
			{
				property: "og:description",
				content: "Review your gifts before checkout."
			},
			{
				property: "og:url",
				content: "/cart"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/cart"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$34, "component")
});
var $$splitComponentImporter$33 = () => import("./categories-BAcnI1Gh.mjs");
var Route$34 = createFileRoute("/categories")({
	head: () => ({
		meta: [
			{ title: "Gift Categories — Gifty" },
			{
				name: "description",
				content: "Explore Gifty categories: hampers, personalised gifts, flowers, cakes, chocolates, perfumes, jewellery, cards and teddy bears."
			},
			{
				property: "og:title",
				content: "Gift Categories — Gifty"
			},
			{
				property: "og:description",
				content: "Nine curated categories of luxury gifts."
			},
			{
				property: "og:url",
				content: "/categories"
			}
		],
		links: [{
			rel: "canonical",
			href: "/categories"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$33, "component")
});
var $$splitComponentImporter$32 = () => import("./checkout-D0jjBrm7.mjs");
var Route$33 = createFileRoute("/checkout")({
	head: () => ({
		meta: [
			{ title: "Checkout — Gifty" },
			{
				name: "description",
				content: "Choose delivery date, add a gift message and pay securely."
			},
			{
				property: "og:title",
				content: "Checkout — Gifty"
			},
			{
				property: "og:description",
				content: "Secure Gifty checkout with Stripe and cash on delivery."
			},
			{
				property: "og:url",
				content: "/checkout"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/checkout"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
objectType({
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
var $$splitComponentImporter$31 = () => import("./contact-D57mN6Wu.mjs");
var Route$32 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Gifty — Gift Concierge" },
			{
				name: "description",
				content: "Talk to the Gifty gift concierge by email, phone or the contact form. We reply within an hour."
			},
			{
				property: "og:title",
				content: "Contact Gifty — Gift Concierge"
			},
			{
				property: "og:description",
				content: "We reply within the hour, seven days a week."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./dashboard-SA4jZsnV.mjs");
var Route$31 = createFileRoute("/dashboard")({
	head: () => ({ meta: [
		{ title: "Your Dashboard — Gifty" },
		{
			name: "description",
			content: "Manage your Gifty orders, addresses, payments and profile."
		},
		{
			property: "og:title",
			content: "Your Dashboard — Gifty"
		},
		{
			property: "og:description",
			content: "Orders, addresses and profile in one place."
		},
		{
			property: "og:url",
			content: "/dashboard"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./faqs-CHs52m38.mjs");
var Route$30 = createFileRoute("/faqs")({
	head: () => ({
		meta: [
			{ title: "FAQs — Gifty Delivery, Returns & Gift Notes" },
			{
				name: "description",
				content: "Answers on Gifty delivery times, gift messages, timed slots, refunds and international shipping."
			},
			{
				property: "og:title",
				content: "FAQs — Gifty"
			},
			{
				property: "og:description",
				content: "Everything about delivery, gift notes and refunds."
			},
			{
				property: "og:url",
				content: "/faqs"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faqs"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./featured-hoB5S4oQ.mjs");
var Route$29 = createFileRoute("/featured")({
	head: () => ({
		meta: [
			{ title: "Featured Gifts — Gifty" },
			{
				name: "description",
				content: "Our editors' picks: the Gifty gifts we send most often."
			},
			{
				property: "og:title",
				content: "Featured Gifts — Gifty"
			},
			{
				property: "og:description",
				content: "Handpicked luxury gifts from the Gifty studio."
			},
			{
				property: "og:url",
				content: "/featured"
			}
		],
		links: [{
			rel: "canonical",
			href: "/featured"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./forgot-password-CsAE4tBO.mjs");
var Route$28 = createFileRoute("/forgot-password")({
	head: () => ({
		meta: [
			{ title: "Reset your Gifty password" },
			{
				name: "description",
				content: "Send yourself a secure password reset link for your Gifty account."
			},
			{
				property: "og:title",
				content: "Reset your Gifty password"
			},
			{
				property: "og:description",
				content: "We'll email you a secure reset link."
			},
			{
				property: "og:url",
				content: "/forgot-password"
			}
		],
		links: [{
			rel: "canonical",
			href: "/forgot-password"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./login-62Ml36Ye.mjs");
var Route$27 = createFileRoute("/login")({
	head: () => ({
		meta: [
			{ title: "Sign in — Gifty" },
			{
				name: "description",
				content: "Sign in to your Gifty account to track orders and manage your wishlist."
			},
			{
				property: "og:title",
				content: "Sign in — Gifty"
			}
		],
		links: [{
			rel: "canonical",
			href: "/login"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./new-arrivals-iUyC8N5d.mjs");
var Route$26 = createFileRoute("/new-arrivals")({
	head: () => ({
		meta: [
			{ title: "New Arrivals — Gifty" },
			{
				name: "description",
				content: "The newest Gifty gifts, fresh from our studio this month."
			},
			{
				property: "og:title",
				content: "New Arrivals — Gifty"
			},
			{
				property: "og:description",
				content: "Just landed: new hampers, keepsakes and blooms."
			},
			{
				property: "og:url",
				content: "/new-arrivals"
			}
		],
		links: [{
			rel: "canonical",
			href: "/new-arrivals"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./offers-CtY_2DLv.mjs");
var Route$25 = createFileRoute("/offers")({
	head: () => ({
		meta: [
			{ title: "Offers & Coupons — Gifty" },
			{
				name: "description",
				content: "Current Gifty offers, discount codes and seasonal savings."
			},
			{
				property: "og:title",
				content: "Offers & Coupons — Gifty"
			},
			{
				property: "og:description",
				content: "Save on luxury gifts with live Gifty coupon codes."
			},
			{
				property: "og:url",
				content: "/offers"
			}
		],
		links: [{
			rel: "canonical",
			href: "/offers"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./order-success-CPh_M17p.mjs");
var Route$24 = createFileRoute("/order-success")({
	validateSearch: (s) => ({ id: typeof s.id === "string" ? s.id : "" }),
	head: () => ({
		meta: [
			{ title: "Order Confirmed — Gifty" },
			{
				name: "description",
				content: "Your Gifty order is confirmed and on its way."
			},
			{
				property: "og:title",
				content: "Order Confirmed — Gifty"
			},
			{
				property: "og:description",
				content: "Thank you for gifting with Gifty."
			},
			{
				property: "og:url",
				content: "/order-success"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/order-success"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./privacy-policy-CChXKUKR.mjs");
var Route$23 = createFileRoute("/privacy-policy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy — Gifty" },
			{
				name: "description",
				content: "How Gifty collects, stores and protects your personal data."
			},
			{
				property: "og:title",
				content: "Privacy Policy — Gifty"
			},
			{
				property: "og:description",
				content: "Our commitments on data, cookies and your rights."
			},
			{
				property: "og:url",
				content: "/privacy-policy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy-policy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./refund-policy-B-O6Clah.mjs");
var Route$22 = createFileRoute("/refund-policy")({
	head: () => ({
		meta: [
			{ title: "Refund Policy — Gifty" },
			{
				name: "description",
				content: "Gifty's 48-hour guarantee, refunds, replacements and cancellations."
			},
			{
				property: "og:title",
				content: "Refund Policy — Gifty"
			},
			{
				property: "og:description",
				content: "Perfect or replaced — our 48-hour guarantee explained."
			},
			{
				property: "og:url",
				content: "/refund-policy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/refund-policy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./register-V6YD1zot.mjs");
var Route$21 = createFileRoute("/register")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
objectType({
	name: stringType().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
	email: stringType().email("Enter a valid email"),
	password: stringType().min(6, "Password must be at least 6 characters").max(72, "Password must be less than 72 characters"),
	role: enumType(["customer", "vendor"], { required_error: "Please select a role" })
});
objectType({
	shopName: stringType().min(2, "Shop name must be at least 2 characters").max(100, "Shop name must be less than 100 characters"),
	shopDescription: stringType().min(10, "Shop description must be at least 10 characters").max(500, "Shop description must be less than 500 characters"),
	address: stringType().min(5, "Please enter your shop address").max(250, "Address is too long"),
	openHours: stringType().min(3, "Please enter your opening hours").max(100, "Opening hours are too long"),
	phone: stringType().min(7, "Please enter a valid phone number").max(20, "Phone number is too long"),
	website: stringType().trim().optional().refine((value) => !value || /^https?:\/\/.+/.test(value), "Use a valid website URL")
});
var $$splitComponentImporter$19 = () => import("./reset-password-3RrMxORq.mjs");
var Route$20 = createFileRoute("/reset-password")({
	head: () => ({
		meta: [
			{ title: "Choose a new password — Gifty" },
			{
				name: "description",
				content: "Set a new password for your Gifty account."
			},
			{
				property: "og:title",
				content: "Choose a new password — Gifty"
			},
			{
				property: "og:description",
				content: "Set a new password for your Gifty account."
			},
			{
				property: "og:url",
				content: "/reset-password"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/reset-password"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./reviews-DE10VF5r.mjs");
var Route$19 = createFileRoute("/reviews")({
	head: () => ({
		meta: [
			{ title: "Customer Reviews — Gifty" },
			{
				name: "description",
				content: "Read verified reviews from Gifty customers across 22 countries."
			},
			{
				property: "og:title",
				content: "Customer Reviews — Gifty"
			},
			{
				property: "og:description",
				content: "4.9/5 from thousands of verified gifters."
			},
			{
				property: "og:url",
				content: "/reviews"
			}
		],
		links: [{
			rel: "canonical",
			href: "/reviews"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./shipping-policy-DUXPBmTZ.mjs");
var Route$18 = createFileRoute("/shipping-policy")({
	head: () => ({
		meta: [
			{ title: "Shipping Policy — Gifty" },
			{
				name: "description",
				content: "Gifty delivery windows, timed slots, costs and international shipping."
			},
			{
				property: "og:title",
				content: "Shipping Policy — Gifty"
			},
			{
				property: "og:description",
				content: "Same-day delivery, timed slots and international shipping."
			},
			{
				property: "og:url",
				content: "/shipping-policy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/shipping-policy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./shop-iys5w2k3.mjs");
var Route$17 = createFileRoute("/shop")({
	validateSearch: (search) => ({
		q: typeof search.q === "string" && search.q ? search.q : void 0,
		category: typeof search.category === "string" ? search.category : void 0
	}),
	head: () => ({
		meta: [
			{ title: "Shop All Gifts — Gifty" },
			{
				name: "description",
				content: "Browse every Gifty gift: hampers, flowers, cakes, chocolates, jewellery and more."
			},
			{
				property: "og:title",
				content: "Shop All Gifts — Gifty"
			},
			{
				property: "og:description",
				content: "Filter by category, price, rating and availability."
			},
			{
				property: "og:url",
				content: "/shop"
			}
		],
		links: [{
			rel: "canonical",
			href: "/shop"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var BASE_URL = "";
var Route$16 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/shop",
				changefreq: "daily",
				priority: "0.9"
			},
			{
				path: "/categories",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/new-arrivals",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/featured",
				changefreq: "weekly",
				priority: "0.7"
			},
			{
				path: "/best-sellers",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/offers",
				changefreq: "daily",
				priority: "0.8"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/faqs",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/reviews",
				changefreq: "weekly",
				priority: "0.6"
			},
			{
				path: "/blog",
				changefreq: "weekly",
				priority: "0.7"
			},
			{
				path: "/track-order",
				changefreq: "monthly",
				priority: "0.5"
			},
			{
				path: "/login",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/register",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/privacy-policy",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/terms",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/refund-policy",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/shipping-policy",
				changefreq: "yearly",
				priority: "0.3"
			},
			...categories.map((c) => ({
				path: `/category/${c.slug}`,
				changefreq: "weekly",
				priority: "0.7"
			})),
			...products.map((p) => ({
				path: `/product/${p.slug}`,
				changefreq: "weekly",
				priority: "0.7"
			})),
			...posts.map((p) => ({
				path: `/blog/${p.slug}`,
				changefreq: "monthly",
				priority: "0.5"
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$15 = () => import("./terms-_X6xjL_m.mjs");
var Route$15 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms & Conditions — Gifty" },
			{
				name: "description",
				content: "The terms that apply when you order a gift from Gifty."
			},
			{
				property: "og:title",
				content: "Terms & Conditions — Gifty"
			},
			{
				property: "og:description",
				content: "Orders, pricing, delivery and liability terms."
			},
			{
				property: "og:url",
				content: "/terms"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./track-order-EWbY0aAp.mjs");
var Route$14 = createFileRoute("/track-order")({
	head: () => ({
		meta: [
			{ title: "Track Your Order — Gifty" },
			{
				name: "description",
				content: "Enter your Gifty order number to see live delivery status."
			},
			{
				property: "og:title",
				content: "Track Your Order — Gifty"
			},
			{
				property: "og:description",
				content: "Live tracking for every Gifty delivery."
			},
			{
				property: "og:url",
				content: "/track-order"
			}
		],
		links: [{
			rel: "canonical",
			href: "/track-order"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./vendor-C9tFumfz.mjs");
var Route$13 = createFileRoute("/vendor")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./verify-email-ClQ_l7BK.mjs");
var Route$12 = createFileRoute("/verify-email")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./wishlist-CoSHfztk.mjs");
var Route$11 = createFileRoute("/wishlist")({
	head: () => ({
		meta: [
			{ title: "Your Wishlist — Gifty" },
			{
				name: "description",
				content: "Gifts you've saved for later at Gifty."
			},
			{
				property: "og:title",
				content: "Your Wishlist — Gifty"
			},
			{
				property: "og:description",
				content: "Saved gifts, ready when you are."
			},
			{
				property: "og:url",
				content: "/wishlist"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/wishlist"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./blog._slug-DOHILkui.mjs");
var Route$10 = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = findPost(params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Article not found — Gifty" }, {
			name: "robots",
			content: "noindex"
		}] };
		const p = loaderData.post;
		return {
			meta: [
				{ title: `${p.title} — Gifty Journal` },
				{
					name: "description",
					content: p.excerpt
				},
				{
					property: "og:title",
					content: p.title
				},
				{
					property: "og:description",
					content: p.excerpt
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `/blog/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/blog/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Article",
					headline: p.title,
					description: p.excerpt,
					datePublished: p.date,
					author: {
						"@type": "Organization",
						name: "Gifty"
					}
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./category._slug-Cu4_Xau8.mjs");
var Route$9 = createFileRoute("/category/$slug")({
	loader: ({ params }) => {
		const category = categories.find((c) => c.slug === params.slug);
		if (!category) throw notFound();
		return { category };
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Category not found — Gifty" }, {
			name: "robots",
			content: "noindex"
		}] };
		const c = loaderData.category;
		return {
			meta: [
				{ title: `${c.name} Gifts — Gifty` },
				{
					name: "description",
					content: `${c.name}: ${c.blurb}. Same-day delivery from Gifty.`
				},
				{
					property: "og:title",
					content: `${c.name} Gifts — Gifty`
				},
				{
					property: "og:description",
					content: `${c.name}: ${c.blurb}.`
				},
				{
					property: "og:url",
					content: `/category/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/category/${params.slug}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./dashboard.index-Bq-QKQ8P.mjs");
var Route$8 = createFileRoute("/dashboard/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./dashboard.addresses-BB3krdtH.mjs");
var Route$7 = createFileRoute("/dashboard/addresses")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./dashboard.notifications-CtAbJpSZ.mjs");
var Route$6 = createFileRoute("/dashboard/notifications")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./dashboard.orders-DFVsYUQO.mjs");
var Route$5 = createFileRoute("/dashboard/orders")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./dashboard.payments-DMbOwBjZ.mjs");
var Route$4 = createFileRoute("/dashboard/payments")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./dashboard.profile-DEdRhKdE.mjs");
var Route$3 = createFileRoute("/dashboard/profile")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./dashboard.settings-D04QyoVC.mjs");
var Route$2 = createFileRoute("/dashboard/settings")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./product._slug-CGKGStTX.mjs");
var Route$1 = createFileRoute("/product/$slug")({
	loader: async ({ params }) => {
		const { response, data } = await fetchJson(`/api/products/${params.slug}`);
		if (!response.ok || !data?.product) throw notFound();
		return { product: normalizeProduct(data.product) };
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Gift not found — Gifty" }, {
			name: "robots",
			content: "noindex"
		}] };
		const p = loaderData.product;
		return {
			meta: [
				{ title: `${p.name} — Gifty` },
				{
					name: "description",
					content: p.description.slice(0, 155)
				},
				{
					property: "og:title",
					content: `${p.name} — Gifty`
				},
				{
					property: "og:description",
					content: p.description.slice(0, 155)
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:url",
					content: `/product/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/product/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Product",
					name: p.name,
					description: p.description,
					aggregateRating: {
						"@type": "AggregateRating",
						ratingValue: p.rating,
						reviewCount: p.reviews
					},
					offers: {
						"@type": "Offer",
						price: p.price,
						priceCurrency: "USD",
						availability: "https://schema.org/InStock"
					}
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./dashboard.orders._id-DLv2dtj0.mjs");
var Route = createFileRoute("/dashboard/orders/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$39.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$40
});
var AboutRoute = Route$38.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$40
});
var BestSellersRoute = Route$37.update({
	id: "/best-sellers",
	path: "/best-sellers",
	getParentRoute: () => Route$40
});
var BlogRoute = Route$36.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$40
});
var CartRoute = Route$35.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$40
});
var CategoriesRoute = Route$34.update({
	id: "/categories",
	path: "/categories",
	getParentRoute: () => Route$40
});
var CheckoutRoute = Route$33.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$40
});
var ContactRoute = Route$32.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$40
});
var DashboardRoute = Route$31.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$40
});
var FaqsRoute = Route$30.update({
	id: "/faqs",
	path: "/faqs",
	getParentRoute: () => Route$40
});
var FeaturedRoute = Route$29.update({
	id: "/featured",
	path: "/featured",
	getParentRoute: () => Route$40
});
var ForgotPasswordRoute = Route$28.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$40
});
var LoginRoute = Route$27.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$40
});
var NewArrivalsRoute = Route$26.update({
	id: "/new-arrivals",
	path: "/new-arrivals",
	getParentRoute: () => Route$40
});
var OffersRoute = Route$25.update({
	id: "/offers",
	path: "/offers",
	getParentRoute: () => Route$40
});
var OrderSuccessRoute = Route$24.update({
	id: "/order-success",
	path: "/order-success",
	getParentRoute: () => Route$40
});
var PrivacyPolicyRoute = Route$23.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$40
});
var RefundPolicyRoute = Route$22.update({
	id: "/refund-policy",
	path: "/refund-policy",
	getParentRoute: () => Route$40
});
var RegisterRoute = Route$21.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$40
});
var ResetPasswordRoute = Route$20.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$40
});
var ReviewsRoute = Route$19.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => Route$40
});
var ShippingPolicyRoute = Route$18.update({
	id: "/shipping-policy",
	path: "/shipping-policy",
	getParentRoute: () => Route$40
});
var ShopRoute = Route$17.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$40
});
var SitemapDotxmlRoute = Route$16.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$40
});
var TermsRoute = Route$15.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$40
});
var TrackOrderRoute = Route$14.update({
	id: "/track-order",
	path: "/track-order",
	getParentRoute: () => Route$40
});
var VendorRoute = Route$13.update({
	id: "/vendor",
	path: "/vendor",
	getParentRoute: () => Route$40
});
var VerifyEmailRoute = Route$12.update({
	id: "/verify-email",
	path: "/verify-email",
	getParentRoute: () => Route$40
});
var WishlistRoute = Route$11.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$40
});
var BlogSlugRoute = Route$10.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
});
var CategorySlugRoute = Route$9.update({
	id: "/category/$slug",
	path: "/category/$slug",
	getParentRoute: () => Route$40
});
var DashboardIndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => DashboardRoute
});
var DashboardAddressesRoute = Route$7.update({
	id: "/addresses",
	path: "/addresses",
	getParentRoute: () => DashboardRoute
});
var DashboardNotificationsRoute = Route$6.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => DashboardRoute
});
var DashboardOrdersRoute = Route$5.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => DashboardRoute
});
var DashboardPaymentsRoute = Route$4.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => DashboardRoute
});
var DashboardProfileRoute = Route$3.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => DashboardRoute
});
var DashboardSettingsRoute = Route$2.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => DashboardRoute
});
var ProductSlugRoute = Route$1.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$40
});
var DashboardOrdersIdRoute = Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => DashboardOrdersRoute
});
var BlogRouteChildren = { BlogSlugRoute };
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var DashboardOrdersRouteChildren = { DashboardOrdersIdRoute };
var DashboardRouteChildren = {
	DashboardAddressesRoute,
	DashboardNotificationsRoute,
	DashboardOrdersRoute: DashboardOrdersRoute._addFileChildren(DashboardOrdersRouteChildren),
	DashboardPaymentsRoute,
	DashboardProfileRoute,
	DashboardSettingsRoute,
	DashboardIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BestSellersRoute,
	BlogRoute: BlogRouteWithChildren,
	CartRoute,
	CategoriesRoute,
	CheckoutRoute,
	ContactRoute,
	DashboardRoute: DashboardRoute._addFileChildren(DashboardRouteChildren),
	FaqsRoute,
	FeaturedRoute,
	ForgotPasswordRoute,
	LoginRoute,
	NewArrivalsRoute,
	OffersRoute,
	OrderSuccessRoute,
	PrivacyPolicyRoute,
	RefundPolicyRoute,
	RegisterRoute,
	ResetPasswordRoute,
	ReviewsRoute,
	ShippingPolicyRoute,
	ShopRoute,
	SitemapDotxmlRoute,
	TermsRoute,
	TrackOrderRoute,
	VendorRoute,
	VerifyEmailRoute,
	WishlistRoute,
	CategorySlugRoute,
	ProductSlugRoute
};
var routeTree = Route$40._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { useProducts as C, googleProvider as D, getFirebaseAuth as E, isFirebaseConfigured as O, testimonials as S, facebookProvider as T, categories as _, Route$10 as a, faqs as b, Input as c, useShop as d, useAuth as f, byTag as g, byCategory as h, Route$9 as i, Button as l, cn as m, Route as n, Route$17 as o, posts as p, Route$1 as r, Route$24 as s, router_exports as t, getProduct as u, coupons as v, auth as w, products as x, currency as y };
