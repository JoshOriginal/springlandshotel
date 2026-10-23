import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { imageManifest } from "../src/data/imageManifest.js";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(projectRoot, "public", "images", "optimized");
const selectedImages = imageManifest.filter((image) => image.selectedFor.length > 0);
const widths = [640, 1200, 1920];

await mkdir(outputDirectory, { recursive: true });

for (const image of selectedImages) {
  const sourcePath = resolve(projectRoot, image.originalPath);
  const basename = image.filename.replace(/\.[^.]+$/, "");
  const metadata = await sharp(sourcePath).metadata();
  const outputWidths = widths.filter((width) => metadata.width && width < metadata.width);
  if (metadata.width && metadata.width <= widths.at(-1)) {
    outputWidths.push(metadata.width);
  }

  for (const width of outputWidths) {
    const destinationPath = resolve(outputDirectory, `${basename}-${width}.webp`);
    await sharp(sourcePath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .sharpen({ sigma: 0.35 })
      .webp({ quality: 84, effort: 5 })
      .toFile(destinationPath);
    console.log(`${image.filename} -> public/images/optimized/${basename}-${width}.webp`);
  }
}

console.log(`Optimized ${selectedImages.length} selected source images.`);
