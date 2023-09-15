import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

const data = [
  {
    id: 1,
    title: "Acne & Inflammation",
    icon: "icon-icon2",
  },
  {
    id: 2,
    title: "Pigmentation",
    icon: "icon-icon1",
  },
  {
    id: 3,
    title: "Redness & Sensitivity",
    icon: "icon-icon3",
  },
  {
    id: 4,
    title: "Age Management",
    icon: "icon-icon4",
  },
  {
    id: 5,
    title: "Pigmentation",
    icon: "icon-icon2",
  },
];

export default function SkinConcernTab({ title }) {
  // console.log("item", item);
  const router = useRouter();

  console.log("hhh", router);
  const [tabIndex, setTabIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const settings = {
    customPaging: function (i) {
      return <div className="slider__dot"></div>;
    },
    // dots: true,
    // infinite: true,
    // lazyload: true,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 1,

    // centerMode: true,
    // className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 4,
    variableWidth: true,
    speed: 1000,
    // infinite: true,
    // initialSlide: 1,
    // arrows: false,
    // buttons: false,
    prevArrow: (
      <a href="#">{/* <i className="icon-down text-primary"></i> */}</a>
    ),
    nextArrow: (
      <a href="#">
        <i className="far fa-angle-left hidden"></i>
        {/* kkk */}
      </a>
    ),
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {},
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  const CustomTab = ({ onClick, children, className }) => {
    return (
      <div onClick={onClick} className={className}>
        {children}
      </div>
    );
  };
  CustomTab.tabsRole = "Tab";

  return (
    <>
      <div className="container">
        <h3
          className={`text-[#000] text-[32px] font-semibold leading-[40px] max-md:text-[18px] max-md:leading-[24px] max-w-[752px] mx-auto px-[8px] max-mb:px-[24px] max-md:px-0`}
        >
          {title}
        </h3>
      </div>
      <div className="max-w-[950px] mx-auto pl-[6rem] wrap-slick-concern mt-[24px] max-lg:max-w-[752px] max-lg:pl-[24px] max-xs:mt-[16px]">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Slider {...settings}>
              {data.map((item, idx) => (
                <CustomTab
                  onClick={() => setTabIndex(idx)}
                  className={tabIndex === idx ? "activeTab" : ""}
                >
                  <div className="w-auto slick-concern cursor-pointer">
                    <div className="flex gap-[8px] items-center justify-between11 bg-light py-[8px] pl-[15px] pr-[8px] rounded-[24px] menu-tab">
                      <span className="text-[16px] leading-[24px]">
                        {item.title}
                      </span>
                      <span className={`${item.icon} text-[24px]`}></span>
                    </div>
                  </div>
                </CustomTab>
              ))}
              {/* <CustomTab
                onClick={() => setTabIndex(0)}
                className={tabIndex === 0 ? "activeTab" : ""}
              >
                <div className="w-auto slick-concern cursor-pointer">
                  <div className="flex gap-[8px] items-center justify-between11 bg-light py-[8px] pl-[15px] pr-[8px] rounded-[24px] menu-tab">
                    <span className="text-[16px] leading-[24px]">
                      Acne & Inflammation
                    </span>
                    <span className={`icon-icon2 text-[24px]`}></span>
                  </div>
                </div>
              </CustomTab>
              <CustomTab
                onClick={() => setTabIndex(1)}
                className={tabIndex === 1 ? "activeTab" : ""}
              >
                <div className="w-auto slick-concern cursor-pointer">
                  <div className="flex gap-[8px] items-center justify-between11 bg-light py-[8px] pl-[15px] pr-[8px] rounded-[24px] menu-tab">
                    <span className="text-[16px] leading-[24px]">
                      Pigmentation
                    </span>
                    <span className={`icon-icon1 text-[24px]`}></span>
                  </div>
                </div>
              </CustomTab>
              <CustomTab
                onClick={() => setTabIndex(2)}
                className={tabIndex === 2 ? "activeTab" : ""}
              >
                <div className="w-auto slick-concern cursor-pointer">
                  <div className="flex gap-[8px] items-center justify-between11 bg-light py-[8px] pl-[15px] pr-[8px] rounded-[24px] menu-tab">
                    <span className="text-[16px] leading-[24px]">
                      Redness & Sensitivity
                    </span>
                    <span className={`icon-icon3 text-[24px]`}></span>
                  </div>
                </div>
              </CustomTab>
              <CustomTab
                onClick={() => setTabIndex(3)}
                className={tabIndex === 3 ? "activeTab" : ""}
              >
                <div className="w-auto slick-concern cursor-pointer">
                  <div className="flex gap-[8px] items-center justify-between11 bg-light py-[8px] pl-[15px] pr-[8px] rounded-[24px] menu-tab">
                    <span className="text-[16px] leading-[24px]">
                      Age Management
                    </span>
                    <span className={`icon-icon4 text-[24px]`}></span>
                  </div>
                </div>
              </CustomTab>
              <CustomTab
                onClick={() => setTabIndex(4)}
                className={tabIndex === 4 ? "activeTab" : ""}
              >
                <div className="w-auto slick-concern cursor-pointer">
                  <div className="flex gap-[8px] items-center justify-between11 bg-light py-[8px] pl-[15px] pr-[8px] rounded-[24px] menu-tab">
                    <span className="text-[16px] leading-[24px]">
                      Age Management
                    </span>
                    <span className={`icon-icon2 text-[24px]`}></span>
                  </div>
                </div>
              </CustomTab> */}
            </Slider>
          </TabList>
          <TabPanel>
            <div className="mt-[48px] pl-[10px] max-md:pl-0">
              <h2 className="text-[#000] text-[24px] leading-[24px]">
                Acne & Inflammation
              </h2>
              <p className="mt-[16px] pr-[18rem] text-[16px] leading-[24px] text-[#000] max-md:pr-0">
                Known for delivering immediate results for a variety of skin
                conditions — the LED HydraFacial is a must-try for
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-[48px] pl-[10px] max-md:pl-0">
              <h2 className="text-[#000] text-[24px] leading-[24px]">
                Pigmentation
              </h2>
              <p className="mt-[16px] pr-[18rem] text-[16px] leading-[24px] text-[#000] max-md:pr-0">
                Known for delivering immediate results for a variety of skin
                conditions — the LED HydraFacial is a must-try for
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-[48px] pl-[10px] max-md:pl-0">
              <h2 className="text-[#000] text-[24px] leading-[24px]">
                Redness & Sensitivity
              </h2>
              <p className="mt-[16px] pr-[18rem] text-[16px] leading-[24px] text-[#000] max-md:pr-0">
                Known for delivering immediate results for a variety of skin
                conditions — the LED HydraFacial is a must-try for
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-[48px] pl-[10px] max-md:pl-0">
              <h2 className="text-[#000] text-[24px] leading-[24px]">
                Age Management
              </h2>
              <p className="mt-[16px] pr-[18rem] text-[16px] leading-[24px] text-[#000] max-md:pr-0">
                Known for delivering immediate results for a variety of skin
                conditions — the LED HydraFacial is a must-try for
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-[48px] pl-[10px] max-md:pl-0">
              <h2 className="text-[#000] text-[24px] leading-[24px]">
                Age Management
              </h2>
              <p className="mt-[16px] pr-[18rem] text-[16px] leading-[24px] text-[#000] max-md:pr-0">
                Known for delivering immediate results for a variety of skin
                conditions — the LED HydraFacial is a must-try for
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
