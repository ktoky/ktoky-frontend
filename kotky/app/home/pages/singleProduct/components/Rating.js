"use client";

import { useState } from "react";

export default function Rating({ maxStars = 5, onRate }) {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);

  const handleClick = (rating) => {
    setSelectedStar(rating);
    if (onRate) {
      onRate(rating);
    }
  };

  const handleMouseEnter = (rating) => {
    setHoveredStar(rating);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  return (
    <div>
      {Array.from({ length: maxStars }, (_, index) => {
        const rating = index + 1;
        return (
          <span
            key={rating}
            style={{
              cursor: "pointer",
              color:
                rating <= (hoveredStar || selectedStar) ? "#ffd700" : "#e4e5e9",
              fontSize: "2rem",
            }}
            onClick={() => handleClick(rating)}
            onMouseEnter={() => handleMouseEnter(rating)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
