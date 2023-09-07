import { groq } from 'next-sanity';


export const getSheetMaskDetailQuery = groq`
 *[_type == "mask" && hide != true && slug.current == $slug][0]{
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
   recommended[]->{name, slug, price, "thumbImage": thumbImage.asset->url, "slug":slug.current},
 } 
 `;