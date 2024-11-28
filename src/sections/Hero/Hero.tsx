import GridLayout from "../../components/layouts/GridLayout/GridLayout";
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

      <GridLayout body={heroProducts} />
    </div>
  );
};

export default Hero;
