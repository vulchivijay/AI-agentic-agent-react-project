import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import fs from "fs";

export function compareImages(original: string, rendered: string) {
  const img1 = PNG.sync.read(fs.readFileSync(original));
  const img2 = PNG.sync.read(fs.readFileSync(rendered));

  const { width, height } = img1;

  const diff = new PNG({ width, height });

  const mismatch = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 }
  );

  fs.writeFileSync("diff.png", PNG.sync.write(diff));

  return mismatch;
}