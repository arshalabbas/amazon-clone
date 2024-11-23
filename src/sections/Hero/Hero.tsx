import FourGridCard from "../../components/ui/FourGridCard/FourGridCard";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="banner-container">
        <div className="banner-image-container">
          <img src="/banner1.jpg" alt="Banner Image 1" />
          <div className="banner-overlay" />
        </div>
      </div>
      <div className="container">
        <div className="cards-row">
          <FourGridCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
