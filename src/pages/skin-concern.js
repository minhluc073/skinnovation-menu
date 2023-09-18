import {
  getProducts,
  getGadgets,
  getSheetMasks,
  getGiftCards,
  getProductsFromCategory,
} from "../lib/api";
import LayoutOne from "../components/Layout/LayoutOne";
import HomeSlider from "../components/Sections/Slider/HomeSlider";
import MainHero from "../components/Sections/Introduction/MainHero";
import IntroductionTwo from "../components/Sections/Introduction/IntroductionTwo";
import OneRowProductSlider from "../components/Sections/ProductThumb/ProductSlide/OneRowProductSlider";

import sliderOne from "../content/slider-one.json";
import introductionOne from "../content/introduction-one.json";
import introductionTwo from "../content/introduction-two.json";
import dataSkinconcern from "../data/treatment-menu/skinconcern.json";
import dataTreatment from "../data/treatment-menu/treatmentType.json";
import TreatmentSlider from "../components/Sections/Slider/TreatmentSlider";
import SkinConcernTab from "../components/Sections/SkinConcerns/SkinConcernTab";
import AccordionTreatment from "../components/Sections/SkinConcerns/AccordionTreatment";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

const SkinConcern = ({
  gadgets,
  products,
  slider,
  masks,
  introductionOne,
  introductionTwo,
  giftCards,
  specials,
}) => {
  const router = useRouter();

  const [activeIdx, setIsActiveIdx] = useState(0);

  console.log("active", activeIdx);

  useEffect(() => {
    if (router?.query) {
      let { title } = router?.query;
      switch (title) {
        case "pigmentation":
          setIsActiveIdx(0);
          break;
        case "acne-inflammation":
          setIsActiveIdx(1);
          break;
        case "redness-sensitivity":
          setIsActiveIdx(2);
          break;
        case "age-management":
          setIsActiveIdx(3);
          break;
        default:
          setIsActiveIdx(0);
      }
    }
  }, [router, activeIdx]);

  return (
    <LayoutOne title="skin concern" className="-style-1">
      {/* <HomeSlider data={slider} className="-style-1" showDots /> */}
      {/* <MainHero data={introductionOne} /> */}
      <div className="max-w-[752px] mx-auto mt-[40px] max-sm:mt-[16px]">
        <div className="container">
          <h2 className="text-[40px] font-semibold leading-[40px] max-sm:text-center max-sm:text-[24px] max-sm:leading-[24px]">
            Treatment menu
          </h2>
        </div>
      </div>
      <div className="mt-[40px] max-md:mt-[32px]">
        <SkinConcernTab title="Skin concerns" acIdx={activeIdx} />
      </div>
      {/* <div className="mt-[48px] max-sm:mt-[24px] max-w-[752px] mx-auto">
        <div className="container">
          <AccordionTreatment data={dataTreatment} filter={filter} />
        </div>
      </div> */}
    </LayoutOne>
  );
};

export async function getStaticProps() {
  return {
    props: {
      slider: sliderOne,
      introductionOne: introductionOne,
      introductionTwo: introductionTwo,
    },
  };
}

export default SkinConcern;
