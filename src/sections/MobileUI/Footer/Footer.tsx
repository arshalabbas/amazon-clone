import "./Footer.scss";
import FooterICP from "./FooterICP";
import FooterLinks from "./FooterLinks";
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

        <div className="auth">
          Already a customer?
          <a href="#">Sign in</a>
        </div>

        <FooterLinks />

        <div className="native-copy">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
        <div className="v-spacer-15" />
      </div>
    </div>
  );
};

export default Footer;
