'use client'

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const Counter = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0 rounded-full"
        onClick={onDecrement}
        disabled={quantity === 0}
      >
        <Minus className="h-4 w-4" />
        <span className="sr-only">Decrease</span>
      </Button>
      <div className="text-center font-bold w-8">{quantity}</div>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0 rounded-full"
        onClick={onIncrement}
      >
        <Plus className="h-4 w-4" />
        <span className="sr-only">Increase</span>
      </Button>
    </div>
  );
};

export default Counter;
