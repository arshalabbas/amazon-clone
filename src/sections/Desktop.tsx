import GridLayout from "../components/layouts/GridLayout/GridLayout";
import WrappedCardsLayout from "../components/layouts/WrappedCardsLayout/WrappedCardsLayout";
import NavBar from "../components/shared/Navbar";
import circleImages from "../constants/circleImages";
import {
  gridProductsSet1,
  gridProductsSet2,
  gridProductsSet3,
} from "../constants/gridProductsSet";
import {
  productCardSet1,
  productCardSet2,
  productCardSet3,
} from "../constants/productCardsSet";
import {
  productSet1,
  productSet2,
  productSet3,
  productSet4,
} from "../constants/productSets";
import Banners from "./Banners/Banners";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import ScrollLayout from "./ScrollLayout/ScrollLayout";
import SignIn from "./SignIn/SignIn";

const Desktop = () => {
  return (
    <main>
      <NavBar />
      <section id="page-content">
        <Banners />
        <Hero />

        <div className="rest-content">
          <div className="main-content">
            <ScrollLayout
              heading="Here come Holiday Specials"
              routeText="Explore now"
              images={circleImages}
            />
            <div className="v-spacer-20" />
            <WrappedCardsLayout
              heading="Deals on PCs and gaming"
              anchorText="Shop more deals in PCs & gaming"
              body={productCardSet1}
            />
            <div className="v-spacer-20" />
            <WrappedCardsLayout
              heading="Deals on kitchen"
              anchorText="Shop all kitchen deals"
              body={productCardSet2}
            />
            <GridLayout body={gridProductsSet1} />
            <ScrollLayout
              heading="New international customers purchased"
              images={productSet1}
            />
            <div className="v-spacer-20" />
            <ScrollLayout
              heading="Most wished for in Movies & TV"
              images={productSet2}
            />
            <GridLayout body={gridProductsSet2} />
            <ScrollLayout
              heading="International top sellers"
              images={productSet3}
            />
            <div className="v-spacer-20" />
            <WrappedCardsLayout
              heading="Deals on fashion & more"
              anchorText="Shop deals in fashion"
              body={productCardSet3}
            />
            <GridLayout body={gridProductsSet3} />
            <ScrollLayout
              heading="Top Sellers in Books for you"
              images={productSet4}
            />
          </div>
        </div>
      </section>
      <div className="v-spacer-22 bg-white" />
      <SignIn />
      <Footer />
    </main>
  );
};

export default Desktop;
