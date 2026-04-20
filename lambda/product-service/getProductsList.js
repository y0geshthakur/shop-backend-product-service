const { products } = require("./data/products");
const { createResponse } = require("./utils/response");

exports.handler = async () => {
  return createResponse(200, products);
};
