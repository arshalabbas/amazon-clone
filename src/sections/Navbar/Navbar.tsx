import Location from "./Location";
import "./Navbar.scss";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav>
      {/* Top Belt */}
      <div className="nav-top">
        {/* Branding */}
        <div className="logo-container">
          <div className="logo" />
          .in
        </div>

        {/* Delivery Button */}
        <Location />
        <Searchbar />
      </div>
      {/* Bottom Belt */}
      <div className="nav-bottom"></div>
    </nav>
  );
};

export default Navbar;
