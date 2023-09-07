import { formatCurrency } from "../../../common/utils";
import { toast } from "react-toastify";
import { useAppContext } from "@context/app-context";
import { removeFromCartAction, getCartProductsAction } from "@context/defines";
import { useState } from "react";
function CartItem(props) {
  const [state, dispatch] = useAppContext();
  const { image, name, price, id } = props;
  const [quantity, setQuantity] = useState(props.quantity);

  const removeProductHandle = async (e) => {
    e.preventDefault();
    try {
      setQuantity(quantity - 1);
      dispatch({ type: removeFromCartAction, payload: id });
      toast.success("Product removed from card !");
      dispatch({ type: getCartProductsAction });
    } catch (err) {
      toast.error("Remove product from cart failed");
    }
  };
  return (
    <div className="cart-item">
      {image && (
        <div className="cart-item__image">
          <img src={image} alt={name} />
        </div>
      )}
      <div className="cart-item__info">
        <a>{name}</a>
        {price && <h5>{formatCurrency(price)}</h5>}
        <p>
          Quantity: <span>{quantity}</span>
        </p>
      </div>
      <a className="cart-item__remove" href="#" onClick={removeProductHandle}>
        <i className="fal fa-times"></i>
      </a>
    </div>
  );
}

export default CartItem;
