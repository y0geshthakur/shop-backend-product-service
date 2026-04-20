const { handler } = require("../lambda/product-service/getProductsList");
const { products } = require("../lambda/product-service/data/products");

describe("getProductsList", () => {
  test("returns full list of products", async () => {
    const response = await handler();

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual(products);
  });
});
