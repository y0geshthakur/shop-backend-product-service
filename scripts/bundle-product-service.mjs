import { build } from "esbuild";
import { rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, "../lambda/product-service");
const outDir = path.resolve(sourceDir, "dist");

rmSync(outDir, { recursive: true, force: true });

await build({
  entryPoints: [
    path.join(sourceDir, "getProductsList.mjs"),
    path.join(sourceDir, "getProductsById.mjs"),
  ],
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  outdir: outDir,
  sourcemap: false,
  minify: false,
  logLevel: "info",
});
