import "./Searchbar.scss";
import { IoMdArrowDropdown } from "react-icons/io";

const Searchbar = () => {
  return (
    <div className="search-bar">
      <div className="input-container">
        <div className="select-btn">
          All
          <IoMdArrowDropdown className="down-icon" />
        </div>
        <input type="text" placeholder="Search Amazon.in" />
      </div>
      <div className="search-icon-container">
        <div className="search-icon"></div>
      </div>
    </div>
  );
};

export default Searchbar;
