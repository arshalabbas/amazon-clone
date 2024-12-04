import { MobileGridCard } from "../../../types";
import "./GridLayoutMobile.scss";

const LayoutBodyItem = ({ label, image }: { label: string; image: string }) => (
  <a className="grid-body-item-container">
    <img src={image} alt={`${label}-image`} />
    <div className="grid-body-item-label">{label}</div>
  </a>
);

const GridLayoutMobile = ({ title, body, footer }: MobileGridCard) => {
  return (
    <div className="grid-layout-container">
      <div className="grid-title-container">
        <h3>{title}</h3>
      </div>
      <div className="grid-layout-body">
        {body.map((item) => (
          <LayoutBodyItem {...item} key={item.label} />
        ))}
      </div>
      <div className="grid-layout-footer">
        <a href="#">
          <span>{footer}</span>
        </a>
      </div>
    </div>
  );
};

export default GridLayoutMobile;
