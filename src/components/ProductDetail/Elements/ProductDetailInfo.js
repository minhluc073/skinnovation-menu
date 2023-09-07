import Link from "next/link";
import { useState } from "react";
import { useAppContext } from "@context/app-context";
import {
  addToCartAction,
  getCartProductsAction,
  editWishlist,
  getWishlistProducts,
} from "@context/defines";

import BlockContent from "@sanity/block-content-to-react";

import { toast } from "react-toastify";
import classNames from "classnames";

import { formatCurrency } from "../../../common/utils";
import ProductDetailController from "./ProductDetailController";
import ProductDetailInfoTab from "./ProductDetailInfoTab";
import Rate from "../../Other/Rate";
import { checkProductInWishList } from "../../../common/shopUtils";

export default function ProductDetailInfo({ data, onReviewSubmit, hideTab }) {
  const [state, dispatch] = useAppContext();
  const wishlistState = state.wishlist;
  const [quantity, setQuantity] = useState();
  const [otherColor, setOtherColor] = useState();
  const getQuantity = (q) => {
    setQuantity(q);
  };
  const onAddToCart = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: addToCartAction, payload: { product: data, quantity } });
      toast.success("Product added to cart !");
      dispatch({ type: getCartProductsAction });
    } catch (err) {
      console.log(err);
      toast.error("Add product to cart failed");
    }
  };
  const onAddToWishList = async (e) => {
    e.preventDefault();
    const wishlistItem = checkProductInWishList(wishlistState, data.id);
    if (wishlistItem) {
      try {
        const response = await ConnectionInstance.delete("wishlist/" + data.id);
        dispatch({ type: editWishlist, payload: response.data });
        toast.success("Product removed from wishlist !");
        //const wishlist = await ConnectionInstance.get("wishlist");
        dispatch({ type: getWishlistProducts, payload: wishlist.data });
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong, please try again");
      }
    } else {
      try {
        const response = await ConnectionInstance.post("wishlist", data);
        dispatch({ type: editWishlist, payload: response.data });
        toast.success("Product added to wishlist !");
        //const wishlist = await ConnectionInstance.get("wishlist");
        dispatch({ type: getWishlistProducts, payload: wishlist.data });
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong, please try again");
      }
    }
  };

  return (
    <div className="product-detail__content">
      <div className="product-detail__content__header">
        <h5>{data.category}</h5>
        <h2>{data.name}</h2>
        {data.details && (
          <div className="product-detail__content__product-details">
            <BlockContent blocks={data.details} />
          </div>
        )}
        {/* <ProductReviewCommentBlock reviewCount={0} rating={data.rating} writeReviewUrl="#" /> */}
        {data.price && (
          <h3>
            {data.discount
              ? formatCurrency(data.discount)
              : formatCurrency(data.price)}

            {data.discount && <span>{formatCurrency(data.price)}</span>}
          </h3>
        )}
        {data.bundlePricing && (
          <h4>
            <BlockContent blocks={data.bundlePricing} />
          </h4>
        )}
      </div>
      <div className="product-detail__content__footer">
        {/* <ProductSpec {...data} /> */}
        {/* <ProductVariation variation={data.variation} /> */}

        {Array.isArray(data.description) ? (
          <BlockContent
            blocks={data.description}
            className="product_description"
          />
        ) : (
          data.description && (
            <div
              className="product_description"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>
          )
        )}
        {/* 
        {data.details && Array.isArray(data.details) && (
          <BlockContent blocks={data.details} className="product_description" />
        )} */}

        {data.promo ? (
          <div
            className="product_promo"
            dangerouslySetInnerHTML={{ __html: data.promo }}
          />
        ) : null}

        <ProductDetailController
          data={data}
          getQuantity={getQuantity}
          onAddToCart={onAddToCart}
          onAddToWishList={onAddToWishList}
          color={otherColor}
        />
        {data.brand !== "Noon" && !data.price && (
          <div className="product-detail__content__price-explainer">
            <h3>Price shown in invoice (*)</h3>
            <p>Available only to our existing customers.</p>
            <p>Price provided in invoice after the order is submitted.</p>
          </div>
        )}
        {data.brand === "Noon" && (
          <div className="product-detail__content__price-explainer">
            <h3>To learn more or purchase this product:</h3>
            <p>
              Please contact us{" "}
              <a
                href={`mailto:appointments@skinnovation.care?subject=${data.name}`}
              >
                here
              </a>
              .
            </p>
          </div>
        )}
      </div>
      {!hideTab && (
        <>
          <div className="divider"></div>
          <div className="product-detail__content__tab">
            <ProductDetailInfoTab onReviewSubmit={onReviewSubmit} {...data} />
          </div>
        </>
      )}
    </div>
  );
}

const ProductSpec = ({ brand, code, point, quantity }) => (
  <ul>
    <li>
      Brand: <span>{brand}</span>
    </li>
    <li>
      Product code: <span>{code}</span>
    </li>
    <li>
      Reward point: <span>{point}</span>
    </li>
    <li>
      Availability:
      {quantity > 0 ? (
        <span className="in-stock"> In Stock</span>
      ) : (
        <span className="out-stock"> Out Stock</span>
      )}
    </li>
  </ul>
);

const ProductVariation = ({ variation }) =>
  variation ? (
    <div className="product-detail__colors">
      <span>Color:</span>
      {variation.map((color, index) => (
        <div
          key={index}
          className={`product-detail__colors__item ${classNames({
            active: otherColor === color.color,
          })}`}
          style={{ backgroundColor: color.colorCode }}
          onClick={() => setOtherColor(color.color)}
        />
      ))}
    </div>
  ) : null;

const ProductReviewCommentBlock = ({ rating, reviewCount, writeReviewUrl }) => (
  <div className="product-detail__content__header__comment-block">
    <Rate currentRate={rating} />
    <p>{reviewCount} reviews</p>
    <Link href={writeReviewUrl}>
      <a>Write a reviews</a>
    </Link>
  </div>
);
