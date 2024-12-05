import "./FooterICP.scss";

const FooterICP = () => {
  return (
    <div className="icp-container">
      {/* Language */}
      <a href="#" className="icp-option">
        <div className="icp-globe-icon" />
        <span className="label">English</span>
      </a>

      {/* Currency */}
      <a href="#" className="icp-option">
        <span className="icp-currency">$</span>
        <span className="label">USD - U.S. Dollar</span>
      </a>

      {/* Country */}
      <a href="#" className="icp-option">
        <span className="icp-flag" />
        <span className="label">United States</span>
      </a>
    </div>
  );
};

export default FooterICP;
