import {
  addToCartAction,
  clearCartAction,
  removeFromCartAction,
  editWishlist,
  getCartProductsAction,
  getWishlistProducts,
  getAllProducts,
  setFilterOptions,
  getAllBlogs,
} from "@context/defines";

import {
  getCart,
  addToCart,
  clearCart,
  removeFromCart,
} from "../services/cart";

const appReducer = (draft, action) => {
  switch (action.type) {
    case getAllProducts: {
      return void (draft.products = action.payload);
    }
    case getAllBlogs: {
      return void (draft.blog = action.payload);
    }
    case getCartProductsAction: {
      return void (draft.cart = getCart());
    }
    case addToCartAction: {
      const payload = action.payload;
      addToCart(payload);
      return { newlyAddedToCart: payload };
    }
    case removeFromCartAction: {
      const payload = action.payload;
      removeFromCart(payload);
      return;
    }
    case clearCartAction: {
      clearCart();
    }
    case getWishlistProducts: {
      //return void (draft.wishlist = action.payload);
      return [];
    }
    case setFilterOptions: {
      return void (draft.filterOptions = action.payload);
    }
    case editWishlist: {
      return void (draft.editWishlist = action.payload);
    }
    default:
      return;
  }
};

export default appReducer;
