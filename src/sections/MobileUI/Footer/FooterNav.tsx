import { footerNavMobile } from "../../../constants/footerLinks";
import "./FooterNav.scss";

const FooterNav = () => {
  return (
    <ul className="native-footer-nav">
      {footerNavMobile.map((item, index) => {
        return item.map((label) => (
          <li
            className={
              index === 1 ? "native-footer-label" : "native-footer-label right"
            }
          >
            <a href="#">
              <span>{label}</span>
            </a>
          </li>
        ));
      })}
    </ul>
  );
};

export default FooterNav;
