import { Fragment } from "react";
import { footerTopLinks } from "../../constants/footerLinks";
import "./FooterTop.scss";

const FooterTop = () => {
  return (
    <div className="footer-top-container">
      <div className="inner-container">
        {footerTopLinks.map((item, index) => (
          <Fragment key={index}>
            <div className="col">
              <div className="col-head">{item.heading}</div>
              <ul>
                {item.items.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            {footerTopLinks.length !== index + 1 && (
              <div className="col-spacer" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default FooterTop;
