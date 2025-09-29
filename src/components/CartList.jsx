'use client'

import { useEffect } from 'react';
import useCartStore from '@/store/cartStore';
import CartItem from './CartItem';

const CartList = () => {
  const products = useCartStore((state) => state.products);
  const fetchProducts = useCartStore((state) => state.fetchProducts);

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, [fetchProducts]);

  if (products.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartList;
