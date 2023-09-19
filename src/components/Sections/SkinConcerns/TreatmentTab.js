import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataSkinconcern from "../../../data/treatment-menu/skinconcern.json";
import dataLashes from "../../../data/treatment-menu/dataTreatmentLashes.json";
import dataFirst from "../../../data/treatment-menu/dataTreatmentFirstTime.json";
import dataHydra from "../../../data/treatment-menu/dataTreatmentHydrafacial.json";
import dataDMK from "../../../data/treatment-menu/dataTreatmentDMK.json";
import dataTargeted from "../../../data/treatment-menu/dataTreatmentTargeted.json";
import dataMicrocurrent from "../../../data/treatment-menu/dataTreatmentMicrocurrent.json";
import dataSignature from "../../../data/treatment-menu/dataTreatmentSignature.json";
import dataDermaplaning from "../../../data/treatment-menu/dataTreatmentDermaplaning.json";
import dataBody from "../../../data/treatment-menu/dataTreatmentBody.json";
import dataTreatment from "../../../data/treatment-menu/treatmentType";

import AccordionTreatment from "../../../components/Sections/SkinConcerns/AccordionTreatment";
import { useEffect } from "react";
import { useRouter } from "next/router";

const contentTab = [
  {
    id: 1,
    title: "First timers",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataFirst,
  },
  {
    id: 2,
    title: "For regulars",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataTreatment,
  },
  {
    id: 3,
    title: "Face",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataTreatment,
  },
  {
    id: 4,
    title: "Lashes",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataLashes,
  },
  {
    id: 5,
    title: "Weddings & events",
    content:
      "Known for delivering immediate results for a variety of skin conditions — the LED HydraFacial is a must-try for",
    data: dataTreatment,
  },

];

export default function TreatmentTab({ title, acIdx }) {
  const router = useRouter();

  const [filter, setFilter] = useState("Popular");

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (acIdx) {
      setTabIndex(Number(acIdx));
    }
  }, [Number(acIdx)]);

  return (
    <>
      <div className="container">
        <h3
          className={`text-[#000] text-[32px] font-semibold leading-[40px] max-md:text-[18px] max-md:leading-[24px]`}
        >
          {title}
        </h3>
        <Tabs
          defaultIndex={tabIndex}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="mt-[24px] max-sm:mt-[16px]"
        >
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
            {dataSkinconcern.slice(4, 9)?.map((item, idx) => (
              <Tab
                key={item.id}
                className="text-[16px] px-[16px] leading-[24px] py-[8px] cursor-pointer bg-light rounded-[24px] text-primary"
                onClick={() => {
                  router.replace({
                    query: { ...router.query, title: item?.name },
                  });
                }}
              >
                {item.title}
              </Tab>
            ))}
          </TabList>

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
                  <AccordionTreatment data={item?.data} filter={filter} />
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
