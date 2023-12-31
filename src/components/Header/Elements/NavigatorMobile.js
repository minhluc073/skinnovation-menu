import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import menuData from "../../../data/header/menu.json";

export default function NavigatorMobile() {
  const [dropdownItem, setDropdownItem] = useState();
  function renderMenu() {
    return menuData.map((item, index) => {
      if (item.title === "Home") {
        return (
          <li className="relative" key={index}>
            <Link href="#">
              <a
                onClick={() => {
                  if (dropdownItem === "home") {
                    setDropdownItem("");
                    return;
                  }
                  setDropdownItem("home");
                }}
              >
                {item.title}
                <span className="dropable-icon">
                  <i
                    className={`fas ${
                      dropdownItem === "home" ? "fa-angle-up" : "fa-angle-down"
                    }`}
                  ></i>
                </span>
              </a>
            </Link>
            <CSSTransition
              in={dropdownItem === "home"}
              unmountOnExit
              timeout={200}
              classNames="dropdown-menu-mobile"
            >
              {item.subMenu ? (
                <ul className="dropdown-menu">
                  {item.subMenu?.map((i, index) => (
                    <li key={index}>
                      <Link href={`${i.to}`}>
                        <a>{i.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </CSSTransition>
          </li>
        );
      }
      // if (item.title === "Shop") {
      //   return (
      //     <li key={index}>
      //       <Link href="#">
      //         <a
      //           onClick={() => {
      //             if (dropdownItem === "shop") {
      //               setDropdownItem("");
      //               return;
      //             }
      //             setDropdownItem("shop");
      //           }}
      //         >
      //           {item.title}
      //           <span className="dropable-icon">
      //             <i
      //               className={`fas ${
      //                 dropdownItem === "shop" ? "fa-angle-up" : "fa-angle-down"
      //               }`}
      //             ></i>
      //           </span>
      //         </a>
      //       </Link>
      //       <CSSTransition
      //         in={dropdownItem === "shop"}
      //         unmountOnExit
      //         timeout={200}
      //         classNames="dropdown-menu-mobile"
      //       >
      //         <ul className="dropdown-menu">
      //           <ul className="dropdown-menu__col">
      //             {item.subMenu.slice(0, 4).map((i, index) => (
      //               <li key={index}>
      //                 <Link href={`${i.to}`}>
      //                   <a>{i.title}</a>
      //                 </Link>
      //               </li>
      //             ))}
      //           </ul>
      //           <ul className="dropdown-menu__col">
      //             {item.subMenu.slice(4, 8).map((i, index) => (
      //               <li key={index}>
      //                 <Link href={`${i.to}`}>
      //                   <a>{i.title}</a>
      //                 </Link>
      //               </li>
      //             ))}
      //           </ul>
      //           <ul className="dropdown-menu__col">
      //             {item.subMenu.slice(8).map((i, index) => (
      //               <li key={index}>
      //                 <Link href={`${i.to}`}>
      //                   <a>{i.title}</a>
      //                 </Link>
      //               </li>
      //             ))}
      //           </ul>
      //           <ul className="dropdown-menu__col -banner">
      //             <Link href="/shop/fullwidth-4col">
      //               <a>
      //                 <img
      //                   src="/shop/assets/images/header/dropdown-menu-banner.png"
      //                   alt="New product banner"
      //                 />
      //               </a>
      //             </Link>
      //           </ul>
      //         </ul>
      //       </CSSTransition>
      //     </li>
      //   );
      // }
      return (
        // <li key={index}>
        //   <Link href={item.to}>
        //     <a>{item.title}</a>
        //   </Link>
        // </li>

        <li key={index} className="relative">
          <Link href={item.to}>
            <a className="text-[#000] text-xl font-semibold cursor-pointer no-underline duration-[0.2s] ease-in-out relative block overflow-hidden">
              {item.title}
            </a>
          </Link>
          {item.subMenu ? (
            <ul className="dropdown-menu">
              {item.subMenu?.map((i, index) => (
                <li key={index}>
                  <Link href={i.to}>
                    <a>{i.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      );
    });
  }
  return (
    <div className="navigator-mobile">
      <ul>{renderMenu()}</ul>
    </div>
  );
}
