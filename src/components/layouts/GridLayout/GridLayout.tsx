import { Fragment } from "react";
import GridCard from "../../cards/GridCard/GridCard";
import ProductCard from "../../cards/ProductCard/ProductCard";
import { CardElement } from "../../../types";

import "./GridLayout.scss";
import { ROW_ITEM_COUNT } from "../../../constants";

const GridLayout = ({
  body,
  singleRow = true,
}: { body: CardElement[] } & { singleRow?: boolean }) => {
  const newBody = body.slice(
    0,
    singleRow ? ROW_ITEM_COUNT.single_row : ROW_ITEM_COUNT.double_row
  );
  return (
    <div className="grid-layout">
      {newBody.map((item, index) => (
        <Fragment key={index}>
          {item.type === "grid" ? (
            <GridCard
              {...item}
              data-last-item={singleRow && index === newBody.length - 1}
            />
          ) : (
            <ProductCard
              {...item}
              data-last-item={singleRow && index === newBody.length - 1}
            />
          )}
          {(index + 1) % 4 === 0 && index < newBody.length - 1 && (
            <div className="v-spacer-20 only-desktop" />
          )}
          {(index + 1) % 3 === 0 && index < newBody.length - 1 && (
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
