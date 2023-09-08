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
import dataSkinconcern from "../data/treatment-menu/skinconcerns.js";
import TreatmentSlider from "../components/Sections/Slider/TreatmentSlider";
import SkinConcernOne from "../components/Sections/SkinConcerns/SkinConcernOne";

const Home = ({
  gadgets,
  products,
  slider,
  masks,
  introductionOne,
  introductionTwo,
  giftCards,
  specials,
}) => {
  return (
    <LayoutOne title="Home" className="-style-1">
      {/* <HomeSlider data={slider} className="-style-1" showDots /> */}
      {/* <MainHero data={introductionOne} /> */}
      <TreatmentSlider />
      <div className="mt-[16px] hidden max-[768px]:block">
        <div className="container">
          <h2 className="text-center text-[24px] font-semibold leading-[24px]">
            Treatment menu
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[80px] max-[768]:mt-[32px]">
        <SkinConcernOne
          center="text-center"
          title="Skin concerns"
          data={dataSkinconcern}
        />
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

export default Home;
