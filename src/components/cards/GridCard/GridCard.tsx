import "./GridCard.scss";

const GridCardItem = ({ image, label }: { image: string; label: string }) => (
  <div className="card-row-item">
    <div className="card-item-image">
      <img src={image} alt={label + "image"} />
    </div>
    <div className="card-item-label">
      <span>{label}</span>
    </div>
  </div>
);

const GridCard = () => {
  return (
    <div className="card-container">
      <div className="inner-container">
        <div className="card-header">
          <h2>Score Black Friday Week deals</h2>
        </div>
        <div className="card-body">
          <div className="card-row">
            <GridCardItem
              image="/products/grid-images/grid-1-1.jpg"
              label="Amazon Basics & more"
            />
            <GridCardItem
              image="/products/grid-images/grid-1-2.jpg"
              label="Amazon Basics & more"
            />
          </div>
          <div className="card-row">
            <GridCardItem
              image="/products/grid-images/grid-1-3.jpg"
              label="Amazon Basics & more"
            />
            <GridCardItem
              image="/products/grid-images/grid-1-4.jpg"
              label="Amazon Basics & more"
            />
          </div>
        </div>
        <div className="card-footer">
          <a href="#">
            <span>Shop all deals</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
