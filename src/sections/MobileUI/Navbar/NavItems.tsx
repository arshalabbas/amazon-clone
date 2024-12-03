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
    <nav>
      {navLinks.map((label) => (
        <a href="#" key={label}>
          {label}
        </a>
      ))}
    </nav>
  );
};

export default NavItems;
