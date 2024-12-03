import HeroTileLayout from "../../../components/layouts/HeroTileLayout/HeroTileLayout";
import "./Hero.scss";

const Hero = () => {
  return (
    <div>
      <div className="carousel-container">
        <div className="inner-container">
          {/* Carousel List */}
          {/* <ol className="carousel-list"></ol> */}
          <img src="/banner2.jpg" />
        </div>
      </div>
      <HeroTileLayout />
    </div>
  );
};

export default Hero;
