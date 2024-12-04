import { tileSet1 } from "../../../constants/tileSet";
import HeroTileCard from "../../cards/HeroTileCard/HeroTileCard";
import "./HeroTileLayout.scss";

const HeroTileLayout = () => {
  return (
    <div className="hero-tile-layout-container">
      <div className="tile-inner-container">
        {tileSet1.map((item, index) => (
          <HeroTileCard imageURL={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HeroTileLayout;
