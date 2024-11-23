import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section style={{ height: "200vh" }}></section>
    </div>
  );
};

export default App;
