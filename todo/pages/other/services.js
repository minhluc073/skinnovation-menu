import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import CTAOne from "../../components/Sections/CallToAction/CTAOne";
import ServiceItem from "../../components/Pages/Services/ServiceItem";
import { formatSingleNumber } from "../../common/utils";
import servicesData from "../../data/pages/services.json";

export default function services() {
  return (
    <LayoutFour title="Services">
      <Breadcrumb title="Services">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Services" current />
      </Breadcrumb>
      {servicesData &&
        servicesData.map((item, index) => (
          <ServiceItem
            key={index}
            bigImgSrc={item.bigImgSrc}
            smallImgSrc={item.smallImgSrc}
            title={item.title}
            order={formatSingleNumber(index + 1)}
            reverse={index % 2 === 1}
          />
        ))}

      <CTAOne />
    </LayoutFour>
  );
}
