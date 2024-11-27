import DetailedCard from "../../cards/DetailedCard/DetailedCard";
import "./WrappedCardsLayout.scss";

const WrappedCardsLayout = () => {
  return (
    <div className="wrapped-cards-layout-container">
      <div className="inner-container">
        <div className="heading-container">
          <h3>Deals on PCs and gaming</h3>
          <a href="#">Shop more deals in PCs & gaming</a>
        </div>
        <div className="carousel-wrapper">
          <ol>
            <li>
              <DetailedCard />
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WrappedCardsLayout;
