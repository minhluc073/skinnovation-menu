import { groq } from "next-sanity";

// getting a gift card product detail
export const getGiftCardDetailsBySlugQuery = groq`
*[_type == "product" && slug.current == $slug && hide != true][0]{
  "id":_id,
  "type": _type,
   name,
   details,
  "slug":slug.current,
   "category":category->name,
   description,
   details,
   price,
   promo,
   picture,
   "thumbImage": image.asset->url
} 
`;
