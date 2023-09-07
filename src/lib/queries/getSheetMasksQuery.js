import { groq } from 'next-sanity';

export const getSheetMasksQuery = groq`
  *[_type == 'mask' && defined(slug.current) && hide != true && (category._ref != "10f4d7d0-e6da-4497-962a-643a46342776")] {
    "id":_id,
    "type": _type,
    name,
    "category":category->name,
    "slug":slug.current,
    description,
    price,
    discount,
    bundlePricing,
    new,
    highlights,
    "thumbImage": thumbImage.asset->url,
    "concerns": concerns[]->{name, description,"icon": icon.asset->url},
    instructions,
    highlights,
    ingredients,
    faq,
    addons[]->{name, slug, price, "slug":slug.current},
    recommended[]->{name, slug, price, "slug":slug.current}
  }
 `;
