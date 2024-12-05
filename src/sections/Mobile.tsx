import Hero from "./MobileUI/Hero/Hero";
import Navbar from "./MobileUI/Navbar/Navbar";

import "./Mobile.scss";
import SignIn from "./MobileUI/SignIn/SignIn";
import GridLayoutMobile from "../components/layouts/GridLayoutMobile/GridLayoutMobile";
import {
  bentoGridSet1,
  mobileGridProductsSet1,
  mobileGridProductsSet2,
  mobileGridProductsSet3,
  mobileGridProductsSet4,
  noTitleSet1,
  noTitleSet2,
  noTitleSet3,
} from "../constants/mobileGridProductsSet";
import BentoGridCard from "../components/cards/BentoGridCard/BentoGridCard";
import NoLabelGridCard from "../components/cards/NoLabelGridCard/NoLabelGridCard";

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

      <NoLabelGridCard {...noTitleSet1} />

      <GridLayoutMobile {...mobileGridProductsSet3} />
      <NoLabelGridCard {...noTitleSet2} />
      {mobileGridProductsSet2.map((item) => (
        <GridLayoutMobile {...item} key={item.title} />
      ))}
      <NoLabelGridCard {...noTitleSet3} />

      <GridLayoutMobile {...mobileGridProductsSet4} />
    </section>
  );
};

export default Mobile;
