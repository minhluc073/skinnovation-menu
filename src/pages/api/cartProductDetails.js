import { getProductDetailsByIds } from "../../lib/api";

export default async function handler(req, res) {
  const { products } = req.query;
  if (!products) {
    return res.status(200).json([]);
  }
  const productIds = products.split("|");
  const productDetails = await getProductDetailsByIds(productIds, false);
  res.status(200).json(productDetails);
}
