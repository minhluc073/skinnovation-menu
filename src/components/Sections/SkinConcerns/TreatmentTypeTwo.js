import AccordionTreatment from "./AccordionTreatment";
import Link from "next/link";
import dataTreatment from "../../../data/treatment-menu/treatmentType.json";
import dataTreatmentAll from "../../../data/treatment-menu/treatmentTypeAll.json";
import { useState } from "react";
import Dropdown from "react-dropdown";

export default function TreatmentTypeTwo({ className }) {
  const [data, setData] = useState(dataTreatment);
  const [filter, setFilter] = useState("Popular");

  const [isShow, setShow] = useState(false);

  const _onSelect = (value) => {
    setFilter(value);
    if (value === "Popular") {
      setData(dataTreatment);
      setShow(!isShow);
    } else {
      setData(dataTreatmentAll);
      setShow(!isShow);
    }
  };

  const closePop = () => {
    setShow(!isShow);
  };

  return (
    <div className="container">
      <div className="relative text-center">
        <h3
          className="text-center text-[#000] text-[32px] font-semibold leading-[40px] max-md:text-[18px] max-md:leading-[24px] inline-flex items-center justify-center gap-[10px] cursor-pointer"
          onClick={() => setShow(!isShow)}
        >
          {filter} <i className="icon-down text-[#000]"></i>
        </h3>
        {isShow && (
          <>
            <ul className="absolute inset max-sm:hidden left-[50%] translate-x-[-50%] w-[368px] h-[200px] py-[40px] rounded-[40px] bg-white border-[1px] border-primary flex flex-col justify-between">
              <li
                onClick={() => _onSelect("Popular")}
                className="cursor-pointer text-[#D9D9D9] text-[24px] leading-[24px] font-semibold"
              >
                Popular
              </li>
              <li className="mt-[-10px] text-[#D9D9D9] cursor-pointer">
                . . . . . . . . .
              </li>
              <li
                onClick={() => _onSelect("All")}
                className="cursor-pointer text-primary text-[24px] leading-[24px] font-semibold"
              >
                All
              </li>
            </ul>
            <div
              className="hidden max-sm:block fixed top-0 left-0 right-0 h-[100vh] bg-[rgba(113,78,87,0.4)]"
              onClick={closePop}
            >
              {/* <div className="overlay"></div> */}
              <ul className="bg-white absolute bottom-0 left-0 right-0 h-[240px] rounded-t-[40px] text-center pt-[24px]">
                <li
                  className="font-semibold text-[14px] leading-[20px] tracking-[1.4px]"
                  onClick={closePop}
                >
                  SHOW
                </li>
                <li
                  onClick={() => _onSelect("Popular")}
                  className="mt-[40px] text-[#000] font-semibold text-[18px] leading-[24px]"
                >
                  Popular
                </li>
                <li
                  onClick={() => _onSelect("All")}
                  className="mt-[48px] text-[#D9D9D9] font-semibold text-[18px] leading-[24px]"
                >
                  All
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      <AccordionTreatment
        data={data}
        filter={filter}
        className={className}
        mt="32px"
      />
    </div>
  );
}
