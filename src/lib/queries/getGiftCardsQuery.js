import { groq } from 'next-sanity';

// getting products by "Gift Cards" category
export const getGiftCardsQuery = groq`
  *[_type == 'product' && defined(slug.current) && hide != true && (category._ref == "5c4e21da-ada7-411e-8bec-d311f7a68375")] {
    "id":_id,
    "type": _type,
    name,
    "slug":slug.current,
    "category":category->name,
    description,
    price,
    promo,
    picture,
    "thumbImage": image.asset->url
  }
 `;
