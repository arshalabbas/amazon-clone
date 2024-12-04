import Location from "./Location";
import "./Navbar.scss";
import NavItems from "./NavItems";
import NavMid from "./NavMid";

const Navbar = () => {
  return (
    <div className="native-header">
      {/* Nav Top Section */}
      <div className="nav-logo-belt">
        <div className="logo-belt-top">
          <a href="#" className="menu-bar-icon">
            <i></i>
          </a>
          <div className="native-logo-container">
            <a href="#">
              <span></span>
            </a>
          </div>
        </div>
        <div className="logo-belt-right">
          <a href="#" className="sign-in-copy">
            Sign in ›
          </a>
          <a href="#" className="account-icon">
            <i></i>
          </a>
          <a href="#" className="native-cart-btn">
            <div className="inner-container">
              <span className="native-cart-icon">
                <span className="cart-count">0</span>
              </span>
            </div>
          </a>
        </div>
      </div>
      {/* Nav Top seciton - End */}
      <NavMid />
      <NavItems />
      <Location />
    </div>
  );
};

export default Navbar;
