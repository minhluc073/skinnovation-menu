import { groq } from 'next-sanity';

export const getAllGadgetsQuery = groq`
  *[_type == 'gadget' && defined(slug.current) && hide != true && (category._ref != "10f4d7d0-e6da-4497-962a-643a46342776")] | order(_createdAt desc) {
    "id":_id,
    "type": _type,
    name,
    "category":category->name,
    "slug":slug.current,
    description,
    price,
    discount,
    rating,
    new,
    introVideo,
    "introVideoPoster": introVideoPoster.asset->url,
    highlights,
    "thumbImage": thumbImage.asset->url,
    "images": pictures[].asset->url,
    "concerns": concerns[]->{name, description,"icon": icon.asset->url},
    instructions,
    routine,
    routineDescription,
    faq,
    addons[]->{name, slug, price, "slug":slug.current},
    recommended[]->{name, slug, price, "slug":slug.current},
    _createdAt
  }    
 `;
