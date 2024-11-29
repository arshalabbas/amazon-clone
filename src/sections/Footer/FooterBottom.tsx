import { Fragment } from "react";
import { footerBottomLinks } from "../../constants/footerLinks";
import "./FooterBottom.scss";

const FooterBottom = () => {
  return (
    <div className="footer-bottom-container">
      <table>
        <tbody>
          {footerBottomLinks.map((item, i) => (
            <Fragment key={i}>
              <tr>
                {item.map((link, j) => (
                  <Fragment key={j}>
                    <td className="table-item">
                      <a href="#">
                        {link.title}
                        <br />
                        <span>{link.subtle}</span>
                      </a>
                    </td>

                    {j < item.length - 1 && <td className="cell-spacer" />}
                  </Fragment>
                ))}
              </tr>
              {i < footerBottomLinks.length - 1 && (
                <tr>
                  <td>&nbsp;</td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FooterBottom;
