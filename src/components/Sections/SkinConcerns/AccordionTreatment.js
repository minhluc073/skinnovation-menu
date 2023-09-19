import Link from "next/link";
import { useState } from "react";
import { Collapse } from "react-collapse";

export default function AccordionTreatment({ data, className, filter, mt }) {
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
    <>
      {filter === "Popular" && (
        <div className={className}>
          {data?.map((item) => (
            <div
              className={`${
                isActive.key === item?.key
              } py-[24px] px-[32px] border-2 border-solid border-light mb-[16px] last:mb-0 rounded-[32px]`}
              key={item?.key}
            >
              <div className="flex items-center justify-between res-unset">
                <div>
                  <p className="text-[20px] font-normal leading-[24px] mb-[8px] max-sm:text-[16px] max-sm:leading-[20px]">
                    {item?.title}
                  </p>
                  <p className="text-primary text-[18px] leading-[24px] font-semibold flex items-center gap-[4px] max-sm:text-[16px] max:sm:leading-[20px]">
                    {item?.price}
                    <span className="text-[#D9D9D9] mt-[-10px]">.</span>
                    {item?.time}
                  </p>
                </div>
                <div className="flex gap-[8px] items-center max-sm:flex-col-reverse max-sm:items-end max-sm:justify-between">
                  <a
                    href="#"
                    className="text-primary text-[13px] leading-[24px] tracking-[1.3px] font-semibold uppercase rounded-[24px] py-[8px] px-[16px] bg-light
              max-sm:py-[2px] max-sm:px-[8px] max-sm:text-[8px] max-sm:leading-[20px] max-sm:tracking-[0.8px]"
                  >
                    {item?.tag}
                  </a>
                  <span
                    className={`${
                      isActive.key === item?.key ? "icon-up" : "icon-down"
                    } cursor-pointer flex items-center justify-center text-[18px] w-[40px] h-[40px] bg-primary rounded-[100px] text-white
              max-sm:w-[24px] max-sm:h-[24px]  max-sm:text-[16px]`}
                    onClick={() => handleToggle(item?.key)}
                  ></span>
                </div>
              </div>
              <Collapse isOpened={isActive.key === item?.key}>
                <div
                  className={`${
                    isActive.key === item?.key
                  } pt-[24px] mt-[24px] border-t-[1px] border-dashed border-primary flex items-start gap-[16px] max-sm:flex-col max-sm:pt-[16px] max-sm:gap-[24px]`}
                >
                  <div>
                    <p className="mb-[24px] text-[14px] leading-[24px] text-[#000]">
                      {item?.content}
                    </p>
                    <Link href="#">
                      <a className="text-[16px] leading-[24px] mb-[40px] btn-treatment py-[8px] flex justify-center rounded-[8px] text-white max-sm:mb-[24px]">
                        Book Now
                      </a>
                    </Link>
                    <h5 className="text-[#000] font-semibold text-[16px] leading-[24px]">
                      Skin concerns
                    </h5>
                    <div className="flex mt-[16px] gap-[8px] flex-wrap">
                      <Link href="#">
                        <a className="text-[14px] leading-[24px]  py-[8px] pl-[17px] pr-[8px] rounded-[24px] text-primary bg-light flex gap-[10px] items-center">
                          Pigmentation
                          <i className="icon-icon1 text-[24px] text-primary"></i>
                        </a>
                      </Link>
                      <Link href="#">
                        <a className="text-[14px] leading-[24px]  py-[8px] pl-[17px] pr-[8px] rounded-[24px] text-primary bg-light flex gap-[10px] items-center">
                          Redness & Sensitivity
                          <i className="icon-icon3 text-[24px] text-primary"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="/assets/images/treatment/treat1.png"
                    className="max-sm:w-full"
                  />
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      )}
      {filter === "All" && (
        <div className="filter-all">
          {data?.map((i) => {
            return (
              <>
                <div
                  className="flex justify-between items-center btn-treatment mt-[32px] rounded-[32px] py-[16px] pl-[24px] pr-[16px] cursor-pointer mb-[16px]
                  max-sm:py-[8px] max-sm:pl-[17px] max-sm:pr-[8px] max-sm:mt-[8px]"
                >
                  <span className="text-white text-[18px] leading-[24px] font-medium max-sm:text-[16px]">
                    {i?.group}
                  </span>
                  <i className="icon-icon1 text-white text-[32px] max-sm:text-[24px]"></i>
                </div>

                {i?.data?.map((item) => (
                  <div
                    className={`${
                      isActive.key === item?.key
                    } py-[24px] px-[32px] border-2 border-solid border-light mb-[16px] last:mb-0 rounded-[32px]`}
                    key={item?.key}
                  >
                    <div className="flex items-center justify-between res-unset">
                      <div>
                        <p className="text-[20px] font-normal leading-[24px] mb-[8px] max-sm:text-[16px] max-sm:leading-[20px]">
                          {item?.title}
                        </p>
                        <p className="text-primary text-[18px] leading-[24px] font-semibold flex items-center gap-[4px] max-sm:text-[16px] max:sm:leading-[20px]">
                          {item?.price}
                          <span className="text-[#D9D9D9] mt-[-10px]">.</span>
                          {item?.time}
                        </p>
                      </div>
                      <div className="flex gap-[8px] items-center max-sm:flex-col-reverse max-sm:items-end max-sm:justify-between">
                        <a
                          href="#"
                          className="text-primary text-[13px] leading-[24px] tracking-[1.3px] font-semibold uppercase rounded-[24px] py-[8px] px-[16px] bg-light
                            max-sm:py-[2px] max-sm:px-[8px] max-sm:text-[8px] max-sm:leading-[20px] max-sm:tracking-[0.8px]"
                        >
                          {item?.tag}
                        </a>
                        <span
                          className={`${
                            isActive.key === item?.key ? "icon-up" : "icon-down"
                          } cursor-pointer flex items-center justify-center text-[18px] w-[40px] h-[40px] bg-primary rounded-[100px] text-white
                              max-sm:w-[24px] max-sm:h-[24px]  max-sm:text-[16px]`}
                          onClick={() => handleToggle(item?.key)}
                        ></span>
                      </div>
                    </div>
                    <Collapse isOpened={isActive.key === item?.key}>
                      <div
                        className={`${
                          isActive.key === item?.key
                        } pt-[24px] mt-[24px] border-t-[1px] border-dashed border-primary flex items-start gap-[16px] max-sm:flex-col max-sm:pt-[16px] max-sm:gap-[24px]`}
                      >
                        <div>
                          <p className="mb-[24px] text-[14px] leading-[24px] text-[#000]">
                            {item?.content}
                          </p>
                          <Link href="#">
                            <a className="text-[16px] leading-[24px] mb-[40px] btn-treatment py-[8px] flex justify-center rounded-[8px] text-white max-sm:mb-[24px]">
                              Book Now
                            </a>
                          </Link>
                          <h5 className="text-[#000] font-semibold text-[16px] leading-[24px]">
                            Skin concerns
                          </h5>
                          <div className="flex mt-[16px] gap-[8px] flex-wrap">
                            <Link href="#">
                              <a className="text-[14px] leading-[24px]  py-[8px] pl-[17px] pr-[8px] rounded-[24px] text-primary bg-light flex gap-[10px] items-center">
                                Pigmentation
                                <i className="icon-icon1 text-[24px] text-primary"></i>
                              </a>
                            </Link>
                            <Link href="#">
                              <a className="text-[14px] leading-[24px]  py-[8px] pl-[17px] pr-[8px] rounded-[24px] text-primary bg-light flex gap-[10px] items-center">
                                Redness & Sensitivity
                                <i className="icon-icon3 text-[24px] text-primary"></i>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <img
                          src="/assets/images/treatment/treat1.png"
                          className="max-sm:w-full"
                        />
                      </div>
                    </Collapse>
                  </div>
                ))}
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
