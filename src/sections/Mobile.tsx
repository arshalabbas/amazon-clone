import Hero from "./MobileUI/Hero/Hero";
import Navbar from "./MobileUI/Navbar/Navbar";

import "./Mobile.scss";
import SignIn from "./MobileUI/SignIn/SignIn";
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
    </main>
  );
};

export default Mobile;
