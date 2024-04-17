"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

export type Topping = {
  id: string;
  name: string;
  image: string;
  price: number;
  isAvailable: boolean;
};

type PropType = {
  topping: Topping;
  selectedToppings: Topping[];
  handleCheckBoxCheck: (topping: Topping) => void;
};

const ToppingCard = ({
  topping,
  selectedToppings,
  handleCheckBoxCheck,
}: PropType) => {
  const isCurrent = selectedToppings.some(
    (element) => element.id === topping.id
  );

  return (
    <Button
      onClick={() => handleCheckBoxCheck(topping)}
      variant={"outline"}
      className={cn(
        "relative flex flex-col h-42",
        isCurrent ? "border-primary" : ""
      )}
    >
      <Image
        src={topping.image}
        width={80}
        height={80}
        alt={topping.name}
      ></Image>
      <h4>{topping.name}</h4>
      <p>&#8377;{topping.price}</p>
      {isCurrent && (
        <CircleCheck className="absolute top-1 right-1 text-primary" />
      )}
    </Button>
  );
};

export default ToppingCard;
