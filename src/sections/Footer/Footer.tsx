import "./Footer.scss";
import FooterBottom from "./FooterBottom";
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
      <FooterBottom />
    </footer>
  );
};

export default Footer;
