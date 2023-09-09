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
          className={`${isActive.key === faq?.key} accordion-item`}
          key={faq?.key}
        >
          <div className="accordion-header">
            {faq?.title}

            <span
              className={isActive.key === faq?.key ? "icon-up" : "icon-down"}
              onClick={() => handleToggle(faq?.key)}
            ></span>
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
