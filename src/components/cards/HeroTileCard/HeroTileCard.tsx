import "./HeroTileCard.scss";

const HeroTileCard = ({
  imageURL,
  key = 0,
}: {
  imageURL: string;
  key?: string | number;
}) => {
  return (
    <div className="hero-tile-card-container">
      <div className="inner-container">
        <a href="#">
          <img src={imageURL} alt={"tile-image" + key} />
        </a>
      </div>
    </div>
  );
};

export default HeroTileCard;
