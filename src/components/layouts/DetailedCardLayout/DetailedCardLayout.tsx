import "./DetailedCardLayout.scss";
import DetailedCardMobile from "../../cards/DetailedCardMobile/DetailedCardMobile";
import { DetailedCard } from "../../../types";

interface Props {
  title: string;
  body: DetailedCard[];
}

const DetailedCardLayout = ({ title, body }: Props) => {
  return (
    <div className="native-card-container">
      {/* Layout header */}
      <div className="native-title-container">
        <h3>
          <span className="native-title-inner-container">
            <span>{title}</span>
          </span>
        </h3>
      </div>
      {/* Layout Body */}
      <div className="native-detailed-card-body">
        {body.map((item) => (
          <DetailedCardMobile {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default DetailedCardLayout;
