import "./Footer.scss";
import FooterICP from "./FooterICP";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <div className="native-footer">
      <div className="inner-container">
        {/* TOP to Bottom Button */}
        <a href="#" className="native-top-to-bottom">
          <i></i>
          <b>Top of page</b>
        </a>

        <FooterNav />
        <FooterICP />
      </div>
    </div>
  );
};

export default Footer;
