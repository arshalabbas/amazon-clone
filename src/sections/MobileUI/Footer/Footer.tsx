import "./Footer.scss";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <div className="native-footer">
      <div>
        {/* TOP to Bottom Button */}
        <a href="#" className="native-top-to-bottom">
          <i></i>
          <b>Top of page</b>
        </a>

        <FooterNav />
      </div>
    </div>
  );
};

export default Footer;
