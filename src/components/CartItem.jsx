'use client'

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Counter from './Counter';
import useCartStore from '@/store/cartStore';

const CartItem = ({ product }) => {
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const addToCart = useCartStore((state) => state.addToCart);

  const quantity = useCartStore(
    (state) => state.cart.find((item) => item.id === product.id)?.quantity ?? 0
  );

  const totalPrice = (product.price * quantity).toFixed(2);

  const handleIncrement = () => {
    if (quantity === 0) {
      addToCart(product);
    } else {
      incrementQuantity(product.id);
    }
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative h-24 w-24 flex-shrink-0">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-md object-contain"
            />
          </div>

          <div className="flex-grow">
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="font-bold text-md mt-2">${product.price.toFixed(2)}</p>
          </div>

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
