import { DetailedCard } from "../../../types";
import "./DetailedCardMobile.scss";

const DetailedCardMobile = ({
  title,
  price,
  image,
  fraction,
  oldPrice,
}: DetailedCard) => {
  return (
    <div className="native-detailed-card">
      <a href="#">
        <div className="native-detailed-card-image">
          <img src={image} alt="" />
        </div>
        {/* Card Item Content */}
        <div className="native-detailed-content">
          <span className="product-title">
            <span>{title}</span>
          </span>
          <div className="price-container">
            <div className="price">
              {/* <span>$1, 099.99</span> */}
              <span className="prefix">$</span>
              <span>{price}</span>
              <span className="prefix">{fraction}</span>
            </div>
            {oldPrice && (
              <div className="striked-price" style={{ fontSize: 13 }}>
                <span>List:</span>
                <span>{oldPrice}</span>
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default DetailedCardMobile;
