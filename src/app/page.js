'use client'

import CartList from "@/components/CartList";
import React from "react";
import Navbar from "@/components/Navbar";
export default function HomePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Shopping Cart</h2>
      <CartList />
    </div>
  );
}
