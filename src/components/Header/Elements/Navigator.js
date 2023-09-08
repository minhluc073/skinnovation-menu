import Link from "next/link";
import classNames from "classnames";

import menuData from "../../../data/header/menu.json";

export default function Navigator({ disableSubmenu, className }) {
  function renderMenu() {
    return menuData.map((item, index) => {
      if (item.title === "Home") {
        return (
          <li className="relative" key={index}>
            <Link href={item.to}>
              <a>
                {item.title}
                <span className="dropable-icon">
                  <i className="fas fa-angle-down"></i>
                </span>
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
      }
      // if (item.title === "Shop") {
      //   return (
      //     <li key={index}>
      //       <Link href={item.to}>
      //         <a>
      //           {item.title}
      //           <span className="dropable-icon">
      //             <i className="fas fa-angle-down"></i>
      //           </span>
      //         </a>
      //       </Link>
      //       {item.subMenu ? (
      //         <ul className="dropdown-menu -wide">
      //           <ul className="dropdown-menu__col">
      //             {item.subMenu.slice(0, 4)?.map((i, index) => (
      //               <li key={index}>
      //                 <Link href={i.to}>
      //                   <a>{i.title}</a>
      //                 </Link>
      //               </li>
      //             ))}
      //           </ul>
      //           <ul className="dropdown-menu__col">
      //             {item.subMenu.slice(4, 8)?.map((i, index) => (
      //               <li key={index}>
      //                 <Link href={i.to}>
      //                   <a>{i.title}</a>
      //                 </Link>
      //               </li>
      //             ))}
      //           </ul>
      //           <ul className="dropdown-menu__col">
      //             {item.subMenu?.slice(8)?.map((i, index) => (
      //               <li key={index}>
      //                 <Link href={i.to}>
      //                   <a>{i.title}</a>
      //                 </Link>
      //               </li>
      //             ))}
      //           </ul>
      //           <ul className="dropdown-menu__col -banner">
      //             <Link href={"/shop/fullwidth-4col"}>
      //               <a>
      //                 <img
      //                   src={
      //                     "/shop/assets/images/header/dropdown-menu-banner.png"
      //                   }
      //                   alt="New product banner"
      //                 />
      //               </a>
      //             </Link>
      //           </ul>
      //         </ul>
      //       ) : null}
      //     </li>
      //   );
      // }
      return (
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
  if (disableSubmenu) {
    return (
      <div className={`navigator -off-submenu ${classNames(className)}`}>
        <ul>
          {menuData.map((item, index) => (
            <li key={index}>
              <Link href={item.to}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={`navigator ${classNames(className)} max-mb:hidden`}>
      <ul className="list-none flex items-center gap-6">{renderMenu()}</ul>
    </div>
  );
}
