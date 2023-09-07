import { groq } from 'next-sanity';

export const getSpecialQuery = groq`
  *[slug.current == $slug && hide != true][0]{
  "id":_id,
  "type": _type,
   name,
   details,
  "slug":slug.current,
   "category":category->name,
   description,
   promo,
   picture,
   price,
   new,
   discount,
   "thumbImage": image.asset->url,
   travelsize
  }
 `;
