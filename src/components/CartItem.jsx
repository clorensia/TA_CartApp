'use client'

import Image from 'next/image';
import useCartStore from '@/store/cartStore';
import { Card, CardContent } from "@/components/ui/card";
import Counter from './Counter';

const CartItem = ({ product }) => {
  // Get state and actions from the Zustand store
  const { cart, incrementQuantity, decrementQuantity, addToCart } = useCartStore((state) => ({
    cart: state.cart,
    incrementQuantity: state.incrementQuantity,
    decrementQuantity: state.decrementQuantity,
    addToCart: state.addToCart,
  }));

  // Find this specific item in the cart to get its quantity
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Calculate total price for this item
  const totalPrice = (product.price * quantity).toFixed(2);

  const handleIncrement = () => {
    if (quantity === 0) {
      // If item is not in cart, add it first
      addToCart(product);
    } else {
      // Otherwise, just increment
      incrementQuantity(product.id);
    }
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Product Image */}
          <div className="relative h-24 w-24 flex-shrink-0">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="font-bold text-md mt-2">${product.price.toFixed(2)}</p>
          </div>

          {/* Counter and Total Price */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <Counter
              quantity={quantity}
              onIncrement={handleIncrement}
              onDecrement={() => decrementQuantity(product.id)}
            />
            <p className="font-bold text-lg mt-2">
              Total: ${totalPrice}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;
