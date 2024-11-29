import "./FooterEnd.scss";

const FooterEnd = () => {
  return (
    <div className="footer-end-container">
      <ul>
        <li>
          <a href="#">Conditions of Use</a>
        </li>
        <li>
          <a href="#">Privacy Notice</a>
        </li>
        <li>
          <a href="#">Consumer Health Data Privacy Disclosure</a>
        </li>
        <li>
          <a href="#">Your Ads Privacy Choices</a>
        </li>
        <li>
          <span className="privacy-icon"></span>
        </li>
      </ul>
      <span className="copy">
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </span>
    </div>
  );
};

export default FooterEnd;
