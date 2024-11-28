import "./Footer.scss";
import FooterMid from "./FooterMid";
import FooterTop from "./FooterTop";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="to-top">
        Back to top
      </a>
      <FooterTop />
      <div className="footer-line" />
      <FooterMid />
    </footer>
  );
};

export default Footer;
