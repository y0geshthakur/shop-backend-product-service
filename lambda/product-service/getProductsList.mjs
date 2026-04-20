import { products } from "./data/products.mjs";
import { createResponse } from "./utils/response.mjs";

export const handler = async () => {
  return createResponse(200, products);
};
