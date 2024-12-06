import { HTMLAttributes } from "react";
import { CardElement } from "../../../types";
import "./GridCard.scss";

const GridCardItem = ({ image, label }: { image: string; label: string }) => (
  <div className="card-row-item">
    <div className="card-item-image">
      <img src={image} alt={label + "-image"} />
    </div>
    <div className="card-item-label">
      <span>{label}</span>
    </div>
  </div>
);

const GridCard = ({
  heading,
  body,
  footer,
  ...props
}: CardElement & HTMLAttributes<HTMLDivElement>) => {
  if (!Array.isArray(body)) return;

  return (
    <div className="card-container" {...props}>
      <div className="inner-container">
        <div className="card-header">
          <h2>{heading}</h2>
        </div>
        <div className="card-body">
          <div className="card-row">
            <GridCardItem image={body[0].image} label={body[0].title} />
            <GridCardItem image={body[1].image} label={body[1].title} />
          </div>
          <div className="card-row">
            <GridCardItem image={body[2].image} label={body[2].title} />
            <GridCardItem image={body[3].image} label={body[3].title} />
          </div>
        </div>
        <div className="card-footer">
          <a href="#">
            <span>{footer}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
