import GridCard from "../../components/cards/GridCard/GridCard";
import ProductCard from "../../components/cards/ProductCard/ProductCard";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="layout">
      <div className="strip-container">
        <div className="inner-container">
          <span>
            You are on amazon.com. You can also shop on Amazon India for
            millions of products with fast local delivery.{" "}
          </span>
          <a href="#">Click here to go to amazon.in</a>
        </div>
      </div>

      <div className="grid-layout">
        <GridCard />
        <GridCard />
        <ProductCard />
        <GridCard />
      </div>
    </div>
  );
};

export default Hero;
