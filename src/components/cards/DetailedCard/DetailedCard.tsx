import { WrappedCard } from "../../../types";
import "./DetailedCard.scss";

const DetailedCard = ({
  imgURL,
  fraction,
  oldPrice,
  price,
  title,
  percentage,
}: WrappedCard) => {
  return (
    <div className="detailed-card-container">
      <div className="figure-container">
        <img src={imgURL} alt="product-image" />
      </div>
      <div className="detailed-body">
        <div className="badge-container">
          <div className="badge-off">{percentage}</div>
          <div className="badge-text">Black Friday Deal</div>
        </div>
        <div className="price-container">
          <div className="price">
            {/* <span>$1, 099.99</span> */}
            <span className="prefix">$</span>
            <span>${price}</span>
            <span className="prefix">{fraction}</span>
          </div>
          <div className="striked-price">
            <span>List:</span>
            <span>{oldPrice}</span>
          </div>
        </div>
        <div className="product-title">{title}</div>
      </div>
    </div>
  );
};

export default DetailedCard;
