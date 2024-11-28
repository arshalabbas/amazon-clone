import NavBar from "./components/shared/Navbar";

import "./App.scss";
import Banners from "./sections/Banners/Banners";
import Hero from "./sections/Hero/Hero";
import ScrollLayout from "./sections/ScrollLayout/ScrollLayout";
import circleImages from "./constants/circleImages";
import {
  productSet1,
  productSet2,
  productSet3,
  productSet4,
} from "./constants/productSets";
import WrappedCardsLayout from "./components/layouts/WrappedCardsLayout/WrappedCardsLayout";
import {
  productCardSet1,
  productCardSet2,
  productCardSet3,
} from "./constants/productCardsSet";
import GridLayout from "./components/layouts/GridLayout/GridLayout";
import {
  gridProductsSet1,
  gridProductsSet2,
  gridProductsSet3,
} from "./constants/gridProductsSet";
import SignIn from "./sections/SignIn/SignIn";
import Footer from "./sections/Footer/Footer";

const App = () => {
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

export default App;
