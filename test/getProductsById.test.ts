const { handler } = require("../lambda/product-service/getProductsById");
const { products } = require("../lambda/product-service/data/products");

describe("getProductsById", () => {
  test("returns product by id", async () => {
    const target = products[0];
    const response = await handler({
      pathParameters: { productId: target.id },
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual(target);
  });

  test("returns 404 if product is not found", async () => {
    const response = await handler({
      pathParameters: { productId: "does-not-exist" },
    });

    expect(response.statusCode).toBe(404);
    expect(JSON.parse(response.body)).toEqual({ message: "Product not found" });
  });
});
