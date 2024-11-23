import "./FourGridCard.scss";

const FourGridCard = () => {
  return (
    <div className="four-grid-card">
      <div className="card-heading-container">
        <h2 className="heading">Automotive essentials | Up to 60% odd</h2>
      </div>
      <div className="images-grid-container">
        <div>
          <img src="/products/small-1.jpg" alt="product-1" />
        </div>
        <div>
          <img src="/products/small-2.jpg" alt="product-2" />
        </div>
        <div>
          <img src="/products/small-3.jpg" alt="product-3" />
        </div>
        <div>
          <img src="/products/small-4.jpg" alt="product-4" />
        </div>
      </div>
    </div>
  );
};

export default FourGridCard;
