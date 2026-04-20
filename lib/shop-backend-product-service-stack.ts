import * as cdk from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import * as path from "path";

export class ShopBackendProductServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const productServiceLambdaAssetPath = path.join(
      __dirname,
      "../lambda/product-service",
    );

    const getProductsList = new lambda.Function(this, "GetProductsListLambda", {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset(productServiceLambdaAssetPath),
      handler: "getProductsList.handler",
    });

    const getProductsById = new lambda.Function(this, "GetProductsByIdLambda", {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset(productServiceLambdaAssetPath),
      handler: "getProductsById.handler",
    });

    const api = new apigateway.RestApi(this, "ProductServiceApi", {
      restApiName: "Product Service API",
      deployOptions: {
        stageName: "dev",
      },
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: ["GET", "OPTIONS"],
      },
    });

    const products = api.root.addResource("products");
    products.addMethod(
      "GET",
      new apigateway.LambdaIntegration(getProductsList),
    );

    const productById = products.addResource("{productId}");
    productById.addMethod(
      "GET",
      new apigateway.LambdaIntegration(getProductsById),
    );

    new cdk.CfnOutput(this, "ProductServiceApiUrl", {
      value: api.url,
      description: "Product Service API base URL",
    });
  }
}
