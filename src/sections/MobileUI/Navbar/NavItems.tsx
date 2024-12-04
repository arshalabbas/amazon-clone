import "./NavItems.scss";

const navLinks = [
  "Deals",
  "Amazon Basics",
  "Best Sellers",
  "Livestreams",
  "Music",
  "Books",
  "Video",
  "New Releases",
  "Home",
  "PC",
  "Health & Household",
];

const NavItems = () => {
  return (
    <div className="native-nav-items">
      {navLinks.map((label) => (
        <a href="#" key={label}>
          {label}
        </a>
      ))}
    </div>
  );
};

export default NavItems;
