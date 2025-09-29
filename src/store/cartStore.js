'use client'
import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  products: [],
  cart: [],

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
    }
  },

  addToCart: (product) => {
    set((state) => ({ cart: [...state.cart, { ...product, quantity: 1 }] }));
  },

  decrementQuantity: (productId) => {
    set((state) => ({
      cart: state.cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0),
    }));
  },

  incrementQuantity: (productId) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },
}));

export default useCartStore;
