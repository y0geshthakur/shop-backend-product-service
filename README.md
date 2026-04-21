# Product Service (Backend)

Product Service for the shop application built with AWS CDK, API Gateway, and Lambda.

## Live Links

| Resource                  | URL                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------- |
| Frontend (CloudFront)     | https://d1w0cu0me25lu9.cloudfront.net                                                                    |
| Product Service API Base  | https://f6012m8ype.execute-api.us-east-1.amazonaws.com/dev                                               |
| GET /products             | https://f6012m8ype.execute-api.us-east-1.amazonaws.com/dev/products                                      |
| GET /products/{productId} | https://f6012m8ype.execute-api.us-east-1.amazonaws.com/dev/products/7567ec4b-b10c-48c5-9345-fc73c48a80aa |

## API Documentation

- OpenAPI file: [openapi.yaml](openapi.yaml)

## Useful Commands

- `npm run bundle:product-service` build Lambda artifacts with manual esbuild config
- `npm run build` compile TypeScript CDK sources
- `npm run test` run Jest tests for handlers and stack
- `npm run cdk -- deploy --require-approval never` deploy infrastructure
