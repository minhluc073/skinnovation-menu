import SectionTitleOne from "../../SectionTitle/SectionTitleOne";
import Button from "../../../Control/Button";

import ProductSlider from "../Elements/ProductSlider";
import { PrevArrow, NextArrow } from "../../../Other/SliderArrow";

export default function OneRowProductSlider({
  title,
  data,
  viewAllTitle,
  viewAllLink,
}) {
  const settings = {
    lazyLoad: data.length > 4,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, data.length),
    slidesToScroll: 1,
    initialSlide: 2,
    className: "product-slide__wrapper",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          lazyLoad: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          lazyLoad: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          lazyLoad: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-slide">
      <div className="container">
        <SectionTitleOne align="center" spaceBottom="50px">
          {title}
        </SectionTitleOne>
        <ProductSlider data={data} sliderSettings={settings} />
        <div className="text-center">
          <Button
            action={viewAllLink}
            color="transparent"
            className="-underline"
            content={viewAllTitle}
          />
        </div>
      </div>
    </div>
  );
}
