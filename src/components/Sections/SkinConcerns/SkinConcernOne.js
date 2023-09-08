import Link from "next/link";

export default function SkinConcernOne({ title, center, data }) {
  console.log("hhh", data);
  return (
    <div className="container">
      <h3
        className={`text-[#000] text-[32px] font-semibold ${
          center ? center : ""
        }`}
      >
        {title}
        <span className="icon-face"></span>
      </h3>
      <ul className="mt-[32px]">
        {data.map((item) => (
          <li key={item.id}>
            <Link href="#">
              <a>
                {/* {item.title} */}
                {/* <span>{item.icon}</span> */}
              </a>
            </Link>
            <span></span>
            {item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
}
