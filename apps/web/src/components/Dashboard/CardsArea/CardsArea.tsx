import React from "react";
import Card from "../Card/Card";

const CardsArea = () => {
  return (
    <div className="p-8">
      <div className="text-4xl font-semibold">My Cloud</div>

      <div className="flex  gap-8 flex-wrap my-8">
        {Array.from(Array(9)).map((_, i) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default CardsArea;
