import "./Location.scss";

const Location = () => {
  return (
    <div className="location-card">
      {/* Icon */}
      <div className="icon-container">
        <div className="location-pin-icon"></div>
      </div>
      <div className="location">
        <p>Deliver to</p>
        <h4>Vythiri 673577</h4>
      </div>
    </div>
  );
};

export default Location;
