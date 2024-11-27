import NavBar from "./components/shared/Navbar";

import "./App.scss";
import Banners from "./sections/Banners/Banners";
import Hero from "./sections/Hero/Hero";
import ScrollLayout from "./sections/ScrollLayout/ScrollLayout";
import circleImages from "./constants/circleImages";
import { productSet1, productSet2, productSet3 } from "./constants/productSets";
import WrappedCardsLayout from "./components/layouts/WrappedCardsLayout/WrappedCardsLayout";

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
            <WrappedCardsLayout />
            <div className="v-spacer-20" />
            <ScrollLayout
              heading="New international customers purchased"
              images={productSet1}
            />
            <div className="v-spacer-20" />
            <ScrollLayout
              heading="Most wished for in Movies & TV"
              images={productSet2}
            />
            <div className="v-spacer-20" />
            <ScrollLayout
              heading="International top sellers"
              images={productSet3}
            />
          </div>
        </div>
      </section>
      <section style={{ height: "300vh" }}></section>
    </main>
  );
};

export default App;
