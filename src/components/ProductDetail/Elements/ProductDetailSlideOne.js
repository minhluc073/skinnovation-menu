import React from "react";
import Slider from "react-slick";

import { PrevArrow, NextArrow } from "../../Other/SliderArrow";

export default function ProductDetailSlideOne({ images }) {
  const settings = {
    customPaging: function (i) {
      return <div className="slider__dot"></div>;
    },
    dots: true,
    infinite: true,
    lazyload: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="product-detail__slide-one">
      <Slider {...settings}>
        {images?.map((img, index) => (
          <div key={index} className="slider__item">
            <img src={img + "?w=500"} alt="Product image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
