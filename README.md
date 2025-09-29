# Next.js Shopping Cart Application

This is a simple shopping cart application built with Next.js, demonstrating modern frontend development practices including state management with Zustand and UI creation with Tailwind CSS and shadcn/ui. This project was created to fulfillgi a project assignment by Skillroom.

## Features

- Fetches product data from a public API (`fakestoreapi.com`).
- Add products to the cart.
- Increment and decrement product quantities.
- Real-time update of the total number of items in the cart.
- Clean, responsive UI with animations.
- A sticky navbar and a footer.

## Tech Stack

- **Framework**: Next.js
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: tailwindcss-animate
- **Icons**: Lucide React

---

## Step-by-Step: How This Project Was Built

This project was created incrementally, focusing on a clean architecture and modern React features.

### 1. Project Setup

The project was initialized using `create-next-app`. Following that, `shadcn/ui` was set up, which automatically configured Tailwind CSS and other necessary dependencies like `tailwindcss-animate`.

### 2. State Management with Zustand

A global state store was created in `src/store/cartStore.js` to manage products and the shopping cart. This store includes:
- **State**: `products` array to hold fetched items and `cart` array for items added by the user.
- **Actions**:
    - `fetchProducts`: An async action to get product data from `fakestoreapi.com`.
    - `addToCart`, `incrementQuantity`, `decrementQuantity`: Actions to manage the cart's contents.

### 3. Building the UI Components

The UI was broken down into reusable components:
- **`Navbar.jsx`**: Displays the app title and a cart icon with a badge showing the total number of items. It subscribes to the cart store to stay in sync.
- **`CartList.jsx`**: Fetches and displays the list of products.
- **`CartItem.jsx`**: Represents a single product card, showing its image, title, price, and a counter.
- **`Counter.jsx`**: A reusable component with "+" and "-" buttons to manage item quantity.
- **`Footer.jsx`**: A simple footer for project attribution.

### 4. Implementing Core Logic

- **Data Fetching**: In `CartList.jsx`, a `useEffect` hook calls the `fetchProducts` action from the Zustand store when the component mounts.
- **Cart Functionality**: The `CartItem` component uses actions from the Zustand store to handle adding, incrementing, and decrementing items. It uses an atomic selector `useCartStore((state) => ...)` to get the quantity for a specific product, which is a highly performant pattern that prevents re-rendering the entire list when one item's quantity changes.

### 5. Styling and Animation

- **Layout**: The main layout in `src/app/layout.js` was configured with Flexbox to ensure the footer sticks to the bottom of the page.
- **Styling**: `shadcn/ui` components (`Card`, `Button`, `Badge`) and Tailwind CSS utility classes were used for a clean and responsive design.
- **Animations**: The `tailwindcss-animate` plugin was used to add subtle animations, such as a staggered fade-in for the product list and a "pop" effect for the cart badge, enhancing the user experience.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
