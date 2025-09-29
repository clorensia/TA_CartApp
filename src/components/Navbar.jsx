'use client'

import useCartStore from '@/store/cartStore';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const totalItems = useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="w-full bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cart-App</h1>
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-3"
            >
              {totalItems}
            </Badge>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
