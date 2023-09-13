import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import menuTab from "../../../data/treatment-menu/skintreatmentTab.json";
import dataLashes from "../../../data/treatment-menu/dataTreatmentLashes.json";
import dataFirst from "../../../data/treatment-menu/dataTreatmentFirstTime.json";
import dataHydra from "../../../data/treatment-menu/dataTreatmentHydrafacial.json";
import dataDMK from "../../../data/treatment-menu/dataTreatmentDMK.json";
import dataTargeted from "../../../data/treatment-menu/dataTreatmentTargeted.json";
import dataMicrocurrent from "../../../data/treatment-menu/dataTreatmentMicrocurrent.json";
import dataSignature from "../../../data/treatment-menu/dataTreatmentSignature.json";
import dataDermaplaning from "../../../data/treatment-menu/dataTreatmentDermaplaning.json";
import dataBody from "../../../data/treatment-menu/dataTreatmentBody.json";

import AccordionTreatment from "../../../components/Sections/SkinConcerns/AccordionTreatment";

// const menuTab = [
//   {
//     id: 1,
//     title: "Face",
//   },
//   {
//     id: 2,
//     title: "First timers",
//   },
//   {
//     id: 3,
//     title: "Lashes",
//   },
//   {
//     id: 4,
//     title: "For regulars",
//   },
//   {
//     id: 5,
//     title: "Weddings & events",
//   },
// ];

const contentTab = [
  {
    id: 1,
    title: "Lashes",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataLashes,
  },
  {
    id: 2,
    title: "First timers",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataFirst,
  },
  {
    id: 3,
    title: "Hydrafacial",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataHydra,
  },
  {
    id: 4,
    title: "DMK",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataDMK,
  },
  {
    id: 5,
    title: "Targeted special",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataTargeted,
  },
  {
    id: 6,
    title: "Dermaplaning",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataDermaplaning,
  },
  {
    id: 7,
    title: "Microcurrent facial",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataMicrocurrent,
  },
  {
    id: 8,
    title: "Signature",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataSignature,
  },
  {
    id: 9,
    title: "Body treatments",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataBody,
  },
];

export default function TreatmentTab({ title }) {
  return (
    <>
      <div className="container">
        <h3
          className={`text-[#000] text-[32px] font-semibold leading-[40px] max-md:text-[18px] max-md:leading-[24px]`}
        >
          {title}
        </h3>
        <Tabs className="mt-[24px] max-sm:mt-[16px]">
          <TabList className="flex items-center gap-[8px] flex-wrap max-xs:mr-[-20px]">
            <li>
              <a
                href="/"
                className="btn-treatment py-[8px] px-[17px] inline-flex items-center gap-[4px]  rounded-[24px] max-sm:w-[40px] max-sm:h-[40px] max-sm:p-0 max-sm:justify-center max-sm:rounded-[50%]"
              >
                <i className="icon-left text-white text-[18px]"></i>
                <span className="text-[16px] text-white leading-[24px] max-sm:text-[0px]">
                  Go back
                </span>
              </a>
            </li>
            {menuTab?.map((item) => (
              <Tab
                key={item.id}
                className="text-[16px] px-[16px] leading-[24px] py-[8px] cursor-pointer bg-light rounded-[24px] text-primary"
              >
                {item.title}
              </Tab>
            ))}
            {/* <Tab className="text-[16px] px-[16px] leading-[24px] py-[8px] cursor-pointer bg-light rounded-[24px] text-primary">
              Face
            </Tab>
            <Tab className="text-[16px] px-[16px] leading-[24px] py-[8px] cursor-pointer bg-light rounded-[24px] text-primary">
              First timers
            </Tab>
            <Tab className="text-[16px] px-[16px] leading-[24px] py-[8px] cursor-pointer bg-light rounded-[24px] text-primary">
              Lashes
            </Tab>
            <Tab className="text-[16px] px-[16px] leading-[24px] py-[8px] cursor-pointer bg-light rounded-[24px] text-primary">
              For regulars
            </Tab>
            <Tab className="text-[16px] px-[16px] leading-[24px] py-[8px] cursor-pointer bg-light rounded-[24px] text-primary">
              Weddings & events
            </Tab> */}
          </TabList>
          {/* <div className="mt-[48px] max-sm:mt-[32px]">
            <TabPanel>
              <h5 className="mb-[16px] text-[#000] text-[24px] leading-[24px]">
                Face
              </h5>
              <p className="text-[16px] leading-[24px] text-[#000]">
                Known for delivering immediate results for a variety of skin
                conditions — the LED HydraFacial is a must-try for
              </p>
            </TabPanel>
            <TabPanel>
              <h5 className="mb-[16px] text-[#000] text-[24px] leading-[24px]">
                Face
              </h5>
              <p className="text-[16px] leading-[24px] text-[#000]">
                Known for delivering immediate results for a variety of skin
                conditions — the LED HydraFacial is a must-try for
              </p>
            </TabPanel>
            <TabPanel>
              <h5 className="mb-[16px] text-[#000] text-[24px] leading-[24px]">
                First timers
              </h5>
              <p className="text-[16px] leading-[24px] text-[#000]">
                Known for delivering immediate results for a variety of skin
                conditions — the LED HydraFacial is a must-try for
              </p>
            </TabPanel>
            <TabPanel>
              <h5 className="mb-[16px] text-[#000] text-[24px] leading-[24px]">
                Lashes
              </h5>
              <p className="text-[16px] leading-[24px] text-[#000]">
                Known for delivering immediate results for a variety of skin
                conditions — the LED HydraFacial is a must-try for
              </p>
            </TabPanel>
            <TabPanel>
              <h5 className="mb-[16px] text-[#000] text-[24px] leading-[24px]">
                For regulars
              </h5>
              <p className="text-[16px] leading-[24px] text-[#000]">
                Known for delivering immediate results for a variety of skin
                conditions — the LED HydraFacial is a must-try for
              </p>
            </TabPanel>
            <TabPanel>
              <h5 className="mb-[16px] text-[#000] text-[24px] leading-[24px]">
                Weddings & events
              </h5>
              <p className="text-[16px] leading-[24px] text-[#000]">
                Known for delivering immediate results for a variety of skin
                conditions — the LED HydraFacial is a must-try for
              </p>
            </TabPanel>
          </div> */}
          <div className="mt-[48px] max-sm:mt-[32px]">
            {contentTab?.map((item) => (
              <TabPanel>
                <h5 className="mb-[16px] text-[#000] text-[24px] leading-[24px]">
                  {item.title}
                </h5>
                <p className="text-[16px] leading-[24px] text-[#000]">
                  {item.content}
                </p>
                <div className="mt-[48px] max-sm:mt-[24px] max-w-[752px] mx-auto">
                  <AccordionTreatment data={item?.data} filter={"Popular"} />
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
      <div className="max-w-[950px] mx-auto pl-[6rem] wrap-slick-concern mt-[24px] max-lg:max-w-[752px] max-lg:pl-[24px] max-xs:mt-[16px]"></div>
    </>
  );
}
