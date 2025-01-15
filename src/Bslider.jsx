import React, { useState, useEffect } from "react";

const Bslider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handler for carousel slide change (previous/next)
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };

  // Set up an interval to change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 2000); // 2000ms = 2 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="carouselDarkVariant"
      className=" relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <div className=" -mt-16 lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="pl-5 sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Awer Art
        </h1>
        <div className=" ml-4 h-1 w-28 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg"></div>
      </div>
      {/* Carousel indicators */}
      <div
        className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            data-twe-target="#carouselDarkVariant"
            data-twe-slide-to={index}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
              activeIndex === index ? "opacity-100" : ""
            }`}
            aria-current={activeIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel items */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {/* First item */}
        <div
          className={`relative float-left -mr-[100%] w-full transition-opacity duration-[600ms] ease-in-out ${
            activeIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
          data-twe-carousel-fade
          data-twe-carousel-item
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
            className="block w-full"
            alt="Motorbike Smoke"
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
            <h5 className="text-xl">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        {/* Second item */}
        <div
          className={`relative float-left -mr-[100%] w-full transition-opacity duration-[600ms] ease-in-out ${
            activeIndex === 1 ? "opacity-100" : "opacity-0"
          }`}
          data-twe-carousel-fade
          data-twe-carousel-item
        >
          <img
            src="assets/Logo1.png"
            className="block w-full"
            alt="Mountaintop"
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
            <h5 className="text-xl">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        {/* Third item */}
        <div
          className={`relative float-left -mr-[100%] w-full transition-opacity duration-[600ms] ease-in-out ${
            activeIndex === 2 ? "opacity-100" : "opacity-0"
          }`}
          data-twe-carousel-fade
          data-twe-carousel-item
        >
          <img
            src="assets/G1.jpg"
            className="block w-full"
            alt="Woman Reading a Book"
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
            <h5 className="text-xl">Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none"
        type="button"
        onClick={handlePrev}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none"
        type="button"
        onClick={handleNext}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Bslider;
