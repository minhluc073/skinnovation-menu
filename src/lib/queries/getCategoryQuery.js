import { groq } from "next-sanity";

export default function getCategoryQuery(preview, categoryId) {
  return groq`
*[!(_id in path("drafts.**")) && (_type == 'product' || _type == 'gadget') && defined(slug.current) && (!defined(hide) || hide != true) && (category._ref == '${categoryId}')] {
    "id":_id,
    "type": _type,
    "slug":slug.current,
    "category":category->name,
    name,
    details,
    description,
    "thumbImage": image.asset->url,
    price,
    new,
    discount,
    promo
}    
`;
}
