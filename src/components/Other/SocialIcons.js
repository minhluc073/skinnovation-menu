import classNames from "classnames";

export default function SocialIcons({ className, colored }) {
  return (
    <ul className={`${classNames(className)}`}>
      <li>
        <a
          // style={{ color: colored && "#2463ac" }}
          href="https://www.facebook.com/skinnovation.care"
          className="w-[2.8125em] h-[2.8125em] leading-[2.8125em] rounded-[999px] border-[1px] border-[#e1e1e1] 
          text-center text-[14px] inline-block cursor-pointer duration-[0.2s] ease-in-out text-black  hover:bg-[#744955] hover:text-white hover:border-[transparent]"
        >
          <i className="fab fa-facebook-f" />
        </a>
      </li>
      <li>
        <a
          // style={{ color: colored && "#dd34c1" }}
          href="https://www.instagram.com/skinnovation.care/"
          className="w-[2.8125em] h-[2.8125em] leading-[2.8125em] rounded-[999px] border-[1px] border-[#e1e1e1] 
          text-center text-[14px] inline-block cursor-pointer duration-[0.2s] ease-in-out text-black hover:bg-[#744955] hover:text-white hover:border-[transparent]"
        >
          <i className="fab fa-instagram" />
        </a>
      </li>
      {/* <li>
        <a
          style={{ color: colored && "#ff081c" }}
          href="https://www.youtube.com/"
        >
          <i className="fab fa-youtube" />
        </a>
      </li> */}
    </ul>
  );
}
