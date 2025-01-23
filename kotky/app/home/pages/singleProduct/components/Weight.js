"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Weight({
  price,
  setPrice,
  selectedWeight,
  setSelectedWeight,
}) {
  const changeWeight = (value) => () => {
    setSelectedWeight(value.weight);
    setPrice(value.price || price[0]?.price);
    console.log(price, "price");
  };

  return (
    <div>
      {price?.map((item) => (
        <Button
          key={item.id}
          size="sm"
          onClick={changeWeight(item)}
          variant={`${selectedWeight === item?.weight ? "default" : "ghost"}`}
          className={`${
            selectedWeight === item?.weight
              ? "hover:bg-primary"
              : "hover:bg-transparent"
          }`}
        >
          {item.weight}
        </Button>
      ))}
    </div>
  );
}
