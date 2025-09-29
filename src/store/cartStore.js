// /store/cartStore.js
import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  products: [],
  cart: [], // Will store objects of { ...product, quantity: number }

  // Action to fetch products from the API
  fetchProducts: async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=5');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const products = await response.json();
      set({ products: products });
    } catch (error) {
      console.error("Error fetching products:", error);
      // Optionally, set an error state here
    }
  },

  // Action to add an item to the cart or increment its quantity
  addToCart: (product) => {
    const cart = get().cart;
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      // If product is already in cart, increment quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      set({ cart: updatedCart });
    } else {
      // If product is not in cart, add it with quantity 1
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  // Action to decrement an item's quantity
  decrementQuantity: (productId) => {
    const cart = get().cart;
    const updatedCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // Remove item if quantity becomes 0

    set({ cart: updatedCart });
  },

  // Action to increment an item's quantity
  incrementQuantity: (productId) => {
    const cart = get().cart;
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    set({ cart: updatedCart });
  },
}));

export default useCartStore;
