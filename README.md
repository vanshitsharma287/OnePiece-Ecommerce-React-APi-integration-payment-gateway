# OnePiece

OnePiece is a responsive storefront demo built with React and Vite. It lets you explore a product catalogue, view product details, manage favourites and a shopping cart, and try a simulated checkout flow.

> **Demo notice:** Product information is fetched from [DummyJSON](https://dummyjson.com/). Checkout is a frontend demonstration only; it does not charge a payment method, create a real order, or send address details to a backend.

## Features

- Browse, search, and paginate through products
- View product details, specifications, and reviews
- Add products to favourites and the cart
- Update cart quantities and review order totals
- Choose a display currency
- Enter and optionally save a shipping address in browser storage
- Walk through delivery and payment-method selection in the demo checkout
- Responsive pages for shop, favourites, product details, cart, checkout, and About

## Tech stack

- React 19
- React Router
- Vite
- `react-hot-toast`
- Plain CSS
- DummyJSON product API

## Getting started

### Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
├── components/       Reusable UI and storefront components
├── constants/        Shared cart and checkout constants
├── context/          Cart and currency contexts
├── css/              Component and page styles
├── hooks/            Context access hooks
├── pages/            Shop, product, cart, checkout, favourites, and About pages
├── utils/            Currency, date, and local-storage helpers
├── App.jsx           Application routes
└── main.jsx          React entry point and providers
```

## Data and browser storage

Product data is requested from DummyJSON at runtime, so the shop needs an internet connection to load product information. Cart contents, favourites, selected currency, and an optionally saved address are stored in the browser's `localStorage`; clearing browser storage removes this demo data.

## Deployment

Build the static site with `npm run build` and deploy the generated `dist/` directory to a static hosting provider. Configure the host to serve `index.html` for application routes so React Router paths such as `/about` and `/cart` work on direct visits.
