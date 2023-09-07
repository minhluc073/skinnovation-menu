import { getClient } from "./sanity";
import getCategoryQuery from "./queries/getCategoryQuery";
import { getSheetMasksQuery } from "./queries/getSheetMasksQuery";
import { getSheetMaskDetailQuery } from "./queries/getSheetMaskDetailQuery";
import { getProductQuery } from "./queries/getProductQuery";
import { getAllProductsQuery } from "./queries/getAllProductsQuery";
import { getAllGadgetsQuery } from "./queries/getAllGadgetsQuery";
import { getGadgetQuery } from "./queries/getGadgetQuery";
import getProductsByBrandQuery from "./queries/getProductsByBrandQuery";
import { getGiftCardsQuery } from "./queries/getGiftCardsQuery";
import { getGiftCardDetailsBySlugQuery } from "./queries/getGiftCardDetailsBySlugQuery";
import { getAllProductsById } from "./queries/getAllProductsById";

export async function getProductDetailsByIds(productIds, preview) {
  return await fetchUsingQuery(preview, getAllProductsById, {
    ids: productIds,
  });
}

export async function getGiftCards(preview) {
  return await fetchUsingQuery(preview, getGiftCardsQuery);
}

export async function getGiftCardDetail(slug, preview) {
  return await fetchUsingQuery(preview, getGiftCardDetailsBySlugQuery, {
    slug,
  });
}

export async function getSheetMasks(preview) {
  return await fetchUsingQuery(preview, getSheetMasksQuery);
}

export async function getSheetMaskDetail(slug, preview) {
  return await fetchUsingQuery(preview, getSheetMaskDetailQuery, { slug });
}

export async function getProductsFromCategory(preview, categoryId) {
  return await fetchUsingQuery(preview, getCategoryQuery(preview, categoryId));
}

export async function getProductsFromBrand(preview, brandId) {
  return await fetchUsingQuery(preview, getProductsByBrandQuery(brandId));
}

export async function getProducts(preview) {
  return await fetchUsingQuery(preview, getAllProductsQuery);
}

export async function getProduct(slug, preview) {
  return await fetchUsingQuery(preview, getProductQuery, { slug });
}

export async function getGadgets(preview) {
  return await fetchUsingQuery(preview, getAllGadgetsQuery);
}

export async function getGadget(slug, preview) {
  return await fetchUsingQuery(preview, getGadgetQuery, { slug });
}

async function fetchUsingQuery(preview, gqlQuery, params) {
  try {
    return await getClient(preview).fetch(gqlQuery, params);
  } catch (error) {
    console.error("Error fetching from Sanity: ", error.message);
    throw new Error(error.message);
  }
}
