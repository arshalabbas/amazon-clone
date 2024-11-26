import NavBar from "./components/shared/Navbar";

import "./App.scss";
import Banners from "./sections/Banners/Banners";
import Hero from "./sections/Hero/Hero";

const App = () => {
  return (
    <main>
      <NavBar />
      <section id="page-content">
        <Banners />
        <Hero />
      </section>
      <section style={{ height: "300vh" }}></section>
    </main>
  );
};

export default App;
