import "./GridCard.scss";

const GridCardItem = () => {
  return (
    <div className="card-item">
      <div className="card-image">
        <img src="/products/grid-images/grid-1-1.jpg" alt="grid-1-1" />
      </div>
      <div className="card-label">
        <span>Amazon Basics & more</span>
      </div>
    </div>
  );
};

const GridCard = () => {
  return (
    <div className="grid-card-container">
      <div className="inner-container">
        <div className="header">
          <h2>Score Black Friday Week deals</h2>
        </div>
        <div className="body">
          {/* Row 1 */}
          <div className="image-row">
            {/* Item 1 */}
            <GridCardItem />
            <GridCardItem />
          </div>
          <div className="image-row">
            <GridCardItem />
            <GridCardItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
