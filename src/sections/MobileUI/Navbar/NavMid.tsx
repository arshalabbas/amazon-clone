import "./NavMid.scss";

const NavMid = () => {
  return (
    <div className="nav-search-wrapper">
      <form action="#">
        <div className="native-search-fill">
          <div className="native-search-field">
            <input type="text" placeholder="Search Amazon" />
          </div>
        </div>
        <div className="native-search-right">
          <div className="search-submit">
            <i></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NavMid;
