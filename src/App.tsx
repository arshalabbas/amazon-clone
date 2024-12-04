import { useRef } from "react";
import "./App.scss";
import Desktop from "./sections/Desktop";
import Mobile from "./sections/Mobile";

const App = () => {
  const screenWidth = useRef(window.innerWidth);

  if (screenWidth.current > 744) return <Desktop />;
  else return <Mobile />;
};

export default App;
