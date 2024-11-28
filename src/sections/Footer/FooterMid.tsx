import "./FooterMid.scss";

const FooterMid = () => {
  return (
    <div className="footer-mid">
      <div className="footer-logo-container">
        <a href="#" className="footer-logo">
          <div />
        </a>
      </div>
      <div className="options-container">
        <div className="inner-container">
          {/* Item 1 */}
          <a href="#">
            <div className="globe-icon" />
            <span className="option-label">English</span>
            <span className="select-arrow-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMid;
