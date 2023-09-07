import { CSSTransition } from "react-transition-group";

import CartItem from "./CartItem";
import ClientOnlyPortal from "../../../common/ClientOnlyPortal";
import Button from "../../Control/Button";
import { calculateTotalPrice } from "../../../common/shopUtils";
import { useCart } from "../../../lib/cart";

function CartItemsSidebar({ showCart, setShowCart }) {
  const { shoppingCart, isLoading, isError } = useCart();

  // if (isError) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  const cartTotal = calculateTotalPrice(shoppingCart, true);
  return (
    <>
      <ClientOnlyPortal selector="#cart-sidebar">
        <CSSTransition
          in={showCart}
          unmountOnExit
          timeout={200}
          classNames="cart-sidebar"
        >
          <div className="cart-items__wrapper">
            <h2>Your shopping cart</h2>
            {shoppingCart &&
            Array.isArray(shoppingCart) &&
            shoppingCart.length === 0 ? (
              <h3 className="empty-noti">Cart is empty.</h3>
            ) : (
              <>
                {shoppingCart &&
                  shoppingCart.map((item, index) => (
                    <CartItem
                      key={index}
                      id={item.id}
                      image={item.thumbImage}
                      name={item.name}
                      price={item.price}
                      quantity={item.cartQuantity}
                      cartId={item.cartId}
                      slug={item.slug}
                    />
                  ))}
                <div className="cart-items__total">
                  {!isNaN(cartTotal) && (
                    <div className="cart-items__total__price">
                      <h5>Total</h5>
                      <span>{cartTotal}</span>
                    </div>
                  )}
                  <div className="cart-items__total__buttons">
                    <Button
                      width="100%"
                      action={"/cart"}
                      color="dark"
                      content="View cart"
                    />
                    <Button
                      width="100%"
                      action={"/checkout"}
                      color="red"
                      content="Checkout"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </CSSTransition>
      </ClientOnlyPortal>
      {showCart && (
        <ClientOnlyPortal selector="#overlay">
          <div className="overlay" onClick={() => setShowCart(false)}></div>
        </ClientOnlyPortal>
      )}
    </>
  );
}

export default CartItemsSidebar;
