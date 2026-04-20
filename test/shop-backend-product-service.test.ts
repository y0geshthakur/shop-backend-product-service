import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { ShopBackendProductServiceStack } from "../lib/shop-backend-product-service-stack";

describe("ShopBackendProductServiceStack", () => {
  test("creates two lambda functions and GET methods for products endpoints", () => {
    const app = new cdk.App();
    const stack = new ShopBackendProductServiceStack(app, "MyTestStack");
    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::Lambda::Function", 2);
    template.resourceCountIs("AWS::ApiGateway::Method", 5);
    template.hasResourceProperties("AWS::ApiGateway::Method", {
      HttpMethod: "GET",
    });
  });
});
