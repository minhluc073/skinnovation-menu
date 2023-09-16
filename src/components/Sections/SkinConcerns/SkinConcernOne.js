import SkinConcernTab from "./SkinConcernTab";
import Link from "next/link";

export default function SkinConcernOne({ title, center, data }) {
  return (
    <div className="container">
      <h3
        className={`text-[#000] text-[32px] font-semibold leading-[40px] max-md:text-[18px] max-md:leading-[24px] ${
          center ? center : ""
        }`}
      >
        {title}
      </h3>
      <ul className="mt-[32px] grid grid-cols-2 max-sm:grid-cols-1 gap-[16px] max-md:mt-[16px] max-sm:gap-[8px]">
        {data?.slice(0, 4)?.map((item, idx) => (
          <li key={item.id}>
            <Link
              href={{
                pathname: "/skin-concern",
                query: {
                  id: idx, // pass the id
                },
              }}
            >
              <a className="concern-item flex items-center justify-between">
                <span className="relative z-[2] text-[18px] font-medium leading-6 max-sm:text-[16px] max-sm:font-normal">
                  {item.title}
                </span>
                <span
                  className={`${item.icon} relative z-[2] text-[32px] max-sm:text-[24px]`}
                ></span>
              </a>
            </Link>
            {/* <SkinConcernTab item={item} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
