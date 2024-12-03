import "./NavMid.scss";

const NavMid = () => {
  return (
    <div className="nav-search-wrapper">
      <form action="#">
        <div className="search-fill">
          <div className="search-field">
            <input type="text" placeholder="Search Amazon" />
          </div>
        </div>
        <div className="search-right">
          <div className="search-submit">
            <i></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NavMid;
