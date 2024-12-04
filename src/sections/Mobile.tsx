import Hero from "./MobileUI/Hero/Hero";
import Navbar from "./MobileUI/Navbar/Navbar";

import "./Mobile.scss";
import SignIn from "./MobileUI/SignIn/SignIn";
import GridLayoutMobile from "../components/layouts/GridLayoutMobile/GridLayoutMobile";
import { mobileGridProductsSet1 } from "../constants/mobileGridProductsSet";
const Mobile = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Amazon.com Region Message */}
      <div className="message-container">
        <div className="message-inner-container">
          <a href="#">
            <img src="/region_message.jpg" alt="region-message-image" />
          </a>
        </div>
      </div>
      {/* Region Message End */}
      <SignIn />
      {mobileGridProductsSet1.map((item) => (
        <GridLayoutMobile {...item} key={item.title} />
      ))}
    </main>
  );
};

export default Mobile;
