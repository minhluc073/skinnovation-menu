import Link from "next/link";
import classNames from "classnames";
import SectionTitleOne from "../Sections/SectionTitle/SectionTitleOne";

export default function ShopSidebarBrands({ categoryFilterTitle, brands }) {
  return (
    <div className="shop-sidebar">
      <div className="shop-sidebar__content">
        <div className="shop-sidebar__section -categories">
          <SectionTitleOne className="-medium" spaceBottom={30 / 16 + "em"}>
            {categoryFilterTitle}
          </SectionTitleOne>
          <ul>
            {brands.map((brand, index) => (
              <li
                key={index}
                className={classNames({
                  // active:
                  //   (item === "all" && !filterOptions.category) ||
                  //   item === filterOptions.category,
                })}
              >
                <Link
                  href={`${process.env.PUBLIC_URL}/${slugify(brand)}`}
                  key={index}
                >
                  {brand}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD") // separate accent from letter
    .replace(/[\u0300-\u036f]/g, "") // remove all separated accents
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/&/g, "-and-") // replace & with 'and'
    .replace(/[^\w\-]+/g, "") // remove all non-word chars
    .replace(/\-\-+/g, "-"); // replace multiple '-' with single '-'
}
