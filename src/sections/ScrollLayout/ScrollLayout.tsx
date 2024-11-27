import "./ScrollLayout.scss";

interface Props {
  heading: string;
  routeText?: string;
  images: string[];
}

const ScrollLayout = ({ heading, routeText, images }: Props) => {
  return (
    <div className="scroll-layout">
      <div className="inner-container">
        <div className="layout-title-container">
          <h2>{heading}</h2>
          {routeText && <a href="#">{routeText}</a>}
        </div>
        <div className="items-container">
          <ul>
            {images.map((item, index) => (
              <li key={index}>
                <span>
                  <img src={item} alt={"circle-product-" + index} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScrollLayout;
