# Gifty API — Express + Firebase Admin

REST backend for the Gifty gift shop. Runs independently of the frontend
(deployable to Render, Railway or Fly.io).

## Getting started

```bash
cd backend
npm install
cp .env.example .env   # fill in Firebase, Stripe, Cloudinary and SMTP values
npm run seed           # optional: categories, coupons, demo products
npm run dev            # http://localhost:5000
```

## Environment

All configuration comes from `.env` — see `.env.example`. The Firebase private
key must keep its `\n` escape sequences.

## Auth model

The browser signs in with the Firebase **client** SDK and sends its ID token as
`Authorization: Bearer <token>`. `middleware/authMiddleware.js` verifies either
that ID token or a Gifty-issued JWT, then loads the profile from
`users/{uid}`. Roles (`customer`, `vendor`, `admin`) live in Firestore and are
mirrored into Firebase custom claims; `authorize(...)` gates each route.

## Endpoints

| Method          | Path                           | Access                                  |
| --------------- | ------------------------------ | --------------------------------------- |
| POST            | `/api/auth/register`           | public                                  |
| POST            | `/api/auth/login`              | public (ID token)                       |
| POST            | `/api/auth/forgot-password`    | public                                  |
| GET             | `/api/auth/me`                 | auth                                    |
| PATCH           | `/api/auth/role/:uid`          | admin                                   |
| GET             | `/api/products`                | public (search, filter, sort, paginate) |
| GET             | `/api/products/:slug`          | public                                  |
| POST/PUT/DELETE | `/api/products`                | vendor, admin                           |
| GET             | `/api/categories`              | public                                  |
| POST            | `/api/orders`                  | auth                                    |
| GET             | `/api/orders/mine`             | auth                                    |
| GET             | `/api/orders/:id`              | owner, vendor, admin                    |
| GET             | `/api/orders/track/:id`        | public                                  |
| PATCH           | `/api/orders/:id/status`       | vendor, admin                           |
| POST            | `/api/orders/:id/cancel`       | owner                                   |
| POST            | `/api/payments/create-session` | auth (Stripe Checkout)                  |
| POST            | `/api/payments/webhook`        | Stripe (signature verified)             |
| GET             | `/api/payments/mine`           | auth                                    |
| GET/POST/DELETE | `/api/reviews`                 | public read, verified buyers write      |
| POST            | `/api/coupons/validate`        | public                                  |
| GET/PUT         | `/api/wishlists/mine`          | auth                                    |
| PUT             | `/api/users/me`                | auth                                    |
| GET/POST/DELETE | `/api/users/me/addresses`      | auth                                    |
| POST            | `/api/contacts`                | public                                  |
| POST            | `/api/upload`                  | auth (Cloudinary)                       |

## Security

Helmet, CORS allow-list, 300 req/15 min rate limit on `/api`,
`express-validator` on every write, Stripe webhook signature verification, and
Firestore rules in `firebase/firestore.rules` for direct client access.

## Connecting the frontend

Set `VITE_API_URL=http://localhost:5000` in the frontend `.env`. Until it is
set, the storefront runs in demo mode against `src/lib/data.ts` with
`localStorage` persistence.
