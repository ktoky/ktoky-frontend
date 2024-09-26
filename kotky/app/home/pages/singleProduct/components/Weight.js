"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Weight() {
  const [select, setSelect] = useState("50g");

  const changeWeight = (value) => () => {
    setSelect(value);
  };

  return (
    <div>
      <Button
        size="sm"
        onClick={changeWeight("50g")}
        variant={`${select === "50g" ? "default" : "ghost"}`}
        className={`${
          select === "50g" ? "hover:bg-primary" : "hover:bg-transparent"
        }`}
      >
        50g
      </Button>
      <Button
        size="sm"
        onClick={changeWeight("60g")}
        variant={`${select === "60g" ? "default" : "ghost"}`}
        className={`${
          select === "60g" ? "hover:bg-primary" : "hover:bg-transparent"
        }`}
      >
        60g
      </Button>
      <Button
        size="sm"
        onClick={changeWeight("80g")}
        variant={`${select === "80g" ? "default" : "ghost"}`}
        className={`${
          select === "80g" ? "hover:bg-primary" : "hover:bg-transparent"
        }`}
      >
        80g
      </Button>
      <Button
        size="sm"
        onClick={changeWeight("100g")}
        variant={`${select === "100g" ? "default" : "ghost"}`}
        className={`${
          select === "100g" ? "hover:bg-primary" : "hover:bg-transparent"
        }`}
      >
        100g
      </Button>
      <Button
        size="sm"
        onClick={changeWeight("150g")}
        variant={`${select === "150g" ? "default" : "ghost"}`}
        className={`${
          select === "150g" ? "hover:bg-primary" : "hover:bg-transparent"
        }`}
      >
        150g
      </Button>
    </div>
  );
}
