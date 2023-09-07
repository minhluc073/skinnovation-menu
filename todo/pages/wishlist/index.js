import Link from "next/link";
import { toast } from "react-toastify";

import LayoutOne from "../../components/Layout/LayoutOne";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import { formatCurrency } from "../../common/utils";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
import { useAppContext } from "@context/app-context";

import {
  getWishlistProducts,
  getCartProductsAction,
  addToCartAction,
} from "@context/defines";

//import ConnectionInstance from "@services/connection-instance";

import { useEffect } from "react";

const Wishlist = (props) => {
  const [state, dispatch] = useAppContext();
  const wishlistState = state.wishlist;
  const cartState = state.cart;

  useEffect(() => {
    dispatch({ type: getCartProductsAction });
    dispatch({ type: getWishlistProducts, payload: props.wishlist });
  }, []);

  const checkProductInCart = (pid) => {
    return cartState.find((item) => item.productId === pid);
  };

  const addToCartHandle = async (e, data) => {
    e.preventDefault();
    // let productItem = checkProductInCart(data.id);
    // if (productItem) {
    //   return;
    // }
    try {
      // const response = await ConnectionInstance.post("cart", {
      //   ...data,
      //   id: uuidv4(),
      //   productId: data.id,
      //   cartQuantity: 1,
      // });
      dispatch({ type: addToCartAction, payload: {product: data, quantity: 1 });
      toast.success("Product added to cart !");
      dispatch({ type: getCartProductsAction });
    } catch (error) {
      toast.error("Something went wrong, please try again");
    }
  };

  // const removeWishlistProduct = async (e, pid) => {
  //   e.preventDefault();
  //   try {
  //     const response = await ConnectionInstance.delete("wishlist/" + pid);
  //     dispatch({ type: editWishlist, payload: response.data });
  //     toast.success("Product removed from  wishlist !");
  //     const wishlist = await ConnectionInstance.get("wishlist");
  //     dispatch({ type: getWishlistProducts, payload: wishlist.data });
  //   } catch (error) {
  //     toast.error("Something went wrong, please try again");
  //   }
  // };

  return (
    <LayoutOne title="Wishlist">
      <Breadcrumb title="Wishlist">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Shop" />
        <BreadcrumbItem name="Wishlist" current />
      </Breadcrumb>
      <div className="wishlist">
        <div className="container">
          {!wishlistState || wishlistState.length === 0 ? (
            <div className="wishlist__empty">
              <h3>No product in wishlist</h3>
            </div>
          ) : (
            <div className="wishlist__table">
              <div className="wishlist__table__wrapper">
                <table>
                  <colgroup>
                    <col style={{ width: "40%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Unit Price</th>
                      <th>Stock</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistState.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="wishlist-product">
                            <div className="wishlist-product__image">
                              <img src={item.thumbImage[0]} alt={item.name} />
                            </div>
                            <div className="wishlist-product__content">
                              <h5>{item.category}</h5>
                              <Link
                                href={
                                  process.env.PUBLIC_URL + "/product/[slug]"
                                }
                                as={
                                  process.env.PUBLIC_URL +
                                  "/product/" +
                                  item.slug
                                }
                              >
                                <a>{item.name}</a>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>{formatCurrency(item.price)}</td>
                        <td>{item.quantity > 0 ? "In stock" : "Out stock"}</td>
                        <td>
                          <a
                            href={process.env.PUBLIC_URL + "#"}
                            className={`btn -dark ${
                              checkProductInCart(item.id) ? "-disable" : ""
                            }`}
                            onClick={(e) => addToCartHandle(e, item)}
                          >
                            {checkProductInCart(item.id)
                              ? "Added to cart"
                              : "Add to cart"}
                          </a>
                          <a
                            className="remove-btn"
                            href={process.env.PUBLIC_URL + "#"}
                            onClick={(e) => removeWishlistProduct(e, item.id)}
                          >
                            <i className="fal fa-times"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      <InstagramTwo />
      test
    </LayoutOne>
  );
};

export async function getStaticProps() {
  // const cartRes = await ConnectionInstance.get("/cart");
  // const wishlistRes = await ConnectionInstance.get("/wishlist");
  // const cart = cartRes.data;
  // const wishlist = wishlistRes.data;

  return {
    props: {},
    revalidate: 1,
  };
  // return {
  //   props: {
  //     cart,
  //     wishlist,
  //   },
  //   revalidate: 1,
  // };
}

export default Wishlist;
