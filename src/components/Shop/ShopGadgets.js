import React from "react";
import { useAppContext } from "@context/app-context";
import Product from "../Product";
import classNames from "classnames";

export default function ShopGadgets(props) {
  const [state, dispatch] = useAppContext();

  const { filterOptions } = state;
  const { category, priceRange } = filterOptions || {};

  const { gridColClass, listColClass, fiveCol, view, data } = props;
  let arr = [5];
  for (let i = 0; i < Math.round(data.length / 5); i++) {
    arr.push(arr[i] + 6);
  }

  const categoryFilter = (category, product) => {
    if (category.toLowerCase() === "all") {
      return true;
    }

    if (
      category &&
      product.concerns &&
      product.concerns.some((c) => c.name === category)
    ) {
      return true;
    }

    return false;
  };

  const priceFilter = (priceRange, product) => {
    if (
      !priceRange ||
      priceRange.from === undefined ||
      priceRange.to === undefined
    ) {
      return true;
    }

    return product.price >= priceRange.from && product.price < priceRange.to;
  };

  const filteredProducts = data.filter((p) => {
    const matchesCategory = category ? categoryFilter(category, p) : true;
    const matchesPrice = priceRange ? priceFilter(priceRange, p) : true;
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="shop-products">
      {/* <div className="row">
        <h1>{category}</h1>
      </div> */}
      {view === "grid" ? (
        <div className="shop-products__grid">
          {filteredProducts &&
            Array.isArray(filteredProducts) &&
            filteredProducts.length > 0 && (
              <div className="row">
                {filteredProducts.map((item, index) => {
                  if (fiveCol) {
                    if (arr.includes(index)) {
                      return <div key={index} className="w-100"></div>;
                    }
                  }
                  return (
                    <div
                      key={index}
                      className={classNames(gridColClass, {
                        "five-col": fiveCol,
                      })}
                    >
                      <Product data={item} path="/gadgets" />
                    </div>
                  );
                })}
              </div>
            )}
        </div>
      ) : (
        <div className="shop-products__list">
          {filteredProducts && (
            <div className="row">
              {filteredProducts.map((item, index) => (
                <div key={index} className={listColClass}>
                  <Product type={view} data={item} type="list" path="/gadgets" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
