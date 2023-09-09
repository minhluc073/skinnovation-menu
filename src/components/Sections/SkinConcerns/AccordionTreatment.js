import Link from "next/link";
import { useState } from "react";
import { Collapse } from "react-collapse";

export default function AccordionTreatment({ data, className }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: null,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <div className={className}>
      {data?.map((faq) => (
        <div
          className={`${
            isActive.key === faq?.key
          } py-[24px] px-[32px] border-2 border-solid border-light mb-[16px] last:mb-0 rounded-[32px]`}
          key={faq?.key}
        >
          <div className="flex items-center justify-between">
            <div>
              <p>{faq?.title}</p>
            </div>
            <div className="flex gap-[8px] items-center">
              <a
                href="#"
                className="text-primary rounded-[24px] py-[8px] px-[16px] bg-light"
              >
                {faq?.tag}
              </a>
              <span
                className={`${
                  isActive.key === faq?.key ? "icon-up" : "icon-down"
                } cursor-pointer flex items-center justify-center text-[18px] w-[40px] h-[40px] bg-primary rounded-[100px] text-white`}
                onClick={() => handleToggle(faq?.key)}
              ></span>
            </div>
          </div>
          <Collapse isOpened={isActive.key === faq?.key}>
            <div className={`${isActive.key === faq?.key} accordion-collapse`}>
              <p>{faq?.content}</p>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
}
