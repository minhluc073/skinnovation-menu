import React, { useState } from "react";
import Link from "next/link";
import { useAppContext } from "@context/app-context";
import { toast } from "react-toastify";
import ReactTooltip from "react-tooltip";
import classNames from "classnames";
import BlockContent from "@sanity/block-content-to-react";
import LazyLoad from "react-lazyload";

import {
  formatCurrency,
  // checkProductInWishList,
  checkProductInCart,
} from "@utils/index";

import Button from "../Control/Button";
import Modal from "@components/Control/Modal";
import ProductQuickView from "@components/ProductDetail/ProductQuickView";
import AddToCart from "@components/Control/AddToCart";
import { addToCartAction, getCartProductsAction } from "@context/defines";

function getUrlPathByType(type, category) {
  // if (category === "Black Friday Specials") {
  //   return "/black-friday";
  // }
  if (type === "gadget") {
    return "/gadgets";
  }
  if (type === "product") {
    return "/skincare";
  }
  if (type === "mask") {
    return "/masks";
  }
}

function Product({ data, type, className, path }) {
  const [state, dispatch] = useAppContext();
  const cartState = state.cart;
  //const wishlistData = state.wishlist;
  const [showQuickView, setShowQuickView] = useState(false);
  const percentDiscount = data?.discount
    ? Math.ceil(100 - (100 * data.discount) / data.price)
    : null;

  function renderType() {
    if (data?.new) {
      return <h5 className="-new">New</h5>;
    }
    if (data?.discount && typeof data?.discount === "number") {
      return <h5 className="-sale">-{percentDiscount}%</h5>;
    }
    return null;
  }
  const addToCartHandle = async (e) => {
    e.preventDefault();
    dispatch({
      type: addToCartAction,
      payload: { product: data, quantity: 1 },
    });
    toast.success("Product added to cart !");
    dispatch({ type: getCartProductsAction });
  };

  // TODO: wishlist const addToWishlistHandle = async (e) => {
  //   e.preventDefault();
  //   const wishlistItem = checkProductInWishList(wishlistData, data.id);
  //   if (wishlistItem) {
  //     try {
  //       //const response = await ConnectionInstance.delete("wishlist/" + data.id);
  //       dispatch({ type: editWishlist, payload: response.data });
  //       toast.success("Product removed from wishlist !");
  //       //const wishlist = await ConnectionInstance.get("wishlist");
  //       dispatch({ type: getWishlistProducts, payload: wishlist.data });
  //     } catch (err) {
  //       console.log(err);
  //       toast.error("Something went wrong, please try again");
  //     }
  //   } else {
  //     try {
  //       //const response = await ConnectionInstance.post("wishlist", data);
  //       dispatch({ type: editWishlist, payload: response.data });
  //       toast.success("Product added to wishlist !");
  //       //const wishlist = await ConnectionInstance.get("wishlist");
  //       dispatch({ type: getWishlistProducts, payload: wishlist.data });
  //     } catch (err) {
  //       console.log(err);
  //       toast.error("Something went wrong, please try again");
  //     }
  //   }
  // };

  const productImage = data.thumbImage ? (
    <a className="product__thumb__image">
      <LazyLoad height={340} offset={100}>
        <img src={data.thumbImage + "?w=400"} alt={data.name} />
      </LazyLoad>
    </a>
  ) : (
    <a className="product__thumb__image">No Image</a>
  );

  const urlPath = path ? path : getUrlPathByType(data.type, data.category);
  return (
    <>
      {!type || type === "grid" ? (
        <ProductGridItem
          className={className}
          path={urlPath}
          productImage={productImage}
          disabled={checkProductInCart(cartState, data.id) || data.quantity < 1}
          addToCartHandle={addToCartHandle}
          setShowQuickView={setShowQuickView}
          productType={renderType()}
          {...data}
        />
      ) : (
        <ProductListItem
          className={className}
          path={urlPath}
          productImage={productImage}
          disabled={checkProductInCart(cartState, data.id) || data.quantity < 1}
          addToCartHandle={addToCartHandle}
          setShowQuickView={setShowQuickView}
          productType={renderType()}
          {...data}
        />
      )}
      <Modal
        showModal={showQuickView}
        setShowModal={setShowQuickView}
        width={1170}
      >
        <ProductQuickView data={data} />
      </Modal>
    </>
  );
}

