import { Fragment } from "react";
import GridCard from "../../cards/GridCard/GridCard";
import ProductCard from "../../cards/ProductCard/ProductCard";
import { CardElement } from "../../../types";

import "./GridLayout.scss";

const GridLayout = ({ body }: { body: CardElement[] }) => {
  return (
    <div className="grid-layout">
      {body.slice(0, 8).map((item, index) => (
        <Fragment key={index}>
          {item.type === "grid" ? (
            <GridCard {...item} />
          ) : (
            <ProductCard {...item} />
          )}
          {(index + 1) % 4 === 0 && index < body.length - 1 && (
            <div className="v-spacer-20 only-desktop" />
          )}
          {(index + 1) % 3 === 0 && index < body.length - 1 && (
            <div className="v-spacer-20 only-native" />
          )}
        </Fragment>
      ))}
      {body[8] && (
        <span className="extra-card">
          {body[8].type === "grid" ? (
            <GridCard {...body[8]} />
          ) : (
            <ProductCard {...body[8]} />
          )}
        </span>
      )}
    </div>
  );
};

export default GridLayout;
