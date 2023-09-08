import React, { useState, useEffect } from "react";
import classNames from "classnames";
import MobileNavSidebar from "./MobileNavSidebar";

export default function MenuFunctionMobile({ hide = [], ...props }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  // function calculateTotal(arr) {
  //   let total = 0;
  //   arr?.forEach((item) => (total += item.price * item.cartQuantity));
  //   return total;
  // }

  // const cartTotal = calculateTotal(shoppingCart);

  return (
    <>
      <div className={`hidden max-mb:block ${classNames(props.className)}`}>
        <a
          href="#"
          className="menu-icon -navbar"
          onClick={(e) => {
            e.preventDefault();
            setShowMobileNav(!showMobileNav);
          }}
        >
          <div className="w-6 h-0.5 bg-[#000] mb-[5px]"></div>
          <div className="w-6 h-0.5 bg-[#000] mb-[5px]"></div>
          <div className="w-6 h-0.5 bg-[#000]"></div>
        </a>
      </div>

      <MobileNavSidebar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
    </>
  );
}
