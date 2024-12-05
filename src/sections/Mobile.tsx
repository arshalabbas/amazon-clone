import Hero from "./MobileUI/Hero/Hero";
import Navbar from "./MobileUI/Navbar/Navbar";

import "./Mobile.scss";
import SignIn from "./MobileUI/SignIn/SignIn";
import GridLayoutMobile from "../components/layouts/GridLayoutMobile/GridLayoutMobile";
import {
  bentoGridSet1,
  exploreDepartments,
  imageCardSet1,
  mobileGridProductsSet1,
  mobileGridProductsSet2,
  mobileGridProductsSet3,
  mobileGridProductsSet4,
  mobileGridProductsSet5,
  mobileGridProductsSet6,
  mobileGridProductsSet7,
  noTitleSet1,
  noTitleSet2,
  noTitleSet3,
  noTitleSet4,
  noTitleSet5,
  noTitleSet6,
} from "../constants/mobileGridProductsSet";
import BentoGridCard from "../components/cards/BentoGridCard/BentoGridCard";
import NoLabelGridCard from "../components/cards/NoLabelGridCard/NoLabelGridCard";
import ImageProductCard from "../components/cards/ImageProductCard/ImageProductCard";
import DetailedCardLayout from "../components/layouts/DetailedCardLayout/DetailedCardLayout";
import {
  detailedCardsSet1,
  detailedCardsSet2,
  detailedCardsSet3,
  detailedCardsSet4,
  detailedCardsSet5,
} from "../constants/detailedCardsMobile";
import Footer from "./MobileUI/Footer/Footer";

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

      <ImageProductCard
        title="Personal Care under $25"
        image="https://m.media-amazon.com/images/I/51h3VyEfPfL._SR760,610_.jpg"
      />

      <ImageProductCard
        title="Deals on shoes"
        image="https://m.media-amazon.com/images/I/510jXYtHZkL._SR760,610_.jpg"
      />

      <GridLayoutMobile {...mobileGridProductsSet5} />

      <NoLabelGridCard {...noTitleSet4} />

      <GridLayoutMobile {...mobileGridProductsSet6} />

      <ImageProductCard
        title="Gifts for the gamer"
        image="https://m.media-amazon.com/images/I/51TI9bxbVkL._SR760,610_.jpg"
      />

      <DetailedCardLayout
        title="Top picks for India"
        body={detailedCardsSet1}
      />

      <GridLayoutMobile {...mobileGridProductsSet7} />

      <DetailedCardLayout
        title="New international custmers purchased"
        body={detailedCardsSet2}
      />

      <NoLabelGridCard {...noTitleSet5} />
      <ImageProductCard
        title="Deals on books"
        image="https://m.media-amazon.com/images/I/51IUu5+BxxL._SR760,610_.jpg"
      />

      {noTitleSet6.map((item) => (
        <NoLabelGridCard {...item} key={item.title} />
      ))}

      <DetailedCardLayout
        title="Popular items this season"
        body={detailedCardsSet3}
      />

      <ImageProductCard
        title="Toys under $30"
        image="https://m.media-amazon.com/images/I/61HgDXK2NvL._SR1050,1050_.jpg"
      />

      <DetailedCardLayout
        title="International top sellers"
        body={detailedCardsSet4}
      />

      {imageCardSet1.map((item) => (
        <ImageProductCard {...item} key={item.title} />
      ))}

      <DetailedCardLayout
        title="Top Sellers in Books for you"
        body={detailedCardsSet5}
      />

      {/* End Strip */}
      <div className="end-strip">
        <div />
        <span>You've reached the end. Keep exploring!</span>
        <div />
      </div>

      <GridLayoutMobile {...exploreDepartments} />

      <Footer />
    </section>
  );
};

export default Mobile;
