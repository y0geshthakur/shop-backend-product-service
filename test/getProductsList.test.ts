describe("getProductsList", () => {
  test("returns full list of products", async () => {
    // pretest script builds handlers into lambda/product-service/dist
    const {
      handler,
    } = require("../lambda/product-service/dist/getProductsList.js");
    const response = await handler();
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty("id");
  });
});
