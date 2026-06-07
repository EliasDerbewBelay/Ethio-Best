import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "../public/panoramas");

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".jpg") && !f.includes("-opt"));

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace(".jpg", "-opt.jpg"));
  await sharp(input)
    .resize(2560, 1280, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 72, mozjpeg: true })
    .toFile(output);
  const inSize = fs.statSync(input).size;
  const outSize = fs.statSync(output).size;
  console.log(`${file}: ${(inSize / 1024 / 1024).toFixed(2)}MB → ${(outSize / 1024 / 1024).toFixed(2)}MB`);
}
