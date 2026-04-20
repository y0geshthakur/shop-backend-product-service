describe("getProductsById", () => {
  test("returns product by id", async () => {
    // pretest script builds handlers into lambda/product-service/dist
    const {
      handler,
    } = require("../lambda/product-service/dist/getProductsById.js");
    const targetId = "7567ec4b-b10c-48c5-9345-fc73c48a80aa";
    const response = await handler({
      pathParameters: { productId: targetId },
    });
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(body.id).toBe(targetId);
  });

  test("returns 404 if product is not found", async () => {
    const {
      handler,
    } = require("../lambda/product-service/dist/getProductsById.js");
    const response = await handler({
      pathParameters: { productId: "does-not-exist" },
    });

    expect(response.statusCode).toBe(404);
    expect(JSON.parse(response.body)).toEqual({ message: "Product not found" });
  });
});
