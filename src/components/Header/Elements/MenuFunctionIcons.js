import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useAppContext } from "@context/app-context";

import SearchBox from "./SearchBox";
import CartItemsSidebar from "./CartItemsSidebar";
import MobileNavSidebar from "./MobileNavSidebar";
import { getCartProductsAction } from "@context/defines";
import { useCart } from "../../../lib/cart";

export default function MenuFunctionIcons({ hide = [], ...props }) {
  const [state, dispatch] = useAppContext();
  const { shoppingCart, isLoading, isError } = useCart();
  const { cart } = state;
  useEffect(async () => {
    dispatch({ type: getCartProductsAction });
  }, []);

  const cartLength = cart ? Object.values(cart).reduce((a, b) => a + b, 0) : 0;

  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  // function calculateTotal(arr) {
  //   let total = 0;
  //   arr?.forEach((item) => (total += item.price * item.cartQuantity));
  //   return total;
  // }

  //const cartTotal = calculateTotal(shoppingCart);

  return (
    <>
      <div
        className={`menu__wrapper__functions ${classNames(props.className)}`}
      >
        {!hide.includes("search") && (
          <a
            href="#"
            className="menu-icon -search"
            onClick={(e) => {
              e.preventDefault();
              setShowSearch(true);
            }}
            style={{ marginRight: hide.includes("cart") && 0 }}
          >
            <img
              src={
                props.white
                  ? "/shop/assets/images/header/search-icon-white.png"
                  : "/shop/assets/images/header/search-icon.png"
              }
              alt="Search icon"
            />
          </a>
        )}
        {!hide.includes("cart") && (
          <>
            {/* <Link href={"/shop/wishlist"}>
              <a className="menu-icon -wishlist">
                <img
                  src={
                    props.white
                      ? "/shop/assets/images/header/wishlist-icon-white.png"
                      : "/shop/assets/images/header/wishlist-icon.png"
                  }
                  alt="Wishlist icon"
                />
              </a>
            </Link> */}
            <div className="menu__cart">
              <a
                href="#"
                className="menu-icon -cart"
                onClick={(e) => {
                  e.preventDefault();
                  setShowCart(!showCart);
                }}
              >
                <img
                  src={
                    props.white
                      ? "/shop/assets/images/header/cart-icon-white.png"
                      : "/shop/assets/images/header/cart-icon.png"
                  }
                  alt="Cart icon"
                />
                {shoppingCart && (
                  <span className="cart__quantity">{cartLength}</span>
                )}
              </a>
              {/* {!isNaN(cartTotal) && (
                <h5>
                  Cart: <span>{formatCurrency(cartTotal)}</span>
                </h5>
              )} */}
            </div>
            <a
              href="#"
              className="menu-icon -navbar"
              onClick={(e) => {
                e.preventDefault();
                setShowMobileNav(!showMobileNav);
              }}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </a>
          </>
        )}
      </div>
      {/* Search input */}
      <SearchBox showSearch={showSearch} setShowSearch={setShowSearch} />
      {/* Cart sidebar */}
      <CartItemsSidebar showCart={showCart} setShowCart={setShowCart} />
      {/* Mobile navigation sidebar */}
      <MobileNavSidebar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
    </>
  );
}
