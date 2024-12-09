import "./FooterMid.scss";

const FooterMid = () => {
  return (
    <div className="footer-mid">
      <div className="footer-mid-inner-container">
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
            {/* Item 2 */}
            <a href="#">
              <span className="currency">$</span>
              <span className="option-label">USD - U.S. Dollar</span>
            </a>
            {/* Item 3 */}
            <a href="#">
              <span className="us-flag" />
              <span className="option-label">United States</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMid;
