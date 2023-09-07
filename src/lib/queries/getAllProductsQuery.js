import { groq } from 'next-sanity';

export const getAllProductsQuery = groq`
  *[_type == 'product' && defined(slug.current) && hide != true && category._ref != "10f4d7d0-e6da-4497-962a-643a46342776" && category._ref != "1f3b07b8-656e-466a-a2d3-af808c00696a"
   && category._ref != "2f95bae5-3b47-4101-a016-f0e4455687f1"
   && category._ref != "463078f3-c14b-43f5-bcb4-e1a41451e5dd"
   && category._ref != "5c4e21da-ada7-411e-8bec-d311f7a68375"] | order(_createdAt desc) {
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
   "thumbImage": image.asset->url,
   travelsize
  }    
 `;
