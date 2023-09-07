import { groq } from 'next-sanity';


export const getGadgetQuery = groq`
 *[_type == "gadget" && hide != true && slug.current == $slug][0]{
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
 } 
 `;