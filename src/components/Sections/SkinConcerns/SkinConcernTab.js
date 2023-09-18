import Link from "next/link";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import dataSkinconcern from "../../../data/treatment-menu/skinconcern.json";
import dataTreatment from "../../../data/treatment-menu/treatmentType";
import AccordionTreatment from "../../../components/Sections/SkinConcerns/AccordionTreatment";

const contentTab = [
  {
    name: "pigmentation",
    id: 1,
    title: "Pigmentation",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
  },
  {
    name: "acne-inflammation",
    id: 2,
    title: "Acne & Inflammation",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
  },
  {
    name: "redness-sensitivity",
    id: 3,
    title: "Redness & Sensitivity",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
  },
  {
    name: "age-management",
    id: 4,
    title: "Age Management",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
  },
];

export default function SkinConcernTab({ title, acIdx }) {
  // console.log("id-active", acIdx);

  const router = useRouter();

  const [filter, setFilter] = useState("Popular");

  const [tabIndex, setTabIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // console.log("tabindex", tabIndex);

  useEffect(() => {
    if (acIdx) {
      setTabIndex(Number(acIdx));
    }
  }, [Number(acIdx)]);

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
    // infinite: false,
    // initialSlide: 1,
    // arrows: false,
    // buttons: false,
    // prevArrow: <a href="/">hhh</a>,
    // nextArrow: (
    //   <a href="#">
    //     <i className="far fa-angle-left hidden"></i>
    //   </a>
    // ),
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
        <Tabs
          defaultIndex={tabIndex}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="flex items-center gap-[8px]">
            <a
              href="/"
              className="btn-treatment inline-flex items-center w-[40px] h-[40px] shrink-0 justify-center rounded-[50%]"
            >
              <i className="icon-left text-white text-[18px]"></i>
            </a>
            <Slider {...settings}>
              {dataSkinconcern.slice(0, 4).map((item, idx) => (
                <CustomTab
                  onClick={() => {
                    setTabIndex(idx);
                    router.replace({
                      query: { ...router.query, title: item?.name },
                    });
                  }}
                  className={tabIndex === idx ? "activeTab" : ""}
                >
                  <div className="w-auto slick-concern cursor-pointer">
                    <div className="flex gap-[8px] items-center justify-between bg-light py-[8px] pl-[15px] pr-[8px] rounded-[24px] menu-tab">
                      <span className="text-[16px] leading-[24px]">
                        {item.title}
                      </span>
                      <span className={`${item.icon} text-[24px]`}></span>
                    </div>
                  </div>
                </CustomTab>
              ))}
            </Slider>
          </TabList>
          {/* <TabPanel> */}
          <div className="mt-[48px] pl-[10px] max-md:pl-0 max-lg:pr-[24px]">
            {contentTab?.map((item) => (
              <TabPanel>
                <h2 className="text-[#000] text-[24px] leading-[24px]">
                  {item.title}
                </h2>
                <p className="mt-[16px] pr-[18rem] text-[16px] leading-[24px] text-[#000] max-md:pr-0">
                  {item.content}
                </p>
                <div className="mt-[48px] max-sm:mt-[24px]">
                  <AccordionTreatment data={dataTreatment} filter={filter} />
                </div>
              </TabPanel>
            ))}
          </div>
          {/* </TabPanel> */}
          {/* <TabPanel>
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
          </TabPanel> */}
        </Tabs>
      </div>
    </>
  );
}
