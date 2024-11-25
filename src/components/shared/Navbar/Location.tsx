import "./Location.scss";

const Location = () => {
  return (
    <div className="location-container">
      <div className="location-inner-container">
        <a href="#">
          <div className="location-pin-icon" />
          <div className="location-text">
            <p>Deliver to</p>
            <h4>India</h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Location;
