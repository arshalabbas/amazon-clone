import Language from "./Language";
import Location from "./Location";
import "./Navbar.scss";
import NavSearch from "./NavSearch";

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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
