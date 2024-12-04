import "./HeroTileCard.scss";

const HeroTileCard = ({
  imageURL,
  index = 0,
}: {
  imageURL: string;
  index?: string | number;
}) => {
  return (
    <div className="hero-tile-card-container">
      <div className="inner-container">
        <a href="#">
          <img src={imageURL} alt={"tile-image" + index} />
        </a>
      </div>
    </div>
  );
};

export default HeroTileCard;
