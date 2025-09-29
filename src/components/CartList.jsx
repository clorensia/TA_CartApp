'use client'

import { useEffect } from 'react';
import useCartStore from '@/store/cartStore';
import CartItem from './CartItem';

const CartList = () => {
  const products = useCartStore((state) => state.products);
  const fetchProducts = useCartStore((state) => state.fetchProducts);

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  if (products.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-in fade-in slide-in-from-top-4 duration-500"
          style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
        >
          <CartItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default CartList;
