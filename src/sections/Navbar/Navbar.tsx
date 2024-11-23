import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-top">
        <div className="nav-left">
          <div className="nav-logo">
            <a href="#" className="logo-container">
              <div className="logo"></div>
              <span className="logo-locale">.in</span>
            </a>
          </div>
        </div>
        <div className="nav-fill"></div>
        <div className="nav-right"></div>
      </div>
      <div className="nav-bottom"></div>
    </nav>
  );
};

export default Navbar;
