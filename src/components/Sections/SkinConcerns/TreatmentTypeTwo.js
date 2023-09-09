import AccordionTreatment from "./AccordionTreatment";
import Link from "next/link";

export default function TreatmentTypeTwo({ data }) {
  return (
    <div className="container">
      <h3 className="text-center text-[#000] text-[32px] font-semibold leading-[40px] max-md:text-[18px] max-md:leading-[24px]">
        Popular
      </h3>
      <div className="mt-[32px]">
        <AccordionTreatment data={data} />
      </div>
    </div>
  );
}
