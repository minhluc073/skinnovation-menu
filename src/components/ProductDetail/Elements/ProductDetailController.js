import { useState } from "react";
import ReactTooltip from "react-tooltip";
import classNames from "classnames";

import Quantity from "../../Control/Quantity";
import AddToCart from "../../Control/AddToCart";
import Button from "../../Control/Button";

import {
  getAvaiableQuantityInCart,
  checkProductInWishList,
} from "@utils/index";
import { useAppContext } from "@context/app-context";

const ProductDetailController = ({
  data,
  getQuantity,
  onAddToCart,
  onAddToWishList,
  color,
}) => {
  const [quantity, setQuantity] = useState();
  const [state, dispatch] = useAppContext();
  const cartState = state.cart;

  const avaiableProduct = getAvaiableQuantityInCart(
    cartState,
    data.id,
    data.quantity
  );

  // Do not allow add to cart for Noon products
  if (data.brand === "Noon") return null;

  return (
    <div className="product-detail__controler">
      <Quantity
        className="-border -round"
        getQuantity={(q) => {
          setQuantity(q);
          getQuantity(q);
        }}
        maxValue={avaiableProduct}
      />
      <AddToCart
        className={`-dark ${classNames({
          "-disable": quantity > avaiableProduct || data.quantity < 1,
        })}`}
        onClick={onAddToCart}
      />
      {/* TODO: wishlist <AddToWishList productId={data.id} onAddToWishList={onAddToWishList} checkProductInWishList={checkProductInWishList} /> */}
    </div>
  );
};

const AddToWishList = ({
  productId,
  onAddToWishList,
  checkProductInWishList,
}) => {
  const [state, dispatch] = useAppContext();
  const wishlistState = state.wishlist;
  return (
    <div className="product-detail__controler__actions">
      <div data-tip data-for="add-wishlist">
        <Button
          action="javscript:void(0)"
          height="3.85em"
          width="3.85em"
          className={`-round ${classNames({
            active: checkProductInWishList(wishlistState, productId),
          })}`}
          onClick={onAddToWishList}
          color="white"
          content={<i className="fas fa-heart"></i>}
        />
      </div>
      <ReactTooltip id="add-wishlist" type="dark" effect="solid">
        <span>Add to wishlist</span>
      </ReactTooltip>
    </div>
  );
};

export default ProductDetailController;
