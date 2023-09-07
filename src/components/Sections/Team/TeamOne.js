import React from "react";
import Slider from "react-slick";
import Button from "../../Control/Button";
import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import TeamCard from "./Elements/TeamCard";

export default function TeamOne({ title, data, showSocial }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
    <div className="team-one">
      <div className="container">
        {title && (
          <SectionTitleOne
            align="center"
            spaceBottom="1.875em"
            description="Our aestheticians standby and happy to answer any questions"
          >
            {title}
          </SectionTitleOne>
        )}
        <Slider {...settings}>
          {data.map((user, index) => (
            <div key={index} className="slider__item">
              <TeamCard data={user} showSocial={showSocial} />
            </div>
          ))}
        </Slider>
        <Button color="white" content="Book virtual consultation" action="https://calendly.com/c/FEFR65G3PV3IT7DY" />
      </div>
    </div>
  );
}
