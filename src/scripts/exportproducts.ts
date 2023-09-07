#!/usr/bin/env ts-node-script
import dotenv from "dotenv";
import sanityClient from "@sanity/client";
import fs from "fs";

dotenv.config({
  path: "../../.env",
});

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const getAllGadgetsQuery = `
  *[_type == 'gadget' && (_id in path("drafts.**"))] {
    "id":_id,
    name,
    "category":category->name,
    "slug":slug.current,
    description,
    price,
    discount,
    rating,
    new,
    "thumbImage": thumbImage.asset->url,
    "images": pictures[].asset->url,
    "concerns": concerns[]->name,
    instructions,
    routine,
    faq,
    addons[]->{name, slug, price, "slug":slug.current},
    recommended[]->{name, slug, price, "slug":slug.current},
  }    
 `;

async function getProducts() {
  try {
    return await client.fetch(getAllGadgetsQuery);
  } catch (error) {
    console.error("Error fetching from Sanity: ", error.message);
    throw new Error(error.message);
  }
}

(async () => {
  try {
    const products = await getProducts();
    if (products) {
      fs.writeFile(
        "../../public/products.json",
        JSON.stringify(products),
        function (err) {
          if (err) return console.log(err);
          console.log("products json updated.");
        }
      );
    } else {
      console.error("no products returned.");
    }
  } catch (e) {
    console.log(JSON.stringify(e));
  }
})();
