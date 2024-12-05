import "./FooterLinks.scss";

const footerLinks = [
  "Conditions of Use",
  "Privacy Notice",
  "Consumer Health Data Privacy Disclosure",
  "Your Ads Privacy Choices",
];

const FooterLinks = () => {
  return (
    <ul className="footer-links-ul">
      {footerLinks.map((item) => (
        <li key={item}>
          <a href="#">{item}</a>
        </li>
      ))}
      <li>
        <span className="verification-icon" />
      </li>
    </ul>
  );
};

export default FooterLinks;
