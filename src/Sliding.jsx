import React, { useState, useEffect } from "react";

const SlidingCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs (replace with your actual images)
  const slides = ["assets/GIF.gif"];

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Handle slide indicator click
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide functionality: Change slide every 1 second
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // Auto change slide every 3000ms (3 seconds)

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, []);

  return (
    <div
      id="default-carousel"
      className=" shadow-lg shadow-gray-500/50 ... relative w-full"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <img
              src={slide}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-400"
            }`}
            aria-current={currentSlide === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
    </div>
  );
};

export default SlidingCarousel;
