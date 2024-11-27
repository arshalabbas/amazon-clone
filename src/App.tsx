import NavBar from "./components/shared/Navbar";

import "./App.scss";
import Banners from "./sections/Banners/Banners";
import Hero from "./sections/Hero/Hero";
import ScrollLayout from "./sections/ScrollLayout/ScrollLayout";
import circleImages from "./constants/circleImages";

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
          </div>
        </div>
      </section>
      <section style={{ height: "300vh" }}></section>
    </main>
  );
};

export default App;
