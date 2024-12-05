import { NoLabelCard } from "../../../types";
import "./NoLabelGridCard.scss";

const GridItem = ({ image }: { image: string }) => (
  <a href="#" className="no-label-grid-item">
    <div className="no-label-image-container">
      <img src={image} alt="product-image" />
    </div>
  </a>
);

const NoLabelGridCard = ({ title, body, footer }: NoLabelCard) => {
  return (
    <div className="native-card-container">
      {/* Card Title */}
      <div className="native-title-container">
        <h3>
          <span className="native-title-inner-container">
            <span>{title}</span>
          </span>
        </h3>
      </div>
      {/* Card Body */}
      <div className="no-label-card-body">
        <div className="inner-container">
          {body.map((item) => (
            <GridItem image={item} />
          ))}
        </div>
      </div>
      {/* Card Footer */}
      <div className="native-card-footer">
        <a href="#">
          <span className="native-footer-text-container">
            <span>{footer}</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default NoLabelGridCard;
