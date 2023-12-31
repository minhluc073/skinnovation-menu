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
import TreatmentTab from "../components/Sections/SkinConcerns/TreatmentTab";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

const TreatmentMenu = ({
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

  useEffect(() => {
    if (router?.query) {
      let { title } = router?.query;
      switch (title) {
        case "first-time":
          setIsActiveIdx(0);
          break;
        case "for-regulars":
          setIsActiveIdx(1);
          break;
        case "face":
          setIsActiveIdx(2);
          break;
        case "lashes":
          setIsActiveIdx(3);
          break;
        case "wedding-events":
          setIsActiveIdx(4);
          break;
        default:
          setIsActiveIdx(0);
      }
    }
  }, [router, activeIdx]);

  return (
    <LayoutOne title="treatment type" className="-style-1">
      <div className="max-w-[752px] mx-auto mt-[40px] max-sm:mt-[16px]">
        <div className="container">
          <h2 className="text-[40px] font-semibold leading-[40px] max-sm:text-center max-sm:text-[24px] max-sm:leading-[24px]">
            Treatment menu
          </h2>
        </div>
      </div>
      <div className="mt-[40px] max-md:mt-[32px]  max-w-[752px] mx-auto">
        <TreatmentTab title="Treatment type" acIdx={activeIdx} />
      </div>
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

export default TreatmentMenu;
