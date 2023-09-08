import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import Slider from "react-slick";

export default function TreatmentSlider({ className }) {
  return (
    <div className="flex items-center relative z-10 h-[280px] max-md:hidden">
      <div className="container">
        <div className="absolute inset-0 z-[-1]">
          <img
            src={"/assets/images/treatment/banner.png"}
            alt="Logo"
            className="w-full h-full"
          />
        </div>
        <h2 className="text-center text-[64px] font-normal leading-[80px] text-white">
          Treatment menu
        </h2>
      </div>
    </div>
  );
}
