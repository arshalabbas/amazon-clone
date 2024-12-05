import "./ImageProductCard.scss";

const ImageProductCard = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <div className="native-card-container">
      {/* Card Header */}
      <div className="native-title-container">
        <h3>
          <span className="native-title-inner-container">
            <span>{title}</span>
          </span>
        </h3>
      </div>
      {/* Card Body */}
      <div className="image-card-body">
        <a href="#">
          <img src={image} alt="product-image" />
        </a>
      </div>
    </div>
  );
};

export default ImageProductCard;
