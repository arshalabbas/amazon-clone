import "./Navbar.scss";

import Account from "./Account";
import Cart from "./Cart";
import Language from "./Language";
import Location from "./Location";
import NavSearch from "./NavSearch";
import Orders from "./Orders";
import BottomMenu from "./BottomMenu";

const NavBar = () => {
  return (
    <nav>
      {/* Top Belt */}
      <div className="nav-top-belt">
        {/* Nav Left */}

        {/* Logo */}
        <div className="nav-left">
          <div className="logo-container">
            <a href="#">
              <div className="logo" />
            </a>
          </div>
          {/* Location */}
          <Location />
        </div>

        {/* Nav Fill */}
        <div className="nav-fill">
          {/* Search Bar */}
          <NavSearch />
        </div>

        {/* Nav Right */}
        <div className="nav-right">
          <div className="nav-tools">
            <Language />
            <Account />
            <Orders />
            <Cart />
          </div>
        </div>
      </div>

      {/* Nav bottom belt */}
      <div className="nav-bottom-belt">
        {/* Bottom Left */}
        <div className="nav-bottom-left">
          <a href="#" className="menu">
            <i></i>
            <span>All</span>
          </a>
        </div>
        <div className="nav-bottom-fill">
          <BottomMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
