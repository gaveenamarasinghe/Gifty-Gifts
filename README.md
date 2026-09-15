# 🎁 Gifty (Gifty)

**Gifty** is a React-based multivendor gift marketplace built for Sri Lanka  an "AliExpress-style" platform where multiple vendors can list and sell gift items (flowers, cakes, teddy bears, love cards, hampers, chocolates, jewellery, candles, and more) to customers across the country.

---

## ✨ Overview

Gifty connects local gift vendors with customers through a single, unified online storefront. Vendors can list their products under dedicated categories, while customers can browse, search, and purchase gifts with a smooth, localized shopping experience — complete with Sinhala-language product fields and Sri Lankan locale context.

---

## 🚀 Features

- 🛍️ **Multivendor Marketplace** — Multiple vendors can list and manage their own products under shared categories.
- 🔐 **Authentication & User Persistence** — Firebase Authentication with Firestore-backed user documents created on signup/login.
- 🧾 **Purchase History Tracking** — User purchase history maintained via Firestore `arrayUnion` updates.
- 🔎 **Live Search with Autocomplete** — Real-time product search with keyboard-navigable autocomplete and direct routing to matching product pages.
- 🗂️ **Dedicated Category Pages** — Eight fully built category pages (Flowers, Cakes, Teddy Bears, Love Cards, Gift Hampers, Chocolates, Jewellery, Candles) with sorting, filtering, and cross-category navigation.
- 🎨 **Polished, Branded UI** — Custom pink-and-black brand palette, Google Fonts, CSS custom properties, and keyframe animations for a professional storefront feel.
- 🧩 **Scalable Backend (in progress)** — Node.js/Express API scaffold with MongoDB/Mongoose models for `User`, `Vendor`, `Category`, and `Product`, designed to replace static mock data with live API-driven content.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React, Tailwind CSS, Custom CSS |
| **Backend** | Node.js, Express.js |
| **Database (Frontend Auth/User Data)** | Firebase Authentication, Firestore |
| **Database (Backend API)** | MongoDB, Mongoose |
| **Language** | JavaScript / TypeScript |

---

## 📂 Project Structure

```
gifty/
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Category & static pages
│   │   ├── firebase/      # Firebase config & auth logic
│   │   └── utils/         # Search helpers, formatting, etc.
│   └── public/
├── server/                # Node.js/Express backend
│   ├── models/            # User, Vendor, Category, Product schemas
│   ├── routes/            # API route handlers
│   └── config/            # Database connection & environment setup
└── README.md
```

> Structure is representative — update to match the actual repository layout.

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn
- A Firebase project (for Authentication & Firestore)
- MongoDB instance (local or Atlas) for the backend API

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gaveenamarasinghe/gifty.git
   cd gifty
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Configure environment variables**

   Create a `.env` file in `client/` with your Firebase config:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

   Create a `.env` file in `server/` with your MongoDB connection string:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. **Run the development servers**

   Frontend:
   ```bash
   cd client
   npm start
   ```

   Backend:
   ```bash
   cd server
   npm run dev
   ```

---

## 🗺️ Roadmap

- [ ] Replace static mock data with live API calls to the Express backend
- [ ] Vendor dashboard for product & order management
- [ ] Shopping cart and checkout flow
- [ ] Payment gateway integration
- [ ] Order tracking and notifications
- [ ] Admin panel for vendor and category moderation

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the `LICENSE` file for details.

---

## 👤 Author

**BlackNetIT**


---

<p align="center">Made with ❤️ in BlacknetIT Sri Lanka</p>
