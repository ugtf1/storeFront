import React, { useState } from "react";
import "./Slides.css";

const slides = [
  {
    image: "https://ugtf.org/img/sl3.png",
    title: "Mountain Escape",
    description: "Breathtaking views of the alpine peaks."
  },
  {
    image: "https://ugtf.org/img/sl2.png",
    title: "Ocean Breeze",
    description: "Relax by the calming waves of the sea."
  },
  {
    image: "https://ugtf.org/img/sl1.png",
    title: "City Lights",
    description: "Experience the vibrant energy of the city."
  },
  {
    image: "https://ugtf.org/img/sl3.png",
    title: "Desert Adventure",
    description: "Golden sands stretching endlessly under the sun."
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <div className="slide">
        <img src={slides[current].image} alt={slides[current].title} />
        <div className="text">
          {/* <h2>{slides[current].title}</h2>
          <p>{slides[current].description}</p> */}
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;