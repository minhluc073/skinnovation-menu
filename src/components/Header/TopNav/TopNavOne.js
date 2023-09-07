import Link from "next/link";
import SocialIcons from "../../Other/SocialIcons";
import { renderContainer } from "../../../common/utils";

export default function TopNavOne({ container }) {
  return (
    <div className="bg-black py-[8px] max-[992px]:hidden">
      <div className={renderContainer(container)}>
        <div className="flex items-center justify-center">
          {/* <SocialIcons className="-white" /> */}
          <Link href="/meder">
            <a className="text-[15px] leading-6 text-white font-normal">
              Explore our new skincare products from Meder Skincare!
            </a>
          </Link>
          {/* <Link href="/specials">
            <a className="top-nav__wrapper__promo">
              New specials, just in time for the holidays!
            </a>
          </Link> */}
          <div className="top-nav__wrapper__selectors"></div>
        </div>
      </div>
    </div>
  );
}
