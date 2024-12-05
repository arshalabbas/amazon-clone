import { MobileGridCard } from "../../../types";
import "./BentoGridCard.scss";

const BentoRowItem = ({ image, label }: { image: string; label: string }) => (
  <div className="bento-row-item">
    <a href="#">
      <div className="sm-image-container">
        <div>
          <img src={image} alt={`${label}-image`} />
        </div>
      </div>
      <span className="sm-label-container">
        <span>{label}</span>
      </span>
    </a>
  </div>
);

const BentoGridCard = ({ title, body, footer }: MobileGridCard) => {
  return (
    <div className="bento-card-container">
      {/* Card Header */}
      <div className="bento-title-container">
        <h3>
          <span className="bento-title-inner-container">
            <span>{title}</span>
          </span>
        </h3>
      </div>
      {/* Card Body */}
      <div className="bento-card-body">
        {/* Body Large Section */}
        <div className="lg-section">
          <a href="#">
            <div className="lg-image-container">
              <div>
                <img src={body[0].image} alt={`${body[0].label}-image`} />
              </div>
            </div>
            <span className="lg-title-container">{body[0].label}</span>
          </a>
        </div>
        {/* Body Row */}
        <div className="bento-row">
          {body.slice(1).map((item) => (
            <BentoRowItem {...item} key={item.label} />
          ))}
        </div>
      </div>
      {/* Card Footer */}
      <div className="bento-footer">
        <a href="#">
          <span className="bento-footer-text-container">
            <span>{footer}</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default BentoGridCard;
