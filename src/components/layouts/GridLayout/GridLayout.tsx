import { Fragment } from "react";
import GridCard from "../../cards/GridCard/GridCard";
import ProductCard from "../../cards/ProductCard/ProductCard";
import { CardElement } from "../../../types";

import "./GridLayout.scss";

const GridLayout = ({ body }: { body: CardElement[] }) => {
  return (
    <div className="grid-layout">
      {body.map((item, index) => (
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
    </div>
  );
};

export default GridLayout;
