import { CardElement } from "../../../types";
import "./ProductCard.scss";

const ProductCard = ({ heading, footer, body }: CardElement) => {
  if (Array.isArray(body)) return;
  return (
    <div className="card-container">
      <div className="inner-container">
        <div className="card-header">
          <h2>{heading}</h2>
        </div>
        <a href="#" className="product-card-body">
          <div className="image-container">
            <div className="image-inner-container">
              <img src={body} alt={`image-${heading}`} />
            </div>
          </div>
          <div className="product-card-footer">
            <span>{footer}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
