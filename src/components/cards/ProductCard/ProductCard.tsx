import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="card-container">
      <div className="inner-container">
        <div className="card-header">
          <h2>Toys under $25</h2>
        </div>
        <a href="#" className="product-card-body">
          <div className="image-container">
            <div className="image-inner-container">
              <img src="/products/product-1.jpg" alt="Product-1" />
            </div>
          </div>
          <div className="product-card-footer">
            <span>Shop now</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
