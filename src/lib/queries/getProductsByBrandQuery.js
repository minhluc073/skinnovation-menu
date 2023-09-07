import { groq } from "next-sanity";

export default function getProductsByBrandQuery(brandId) {
  return groq`
*[!(_id in path("drafts.**")) && (_type == 'product' || _type == 'gadget') && (!defined(hide) || hide != true) && (brand._ref == '${brandId}')] {
    "id":_id,
    "type": _type,
    "slug":slug.current,
    "category":category->name,
    "brand":brand->name,
    name,
    details,
    description,
    "thumbImage": image.asset->url,
    price,
    new,
    discount
}    
`;
}
