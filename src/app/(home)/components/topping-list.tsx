"use client";
import React from "react";
import ToppingCard, { Topping } from "./topping-card";

const toppings = [
  {
    id: "1",
    name: "Extra Cheese",
    image: "/cheese.png",
    price: 20,
    isAvailable: true,
  },
  {
    id: "2",
    name: "Pepperoni",
    image: "/chicken.png",
    price: 30,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Mushrooms",
    image: "/mushroom.png",
    price: 15,
    isAvailable: true,
  },
];

const ToppingList = () => {
  const [selectedToppings, setSelectedToppings] = React.useState([toppings[0]]);

  const handleCheckBoxCheck = (topping: Topping) => {
    const newSelectedToppings = selectedToppings.some(
      (element) => element.id === topping.id
    );

    if (newSelectedToppings) {
      setSelectedToppings((prev) =>
        prev.filter((ele) => ele.id !== topping.id)
      );
      return;
    }

    setSelectedToppings((prev) => [...prev, topping]);
  };
  return (
    <section>
      <h3>Extra Toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {toppings.map((topping) => {
          return (
            <ToppingCard
              topping={topping}
              key={topping.id}
              selectedToppings={selectedToppings}
              handleCheckBoxCheck={handleCheckBoxCheck}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ToppingList;
