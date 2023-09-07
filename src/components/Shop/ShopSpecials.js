import React from "react";
import Product from "../Product";
import classNames from "classnames";

export default function ShopSpecials(props) {
  const { gridColClass, listColClass, fiveCol, view, specials, categoryPath } =
    props;
  let arr = [5];
  for (let i = 0; i < Math.round(specials.length / 5); i++) {
    arr.push(arr[i] + 6);
  }

  return (
    <div className="shop-products">
      {view === "grid" ? (
        <div className="shop-products__grid">
          {specials && Array.isArray(specials) && specials.length > 0 && (
            <div className="row">
              {specials.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={classNames(gridColClass, {
                      "five-col": fiveCol,
                    })}
                  >
                    <Product data={item} path={categoryPath} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="shop-products__list">
          {specials && (
            <div className="row">
              {specials.map((item, index) => (
                <div key={index} className={listColClass}>
                  <Product data={item} type="list" path={categoryPath} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
