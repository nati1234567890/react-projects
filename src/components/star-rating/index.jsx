import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }
  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }
  function handleClickMouthLeave() {
    setHover(rating);
  }
  return (
    <div className="start-raing">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleClickMouthLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
