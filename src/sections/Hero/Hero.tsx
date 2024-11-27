import { Fragment } from "react";
import GridCard from "../../components/cards/GridCard/GridCard";
import ProductCard from "../../components/cards/ProductCard/ProductCard";
import heroProducts from "../../constants/hero";
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
        {heroProducts.map((item, index) => (
          <Fragment key={index}>
            {item.type === "grid" ? (
              <GridCard {...item} />
            ) : (
              <ProductCard {...item} />
            )}
            {(index + 1) % 4 === 0 && <div className="v-spacer-20" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Hero;
