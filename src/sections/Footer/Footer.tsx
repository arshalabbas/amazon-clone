import "./Footer.scss";
import FooterBottom from "./FooterBottom";
import FooterEnd from "./FooterEnd";
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
      <FooterEnd />
    </footer>
  );
};

export default Footer;
