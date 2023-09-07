import { groq } from 'next-sanity';

export const getProductQuery = groq`
*[_type == "product" && slug.current == $slug && hide != true][0]{
  "id":_id,
  "type": _type,
   name,
   details,
  "slug":slug.current,
   "category":category->name,
   "brand":brand->name,
   description,
   details,
   price,
   promo,
   picture,
   "thumbImage": image.asset->url,
   travelsize
} 
`;