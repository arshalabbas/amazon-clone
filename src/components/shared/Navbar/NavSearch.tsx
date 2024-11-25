import "./NavSearch.scss";
const NavSearch = () => {
  return (
    <div className="nav-search">
      <form>
        {/* Search left */}
        <div className="search-left">
          <div className="category-select">
            <div className="category-btn">
              <span>All</span>
              <i></i>
            </div>
          </div>
        </div>
        {/* Search fill */}
        <div className="search-fill">
          <div className="nav-search-field">
            <div className="input-container">
              <input type="text" placeholder="Search Amazon" />
            </div>
          </div>
        </div>
        {/* Search Right */}
        <div className="search-right">
          <div className="search-btn">
            <div className="search-icon" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NavSearch;