const ProductListItem = ({
  name,
  description,
  details,
  price,
  promo,
  discount,
  className,
  path,
  slug,
  disabled,
  productImage,
  category,
  addToCartHandle,
  setShowQuickView,
  productType,
}) => {
  return (
    <div className={`product-list ${classNames(className)}`}>
      <div className="product-list__thumb">
        <div className="product-type">{productType}</div>
        {path && slug && (
          <Link href={`${path}/[slug]`} as={`${path}/${slug}`}>
            {productImage}
          </Link>
        )}
      </div>
      <div className="product-list__content">
        <div className="product-list__content__top">
          <div className="product-category__wrapper">
            <h5 className="product-category">{category}</h5>
          </div>
          {path && slug && (
            <Link href={`${path}/[slug]`} as={`${path}/${slug}`}>
              <a className="product-list__product-title product-name">{name}</a>
            </Link>
          )}
          {details && (
            <div className="product-list__product-subtitle">
              <BlockContent blocks={details} />
            </div>
          )}
          <div className="product__price">
            <div className="product__price__wrapper">
              {price && (
                <h5 className="product-price--main">
                  {discount ? formatCurrency(discount) : formatCurrency(price)}
                </h5>
              )}
              {price && discount && (
                <h5 className="product-price--discount">
                  {formatCurrency(price)}
                </h5>
              )}
              {!price && (
                <h5 className="product-price--main">
                  Price provided in invoice after the order is submitted.
                </h5>
              )}
              {promo && (
                <h5 className="product-price--main">
                  {promo}
                </h5>
              )}
            </div>
          </div>
        </div>
        <div className="product-list__content__bottom">
          <div className="product__description">
            {Array.isArray(description) ? (
              <BlockContent blocks={description} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            )}
          </div>
          <div className="product__actions">
            <div className="product-btn">
              <AddToCart
                onClick={addToCartHandle}
                className={classNames({
                  "-disable": disabled,
                })}
              />
            </div>
            {/* TODO: wish list <div className='product-btn' data-tip data-for='l-qvIcon'>
              <Button
                height={50 / 14 + 'em'}
                width={50 / 14 + 'em'}
                color='white'
                className='product__actions__item -round'
                action='#'
                onClick={(e) => {
                  e.preventDefault();
                  setShowQuickView(true);
                }}
                content={<i className='fas fa-eye' />}
              ></Button>
            </div>
            <ReactTooltip id='l-qvIcon' type='dark' effect='solid'>
              <span>Quick view</span>
            </ReactTooltip> */}
            {/* TODO: wishlist <div
          className="product-btn"
          data-tip
          data-for="l-wlIcon"
          style={{ marginRight: 0 }}
        >
          <Button
            height={50 / 14 + "em"}
            width={50 / 14 + "em"}
            color="white"
            className={`product__actions__item -round ${classNames({
              active: checkProductInWishList(wishlistData, id),
            })}`}
            action="#"
            onClick={addToWishlistHandle}
            content={<i className="fas fa-heart" />}
          ></Button>
        </div> 
            <ReactTooltip id='l-wlIcon' type='dark' effect='solid'>
              <span>Add to Wishlist</span>
            </ReactTooltip>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductGridItem = ({
  name,
  price,
  discount,
  className,
  brand,
  path,
  slug,
  productImage,
  disabled,
  addToCartHandle,
  setShowQuickView,
  productType,
}) => {
  return (
    <div className={`product ${classNames(className)}`}>
      <div className="product-type">{productType}</div>
      <div className="product__thumb">
        {path && slug ? (
          <Link href={`${path}/[slug]`} as={`${path}/${slug}`}>
            {productImage}
          </Link>
        ) : (
          productImage
        )}
        <div className="product__thumb__actions">
          <div className="product-btn" data-tip data-for="cartIcon">
            <Button
              height="50px"
              width="50px"
              color="white"
              className={`product__actions__item -round ${classNames({
                "active -disable": disabled || brand === "Noon",
              })}
          `}
              action="#"
              onClick={addToCartHandle}
              content={
                <i
                  className={`fas ${
                    brand === "Noon" ? "fa-mailbox" : "fa-shopping-bag"
                  }`}
                />
              }
            ></Button>
          </div>
          <ReactTooltip id="cartIcon" type="dark" effect="solid">
            <span>{brand === "Noon" ? "Contact Us" : "Add to Cart"}</span>
          </ReactTooltip>
          <div className="product-btn" data-tip data-for="qvIcon">
            <Button
              height={50 / 14 + "em"}
              width={50 / 14 + "em"}
              color="white"
              className="product__actions__item -round"
              action="#"
              onClick={(e) => {
                e.preventDefault();
                setShowQuickView(true);
              }}
              content={<i className="fas fa-eye" />}
            ></Button>
          </div>
          <ReactTooltip id="qvIcon" type="dark" effect="solid">
            <span>Quick view</span>
          </ReactTooltip>
        </div>
      </div>
      <div className="product__content">
        {slug ? (
          <Link href={`${path}/[slug]`} as={`${path}/${slug}`}>
            <a className="product-name">{name}</a>
          </Link>
        ) : (
          <a className="product-name">{name}</a>
        )}
        <div className="product__content__footer">
          {price && (
            <h5 className="product-price--main">
              {discount ? formatCurrency(discount) : formatCurrency(price)}
            </h5>
          )}
          {discount && (
            <h5 className="product-price--discount">{formatCurrency(price)}</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
