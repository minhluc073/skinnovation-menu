import Link from "next/link";

export default function TreatmentType({ title, center, data }) {
  return (
    <div className="container">
      <h3
        className={`text-[#000] text-[32px] font-semibold leading-[40px] max-md:text-[18px] max-md:leading-[24px] ${
          center ? center : ""
        }`}
      >
        {title}
      </h3>
      <ul className="mt-[32px] grid grid-cols-5 gap-4 max-md:mt-[16px] max-sm:gap-[8px] max-md:grid-cols-2">
        {data?.slice(4, 9)?.map((item) => (
          <li key={item.id} className="max-md:last:col-[1_/_span_2]">
            <Link href="#">
              <a
                className="flex flex-col items-center justify-center gap-4 max-w-[176px] h-[176px] 
                rounded-[24px] border-2 border-solid border-light p-[30px] max-md:max-w-full max-md:h-auto max-sm:gap-3"
              >
                <img src={item.icon} alt="Skinnovation" />
                <span className="text-primary text-[18px] font-semibold leading-[16px] max-sm:text-[16px] text-center">
                  {item.title}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
