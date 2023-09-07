import { groq } from "next-sanity";

export const getAllProductsById = groq`
  *[_id in $ids] {
  "id":_id,
  "type": _type,
   name,
  "slug":slug.current,
   "category":category->name,
   "brand":brand->name,
   description,
   price,
   promo,
   picture,
   "thumbImage": coalesce(image.asset->url, thumbImage.asset->url), 
   travelsize
  }    
 `;
