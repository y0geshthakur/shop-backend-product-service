const { products } = require("./data/products");
const { createResponse } = require("./utils/response");

exports.handler = async (event) => {
  const productId = event.pathParameters?.productId;
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return createResponse(404, { message: "Product not found" });
  }

  return createResponse(200, product);
};
