import "./Banners.scss";

const Banners = () => {
  return (
    <div className="banners-container">
      <div className="inner-container">
        <div>
          {/* TODO: arrow container */}
          {/* <div className="arrow-container">
            <a href="#">
              <i></i>
            </a>
          </div> */}
          <img src="/banner1.jpg" className="banner-img" />
        </div>
      </div>
    </div>
  );
};

export default Banners;
