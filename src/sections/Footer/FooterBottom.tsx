import { Fragment } from "react/jsx-runtime";
import { footerBottomLinks } from "../../constants/footerLinks";
import "./FooterBottom.scss";

const FooterBottom = () => {
  return (
    <div className="footer-bottom-container">
      <table>
        <tbody>
          {footerBottomLinks.map((item, index) => (
            <tr key={index}>
              {item.map((link, index) => (
                <Fragment key={index}>
                  <td key={index}>
                    <a href="#">
                      {link.title}
                      <br />
                      <span>{link.subtle}</span>
                    </a>
                  </td>

                  <td className="td-spacer" />
                </Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FooterBottom;
