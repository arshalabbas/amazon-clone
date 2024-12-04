import "./GridLayoutMobile.scss";

const LayoutBodyItem = () => (
  <a className="grid-body-item-container">
    <img
      src="https://m.media-amazon.com/images/I/31hqkoNqvTL._SR420,420_.jpg"
      alt="product-image"
    />
    <div className="grid-body-item-label">Desktops</div>
  </a>
);

const GridLayoutMobile = () => {
  return (
    <div className="grid-layout-container">
      <div className="title-container">
        <h3>Score the top PCs & Accessories</h3>
      </div>
      <div className="grid-layout-body">
        <LayoutBodyItem />
        <LayoutBodyItem />
        <LayoutBodyItem />
        <LayoutBodyItem />
      </div>
      <div className="grid-layout-footer">
        <a href="#">See more</a>
      </div>
    </div>
  );
};

export default GridLayoutMobile;
