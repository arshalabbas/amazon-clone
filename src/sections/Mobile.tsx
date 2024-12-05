import Hero from "./MobileUI/Hero/Hero";
import Navbar from "./MobileUI/Navbar/Navbar";

import "./Mobile.scss";
import SignIn from "./MobileUI/SignIn/SignIn";
import GridLayoutMobile from "../components/layouts/GridLayoutMobile/GridLayoutMobile";
import {
  bentoGridSet1,
  mobileGridProductsSet1,
} from "../constants/mobileGridProductsSet";
import BentoGridCard from "../components/cards/BentoGridCard/BentoGridCard";

const Mobile = () => {
  return (
    <section className="native-section">
      <Navbar />
      <Hero />
      {/* Amazon.com Region Message */}
      <div className="message-outer-container">
        <div className="message-container">
          <div className="message-inner-container">
            <a href="#">
              <img src="/region_message.jpg" alt="region-message-image" />
            </a>
          </div>
        </div>
      </div>
      {/* Region Message End */}
      <SignIn />
      {mobileGridProductsSet1.map((item) => (
        <GridLayoutMobile {...item} key={item.title} />
      ))}
      <BentoGridCard {...bentoGridSet1} />
    </section>
  );
};

export default Mobile;
