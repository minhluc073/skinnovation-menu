import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import LayoutOne from "../../components/Layout/LayoutOne";
import ShopSpecials from "../../components/Shop/ShopSpecials";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
import ShopProducts from "../../components/Shop/ShopProducts";
import { getGiftCards, getProductsFromCategory } from "../../lib/api";

const SpecialsPage = ({ giftCards, specials }) => {
  return (
    <LayoutOne title="Our specials | Skinnovation" className="-style-1">
      <Breadcrumb title="Treatment Menu">
        <BreadcrumbItem name="Home" href="/" />
        <BreadcrumbItem name="Treatment Menu" current />
      </Breadcrumb>
      <div className="shop -five-col">
        <h1>New Menu goes here</h1>
      </div>
      <InstagramTwo />
    </LayoutOne>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default SpecialsPage;
