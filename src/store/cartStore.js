'use client'
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
    set((state) => ({ cart: [...state.cart, { ...product, quantity: 1 }] }));
  },

  // Action to decrement an item's quantity
  decrementQuantity: (productId) => {
    set((state) => ({
      cart: state.cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0), // Remove item if quantity becomes 0
    }));
  },

  // Action to increment an item's quantity
  incrementQuantity: (productId) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },
}));

export default useCartStore;
