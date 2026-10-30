import path from "node:path";
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const source = path.resolve("pics/pics");
const output = path.resolve("public/images/kc/home/factory-proof");
await mkdir(output, { recursive: true });

const images = [
  { input: "5th induction heating.JPG", name: "finished-system.webp", width: 1400 },
  { input: "kcinduction inside-overview.jpg", name: "open-cabinet.webp", width: 800, cropHeight: 1950 },
  { input: "kcinduction inside.jpg", name: "power-components.webp", width: 720, cropHeight: 1950 },
  { input: "kcinduction inside-2.jpg", name: "electrical-layout.webp", width: 720, cropHeight: 1950 },
  { input: "kcinduction inside-3 core board.jpg", name: "control-board.webp", width: 1000, cropHeight: 1050 },
];

for (const image of images) {
  const pipeline = sharp(path.join(source, image.input)).rotate();
  const metadata = await pipeline.metadata();
  if (image.cropHeight) {
    pipeline.extract({ left: 0, top: 0, width: metadata.width, height: image.cropHeight });
  }
  await pipeline
    .resize({ width: image.width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(path.join(output, image.name));
  console.log(image.name);
}
