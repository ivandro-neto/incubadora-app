import React, { useEffect, useRef, useState } from "react";

import "./style.css";
import { Box } from "../Box";
export const SlideShow = ({slidesData, buttons}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  console.log(slidesData.length)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 5000); // Change interval time as needed (5000ms = 5 seconds)
    return () => clearInterval(interval);
  }, [slidesData.length]);
  const handleDotClick = (index) => {
    setActiveSlideIndex(index);
  };

  /* const handlePrevSlide = () => {
  setActiveSlideIndex(
    (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length
  );
};

const handleNextSlide = () => {
  setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
}; */

  return (
    <div className="slideshow-screen">
      <div className="slide-container">
        <div
          className="slides"
          style={{
            display: "flex",
            width: `${slidesData.length * 75}%`,
            transform: `translateX(-${
              (activeSlideIndex / slidesData.length) * 100
            }%)`,
          }}
        >
          {slidesData.map((slide, index) => (
            <Box
              key={index}
              image={slide.image}
              title={slide.title}
              description={slide.description}
              buttons={buttons}
              listed={slide.listed}
              listData={slide.listData}
            />
          ))}
        </div>
      </div>
      <div className="slide-controls">
        {/* <button onClick={handlePrevSlide}>Previous</button> */}

        <div className="dots">
          {slidesData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeSlideIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        {/* <button onClick={handleNextSlide}>Next</button> */}
      </div>
    </div>
  );
};
