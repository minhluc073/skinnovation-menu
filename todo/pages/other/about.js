import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import IntroductionOne from "../../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../../data/introduction/introductionOne.json";
import IntroductionTwo from "../../components/Sections/Introduction/IntroductionTwo";
import introductionTwoData from "../../data/pages/about.json";
import TestimonialOne from "../../components/Sections/Testimonial/TestimonialOne";
import testimonialOneData from "../../data/testimonial/data.json";
import Benefits from "../../components/Other/Benefits";
import IntroductionNine from "../../components/Sections/Introduction/IntroductionNine";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
import ConnectionInstance from '@services/connection-instance';

const AboutUs = ({ testimonialOne, introductionOne, introductionTwo }) => {
  return (
    <LayoutFour title="About us">
      <Breadcrumb title="About us">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="About us" current />
      </Breadcrumb>
      <IntroductionOne data={introductionOne} />
      <IntroductionTwo data={introductionTwo} style={{ marginBottom: 0 }} />
      <TestimonialOne data={testimonialOne} style={{ backgroundColor: '#fff', marginBottom: 0 }} />
      <IntroductionNine />
      <Benefits />
      <InstagramTwo />
    </LayoutFour>
  );
};

export async function getStaticProps(context) {
  const testimonialOne = await ConnectionInstance.get('testimonial-one');
  const introductionOneRes = await ConnectionInstance.get('introduction-one');
  const introductionTwoRes = await ConnectionInstance.get('introduction-two');

  return {
    props: {
      testimonialOne: testimonialOne.data,
      introductionOne: introductionOneRes.data,
      introductionTwo: introductionTwoRes.data,
    },
  };
}

export default AboutUs;
