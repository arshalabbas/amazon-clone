import "./DetailedCard.scss";

const DetailedCard = () => {
  return (
    <div className="detailed-card-container">
      <div className="figure-container">
        <img
          src="https://m.media-amazon.com/images/I/41kjMvKK9mL._SR480,440_.jpg"
          alt="product-image"
        />
      </div>
      <div className="detailed-body">
        <div className="badge-container">
          <div className="badge-off">21% off</div>
          <div className="badge-text">Black Friday Deal</div>
        </div>
        <div className="price-container">
          <div className="price">
            <span>$1, 099.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
