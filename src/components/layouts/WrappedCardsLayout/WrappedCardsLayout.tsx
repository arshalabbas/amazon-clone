import { WrappedCard } from "../../../types";
import DetailedCard from "../../cards/DetailedCard/DetailedCard";
import "./WrappedCardsLayout.scss";

interface Props {
  heading: string;
  anchorText: string;
  body: WrappedCard[];
}

const WrappedCardsLayout = ({ heading, anchorText, body }: Props) => {
  return (
    <div className="wrapped-cards-layout-container">
      <div className="inner-container">
        <div className="heading-container">
          <h3>{heading}</h3>
          <a href="#">{anchorText}</a>
        </div>
        <div className="carousel-wrapper">
          <ol>
            {body.map((item, index) => (
              <li key={index}>
                <DetailedCard {...item} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WrappedCardsLayout;
