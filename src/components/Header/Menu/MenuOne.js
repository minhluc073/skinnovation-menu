import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";
import { renderContainer } from "../../../common/utils";
import MenuFunctionMobile from "../Elements/MenuFunctionMobile";

export default function MenuOne(props) {
  return (
    <div className="bg-white py-[18px] h-[104px] flex items-center max-xs:h-[80px]">
      <div className="container max-xs:pl-6 max-xs:pr-8">
        <div className="flex justify-between items-center relative">
          <Link href="/">
            <a>
              <img
                src="/assets/images/logo.png"
                alt="Skinnovation"
                className="w-[200px]"
              />
            </a>
          </Link>
          <Navigator />
          <MenuFunctionMobile />
          {/* <MenuFunctionIcons hide="search" {...props} /> */}
        </div>
      </div>
    </div>
  );
}
