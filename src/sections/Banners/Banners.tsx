import { useEffect, useRef, useState } from "react";
import { carouselImages } from "../../constants/carousel";
import "./Banners.scss";
import { CAROUSEL_INTERVAL } from "../../constants";

const Banners = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    carouselInterval.current = setInterval(() => {
      updateCarouselDOM();

      setCarouselIndex((prev) => {
        if (prev === -carouselImages.length + 1) return 0;
        return prev - 1;
      });
    }, CAROUSEL_INTERVAL);

    return () => {
      if (carouselInterval.current) {
        clearInterval(carouselInterval.current);
        carouselInterval.current = null;
      }
    };
  });

  const updateCarouselDOM = () => {
    document.documentElement.style.setProperty(
      "--banner-index",
      carouselIndex.toString()
    );
  };

  const nextImage = () => {
    if (carouselInterval.current) {
      clearInterval(carouselInterval.current);
      carouselInterval.current = null;
    }

    setCarouselIndex((prev) => {
      if (prev === -carouselImages.length + 1) return 0;
      return prev - 1;
    });

    updateCarouselDOM();
  };

  const prevImage = () => {
    if (carouselInterval.current) {
      clearInterval(carouselInterval.current);
      carouselInterval.current = null;
    }
    setCarouselIndex((prev) => {
      console.log(prev);
      if (prev === 0) return 0;
      return prev + 1;
    });

    updateCarouselDOM();
  };

  return (
    <div className="banners-container">
      <div className="inner-container">
        <div className="carousel-control-container">
          {/* Left Arrow */}
          <div className="arrow-container left" onClick={prevImage}>
            <a>
              <i></i>
            </a>
          </div>
          <div className="carousel-view-port">
            <ol className="carousel-container">
              {carouselImages.map((item, i) => (
                <li key={i}>
                  <img src={item} className="banner-img" />
                </li>
              ))}
            </ol>
            {/* Right Arrow */}
            <div className="arrow-container right" onClick={() => nextImage()}>
              <a>
                <i></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
